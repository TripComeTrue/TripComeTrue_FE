import styled from 'styled-components';

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 320px;
  background-color: white;
  border-radius: 0.625rem;
  padding: 1.25rem;
  text-align: center;
`;

export const ModalIconWrap = styled.p<{ $type: string }>`
  text-align: center;
  color: ${({ theme, $type }) => {
    switch ($type) {
      case 'error':
        return theme.semantic.negative;
      case 'success':
        return theme.semantic.positive;
      case 'info':
        return theme.semantic.notice;
      default:
        return theme.text.black;
    }
  }};
`;

export const ModalTitle = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const ModalContentWrap = styled.div`
  margin-bottom: 1rem;
`;
