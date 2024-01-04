import * as Styled from './Title.styles';
import TitleProps from './Title.types';

const Title = ({ children }: TitleProps) => {
  return <Styled.Title>{children}</Styled.Title>;
};

export default Title;
