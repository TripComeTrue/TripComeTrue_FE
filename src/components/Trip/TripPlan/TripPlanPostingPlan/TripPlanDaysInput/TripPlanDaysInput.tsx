/* eslint-disable react/jsx-props-no-spreading */
import TripPlanAddTags from '../../TripPlanPostingReview/TripPlanAddTags/TripPlanAddTags';
import TripPlanUploadImages from '../TripPlanUploadImages/TripPlanUploadImages';
import { TripPlanDaysInputProps } from './TripPlanDaysInput.types';
import * as Styled from '../TripPlanPostingPlan.styles';

const TripPlanDaysInput = ({
  selectedDay,
  formData,
  register,
  handleInputChange,
  dayImages,
  onDayImagesChange,
}: TripPlanDaysInputProps) => {
  if (selectedDay === null) return null;

  const selectedDayData = formData[selectedDay - 1];
  if (!selectedDayData || !selectedDayData.data) {
    return <div>Loading day data...</div>;
  }

  const dayData = selectedDayData.data.tripPlanSchedules;

  return dayData.map((schedule, placeIndex) => (
    <Styled.InputContainer key={`day-${selectedDay}-schedule-${placeIndex}`}>
      <Styled.PlaceInputContainer>
        <Styled.PlaceNumber>{schedule.orderNumber}</Styled.PlaceNumber>
        <Styled.PlaceInput
          type="text"
          {...register(`day${selectedDay}.places[${placeIndex}].place`)}
          defaultValue={schedule.placeName}
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
        defaultValue={schedule.content}
      />
      <TripPlanUploadImages
        selectedDay={selectedDay}
        placeIndex={placeIndex}
        onImagesChange={(imageUrls) =>
          onDayImagesChange(selectedDay, imageUrls)
        }
        uploadedImages={dayImages[selectedDay] || []}
      />
      <TripPlanAddTags
        handleTagsUpdate={() => {}}
        dayIndex={selectedDay - 1}
        placeIndex={placeIndex}
        currentTagType={schedule.tagType}
        currentTagUrl={schedule.tagUrl}
      />
    </Styled.InputContainer>
  ));
};

export default TripPlanDaysInput;
