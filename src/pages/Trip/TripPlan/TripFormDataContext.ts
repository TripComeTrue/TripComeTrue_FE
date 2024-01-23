import { createContext, useContext, useState } from "react";


const TripFormDataContext = createContext({tripFormData: {}, updateTripFormData: ()=>{},});

export const useTripFormData = () => useContext(TripFormDataContext);

export const TripFormDataProvider = ({ children }) => {
    const [tripFormData, setTripFormData] = useState({});
    const updateTripFormData = (newData) => {
        setTripFormData({ ...FormData, ...newData });
    }

    return (
        <TripForm
    )
}