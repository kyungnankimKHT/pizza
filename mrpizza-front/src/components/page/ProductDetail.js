import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../assets/css/ProductDetail.css";

// 이미지 맵과 대체 이미지 임포트
import { imageMap } from "../../utils/imageMap";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // 제품 상세 정보를 백엔드에서 가져오기
  useEffect(() => {
    axios
      .get(`http://localhost:9090/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the product!", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="product-detail-loading">로딩 중...</div>;
  }

  if (!product) {
    return (
      <div className="product-detail-error">해당 상품을 찾을 수 없습니다.</div>
    );
  }

  return (
    <div className="product-detail">
      <img
        src={imageMap[product.image]}
        alt={product.name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = imageMap["placeholder.png"]; // 대체 이미지 경로 설정
        }}
      />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-description">{product.description}</p>

        <div className="product-pricing">
          <h3>가격</h3>
          <p>
            M: {product.priceM.toLocaleString()}원 / L:{" "}
            {product.priceL.toLocaleString()}원
          </p>
        </div>

        {product.ingredients && (
          <div className="product-ingredients">
            <h3>재료</h3>
            <ul>
              {product.ingredients.split(",").map((ingredient, index) => (
                <li key={index}>{ingredient.trim()}</li>
              ))}
            </ul>
          </div>
        )}

        {product.details && (
          <div className="product-details">
            <h3>상세 정보</h3>
            <p>{product.details}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
