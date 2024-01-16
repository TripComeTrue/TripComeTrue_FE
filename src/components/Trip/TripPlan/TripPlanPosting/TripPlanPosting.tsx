import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { differenceInDays } from 'date-fns';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { GoPlusCircle } from 'react-icons/go';
import speechBubble from '../../../../../public/images/speech-bubble.svg';
import TripPlanGoogleMaps from './TripPlanGoogleMaps/TripPlanGoogleMaps';
import { TripPlanPrevButton } from '../TripPlanCommon/TripPlanCommon';
import * as Styled from './TripPlanPosting.styles';
// import { useNavigate } from 'react-router-dom';

const TripPlanPosting = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(1);
  const { register, handleSubmit, setValue } = useForm();
  const UploadPhotoIconRef = useRef<HTMLInputElement>(null);

  // const navigate = useNavigate();
  const startDate = new Date('2024-01-12');
  const endDate = new Date();
  const formattedStartDate = startDate.toLocaleDateString();
  const formattedEndDate = endDate.toLocaleDateString();
  const totalTripDays = differenceInDays(endDate, startDate) + 1;
  const [formData, setFormData] = useState(() =>
    Array.from({ length: totalTripDays }, () => ({
      city: '',
      place: '',
      note: '',
      photo: '',
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
    const dayData = formData[day - 1];
    setValue(`day${day}.city`, dayData.city);
    setValue(`day${day}.place`, dayData.place);
    setValue(`day${day}.note`, dayData.note);
  };

  const handleInputChange = (
    day: number,
    field: string,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = event.target.value;
    setFormData((prevFormData) => {
      const newFormData = [...prevFormData];
      newFormData[day - 1] = { ...newFormData[day - 1], [field]: value };
      return newFormData;
    });
  };

  const onSubmit = (data: object) => {
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

  const onImgUpload = (event: React.MouseEvent) => {
    event.preventDefault();
    UploadPhotoIconRef.current?.click();
  };

  const onImgChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    day: number,
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setFormData((prevFormData) => {
        const newFormData = [...prevFormData];
        newFormData[day] = { ...newFormData[day], photo: fileUrl };
        return newFormData;
      });
    }
  };

  const createDaysInput = () => {
    return (
      <Styled.TotalWrapper>
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
        {
          <Styled.InputContainer>
            <Styled.PostingForm onSubmit={handleSubmit(onSubmit)}>
              <PlaceIcon className="city-icon" style={{ fill: '#b4f34c' }} />
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
                  onChange={(event) => {
                    if (selectedDay !== null) {
                      handleInputChange(selectedDay, 'place', event);
                    }
                  }}
                />
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

              <Styled.UploadPhotoIcon onClick={onImgUpload}>
                <AddAPhotoIcon className="photo-icon" />
                <p className="photo-text">사진 업로드</p>
              </Styled.UploadPhotoIcon>
              <Styled.PhotoInput
                ref={UploadPhotoIconRef}
                type="file"
                accept="image/*"
                name="file"
                onChange={(event) => onImgChange}
              />

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
                <Styled.TagsAddButton>
                  <AddCircleIcon
                    style={{
                      width: '1.2rem',
                      height: '1.2rem',
                      fill: '#b4f34c',
                    }}
                  />{' '}
                  태그 추가하기 <img src={speechBubble} aria-label="add tag" />
                </Styled.TagsAddButton>
                <Styled.TagsInput />
              </Styled.TagsInputContainer>
            </Styled.PostingForm>
          </Styled.InputContainer>
        }
      </Styled.TotalWrapper>
    );
  };

  return (
    <>
      <Styled.Wrapper>
        <TripPlanPrevButton />
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

        <Styled.PlaceAddButton>
          <GoPlusCircle fontSize="28" style={{ fill: '#b4f34c' }} />
          장소 추가
        </Styled.PlaceAddButton>
      </Styled.Wrapper>
    </>
  );
};

export default TripPlanPosting;