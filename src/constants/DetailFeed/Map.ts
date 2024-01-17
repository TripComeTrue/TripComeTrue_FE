export const MY_STYLES = [
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
];

export const OPTIONS = {
  disableDefaultUI: true,
  styles: MY_STYLES,
  center: {
    lat: 37.569227,
    lng: 126.9777256,
  },
};

export const MAP_CONTAINER_STYLE = {
  width: '360px',
  height: '100vh',
};

export const FIELD_MASK_OPTIONS = [
  'places.formattedAddress',
  'places.displayName',
  'places.location',
  'places.primaryTypeDisplayName',
  'places.id',
  'places.rating',
  'places.photos',
  'places.iconBackgroundColor',
  'places.iconMaskBaseUri',
  'places.userRatingCount',
];
