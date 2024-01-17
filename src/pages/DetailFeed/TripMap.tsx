// import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
// import axios, { AxiosInstance } from 'axios';
// import { useCallback, useState } from 'react';
// import styled from 'styled-components';
// import {
//   FIELD_MASK_OPTIONS,
//   MAP_CONTAINER_STYLE,
//   OPTIONS,
// } from '@/constants/DetailFeed/Map';

// const MapContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;

// const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
// const instance: AxiosInstance = axios.create({
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Goog-Api-Key': googleMapsApiKey,
//     'X-Goog-FieldMask': FIELD_MASK_OPTIONS,
//   },
// });

// interface LatLngLiteralType {
//   lat: number;
//   lng: number;
// }

// interface DisplayNameType {
//   text: string;
//   languageCode: string;
// }

// interface AuthorAttributionsType {
//   display: string;
//   photoUri: string;
//   uri: string;
// }

// interface PhotoType {
//   authorAttributions: AuthorAttributionsType[];
//   heightPx: number;
//   name: string;
//   widthPx: number;
// }

// interface PlaceType {
//   displayName: DisplayNameType;
//   formattedAddress: string;
//   id: string;
//   location: { latitude: number; longitude: number };
//   primaryTypeDisplayName: DisplayNameType;
//   photos: PhotoType[];
//   iconBackgroundColor: string;
//   iconMaskBaseUri: string;
//   userRatingCount: number;
// }

// interface PlacesDataType {
//   places: PlaceType[];
// }

// const TripMap = () => {
//   const { isLoaded, loadError } = useJsApiLoader({
//     googleMapsApiKey,
//     libraries: ['places', 'marker', 'geocoding', 'maps'],
//     language: 'ko',
//     mapIds: ['f1f06b61ce5ac997'],
//     channel: 'veta',
//   });
//   const [places, setPlaces] = useState<PlaceType[] | null>(null);
//   const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);
//   const [center, setCenter] = useState<
//     google.maps.LatLngLiteral | LatLngLiteralType
//   >(OPTIONS.center);

//   const getNearByPlaces = async (map: google.maps.Map | null) => {
//     setCenter(map?.getCenter()?.toJSON()!);
//     try {
//       const { data } = await instance.post<PlacesDataType>(
//         'https://places.googleapis.com/v1/places:searchNearby',
//         {
//           includedTypes: ['restaurant'],
//           languageCode: 'ko',
//           maxResultCount: 20,
//           rankPreference: 'POPULARITY',
//           locationRestriction: {
//             circle: {
//               center: {
//                 latitude: center.lat,
//                 longitude: center.lng,
//               },
//               radius: 500.0,
//             },
//           },
//         },
//       );
//       setPlaces(data.places);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const onLoad = useCallback((map: google.maps.Map) => {
//     setMapRef(map);
//   }, []);

//   const onUnmount = useCallback(() => {
//     setMapRef(null);
//   }, []);

//   if (loadError) {
//     return <div>Error loading Google Maps API</div>;
//   }

//   // const handleMarkerClick = (e: google.maps.MapMouseEvent) => {
//   //   console.log()
//   // }

//   return (
//     <MapContainer>
//       {isLoaded ? (
//         <GoogleMap
//           center={center}
//           onUnmount={onUnmount}
//           onLoad={onLoad}
//           onDragEnd={() => getNearByPlaces(mapRef)}
//           mapContainerStyle={MAP_CONTAINER_STYLE}
//           options={OPTIONS}
//           zoom={15}>
//           {places &&
//             places.map((place: PlaceType) => (
//               <MarkerF
//                 key={place.id}
//                 label={{
//                   text: place.displayName.text,
//                   fontSize: '0.7rem',
//                   fontWeight: '700',
//                   fontFamily: 'AppleSDGothicNeo',
//                   color: '#E59304',
//                 }}
//                 zIndex={100}
//                 position={{
//                   lat: place.location.latitude,
//                   lng: place.location.longitude,
//                 }}
//                 icon={{
//                   url: `${place.iconMaskBaseUri}.svg`,
//                   anchor: new google.maps.Point(0, 100),
//                   scaledSize: new google.maps.Size(20, 20),
//                   size: new google.maps.Size(40, 40),
//                   labelOrigin: new google.maps.Point(0, 40),
//                 }}
//               />
//             ))}
//         </GoogleMap>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </MapContainer>
//   );
// };

// export default TripMap;