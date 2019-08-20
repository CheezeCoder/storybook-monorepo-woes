module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  rootDir: "../../../",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleNameMapper: {
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
