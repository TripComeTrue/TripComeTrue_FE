import styled from 'styled-components';
import { alignCenter } from '@/styles/common';

export const MapSpotInfoBoxWrapper = styled.div`
  width: 17rem;
  height: 7.5rem;
  z-index: 100;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 3rem;

  ${alignCenter}
  justify-content: flex-start;
  gap: 1rem;

  padding: 0.6rem;

  border-radius: 1rem;
  background-color: #ffff;

  cursor: pointer;
`;

export const SpotImg = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.625rem;
`;

export const SpotDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const SpotDescCountBox = styled.div`
  display: flex;
  gap: 0.7rem;
`;

export const SpotContent = styled.div`
  height: 1.3rem;

  display: flex;
  gap: 0.3rem;
`;

export const GoogleSpotDesc = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.7rem;
`;

export const NumberBox = styled.div`
  ${alignCenter}
  gap: 0.2rem;

  span {
    font-size: 0.8rem;
  }
`;
