import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyled } from "./componentsGlobal/GlobalStyle";
import { NavBar, NavLink, Logo } from "./componentsGlobal/ComponentsGlobal";
import LandingPage from "./pages/LandingPage.js";
import PageNotFound404 from "./pages/PageNotFound404";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div>
      <GlobalStyled />
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar>
          <Logo to="/"></Logo>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product-page">Product</NavLink>
        </NavBar>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
