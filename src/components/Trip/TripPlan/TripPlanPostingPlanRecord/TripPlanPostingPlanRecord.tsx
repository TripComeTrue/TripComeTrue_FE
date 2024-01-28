/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import CalendarToday from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import TripPlanGoogleMaps from '../TripPlanPostingPlan/TripPlanGoogleMaps/TripPlanGoogleMaps';
import { Button, SimpleNav } from '@/components/common';
import TripPlanAddHashtags from '../TripPlanPostingReview/TripPlanAddHashtags/TripPlanAddHashtags';
import TripPlanSetBudget from '../TripPlanPostingReview/TripPlanSetBudget/TripPlanSetBudget';
import TripPlanUploadMainImages from '../TripPlanPostingPlan/TripPlanUploadMainImages/TripPlanUploadMainImages';
import { getNightAndDays } from '../TripPlanDate/TripPlanDate.utils';
import TripPlanDaysInput from '../TripPlanPostingPlan/TripPlanDaysInput/TripPlanDaysInput';
import {
  getTripCountryKorName,
  getTripPlanById,
  postTripPlanRecord,
} from '@/apis/trip-planandrecords';
import * as Styled from './TripPlanPostingPlanRecord.styles';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import { arrayToDate } from '@/utils/arrayToDate';
import { TripPlanResBody, TripRecordData } from '@/@types/trip-alldata.types';
import { transformToFormData } from './TripPlanPostingPlanRecord.utils';

type CountryNames = { [key: string]: string };
type DayImagesType = {
  [key: number]: string[];
};

