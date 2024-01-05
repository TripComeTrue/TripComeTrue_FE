import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import axios, { AxiosInstance } from 'axios';
import { useState } from 'react';

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const instance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': googleMapsApiKey,
    'X-Goog-FieldMask': '*',
  },
});

interface LatLngLiteralType {
  lat: number;
  lng: number;
}

const TripMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey,
    libraries: ['places'],
  });
  // const [places, setPlaces] = useState<any>([]);
  const [, setMapRef] = useState<google.maps.Map | null>(null);
  const [center] = useState<google.maps.LatLngLiteral | LatLngLiteralType>({
    lat: 37.569227,
    lng: 126.9777256,
  });
  const getNearByPlaces = async () => {
    try {
      const res = await instance.post(
        'https://places.googleapis.com/v1/places:searchNearby',
        {
          includedTypes: ['restaurant'],
          maxResultCount: 10,
          locationRestriction: {
            circle: {
              center: {
                latitude: center.lat,
                longitude: center.lng,
              },
              radius: 500.0,
            },
          },
        },
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const onLoad = (map: google.maps.Map) => {
    setMapRef(map);
  };

  const onUnmount = () => {
    setMapRef(null);
  };
  // const handleClick = (e: google.maps.MapMouseEvent) => {
  //   if (e.latLng) {
  //     console.log(e.latLng?.toJSON());
  //   }
  // };
  if (loadError) {
    return <div>Error loading Google Maps API</div>;
  }

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          center={center}
          onUnmount={onUnmount}
          onLoad={onLoad}
          // onDragEnd={() => console.log(mapRef?.getCenter()?.toJSON())}
          onDragEnd={getNearByPlaces}
          mapContainerStyle={{
            width: '100%',
            height: '100vh',
          }}
          // onClick={handleClick}
          zoom={15}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TripMap;
