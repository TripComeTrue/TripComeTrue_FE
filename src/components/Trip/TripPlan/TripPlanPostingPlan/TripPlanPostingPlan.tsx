/* eslint-disable react/jsx-props-no-spreading */

import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { differenceInDays } from 'date-fns';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { SlArrowLeft } from 'react-icons/sl';
import { IoCloseCircle } from 'react-icons/io5';
import { GoPlusCircle } from 'react-icons/go';
import TripPlanGoogleMaps from './TripPlanGoogleMaps/TripPlanGoogleMaps';
import * as Styled from './TripPlanPostingPlan.styles';
import { Button } from '@/components/common';
import TripPlanPlaceModal from '../TripPlanPostingReview/TripPlanAddPlace/TripPlanPlaceModal/TripPlanPlaceModal';
import TripPlanAddHashtags from '../TripPlanPostingReview/TripPlanAddHashtags/TripPlanAddHashtags';
import TripPlanSetBudget from '../TripPlanPostingReview/TripPlanSetBudget/TripPlanSetBudget';
import TripPlanAddTagsButton from '../TripPlanPostingReview/TripPlanAddTags/TripPlanAddTagsButton/TripPlanAddTagsButton';

const TripPlanPosting = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(1);
  const [selectedPlace, setSelectedPlace] = useState<string>('');
  const { register, handleSubmit, setValue } = useForm();
  const UploadImageIconRef = useRef<HTMLInputElement>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isPlaceModalOpen, setIsPlaceModalOpen] = useState({
    isPaneOpenLeft: false,
  });

  // const navigate = useNavigate();
  const startDate = new Date('2024-01-15');
  const endDate = new Date();
  const formattedStartDate = startDate.toLocaleDateString();
  const formattedEndDate = endDate.toLocaleDateString();
  const totalTripDays = differenceInDays(endDate, startDate) + 1;
  const [formData, setFormData] = useState(() =>
    Array.from({ length: totalTripDays }, () => ({
      city: '',
      places: [
        {
          place: '',
          note: '',
          photo: '',
          tags: '',
        },
      ],
    })),
  );

  const getNightAndDays = () => {
    if (startDate && endDate) {
      const nights = differenceInDays(endDate, startDate);
      return `${nights}박 ${nights + 1}일`;
    }
    return '';
  };

  const handleDayButtonClick = (day: number) => {
    setSelectedDay((prevDay) => (prevDay === day ? null : day));
    const dayData = formData[day - 1].places[0];

    if (dayData) {
      setValue(`day${day}.place`, dayData.place);
      setValue(`day${day}.note`, dayData.note);
      setValue(`day${day}.note`, dayData.photo);
      setValue(`day${day}.note`, dayData.tags);
    }
  };

  const handleInputChange = (
    day: number,
    field: string,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    setFormData((prevFormData) => {
      const newFormData = [...prevFormData];
      newFormData[day - 1] = { ...newFormData[day - 1], [field]: value };
      return newFormData;
    });
  };

  const handleChangePlaceName = (place: string) => {
    setSelectedPlace(place);
  };

  const closePlaceListModal = () => {
    setIsPlaceModalOpen({ isPaneOpenLeft: false });
  };

  const handlePlaceModalSelection = (place: string) => {
    setSelectedPlace(place);
  };

  const handleAddPlace = () => {
    if (selectedDay !== null) {
      setFormData((prevFormData) => {
        const newFormData = [...prevFormData];
        const newPlace = {
          city: '',
          place: '',
          note: '',
          photo: '',
          tags: '',
        };
        newFormData[selectedDay - 1].places.push(newPlace);
        return newFormData;
      });
    }
  };

  const onSubmit = (data: object) => {
    /* eslint-disable no-console */
    console.log(data);
    // fetch(`api address`, {
    //   method: 'POST',
    //   headers: { 'Content-type': 'application/json' },
    //   body: JSON.stringify({
    //     city: data.city,
    //     place: data.place,
    //     note: data.note,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     alert(`등록이 완료 되었습니다.`);
    //     navigate('리다이렉팅 url');
    //   });
  };

  const handleUploadImage = (event: React.MouseEvent) => {
    event.preventDefault();
    UploadImageIconRef.current?.click();
  };

  const handleChangeImage = async (
    event: React.ChangeEvent<HTMLInputElement>,
    day: number,
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setUploadedImages((prevImages) => [...prevImages, fileUrl]);

      setFormData((prevFormData) => {
        const newFormData = [...prevFormData];
        const firstPlace = newFormData[day].places[0];
        newFormData[day].places[0] = { ...firstPlace, photo: fileUrl };
        return newFormData;
      });
    }
  };

  const handleRemoveImage = (imageNumber: number) => {
    setUploadedImages((currentImages) =>
      currentImages.filter((_, index) => index !== imageNumber),
    );
  };

  const createDaysInput = () => {
    return (
      <>
        <Styled.DaysContainer>
          {Array.from({ length: totalTripDays }, (_, i) => {
            const day = i + 1;
            return (
              <React.Fragment key={day}>
                <Styled.DaysButton
                  $isDaySelected={selectedDay === day}
                  onClick={() => handleDayButtonClick(day)}>
                  {day}일차
                </Styled.DaysButton>
              </React.Fragment>
            );
          })}
        </Styled.DaysContainer>
        <Styled.PostingForm onSubmit={handleSubmit(onSubmit)}>
          <PlaceIcon
            className="city-icon"
            fontSize="small"
            style={{ fill: '#b4f34c' }}
          />
          <Styled.CityInput
            type="text"
            {...register(`day${selectedDay}.city`)}
            onChange={(event) => {
              if (selectedDay !== null) {
                handleInputChange(selectedDay, 'city', event);
              }
            }}
          />

          <Styled.PlaceInputContainer>
            <Styled.PlaceNumber>1</Styled.PlaceNumber>
            <Styled.PlaceInput
              type="text"
              {...register(`day${selectedDay}.place`)}
              placeholder="방문할 장소를 선택해주세요"
              // onChange={(event) => {
              //   if (selectedDay !== null) {
              //     handleInputChange(selectedDay, 'place', event);
              //   }
              // }}
              value={selectedPlace || ''}
              onChange={(e) => handleChangePlaceName(e.target.value)}
              onClick={() => setIsPlaceModalOpen({ isPaneOpenLeft: true })}
            />
            <Styled.SlidingPane
              className="citymodal"
              closeIcon={<SlArrowLeft fontSize="15" />}
              isOpen={isPlaceModalOpen.isPaneOpenLeft}
              onRequestClose={() => {
                setIsPlaceModalOpen({ isPaneOpenLeft: false });
              }}
              width="22.5rem">
              <TripPlanPlaceModal
                selectedPlace={selectedPlace}
                onPlaceSelection={handlePlaceModalSelection}
                onCloseModal={closePlaceListModal}
              />
            </Styled.SlidingPane>
          </Styled.PlaceInputContainer>

          <Styled.NoteInput
            {...register(`day${selectedDay}.note`)}
            placeholder="방문할 장소에 대한 메모나 정보 등을 입력해 주세요"
            onChange={(event) => {
              if (selectedDay !== null) {
                handleInputChange(selectedDay, 'note', event);
              }
            }}
          />

          <Styled.UploadImageContainer>
            <Styled.UploadImageIcon onClick={handleUploadImage}>
              <AddAPhotoIcon className="image-icon" />
              <p className="photo-text">사진 업로드</p>
            </Styled.UploadImageIcon>

            <Styled.ImageInput
              ref={UploadImageIconRef}
              type="file"
              accept="image/*"
              name="file"
              onChange={(event) =>
                selectedDay !== null &&
                handleChangeImage(event, selectedDay - 1)
              }
              disabled={uploadedImages.length >= 5}
            />

            <Styled.UploadedImageSwiper
              spaceBetween={1}
              slidesPerView={uploadedImages.length > 1 ? 1.5 : 1}
              direction="horizontal"
              scrollbar={{
                draggable: true,
                el: '.swiper-scrollbar',
                hide: false,
              }}>
              {uploadedImages.map((image, number) => (
                <Styled.UploadedImage key={image}>
                  <img src={image} alt={`Uploaded ${number + 1}`} />
                  <Styled.RemoveBtn onClick={() => handleRemoveImage(number)}>
                    <IoCloseCircle color="#626161" />
                  </Styled.RemoveBtn>
                </Styled.UploadedImage>
              ))}
            </Styled.UploadedImageSwiper>
          </Styled.UploadImageContainer>

          <TripPlanAddTagsButton />
        </Styled.PostingForm>
        <TripPlanSetBudget />
        <TripPlanAddHashtags />
      </>
    );
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.DateDisplay>
          <div className="date">
            {formattedStartDate} - {formattedEndDate}
          </div>
          <div className="nightndays">{getNightAndDays()}</div>
          <CalendarToday className="calendar-icon" />
        </Styled.DateDisplay>

        <Styled.GoogleMapsContainer>
          <TripPlanGoogleMaps />
        </Styled.GoogleMapsContainer>

        <Styled.InputContainer>{createDaysInput()}</Styled.InputContainer>
      </Styled.Container>

      <Styled.PlaceAddButton onClick={() => handleAddPlace}>
        <GoPlusCircle fontSize="28" style={{ fill: '#b4f34c' }} />
        장소 추가
      </Styled.PlaceAddButton>

      <Styled.SubmitButtonContainer>
        <Button type="button" className="tempsave-btn" variants="gray">
          임시저장
        </Button>
        <Button type="button" className="submit-btn" variants="primary">
          등록하기
        </Button>
      </Styled.SubmitButtonContainer>
    </Styled.Wrapper>
  );
};

export default TripPlanPosting;
