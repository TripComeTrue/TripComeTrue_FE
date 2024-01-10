import HomeCreatorPost from './HomeCreatorPost';
import starIcon from '/starIcon.svg';
import exampleImg from '/osaka.png';
import { CreatorData, HotCreatorDataTypes } from './HomeCreator.types';
import { SubTitle } from '@/components/common';

const HomeCreator = () => {
  const HotCreatorDatas: HotCreatorDataTypes = {
    creator1: [
      {
        userImg: exampleImg,
        username: '맥주덕후',
        userInfo:
          '독일에서 교환학생하며 실감나는 유럽의 삶을 담고 있는 유럽의 맥주덕후입니다.',
        posts: [
          {
            postImg: exampleImg,
            bookmark: 300,
            postTitle: '성체가 이렇게나 많은거...',
          },
          {
            postImg: exampleImg,
            bookmark: 352,
            postTitle: '유럽 아파트들은 감성...',
          },
          {
            postImg: exampleImg,
            bookmark: 123,
            postTitle: '성체가 이렇게나 많은거...',
          },
          {
            postImg: exampleImg,
            bookmark: 141,
            postTitle: '유럽 아파트들은 감성...',
          },
          {
            postImg: exampleImg,
            bookmark: 251,
            postTitle: '성체가 이렇게나 많은거...',
          },
        ],
      },
    ],
    creator2: [
      {
        userImg: exampleImg,
        username: '바닷가재',
        userInfo:
          '임시데이터입니당.. 어떻게 바뀔진 모르겠지만 이렇게 데이터가 오겠죵',
        posts: [
          {
            postImg: exampleImg,
            bookmark: 300,
            postTitle: '성체가 이렇게나 많은거...',
          },
          {
            postImg: exampleImg,
            bookmark: 352,
            postTitle: '유럽 아파트들은 감성...',
          },
          {
            postImg: exampleImg,
            bookmark: 123,
            postTitle: '성체가 이렇게나 많은거...',
          },
          {
            postImg: exampleImg,
            bookmark: 141,
            postTitle: '유럽 아파트들은 감성...',
          },
          {
            postImg: exampleImg,
            bookmark: 251,
            postTitle: '성체가 이렇게나 많은거...',
          },
        ],
      },
    ],
    creator3: [
      {
        userImg: exampleImg,
        username: '목..서버 .. 옮겨야하는뎅ㅋ..',
        userInfo:
          '목서버 써보고 싶은데 일단 급해서 얼른 임시 데이터 만든건데오.. 옮기겠습니당..',
        posts: [
          {
            postImg: exampleImg,
            bookmark: 300,
            postTitle: '성체가 이렇게나 많은거...',
          },
          {
            postImg: exampleImg,
            bookmark: 352,
            postTitle: '유럽 아파트들은 감성...',
          },
          {
            postImg: exampleImg,
            bookmark: 123,
            postTitle: '성체가 이렇게나 많은거...',
          },
          {
            postImg: exampleImg,
            bookmark: 141,
            postTitle: '유럽 아파트들은 감성...',
          },
          {
            postImg: exampleImg,
            bookmark: 251,
            postTitle: '성체가 이렇게나 많은거...',
          },
        ],
      },
    ],
    creator4: [
      {
        userImg: exampleImg,
        username: 'api쨩',
        userInfo: '근데 검색 ui 끝내면 api 될 것 같다...!',
        posts: [
          {
            postImg: exampleImg,
            bookmark: 300,
            postTitle: '성체가 이렇게나 많은거...',
          },
          {
            postImg: exampleImg,
            bookmark: 352,
            postTitle: '유럽 아파트들은 감성...',
          },
          {
            postImg: exampleImg,
            bookmark: 123,
            postTitle: '성체가 이렇게나 많은거...',
          },
          {
            postImg: exampleImg,
            bookmark: 141,
            postTitle: '유럽 아파트들은 감성...',
          },
          {
            postImg: exampleImg,
            bookmark: 251,
            postTitle: '성체가 이렇게나 많은거...',
          },
        ],
      },
    ],
  };

  const creatorsArray: CreatorData[][] = Object.values(HotCreatorDatas);
  const selectedIndexes: number[] = [];

  while (selectedIndexes.length < 2) {
    const randomIndex: number = Math.floor(
      Math.random() * creatorsArray.length,
    );

    if (!selectedIndexes.includes(randomIndex)) {
      selectedIndexes.push(randomIndex);
    }
  }

  const selectedCreators: CreatorData[] = selectedIndexes.map(
    (index) => creatorsArray[index][0],
  );

  return (
    <>
      <SubTitle margin="1rem" fontSize={18} icon={starIcon}>
        HOT 여행 크리에이터
      </SubTitle>

      {selectedCreators.map((creator: CreatorData) => (
        <HomeCreatorPost key={creator.username} creator={creator} />
      ))}
    </>
  );
};

export default HomeCreator;
