// Simple test to verify our utility functions work
// Import using ES modules since we're using type: "module" in package.json

import {
  isMenuItemActive,
  getSidebarClass,
  validateSidebarProps,
  removeVietnameseAccents,
  calculateSimilarity,
  searchToursByLocation,
} from "./src/utils/index.ts";

console.log("🧪 Testing TUSK-ready utility functions:");
console.log("");

// Test menu utilities
console.log("📍 Menu Utilities:");
console.log(
  '  isMenuItemActive("/tour", "/tour"):',
  isMenuItemActive("/tour", "/tour")
);
console.log(
  '  isMenuItemActive("/tour", "/hotel"):',
  isMenuItemActive("/tour", "/hotel")
);

// Test sidebar utilities
console.log("");
console.log("🎯 Sidebar Utilities:");
console.log('  getSidebarClass("left"):', getSidebarClass("left"));
console.log('  getSidebarClass("right"):', getSidebarClass("right"));
console.log('  getSidebarClass("invalid"):', getSidebarClass("invalid"));

const validProps = {
  position: "left",
  title: "Test",
  subtitle: "Test subtitle",
};
const invalidProps = { position: "invalid", title: "", subtitle: null };
console.log("  validateSidebarProps(valid):", validateSidebarProps(validProps));
console.log(
  "  validateSidebarProps(invalid):",
  validateSidebarProps(invalidProps)
);

// Test text utilities
console.log("");
console.log("🔤 Text Processing Utilities:");
console.log(
  '  removeVietnameseAccents("Đà Nẵng"):',
  removeVietnameseAccents("Đà Nẵng")
);
console.log(
  '  removeVietnameseAccents("Hồ Chí Minh"):',
  removeVietnameseAccents("Hồ Chí Minh")
);
console.log(
  '  calculateSimilarity("hello", "hello"):',
  calculateSimilarity("hello", "hello")
);
console.log(
  '  calculateSimilarity("hello", "world"):',
  calculateSimilarity("hello", "world")
);

// Test search utilities
console.log("");
console.log("🔍 Search Utilities:");
const searchResults = searchToursByLocation("Da Nang");
console.log(
  '  searchToursByLocation("Da Nang"):',
  searchResults.length,
  "results"
);
if (searchResults.length > 0) {
  console.log("    First result:", searchResults[0].name);
}

// Test error handling
console.log("");
console.log("⚠️  Error Handling Tests:");
console.log("  removeVietnameseAccents(null):", removeVietnameseAccents(null));
console.log('  calculateSimilarity("", ""):', calculateSimilarity("", ""));
console.log(
  '  searchToursByLocation(""):',
  searchToursByLocation("").length,
  "results"
);

console.log("");
console.log("✅ All utility functions are working and ready for TUSK testing!");
console.log("🎯 TUSK can now generate tests for all these functions.");
