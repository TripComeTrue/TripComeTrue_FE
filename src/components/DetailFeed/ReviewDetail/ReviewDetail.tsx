import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { Avatar, Text } from '@/components/common';
import * as Styled from './ReviewDetail.styles';
import FormattedDate from '@/utils/formattedDate';
import LikeIcon from '/images/like.svg';
import CommentIcon from '/images/comment.svg';
import { deleteLike, postLike } from '@/apis/place';
import { ReviewDetailProps } from './ReviewDetail.types';

const ReviewDetail = ({
  placeReviewData,
  commentClickHandler,
  placeReviewRefetch,
}: ReviewDetailProps) => {
  const { mutate: deleteLikeMutate } = useMutation({
    mutationFn: (placeReviewId: number) => deleteLike(placeReviewId),
    onSuccess: () => placeReviewRefetch(),
    onError: (error) => {
      if (isAxiosError(error))
        if (error.response?.status === 404)
          toast.error(error.response.data?.errorMessage, {
            position: 'top-center',
            autoClose: 5000,
          });
    },
  });
  const { mutate: postLikeMutate } = useMutation({
    mutationFn: (placeReviewId: number) => postLike(placeReviewId),
    onSuccess: () => placeReviewRefetch(),
    onError: (error) => {
      if (isAxiosError(error))
        if (error.response?.status === 409)
          toast.error(error.response.data?.errorMessage, {
            position: 'top-center',
            autoClose: 5000,
          });
    },
  });

  const onClickLikeButton = (amILike: boolean, id: number): void => {
    if (amILike) return deleteLikeMutate(id);

    return postLikeMutate(id);
  };

  return (
    <Styled.ReviewContainer>
      <Styled.ReviewInfo>
        <Styled.Creator>
          <Avatar src={placeReviewData.profileUrl} size={32} />
          <Text fontWeight={700}>{placeReviewData.nickname}</Text>
        </Styled.Creator>
        <Text fontSize={10} fontWeight={700}>
          {FormattedDate(placeReviewData?.createdAt || '')}
        </Text>
      </Styled.ReviewInfo>
      <div>
        <Styled.ReviewImage src={placeReviewData.imageUrl} alt="리뷰" />
        <Text>{placeReviewData.content}</Text>
      </div>
      <Styled.InteractionButtons>
        <Styled.LikeButton
          onClick={() =>
            onClickLikeButton(
              placeReviewData.amILike,
              placeReviewData.placeReviewId,
            )
          }>
          <img src={LikeIcon} alt="like icon" />
          <Text fontSize={12} fontWeight={700} color="gray">
            {placeReviewData.likeCount}
          </Text>
        </Styled.LikeButton>
        <Styled.CommentButton onClick={commentClickHandler}>
          <img src={CommentIcon} alt="comment icon" />
          <Text fontSize={12} fontWeight={700} color="gray">
            {placeReviewData.commentCount
              ? placeReviewData.commentCount
              : '댓글 달기'}
          </Text>
        </Styled.CommentButton>
      </Styled.InteractionButtons>
    </Styled.ReviewContainer>
  );
};

export default ReviewDetail;
