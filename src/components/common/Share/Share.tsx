import { PropsWithChildren } from 'react';
import { ShareProps } from './Share.types';
import * as Styled from './Share.styles';

function Share({
  icon,
  children,
  onClickShare,
}: PropsWithChildren<ShareProps>) {
  return (
    <Styled.ShareBtn onClick={onClickShare}>
      {icon} {children}
    </Styled.ShareBtn>
  );
}

export default Share;
