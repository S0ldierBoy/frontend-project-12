/* eslint-env node */
const globals = require('globals');

module.exports = {
  root: true,
  ignorePatterns: ['node_modules/**', 'dist/**'],
  env: {
    browser: true,
    es6: true,
    node: true, // добавляем для поддержки require/module
  },
  parserOptions: {
    ecmaVersion: 2020, // или "latest", если нужно
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  globals: { ...globals.browser },
  plugins: ['react', 'prettier'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  rules: {
    // Отключаем некоторые правила, которые вызывают слишком много ошибок
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'off', // чтобы не требовалось переносить зависимости в runtime
    'import/order': 'off',
    'react/function-component-definition': 'off',
    'no-param-reassign': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-newline': ['error', { multiline: true, minProperties: 3 }],
    // можно добавить другие правила или их отключить по необходимости
  },
  settings: {
    react: {
      version: 'detect',
      runtime: 'automatic',
    },
  },
  // Отключаем некоторые правила для тестовых файлов, если они сильно мешают
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      rules: { 'import/no-extraneous-dependencies': 'off' },
    },
  ],
};
