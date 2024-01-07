import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import axios, { AxiosInstance } from 'axios';
import { useCallback, useState } from 'react';

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const instance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': googleMapsApiKey,
    // 'X-Goog-FieldMask': [
    //   'places.formattedAddress',
    //   'places.displayName',
    //   'places.location',
    //   'places.primaryTypeDisplayName',
    //   'places.id',
    // ],
    'X-Goog-FieldMask': '*',
  },
});

interface LatLngLiteralType {
  lat: number;
  lng: number;
}

interface DisplayNameType {
  text: string;
  languageCode: string;
}

interface PlaceType {
  displayName: DisplayNameType;
  formattedAddress: string;
  id: string;
  location: { latitude: number; longitude: number };
  primaryTypeDisplayName: DisplayNameType;
}

interface PlacesDataType {
  places: PlaceType[];
}

const TripMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey,
    libraries: ['places'],
  });
  const [places, setPlaces] = useState<PlaceType[] | null>(null);
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
  const [center, setCenter] = useState<
    google.maps.LatLngLiteral | LatLngLiteralType
  >({
    lat: 37.569227,
    lng: 126.9777256,
  });

  const myStyles = [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }],
    },
  ];

  const getNearByPlaces = async (map: google.maps.Map | null) => {
    setCenter(map?.getCenter()?.toJSON()!);
    try {
      const { data } = await instance.post<PlacesDataType>(
        'https://places.googleapis.com/v1/places:searchNearby',
        {
          includedTypes: ['restaurant'],
          maxResultCount: 20,
          rankPreference: 'DISTANCE',
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
      setPlaces(data.places);
    } catch (error) {
      console.log(error);
    }
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

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          center={center}
          onUnmount={onUnmount}
          onLoad={onLoad}
          onDragEnd={() => getNearByPlaces(mapRef)}
          mapContainerStyle={{
            width: '100%',
            height: '100vh',
          }}
          options={{ disableDefaultUI: true, styles: myStyles }}
          zoom={15}>
          {places &&
            places.map((place: PlaceType) => (
              <MarkerF
                key={place.id}
                position={{
                  lat: place.location.latitude,
                  lng: place.location.longitude,
                }}
              />
            ))}
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TripMap;
