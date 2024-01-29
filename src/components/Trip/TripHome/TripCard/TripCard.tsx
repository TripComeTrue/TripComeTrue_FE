import { Link } from 'react-router-dom';
import { Avatar, Bookmark, Text } from '@/components/common';
import * as Styled from './TripCard.styles';
import MarkIcon from '/images/mark.svg';
import CommentIcon from '/images/comment.svg';
import pxToRem from '@/utils/pxToRem';
import { TripCardProps } from './TripCard.types';

const TripCard = ({ size = 152, tripRecordData }: TripCardProps) => {
  const stringifiedSize = pxToRem(size);
  const formatDays = `${tripRecordData.totalDays}박 ${
    tripRecordData.totalDays + 1
  }일`;
  const [mainCountries, ...countries] = tripRecordData.countries.split(',');
  const formatCountries =
    countries.length === 0
      ? mainCountries
      : `${mainCountries} 외 ${countries.length}곳`;

  return (
    <Styled.Container $size={stringifiedSize}>
      <Link to={`/trip/detail/${tripRecordData.tripRecordId}`}>
        <Styled.ImageContainer $size={stringifiedSize}>
          <Styled.Image src={tripRecordData.imageUrl} alt="여행 일정" />
          <Styled.BookMarkContainer>
            <Bookmark count={tripRecordData.storeCount} />
          </Styled.BookMarkContainer>
          <Styled.Creator>
            <Avatar src={tripRecordData.member.profileImage} size={12} />
            <Text fontSize={10} color="white">
              {tripRecordData.member.nickname}
            </Text>
            <img src={MarkIcon} alt="mark icon" />
          </Styled.Creator>
        </Styled.ImageContainer>
        <Styled.InfoContainer>
          <Text fontSize={10} color="gray">
            {formatDays} ・ {formatCountries}
          </Text>
          <Text fontSize={12} fontWeight={700}>
            {tripRecordData.title}
          </Text>
          <Styled.Comment>
            <img src={CommentIcon} alt="comment icon" />
            <Text fontSize={10} color="gray">
              {tripRecordData.commentCount}
            </Text>
          </Styled.Comment>
        </Styled.InfoContainer>
        <div />
      </Link>
    </Styled.Container>
  );
};

export default TripCard;
