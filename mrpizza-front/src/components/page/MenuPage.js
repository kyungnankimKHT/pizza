// src/pages/MenuPage.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../assets/css/MenuPage.css";

// 이미지 맵과 대체 이미지 임포트
import { imageMap } from "../../utils/imageMap";

function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [sortOption, setSortOption] = useState("신제품순");

  // 메뉴 아이템을 백엔드에서 가져오기
  useEffect(() => {
    axios
      .get("http://localhost:9090/api/products")
      .then((response) => {
        setMenuItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the menu items!", error);
      });
  }, []);

  // 정렬 옵션에 따른 메뉴 아이템 정렬
  const sortedMenuItems = [...menuItems].sort((a, b) => {
    if (sortOption === "신제품순") {
      return b.isNew - a.isNew;
    } else if (sortOption === "인기제품순") {
      return b.popularity - a.popularity;
    } else if (sortOption === "가격 낮은순") {
      return a.priceL - b.priceL;
    } else if (sortOption === "가격 높은순") {
      return b.priceL - a.priceL;
    }
    return 0;
  });

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h2>프리미엄 피자</h2>
        <p>프리미엄 토핑을 더 풍성하게 특별하게 즐기는 피자</p>
        <div className="menu-sort">
          <label htmlFor="sort-select">메뉴정렬:</label>
          <select
            id="sort-select"
            onChange={(e) => setSortOption(e.target.value)}
            value={sortOption}
          >
            <option value="신제품순">신제품순</option>
            <option value="인기제품순">인기제품순</option>
            <option value="가격 낮은순">가격 낮은순</option>
            <option value="가격 높은순">가격 높은순</option>
          </select>
        </div>
      </div>

      <div className="menu-items">
        {sortedMenuItems.map((item) => (
          <Link to={`/menu/${item.id}`} key={item.id} className="menu-item">
            {item.isNew && <span className="new-badge">NEW</span>}
            <img
              src={imageMap[item.image]}
              alt={item.name}
              onError={(e) => {
                e.target.onerror = null;
              }}
            />
            <h3>{item.name}</h3>
            <p>
              M {item.priceM.toLocaleString()}원 / L{" "}
              {item.priceL.toLocaleString()}원
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
