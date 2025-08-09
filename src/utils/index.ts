/**
 * Utility functions index - ALL EXPORTED FOR TESTING
 *
 * This file exports all utility functions that TUSK can test
 */

// Menu utilities
export {
  isMenuItemActive,
  trackMenuClick,
  validateMenuItems,
} from "./menuUtils";

// Sidebar utilities
export {
  getSidebarClass,
  validateSidebarProps,
  type SidebarProps,
} from "./sidebarUtils";

// Tour data utilities (already exported from constants/tourData.ts)
export {
  removeVietnameseAccents,
  calculateSimilarity,
  locationAliases,
  reverseAliases,
  searchToursByLocation,
  filterToursByType,
  filterToursByDeparture,
  filterToursByDestination,
  toursByLocation,
} from "../constants/tourData";
