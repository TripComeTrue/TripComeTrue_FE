import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
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
  const { data: tripRecordCommentsData, refetch: tripRecordCommentsRefetch } =
    useQuery({
      queryKey: ['TripRecordCommentsData'],
      queryFn: () => getTripRecordComments(tripRecordId),
    });
  const { mutate: postCommentMutate } = useMutation({
    mutationFn: ({ content }: { content: string }) =>
      postTripRecordComment(tripRecordId, { content }),
    onSuccess: () => {
      tripRecordCommentsRefetch();
      setComment('');
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
      tripRecordCommentsRefetch();
      setIsComment(true);
      setComment('');
    },
  });
  const { mutate: deleteCommentMutate } = useMutation({
    mutationFn: (deleteCommentId: number) =>
      deleteTripRecordComment(deleteCommentId),
    onSuccess: () => {
      tripRecordCommentsRefetch();
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
    tripRecordCommentsRefetch();
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
            댓글 ({tripRecordCommentsData?.totalCount})
          </Text>
        </Styled.TotalComments>
        {tripRecordCommentsData?.totalCount ? (
          <ul>
            {tripRecordCommentsData?.comments.map(
              (commentData: CommentData) => (
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
              ),
            )}
          </ul>
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
