import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

interface SpotCategoryProps {
  selected: boolean;
}
export const SpotCategoryBox = styled.div`
  display: flex;
  gap: 0.5rem;

  position: absolute;
  top: 1rem;
  left: 1rem;
`;

export const SpotCategory = styled.div<SpotCategoryProps>`
  display: flex;

  ${alignCenter}
  justify-content: center;
  gap: 0.2rem;

  width: 4.5rem;
  background-color: ${(props) => (props.selected ? 'black' : 'white')};

  padding: 0.3rem;

  cursor: pointer;
  border-radius: 1rem;

  img {
    width: 1rem;
  }

  span {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${(props) => (props.selected ? 'white' : 'black')};
  }
`;
