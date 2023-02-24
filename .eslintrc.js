module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jest", "simple-import-sort"],
  rules: {
    // airbnb
    quotes: ["error", "double"],
    "comma-dangle": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-console": "off",
    "global-require": "off",
    // react
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    // jest
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    // simple-import-sort
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
};
