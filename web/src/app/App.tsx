import config from '../../../config';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Public } from '../pages/Public';
import { Admin } from '../pages/Admin';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Public />} />
        <Route path={config.ADMIN_ROUTE} element={<Admin />} />
      </Routes>
    </Router>
  )
}