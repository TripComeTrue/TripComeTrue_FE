import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import {
  TripPlanData,
  TripRecordData,
  defaultTripPlanData,
  defaultTripRecordData,
} from '@/@types/trip-alldata.types';

const TripFormDataContext = createContext<{
  tripPlanData: TripPlanData;
  tripRecordData: TripRecordData;
  updateTripPlanData: (newData: Partial<TripPlanData>) => void;
  updateTripRecordData: (newData: Partial<TripRecordData>) => void;
}>({
  tripPlanData: defaultTripPlanData,
  tripRecordData: defaultTripRecordData,
  updateTripPlanData: () => {},
  updateTripRecordData: () => {},
});

export const TripFormDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tripPlanData, setTripPlanData] =
    useState<TripPlanData>(defaultTripPlanData);
  const [tripRecordData, setTripRecordData] = useState<TripRecordData>(
    defaultTripRecordData,
  );

  const updateTripPlanData = (newData: Partial<TripPlanData>) => {
    setTripPlanData((prevData) => ({ ...prevData, ...newData }));
  };

  const updateTripRecordData = (newData: Partial<TripRecordData>) => {
    setTripRecordData((prevData) => ({ ...prevData, ...newData }));
  };

  const providerValue = useMemo(
    () => ({
      tripPlanData,
      tripRecordData,
      updateTripPlanData,
      updateTripRecordData,
    }),
    [tripPlanData, tripRecordData],
  );

  return (
    <TripFormDataContext.Provider value={providerValue}>
      {children}
    </TripFormDataContext.Provider>
  );
};

export const useTripFormData = () => useContext(TripFormDataContext);
