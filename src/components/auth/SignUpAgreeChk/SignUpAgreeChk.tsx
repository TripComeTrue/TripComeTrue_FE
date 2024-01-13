import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './SignUpAgreeChk.styles';
import SignUpAgreeChkBox from './SignUpAgreeChkBox';
import { SignUpAgreeChkProps } from './SignUpAgreeChk.types';

function SignUpAgreeChk({
  agreements,
  setAgreements,
  allAgreed,
  setAllAgreed,
  isOk,
  handleAgreeChange,
  handleOpen,
}: SignUpAgreeChkProps) {
  const navigate = useNavigate();

  // 모든 이용약관 동의 상태 업데이트
  const handleAllAgreeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setAllAgreed(checked);
    setAgreements((prevState) => {
      const newAgreements = { ...prevState };
      Object.keys(newAgreements).forEach((key) => {
        newAgreements[key].checked = checked;
      });
      return newAgreements;
    });
  };

  const onClickConfirm = () => {
    if (
      agreements.over14age.checked &&
      agreements.policyAgree.checked &&
      agreements.privacyAgree.checked
    )
      navigate('/auth/signup');
  };

  return (
    <Styled.SignUpAgreeWrap>
      <SignUpAgreeChkBox
        text="서비스 이용 약관을 모두 확인했어요"
        name="chkall"
        onChange={handleAllAgreeChange}
        checked={allAgreed}
      />
      {Object.keys(agreements).map((agreement) => (
        <SignUpAgreeChkBox
          key={agreement}
          text={agreements[agreement].text}
          name={agreement}
          viewPolicy={agreements[agreement].viewPolicy}
          onChange={handleAgreeChange}
          checked={agreements[agreement].checked}
          handleOpen={handleOpen}
        />
      ))}
      <Styled.SignUpAgreeConfirm
        size="lg"
        variants="primary"
        onClick={onClickConfirm}
        disabled={!isOk}>
        다음
      </Styled.SignUpAgreeConfirm>
    </Styled.SignUpAgreeWrap>
  );
}

export default SignUpAgreeChk;
