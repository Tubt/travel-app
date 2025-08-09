import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Header component for the travel application navigation
 *
 * Features:
 * - Logo with company branding
 * - Navigation menu with active state indication
 * - Contact information with hotline number
 * - Support dropdown for customer assistance
 *
 * Critical user journeys:
 * - Users must be able to navigate between pages
 * - Users must see active page indication
 * - Users must access contact information
 * - Logo should return users to homepage
 */
const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header" data-testid="header">
      <div className="header-container">
        <div className="logo" data-testid="logo">
          <Link to="/" className="logo-link" data-testid="logo-link">
            <span className="logo-text" data-testid="logo-text">
              DULICHVIETNAM
            </span>
            <span className="logo-subtitle">
              Tổ chức tour chuyên nghiệp .com.vn
            </span>
          </Link>
        </div>

        <nav className="main-nav" data-testid="main-nav">
          <div className="nav-menu">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              data-testid="nav-link-home"
            >
              Trang chủ
            </Link>
            <Link
              to="/tour-du-lich"
              className={`nav-link ${location.pathname === "/tour-du-lich" ? "active" : ""}`}
              data-testid="nav-link-tour"
            >
              Tour Du Lịch
            </Link>
            <Link
              to="/so-tay-du-lich"
              className={`nav-link ${location.pathname === "/so-tay-du-lich" ? "active" : ""}`}
              data-testid="nav-link-handbook"
            >
              Sổ tay du lịch
            </Link>
            <Link
              to="/gioi-thieu-du-lich"
              className={`nav-link ${location.pathname === "/gioi-thieu-du-lich" ? "active" : ""}`}
              data-testid="nav-link-about"
            >
              Giới thiệu
            </Link>
          </div>
        </nav>

        <div className="header-contact" data-testid="header-contact">
          <div className="support-dropdown" data-testid="support-dropdown">
            <span>Hỗ trợ toàn quốc ▼</span>
          </div>
          <div className="hotline" data-testid="hotline">
            <span className="phone-icon">📞</span>
            <span className="phone-number" data-testid="phone-number">
              1800 8989
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
