import { ChangeEvent, useEffect, useState } from 'react';
import SimpleNav from '@/components/common/Navigation/SimpleNav';
import Container from '@/components/common/Container';
import {
  SignUpAgreeChk,
  SignUpAgreeModal,
  SignUpAgreeTitle,
} from '@/components/auth';
import 'react-sheet-slide/style.css';
import {
  Agreements,
  POLICY_AGREE,
} from '@/components/auth/SignUpAgreeChk/SignUpAgreeChk.types';

function SignUpAgree() {
  const [open, setOpen] = useState(false);
  const chkAllAgreed = (data: Agreements) =>
    Object.values(data).every((agreement) => agreement.checked);
  const [isOk, setIsOk] = useState(false);
  const [agreements, setAgreements] = useState(POLICY_AGREE);
  const [allAgreed, setAllAgreed] = useState(chkAllAgreed(agreements));
  const [policyName, setPolicyName] = useState('');

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

  const handleAgreeAndClose = (name: string) => {
    const newAgreements = {
      ...agreements,
      [name]: {
        text: agreements[name].text,
        checked: true,
        viewPolicy: agreements[name].viewPolicy,
      },
    };
    setAgreements(newAgreements);
    // 개별 항목의 동의 여부를 확인하여 전체 동의 체크박스 업데이트
    setAllAgreed(chkAllAgreed(newAgreements));
    setOpen(false);
  };

  useEffect(() => {
    if (
      agreements.over14age.checked &&
      agreements.policyAgree.checked &&
      agreements.privacyAgree.checked
    ) {
      setIsOk(true);
    } else {
      setIsOk(false);
    }
  }, [agreements]);

  const handleOpen = (name: string) => {
    setOpen(true);
    setPolicyName(name);
  };

  return (
    <div className="rss-backdrop">
      {!open && <SimpleNav />}
      <Container>
        <SignUpAgreeTitle />
        <SignUpAgreeChk
          handleOpen={handleOpen}
          agreements={agreements}
          setAgreements={setAgreements}
          allAgreed={allAgreed}
          setAllAgreed={setAllAgreed}
          isOk={isOk}
          handleAgreeChange={handleAgreeChange}
        />
      </Container>
      <SignUpAgreeModal
        open={open}
        setOpen={setOpen}
        policyName={policyName}
        setPolicyName={setPolicyName}
        handleAgreeAndClose={handleAgreeAndClose}
      />
    </div>
  );
}

export default SignUpAgree;
