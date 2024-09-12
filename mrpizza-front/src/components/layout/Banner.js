import React from 'react';
import banner from '../../assets/images/banner.jpg';
import '../../assets/css/Banner.css';

function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="Mr. Pizza Banner" />
      <div className="banner-text">
        <h1>2024 PEPSI FESTA</h1>
        <p>미스터피자에서 펩시 마시고 2024 펩시 페스타 가자</p>
        <p className="banner-date">- 2024.08.25 -</p>
      </div>
    </div>
  );
}

export default Banner;
