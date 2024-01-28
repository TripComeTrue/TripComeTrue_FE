import * as Styled from './CurrentLocation.styles';
import ColorMyLocation from '/ColorMyLocation.svg';

const CurrentLocation = ({
  handleMyPositonClick,
}: {
  handleMyPositonClick: VoidFunction;
}) => {
  return (
    <Styled.CurrentLocation onClick={handleMyPositonClick}>
      <img src={ColorMyLocation} alt="현재 위치 버튼 아이콘 비활성" />
    </Styled.CurrentLocation>
  );
};

export default CurrentLocation;
