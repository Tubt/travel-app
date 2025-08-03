import React from "react";

const TravelMenu: React.FC = () => {
  return (
    <div className="travel-menu">
      <div className="menu-nav">
        <div className="nav-item active">
          <span className="nav-icon">🎒</span>
          Tour trọn gói
        </div>
        <div className="nav-item">
          <span className="nav-icon">🏨</span>
          Khách sạn
        </div>
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
