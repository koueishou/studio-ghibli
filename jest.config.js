module.exports = {
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "src/components/**/*.{js,jsx}",
    "src/routes/**/*.{js,jsx}",
    "src/utils/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["!node_modules/"],
};
