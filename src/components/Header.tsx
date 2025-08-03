import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">DULICHMETOO</span>
          <span className="logo-subtitle">Tổ chức tour chuyên nghiệp .com.vn</span>
        </div>
        
        <nav className="main-nav">
          <div className="nav-menu">
            <a href="#" className="nav-link active">Trang chủ</a>
            <a href="#" className="nav-link">Tour Du Lịch</a>
            <a href="#" className="nav-link">Sổ tay du lịch</a>
            <a href="#" className="nav-link">Giới thiệu</a>
          </div>
        </nav>
        
        <div className="header-contact">
          <div className="support-dropdown">
            <span>Hỗ trợ toàn quốc ▼</span>
          </div>
          <div className="hotline">
            <span className="phone-icon">📞</span>
            <span className="phone-number">0909009009</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 