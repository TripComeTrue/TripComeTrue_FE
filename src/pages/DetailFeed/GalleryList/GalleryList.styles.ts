import styled from 'styled-components';

export const GalleryListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.1%;
`;

export const FilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 3rem;
  padding: 0 1.25rem;
`;

export const PhotoBox = styled.div`
  position: relative;
  flex: 0 0 32.6%;
  cursor: pointer;
`;

export const BookMarkBox = styled.div`
  position: absolute;
  left: 0.3rem;
`;

export const Photo = styled.img`
  width: 100%;
  height: 7.3rem;
`;
