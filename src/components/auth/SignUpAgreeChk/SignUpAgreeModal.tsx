import { useRef } from 'react';
import {
  Sheet,
  Header,
  Content,
  Footer,
  detents,
  Portal,
} from 'react-sheet-slide';
import * as Styled from './SignUpAgreeModal.styles';
import { SignUpAgreeModalProps } from './SignUpAgreeModal.types';
import { Button } from '@/components/common';
import {
  getPolicyText,
  getPolicyTitle,
} from '../SignUpPolicy/SignUpPolicy.utils';

function SignUpAgreeModal({
  children,
  open,
  setOpen,
  policyName,
  handleAgreeAndClose,
}: SignUpAgreeModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Portal>
      <Sheet
        ref={ref}
        open={open}
        onDismiss={() => setOpen(false)}
        selectedDetent={detents.large}
        detents={(props) => [detents.large(props), detents.medium(props)]}>
        <Header className="rss-header" scrolledClassName="rss-header-scrolled">
          {getPolicyTitle(policyName)}
        </Header>
        <Content className="rss-content">
          <Styled.SignUpAgreeModalContent>
            {getPolicyText(policyName)}
            {children}
          </Styled.SignUpAgreeModalContent>
        </Content>
        <Footer className="rss-footer">
          <Button
            size="lg"
            variants="primary"
            onClick={() => handleAgreeAndClose(policyName)}>
            동의 및 닫기
          </Button>
        </Footer>
      </Sheet>
    </Portal>
  );
}

export default SignUpAgreeModal;
