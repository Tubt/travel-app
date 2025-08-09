import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { isMenuItemActive, trackMenuClick } from "../utils/menuUtils";

/**
 * TravelMenu component for quick navigation between travel services
 *
 * Features:
 * - Quick access to main travel categories
 * - Visual icons for better user experience
 * - Active state indication for current page
 * - Responsive design for different screen sizes
 * - Click tracking and analytics
 * - Menu item validation
 */
const TravelMenu: React.FC = () => {
  const location = useLocation();
  const [clickCount, setClickCount] = useState<Record<string, number>>({});

  const handleMenuClick = (menuItem: string) => {
    // Track analytics
    trackMenuClick(menuItem, location.pathname);

    // Update click counter for this session
    setClickCount((prev) => ({
      ...prev,
      [menuItem]: (prev[menuItem] || 0) + 1,
    }));
  };

  return (
    <div className="travel-menu" data-testid="travel-menu">
      <div className="menu-nav" data-testid="travel-menu-nav">
        <Link
          to="/tour-du-lich"
          className={`nav-item ${isMenuItemActive(location.pathname, "/tour-du-lich") ? "active" : ""}`}
          data-testid="travel-menu-tour-link"
          onClick={() => handleMenuClick("tour-du-lich")}
        >
          <span className="nav-icon" data-testid="travel-menu-tour-icon">
            🎒
          </span>
          Tour trọn gói
          {clickCount["tour-du-lich"] && (
            <span className="click-count" data-testid="tour-click-count">
              ({clickCount["tour-du-lich"]})
            </span>
          )}
        </Link>
        <Link
          to="/khach-san"
          className={`nav-item ${isMenuItemActive(location.pathname, "/khach-san") ? "active" : ""}`}
          data-testid="travel-menu-hotel-link"
          onClick={() => handleMenuClick("khach-san")}
        >
          <span className="nav-icon" data-testid="travel-menu-hotel-icon">
            🏨
          </span>
          Khách sạn
          {clickCount["khach-san"] && (
            <span className="click-count" data-testid="hotel-click-count">
              ({clickCount["khach-san"]})
            </span>
          )}
        </Link>
        <div
          className="nav-item"
          data-testid="travel-menu-flight-item"
          onClick={() => handleMenuClick("flight")}
        >
          <span className="nav-icon" data-testid="travel-menu-flight-icon">
            ✈️
          </span>
          Vé máy bay
          {clickCount["flight"] && (
            <span className="click-count" data-testid="flight-click-count">
              ({clickCount["flight"]})
            </span>
          )}
        </div>
        <div
          className="nav-item"
          data-testid="travel-menu-freeeasy-item"
          onClick={() => handleMenuClick("freeeasy")}
        >
          <span className="nav-icon" data-testid="travel-menu-freeeasy-icon">
            🆓
          </span>
          Free & Easy
          {clickCount["freeeasy"] && (
            <span className="click-count" data-testid="freeeasy-click-count">
              ({clickCount["freeeasy"]})
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelMenu;
