import {
  getSpotInformation,
  getSpotMapInformation,
} from '@/apis/touristSpotFeed';

export const TOURIST_SPOT_FEED_QUERYS = [
  { key: 'spot', fn: getSpotInformation },
  { key: 'spotMap', fn: getSpotMapInformation },
];
