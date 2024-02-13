import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, KeyboardEvent, Suspense, useRef, useState } from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import * as Styled from './ReviewComment.styles';
import BackArrow from '@/assets/back-arrow.svg';
import WriteIcon from '/images/write.svg';
import { Bubble, RetryErrorBoundary } from '@/components/common';
import { postPlaceReviewComment, postPlaceReviewReply } from '@/apis/place';
import ReviewCommentSkeleton from './ReviewCommentSkeleton';
import { ReviewCommentMain } from '@/components/DetailFeed';

const ReviewComment = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [comment, setComment] = useState('');
  const [isComment, setIsComment] = useState(true);
  const [commentId, setCommentId] = useState(0);
  const [placeReviewRefetch, setPlaceReviewRefetch] =
    useState<VoidFunction | null>(null);
  const { placeId, reviewId } = useParams() as {
    placeId: string;
    reviewId: string;
  };

  const { mutate: postCommentMutate } = useMutation({
    mutationFn: ({ content }: { content: string }) =>
      postPlaceReviewComment(reviewId, { content }),
    onSuccess: () => {
      placeReviewRefetch?.();
      setComment('');
    },
    onError: (error) => {
      if (isAxiosError(error))
        if (error.response?.status === 404 || error.response?.status === 400)
          toast.error(error.response.data?.errorMessage, {
            position: 'top-center',
            autoClose: 5000,
          });
    },
  });
  const { mutate: postReplyMutate } = useMutation({
    mutationFn: ({
      placeReviewCommentId,
      content,
    }: {
      placeReviewCommentId: number;
      content: string;
    }) => postPlaceReviewReply(placeReviewCommentId, { content }),
    onSuccess: () => {
      placeReviewRefetch?.();
      setComment('');
      setIsComment(true);
    },
    onError: (error) => {
      if (isAxiosError(error))
        if (error.response?.status === 404 || error.response?.status === 400)
          toast.error(error.response.data?.errorMessage, {
            position: 'top-center',
            autoClose: 5000,
          });
    },
  });

  const onChangeComment = (event: ChangeEvent<HTMLInputElement>): void => {
    setComment(event.target.value);
  };

  const onClickComment = (): void => {
    setIsComment(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onClickReply = (id: number): void => {
    setIsComment(false);
    setCommentId(id);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onKeyDownEnter = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      if (isComment) {
        postCommentMutate({ content: comment });
      } else
        postReplyMutate({
          placeReviewCommentId: commentId,
          content: comment,
        });
    }
  };

  return (
    <div>
      <Styled.NavWrap>
        <Styled.NavBackBtn onClick={() => navigate(-1)}>
          <img src={BackArrow} alt="뒤로가기" />
        </Styled.NavBackBtn>
        <Styled.NavTitle>리뷰</Styled.NavTitle>
        <Styled.WriteBtnWrapper>
          <Link to={`/detailfeed/spot/${placeId}/review/write`}>
            <Styled.WriteBtn src={WriteIcon} alt="리뷰 작성 아이콘" />
          </Link>
          <Styled.BubbleWrapper>
            <Bubble direction="top">+ 2P</Bubble>
          </Styled.BubbleWrapper>
        </Styled.WriteBtnWrapper>
      </Styled.NavWrap>
      <RetryErrorBoundary>
        <Suspense fallback={<ReviewCommentSkeleton />}>
          <ReviewCommentMain
            commentClickHandler={onClickComment}
            replyClickHandler={onClickReply}
            setRefetch={setPlaceReviewRefetch}
          />
        </Suspense>
      </RetryErrorBoundary>
      <Styled.Footer>
        <Styled.CommentWriteContainer>
          <Styled.CommentInput
            type="text"
            placeholder={isComment ? '댓글을 남겨주세요' : '답글을 남겨주세요'}
            onChange={onChangeComment}
            onKeyDown={onKeyDownEnter}
            ref={inputRef}
            value={comment}
          />
          {comment && (
            <Styled.CommentSubmit
              onClick={() =>
                isComment
                  ? postCommentMutate({ content: comment })
                  : postReplyMutate({
                      placeReviewCommentId: commentId,
                      content: comment,
                    })
              }>
              <BsArrowRightCircleFill />
            </Styled.CommentSubmit>
          )}
        </Styled.CommentWriteContainer>
      </Styled.Footer>
    </div>
  );
};

export default ReviewComment;
