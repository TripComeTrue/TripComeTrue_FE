import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CreatorData } from './HomeCreator.types';
import theme from '@/styles/theme';
import bookmarkIcon from '/bookmarkPress.svg';

const HotPostWrap = styled.div`
  margin-top: 1.8rem;

  position: relative;
`;

const PostUserWrap = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &:hover p {
    text-decoration: underline;
  }

  &:hover {
    cursor: pointer;
  }
`;

const UserImg = styled.div`
  img {
    width: 4.125rem;
    border-radius: 50%;
  }
`;

const UserInfo = styled.div`
  margin-left: 1rem;
  font-size: ${theme.fontSizes.sm};

  p {
    font-weight: ${theme.fontWeights.bold};
  }
`;

const PostBackground = styled.div`
  position: absolute;
  top: 8rem;

  width: 100%;
  height: 6.5rem;

  background-color: ${theme.brand.primary};
`;

const SwiperDiv = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;

const SwiperWrap = styled(Swiper)`
  margin-top: 0.6rem;
  margin-left: 1rem;
  position: relative;

  background-color: transparent;
`;

const SwiperSlideWrap = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SliderImg = styled.div`
  position: relative;
  img {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 10px;
  }
`;

const Bookmark = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.brand.white};

  img {
    margin-right: 0.2rem;

    width: 1rem;
  }
`;

const SliderTitle = styled.div`
  margin-top: -0.2rem;
  font-size: 10px;
  font-weight: ${theme.fontWeights.bold};
  padding-bottom: 1rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const HomeCreatorPost = ({ creator }: { creator: CreatorData }) => {
  return (
    <HotPostWrap>
      <PostUserWrap>
        <UserImg>
          <img src={creator.userImg} alt="userImg" />
        </UserImg>
        <UserInfo>
          <p>{creator.username}</p>
          <div>{creator.userInfo}</div>
        </UserInfo>
      </PostUserWrap>

      <PostBackground> </PostBackground>

      <SwiperDiv>
        <SwiperWrap
          spaceBetween={6}
          slidesPerView={2.9}
          direction="horizontal"
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
          {creator.posts.map((item) => (
            <SwiperSlideWrap key={item.postImg}>
              <SliderImg>
                <img src={item.postImg} alt="img" />
                <Bookmark>
                  <img src={bookmarkIcon} alt="bookmarkIcon" />
                  {item.bookmark}
                </Bookmark>
              </SliderImg>
              <SliderTitle>{item.postTitle}</SliderTitle>
            </SwiperSlideWrap>
          ))}
        </SwiperWrap>
      </SwiperDiv>
    </HotPostWrap>
  );
};

export default HomeCreatorPost;
