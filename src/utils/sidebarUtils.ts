/**
 * Utility functions for sidebar components - EXPORTED FOR TESTING
 */

export interface SidebarProps {
  position: "left" | "right";
  title: string;
  subtitle: string;
}

/**
 * Generate sidebar CSS class - EXPORTED FOR TESTING
 */
export const getSidebarClass = (position: "left" | "right"): string => {
  if (!position || (position !== "left" && position !== "right")) {
    console.warn("⚠️ Invalid sidebar position, defaulting to left");
    return "sidebar-left";
  }
  return position === "left" ? "sidebar-left" : "sidebar-right";
};

/**
 * Validate sidebar props - EXPORTED FOR TESTING
 */
export const validateSidebarProps = (props: SidebarProps): string[] => {
  const errors: string[] = [];

  if (
    !props.title ||
    typeof props.title !== "string" ||
    props.title.trim().length === 0
  ) {
    errors.push("Title is required and must be a non-empty string");
  }

  if (!props.subtitle || typeof props.subtitle !== "string") {
    errors.push("Subtitle is required and must be a string");
  }

  if (!props.position || !["left", "right"].includes(props.position)) {
    errors.push('Position must be either "left" or "right"');
  }

  return errors;
};
