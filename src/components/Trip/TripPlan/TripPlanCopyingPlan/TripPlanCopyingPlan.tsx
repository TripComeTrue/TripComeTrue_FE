/* eslint-disable react/jsx-props-no-spreading */

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { format } from 'date-fns';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import TripPlanAddTags from '../TripPlanPostingReview/TripPlanAddTags/TripPlanAddTags';
import TripPlanGoogleMaps from '../TripPlanPostingPlan/TripPlanGoogleMaps/TripPlanGoogleMaps';
import {
  TripPlanDataForPost,
  TripPlanOfSomeoneSchedule,
  TripPlanScheduleForPost,
} from '@/@types/trip-alldata.types';
import {
  getTripCountryKorName,
  getTripPlanOfSomeone,
  postTripPlan,
} from '@/apis/trip-planandrecords';
import * as Styled from './TripPlanCopyingPlan.styles';
import { getNightAndDays } from '../TripPlanDate/TripPlanDate.utils';
import { TripCopyDateProps } from '@/pages/Trip/TripPlan/TripPlanCopy';
import { Button } from '@/components/common';

type CountryNames = { [key: string]: string };
const TripPlanCopyingPlan = ({ startDate, endDate }: TripCopyDateProps) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: tripPlanOfSomeone } = useSuspenseQuery({
    queryKey: ['trip-plan-someone', id],
    queryFn: () => getTripPlanOfSomeone(Number(id)),
  });

  const mutation = useMutation({
    mutationKey: ['postPlanCopy'],
    mutationFn: postTripPlan,
  });

  const [selectedDay, setSelectedDay] = useState<number | null>(1);
  const [countryNamesInKorean, setCountryNamesInKorean] = useState<{
    [key: string]: string;
  }>({});
  const [formData, setFormData] = useState<TripPlanOfSomeoneSchedule[]>([]);
  const { register, handleSubmit, setValue } = useForm({});

  useEffect(() => {
    if (tripPlanOfSomeone?.data?.tripSchedules) {
      setFormData(tripPlanOfSomeone.data.tripSchedules);
    }
  }, [tripPlanOfSomeone]);

  useEffect(() => {
    if (tripPlanOfSomeone?.data?.tripSchedules) {
      const fetchCountryNamesInKorean = async () => {
        const countryNames: CountryNames = {};
        const promises = [];

        for (const schedule of tripPlanOfSomeone.data.tripSchedules) {
          const engCountryName = schedule.country;
          if (engCountryName && !countryNames[engCountryName]) {
            promises.push(
              getTripCountryKorName(engCountryName).then((koreanName) => {
                countryNames[engCountryName] = koreanName;
              }),
            );
          }
        }

        await Promise.all(promises);
        setCountryNamesInKorean(countryNames);
      };

      fetchCountryNamesInKorean();
    }
  }, [tripPlanOfSomeone]);

  useEffect(() => {
    if (selectedDay !== null && tripPlanOfSomeone?.data?.tripSchedules) {
      const schedule = tripPlanOfSomeone.data.tripSchedules.find(
        (s: TripPlanOfSomeoneSchedule) => s.dayNumber === selectedDay,
      );
      if (schedule) {
        const countryKorName = countryNamesInKorean[schedule.country] || '';
        setValue(
          `day${selectedDay}.city`,
          `${countryKorName} ${schedule.cityName}`,
        );
      }
    }
  }, [selectedDay, tripPlanOfSomeone, setValue, countryNamesInKorean]);

  const handleDayButtonClick = async (
    day: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setSelectedDay((prevDay) => (prevDay === day ? null : day));
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

  const onSubmit: SubmitHandler<FieldValues> = () => {
    const startDayForPost = format(new Date(startDate), 'yyyy-MM-dd');
    const endDayForPost = format(new Date(endDate), 'yyyy-MM-dd');

    const countriesForPost = Array.isArray(tripPlanOfSomeone.data.countries)
      ? tripPlanOfSomeone.data.countries.join(', ')
      : tripPlanOfSomeone.data.countries;

    const postData: TripPlanDataForPost = {
      countries: countriesForPost,
      tripStartDay: startDayForPost,
      tripEndDay: endDayForPost,
      referencedBy: Number(id),
      tripPlanSchedules: [],
    };
    formData.forEach((schedule) => {
      const formattedSchedule: TripPlanScheduleForPost = {
        dayNumber: schedule.dayNumber,
        orderNumber: schedule.orderNumber,
        placeId: schedule.placeId,
        content: schedule.content,
        tagType: schedule.tagType || null,
        tagUrl: schedule.tagUrl || null,
      };
      postData.tripPlanSchedules.push(formattedSchedule);
    });

    mutation.mutate(postData, {
      onSuccess: () => {
        navigate('/mypage?tab=plan');
      },
    });
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

        <Styled.PostingForm onSubmit={handleSubmit(onSubmit)}>
          <Styled.GoogleMapsContainer>
            <TripPlanGoogleMaps />
          </Styled.GoogleMapsContainer>

          <Styled.DaysContainer>
            {tripPlanOfSomeone?.data.tripSchedules.map(
              (_: any, index: number) => (
                <div key={index}>
                  <Styled.DaysButton
                    $isDaySelected={selectedDay === index + 1}
                    onClick={(event) => handleDayButtonClick(index + 1, event)}>
                    {index + 1}일차
                  </Styled.DaysButton>
                </div>
              ),
            )}
          </Styled.DaysContainer>

          {selectedDay &&
            tripPlanOfSomeone?.data.tripSchedules
              .filter(
                (schedule: TripPlanOfSomeoneSchedule) =>
                  schedule.dayNumber === selectedDay,
              )
              .map(
                (schedule: TripPlanOfSomeoneSchedule, placeIndex: number) => (
                  <Styled.InputContainer
                    key={`day-${selectedDay}-schedule-${placeIndex}`}>
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
                    <Styled.PlaceInputContainer>
                      <Styled.PlaceNumber>
                        {schedule.orderNumber}
                      </Styled.PlaceNumber>
                      <Styled.PlaceInput
                        type="text"
                        {...register(
                          `day${selectedDay}.places[${placeIndex}].place`,
                        )}
                        defaultValue={schedule.placeName}
                      />
                    </Styled.PlaceInputContainer>
                    <Styled.NoteInput
                      {...register(`day${selectedDay}.note`)}
                      placeholder="방문할 장소에 대한 메모나 정보 등을 입력해 주세요"
                      defaultValue={schedule.content}
                    />
                    <TripPlanAddTags
                      handleTagsUpdate={() => {}}
                      dayIndex={selectedDay - 1}
                      placeIndex={placeIndex}
                      currentTagType={schedule.tagType || ''}
                      currentTagUrl={schedule.tagUrl || ''}
                    />
                  </Styled.InputContainer>
                ),
              )}

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

export default TripPlanCopyingPlan;
