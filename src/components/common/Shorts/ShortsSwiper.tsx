import { Slide } from './Shorts.types';
import * as Styled from './Shorts.style';
import Bookmark from '../Bookmark/Bookmark';

const ShortsSwiper: React.FC<Slide> = ({ img, title, bookmark }) => (
  <Styled.SliderContent>
    <Styled.SliderBackground>
      <img src={img} alt={title} />
    </Styled.SliderBackground>
    <Styled.Bookmark>
      <Bookmark count={bookmark} />
    </Styled.Bookmark>
    <Styled.ShortTitle>{title}</Styled.ShortTitle>
  </Styled.SliderContent>
);

export default ShortsSwiper;
