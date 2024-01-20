export interface TripPlanHashProps {
  selectedTags?: string[];
  onHashtagsSelection: (hashtags?: string[] | undefined) => void;
  onCloseModal: () => void;
}
