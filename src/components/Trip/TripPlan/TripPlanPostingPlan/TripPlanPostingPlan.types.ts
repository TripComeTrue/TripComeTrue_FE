export interface PostingProps {
  $isDaySelected: boolean;
}

export interface SelectedPlacesProps {
  [key: number]: string;
}

export interface PostingFormProps {
  city: string;
  places: Place[];
}

export interface Place {
  id: number;
  place: string;
  placeId: number | null;
  note: string;
  tagType: string | null;
  tagUrl: string | null;
}
