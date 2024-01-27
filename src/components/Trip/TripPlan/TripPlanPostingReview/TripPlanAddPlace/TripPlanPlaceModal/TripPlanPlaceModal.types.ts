export interface EachPlaceProps {
  selected: boolean;
}

export interface SelectedPlaceProps {
  selectedPlace: string;
  onPlaceSelection: (
    placeName: string,
    placeId: number | null,
    placeIndex: number,
  ) => void;
  onCloseModal: () => void;
  cityName?: string;
  dayIndex: number;
  placeIndex: number;
}

export interface SelectedPlaceDetailProps {
  name: string;
  id: number | null;
}
