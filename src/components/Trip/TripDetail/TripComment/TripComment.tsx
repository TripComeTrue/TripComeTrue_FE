import { useMutation, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { Comment, Text } from '@/components/common';
import * as Styled from './TripComment.styles';
import {
  deleteTripRecordComment,
  getTripRecordComments,
  postTripRecordComment,
  postTripRecordReply,
} from '@/apis/trip-records';

const TripComment = () => {
  const { tripRecordId } = useParams() as { tripRecordId: string };
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [comment, setComment] = useState('');
  const [isComment, setIsComment] = useState(true);
  const [commentId, setCommentId] = useState(0);
  const {
    data: tripRecordCommentsData,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useSuspenseInfiniteQuery({
    queryKey: ['TripRecordCommentsData'],
    queryFn: ({ pageParam }) => getTripRecordComments(tripRecordId, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (Math.ceil(lastPage.totalCount / 5) >= lastPageParam + 1)
        return lastPageParam + 1;

      return null;
    },
  });

  const { mutate: postCommentMutate } = useMutation({
    mutationFn: ({ content }: { content: string }) =>
      postTripRecordComment(tripRecordId, { content }),
    onSuccess: () => {
      refetch();
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
      tripRecordCommentId,
      content,
    }: {
      tripRecordCommentId: number;
      content: string;
    }) => postTripRecordReply(tripRecordCommentId, { content }),
    onSuccess: () => {
      refetch();
      setIsComment(true);
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
  const { mutate: deleteCommentMutate } = useMutation({
    mutationFn: (deleteCommentId: number) =>
      deleteTripRecordComment(deleteCommentId),
    onSuccess: () => {
      refetch();
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

  const onKeyDownEnter = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      if (isComment) {
        postCommentMutate({ content: comment });
      } else
        postReplyMutate({
          tripRecordCommentId: commentId,
          content: comment,
        });
    }
  };

  useEffect(() => {
    refetch();
  }, [tripRecordId]);

  return (
    <Styled.Container>
      <Styled.CommentHeader>
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
                      tripRecordCommentId: commentId,
                      content: comment,
                    })
              }>
              <BsArrowRightCircleFill />
            </Styled.CommentSubmit>
          )}
        </Styled.CommentWriteContainer>
      </Styled.CommentHeader>

      <div>
        <Styled.TotalComments>
          <Text fontSize={12} fontWeight={700} color="gray">
            댓글 ({tripRecordCommentsData.pages[0].totalCount})
          </Text>
        </Styled.TotalComments>
        {tripRecordCommentsData.pages[0].totalCount ? (
          <>
            <ul>
              {tripRecordCommentsData.pages.map((page) =>
                page.comments.map((commentData) => (
                  <li key={commentData.commentId}>
                    <Comment>
                      <Comment.CommentCard>
                        <Styled.Header>
                          <Comment.Info
                            isWriter={commentData.isWriter}
                            profileUrl={commentData.profileUrl}
                            nickname={commentData.nickname}
                            createdAt={commentData.createdAt}
                          />
                          {commentData.isWriter && (
                            <Comment.ActionsModal
                              onClickDelete={() =>
                                onClickDeleteComment(commentData.commentId)
                              }
                            />
                          )}
                        </Styled.Header>
                        <Comment.Content content={commentData.content} />
                        <Comment.ReplyButton
                          onClickFunc={() => {
                            onClickReply(commentData.commentId);
                          }}
                          replyLength={commentData.replyComments.length}
                        />
                      </Comment.CommentCard>
                    </Comment>
                    <ul>
                      {commentData.replyComments.map((replyData) => (
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
                )),
              )}
            </ul>
            {hasNextPage && (
              <Styled.CommentMoreBtn
                type="button"
                onClick={() => fetchNextPage()}>
                <Text color="gray" fontSize={14} fontWeight={600}>
                  댓글 더 보기
                </Text>
              </Styled.CommentMoreBtn>
            )}
          </>
        ) : (
          <Styled.EmptyComment>
            <Styled.EmptyText>첫 댓글을 달아보세요</Styled.EmptyText>
          </Styled.EmptyComment>
        )}
      </div>
    </Styled.Container>
  );
};

export default TripComment;
