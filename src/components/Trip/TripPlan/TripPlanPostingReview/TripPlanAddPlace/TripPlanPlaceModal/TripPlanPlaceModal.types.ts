export interface EachPlaceProps {
  selected: boolean;
}

export interface SelectedPlaceProps {
  selectedPlace: string;
  onPlaceSelection: (place: string) => void;
  onCloseModal: () => void;
  countryName: string;
  cityName: string;
}
