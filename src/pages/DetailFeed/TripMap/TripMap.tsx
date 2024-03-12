import { useQueries } from '@tanstack/react-query';
import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useJsApiLoader, GoogleMap, MarkerF } from '@react-google-maps/api';
import { getCityInformation } from '@/apis/detailfeed';
import { getSearchSpotsLocation, getSpotsLocation } from '@/apis/tripmap';
import { SimpleNav, Spinners } from '@/components/common';
import MapDefaultSpot from './MapSpotInfoBox/MapDefaultSpot';
import MapGoogleSpot from './MapSpotInfoBox/MapGoogleSpot';
import SpotCategory from './SpotCategory/SpotCategory';
import * as Styled from './TripMap.styles';
import GOOGLE_MAPS from '@/constants/map';

import { OPTIONS, TRIP_MAP_CONTAINER_STYLE } from '@/constants/DetailFeed/Map';

import googleMarkerIcon from '/googleMarkerIcon.png';
import myPostionIcon from '/myPostion.svg';
import pinDefault from '/pinDefault.svg';
import SearchButton from './SearchButton/SearchButton';
import CurrentLocation from './CurrentLocation/CurrentLocation';

const TripMap = () => {
  const { cityId } = useParams() as { cityId: string };
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS,
    language: 'ko',
  });
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [center, setCenter] = useState<
    google.maps.LatLngLiteral | LatLngLiteralType | null
  >(null);
  const [isCenterChanged, setIsCenterChanged] = useState(false);
  const [myPostion, setMyPostion] = useState<LatLngLiteralType | null>(null);
  const [isDefaultSpot, setIsDefaultSpot] = useState<boolean | null>(null);
  const [defaultPlaceData, setDefaultPlaceData] =
    useState<SpotsInCityData | null>(null);
  const [googlePlaceData, setGooglePlaceData] = useState<PlaceType | null>(
    null,
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [
    { data: cityInformation },
    { data: spotsInCityData },
    { data: searchedSpots, refetch },
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
      {
        queryKey: ['searchedSpots', selectedCategory],
        queryFn: () => {
          if (!selectedCategory) {
            return Promise.resolve([]);
          }

          // selectedCategory가 유효한 경우에만 데이터를 불러오는 함수 호출
          return getSearchSpotsLocation(
            selectedCategory,
            mapRef?.getCenter()?.toJSON()!,
          );
        },
      },
    ],
  });

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

  const handleMyPositonClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const myLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCenter(myLocation);
      setMyPostion(myLocation);
    });
  };

  const handleResearchClick = () => {
    setCenter(mapRef?.getCenter()?.toJSON()!);
    setIsCenterChanged(false);
    refetch();
  };

  const onDragEnd = () => {
    setCenter(mapRef?.getCenter()?.toJSON()!);
    setIsCenterChanged(true);
  };

  const onLoad = useCallback((map: google.maps.Map) => {
    setMapRef(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMapRef(null);
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  if (!spotsInCityData || !cityInformation) {
    return <p>Data not available</p>;
  }

  const { name, latitude, longitude } = cityInformation;
  return (
    <>
      <SimpleNav>{name}</SimpleNav>
      <Styled.TripMapWrapper>
        <Styled.TripMapBox>
          {selectedCategory && isCenterChanged && (
            <SearchButton handleResearchClick={handleResearchClick} />
          )}

          <CurrentLocation handleMyPositonClick={handleMyPositonClick} />
          {isLoaded ? (
            <>
              <GoogleMap
                center={center || { lat: latitude, lng: longitude }}
                onClick={() => setIsDefaultSpot(null)}
                onUnmount={onUnmount}
                onLoad={onLoad}
                onDragEnd={() => onDragEnd()}
                mapContainerStyle={TRIP_MAP_CONTAINER_STYLE}
                options={OPTIONS}
                zoom={12}>
                {spotsInCityData &&
                  spotsInCityData.map((place) => (
                    <MarkerF
                      onClick={() => handleDefaultMarkerClick(place)}
                      key={place.placeId}
                      zIndex={100}
                      position={{
                        lat: place.latitude,
                        lng: place.longitude,
                      }}
                      icon={{
                        url: `${pinDefault}`,
                        scaledSize: new google.maps.Size(35, 35),
                      }}
                    />
                  ))}
                {searchedSpots &&
                  searchedSpots.map((place) => (
                    <MarkerF
                      onClick={() => handleGoogleMarkerClick(place)}
                      key={place.id}
                      zIndex={100}
                      position={{
                        lat: place.location.latitude,
                        lng: place.location.longitude,
                      }}
                      icon={{
                        url: `${googleMarkerIcon}`,
                        scaledSize: new google.maps.Size(35, 35),
                      }}
                    />
                  ))}
                {myPostion && (
                  <MarkerF
                    zIndex={100}
                    position={myPostion}
                    icon={{
                      url: `${myPostionIcon}`,
                      scaledSize: new google.maps.Size(30, 30),
                    }}
                  />
                )}
              </GoogleMap>
              {isDefaultSpot !== null &&
                (isDefaultSpot ? (
                  <MapDefaultSpot defaultPlaceData={defaultPlaceData} />
                ) : (
                  <MapGoogleSpot googlePlaceData={googlePlaceData} />
                ))}
              <SpotCategory
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryClick}
              />
            </>
          ) : (
            <Spinners />
          )}
        </Styled.TripMapBox>
      </Styled.TripMapWrapper>
    </>
  );
};

export default TripMap;
