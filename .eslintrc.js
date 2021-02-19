module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    quotes: "off",
    "@typescript-eslint/quotes": ["error"],
    "no-unused-vars": "off",
    "spaced-comment": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/jsx-one-expression-per-line": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "comma-dangle": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "arrow-body-style": "off",
    "react/no-unescaped-entities": "off",
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    "no-shadow": "off",
    "operator-linebreak": "off",
    "global-require": "off",
    "no-use-before-define": "off",
    "import/prefer-default-export": "off",
    "no-param-reassign": "off",
    "no-invalid-css": "off",
    "react/jsx-curly-newline": "off",
    indent: "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
};
