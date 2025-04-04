import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // Базовые правила JavaScript
      ...pluginReact.configs.recommended.rules, // Рекомендованные правила React
      ...configPrettier.rules, // Отключаем конфликты с Prettier
      'prettier/prettier': 'error', // Форматирование через Prettier
    },
    settings: {
      react: {
        version: 'detect', // Автоматически определяет версию React
      },
    },
  },
];
