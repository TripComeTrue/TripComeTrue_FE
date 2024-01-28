import styled from 'styled-components';
import { Button } from '@/components/common';

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

  cursor: pointer;

  img {
    margin-left: 0.3rem;
  }
`;

export const ShowSelectedTag = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.brand.primary};
  padding: 0.5rem 2rem 0.5rem 1rem;
  border-radius: 0.25rem;

  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  & > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`;

export const TripPlanTagClearButton = styled(Button)`
  display: flex;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  padding: 0;
  background-color: transparent;
  border: none;

  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.text.gray};
`;
