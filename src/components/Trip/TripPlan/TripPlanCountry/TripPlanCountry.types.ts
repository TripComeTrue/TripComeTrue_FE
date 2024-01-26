import { CountryData } from '@/@types/trip-alldata.types';

export interface SelectButtonProps {
  $isSelected: boolean;
}

export interface SelectedCountriesProps {
  $selectedCountries: CountryData[];
}
