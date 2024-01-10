import { ChangeEvent } from 'react';

interface AgreementsValues {
  text: string;
  checked: boolean;
  viewPolicy: boolean;
}

export interface Agreements {
  [name: string]: AgreementsValues;
}

export const POLICY_AGREE: Agreements = {
  over14age: {
    text: '(필수) 만 14세 이상입니다.',
    checked: false,
    viewPolicy: false,
  },
  policyAgree: {
    text: '(필수) 서비스 이용 약관에 동의',
    checked: false,
    viewPolicy: true,
  },
  privacyAgree: {
    text: '(필수) 개인정보 수집 이용에 동의',
    checked: false,
    viewPolicy: true,
  },
  marketingAgree: {
    text: '(선택) 숙소 특가, 쿠폰 등 마케팅 수신 동의',
    checked: false,
    viewPolicy: true,
  },
  locationAgree: {
    text: '(선택) 위치 정보 이용 약관 동의',
    checked: false,
    viewPolicy: true,
  },
};

export interface SignUpAgreeChkProps {
  agreements: Agreements;
  setAgreements: React.Dispatch<React.SetStateAction<Agreements>>;
  allAgreed: boolean;
  setAllAgreed: (allAgreed: boolean) => void;
  isOk: boolean;
  handleAgreeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleOpen: (name: string) => void;
}
