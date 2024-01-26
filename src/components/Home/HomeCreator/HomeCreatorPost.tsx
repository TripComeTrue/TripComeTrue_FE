import * as Styled from './HomeCreator.styles';
import Spots from '@/components/common/Spots/Spots';
import Creator from '@/components/common/Creator/Creator';
import { MemberInfoData, TripRecordsData } from './HomeCreator.types';

const HomeCreatorPost = ({
  creator,
  creatorData,
}: {
  creator: MemberInfoData;
  creatorData: TripRecordsData;
}) => {
  return (
    <Styled.HotPostWrap>
      {/* Creator 공통 컴포넌트 사용 */}
      <Creator creator={creator} starRate={null} />

      <Styled.PostBackground> </Styled.PostBackground>

      <Styled.SwiperDiv>
        {/* Spot 공통 컴포넌트 사용 */}
        <Spots
          creator={creatorData}
          slidesPerView={2.5}
          sort="center"
          fontSize={10}
        />
      </Styled.SwiperDiv>
    </Styled.HotPostWrap>
  );
};

export default HomeCreatorPost;
