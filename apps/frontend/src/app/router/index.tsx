import { Route, Routes, Link } from 'react-router-dom';
import Backoffice from '../pages/Backoffice';

const Router = () => (
  <Routes>
    <Route path="/" element={<Backoffice />} />
  </Routes>
);

export default Router;
