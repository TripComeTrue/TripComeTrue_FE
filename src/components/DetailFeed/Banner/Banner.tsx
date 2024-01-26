import banner from '/banner.png';
import * as Styled from './Banner.styles';

const Banner = ({ isDomestic }: { isDomestic: boolean }) => {
  const url = isDomestic ? 'place' : 'gplace';
  return (
    <Styled.BannerWrapper>
      <a
        href={`https://www.yanolja.com/search?tab=${url}`}
        target="_blank"
        rel="noreferrer">
        <Styled.BannerImg src={banner} alt="야놀자 배너" />
      </a>
    </Styled.BannerWrapper>
  );
};

export default Banner;
