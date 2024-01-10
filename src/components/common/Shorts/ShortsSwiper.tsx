import { Slide } from './Shorts.types';
// import PropTypes from 'prop-types';
import * as Styled from './Shorts.style';
import bookmarkIcon from '/bookmarkPress.svg';

const ShortsSwiper: React.FC<Slide> = ({ img, title, bookmark }) => (
  // <Styled.SwiperSlideWrap>
  <Styled.SliderContent>
    <Styled.SliderBackground>
      <img src={img} alt={title} />
    </Styled.SliderBackground>
    <Styled.Bookmark>
      <img src={bookmarkIcon} alt="bookmark" />
      {bookmark}
    </Styled.Bookmark>
    <Styled.ShortTitle>{title}</Styled.ShortTitle>
  </Styled.SliderContent>
  // </Styled.SwiperSlideWrap>
);

// ShortsSwiper.propTypes = {
//   img: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   bookmark: PropTypes.number.isRequired,
// };

export default ShortsSwiper;
