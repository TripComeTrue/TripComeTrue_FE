import { useNavigate } from 'react-router-dom';
import * as Styled from './HomeCreator.styles';
import Spots from '@/components/common/Spots/Spots';
import Creator from '@/components/common/Creator/Creator';
import { MemberInfoData, PostData, TripRecordsData } from './HomeCreator.types';

const HomeCreatorPost = ({
  creator,
  creatorData,
}: {
  creator: MemberInfoData;
  creatorData: TripRecordsData[];
}) => {
  const navigate = useNavigate();

  return (
    <Styled.HotPostWrap>
      <div
        onClick={() => {
          navigate(`/creator/${creator.memberId}`);
        }}>
        <Creator creator={creator} starRate={null} />
      </div>

      <Styled.PostBackground> </Styled.PostBackground>

      <Styled.SwiperDiv>
        <Spots
          creator={creatorData.map((record: PostData) => ({
            imageUrl: record.imageUrl,
            storedCount: record.storedCount,
            tripRecordTitle: record.tripRecordTitle,
            reviews: record.reviews,
            onClick: () => navigate(`/trip/detail/${record.tripRecordId}`),
          }))}
          slidesPerView={2.5}
          sort="center"
          fontSize={10}
        />
      </Styled.SwiperDiv>
    </Styled.HotPostWrap>
  );
};

export default HomeCreatorPost;
