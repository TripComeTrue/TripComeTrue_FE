import { getSearchgSpotsLocation } from '@/apis/tripmap';
import { OPTIONS, TRIP_MAP_CONTAINER_STYLE } from '@/constants/DetailFeed/Map';
import GOOGLE_MAPS from '@/constants/map';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import CurrentLocation from '../CurrentLocation/CurrentLocation';
import SearchButton from '../SearchButton/SearchButton';
import * as Styled from '../TripMap.styles';
import googleMarkerIcon from '/googleMarkerIcon.png';
import myPostionIcon from '/myPostion.svg';
import pinDefault from '/pinDefault.svg';

const Gmap = ({
  cityLocation,
  spotsInCityData,
  setIsDefaultSpot,
  setMapCenterChange,
  selectedCategory,
  handleDefaultMarkerClick,
  handleGoogleMarkerClick,
  mapCenterChange,
}: GmapProps) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS,
    language: 'ko',
  });
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [center, setCenter] = useState<
    google.maps.LatLngLiteral | LatLngLiteralType
  >({ lat: cityLocation.latitude, lng: cityLocation.longitude });
  const [myPostion, setMyPostion] = useState<LatLngLiteralType | null>(null);

  const {
    data: searchedSpots,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['searchedSpots', selectedCategory],
    queryFn: () => {
      if (!selectedCategory) {
        return Promise.resolve([]);
      }

      // selectedCategory가 유효한 경우에만 데이터를 불러오는 함수 호출
      return getSearchgSpotsLocation(selectedCategory, center);
    },
  });

  const handleMyPositonClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const myLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCenter(myLocation);
      setMyPostion(myLocation);
    });
    setMapCenterChange(true);
  };

  const handleResearchClick = () => {
    setCenter(mapRef?.getCenter()?.toJSON()!);
    setMapCenterChange(false);
    refetch();
  };

  const onDragEnd = () => {
    setCenter(mapRef?.getCenter()?.toJSON()!);
    setMapCenterChange(true);
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

  if (isError) {
    return <div>에러로 인해 구글맵 주변 검색을 이용할 수 없습니다.</div>;
  }
  return (
    <Styled.TripMapBox>
      {mapCenterChange && selectedCategory && (
        <SearchButton handleResearchClick={handleResearchClick} />
      )}

      <CurrentLocation handleMyPositonClick={handleMyPositonClick} />
      {isLoaded ? (
        <>
          <GoogleMap
            center={center}
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
                    scaledSize: new google.maps.Size(30, 30),
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
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Styled.TripMapBox>
  );
};

export default Gmap;
