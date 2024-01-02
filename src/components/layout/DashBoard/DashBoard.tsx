import { Outlet } from 'react-router-dom';
import Container from './DashBoard.styles';

function DashBoard() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default DashBoard;
