import Creator from '@/components/common/Creator/Creator';
import starFill from '/starFill.svg';
import * as Styled from './CreatorProfile.styles';
import { CreatorData } from '../CreatorMore/CreateMore.types';

const CreatorProfile = ({ data }: { data: CreatorData }) => {
  return (
    <Styled.CreatorContainer>
      <Styled.CreatorWrap>
        <Creator creator={data} starRate={null} />
      </Styled.CreatorWrap>

      <Styled.CreatorInfo>
        <Styled.CreatorInfoWrap>
          <div>평균 별점</div>
          <Styled.CreatorRate>
            <img src={starFill} alt="starIcon" />
            {data.rate}
          </Styled.CreatorRate>
        </Styled.CreatorInfoWrap>

        <Styled.CreatorInfoWrap>
          <div>작성한 여행 후기 수</div>
          <Styled.CreatorRate>{data.review}</Styled.CreatorRate>
        </Styled.CreatorInfoWrap>

        <Styled.CreatorInfoWrap>
          <div>올린 쇼츠 수</div>
          <Styled.CreatorRate>{data.shorts}</Styled.CreatorRate>
        </Styled.CreatorInfoWrap>
      </Styled.CreatorInfo>
    </Styled.CreatorContainer>
  );
};

export default CreatorProfile;
