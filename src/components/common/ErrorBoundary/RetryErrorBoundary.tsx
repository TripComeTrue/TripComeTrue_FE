import { PropsWithChildren } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Button, Text } from '..';
import * as Styled from './ErrorBoundary.styles';

const Fallback = ({ resetErrorBoundary }: FallbackProps) => (
  <Styled.ErrorContent>
    <Styled.ErrorTitle>
      <Text tag="h3" fontSize={18} fontWeight={700}>
        데이터를 불러오는데 실패하였습니다.
      </Text>
      <Text tag="p" fontWeight={600}>
        에러가 지속되면 고객센터로 문의해주세요.
      </Text>
    </Styled.ErrorTitle>
    <Button
      variants="primary"
      onClick={() => resetErrorBoundary()}
      type="button">
      다시 시도
    </Button>
  </Styled.ErrorContent>
);

const RetryErrorBoundary = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackRender={Fallback}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default RetryErrorBoundary;
