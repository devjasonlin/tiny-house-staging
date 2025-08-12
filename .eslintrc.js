module.exports = {
  env: {
    browser: true,
    jquery: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'wesbos', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'off',
    'prefer-arrow-callback': 'off',
    'arrow-body-style': 'off',
    'prettier/prettier': ['off'],
  },
  globals: {
    exponea: "readonly"
  }
};