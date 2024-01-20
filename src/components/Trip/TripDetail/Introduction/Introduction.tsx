import { Avatar, SubTitle, Text } from '@/components/common';
import * as Styled from './Introduction.styles';
import MarkIcon from '/images/mark.svg';
import BookMarkIcon from '/images/bookMark.svg';
import DownloadIcon from '/images/download.svg';
import StarListIcon from '/images/starList.svg';
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

  console.log(tripRecordData);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.CreatorContainer>
          <Avatar size={32} src="https://source.unsplash.com/random" />
          <Text fontWeight={700}>{tripRecordData?.member.nickname}</Text>
          <Styled.Mark src={MarkIcon} alt="mark icon" />
        </Styled.CreatorContainer>
        <Styled.SaveContainer>
          <img src={DownloadIcon} alt="download icon" />
          <Styled.BookMarkContainer>
            <img src={BookMarkIcon} alt="bookmark icon" />
            <Text fontSize={10}>999+</Text>
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
            <img src={StarListIcon} alt="star list icon" />
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemTitle>
              <Text color="gray" fontSize={12} fontWeight={700}>
                여행 경비
              </Text>
            </Styled.ItemTitle>
            <Text color="gray" fontSize={12} fontWeight={700}>
              200만원 ~ 300만원
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
