import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
// Components
import NavBar from "./components/navBar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/home/home";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import ProfilePage from "./pages/profile/profile";
import CategoriesPage from "./pages/categories/categories";
import QoutesPage from "./pages/qoutes/qoutes";
import AddQoutePage from "./pages/addQoute/addQoute";

// context
import { AuthProvider } from "./context/AuthContext";

// helpers
import { isTokenValid } from "./utils/helpers";

const PrivateRoute = () => {
  return isTokenValid() ? (
    <Outlet />
  ) : (
    // Redirect to the login page if the token is not valid or expired
    <Navigate to="/login" />
  );
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {}, []);

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <AuthProvider>
        <BrowserRouter basename="/">
          <NavBar isAuthenticated={isTokenValid()} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/qoutes" element={<QoutesPage />} />
            <Route path="/qoutes/favorites" element={<QoutesPage />} />

            <Route path="/qoutes/add" element={<AddQoutePage />} />

            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
          <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
