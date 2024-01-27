import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as Styled from './TripPlanPlaceModal.styles';
import { Button, SubTitle } from '@/components/common';
import {
  SelectedPlaceDetailProps,
  SelectedPlaceProps,
} from './TripPlanPlaceModal.types';
import { getTripPlaces } from '@/apis/trip-planandrecords';
import { Place } from '@/@types/trip-alldata.types';
import { useTripFormData } from '@/pages/Trip/TripPlan/TripFormDataContext';

const TripPlanPlaceModal: React.FC<SelectedPlaceProps> = ({
  onPlaceSelection,
  onCloseModal,
  dayIndex,
  placeIndex,
}: SelectedPlaceProps) => {
  const { tripPlanData } = useTripFormData();

  const [selectedPlaceDetails, setSelectedPlaceDetails] =
    useState<SelectedPlaceDetailProps>({ name: '', id: null });
  const countryName = tripPlanData.tripPlanCountriesEng?.[dayIndex] || '';
  let cityName = '';

  if (tripPlanData.tripPlanCities && tripPlanData.tripPlanCities[dayIndex]) {
    const parts = tripPlanData.tripPlanCities[dayIndex].split(' ');
    cityName = parts[parts.length - 1];
  }

  const { data: tripPlacesData } = useQuery({
    queryKey: ['TripPlaces', countryName, cityName],
    queryFn: () => getTripPlaces(countryName, cityName),
    enabled: !!countryName && !!cityName,
  });

  const selectPlace = (place: Place) => {
    setSelectedPlaceDetails({ name: place.name, id: place.placeId });
  };

  useEffect(() => {
    if (selectedPlaceDetails.name && selectedPlaceDetails.id !== null) {
      onPlaceSelection(
        selectedPlaceDetails.name,
        selectedPlaceDetails.id,
        placeIndex,
      );
    }
    console.log(selectedPlaceDetails);
  }, [selectedPlaceDetails, placeIndex]);

  return (
    <Styled.Wrapper>
      <Link to="/trip/addplace">
        <Styled.AddNewPlaceButton
          type="button"
          variants="primary-border"
          rounded="sm"
          size="lg">
          <AiFillPlusCircle
            fontSize="17"
            style={{ fill: '#b4f34c', marginRight: '0.5rem' }}
          />
          방문 장소 직접 추가하기
        </Styled.AddNewPlaceButton>
      </Link>
      <SubTitle margin="1rem 0">추천 방문장소</SubTitle>
      <Styled.ShowPlacesContainer>
        {Array.isArray(tripPlacesData?.data) &&
          tripPlacesData.data.map((place: Place) => (
            <Styled.EachPlace
              key={place.placeId}
              onClick={() => selectPlace(place)}
              selected={selectedPlaceDetails.name === place.name}>
              <div className="place">{place.name}</div>
              <div className="address">{place.address}</div>
              <CheckCircleIcon className="checked" fill="#b4f34c" />
            </Styled.EachPlace>
          ))}
      </Styled.ShowPlacesContainer>

      <Styled.FinalSelectionButton>
        {' '}
        {selectedPlaceDetails.name ? (
          <Button
            variants="primary"
            size="lg"
            rounded="sm"
            onClick={() => {
              onPlaceSelection(
                selectedPlaceDetails.name,
                selectedPlaceDetails.id,
                placeIndex,
              );
              onCloseModal();
            }}>
            {`${selectedPlaceDetails.name} 선택 완료`}
          </Button>
        ) : (
          <Button variants="gray" size="lg" rounded="sm" disabled>
            선택 완료
          </Button>
        )}
      </Styled.FinalSelectionButton>
    </Styled.Wrapper>
  );
};

export default TripPlanPlaceModal;
