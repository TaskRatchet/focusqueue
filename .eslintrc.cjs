module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [
    {
      files: [
        "vitest.setup.ts",
        "**/*.spec.ts",
        "**/*.spec.tsx",
        "**/__mocks__/**/*",
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};
