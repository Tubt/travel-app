// TUSK Configuration for Travel App
// This file provides hints and constraints for TUSK test generation

module.exports = {
  // Target specifications
  target: {
    platform: "desktop",
    viewport: {
      width: 1280,
      height: 720,
    },
    skipMobile: true,
    skipTablet: true,
    skipResponsive: true,
  },

  // Test generation hints
  testGeneration: {
    focusAreas: [
      "interactive-components",
      "form-validation",
      "dropdown-interactions",
      "click-handlers",
      "state-management",
    ],
    skipAreas: [
      "mobile-responsiveness",
      "authentication-flows",
      "api-integration",
      "performance-testing",
    ],
  },

  // Component-specific hints
  components: {
    Header: {
      testableFeatures: [
        "regional-dropdown-toggle",
        "click-outside-to-close",
        "phone-number-links",
        "navigation-links",
      ],
      skipFeatures: ["mobile-hamburger-menu", "responsive-layout-changes"],
      testData: {
        regions: [
          { name: "Miền Bắc", id: "mien-bac", phone: "0909009009" },
          { name: "Miền Trung", id: "mien-trung", phone: "0909007007" },
          { name: "Miền Nam", id: "mien-nam", phone: "0909080808" },
        ],
      },
    },
    TourDuLichPage: {
      testableFeatures: [
        "region-filter-dropdown",
        "price-range-selection",
        "filter-reset-functionality",
        "conditional-tour-display",
      ],
      testData: {
        regions: ["all", "north", "central", "south"],
        priceRanges: ["all", "under-5m", "5m-10m", "over-10m"],
      },
    },
  },

  // Error handling
  errorHandling: {
    ignoreErrors: [
      "No session or session expired",
      "Network Error",
      "ChunkLoadError",
      "ResizeObserver loop limit exceeded",
    ],
  },

  // Data attribute conventions
  testSelectors: {
    format: "data-testid",
    namingConvention: "kebab-case",
    allowedCharacters: "a-z0-9-",
    disallowedCharacters:
      "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ",
  },

  // Performance constraints
  performance: {
    maxTestDuration: "30s",
    maxRetries: 2,
    timeout: 10000,
  },
};
