import { SubTitle, Text } from '@/components/common';
import starIcon from '/starIcon.svg';
import * as Styled from './SearchKeyword.styles';

const SearchKeyword = () => {
  return (
    <Styled.KeywordComponent>
      <Styled.KeywordWrap>
        <Styled.KeywordTitle>가격대별 여행</Styled.KeywordTitle>
        <Styled.KeywordSelect>
          <div>50만원 이하</div>
          <div>10~50만원</div>
          <div>50~100만원</div>
          <div>100~300만원</div>
          <div>300만원 이상</div>
        </Styled.KeywordSelect>
      </Styled.KeywordWrap>
      <Styled.KeywordWrap>
        <Styled.KeywordTitle>추천 키워드</Styled.KeywordTitle>
        <Styled.KeywordSelect>
          <div>#여행</div>
          <div>#맛집</div>
          <div>#일본</div>
          <div>#삿포로</div>
          <div>#치앙마이</div>
        </Styled.KeywordSelect>
      </Styled.KeywordWrap>
      <Styled.KeywordWrap>
        <SubTitle margin="1rem" fontSize={14} icon={starIcon}>
          <Text fontSize={14} fontWeight={800} color="black">
            최근 인기 도시
          </Text>
        </SubTitle>
        <Styled.KeywordHotSelect>
          <div>다낭</div>
          <div>강릉</div>
          <div>경주</div>
          <div>삿포로</div>
          <div>방콕</div>
        </Styled.KeywordHotSelect>
      </Styled.KeywordWrap>
      <Styled.KeywordWrap>
        <SubTitle margin="0.5rem" fontSize={14} icon={starIcon}>
          <Text fontSize={14} fontWeight={800} color="black">
            최근 인기 여행지
          </Text>
        </SubTitle>
        <Styled.KeywordHotSelect>
          <div>정동진</div>
          <div>황리단길</div>
          <div>삿포로 맥주 박물관 </div>
          <div>에펠탑</div>
          <div>창경궁</div>
          <div>제주 올레길</div>
        </Styled.KeywordHotSelect>
      </Styled.KeywordWrap>
    </Styled.KeywordComponent>
  );
};

export default SearchKeyword;
