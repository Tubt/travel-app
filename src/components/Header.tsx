import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">DULICHMETOO</span>
            <span className="logo-subtitle">
              Tổ chức tour chuyên nghiệp .com.vn
            </span>
          </Link>
        </div>

        <nav className="main-nav">
          <div className="nav-menu">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            >
              Trang chủ
            </Link>
            <Link
              to="/tour-du-lich"
              className={`nav-link ${location.pathname === "/tour-du-lich" ? "active" : ""}`}
            >
              Tour Du Lịch
            </Link>
            <Link
              to="/so-tay-du-lich"
              className={`nav-link ${location.pathname === "/so-tay-du-lich" ? "active" : ""}`}
            >
              Sổ tay du lịch
            </Link>
            <Link
              to="/gioi-thieu"
              className={`nav-link ${location.pathname === "/gioi-thieu" ? "active" : ""}`}
            >
              Giới thiệu
            </Link>
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
