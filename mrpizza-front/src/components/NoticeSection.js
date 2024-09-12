import React from 'react';
import '../assets/css/NoticeSection.css';

function NoticeSection() {
  return (
    <div className="notice-section">
      <div className="notice-item">
        <h4>공지사항</h4>
        <p>이벤트 소식과 공지를 확인하세요!</p>
      </div>
      <div className="notice-item">
        <h4>설문조사</h4>
        <p>설문조사 참여하고 혜택 받기!</p>
      </div>
    </div>
  );
}

export default NoticeSection;
