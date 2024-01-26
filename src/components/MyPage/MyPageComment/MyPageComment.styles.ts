import styled from 'styled-components';

export const MyPageCommentWrap = styled.div`
  padding: 0 1.25rem;
`;

export const MyPageCommentTab = styled.div`
  display: flex;
  gap: 1.125rem;
  padding: 1.25rem 1.25rem 0.75rem;
`;

export const MyPageCommentTabItem = styled.button<{ $selected: string }>`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ $selected, theme }) =>
    $selected === 'true' ? theme.text.black : theme.brand.gray};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  &:first-child::after {
    content: '';
    position: absolute;
    right: -0.5625rem;
    top: 0.3125rem;
    height: 0.5rem;
    width: 0.0625rem;
    background-color: #c7c7c7;
  }
`;
