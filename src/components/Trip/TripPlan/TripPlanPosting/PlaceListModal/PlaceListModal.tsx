// import { useState } from 'react';
// import * as Styled from './PlaceListModal.styles';

// const PlaceListModal = () => {
//   const [selectedPlace, setSelectedPlace] = useState<string>('');

//   const places = [
//     {
//       name: '에펠탑',
//       address: 'Champ de Mars, 5 Avenue Anatole France, Paris 7',
//     },
//     {
//       name: '루브르 박물관',
//       address: 'Champ de Mars, 5 Avenue Anatole France, Paris 7',
//     },
//     {
//       name: '에투알 개선문',
//       address: 'Champ de Mars, 5 Avenue Anatole France, Paris 7',
//     },
//     {
//       name: '오르세 미술관',
//       address: 'Champ de Mars, 5 Avenue Anatole France, Paris 7',
//     },
//   ];

//   const selectPlace = (place: string) => {
//     setSelectedPlace(place);
//   };

//   return (
//     <>
//       <Styled.ShowPlacesContainer>
//         {places.map((place) => (
//           <Styled.EachPlace
//             key={place}
//             onClick={() => selectPlace(place)}
//             selected={selectedPlace.includes(place)}>
//             <img src={image} alt="place" />
//             {place}
//             <CheckCircleIcon className="checked" fill="#b4f34c" />
//           </Styled.EachPlace>
//         ))}
//       </Styled.ShowPlacesContainer>
//     </>
//   );
// };

// export default PlaceListModal;
