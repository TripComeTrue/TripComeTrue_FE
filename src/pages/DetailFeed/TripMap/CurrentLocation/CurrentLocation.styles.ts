import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const CurrentLocation = styled.div`
  width: 3rem;
  height: 3rem;

  ${alignCenter}
  justify-content: center;

  border-radius: 50%;

  position: absolute;

  background-color: #ffff;

  bottom: 12rem;
  right: 1.5rem;
  z-index: 100;
  cursor: pointer;

  img {
    width: 2rem;
    height: 2rem;
  }
`;
