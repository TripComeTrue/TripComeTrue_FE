import pxToRem from '@/utils/pxToRem';
import * as Styled from './Avatar.styles';
import AvatarProps from './Avatar.types';

/**
 * @param size : AvatarContainer의 width, height 값 / 기본: 66px (4.125rem)
 * @param margin : AvatarContainer의 margin / 기본: '0'
 * @param src : img 주소
 */

const Avatar = ({ size = 66, margin = '0', src }: AvatarProps) => {
  const stringifiedSize = pxToRem(size);

  return (
    <Styled.AvatarContainer $size={stringifiedSize} $margin={margin}>
      <Styled.AvatarImage src={src} alt="크리에이터" />
    </Styled.AvatarContainer>
  );
};

export default Avatar;
