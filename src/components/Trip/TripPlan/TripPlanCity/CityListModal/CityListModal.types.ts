export interface EachCityProps {
  selected: boolean;
}

export interface SelectedCitiesProps {
  selectedCities: string[];
  onCitySelection: (cities: string[]) => void;
  onCloseModal: () => void;
}
