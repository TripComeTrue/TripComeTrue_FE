import styled from 'styled-components';
import { alignCenter, flexColumn } from '@/styles/common';

export const ImageContainer = styled.label`
  ${alignCenter};
  justify-content: center;

  position: relative;

  width: 100%;
  height: 17rem;
  background-color: #d9d9d9;
  cursor: pointer;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const UploadContainer = styled.div`
  ${flexColumn};
  align-items: center;
`;

export const ImageUploadPoint = styled.div`
  position: absolute;
  top: 27%;
`;

export const UploadImage = styled.img``;

export const UploadInput = styled.input`
  display: none;
`;

export const WriteContainer = styled.div`
  position: relative;
  margin: 2.125rem 1.25rem 1.375rem;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 10rem;

  resize: none;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.brand.lightGray};
  color: ${({ theme }) => theme.brand.black};
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
`;

export const TextCountWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
`;

export const ButtonWrapper = styled.div`
  margin: 0 1.25rem;
`;

export const WritePoint = styled.div`
  position: absolute;
  top: -15%;
`;
