import { useQueries } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCityInformation } from '@/apis/detailfeed';
import { getSpotsLocation } from '@/apis/tripmap';
import { SimpleNav } from '@/components/common';
import Gmap from './Gmap/Gmap';
import MapDefaultSpot from './MapSpotInfoBox/MapDefaultSpot';
import MapGoogleSpot from './MapSpotInfoBox/MapGoogleSpot';
import SpotCategory from './SpotCategory/SpotCategory';
import * as Styled from './TripMap.styles';

const TripMap = () => {
  const { cityId } = useParams() as { cityId: string };
  const [isDefaultSpot, setIsDefaultSpot] = useState<boolean | null>(null);
  const [defaultPlaceData, setDefaultPlaceData] =
    useState<SpotsInCityData | null>(null);
  const [googlePlaceData, setGooglePlaceData] = useState<PlaceType | null>(
    null,
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mapCenterChange, setMapCenterChange] = useState(false);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleDefaultMarkerClick = (defaultPlaceInfo: SpotsInCityData) => {
    setDefaultPlaceData(defaultPlaceInfo);
    setIsDefaultSpot(true);
  };

  const handleGoogleMarkerClick = async (googlePlaceInfo: PlaceType) => {
    setGooglePlaceData(googlePlaceInfo);
    setIsDefaultSpot(false);
  };

  const [
    { data: cityInformation, isLoading: cityInformationLoading },
    { data: spotsInCityData, isLoading: spotsInCityDataLoding },
  ] = useQueries({
    queries: [
      {
        queryKey: ['cityInformation', cityId],
        queryFn: () => getCityInformation(cityId),
        select: (data: {
          name: string;
          latitude: number;
          longitude: number;
        }) => {
          return {
            name: data.name,
            latitude: data.latitude,
            longitude: data.longitude,
          };
        },
      },
      {
        queryKey: ['spotsLocation', cityId],
        queryFn: () => getSpotsLocation(cityId),
      },
    ],
  });

  if (cityInformationLoading) {
    return <p>...Loading</p>;
  }

  if (spotsInCityDataLoding) {
    return <p>...Loading</p>;
  }

  if (!spotsInCityData || !cityInformation) {
    return <p>Data not available</p>;
  }

  const { name, latitude, longitude } = cityInformation;
  return (
    <>
      <SimpleNav>{name}</SimpleNav>
      <Styled.TripMapWrapper>
        <Gmap
          cityLocation={{ latitude, longitude }}
          mapCenterChange={mapCenterChange}
          spotsInCityData={spotsInCityData}
          setIsDefaultSpot={setIsDefaultSpot}
          setMapCenterChange={setMapCenterChange}
          selectedCategory={selectedCategory}
          handleDefaultMarkerClick={handleDefaultMarkerClick}
          handleGoogleMarkerClick={handleGoogleMarkerClick}
        />
        {isDefaultSpot !== null && (
          <>
            {isDefaultSpot ? (
              <MapDefaultSpot defaultPlaceData={defaultPlaceData} />
            ) : (
              <MapGoogleSpot googlePlaceData={googlePlaceData} />
            )}
          </>
        )}
        <SpotCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryClick}
        />
      </Styled.TripMapWrapper>
    </>
  );
};

export default TripMap;
