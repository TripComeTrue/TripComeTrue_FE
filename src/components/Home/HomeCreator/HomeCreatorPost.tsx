import { CreatorData } from './HomeCreator.types';
import * as Styled from './HomeCreator.styles';
import Spots from '@/components/common/Spots/Spots';
import Creator from '@/components/common/Creator/Creator';

const HomeCreatorPost = ({ creator }: { creator: CreatorData }) => {
  return (
    <Styled.HotPostWrap>
      {/* Creator 공통 컴포넌트 사용 */}
      <Creator creator={creator} starRate={null} />

      <Styled.PostBackground> </Styled.PostBackground>

      <Styled.SwiperDiv>
        {/* Spot 공통 컴포넌트 사용 */}
        <Spots
          creator={creator.posts}
          slidesPerView={2.5}
          sort="center"
          fontSize={10}
        />
      </Styled.SwiperDiv>
    </Styled.HotPostWrap>
  );
};

export default HomeCreatorPost;
