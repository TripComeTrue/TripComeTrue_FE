import * as Styled from './Creator.styles';
import { CreatorData } from './Creator.types';
import StarIcon from '/starFill.svg';

/**
 * 크리에이터 프로필 공통 컴포넌트입니다.
 * @param creator Swiper에 들어가야하는 이름(username: string), 대표 이미지(userInfo: string), userImg(string) 등이 들어있는 배열입니다.
 * @param starRate : number | null로 props로 전달해주시면 됩니다.
 */

const Creator = ({
  creator,
  starRate = null,
}: {
  creator: CreatorData;
  starRate: number | null;
}) => {
  return (
    <Styled.PostUserWrap>
      <Styled.UserImg>
        <img src={creator.userImg} alt="userImg" />
      </Styled.UserImg>
      <Styled.UserInfo>
        <p>{creator.username}</p>
        <div>{creator.userInfo}</div>
        {starRate !== null && (
          <Styled.UserRate>
            <img src={StarIcon} alt="star" />
            {starRate}
          </Styled.UserRate>
        )}
      </Styled.UserInfo>
    </Styled.PostUserWrap>
  );
};

export default Creator;
