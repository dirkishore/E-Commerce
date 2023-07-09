import "./App.css";
import { Redirect, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/AboutPage" element={<AboutPage />}></Route>
          <Route path="/products" element={<ProductPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;