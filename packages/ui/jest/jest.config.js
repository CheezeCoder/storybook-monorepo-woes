const baseConfig = require("../../../jest.base");

module.exports = {
  ...baseConfig,
  displayName: "ui-library",
  roots: ["./packages/ui"],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/packages/ui/tsconfig.json"
    }
  },
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper
  },
  modulePathIgnorePatterns: ["<rootDir>packages/ui/lib/"],
  setupFilesAfterEnv: ["@testing-library/react/cleanup-after-each"]
};
