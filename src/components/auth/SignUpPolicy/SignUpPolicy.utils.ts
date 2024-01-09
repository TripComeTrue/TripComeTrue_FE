import { ReactNode } from 'react';
import { POLICY_AGREE } from '../SignUpAgreeChk/SignUpAgreeChk.types';
import {
  SignUpLocationAgree,
  SignUpMarketingAgree,
  SignUpPolicyAgree,
  SignUpPrivacyAgree,
} from '..';

export function getPolicyTitle(policyName: string): string {
  switch (policyName) {
    case 'policyAgree':
      return POLICY_AGREE.policyAgree.text;
    case 'privacyAgree':
      return POLICY_AGREE.privacyAgree.text;
    case 'marketingAgree':
      return POLICY_AGREE.marketingAgree.text;
    case 'locationAgree':
      return POLICY_AGREE.locationAgree.text;
    default:
      return '';
  }
}

export function getPolicyText(policyName: string): ReactNode {
  switch (policyName) {
    case 'policyAgree':
      return SignUpPolicyAgree();
    case 'privacyAgree':
      return SignUpPrivacyAgree();
    case 'marketingAgree':
      return SignUpMarketingAgree();
    case 'locationAgree':
      return SignUpLocationAgree();
    default:
      return '';
  }
}
