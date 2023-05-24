import { Route, Routes, useLocation } from 'react-router-dom';
import Main from '../../components/MainLayouts/components/main';
import NewProductsList from './components/NewProduct';
import ProductDetail from './components/ProductDetail';
import ProductSearch from './components/ProductSearch';

function ProductFeature() {
  const location = useLocation();
  return (
      <Main>
        <Routes location={location}>
          <Route path="/new" element={<NewProductsList />} />
          <Route path="/:productSlug" element={<ProductDetail />} />
          <Route path='/search/:keyword' element={<ProductSearch/>}/>
        </Routes>
      </Main>
  );
}

export default ProductFeature;
