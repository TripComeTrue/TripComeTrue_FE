import { Text } from '@/components/common';
import * as Styled from './SubTitle.styles';
import SubTitleProps from './SubTitle.types';

/**
 * @param children : SubTitle의 텍스트
 * @param mt: margin-top (단위: 픽셀 숫자) / 기본: 0
 * @param mb: margin-bottom (단위: 픽셀 숫자) / 기본: 0
 * @param icon: SubTitle 텍스트 앞에 들어가는 아이콘 / 기본: undefined
 * @param variant: more - 더보기 버튼 / 기본: 버튼X
 * @param onClickButton: 버튼 클릭 시 작동하는 함수 / 기본: undefined
 */

const SubTitle = ({
  children,
  mt = 0,
  mb = 0,
  icon,
  variant,
  onClickButton,
}: SubTitleProps) => {
  const pxToRem = (value: number): string => {
    return `${value / 16}rem`;
  };

  const stringifiedMt = pxToRem(mt);
  const stringifiedMb = pxToRem(mb);

  return (
    <Styled.Container $mt={stringifiedMt} $mb={stringifiedMb}>
      <Styled.SubTitleContainer>
        {icon && <img src={icon} alt="icon" />}
        <Text tag="h2" fontSize={18} fontWeight={700}>
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
