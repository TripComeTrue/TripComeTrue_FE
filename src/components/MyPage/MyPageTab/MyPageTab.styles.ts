import styled, { css } from 'styled-components';

export const MyPageTabWrap = styled.div`
  position: sticky;
  top: 2.5rem;
  display: flex;
  background-color: ${({ theme }) => theme.brand.white};
`;

const activeBorder = css`
  border-bottom: 2px solid ${({ theme }) => theme.text.black};
`;
const normalBorder = css`
  border-bottom: 1px solid ${({ theme }) => theme.brand.gray};
`;

export const MyPageTabItem = styled.button<{ $isactive: string }>`
  flex: 1;
  color: ${({ $isactive, theme }) =>
    $isactive === 'true' ? theme.text.black : theme.brand.gray};
  ${({ $isactive }) => ($isactive === 'true' ? activeBorder : normalBorder)};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  height: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transition:
    color,
    border-bottom-color 0.3s;
`;
