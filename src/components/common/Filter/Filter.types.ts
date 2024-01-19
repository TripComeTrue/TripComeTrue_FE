import { Dispatch, SetStateAction } from 'react';

export interface FilterProps {
  first: string;
  second: string;
  selectedFilter: string;
  setSelectedFilter: Dispatch<SetStateAction<string>>;
}
