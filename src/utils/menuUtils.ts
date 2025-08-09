/**
 * Utility functions for menu components - EXPORTED FOR TESTING
 */

/**
 * Determine if a menu item is active - TESTABLE
 */
export const isMenuItemActive = (
  currentPath: string,
  itemPath: string
): boolean => {
  if (!currentPath || !itemPath) return false;
  return currentPath === itemPath;
};

/**
 * Track menu item clicks for analytics - TESTABLE
 */
export const trackMenuClick = (menuItem: string, currentPath: string): void => {
  const clickData = {
    menuItem,
    currentPath,
    timestamp: new Date().toISOString(),
    userAgent:
      typeof window !== "undefined" ? window.navigator.userAgent : "server",
  };

  console.log("📊 Menu click tracked:", clickData);

  // In real app, this would send to analytics service
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof window !== "undefined" && (window as any).gtag) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag("event", "menu_click", {
      menu_item: menuItem,
      current_path: currentPath,
    });
  }
};

/**
 * Validate menu configuration - TESTABLE
 */
export const validateMenuItems = (): string[] => {
  const requiredItems = ["tour-du-lich", "khach-san", "flight", "freeeasy"];
  const errors: string[] = [];

  // In a real app, this might validate against a config
  requiredItems.forEach((item) => {
    if (!item || typeof item !== "string") {
      errors.push(`Invalid menu item: ${item}`);
    }
  });

  return errors;
};
