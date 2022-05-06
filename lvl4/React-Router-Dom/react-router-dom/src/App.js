import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar, NavLink } from "./componentsGlobal/ComponentsGlobal";
import AboutUsPage from "./pages/AboutUsPage";
import AppPage from "./pages/AppPage";
import InfoPage from "./pages/InfoPage";
import ApiCallAppPage from "./pages/appPage/ApiCallAppPage";
import IncrementAppPage from "./pages/appPage/IncrementAppPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <NavLink to="/about-us-page">About Us</NavLink>
          <NavLink to="/app-page">Apps</NavLink>
          <NavLink to="/info-page">Info</NavLink>
        </NavBar>
        <Routes>
          <Route path="/about-us-page" element={<AboutUsPage />} />
          <Route path="/app-page" element={<AppPage />} />
          <Route path="/info-page" element={<InfoPage />} />
          <Route path="/ApiCallAppPage" element={<ApiCallAppPage />} />
          <Route path="/IncrementAppPage" element={<IncrementAppPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
