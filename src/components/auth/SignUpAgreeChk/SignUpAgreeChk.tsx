import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './SignUpAgreeChk.styles';
import SignUpAgreeChkBox from './SignUpAgreeChkBox';
import { Agreements, POLICY_AGREE } from './SignUpAgreeChk.types';

function SignUpAgreeChk() {
  const navigate = useNavigate();
  const chkAllAgreed = (data: Agreements) =>
    Object.values(data).every((agreement) => agreement.checked);

  const [agreements, setAgreements] = useState(POLICY_AGREE);
  const [allAgreed, setAllAgreed] = useState(chkAllAgreed(agreements));

  // 개별 이용약관 동의 상태 업데이트
  const handleAgreeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const newAgreements = {
      ...agreements,
      [name]: {
        text: agreements[name].text,
        checked,
        viewPolicy: agreements[name].viewPolicy,
      },
    };
    setAgreements(newAgreements);

    // 개별 항목의 동의 여부를 확인하여 전체 동의 체크박스 업데이트
    setAllAgreed(chkAllAgreed(newAgreements));
  };

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
    // TODO: 약관 동의 안하면 안넘어가게 로직 구현 필요
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
        />
      ))}
      <Styled.SignUpAgreeConfirm onClick={onClickConfirm}>
        다음
      </Styled.SignUpAgreeConfirm>
    </Styled.SignUpAgreeWrap>
  );
}

export default SignUpAgreeChk;
