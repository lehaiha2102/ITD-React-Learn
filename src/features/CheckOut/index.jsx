import { Route, Routes, useLocation } from 'react-router-dom';
import Main from '../../components/MainLayouts/components/main';
import CheckOut from './components/CheckOut';

function CheckoutFeature() {
  const location = useLocation();
  return (
      <Main>
        <Routes location={location}>
          <Route path="/list" element={<CheckOut />} />
        </Routes>
      </Main>
  );
}

export default CheckoutFeature;
