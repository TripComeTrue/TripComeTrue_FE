import { Outlet, Route, Routes } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Main from '@/pages/Main';

function DashBoard() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
