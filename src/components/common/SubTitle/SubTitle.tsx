import { Text } from '@/components/common';
import * as Styled from './SubTitle.styles';
import SubTitleProps from './SubTitle.types';

/**
 * @param children : SubTitle의 텍스트
 * @param margin: margin (단위: rem) / 기본: '0'
 * @param fontSize: font-size (단위: 픽셀 숫자) / 기본: 18
 * @param icon: SubTitle 텍스트 앞에 들어가는 아이콘 / 기본: undefined
 * @param variant: more - 더보기 버튼 / 기본: 버튼X
 * @param onClickButton: 버튼 클릭 시 작동하는 함수 / 기본: undefined
 */

const SubTitle = ({
  children,
  margin = '0',
  fontSize = 18,
  icon,
  variant,
  onClickButton,
}: SubTitleProps) => {
  return (
    <Styled.Container $margin={margin}>
      <Styled.SubTitleContainer>
        {icon && <img src={icon} alt="icon" style={{ maxWidth: 20 }} />}
        <Text tag="h2" fontSize={fontSize} fontWeight={700}>
          {children}
        </Text>
      </Styled.SubTitleContainer>
      {variant && (
        <Styled.MoreButton type="button" onClick={onClickButton}>
          <Text fontSize={12} color="gray">
            더보기
          </Text>
        </Styled.MoreButton>
      )}
    </Styled.Container>
  );
};

export default SubTitle;
