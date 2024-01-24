import styled from 'styled-components';

export const TextFieldWrap = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;
export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  height: 2.38rem;
  line-height: 2.38rem;
`;
export const Field = styled.input<{ $iserror: string }>`
  display: block;
  width: 100%;
  height: 2.13rem;
  line-height: 2.13rem;
  border: 0;
  border-bottom: 1px solid
    ${(props) =>
      props.$iserror === 'true'
        ? props.theme.semantic.negative
        : props.theme.brand.primary};
  &:focus {
    border-bottom: 1px solid
      ${(props) =>
        props.$iserror === 'true'
          ? props.theme.semantic.negative
          : props.theme.brand.primary};
  }
  appearance: none;
`;
export const ErrorMsg = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.semantic.negative};
  margin-top: 8px;
`;
export const ValidateIcon = styled.span<{ $isvalid: string }>`
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: 2.75rem;
  right: 0.5rem;
  background: url('/images/validate_icon.png')
    ${({ $isvalid }) =>
      $isvalid === 'false' ? '0 100%/100% no-repeat' : '0 0/100% no-repeat'};
  transition: background-position 0.5s;
`;
