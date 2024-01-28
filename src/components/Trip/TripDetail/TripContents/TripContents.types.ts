export interface TripContentsProps {
  tripRecordId: string;
  schedulesData: { [key: string]: DayData[] };
}
