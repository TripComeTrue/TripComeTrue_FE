import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Container from './DashBoard.styles';

function DashBoard() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Navigation />
    </Container>
  );
}

export default DashBoard;
