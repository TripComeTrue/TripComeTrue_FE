// import { useState } from 'react';
// import { Link } from 'react-router-dom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import speechBubble from '/images/speech-bubble.svg';
import * as Styled from './TripPlanAddTags.styles';
// import TripPlanTagsModal from './TripPlanTagsModal/TripPlanTagsModal';

const TripPlanAddTags = () => {
  // const [modalOpen, setModalOpen] = useState<boolean>(false);
  // const [tags, setTags] = useState({ type: '', url: '' });

  // const handleOpenModal = () => setModalOpen(true);
  // const handleCloseModal = () => setModalOpen(false);
  // const handleSubmitTags = (type: string, url: string) => {
  //   setTags({ type, url });
  // };

  return (
    <Styled.TagsInputContainer>
      <Styled.TagsInputTitle>
        <LocalOfferIcon
          className="tag-icon"
          style={{
            width: '1.1rem',
            height: '1.1rem',
            fill: '#b4f34c',
          }}
        />
        여행 태그 추가하고 포인트 받아가세요!
      </Styled.TagsInputTitle>
      {/* <Link to="/trip/addtag"> */}
      <Styled.TagsAddButton>
        <AddCircleIcon
          style={{
            width: '1.2rem',
            height: '1.2rem',
            fill: '#b4f34c',
            marginRight: '0.3rem',
          }}
        />{' '}
        태그 추가하기 <img src={speechBubble} aria-label="add tag" />
      </Styled.TagsAddButton>
      {/* </Link> */}
      <Styled.TagsInput />
      {/* <TripPlanTagsModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSubmitTags={() => handleSubmitTags}
      /> */}
    </Styled.TagsInputContainer>
  );
};

export default TripPlanAddTags;
