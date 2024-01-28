import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
// import axios, { AxiosInstance } from 'axios';
import * as Styled from './Map.styles';
import { MAP_CONTAINER_STYLE, OPTIONS } from '@/constants/DetailFeed/Map';
import defaultPin from '/defaultPin.svg';
import { GOOGLE_MAPS_API_KEY } from '@/apis/tripmap';

interface MapProps {
  spotCenter: {
    lat: number;
    lng: number;
  };
}

// const instance: AxiosInstance = axios.create({
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Goog-Api-Key': googleMapsApiKey,
//     'X-Goog-FieldMask': ['places.displayName'],
//   },
// });

const Map = ({ spotCenter }: MapProps) => {
  const [, setMapRef] = useState<google.maps.Map | null>(null);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    language: 'ko',
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    setMapRef(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMapRef(null);
  }, []);

  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  return (
    <Styled.MapWrapper>
      {isLoaded ? (
        <GoogleMap
          center={spotCenter}
          onUnmount={onUnmount}
          onLoad={onLoad}
          mapContainerStyle={MAP_CONTAINER_STYLE}
          options={OPTIONS}
          zoom={14}>
          <MarkerF
            position={{ lat: spotCenter.lat, lng: spotCenter.lng }}
            icon={{
              url: defaultPin,
              scaledSize: new google.maps.Size(45, 45),
              size: new google.maps.Size(45, 45),
            }}
          />
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </Styled.MapWrapper>
  );
};

export default Map;
