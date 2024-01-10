import styled from 'styled-components';

const BookmarkWrap = styled.div`
  color: ${({ theme }) => theme.brand.white};
  svg {
    vertical-align: middle;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-right: 0.3125rem;
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export default BookmarkWrap;
