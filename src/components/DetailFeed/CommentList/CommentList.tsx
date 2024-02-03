import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';
import { Comment } from '@/components/common';
import * as Styled from './CommentList.styles';
import { deletePlaceReviewComment } from '@/apis/place';
import { CommentListProps } from './CommentList.types';

const CommentList = ({
  replyClickHandler,
  placeReviewData,
  placeReviewRefetch,
}: CommentListProps) => {
  const { mutate: deleteCommentMutate } = useMutation({
    mutationFn: (deleteCommentId: number) =>
      deletePlaceReviewComment(deleteCommentId),
    onSuccess: () => {
      placeReviewRefetch();
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

  return (
    <Styled.CommentContainer>
      <Styled.CommentTitle>
        댓글 {placeReviewData.commentCount}
      </Styled.CommentTitle>
      {placeReviewData.comments.length !== 0 ? (
        <ul>
          {placeReviewData.comments.map((commentData: CommentData) => (
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
                          deleteCommentMutate(commentData.commentId)
                        }
                      />
                    )}
                  </Styled.Header>
                  <Comment.Content content={commentData.content} />
                  <Comment.ReplyButton
                    onClickFunc={() => replyClickHandler(commentData.commentId)}
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
                                deleteCommentMutate(replyData.commentId)
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
  );
};

export default CommentList;
