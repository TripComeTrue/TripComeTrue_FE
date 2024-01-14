import { Avatar, SubTitle, Text } from '@/components/common';
import * as Styled from './Introduction.styles';
import MarkIcon from '/images/mark.svg';
import BookMarkIcon from '/images/bookMark.svg';
import DownloadIcon from '/images/download.svg';
import StarListIcon from '/images/starList.svg';

const Introduction = () => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.CreatorContainer>
          <Avatar size={32} src="https://source.unsplash.com/random" />
          <Text fontWeight={700}>빠니보틀</Text>
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
            5박 6일・스위스 외 3곳
          </Text>
          <SubTitle>너는 돈만 준비해. 계획은 내가 짜줄게</SubTitle>
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
        <Text>
          안녕하세요 빠니보틀입니다~! 트립컴트루에서는 처음 인사를 드리네요ㅎㅎ
          이번에 제가 다녀온 여행코스를 여러분께 공유합니다! 다들 즐거운 여행
          되시길 바랍니다~
        </Text>
      </Styled.Main>
      <footer>
        <Styled.HashTagList>
          <Text color="tag" fontWeight={700}>
            #친구끼리
          </Text>
          <Text color="tag" fontWeight={700}>
            #여행
          </Text>
          <Text color="tag" fontWeight={700}>
            #스위스
          </Text>
          <Text color="tag" fontWeight={700}>
            #저예산
          </Text>
          <Text color="tag" fontWeight={700}>
            #뚜벅이
          </Text>
        </Styled.HashTagList>
      </footer>
    </Styled.Container>
  );
};

export default Introduction;
