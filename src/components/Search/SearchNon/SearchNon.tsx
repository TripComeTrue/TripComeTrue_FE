import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Shorts, Spots } from '@/components/common';
import SearchKeyword from '../SearchKeyword/SearchKeyword';
import * as Styled from './SearchNon.styles';
import { HomeShortsList, HomeTopReview } from '@/apis/home';

const SearchNon = () => {
  const [searchParams] = useSearchParams();
  const queryData = searchParams.get('query');
  const [shortsData, setShortsData] = useState([]);
  const [hotReview, setHotReview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await HomeShortsList('all');
        setShortsData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await HomeTopReview('overseas');
        setHotReview(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Styled.SearchNonWrap>
        <span>&apos;{queryData}&apos;</span>에 대한
        <br />
        검색 결과가 없습니다.
        <p>단어의 철자를 확인해주세요</p>
      </Styled.SearchNonWrap>

      <Styled.SearchShorts>쇼츠</Styled.SearchShorts>
      <Shorts slides={shortsData} slidesPerView={2.1} />

      <Styled.SearchReview>여행 후기</Styled.SearchReview>
      <Spots
        creator={hotReview}
        slidesPerView={2.75}
        sort="center"
        fontSize={10}
      />

      <SearchKeyword />
    </div>
  );
};

export default SearchNon;
