import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Public } from '../pages/Public';
import { Admin } from '../pages/Admin';
import { config } from './config';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Public />} />
        <Route path={config.adminRoute} element={<Admin />} />
      </Routes>
    </Router>
  )
}