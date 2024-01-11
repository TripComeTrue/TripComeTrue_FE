// HomeMDChoice.tsx
import { CityData } from './HomeMD.types';
import * as Styled from './HomeMD.styles';
import Spots from '@/components/common/Spots/Spots';

interface HomeMDChoiceProps {
  city: CityData[];
}

const HomeMDChoice: React.FC<HomeMDChoiceProps> = ({ city }) => {
  return (
    <Styled.SwiperLeftWrap>
      <Spots creator={city} slidesPerView={2.1} sort="left" fontSize={14} />
    </Styled.SwiperLeftWrap>
  );
};

export default HomeMDChoice;
