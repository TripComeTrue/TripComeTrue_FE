import { useNavigate } from 'react-router-dom';
import { SubTitle, Text } from '@/components/common';
import starIcon from '/starIcon.svg';
import * as Styled from './SearchKeyword.styles';

const SearchKeyword = () => {
  const navigate = useNavigate();

  const handleSearch = (prop: string) => {
    navigate(`/search/${prop}`);
  };

  return (
    <Styled.KeywordComponent>
      <Styled.KeywordWrap>
        <Styled.KeywordTitle>가격대별 여행</Styled.KeywordTitle>
        <Styled.KeywordSelect>
          <button type="button" onClick={() => handleSearch('50만원 이하')}>
            50만원 이하
          </button>
          <button type="button" onClick={() => handleSearch('10~50만원')}>
            10~50만원
          </button>
          <button type="button" onClick={() => handleSearch('50~100만원')}>
            50~100만원
          </button>
          <button type="button" onClick={() => handleSearch('100~300만원')}>
            100~300만원
          </button>
          <button type="button" onClick={() => handleSearch('300만원 이상')}>
            300만원 이상
          </button>
        </Styled.KeywordSelect>
      </Styled.KeywordWrap>
      <Styled.KeywordWrap>
        <Styled.KeywordTitle>추천 키워드</Styled.KeywordTitle>
        <Styled.KeywordSelect>
          <button type="button" onClick={() => handleSearch('여행')}>
            #여행
          </button>
          <button type="button" onClick={() => handleSearch('맛집')}>
            #맛집
          </button>
          <button type="button" onClick={() => handleSearch('일본')}>
            #일본
          </button>
          <button type="button" onClick={() => handleSearch('삿포로')}>
            #삿포로
          </button>
          <button type="button" onClick={() => handleSearch('#치앙마이')}>
            #치앙마이
          </button>
        </Styled.KeywordSelect>
      </Styled.KeywordWrap>
      <Styled.KeywordWrap>
        <SubTitle margin="1rem" fontSize={14} icon={starIcon}>
          <Text fontSize={14} fontWeight={800} color="black">
            최근 인기 도시
          </Text>
        </SubTitle>
        <Styled.KeywordHotSelect>
          <button type="button" onClick={() => handleSearch('다낭')}>
            다낭
          </button>
          <button type="button" onClick={() => handleSearch('강릉')}>
            강릉
          </button>
          <button type="button" onClick={() => handleSearch('경주')}>
            경주
          </button>
          <button type="button" onClick={() => handleSearch('삿포로')}>
            삿포로
          </button>
          <button type="button" onClick={() => handleSearch('방콕')}>
            방콕
          </button>
        </Styled.KeywordHotSelect>
      </Styled.KeywordWrap>
      <Styled.KeywordWrap>
        <SubTitle margin="0.5rem" fontSize={14} icon={starIcon}>
          <Text fontSize={14} fontWeight={800} color="black">
            최근 인기 여행지
          </Text>
        </SubTitle>
        <Styled.KeywordHotSelect>
          <button type="button" onClick={() => handleSearch('정동진')}>
            정동진
          </button>
          <button type="button" onClick={() => handleSearch('황리단길')}>
            황리단길
          </button>
          <button type="button" onClick={() => handleSearch('삿포로')}>
            삿포로{' '}
          </button>
          <button type="button" onClick={() => handleSearch('에펠탑')}>
            에펠탑
          </button>
          <button type="button" onClick={() => handleSearch('창경궁')}>
            창경궁
          </button>
        </Styled.KeywordHotSelect>
      </Styled.KeywordWrap>
    </Styled.KeywordComponent>
  );
};

export default SearchKeyword;
