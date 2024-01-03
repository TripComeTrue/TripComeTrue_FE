import * as S from './SignUpAgreeChk.styles';
import { SignUpAgreeChkboxProps } from './SignUpAgreeChkBox.types';

function SignUpAgreeChkBox({
  text,
  name,
  viewPolicy,
  onChange,
  checked,
}: SignUpAgreeChkboxProps) {
  return (
    <S.SignUpAgreeItem>
      <S.SignUpAgreeLabel inputname={name}>
        {text}
        <S.SignUpAgreeInput
          type="checkbox"
          name={name}
          id={name}
          onChange={onChange}
          checked={checked}
        />
        <span className="chkmark" />
      </S.SignUpAgreeLabel>
      {viewPolicy && <S.SignUpAgreeViewBtn>약관 보기</S.SignUpAgreeViewBtn>}
    </S.SignUpAgreeItem>
  );
}

export default SignUpAgreeChkBox;
