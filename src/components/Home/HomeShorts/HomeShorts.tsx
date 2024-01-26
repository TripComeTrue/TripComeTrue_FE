import 'swiper/swiper-bundle.css';
import { useEffect, useState } from 'react';
import starIcon from '/starIcon.svg';
import * as Styled from './HomeShorts.styles';
import { SubTitle } from '@/components/common';
import { HomeShortsList } from '@/apis/home';
import Shorts from '@/components/common/Shorts/Shorts';

const HomeShorts = () => {
  const [selected, setSelected] = useState('all');
  const [shortsData, setShortsData] = useState([]);

  const handleRadioChange = (value: string) => {
    setSelected(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await HomeShortsList(selected);
        setShortsData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(shortsData);

  return (
    <Styled.ShortsWrap>
      <SubTitle margin="1rem" fontSize={18} icon={starIcon}>
        지금 이 순간, 트립컴트루
      </SubTitle>

      <Styled.ShortsRadio>
        <Styled.Label htmlFor="all" checked={selected === 'all'}>
          <input
            id="all"
            type="radio"
            value="all"
            checked={selected === 'all'}
            onChange={() => handleRadioChange('all')}
            style={{ display: 'none' }}
          />
          전체
        </Styled.Label>
        <Styled.Label
          htmlFor="domesticShorts"
          checked={selected === 'domestic'}>
          <input
            id="domesticShorts"
            type="radio"
            value="domestic"
            checked={selected === 'domestic'}
            onChange={() => handleRadioChange('domestic')}
            style={{ display: 'none' }}
          />
          국내
        </Styled.Label>
        <Styled.Label
          htmlFor="overseasShorts"
          checked={selected === 'overseas'}>
          <input
            id="overseasShorts"
            type="radio"
            value="overseas"
            checked={selected === 'overseas'}
            onChange={() => handleRadioChange('overseas')}
            style={{ display: 'none' }}
          />
          해외
        </Styled.Label>
      </Styled.ShortsRadio>

      <Shorts slides={shortsData} slidesPerView={2.1} />
    </Styled.ShortsWrap>
  );
};

export default HomeShorts;
