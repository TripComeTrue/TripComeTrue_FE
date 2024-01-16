import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const style = {
  width: '100%',
  height: '10rem',
};

const center = {
  lat: 48.864716,
  lng: 2.349014,
};

const OPTIONS = {
  minZoom: 7,
  maxZoom: 13,
};

function TripPlanGoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={style}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={OPTIONS}>
        <MarkerF position={center}></MarkerF>
      </GoogleMap>
    )
  );
}

export default React.memo(TripPlanGoogleMaps);
