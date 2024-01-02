import { Route, Routes } from 'react-router-dom';

import DashBoard from '@/components/layout';
import Main from '@/pages/Main/Main';

function App() {
  return (
    <Routes>
      <Route element={<DashBoard />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
