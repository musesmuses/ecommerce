import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./Pages/ProductDetial/ProductDetail";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
