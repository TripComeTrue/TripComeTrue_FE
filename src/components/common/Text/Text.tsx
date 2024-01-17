import pxToRem from '@/utils/pxToRem';
import * as Styled from './Text.styles';
import TextProps from './Text.types';

/**
 * @param children : Text 내부 요소
 * @param fontSize: font-size (단위: 픽셀숫자) / 기본: 14px
 * @param fontWeight: font-weight (단위: 숫자) / 기본 400
 * @param color: color - 'white' | 'black' | 'gray' | 'primary' | 'tag' / 기본: black
 * @param tag: tag 변경 / 기본: span태그
 */

const Text = ({
  children,
  fontSize = 14,
  fontWeight = 400,
  color = 'black',
  tag,
}: TextProps) => {
  const stringifiedSize = pxToRem(fontSize);
  return (
    <Styled.Text
      as={tag}
      $fontSize={stringifiedSize}
      $fontWeight={fontWeight}
      $color={color}>
      {children}
    </Styled.Text>
  );
};

export default Text;
