import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SimpleNav } from '@/components/common';
import { getCityLoaction, getSpotsLocation } from '@/apis/tripmap';
import Gmap from './Gmap/Gmap';
import MapDefaultSpot from './MapSpotInfoBox/MapDefaultSpot';
import MapGoogleSpot from './MapSpotInfoBox/MapGoogleSpot';
import SpotCategory from './SpotCategory/SpotCategory';
import * as Styled from './TripMap.styles';

const TripMap = () => {
  const location = useLocation();
  const [isDefaultSpot, setIsDefaultSpot] = useState<boolean | null>(null);
  const [defaultPlaceData, setDefaultPlaceData] =
    useState<SpotsInCityData | null>(null);
  const [googlePlaceData, setGooglePlaceData] = useState<PlaceType | null>(
    null,
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mapCenterChange, setMapCenterChange] = useState(false);
  const { cityId } = useParams() as unknown as { cityId: number };
  const { cityName } = location.state as {
    cityName: string;
  };

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
  const { data: cityLoctionData, isLoading: cityLoctionDataLoding } = useQuery({
    queryKey: ['cityLocation', cityName],
    queryFn: () => getCityLoaction(cityName),
    staleTime: Infinity,
  });
  const { data: spotsInCityData, isLoading: spotsInCityDataLoding } = useQuery({
    queryKey: ['spotsLocation', cityId],
    queryFn: () => getSpotsLocation(cityId),
    staleTime: Infinity,
  });

  if (cityLoctionDataLoding) {
    return <p>...Loading</p>;
  }

  if (spotsInCityDataLoding) {
    return <p>...Loading</p>;
  }

  if (!spotsInCityData || !cityLoctionData) {
    return <p>Data not available</p>;
  }
  const cityLocation = cityLoctionData.places[0].location;
  return (
    <>
      <SimpleNav>{cityName}</SimpleNav>
      <Styled.TripMapWrapper>
        <Gmap
          cityLocation={cityLocation}
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
