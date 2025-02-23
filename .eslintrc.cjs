module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  plugins: ["react", "react-hooks", "@typescript-eslint", "import", "jsx-a11y"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    camelcase: "off",
    "no-new": "off",
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "off",
    indent: ["error", 2],
    "@typescript-eslint/no-explicit-any": "off",
    "eslint-comments/disable-enable-pair": "off",
    "eslint-comments/no-unlimited-disable": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "prefer-const": "off",
  },
}
