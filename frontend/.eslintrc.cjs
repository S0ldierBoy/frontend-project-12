module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  settings: {
    'import/external-module-folders': ['node_modules', '../node_modules'],
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:functional/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'functional'],
  rules: {
    'no-console': 0,
    'no-param-reassign': 0,
    'max-len': ['error', { code: 120 }],

    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: ['.', '..'],
      },
    ],
    'import/prefer-default-export': 0,

    // React
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/button-has-type': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

    'testing-library/no-debug': 0,
  },
  overrides: [
    {
      files: ['src/**/*.{js,jsx,mjs,cjs}'],
      rules: {
        'functional/no-expression-statement': 'off',
        'functional/no-conditional-statement': 'off',
        'functional/no-try-statement': 'off',
        'functional/no-throw-statement': 'off',
        'functional/no-return-void': 'off',
        'functional/no-let': 'off',
        'functional/functional-parameters': 'off',
        'functional/immutable-data': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
