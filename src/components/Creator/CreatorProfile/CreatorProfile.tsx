import Creator from '@/components/common/Creator/Creator';
import exampleImg from '/domestic1.jpg';

export interface CreatorData {
  userImg: string;
  username: string;
  userInfo: string;
  rate?: number;
}

const CreatorProfile = () => {
  const CreatorDatas: CreatorData = {
    userImg: exampleImg,
    username: '맥주덕후',
    userInfo:
      '독일에서 교환학생하며 실감나는 유럽의 삶을 담고 있는 유럽의 맥주덕후입니다.',
  };

  return (
    <div>
      <Creator creator={CreatorDatas} starRate={null} />
    </div>
  );
};

export default CreatorProfile;
