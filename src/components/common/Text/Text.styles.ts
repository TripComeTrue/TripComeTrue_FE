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
};

export const Text = styled.span<{
  fontSize: string;
  fontWeight: number;
  color: 'white' | 'black' | 'gray' | 'primary';
}>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  ${({ color }) => color && textColor[color]}
`;

export default Text;
