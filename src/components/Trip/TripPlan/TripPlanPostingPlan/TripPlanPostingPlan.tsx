/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { differenceInCalendarDays, differenceInDays, format } from 'date-fns';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import { SlArrowLeft } from 'react-icons/sl';
import { GoPlusCircle } from 'react-icons/go';
import TripPlanGoogleMaps from './TripPlanGoogleMaps/TripPlanGoogleMaps';
import * as Styled from './TripPlanPostingPlan.styles';
import { Button } from '@/components/common';
import TripPlanPlaceModal from '../TripPlanPostingReview/TripPlanAddPlace/TripPlanPlaceModal/TripPlanPlaceModal';
import TripPlanAddHashtags from '../TripPlanPostingReview/TripPlanAddHashtags/TripPlanAddHashtags';
import TripPlanSetBudget from '../TripPlanPostingReview/TripPlanSetBudget/TripPlanSetBudget';
import TripPlanUploadImages from './TripPlanUploadImages/TripPlanUploadImages';
import TripPlanUploadMainImages from './TripPlanUploadMainImages/TripPlanUploadMainImages';
import TripPlanAddTags from '../TripPlanPostingReview/TripPlanAddTags/TripPlanAddTags';
import { useTripFormData } from '@/pages/Trip/TripPlan/TripFormDataContext';
import { getNightAndDays } from '../TripPlanDate/TripPlanDate.utils';

const TripPlanPosting = () => {
  const { tripPlanData, updateTripPlanData } = useTripFormData();
  const [selectedDay, setSelectedDay] = useState<number | null>(1);
  const [selectedPlace, setSelectedPlace] = useState<string>('');
  const { register, handleSubmit, setValue } = useForm();

  const [isPlaceModalOpen, setIsPlaceModalOpen] = useState({
    isPaneOpenLeft: false,
  });

  // const navigate = useNavigate();
  const startDate = new Date(tripPlanData.tripStartDay);
  const endDate = new Date(tripPlanData.tripEndDay);
  const totalTripDays = differenceInDays(endDate, startDate);

  const [formData, setFormData] = useState(() =>
    Array.from({ length: totalTripDays }, () => ({
      city: '',
      places: [
        {
          id: 1,
          place: '',
          note: '',
          photo: '',
          tags: '',
        },
      ],
    })),
  );

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
        const currentPlaces = newFormData[selectedDay - 1].places;
        const newPlace = {
          id: currentPlaces.length + 1,
          place: '',
          note: '',
          photo: '',
          tags: '',
        };
        newFormData[selectedDay - 1].places = [...currentPlaces, newPlace];
        return newFormData;
      });
    }
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

  const createDaysInput = () => {
    return selectedDay !== null
      ? formData[selectedDay - 1].places.map((place) => (
          <Styled.InputContainer key={`day-${selectedDay}-place-${place.id}`}>
            <Styled.PlaceInputContainer>
              <Styled.PlaceNumber>{place.id}</Styled.PlaceNumber>
              <Styled.PlaceInput
                type="text"
                {...register(`day${selectedDay}.places[${place.id}].place`)}
                placeholder="방문할 장소를 선택해주세요"
                onChange={(event) => {
                  if (selectedDay !== null) {
                    handleInputChange(selectedDay, 'place', event);
                  }
                }}
                value={selectedPlace || ''}
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
            <TripPlanUploadImages
              setFormData={setFormData}
              selectedDay={selectedDay}
            />
            <TripPlanAddTags />
          </Styled.InputContainer>
        ))
      : null;
  };

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.DateDisplay>
          <div className="date">
            {startDate &&
              endDate &&
              `${format(startDate, 'yyyy.MM.dd')} - ${format(
                endDate,
                'yyyy.MM.dd',
              )}`}
          </div>
          <div className="nightndays">
            {getNightAndDays({ endDate, startDate })}
          </div>
          <CalendarToday className="calendar-icon" />
        </Styled.DateDisplay>

        <TripPlanUploadMainImages setFormData={setFormData} />

        <Styled.GoogleMapsContainer>
          <TripPlanGoogleMaps />
        </Styled.GoogleMapsContainer>

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

        <Styled.CityInputContainer>
          <Styled.CityInput
            type="text"
            {...register(`day${selectedDay}.city`)}
            onChange={(event) => {
              if (selectedDay !== null) {
                handleInputChange(selectedDay, 'city', event);
              }
            }}
          />
          <PlaceIcon
            className="city-icon"
            fontSize="small"
            style={{ fill: '#b4f34c' }}
          />
        </Styled.CityInputContainer>

        <Styled.PostingForm onSubmit={handleSubmit(onSubmit)}>
          {createDaysInput()}
        </Styled.PostingForm>
      </Styled.Container>

      <TripPlanSetBudget />
      <TripPlanAddHashtags />

      <Styled.AddPlaceButton onClick={handleAddPlace}>
        <GoPlusCircle fontSize="28" style={{ fill: '#b4f34c' }} />
        장소 추가
      </Styled.AddPlaceButton>

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
