import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './CreatorInfo.styles';
import { SearchCreatorProfile } from '@/apis/search';
import { CreatorDetailProps } from '../CreatorDetail/CreatorDetail.types';
import { Shorts, Spots } from '@/components/common';

interface Slide {
  tripRecordId: number;
  storeCount: number;
  storedCount: number;
  thumbnailUrl: string;
  tripRecordTitle: string;
  videoUrl: string;
  memberId: number;
  memberName: string;
  profileImageUrl: string;
}

const CreatorInfo = () => {
  const location = useLocation();
  const { state } = location;
  const { memberId } = state || {};

  const [creatorProfile, setCreatorProfile] = useState<
    CreatorDetailProps['data'] | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (memberId) {
          const creatorData = await SearchCreatorProfile(memberId);
          setCreatorProfile(creatorData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [memberId]);

  const videosAsSlides: Slide[] | [] =
    creatorProfile?.videos?.map((video) => ({
      tripRecordId: video.tripRecordId,
      storeCount: video.storeCount,
      storedCount: video.storeCount,
      thumbnailUrl: video.thumbnailUrl,
      tripRecordTitle: video.tripRecordTitle,
      videoUrl: video.videoUrl,
      memberId: video.memberId,
      memberName: video.memberName,
      profileImageUrl: video.profileImageUrl,
    })) || [];

  return (
    <Styled.CreatorInfoWrap>
      <div>
        <Styled.InfoSubtitle>쇼츠</Styled.InfoSubtitle>
        {creatorProfile !== null && (
          <Shorts slides={videosAsSlides} slidesPerView={2.1} />
        )}
        {creatorProfile === null && <Styled.Loading>Loading...</Styled.Loading>}
      </div>
      <div>
        <Styled.InfoSubtitle>여정</Styled.InfoSubtitle>
        {creatorProfile !== null && (
          <Spots
            creator={creatorProfile.tripRecords}
            slidesPerView={2.75}
            sort="left"
            fontSize={10}
          />
        )}
        {creatorProfile === null && <Styled.Loading>Loading...</Styled.Loading>}
      </div>
    </Styled.CreatorInfoWrap>
  );
};

export default CreatorInfo;
