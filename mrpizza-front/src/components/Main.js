import React from "react";
import Banner from "./layout/Banner";
import PromotionSection from "./PromotionSection";
import BenefitsSection from "./BenefitsSection";
import NoticeSection from "./NoticeSection";
import Footer from "./layout/Footer";
import "../assets/css/Main.css";
function Main() {
  return (
    <div className="main-container">
      <Banner />
      <PromotionSection />
      <BenefitsSection />
      <NoticeSection />
    </div>
  );
}

export default Main;
