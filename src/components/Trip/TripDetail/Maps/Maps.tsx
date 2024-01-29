import {
  GoogleMap,
  MarkerF,
  PolylineF,
  useJsApiLoader,
} from '@react-google-maps/api';
import { Fragment, useEffect, useState } from 'react';
import GOOGLE_MAPS from '@/constants/map';
import { MapsProps } from './Maps.types';
import MarkerFIcon from '/images/markerF.svg';

const Maps = ({ daysData }: MapsProps) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  let prevData: DayData;
  const locations: { lat: number; lng: number }[] = [];
  daysData?.forEach((dayData) => {
    locations.push({ lat: dayData.latitude, lng: dayData.longitude });
  });

  const defaultCenter = {
    lat: daysData ? daysData[0].latitude : 0,
    lng: daysData ? daysData[0].longitude : 0,
  };

  const lineSymbol = {
    strokeOpacity: 0,
    icons: [
      {
        icon: {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: 2,
        },
        offset: '0',
        repeat: '12px',
      },
    ],
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS,
    language: 'ko',
  });

  const onLoad = (mapData: google.maps.Map) => {
    setMap(mapData);
  };

  useEffect(() => {
    if (map) {
      const bounds = new window.google.maps.LatLngBounds();
      locations.forEach((location) => {
        bounds.extend(
          new window.google.maps.LatLng(location.lat, location.lng),
        );
      });

      map.fitBounds(bounds);
    }
  }, [map, locations]);

  return (
    isLoaded && (
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '11.25rem' }}
        center={defaultCenter}
        zoom={12}
        onLoad={onLoad}
        options={{ disableDefaultUI: true }}>
        {daysData?.map((day, index) => {
          const path = prevData && [
            { lat: prevData?.latitude, lng: prevData?.longitude },
            { lat: day?.latitude, lng: day?.longitude },
          ];
          prevData = day;
          return (
            <Fragment key={index}>
              {index <= 2 && (
                <PolylineF
                  key={`polyline-${index}`}
                  options={lineSymbol}
                  path={path}
                />
              )}
              <MarkerF
                key={`marker-${day.id}`}
                position={{ lat: day.latitude, lng: day.longitude }}
                options={{
                  label: {
                    text: String(day.ordering),
                    color: 'white',
                  },
                  icon: {
                    url: MarkerFIcon,
                  },
                }}
              />
            </Fragment>
          );
        })}
      </GoogleMap>
    )
  );
};

export default Maps;
