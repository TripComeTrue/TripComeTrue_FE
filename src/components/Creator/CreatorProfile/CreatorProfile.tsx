import Creator from '@/components/common/Creator/Creator';
import styled from 'styled-components';
import starFill from '/starFill.svg';

export interface CreatorData {
  userImg: string;
  username: string;
  userInfo: string;
  rate?: number;
  userId: string;
  review: number;
  shorts: number;
}

const CreatorContainer = styled.div`
  margin: 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CreatorInfo = styled.div`
  margin-top: 0.7rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const CreatorInfoWrap = styled.div`
  position: relative;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    right: -1rem;
    width: 0.05rem;
    height: 2.5rem;
    background-color: #dcdcdc;
  }

  &:last-of-type:after {
    visibility: hidden;
  }
`;

const CreatorRate = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-align: center;

  img {
    width: 1rem;
    margin-right: 0.2rem;
  }
`;

const CreatorProfile = ({ data }: { data: CreatorData }) => {
  return (
    <CreatorContainer>
      <Creator creator={data} starRate={null} />

      <CreatorInfo>
        <CreatorInfoWrap>
          <div>평균 별점</div>
          <CreatorRate>
            <img src={starFill} alt="starIcon" />
            {data.rate}
          </CreatorRate>
        </CreatorInfoWrap>

        <CreatorInfoWrap>
          <div>작성한 여행 후기 수</div>
          <CreatorRate>{data.review}</CreatorRate>
        </CreatorInfoWrap>

        <CreatorInfoWrap>
          <div>올린 쇼츠 수</div>
          <CreatorRate>{data.shorts}</CreatorRate>
        </CreatorInfoWrap>
      </CreatorInfo>
    </CreatorContainer>
  );
};

export default CreatorProfile;
