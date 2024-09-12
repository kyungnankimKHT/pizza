import React from "react";
import "../assets/css/BenefitsSection.css";

function BenefitsSection() {
  const benefits = [
    { title: "방문포장 최대 30%", description: "" },
    { title: "단체주문 안내", description: "" },
    { title: "신규회원 가입시 20%", description: "" },
    { title: "회원정보 수정시 20%", description: "" },
    { title: "생일기념 20%", description: "" },
  ];

  return (
    <div className="benefits-section">
      {benefits.map((benefit, index) => (
        <div key={index} className="benefit-item">
          <h3>{benefit.title}</h3>
          <p>{benefit.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BenefitsSection;