const TripPlanPostingPlanRecord = () => {
  const { id } = useParams();
  const { data: tripPlan } = useSuspenseQuery({
    queryKey: ['trip-plan', id],
    queryFn: () => getTripPlanById(Number(id)),
  });

  const mutation = useMutation({
    mutationKey: ['postPlanRecord'],
    mutationFn: postTripPlanRecord,
  });

  const [selectedDay, setSelectedDay] = useState<number | null>(1);
  const [mainImageUrls, setMainImageUrls] = useState<string[]>([]);
  const [isMainImageValid, setIsMainImageValid] = useState(false);
  const [dayImages, setDayImages] = useState<DayImagesType>({});
  const [selectedHashtags, setSelectedHashtags] = useState<string[]>([]);
  const [countryNamesInKorean, setCountryNamesInKorean] =
    useState<CountryNames>({});
  const [formData, setFormData] = useState<TripPlanResBody[]>([]);

  const startDate = arrayToDate(tripPlan.data.tripStartDay);
  const endDate = arrayToDate(tripPlan.data.tripEndDay);
  const { register, handleSubmit, setValue } = useForm({});

  useEffect(() => {
    if (tripPlan) {
      const convertedFormData = transformToFormData(tripPlan.data);
      setFormData(convertedFormData);

      if (
        convertedFormData.length > 0 &&
        convertedFormData[0].data.tripPlanSchedules.length > 0
      ) {
        setValue(
          `day1.city`,
          convertedFormData[0].data.tripPlanSchedules[0].cityName,
        );
      }
    }
  }, [tripPlan]);

  useEffect(() => {
    const fetchCountryNamesInKorean = async () => {
      const countryNames: CountryNames = {};
      const promises = [];

      for (const dayData of formData) {
        for (const schedule of dayData.data.tripPlanSchedules) {
          const engCountryName = schedule.country;
          if (!countryNames[engCountryName]) {
            promises.push(
              getTripCountryKorName(engCountryName).then((koreanName) => {
                countryNames[engCountryName] = koreanName;
              }),
            );
          }
        }
      }

      await Promise.all(promises);

      setCountryNamesInKorean(countryNames);

      formData.forEach((dayData, index) => {
        if (dayData.data.tripPlanSchedules.length > 0) {
          const schedule = dayData.data.tripPlanSchedules[0];
          const countryKorName = countryNames[schedule.country] || '';
          const { cityName } = schedule;
          setValue(`day${index + 1}.city`, `${countryKorName} ${cityName}`);
        }
      });
    };

    if (formData.length > 0) {
      fetchCountryNamesInKorean();
    }
  }, [formData, setValue]);

  const handleMainImagesChange = (urls: string[]) => {
    setMainImageUrls(urls);
  };

  const handleMainImageValidationChange = (isValid: boolean) => {
    setIsMainImageValid(isValid);
  };

  const handleDayButtonClick = async (
    day: number,
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    setSelectedDay((prevDay) => (prevDay === day ? null : day));

    if (
      formData[day - 1] &&
      formData[day - 1].data.tripPlanSchedules.length > 0
    ) {
      const schedule = formData[day - 1].data.tripPlanSchedules[0];
      const countryKorName = countryNamesInKorean[schedule.country] || '';
      const { cityName } = schedule;

      setValue(`day${day}.city`, `${countryKorName} ${cityName}`);
    }
  };

  const handleDayImagesChange = (chosenDay: number, imageUrls: string[]) => {
    setDayImages((prevImages) => ({
      ...prevImages,
      [chosenDay]: imageUrls,
    }));
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

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData: TripRecordData = {
      tripRecordImages: mainImageUrls.map((url) => ({
        imageUrl: url,
        tagType: '',
        tagUrl: '',
      })),
      title: data.title,
      content: data.content,
      expenseRangeType: data.expenseRangeType,
      hashTags: selectedHashtags,
      countries: tripPlan.data.countries,
      tripStartDay: format(startDate, 'yyyy-MM-dd'),
      tripEndDay: format(endDate, 'yyyy-MM-dd'),
      tripRecordSchedules: formData
        .map((dayData, index) => {
          const schedules = dayData.data.tripPlanSchedules.map((schedule) => {
            return {
              dayNumber: index + 1,
              orderNumber: schedule.orderNumber,
              placeId: schedule.placeId != null ? schedule.placeId : -1,
              content: schedule.content,
              tripRecordScheduleImages: dayImages[index + 1] || [],
              tripRecordScheduleVideos: [],
              tagType: schedule.tagType || '',
              tagUrl: schedule.tagUrl || '',
            };
          });
          return schedules;
        })
        .flat(),
    };
    console.log(postData);
    mutation.mutate(postData);
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
          <TripPlanUploadMainImages
            onImagesChange={handleMainImagesChange}
            onValidationChange={handleMainImageValidationChange}
          />
          <Styled.PlaceInput
            type="text"
            {...register('title', { required: true })}
            placeholder="피드 제목을 입력하세요"
          />
          <Styled.NoteInput
            {...register('content')}
            placeholder="여행의 전반적인 후기나 메모를 작성해 주세요"
          />

          <TripPlanSetBudget register={register} />

          <TripPlanAddHashtags
            selectedHashtags={selectedHashtags}
            setSelectedHashtags={setSelectedHashtags}
          />

          <Styled.GoogleMapsContainer>
            <TripPlanGoogleMaps />
          </Styled.GoogleMapsContainer>

          <Styled.DaysContainer>
            {formData.map((_, index) => {
              const day = index + 1;
              return (
                <div key={day}>
                  <Styled.DaysButton
                    $isDaySelected={selectedDay === day}
                    onClick={(event) => handleDayButtonClick(day, event)}>
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

          <TripPlanDaysInput
            selectedDay={selectedDay}
            formData={formData}
            setFormData={setFormData}
            register={register}
            handleInputChange={handleInputChange}
            dayImages={dayImages}
            onDayImagesChange={handleDayImagesChange}
          />

          <Styled.SubmitButtonContainer>
            <Button
              type="submit"
              className="submit-btn"
              variants="primary"
              disabled={!isMainImageValid}>
              등록하기
            </Button>
          </Styled.SubmitButtonContainer>
        </Styled.PostingForm>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default TripPlanPostingPlanRecord;
