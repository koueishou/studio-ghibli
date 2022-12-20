module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "simple-import-sort"],
  rules: {
    // airbnb
    quotes: ["error", "double"],
    "comma-dangle": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    // react
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    // simple-import-sort
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
};
