import { BsTagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Text } from '@/components/common';
import * as Styled from './Tag.styles';
import { TagProps } from './Tag.types';

/**
 * @param children : Tag의 텍스트
 * @param fontSize: Tag 텍스트의 폰트 사이즈 (단위: 픽셀 숫자) / 기본: 12
 * @param color: Tag 아이콘의 색깔 - 'primary' / 기본: black
 * @param bgColor: Tag 배경색 - 'white' / 기본: primary
 * @param size: Tag의 padding 값 - 'sm'
 * @param src: Tag 클릭 시 이동 주소
 */

const Tag = ({
  children,
  fontSize = 12,
  color,
  bgColor,
  size,
  src,
}: TagProps) => {
  return (
    <Link to={`${src}`} target="_blank">
      <Styled.Container $bgColor={bgColor} $size={size}>
        <Styled.TagIcon $color={color}>
          <BsTagFill />
        </Styled.TagIcon>
        <Text fontSize={fontSize} fontWeight={700}>
          {children}
        </Text>
      </Styled.Container>
    </Link>
  );
};

export default Tag;
