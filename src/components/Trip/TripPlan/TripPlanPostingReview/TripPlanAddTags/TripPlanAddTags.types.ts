export interface TripPlanAddTagsProps {
  handleTagsUpdate: (
    dayIndex: number,
    placeIndex: number,
    type: string,
    url: string,
  ) => void;
  dayIndex: number;
  placeIndex: number;
  currentTagType: string | null;
  currentTagUrl: string | null;
}
