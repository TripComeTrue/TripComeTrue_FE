import * as Styled from './Creator.styles';
import { CreatorData } from './Creator.types';
import StarIcon from '/starFill.svg';

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
