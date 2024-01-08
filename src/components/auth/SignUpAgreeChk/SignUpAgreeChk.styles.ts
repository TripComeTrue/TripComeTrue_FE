import styled from 'styled-components';
import { Button } from '@/components/common';

export const SignUpAgreeWrap = styled.div`
  margin-top: 2rem;
`;

export const SignUpAgreeItem = styled.div`
  display: flex;
  padding: 0.6rem 0;
`;

export const SignUpAgreeLabel = styled.label<{ inputname?: string }>`
  flex: 1;
  position: relative;
  cursor: pointer;
  padding-left: 1.875rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => (props.inputname === 'chkall' ? '600' : 'normal')};
  border-bottom: 1px solid
    ${(props) =>
      props.inputname === 'chkall' ? props.theme.brand.gray : 'transparent'};
  padding-bottom: ${(props) => (props.inputname === 'chkall' ? '0.75rem' : 0)};
  margin-bottom: ${(props) => (props.inputname === 'chkall' ? '0.75rem' : 0)};

  .chkmark {
    position: absolute;
    top: 2px;
    left: 0;
    height: 1rem;
    width: 1rem;
    border: 1px solid ${(props) => props.theme.brand.primary};
    border-radius: 100%;
    background-color: ${(props) => props.theme.brand.white};
    transition: background-color 0.3s;
  }
  .chkmark::after {
    content: '';
    position: absolute;
    display: none;
    width: 10px;
    height: 7px;
    top: 4px;
    left: 2px;
    background: url('/images/chkmark.svg') 0 0/100% no-repeat;
  }

  input:checked ~ .chkmark {
    background-color: ${(props) => props.theme.brand.primary};
  }
  input:checked ~ .chkmark::after {
    display: block;
  }
`;

export const SignUpAgreeInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const SignUpAgreeViewBtn = styled.button`
  width: 3rem;
  font-size: ${(props) => props.theme.fontSizes.xs};
  color: ${(props) => props.theme.text.gray};
  background-color: transparent;
  cursor: pointer;
`;

export const SignUpAgreeConfirm = styled(Button)`
  margin-top: 1.25rem;
`;
