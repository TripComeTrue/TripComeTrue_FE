import * as Styled from './SpotCategory.styles';
import LandMark from '/ColorLandmark.svg';
import Restraunt from '/ColorRestraunt.svg';

const SpotCategory = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
}) => {
  return (
    <Styled.SpotCategoryBox>
      <Styled.SpotCategory
        onClick={() => setSelectedCategory('tourist_attraction')}
        selected={selectedCategory === 'tourist_attraction'}>
        <img src={LandMark} alt="카테고리 아이콘" />
        <span>관광지</span>
      </Styled.SpotCategory>
      <Styled.SpotCategory
        onClick={() => setSelectedCategory('restaurant')}
        selected={selectedCategory === 'restaurant'}>
        <img src={Restraunt} alt="카테고리 아이콘" />
        <span>음식점</span>
      </Styled.SpotCategory>
    </Styled.SpotCategoryBox>
  );
};

export default SpotCategory;
