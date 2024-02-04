import banner from '/banner.png';
import * as Styled from './Banner.styles';
import { useParams } from 'react-router-dom';

const Banner = () => {
  const { isDomestic } = useParams() as { isDomestic: '국내' | '해외' };
  const url = isDomestic === '국내' ? 'place' : 'gplace';
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
