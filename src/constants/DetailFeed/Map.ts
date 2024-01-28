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
};

export const MAP_CONTAINER_STYLE = {
  height: '13.5rem',
  borderRadius: '0.625rem',
};

export const TRIP_MAP_CONTAINER_STYLE = {
  height: '100%',
};

export const FIELD_MASK_OPTIONS = [
  'places.displayName',
  'places.location',
  'places.primaryTypeDisplayName',
  'places.id',
  'places.rating',
  'places.photos',
  'places.iconBackgroundColor',
  'places.iconMaskBaseUri',
  'places.userRatingCount',
  'places.googleMapsUri',
];
