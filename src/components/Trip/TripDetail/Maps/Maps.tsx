import {
  GoogleMap,
  LoadScript,
  MarkerF,
  PolylineF,
} from '@react-google-maps/api';
import GOOGLE_MAPS from '@/constants/map';

const Maps = () => {
  const place1 = {
    lat: 37.630016,
    lng: 127.045892,
  };

  const place2 = {
    lat: 37.610978,
    lng: 127.047992,
  };
  const path = [
    { lat: 37.630016, lng: 127.045892 },
    { lat: 37.610978, lng: 127.047992 },
  ];
  const lineSymbol = {
    path: 'M 0,-1 0,1',
    strokeOpacity: 1,
    scale: 2,
  };
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '11.25rem' }}
        center={place1}
        zoom={12}
        options={{ disableDefaultUI: true }}>
        <MarkerF position={place1} />
        <PolylineF
          path={path}
          options={{
            strokeOpacity: 0,
            icons: [{ icon: lineSymbol, offset: '0', repeat: '12px' }],
          }}
        />
        <MarkerF position={place2} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
