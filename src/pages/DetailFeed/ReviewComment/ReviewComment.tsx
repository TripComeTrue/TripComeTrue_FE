import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import * as Styled from './ReviewComment.styles';
import BackArrow from '@/assets/back-arrow.svg';
import WriteIcon from '/images/write.svg';
import { Avatar, Bubble, Comment, Text } from '@/components/common';
import LikeIcon from '/images/like.svg';
import CommentIcon from '/images/comment.svg';
import {
  deleteLike,
  deletePlaceReviewComment,
  getPlaceReview,
  postLike,
  postPlaceReviewComment,
  postPlaceReviewReply,
} from '@/apis/place';
import FormattedDate from '@/utils/formattedDate';
import ReviewCommentSkeleton from './ReviewCommentSkeleton';

const ReviewComment = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [comment, setComment] = useState('');
  const [isComment, setIsComment] = useState(true);
  const [commentId, setCommentId] = useState(0);
  const { reviewId } = useParams() as { reviewId: string };
  const { data: placeReviewData, refetch: placeReviewRefetch } = useQuery({
    queryKey: ['PlaceReviewData'],
    queryFn: () => getPlaceReview(reviewId),
  });
  const { mutate: postCommentMutate } = useMutation({
    mutationFn: ({ content }: { content: string }) =>
      postPlaceReviewComment(reviewId, { content }),
    onSuccess: () => {
      placeReviewRefetch();
      setComment('');
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
      placeReviewRefetch();
      setComment('');
      setIsComment(true);
    },
  });
  const { mutate: deleteCommentMutate } = useMutation({
    mutationFn: (deleteCommentId: number) =>
      deletePlaceReviewComment(deleteCommentId),
    onSuccess: () => {
      placeReviewRefetch();
    },
  });
  const { mutate: postLikeMutate } = useMutation({
    mutationFn: (placeReviewId: number) => postLike(placeReviewId),
    onSuccess: () => {
      placeReviewRefetch();
    },
  });
  const { mutate: deleteLikeMutate } = useMutation({
    mutationFn: (placeReviewId: number) => deleteLike(placeReviewId),
    onSuccess: () => placeReviewRefetch(),
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

  const onClickDeleteComment = (id: number): void => {
    deleteCommentMutate(id);
  };

  const onClickLikeButton = (amILike: boolean, id: number): void => {
    if (amILike) return deleteLikeMutate(id);

    return postLikeMutate(id);
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
        <Styled.NavTitle>리뷰 댓글 작성</Styled.NavTitle>
        <Styled.WriteBtnWrapper>
          <Styled.WriteBtn src={WriteIcon} alt="write icon" />
          <Styled.BubbleWrapper>
            <Bubble direction="top">+ 2P</Bubble>
          </Styled.BubbleWrapper>
        </Styled.WriteBtnWrapper>
      </Styled.NavWrap>
      {placeReviewData ? (
        <div>
          <Styled.ReviewContainer>
            <Styled.ReviewInfo>
              <Styled.Creator>
                <Avatar src={placeReviewData?.profileUrl} size={32} />
                <Text fontWeight={700}>{placeReviewData?.nickname}</Text>
              </Styled.Creator>
              <Text fontSize={10} fontWeight={700}>
                {FormattedDate(placeReviewData?.createdAt || '')}
              </Text>
            </Styled.ReviewInfo>
            <div>
              <Styled.ReviewImage src={placeReviewData?.imageUrl} alt="리뷰" />
              <Text>{placeReviewData?.content}</Text>
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
                  {placeReviewData?.likeCount}
                </Text>
              </Styled.LikeButton>
              <Styled.CommentButton onClick={onClickComment}>
                <img src={CommentIcon} alt="comment icon" />
                <Text fontSize={12} fontWeight={700} color="gray">
                  {placeReviewData?.commentCount
                    ? placeReviewData?.commentCount
                    : '댓글 달기'}
                </Text>
              </Styled.CommentButton>
            </Styled.InteractionButtons>
          </Styled.ReviewContainer>

          <Styled.CommentContainer>
            <Styled.CommentTitle>
              댓글 {placeReviewData?.commentCount}
            </Styled.CommentTitle>
            {placeReviewData?.comments.length !== 0 ? (
              <ul>
                {placeReviewData?.comments.map((commentData: CommentData) => (
                  <li key={commentData?.commentId}>
                    <Comment>
                      <Comment.CommentCard>
                        <Styled.Header>
                          <Comment.Info
                            isWriter={commentData?.isWriter}
                            profileUrl={commentData?.profileUrl}
                            nickname={commentData?.nickname}
                            createdAt={commentData?.createdAt}
                          />
                          {commentData?.isWriter && (
                            <Comment.ActionsModal
                              onClickDelete={() =>
                                onClickDeleteComment(commentData?.commentId)
                              }
                            />
                          )}
                        </Styled.Header>
                        <Comment.Content content={commentData?.content} />
                        <Comment.ReplyButton
                          onClickFunc={() =>
                            onClickReply(commentData?.commentId)
                          }
                          replyLength={commentData?.replyComments.length}
                        />
                      </Comment.CommentCard>
                    </Comment>
                    <ul>
                      {commentData.replyComments.map((replyData: ReplyData) => (
                        <li key={replyData.commentId}>
                          <Comment>
                            <Comment.ReplyCard>
                              <Styled.Header>
                                <Comment.Info
                                  isWriter={replyData.isWriter}
                                  profileUrl={replyData.profileUrl}
                                  nickname={replyData.nickname}
                                  createdAt={replyData.createdAt}
                                />
                                {replyData.isWriter && (
                                  <Comment.ActionsModal
                                    onClickDelete={() =>
                                      onClickDeleteComment(replyData.commentId)
                                    }
                                  />
                                )}
                              </Styled.Header>
                              <Comment.Content content={replyData.content} />
                            </Comment.ReplyCard>
                          </Comment>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <Styled.EmptyComment>
                <Styled.EmptyText>첫 댓글을 달아보세요</Styled.EmptyText>
              </Styled.EmptyComment>
            )}
          </Styled.CommentContainer>
        </div>
      ) : (
        <ReviewCommentSkeleton />
      )}

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
