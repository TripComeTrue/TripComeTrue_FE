import { Text } from '@/components/common';
import * as Styled from './MyPageLevel.styles';
import POINT_LEVEL_MENU from '@/constants/MyPage/pointLevel';
import { MyPageLevelProps } from './MyPageLevel.types';

function MyPageLevel({ tripLevel }: MyPageLevelProps) {
  const level = tripLevel.toLowerCase();
  return (
    <>
      <Text tag="h4" fontSize={12} fontWeight={700}>
        현재 등급
      </Text>
      <Styled.MyCurrentLevelWrap>
        {POINT_LEVEL_MENU.map((item) => (
          <Styled.MyCurrentLevelItem
            key={item.level}
            $isactive={`${item.level === level}`}>
            <Styled.MyCurrentLevelItemBg $isactive={`${item.level === level}`}>
              <Styled.LevelImage
                $isactive={`${item.level === level}`}
                $level={item.level}
                $bgColor={item.bgColor}
                $bgSize={item.bgSize}
              />
            </Styled.MyCurrentLevelItemBg>
            {item.name}
          </Styled.MyCurrentLevelItem>
        ))}
      </Styled.MyCurrentLevelWrap>
      <Text tag="h4" fontSize={12} fontWeight={700}>
        등급별 혜택
      </Text>
      <Styled.LevelBenefitWrap>
        {POINT_LEVEL_MENU.map((item) => (
          <Styled.LevelBenefitItem key={item.level}>
            <Styled.LevelBenefitImage
              $isactive="true"
              $level={item.level}
              $bgColor={item.bgColor}
              $bgSize={item.bgSize}
            />
            <div>
              <Styled.LevelBadge $bgColor={item.bgColor}>
                {item.name}레벨
              </Styled.LevelBadge>
              {item.benefit}
            </div>
          </Styled.LevelBenefitItem>
        ))}
      </Styled.LevelBenefitWrap>
    </>
  );
}

export default MyPageLevel;
