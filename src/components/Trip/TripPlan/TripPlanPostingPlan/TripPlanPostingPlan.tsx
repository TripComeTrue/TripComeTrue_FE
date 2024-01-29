/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { differenceInDays, format } from 'date-fns';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import { GoPlusCircle } from 'react-icons/go';
import { SlArrowLeft } from 'react-icons/sl';
import TripPlanGoogleMaps from './TripPlanGoogleMaps/TripPlanGoogleMaps';
import * as Styled from './TripPlanPostingPlan.styles';
import { Button } from '@/components/common';
import TripPlanPlaceModal from '../TripPlanPostingReview/TripPlanAddPlace/TripPlanPlaceModal/TripPlanPlaceModal';
import TripPlanAddTags from '../TripPlanPostingReview/TripPlanAddTags/TripPlanAddTags';
import { useTripFormData } from '@/pages/Trip/TripPlan/TripFormDataContext';
import { getNightAndDays } from '../TripPlanDate/TripPlanDate.utils';
import { PostingFormProps } from './TripPlanPostingPlan.types';
import {
  TripPlanDataForPost,
  TripPlanSchedule,
} from '@/@types/trip-alldata.types';
import { postTripPlan } from '@/apis/trip-planandrecords';

const TripPlanPostingPlan = () => {
  const navigate = useNavigate();
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

  useEffect(() => {
    console.log(selectedCitiesPerDay);
  }, [selectedCitiesPerDay]);

  const mutation = useMutation({
    mutationKey: ['postPlan'],
    mutationFn: postTripPlan,
  });

  const [formData, setFormData] = useState<PostingFormProps[]>(() =>
    Array.from({ length: totalTripDays }, (_, index) => ({
      city: selectedCitiesPerDay ? selectedCitiesPerDay[index] : '',
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

    const cityForSelectedDay = formData[day - 1].city;
    setSelectedCity(cityForSelectedDay);
  };

  const handleInputChange = (
    day: number,
    field: string,
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = event.target;
    setFormData((prevFormData) => {
      const newFormData = [...prevFormData];
      const dayData = newFormData[day - 1];

      if (dayData && dayData.places) {
        const updatedPlaces = dayData.places.map((place, idx) => {
          if (idx === index) {
            return { ...place, [field]: value };
          }
          return place;
        });

        newFormData[day - 1].places = updatedPlaces;
      }

      return newFormData;
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

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
    const startDayForPost = format(
      new Date(tripPlanData.tripStartDay),
      'yyyy-MM-dd',
    );
    const endDayForPost = format(
      new Date(tripPlanData.tripEndDay),
      'yyyy-MM-dd',
    );
    const countriesForPost = tripPlanData.countries.join(', ');

    const postData: TripPlanDataForPost = {
      countries: countriesForPost,
      tripStartDay: startDayForPost,
      tripEndDay: endDayForPost,
      referencedBy: null,
      tripPlanSchedules: [],
    };

    formData.forEach((day, dayIndex) => {
      day.places.forEach((place, placeIndex) => {
        const schedule: TripPlanSchedule = {
          dayNumber: dayIndex + 1,
          orderNumber: placeIndex + 1,
          placeId: place.placeId,
          content: place.note,
          tagType: place.tagType ?? null,
          tagUrl: place.tagUrl ?? null,
        };

        postData.tripPlanSchedules.push(schedule);
      });
    });
    mutation.mutate(postData, {
      onSuccess: () => {
        navigate('/mypage?tab=plan');
      },
    });
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
                    handleInputChange(selectedDay, 'place', index, event);
                  }
                }}
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
                  handleInputChange(selectedDay, 'note', index, event);
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

export default TripPlanPostingPlan;
