import styled from 'styled-components';

export const TextFieldWrap = styled.div`
  margin-bottom: 2rem;
`;
export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  height: 2.38rem;
  line-height: 2.38rem;
`;
export const Field = styled.input`
  display: block;
  width: 100%;
  height: 2.13rem;
  line-height: 2.13rem;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.brand.primary};
`;
