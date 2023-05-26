import { Route, Routes } from "react-router-dom";
import ProductsListCart from "./features/Cart/components/Cart";
import CheckoutFeature from "./features/CheckOut";
import Dashboard from "./features/Dashboard";
import ProductFeature from "./features/Product";
import CategoryCollection from "./features/Product/components/CategoryCollection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products/*" element={<ProductFeature />} />
      <Route path="/cart" element={<ProductsListCart/>} />
      <Route path="/category/:categorySlug" element={<CategoryCollection/>} />
      <Route path="/check-out/*" element={<CheckoutFeature/>} />
    </Routes>
  );
}

export default App;
