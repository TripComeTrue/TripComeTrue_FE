import * as Styled from './SignUpAgreeChk.styles';
import { SignUpAgreeChkboxProps } from './SignUpAgreeChkBox.types';

function SignUpAgreeChkBox({
  text,
  name,
  viewPolicy,
  onChange,
  checked,
}: SignUpAgreeChkboxProps) {
  return (
    <Styled.SignUpAgreeItem>
      <Styled.SignUpAgreeLabel inputname={name}>
        {text}
        <Styled.SignUpAgreeInput
          type="checkbox"
          name={name}
          id={name}
          onChange={onChange}
          checked={checked}
        />
        <span className="chkmark" />
      </Styled.SignUpAgreeLabel>
      {viewPolicy && (
        <Styled.SignUpAgreeViewBtn>약관 보기</Styled.SignUpAgreeViewBtn>
      )}
    </Styled.SignUpAgreeItem>
  );
}

export default SignUpAgreeChkBox;
