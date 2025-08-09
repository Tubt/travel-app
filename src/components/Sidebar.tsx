import React from "react";
import {
  getSidebarClass,
  validateSidebarProps,
  type SidebarProps,
} from "../utils/sidebarUtils";

/**
 * Sidebar component displays promotional content on left/right sides of main content
 *
 * Features:
 * - Configurable position (left or right)
 * - Customizable title and subtitle
 * - Responsive design
 * - Promotional content display
 * - Input validation and error handling
 */
const Sidebar: React.FC<SidebarProps> = ({ position, title, subtitle }) => {
  // Validate props and log warnings
  const validationErrors = validateSidebarProps({ position, title, subtitle });
  if (validationErrors.length > 0) {
    console.warn("⚠️ Sidebar validation errors:", validationErrors);
  }

  const sidebarClass = getSidebarClass(position);

  return (
    <div className={sidebarClass} data-testid={`sidebar-${position}`}>
      <div
        className="sidebar-content"
        data-testid={`sidebar-content-${position}`}
      >
        <h3 data-testid={`sidebar-title-${position}`}>{title}</h3>
        <p data-testid={`sidebar-subtitle-${position}`}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Sidebar;
