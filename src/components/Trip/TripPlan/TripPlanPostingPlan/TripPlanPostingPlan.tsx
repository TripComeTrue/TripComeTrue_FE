/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { differenceInDays, format } from 'date-fns';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import { SlArrowLeft } from 'react-icons/sl';
import { GoPlusCircle } from 'react-icons/go';
import TripPlanGoogleMaps from './TripPlanGoogleMaps/TripPlanGoogleMaps';
import * as Styled from './TripPlanPostingPlan.styles';
import { Button } from '@/components/common';
import TripPlanPlaceModal from '../TripPlanPostingReview/TripPlanAddPlace/TripPlanPlaceModal/TripPlanPlaceModal';
import TripPlanAddTags from '../TripPlanPostingReview/TripPlanAddTags/TripPlanAddTags';
import { useTripFormData } from '@/pages/Trip/TripPlan/TripFormDataContext';
import { getNightAndDays } from '../TripPlanDate/TripPlanDate.utils';
import { PostingFormProps } from './TripPlanPostingPlan.types';

const TripPlanPosting = () => {
  const { tripPlanData } = useTripFormData();
  const [selectedDay, setSelectedDay] = useState<number | null>(1);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedPlace, setSelectedPlace] = useState<string>('');
  const [activePlaceIndex, setActivePlaceIndex] = useState<number | null>(null);
  const { register, handleSubmit } = useForm();
  const [isPlaceModalOpen, setIsPlaceModalOpen] = useState({
    isPaneOpenLeft: false,
  });

  const startDate = new Date(tripPlanData.tripStartDay);
  const endDate = new Date(tripPlanData.tripEndDay);
  const totalTripDays = differenceInDays(endDate, startDate) + 1;
  const selectedCitiesPerDay = tripPlanData.tripPlanCities;

  const [formData, setFormData] = useState<PostingFormProps[]>(() =>
    Array.from({ length: totalTripDays }, (_) => ({
      city: '',
      places: [
        {
          id: 1,
          placeId: null,
          place: '',
          note: '',
          tagType: '',
          tagUrl: '',
        },
      ],
    })),
  );

  const handleDayButtonClick = (day: number) => {
    setSelectedPlace('');
    setSelectedDay((prevDay) => (prevDay === day ? null : day));
    setActivePlaceIndex(0);
  };

  const handleInputChange = (
    day: number,
    field: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

  const handleOpenPlaceModal = (day: number, placeIndex: number) => {
    const selectedCityCountry = selectedCitiesPerDay?.[day - 1];

    let city;
    if (selectedCityCountry) {
      [, city] = selectedCityCountry.split(' ');
    } else {
      city = '';
    }
    setSelectedCity(city);
    setIsPlaceModalOpen({ isPaneOpenLeft: true });
    setActivePlaceIndex(placeIndex);
  };

  const handlePlaceModalSelection = (
    placeName: string,
    placeId: number | null,
    placeIndex: number,
  ) => {
    setSelectedPlace(placeName);
    if (selectedDay !== null && placeId !== null) {
      setFormData((prevFormData) => {
        const newFormData = [...prevFormData];
        const dayIndex = selectedDay - 1;

        const updatedPlaces = [...newFormData[dayIndex].places];

        if (updatedPlaces[placeIndex]) {
          updatedPlaces[placeIndex].place = placeName;
          updatedPlaces[placeIndex].placeId = placeId;
        }

        newFormData[dayIndex].places = updatedPlaces;
        return newFormData;
      });
    }
  };

  const handleTagsUpdate = (
    dayIndex: number,
    placeIndex: number,
    tagType: string,
    tagUrl: string,
  ) => {
    if (selectedDay !== null && placeIndex !== null) {
      setFormData((prevFormData) => {
        const newFormData = [...prevFormData];
        const updatedPlaces = [...newFormData[dayIndex].places];

        if (updatedPlaces[placeIndex]) {
          updatedPlaces[placeIndex].tagType = tagType;
          updatedPlaces[placeIndex].tagUrl = tagUrl;
        }

        newFormData[dayIndex].places = updatedPlaces;

        console.log(newFormData);

        // const placeData = newFormData[dayIndex].places[placeIndex];

        // console.log(placeData);

        // placeData.tagType = tagType;
        // placeData.tagUrl = tagUrl;

        return newFormData;
      });
    }
  };

  const handleAddPlace = () => {
    if (selectedDay !== null) {
      setFormData((prevFormData) => {
        const newFormData = JSON.parse(JSON.stringify(prevFormData));
        const newPlaceIndex = newFormData[selectedDay - 1].places.length;

        newFormData[selectedDay - 1].places.push({
          id: newPlaceIndex + 1,
          place: '',
          note: '',
          tagType: '',
          tagUrl: '',
        });
        console.log(newFormData);
        return newFormData;
      });
    }
  };

  const onSubmit = () => {
    // const { countries, tripStartDay, tripEndDay, referencedBy } = tripPlanData;
  };

  const createDaysInput = () => {
    return selectedDay !== null
      ? formData[selectedDay - 1].places.map((place, index) => (
          <Styled.InputContainer key={`day-${selectedDay}-place-${index}`}>
            <Styled.PlaceInputContainer>
              <Styled.PlaceNumber>{place.id}</Styled.PlaceNumber>
              <Styled.PlaceInput
                type="text"
                {...register(`day${selectedDay}.places[${index}].place`)}
                placeholder="방문할 장소를 선택해주세요"
                onChange={(event) => {
                  if (selectedDay !== null) {
                    handleInputChange(selectedDay, 'place', event);
                  }
                }}
                // value={
                //   formData[selectedDay - 1].places[place.id - 1].placeId !==
                //   null
                //     ? `${
                //         formData[selectedDay - 1].places[place.id - 1].place
                //       } (${
                //         formData[selectedDay - 1].places[place.id - 1].placeId
                //       })`
                //     : formData[selectedDay - 1].places[place.id - 1].place || ''
                // }
                value={formData[selectedDay - 1].places[place.id - 1].place}
                onClick={() => handleOpenPlaceModal(selectedDay, index)}
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
                  cityName={selectedCity}
                  onPlaceSelection={(placeName, placeId) => {
                    if (typeof activePlaceIndex === 'number') {
                      handlePlaceModalSelection(
                        placeName,
                        placeId,
                        activePlaceIndex,
                      );
                    }
                  }}
                  onCloseModal={closePlaceListModal}
                  dayIndex={selectedDay - 1}
                  placeIndex={activePlaceIndex ?? 0}
                />
              </Styled.SlidingPane>
            </Styled.PlaceInputContainer>
            <Styled.NoteInput
              {...register(`day${selectedDay}.places[${index}].note`)}
              placeholder="방문할 장소에 대한 메모나 정보 등을 입력해 주세요"
              onChange={(event) => {
                if (selectedDay !== null) {
                  handleInputChange(selectedDay, 'note', event);
                }
              }}
            />
            <TripPlanAddTags
              handleTagsUpdate={handleTagsUpdate}
              dayIndex={selectedDay - 1}
              placeIndex={index}
              currentTagType={place.tagType}
              currentTagUrl={place.tagUrl}
            />
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

        <Styled.GoogleMapsContainer>
          <TripPlanGoogleMaps />
        </Styled.GoogleMapsContainer>

        <Styled.DaysContainer>
          {Array.from({ length: totalTripDays }, (_, i) => {
            const day = i + 1;
            return (
              <div key={day}>
                <Styled.DaysButton
                  $isDaySelected={selectedDay === day}
                  onClick={() => handleDayButtonClick(day)}>
                  {day}일차
                </Styled.DaysButton>
              </div>
            );
          })}
        </Styled.DaysContainer>

        <Styled.CityInputContainer>
          <Styled.CityInput
            type="text"
            {...register(`day${selectedDay}.city`)}
            value={selectedDay ? selectedCitiesPerDay?.[selectedDay - 1] : ''}
          />
          <PlaceIcon
            className="city-icon"
            fontSize="small"
            style={{ fill: '#b4f34c' }}
          />
        </Styled.CityInputContainer>

        <Styled.PostingForm onSubmit={handleSubmit(onSubmit)}>
          {createDaysInput()}

          <Styled.AddPlaceButton onClick={handleAddPlace}>
            <GoPlusCircle fontSize="28" style={{ fill: '#b4f34c' }} />
            장소 추가
          </Styled.AddPlaceButton>

          <Styled.SubmitButtonContainer>
            <Button type="submit" className="submit-btn" variants="primary">
              등록하기
            </Button>
          </Styled.SubmitButtonContainer>
        </Styled.PostingForm>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default TripPlanPosting;
