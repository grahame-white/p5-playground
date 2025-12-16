// Jest configuration for p5.js playground
// Documentation: https://jestjs.io/docs/configuration

module.exports = {
  // Use jsdom environment to simulate browser environment for p5.js
  testEnvironment: "jsdom",

  // Test file patterns
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],

  // Coverage configuration
  collectCoverageFrom: ["*.js", "!jest.config.js", "!coverage/**"],

  // Coverage thresholds (can be adjusted as needed)
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },

  // Verbose output for better test debugging
  verbose: true,
};
