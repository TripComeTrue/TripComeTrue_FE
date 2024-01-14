import banner from '/banner.png';
import * as Styled from './Banner.styles';

const Banner = () => {
  return (
    <Styled.BannerWrapper>
      <Styled.BannerImg src={banner} alt="야놀자 배너" />
    </Styled.BannerWrapper>
  );
};

export default Banner;
