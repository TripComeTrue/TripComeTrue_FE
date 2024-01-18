// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { TripPlanPrevButton } from '../../TripPlanCommon/TripPlanCommon';
import addTagIcon from '../../../../../../public/images/addtag.png';
import * as Styled from './TripPlanAddTags.styles';
// import TripPlanTagsModal from './TripPlanTagsModal/TripPlanTagsModal';

const TripPlanAddTags = () => {
  //   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const { register, watch, setValue, handleSubmit } = useForm();

  const navigate = useNavigate();
  const goPrev = navigate(-1);

  //   const openModal = () => setIsModalOpen(true);
  //   const closeModal = () => setIsModalOpen(false);

  // const onSubmit = (data) => {
  //     console.log(data);
  //     setIsModalOpen(false);
  // }

  return (
    <>
      <Styled.Title>
        <TripPlanPrevButton onClick={() => goPrev} />
        <p>태그하기</p>
      </Styled.Title>

      <Styled.Container>
        <Styled.PhotoDisplay>
          <AddCircleIcon
            className="plus-icon"
            style={{
              width: '1.2rem',
              height: '1.2rem',
              fill: '#b4f34c',
            }}
          />
        </Styled.PhotoDisplay>

        <Styled.InfoContainer>
          <img src={addTagIcon} alt="addtag-icon" />
          여행 주소를 태그하고 포인트 받아가세요!
          <div className="info-gray">
            <p>
              업로드할 여행사진에 해당하는 나라의
              <br />
              <b>비행 티켓, 맛집 주소, 숙소 예약 주소</b> 등을
              <br />
              태그하고 포인트 받아가세요!
            </p>
            <p className="point-info">
              <HiMagnifyingGlass fontSize="small" /> 포인트 활용처 알아보기
            </p>
          </div>
        </Styled.InfoContainer>

        {/* <Styled.AddTagsButton onClick={openModal}> */}
        <Styled.AddTagsButton>
          <LocalOfferIcon
            className="tag-icon"
            style={{
              width: '1rem',
              height: '1rem',
              fill: '#b4f34c',
            }}
          />
          여행 주소 태그하러 가기
        </Styled.AddTagsButton>

        {/* <TripPlanTagModal open={isModalOpen} onClose={closeModal}
           register={register} watch={watch} setValue={setValue} onSubmit={handleSubmit(onSubmit)}
              /> */}
      </Styled.Container>
    </>
  );
};

export default TripPlanAddTags;
