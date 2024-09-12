import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../assets/css/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleMyPageClick = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/mypage');
    } else {
      alert("로그인 먼저 진행해주세요.")
     
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="Mr. Pizza Logo" /></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/store">브랜드 스토리</Link></li>
        <li><Link to="/menu">메뉴</Link></li>
        <li><Link to="/contact">매장찾기</Link></li>
        <li><Link to="/order">단체주문</Link></li>
        <li><button onClick={handleMyPageClick}>마이페이지</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
