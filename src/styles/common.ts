import { css } from 'styled-components';

export const column = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  & > * {
    margin-bottom: 1rem;
  }
`;

export const alignCenter = css`
  display: flex;
  align-items: center;
`;

export const justifyBetween = css`
  display: flex;
  justify-content: space-between;
`;

export const justifyAround = css`
  display: flex;
  justify-content: space-around;
`;

export const fontXL = css`
  font-size: 1.875rem;
  line-height: 1.266;
  font-weight: lighter;
`;

export const fontLg = css`
  font-size: 1.5rem;
  line-height: 1.583;
  font-weight: lighter;
`;

export const fontTit = css`
  font-size: 1.125rem;
  line-height: 1.3333;
  font-weight: 700;
`;

export const inner = css`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const maxWidth = css`
  width: 100%;
  max-width: 22.5rem; /* 360px */
  @media screen and (max-width: 30rem) {
    /* max-width: 480px */
    max-width: none;
  }
`;
