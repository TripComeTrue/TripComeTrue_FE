interface LatLngLiteralType {
  lat: number;
  lng: number;
}

interface DisplayNameType {
  text: string;
  languageCode: string;
}

interface AuthorAttributionsType {
  displayName: string;
  photoUri: string;
  uri: string;
}

interface PhotoType {
  authorAttributions: AuthorAttributionsType[];
  heightPx: number;
  name: string;
  widthPx: number;
}

interface PlaceType {
  displayName: DisplayNameType;
  formattedAddress: string;
  id: string;
  location: { latitude: number; longitude: number };
  photos: PhotoType[];
  userRatingCount: number;
  rating: number;
  googleMapsUri: string;
}

interface PlacesDataType {
  places: PlaceType[];
}

interface SpotsInCityData {
  latitude: number;
  longitude: number;
  commentTotal: number;
  imageUrl: string;
  placeId: number;
  placeName: string;
  storedCount: number;
}

interface SpotsInCityResponse {
  code: 200;
  data: SpotsInCityData[];
}
