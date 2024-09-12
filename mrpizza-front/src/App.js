import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Main from './components/Main';
import SignUp from './components/page/SignUp';
import Login from './components/page/Login';
import Navbar from './components/layout/Navbar';
import AddressSearch from './components/AddressSearch';
import MenuPage from './components/page/MenuPage';
import ProductDetail from './components/page/ProductDetail';
import FixedMenu from './components/layout/FixedMenu';
import Footer from './components/layout/Footer';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const hideComponentsOnRoutes = ['/address-search'];
  const shouldHideComponents = hideComponentsOnRoutes.includes(location.pathname);

  useEffect(() => {
    // Check login status on component mount
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="App">
      {!shouldHideComponents && <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:id" element={<ProductDetail />} />
        <Route path="/address-search" element={<AddressSearch />} />
      </Routes>
      {!shouldHideComponents && <Footer />}
      {!shouldHideComponents && <FixedMenu isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
    </div>
  );
}

export default App;
