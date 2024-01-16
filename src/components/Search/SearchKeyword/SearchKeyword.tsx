import { SubTitle, Text } from '@/components/common';
import styled from 'styled-components';
import starIcon from '/starIcon.svg';

const KeywordComponent = styled.div`
  margin-top: 1rem;
`;

const KeywordWrap = styled.div`
  margin-bottom: 1rem;
`;

const KeywordTitle = styled.div`
  margin: 0 1rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 800;
  color: ${({ theme }) => theme.text.black};
`;

const KeywordSelect = styled.div`
  margin: 0 1rem 0;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.text.gray};

  div {
    margin: 0 0.2rem 0.4rem;
    padding: 0.1rem 0.6rem 0.15rem;

    text-align: center;
    border: 1px solid ${({ theme }) => theme.brand.primary};
    border-radius: 1.8rem;
  }

  div:hover {
    cursor: pointer;
  }
`;

const KeywordHotSelect = styled.div`
  margin: 0 1rem 0;

  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.text.gray};

  div {
    margin: 0 0.2rem 0.4rem;
    padding: 0.1rem 0.6rem 0.15rem;

    text-align: center;
    background-color: ${({ theme }) => theme.brand.primary};
    border-radius: 1.8rem;
  }

  div:hover {
    cursor: pointer;
  }
`;

const SearchKeyword = () => {
  return (
    <KeywordComponent>
      <KeywordWrap>
        <KeywordTitle>가격대별 여행</KeywordTitle>
        <KeywordSelect>
          <div>50만원 이하</div>
          <div>10~50만원</div>
          <div>50~100만원</div>
          <div>100~300만원</div>
          <div>300만원 이상</div>
        </KeywordSelect>
      </KeywordWrap>
      <KeywordWrap>
        <KeywordTitle>추천 키워드</KeywordTitle>
        <KeywordSelect>
          <div>#여행</div>
          <div>#맛집</div>
          <div>#일본</div>
          <div>#삿포로</div>
          <div>#치앙마이</div>
        </KeywordSelect>
      </KeywordWrap>
      <KeywordWrap>
        <SubTitle margin="1rem" fontSize={14} icon={starIcon}>
          <Text fontSize={14} fontWeight={800} color="black">
            최근 인기 도시
          </Text>
        </SubTitle>
        <KeywordHotSelect>
          <div>다낭</div>
          <div>강릉</div>
          <div>경주</div>
          <div>삿포로</div>
          <div>방콕</div>
        </KeywordHotSelect>
      </KeywordWrap>
      <KeywordWrap>
        <SubTitle margin="0.5rem" fontSize={14} icon={starIcon}>
          <Text fontSize={14} fontWeight={800} color="black">
            최근 인기 여행지
          </Text>
        </SubTitle>
        <KeywordHotSelect>
          <div>정동진</div>
          <div>황리단길</div>
          <div>삿포로 맥주 박물관 </div>
          <div>에펠탑</div>
          <div>창경궁</div>
          <div>제주 올레길</div>
        </KeywordHotSelect>
      </KeywordWrap>
    </KeywordComponent>
  );
};

export default SearchKeyword;
