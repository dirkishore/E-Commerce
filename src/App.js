import "./App.css";
import { Redirect, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <HomePage />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/AboutPage" element={<AboutPage />}></Route>
        <Route exact path="/products" element={<ProductPage />} />
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
