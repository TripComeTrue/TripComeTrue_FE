import { useCallback } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  MarkerF,
  OverlayView,
} from '@react-google-maps/api';
import mapMarker from '/images/map-mark.svg';
import MarkerText from './TripPlanGoogleMaps.styles';

const center = {
  lat: 48.864716,
  lng: 2.349014,
};

const options = {
  minZoom: 7,
  maxZoom: 13,
  mapTypeControl: false,
};

interface GoogleMapsProps {
  height?: string;
  placeName?: string;
}

interface OffsetProps {
  x: number;
  y: number;
}

function TripPlanGoogleMaps({ height = '10rem', placeName }: GoogleMapsProps) {
  const containerStyle = {
    width: '100%',
    height,
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  // const [map, setMap] = useState(null);

  const getPixelPositionOffset = (
    offsetWidth: number,
    offsetHeight: number,
  ): OffsetProps => ({
    x: -(offsetWidth / 1),
    y: -(offsetHeight + 1),
  });

  const onLoad = useCallback((map: any) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    // setMap(null);
  }, []);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}>
      <MarkerF position={center} icon={mapMarker} />

      {placeName && (
        <OverlayView
          position={center}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={getPixelPositionOffset}>
          <MarkerText>{placeName}</MarkerText>
        </OverlayView>
      )}
    </GoogleMap>
  );
}

export default TripPlanGoogleMaps;
