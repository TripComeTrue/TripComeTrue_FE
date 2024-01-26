/* eslint-disable react/jsx-props-no-spreading */
import { SlArrowLeft } from 'react-icons/sl';
import TripPlanPlaceModal from '../../TripPlanPostingReview/TripPlanAddPlace/TripPlanPlaceModal/TripPlanPlaceModal';
import TripPlanAddTags from '../../TripPlanPostingReview/TripPlanAddTags/TripPlanAddTags';
import TripPlanUploadImages from '../TripPlanUploadImages/TripPlanUploadImages';
import { TripPlanDaysInputProps } from './TripPlanDaysInput.types';
import * as Styled from '../TripPlanPostingPlan.styles';

function TripPlanDaysInput({
  selectedDay,
  formData,
  setFormData,
  register,
  handleInputChange,
  selectedPlace,
  isPlaceModalOpen,
  setIsPlaceModalOpen,
  closePlaceListModal,
  handlePlaceModalSelection,
}: TripPlanDaysInputProps) {
  if (selectedDay === null) return null;
  return formData[selectedDay - 1].places.map((place) => (
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
  ));
}

export default TripPlanDaysInput;
