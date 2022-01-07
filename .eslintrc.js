module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    // "plugin:vue/recommended", // use this if you are using Vue.js 2.x
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [2, { semi: false, singleQuote: true }],
    'no-undef': 1,
    quotes: [2, 'single'],
    semi: [2, 'never'],
  },
}
