import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const supportRegions = [
    {
      region: "Miền Bắc",
      regionId: "mien-bac", // Add ASCII-only ID for data-testid
      phone: "0909 009 009",
      areas: "Hà Nội, Hải Phòng, Quảng Ninh, Lào Cai",
    },
    {
      region: "Miền Trung",
      regionId: "mien-trung", // Add ASCII-only ID for data-testid
      phone: "0909 007 007",
      areas: "Đà Nẵng, Huế, Hội An, Nha Trang",
    },
    {
      region: "Miền Nam",
      regionId: "mien-nam", // Add ASCII-only ID for data-testid
      phone: "0909 080 808",
      areas: "TP.HCM, Cần Thơ, Phú Quốc, Đà Lạt",
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

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
          <div
            className="support-dropdown-container"
            data-testid="support-dropdown-container"
            ref={dropdownRef}
          >
            <button
              className="support-dropdown"
              data-testid="support-dropdown"
              onClick={toggleDropdown}
            >
              <span>Hỗ trợ toàn quốc ▼</span>
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu" data-testid="dropdown-menu">
                <div className="dropdown-header">
                  <h4>📞 Hotline hỗ trợ theo khu vực</h4>
                </div>
                {supportRegions.map((region, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    data-testid={`dropdown-item-${region.regionId}`}
                  >
                    <div className="region-info">
                      <div className="region-header">
                        <span className="region-name">{region.region}</span>
                        <a
                          href={`tel:${region.phone.replace(/\s/g, "")}`}
                          className="region-phone"
                          data-testid={`phone-${region.regionId}`}
                        >
                          📞 {region.phone}
                        </a>
                      </div>
                      <div className="region-areas">{region.areas}</div>
                    </div>
                  </div>
                ))}
                <div className="dropdown-footer" data-testid="dropdown-footer">
                  <small>Thời gian hỗ trợ: 8:00 - 22:00 hàng ngày</small>
                </div>
              </div>
            )}
          </div>

          <div className="hotline" data-testid="hotline">
            <span className="phone-icon">📞</span>
            <a
              href="tel:18008989"
              className="phone-number"
              data-testid="phone-number"
            >
              1800 8989
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
