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
        {/* <Styled.SwiperWrap
          spaceBetween={6}
          slidesPerView={2.8}
          direction="horizontal"
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
          {creator.posts.map((item) => (
            <Styled.SwiperSlideWrap key={item.postImg}>

              <Styled.SliderImg>
                <img src={item.postImg} alt="img" />
                <Styled.Bookmark>
                  <img src={bookmarkIcon} alt="bookmarkIcon" />
                  {item.bookmark}
                </Styled.Bookmark>
              </Styled.SliderImg>
              <Styled.SliderTitle>{item.postTitle}</Styled.SliderTitle>
              
            </Styled.SwiperSlideWrap>
          ))}
        </Styled.SwiperWrap> */}

        <Spots creator={creator.posts} slidesPerView={2.5} sort="left" />
      </Styled.SwiperDiv>
    </Styled.HotPostWrap>
  );
};

export default HomeCreatorPost;
