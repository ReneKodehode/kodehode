import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyled } from "./componentsGlobal/GlobalStyle";
import {
  NavBar,
  NavLink,
  Logo,
  StyledMenuBar,
  SearchBar,
  User,
  ShoppingCart,
} from "./componentsGlobal/StyledComponentsGlobal";
import LandingPage from "./pages/LandingPage.js";
import PageNotFound404 from "./pages/PageNotFound404";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div>
      <GlobalStyled />
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar>
          <Logo to="/">My-Shop</Logo>
          <StyledMenuBar></StyledMenuBar>
          <SearchBar></SearchBar>
          <NavLink to="/product-page">
            <User></User>
          </NavLink>
          <NavLink to="/product-page">
            <ShoppingCart></ShoppingCart>
          </NavLink>
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
