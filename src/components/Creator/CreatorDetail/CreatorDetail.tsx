import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import CreatorProfile from '../CreatorProfile/CreatorProfile';
import * as Styled from '../CreatorMore/CreatorMore.styles';
import { SearchCreatorProfile } from '@/apis/search';
import { CreatorDetailProps } from './CreatorDetail.types';

const CreatorDetail = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

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

  console.log(creatorProfile);

  return (
    <Styled.CreatorAllWrap>
      <Styled.CreatorTop>
        <IoIosArrowBack
          onClick={handleGoBack}
          style={{ fontSize: 20, marginRight: 8 }}
        />
        크리에이터 프로필
      </Styled.CreatorTop>

      <div>
        {creatorProfile !== null && (
          <CreatorProfile data={creatorProfile.memberDetailInfo} />
        )}
      </div>
    </Styled.CreatorAllWrap>
  );
};

export default CreatorDetail;
