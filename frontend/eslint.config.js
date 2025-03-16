import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [{
  files: ['**/*.{js,mjs,cjs,jsx}'], languageOptions: {
    globals: {
      ...globals.browser
    }
  }
},

  pluginJs.configs.recommended,


  pluginReact.configs.flat.recommended,


  {
    plugins: {
      prettier: pluginPrettier
    }, rules: {

      ...pluginPrettier.configs.recommended.rules
    }
  },


  {
    rules: {
      ...configPrettier.rules
    }
  }];
