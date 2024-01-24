import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as Styled from './TripPlanPlaceModal.styles';
import { Button, SubTitle } from '@/components/common';
import { SelectedPlaceProps } from './TripPlanPlaceModal.types';
import image from '../../../TripPlanCountry/constants/france.png';

const TripPlanPlaceModal: React.FC<SelectedPlaceProps> = ({
  selectedPlace,
  onPlaceSelection,
  onCloseModal,
}: SelectedPlaceProps) => {
  const [selectedPlaceInModal, setSelectedPlaceInModal] = useState<string>('');
  const placesForSelectedCity = [
    {
      name: '에펠탑',
      address: 'Champ de Mars, 5 Avenue Anatole France, Paris 7',
    },
    {
      name: '루브르 박물관',
      address: 'France, 75001 Paris',
    },
    {
      name: '에투알 개선문',
      address: 'Pl. Charles de Gaulle, 75008 Paris, France',
    },
    {
      name: '오르세 미술관',
      address: "Esplanade Valéry Giscard d'Estaing 75007 Paris",
    },
  ];

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
        {placesForSelectedCity.map((place) => (
          <Styled.EachPlace
            key={place.name}
            onClick={() => selectPlace(place.name)}
            selected={selectedPlace.includes(place.name)}>
            <img src={image} alt="city" />
            {place.name}
            <CheckCircleIcon className="checked" fill="#b4f34c" />
          </Styled.EachPlace>
        ))}
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
