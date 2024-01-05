import * as Styled from './Text.styles';
import TextProps from './Text.types';

const Text = ({
  children,
  fontSize = 14,
  fontWeight = 400,
  color = 'black',
  tag,
}: TextProps) => {
  const stringifiedSize = `${fontSize / 16}rem`;
  return (
    <Styled.Text
      as={tag}
      fontSize={stringifiedSize}
      fontWeight={fontWeight}
      color={color}>
      {children}
    </Styled.Text>
  );
};

export default Text;
