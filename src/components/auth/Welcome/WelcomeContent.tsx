import { Text } from '@/components/common';
import * as Styled from './WelcomeContent.styles';

function Welcome() {
  return (
    <Styled.WelcomeContentWrap>
      <Styled.WelcomeLogo>
        Welcome to
        <img src="/tripComeTrue.svg" alt="tripcometrue" />
      </Styled.WelcomeLogo>
      <h2>
        <Text fontSize={24} fontWeight={700}>
          트립컴트루
        </Text>
        <Text fontSize={24} fontWeight={400}>
          에 <br />
          오신 것을 환영합니다!
        </Text>
      </h2>
      <Text tag="p" fontSize={14} fontWeight={600} color="gray">
        가입 축하 선물로 20 트립포인트를 <br />
        적립해드렸으니 지금 바로 확인해보세요
      </Text>
      <img src="/welcome.png" alt="20p" />
    </Styled.WelcomeContentWrap>
  );
}

export default Welcome;
