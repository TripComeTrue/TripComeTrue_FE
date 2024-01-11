import { CreatorData } from './HomeCreator.types';
import * as Styled from './HomeCreator.styles';
import Spots from '@/components/common/Spots/Spots';

const HomeCreatorPost = ({ creator }: { creator: CreatorData }) => {
  return (
    <Styled.HotPostWrap>
      <Styled.PostUserWrap>
        <Styled.UserImg>
          <img src={creator.userImg} alt="userImg" />
        </Styled.UserImg>
        <Styled.UserInfo>
          <p>{creator.username}</p>
          <div>{creator.userInfo}</div>
        </Styled.UserInfo>
      </Styled.PostUserWrap>

      <Styled.PostBackground> </Styled.PostBackground>

      <Styled.SwiperDiv>
        <Spots
          creator={creator.posts}
          slidesPerView={2.5}
          sort="left"
          fontSize={10}
        />
      </Styled.SwiperDiv>
    </Styled.HotPostWrap>
  );
};

export default HomeCreatorPost;
