import { SubTitle, Text } from '@/components/common';
import * as Styled from './Information.styles';

const INFORMATION_DATA = [
  { id: 1, content: '태국어', imgUrl: '' },
  { id: 2, content: '2시간 느림', imgUrl: '' },
  { id: 3, content: '바트(THB)', imgUrl: '' },
  { id: 4, content: '220V', imgUrl: '' },
  { id: 5, content: '90일 무비자 체류', imgUrl: '' },
];

const Information = () => {
  return (
    <Styled.InformationWrapper>
      <SubTitle>기본 정보</SubTitle>
      <Styled.InformationBox>
        {INFORMATION_DATA.map((data) => (
          <Styled.InformationItem key={data.id}>
            <Styled.InformationIconBox>
              <Styled.InformationIcon />
            </Styled.InformationIconBox>
            <Text fontSize={13} fontWeight={700}>
              {data.content}
            </Text>
          </Styled.InformationItem>
        ))}
      </Styled.InformationBox>
    </Styled.InformationWrapper>
  );
};

export default Information;
