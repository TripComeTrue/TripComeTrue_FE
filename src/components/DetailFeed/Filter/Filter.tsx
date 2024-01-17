import { useState } from 'react';
import { Text } from '@/components/common';
import * as Styled from './Filter.styles';
import polygon from '/polygon.svg';

const Filter = () => {
  const [filterOption] = useState('최신순');
  return (
    <Styled.FilterWrapper>
      <Styled.FilterBox>
        <Text fontSize={16}>{filterOption}</Text>
        <img src={polygon} alt="polygon" />
      </Styled.FilterBox>
    </Styled.FilterWrapper>
  );
};

export default Filter;
