import { ShareProps } from './Share.types';
import * as Styled from './Share.styles';

function Share({ icon, children }: ShareProps) {
  return (
    <Styled.ShareBtn>
      {icon} {children}
    </Styled.ShareBtn>
  );
}

export default Share;
