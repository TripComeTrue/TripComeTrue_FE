import * as Styled from './Filter.styles';
import { FilterProps } from './Filter.types';
import FilterMenu from './FilterMenu';

const Filter = ({ orderOption }: FilterProps) => {
  return (
    <Styled.FilterWrapper>
      <Styled.FilterBox>
        <FilterMenu orderOption={orderOption} />
      </Styled.FilterBox>
    </Styled.FilterWrapper>
  );
};

export default Filter;
