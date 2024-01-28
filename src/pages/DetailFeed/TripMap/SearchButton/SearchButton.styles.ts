import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const SearchButtonBox = styled.div`
  ${alignCenter}
  justify-content: center;
  gap: 0.5rem;

  width: 8.5rem;

  position: absolute;
  bottom: 12rem;
  left: 50%;
  transform: translateX(-50%);

  background-color: #ffff;

  padding: 0.3rem;

  cursor: pointer;

  border-radius: 1rem;
  z-index: 100;
  img {
    width: 0.8rem;
  }

  span {
    font-size: 0.8rem;
    font-weight: 700;
    color: #0074e2;
  }
`;
