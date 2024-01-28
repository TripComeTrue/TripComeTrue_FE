import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import * as Styled from './Map.styles';
import { MAP_CONTAINER_STYLE, OPTIONS } from '@/constants/DetailFeed/Map';
import defaultPin from '/defaultPin.svg';
import GOOGLE_MAPS from '@/constants/map';

interface MapProps {
  spotCenter: {
    lat: number;
    lng: number;
  };
}

const Map = ({ spotCenter }: MapProps) => {
  const [, setMapRef] = useState<google.maps.Map | null>(null);
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS,
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
