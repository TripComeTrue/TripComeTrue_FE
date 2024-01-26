/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { differenceInDays, format } from 'date-fns';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import { GoPlusCircle } from 'react-icons/go';
import TripPlanGoogleMaps from './TripPlanGoogleMaps/TripPlanGoogleMaps';
import { Button, SimpleNav } from '@/components/common';
import TripPlanAddHashtags from '../TripPlanPostingReview/TripPlanAddHashtags/TripPlanAddHashtags';
import TripPlanSetBudget from '../TripPlanPostingReview/TripPlanSetBudget/TripPlanSetBudget';
import TripPlanUploadMainImages from './TripPlanUploadMainImages/TripPlanUploadMainImages';
import { getNightAndDays } from '../TripPlanDate/TripPlanDate.utils';
import TripPlanDaysInput from './TripPlanDaysInput/TripPlanDaysInput';
import { getTripPlanById } from '@/apis/trip-planandrecords';
import * as Styled from './TripPlanPostingPlan.styles';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { useTripFormData } from '@/pages/Trip/TripPlan/TripFormDataContext';

const TripPlanPostingPlanRecord = () => {
  const { tripPlanData } = useTripFormData();
  const { id } = useParams();
  // 기존 여행 계획 가져오기
  const { data: tripPlan } = useSuspenseQuery({
    queryKey: ['trip-plan', id],
    queryFn: () => getTripPlanById(Number(id)),
  });
  // 선택한 일차
  const [selectedDay, setSelectedDay] = useState<number | null>(1);
  // 방문한 장소
  const [selectedPlace, setSelectedPlace] = useState<string>('');
  // 어떤 여행이었나요? > 해시태그 선택
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);

  const { register, handleSubmit, setValue } = useForm();
  const [isPlaceModalOpen, setIsPlaceModalOpen] = useState({
    isPaneOpenLeft: false,
  });

  // const navigate = useNavigate();
  const startDate = new Date(tripPlanData.tripStartDay);
  const endDate = new Date(tripPlanData.tripEndDay);
  const totalTripDays = differenceInDays(endDate, startDate);

  const [formData, setFormData] = useState(() =>
    Array.from({ length: totalTripDays }, (_) => ({
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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
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

  return (
    <Styled.Wrapper>
      <SimpleNav />
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
        <Styled.PostingForm onSubmit={handleSubmit(onSubmit)}>
          <TripPlanUploadMainImages setFormData={setFormData} />
          <Styled.PlaceInput
            type="text"
            {...register('title', { required: true })}
            placeholder="피드 제목을 입력하세요"
          />
          <Styled.NoteInput
            {...register('content')}
            placeholder="여행의 전반적인 후기나 메모를 작성해 주세요"
          />

          {/* 여행 경비는 얼마로 준비 하셨나요? */}
          <TripPlanSetBudget register={register} />
          {/* 어떤 여행이었나요? */}
          <TripPlanAddHashtags
            selectedHashtags={selectedHashtags}
            setSelectedHashtags={setSelectedHashtags}
          />
          {/* 구글 지도 영역 */}
          <Styled.GoogleMapsContainer>
            <TripPlanGoogleMaps />
          </Styled.GoogleMapsContainer>
          {/* 몇일차 인지 선택하는 영역 */}
          <Styled.DaysContainer>
            <Styled.DaysInner>
              {Array.from({ length: totalTripDays }, (_, i) => {
                const day = i + 1;
                return (
                  <Styled.DaysButton
                    key={day}
                    $isDaySelected={selectedDay === day}
                    onClick={() => handleDayButtonClick(day)}>
                    {day}일차
                  </Styled.DaysButton>
                );
              })}
            </Styled.DaysInner>
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

          {/* 장소 상세 설명 부분 */}
          <TripPlanDaysInput
            selectedDay={selectedDay}
            formData={formData}
            setFormData={setFormData}
            register={register}
            handleInputChange={handleInputChange}
            selectedPlace={selectedPlace}
            isPlaceModalOpen={isPlaceModalOpen}
            setIsPlaceModalOpen={setIsPlaceModalOpen}
            closePlaceListModal={closePlaceListModal}
            handlePlaceModalSelection={handlePlaceModalSelection}
          />
          <Styled.AddPlaceButton onClick={handleAddPlace}>
            <GoPlusCircle fontSize="28" style={{ fill: '#b4f34c' }} />
            장소 추가
          </Styled.AddPlaceButton>

          <Styled.SubmitButtonContainer>
            <Button type="button" className="tempsave-btn" variants="gray">
              임시저장
            </Button>
            <Button type="submit" className="submit-btn" variants="primary">
              등록하기
            </Button>
          </Styled.SubmitButtonContainer>
        </Styled.PostingForm>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default TripPlanPostingPlanRecord;
