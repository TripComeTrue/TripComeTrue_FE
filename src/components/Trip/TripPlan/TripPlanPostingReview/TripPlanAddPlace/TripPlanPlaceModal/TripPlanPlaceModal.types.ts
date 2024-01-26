export interface EachPlaceProps {
  selected: boolean;
}

export interface SelectedPlaceProps {
  selectedPlace: string;
  onPlaceSelection: (place: string) => void;
  onCloseModal: () => void;
  cityName?: string;
  dayIndex: number;
}
