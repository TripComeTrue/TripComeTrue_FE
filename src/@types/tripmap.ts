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
  primaryTypeDisplayName: DisplayNameType;
  photos: PhotoType[];
  iconBackgroundColor: string;
  iconMaskBaseUri: string;
  userRatingCount: number;
  rating: number;
  googleMapsUri: string;
}

interface PlacesDataType {
  places: PlaceType[];
}

interface GmapProps {
  cityLocation: { latitude: number; longitude: number };
  spotsInCityData: SpotsInCityData[];
  setIsDefaultSpot: (arg0: boolean | null) => void;
  setMapCenterChange: (arg0: boolean) => void;
  selectedCategory: string | null;
  handleDefaultMarkerClick: (defaultPlaceInfo: SpotsInCityData) => void;
  handleGoogleMarkerClick: (googlePlaceInfo: PlaceType) => void;
  mapCenterChange: boolean;
}

interface SpotsInCityData {
  commentTotal: number;
  imageUrl: string;
  latitude: number;
  longitude: number;
  placeId: number;
  placeName: string;
  storedCount: number;
}

interface SpotsInCityResponse {
  code: 200;
  data: SpotsInCityData[];
}
