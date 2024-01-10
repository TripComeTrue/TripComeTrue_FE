export interface Country {
  name: string;
}
export interface Continent {
  name: string;
  subCategories: Country[];
}

export interface WorldData {
  해외: Continent[];
  국내: Continent[];
}

export interface SelectButtonProps {
  isSelected: boolean;
}

export interface SelectedCountriesProps {
  country: string[];
}
