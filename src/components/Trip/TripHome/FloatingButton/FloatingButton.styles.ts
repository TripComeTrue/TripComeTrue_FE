import styled, { css, keyframes } from 'styled-components';
import { alignCenter } from '@/styles/common';

export const Container = styled.div<{ $isOn: boolean }>`
  transition: all ease-in-out 0.4s;

  ${({ $isOn }) =>
    $isOn &&
    css`
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 300;
      background-color: rgba(0, 0, 0, 0.7);
    `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.875rem;

  position: fixed;
  bottom: 7.0625rem;
  right: 1.25rem;
  z-index: 300;
`;

export const showAnimation = keyframes`
from {
  margin-right: -200%;
  }

  to {
    margin-right: 0;
  }
`;

export const Menu = styled.div<{ $isOn: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  ${({ $isOn }) =>
    $isOn &&
    css`
      animation: ${showAnimation} 0.4s;
    `};
`;

export const WriteContainer = styled.div`
  ${alignCenter};
  justify-content: flex-end;
  gap: 0.625rem;
`;

export const WriteButton = styled.button`
  ${alignCenter};
  justify-content: center;

  width: 3.125rem;
  height: 3.125rem;

  background-color: ${({ theme }) => theme.brand.white};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: rgba(233, 233, 233, 1);
  }
`;

export const ToggleButton = styled.button<{ $isOn: boolean }>`
  ${alignCenter};
  justify-content: center;

  width: 3.125rem;
  height: 3.125rem;

  background-color: ${({ theme }) => theme.brand.primary};
  border-radius: 50%;
  cursor: pointer;

  transition: transform ease-in-out 0.3s;

  ${({ $isOn }) =>
    $isOn &&
    css`
      transform: rotate(135deg);
    `};
`;
