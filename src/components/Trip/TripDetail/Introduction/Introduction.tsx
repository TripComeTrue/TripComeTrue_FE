import { Avatar, SubTitle, Text } from '@/components/common';
import * as Styled from './Introduction.styles';
import MarkIcon from '/images/mark.svg';
import BookMarkIcon from '/images/bookMark.svg';
import DownloadIcon from '/images/download.svg';
import AverageIcon from '/images/averageIcon.svg';
import { IntroductionProps } from './Introduction.types';

const Introduction = ({ tripRecordData }: IntroductionProps) => {
  const formatDays = tripRecordData
    ? `${tripRecordData.totalDays - 1}박 ${tripRecordData.totalDays}일`
    : '';

  const [mainCountries, ...countries] = tripRecordData
    ? tripRecordData.countries.split(',')
    : '';
  const formatCountries =
    countries.length === 0
      ? mainCountries
      : `${mainCountries} 외 ${countries.length}곳`;

  const classifyExpense = (expense: string) => {
    switch (expense) {
      case 'BELOW_50':
        return '50만원 이하';
      case 'BELOW_100':
        return '50만원~100만원 이하';
      case 'BELOW_200':
        return '100만원~200만원 이하';
      case 'BELOW_300':
        return '200만원~300만원 이하';
      default:
        return '300만원 이상';
    }
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.CreatorContainer>
          <Avatar size={32} src={tripRecordData?.member.profileImage || ''} />
          <Text fontWeight={700}>{tripRecordData?.member.nickname}</Text>
          <Styled.Mark src={MarkIcon} alt="mark icon" />
        </Styled.CreatorContainer>
        <Styled.SaveContainer>
          <img src={DownloadIcon} alt="download icon" />
          <Styled.BookMarkContainer>
            <img src={BookMarkIcon} alt="bookmark icon" />
            <Text fontSize={10}>{tripRecordData?.storeCount}</Text>
          </Styled.BookMarkContainer>
        </Styled.SaveContainer>
      </Styled.Header>
      <Styled.Main>
        <Styled.InfoContainer>
          <Text color="gray" fontSize={12} fontWeight={700}>
            {formatDays}・{formatCountries}
          </Text>
          <SubTitle>{tripRecordData?.title}</SubTitle>
        </Styled.InfoContainer>
        <Styled.RatingAndExpense>
          <Styled.Item>
            <Styled.ItemTitle>
              <Text color="gray" fontSize={12} fontWeight={700}>
                평균 평점
              </Text>
            </Styled.ItemTitle>
            <Styled.AverageContainer>
              <img src={AverageIcon} alt="평점 별 아이콘" />
              <Text color="gray" fontSize={12} fontWeight={700}>
                {tripRecordData?.averageRating}점
              </Text>
            </Styled.AverageContainer>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemTitle>
              <Text color="gray" fontSize={12} fontWeight={700}>
                여행 경비
              </Text>
            </Styled.ItemTitle>
            <Text color="gray" fontSize={12} fontWeight={700}>
              {classifyExpense(tripRecordData?.expenseRangeType || '')}
            </Text>
          </Styled.Item>
        </Styled.RatingAndExpense>
        <Text>{tripRecordData?.content}</Text>
      </Styled.Main>
      <footer>
        <Styled.HashTagList>
          {tripRecordData?.tags.map((data) => (
            <Text color="tag" fontWeight={700} key={data.id}>
              #{data.hashTagType}
            </Text>
          ))}
        </Styled.HashTagList>
      </footer>
    </Styled.Container>
  );
};

export default Introduction;
