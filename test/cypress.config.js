const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Base URL for the application - can be overridden by environment variable
    baseUrl: process.env.CYPRESS_baseUrl || "http://localhost:5173",

    // Browser settings
    viewportWidth: 1280,
    viewportHeight: 720,

    // Test files pattern - relative to test folder
    specPattern: "e2e/**/*.cy.{js,jsx,ts,tsx}",

    // Folders relative to test directory
    fixturesFolder: "fixtures",
    supportFile: "support/e2e.ts",

    // Screenshots and videos
    screenshotsFolder: "results/screenshots",
    videosFolder: "results/videos",
    video: true,
    screenshotOnRunFailure: true,

    // Timeouts
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,

    // Retry configuration
    retries: {
      runMode: 1,
      openMode: 0,
    },

    // Clean output - disable color codes and reduce verbosity
    reporter: "spec",
    reporterOptions: {
      displayErrorDetails: true,
      displayStacktrace: false,
    },

    // Environment variables
    env: {
      environment: "local",
      apiUrl: "http://localhost:3001/api",
      emailDomain: "@metoo.com",
    },

    setupNodeEvents(on, config) {
      // Setup cypress grep plugin for tags
      require("@cypress/grep/src/plugin")(config);

      // Task definitions
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },

        generateTestData() {
          return {
            timestamp: Date.now(),
            randomEmail: `test.user.${Date.now()}@metoo.com`,
            randomName: `Test User ${Math.random().toString(36).substring(7)}`,
          };
        },

        generateSearchData() {
          const destinations = [
            "Hà Nội",
            "Sapa",
            "Hạ Long",
            "Phú Quốc",
            "Đà Nẵng",
            "Hội An",
          ];
          return {
            destination:
              destinations[Math.floor(Math.random() * destinations.length)],
            checkinDate: new Date(
              Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000
            )
              .toISOString()
              .split("T")[0],
            duration: Math.floor(Math.random() * 7) + 1,
            guests: Math.floor(Math.random() * 8) + 1,
          };
        },
      });

      return config;
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "../src/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "support/component.ts",
  },
});
