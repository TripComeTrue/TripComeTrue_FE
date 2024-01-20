import styled from 'styled-components';

export const TagsInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 1rem;
  border-bottom: 1px solid #dcdcdc;

  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.brand.black};

  .tag-icon {
    margin-right: 0.3rem;
  }
`;

export const TagsInputTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TagsInput = styled.div``;

export const TagsAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.text.gray};

  img {
    margin-left: 0.3rem;
  }
`;
