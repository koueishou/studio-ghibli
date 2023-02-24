module.exports = {
  clearMocks: false,
  collectCoverage: true,
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
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "<rootDir>/src/__mocks__/styleMock.js",
  },
  transformIgnorePatterns: ["!node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setUpTests.js"],
};
