import styled, { css } from 'styled-components';

const textColor = {
  white: css`
    color: ${({ theme }) => theme.brand.white};
  `,
  black: css`
    color: ${({ theme }) => theme.text.black};
  `,
  gray: css`
    color: ${({ theme }) => theme.text.gray};
  `,
  primary: css`
    color: ${({ theme }) => theme.brand.primary};
  `,
  tag: css`
    color: ${({ theme }) => theme.brand.tag};
  `,
};

export const Text = styled.span<{
  $fontSize: string;
  $fontWeight: number;
  $color: 'white' | 'black' | 'gray' | 'primary' | 'tag';
}>`
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  ${({ $color }) => $color && textColor[$color]}
`;

export default Text;
