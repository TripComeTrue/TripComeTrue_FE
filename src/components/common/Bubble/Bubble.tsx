import { Text } from '..';
import * as Styled from './Bubble.styles';
import { BubbleProps } from './Bubble.types';

const Bubble = ({ children, direction }: BubbleProps) => {
  return (
    <Styled.Bubble $direction={direction}>
      <Text fontSize={11} fontWeight={700}>
        {children}
      </Text>
    </Styled.Bubble>
  );
};

export default Bubble;
