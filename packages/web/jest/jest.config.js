const baseConfig = require("../../../jest.base");

module.exports = {
  ...baseConfig,
  displayName: "gemini",
  roots: ["./packages/web"],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/packages/web/tsconfig.json"
    }
  },
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper
  },

  modulePathIgnorePatterns: ["<rootDir>packages/web/dist/"],

  setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each"]
};
