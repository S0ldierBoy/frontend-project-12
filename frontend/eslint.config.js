import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import functional from 'eslint-plugin-functional';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ignores: ['dist/**', 'node_modules/**'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      functional,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: js.configs.recommended.languageOptions.globals,
    },
    settings: {
      react: { version: 'detect' },
      'import/external-module-folders': ['node_modules', '../node_modules'],
    },
    rules: {
      'no-console': 'off',
      'max-len': ['error', { code: 120 }],

      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['state', 'draft'],
        },
      ],
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'import/no-cycle': 'off',

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/button-has-type': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function' },
      ],
    },
  },
];
