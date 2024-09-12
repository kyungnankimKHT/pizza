import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/FixedMenu.css';
import loginIcon from '../../assets/images/icon/login-icon.png';
import logoutIcon from '../../assets/images/icon/logout-icon.png'; // Add a logout icon
import signupIcon from '../../assets/images/icon/signup-icon.png';
import cartIcon from '../../assets/images/icon/cart-icon.png';
import reorderIcon from '../../assets/images/icon/reorder-icon.png';

function FixedMenu({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      onLogout(); // Call the onLogout function to handle logout
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="fixed-menu">
      <div className="fixed-menu-item" onClick={handleLoginLogout}>
        <img src={isLoggedIn ? logoutIcon : loginIcon} alt={isLoggedIn ? '로그아웃' : '로그인'} />
        <span>{isLoggedIn ? '로그아웃' : '로그인'}</span>
      </div>
      <div className="fixed-menu-item" onClick={() => navigate('/signup')}>
        <img src={signupIcon} alt="회원가입" />
        <span>회원가입</span>
      </div>
      <div className="fixed-menu-item" onClick={() => navigate('/')}>
        <img src={cartIcon} alt="장바구니" />
        <span>장바구니</span>
        <div className="notification-badge">0</div>
      </div>
      <div className="fixed-menu-item" onClick={() => navigate('/')}>
        <img src={reorderIcon} alt="재주문" />
        <span>재주문</span>
      </div>
    </div>
  );
}

export default FixedMenu;
