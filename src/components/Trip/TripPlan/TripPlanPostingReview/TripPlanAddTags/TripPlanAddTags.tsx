import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { IoCloseCircle } from 'react-icons/io5';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import speechBubble from '/images/speech-bubble.svg';
import * as Styled from './TripPlanAddTags.styles';
import TripPlanTagsModal from './TripPlanTagsModal/TripPlanTagsModal';
import { TagForm } from './TripPlanTagsModal/TripPlanTagsModal.types';
import { TripPlanAddTagsProps } from './TripPlanAddTags.types';
import { getTagText } from '@/constants/tripPlanAndRecord';

const TripPlanAddTags = ({
  handleTagsUpdate,
  dayIndex,
  placeIndex,
  currentTagType,
  currentTagUrl,
}: TripPlanAddTagsProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { register, watch, setValue, handleSubmit } = useForm<TagForm>();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const onSubmit = (data: TagForm) => {
    handleTagsUpdate(dayIndex, placeIndex, data.type, data.url);
    console.log(dayIndex, placeIndex, data.type, data.url);
    handleCloseModal();
  };

  const onClickInputClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleTagsUpdate(dayIndex, placeIndex, '', '');
    e.stopPropagation();
    e.preventDefault();
  };

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

      {currentTagType && currentTagUrl ? (
        <Styled.ShowSelectedTag>
          <Link to={currentTagUrl}>
            <LocalOfferIcon
              className="tag-icon"
              style={{
                width: '1rem',
                height: '1rem',
                fill: 'black',
              }}
            />
            {getTagText(currentTagType)}
            <Styled.TripPlanTagClearButton
              onClick={(e) => onClickInputClear(e)}>
              <IoCloseCircle />
            </Styled.TripPlanTagClearButton>
          </Link>
        </Styled.ShowSelectedTag>
      ) : (
        <>
          <Styled.TagsAddButton onClick={handleOpenModal}>
            <AddCircleIcon
              style={{
                width: '1.2rem',
                height: '1.2rem',
                fill: '#b4f34c',
                marginRight: '0.3rem',
              }}
            />{' '}
            태그 추가하기 <img src={speechBubble} alt="add tag" />
          </Styled.TagsAddButton>
        </>
      )}

      <Styled.TagsInput />
      <TripPlanTagsModal
        open={modalOpen}
        onClose={handleCloseModal}
        register={register}
        watch={watch}
        setValue={setValue}
        onSubmit={handleSubmit(onSubmit)}
      />
    </Styled.TagsInputContainer>
  );
};

export default TripPlanAddTags;
