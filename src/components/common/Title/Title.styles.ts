import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.text.black};
`;

export default Title;
