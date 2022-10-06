import { Route, Routes } from "react-router-dom";
import ProductSelect from "../pages/ProductSelect/ProductSelect";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<ProductSelect />} />
    </Routes>
  );
}
