import { ReactNode } from 'react';
import FormattedDate from '@/utils/formattedDate';
import { Avatar, Text } from '..';
import * as Styled from './Comment.styles';
import CommentIcon from '/images/comment.svg';
import { CommentProps } from './Comment.types';
import ActionsModal from '../ActionsModal/ActionsModal';

const Comment = ({ children }: CommentProps) => {
  return <>{children}</>;
};

export default Comment;

const CommentCard = ({ children }: { children: ReactNode }) => {
  return <Styled.CommentCard>{children}</Styled.CommentCard>;
};

const ReplyCard = ({ children }: { children: ReactNode }) => {
  return <Styled.ReplyCard>{children}</Styled.ReplyCard>;
};

const Info = ({
  profileUrl,
  nickname,
  createdAt,
  isWriter,
}: {
  profileUrl: string;
  nickname: string;
  createdAt: string;
  isWriter: boolean;
}) => {
  return (
    <Styled.CommentInfo>
      <Styled.Creator>
        <Avatar src={profileUrl} size={32} />
        <Text fontWeight={700}>{nickname}</Text>
        {isWriter && (
          <Text color="primary" fontSize={10} fontWeight={700}>
            작성자
          </Text>
        )}
      </Styled.Creator>
      <Text fontSize={10} fontWeight={700}>
        {FormattedDate(createdAt)}
      </Text>
    </Styled.CommentInfo>
  );
};

const Content = ({ content }: { content: string }) => {
  return <Text>{content}</Text>;
};

const ReplyButton = ({
  replyLength,
  onClickFunc,
}: {
  replyLength: number;
  onClickFunc: () => void;
}) => {
  return (
    <Styled.ReplyButton onClick={onClickFunc}>
      <img src={CommentIcon} alt="comment icon" />
      <Text fontSize={10} color="gray" fontWeight={600}>
        {replyLength ? `답글 ${replyLength}` : '답글달기'}
      </Text>
    </Styled.ReplyButton>
  );
};

Comment.CommentCard = CommentCard;
Comment.ReplyCard = ReplyCard;
Comment.Info = Info;
Comment.ActionsModal = ActionsModal;
Comment.Content = Content;
Comment.ReplyButton = ReplyButton;
