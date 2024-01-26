import styled from 'styled-components';
import { Button } from '@/components/common';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ToolTip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 13.875rem;
  height: 1.75rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 1.875rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  color: ${({ theme }) => theme.text.gray};
`;

export const AddressInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 1rem;

  gap: 0.5rem;
`;

export const PlaceInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  padding: 0 1rem;

  gap: 0.5rem;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 2.2rem;

  border: 1px solid #b4f34c;
  border-radius: 0.4rem;
  padding: 0 0.8rem;

  &:focus {
    border: 1px solid #b4f34c;
  }

  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.text.black};
`;

export const AddressInputClearBtn = styled(Button)`
  position: absolute;
  top: 50%;
  right: 5%;
  padding: 0.125rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.text.gray};
  &:hover {
    background-color: transparent;
  }
`;

export const PlaceInputClearBtn = styled(Button)`
  position: absolute;
  top: 50%;
  right: 5%;
  padding: 0.125rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.text.gray};
  &:hover {
    background-color: transparent;
  }
`;

export const TripPlanBtnWrap = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 1rem;
`;
