import { Route, Routes } from 'react-router-dom';

import DashBoard from '@/components/layout';
import Main from '@/pages/Main/Main';
import Home from './pages/Main/Home';

function App() {
  return (
    <Routes>
      <Route element={<DashBoard />}>
        <Route index element={<Main />} />
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
