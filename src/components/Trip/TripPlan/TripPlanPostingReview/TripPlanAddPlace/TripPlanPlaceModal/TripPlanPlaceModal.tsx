import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as Styled from './TripPlanPlaceModal.styles';
import { Button, SubTitle } from '@/components/common';
import { SelectedPlaceProps } from './TripPlanPlaceModal.types';
import { getTripPlaces } from '@/apis/trip-planandrecords';
import { Place } from '@/@types/trip-alldata.types';
import { useTripFormData } from '@/pages/Trip/TripPlan/TripFormDataContext';

const TripPlanPlaceModal: React.FC<SelectedPlaceProps> = ({
  selectedPlace,
  onPlaceSelection,
  onCloseModal,
  dayIndex,
}: SelectedPlaceProps) => {
  const { tripPlanData } = useTripFormData();
  const countryName = tripPlanData.tripPlanCountriesEng?.[dayIndex] || '';
  const cityName = tripPlanData.tripPlanCities?.[dayIndex] || '';

  const { data: tripPlacesData } = useQuery({
    queryKey: ['TripPlaces', countryName, cityName],
    queryFn: () => getTripPlaces(countryName, cityName),
    enabled: !!countryName && !!cityName,
  });

  useEffect(() => {
    console.log(countryName);
    console.log(cityName);
    console.log(tripPlacesData);
  }, [countryName, cityName, tripPlacesData]);

  const [selectedPlaceInModal, setSelectedPlaceInModal] = useState<string>('');

  const selectPlace = (place: string) => {
    setSelectedPlaceInModal(place);
  };

  useEffect(() => {
    onPlaceSelection(selectedPlaceInModal);
  }, [selectedPlaceInModal, onPlaceSelection]);

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
        {tripPlacesData && Array.isArray(tripPlacesData) ? (
          tripPlacesData.map((place: Place) => (
            <Styled.EachPlace
              key={place.placeId}
              onClick={() => selectPlace(place.name)}
              selected={selectedPlace.includes(place.name)}>
              {place.name}
              {place.address}
              <CheckCircleIcon className="checked" fill="#b4f34c" />
            </Styled.EachPlace>
          ))
        ) : (
          <p>Loading..</p>
        )}
      </Styled.ShowPlacesContainer>

      <Styled.FinalSelectionButton>
        {' '}
        {selectedPlace.length > 0 ? (
          <Button
            variants="primary"
            size="lg"
            rounded="sm"
            onClick={() => {
              onPlaceSelection(selectedPlaceInModal);
              onCloseModal();
            }}>
            {`${selectedPlace} 선택 완료`}
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
