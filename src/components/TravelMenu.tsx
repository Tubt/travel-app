import React from "react";
import { Link, useLocation } from "react-router-dom";

const TravelMenu: React.FC = () => {
  const location = useLocation();

  return (
    <div className="travel-menu">
      <div className="menu-nav">
        <Link
          to="/tour-du-lich"
          className={`nav-item ${location.pathname === "/tour-du-lich" ? "active" : ""}`}
        >
          <span className="nav-icon">🎒</span>
          Tour trọn gói
        </Link>
        <Link
          to="/khach-san"
          className={`nav-item ${location.pathname === "/khach-san" ? "active" : ""}`}
        >
          <span className="nav-icon">🏨</span>
          Khách sạn
        </Link>
        <div className="nav-item">
          <span className="nav-icon">✈️</span>
          Vé máy bay
        </div>
        <div className="nav-item">
          <span className="nav-icon">🆓</span>
          Free & Easy
        </div>
      </div>
    </div>
  );
};

export default TravelMenu;
