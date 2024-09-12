import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/Login.css';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your login authentication logic here, for example an API call

    localStorage.setItem('isLoggedIn', 'true');
    onLogin(); // Call the onLogin function to update the state in App.js

    navigate('/');
  };

  const handleComingSoon = () => {
    alert('준비중입니다. 😊');
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>LOGIN</h2>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="options">
          <label>
            <input type="checkbox" name="remember" />
            아이디저장
          </label>
          <a href="#">아이디/비밀번호 찾기</a>
        </div>
        <button type="submit" className="login-btn">
          로그인
        </button>
      </form>
      <div className="login-footer">
        <button className="register-btn" onClick={() => navigate('/signup')}>
          회원가입하기
        </button>
        <button className="naver-btn" onClick={handleComingSoon}>
          네이버 아이디로 로그인
        </button>
        <button className="payco-btn" onClick={handleComingSoon}>
          PAYCO 로그인
        </button>
      </div>
    </div>
  );
}

export default Login;
