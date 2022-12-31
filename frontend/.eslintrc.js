// eslint-disable-next-line unicorn/prefer-module
const path = require('node:path');

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  env: {
    browser: true,
    'jest/globals': true,
  },
  root: true,
  settings: {
    'import/resolver': {
      alias: {
        // eslint-disable-next-line unicorn/prefer-module
        map: [['@', path.resolve(__dirname, './')]],
        extensions: ['.js', '.vue'],
      },
    },
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:compat/recommended',
    'plugin:lodash/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:vue-scoped-css/recommended',
    'prettier',
    '@nuxt/eslint-config',
  ],
  parserOptions: {
    parse: '@babel/eslint-parser',
    extends: 'airbnb-base',
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['sonarjs'],
  rules: {
    'compat/compat': ['warn'],
    'import/no-mutable-exports': ['warn'],
    'max-classes-per-file': ['warn', 1],
    'max-lines': ['warn', 300],
    'max-nested-callbacks': ['warn', 3],
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'no-debugger': 'error',
    'no-plusplus': [
      'warn',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-shadow': ['error', { builtinGlobals: false }],
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-dom-node-remove': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-lodash-typecheck': 'off',
    'lodash/prefer-noop': 'off',
    'consistent-return': ['off'],
    'vue/multi-word-component-names': ['off'],
    'vue/singleline-html-element-content-newline': ['off'],
    'vue/html-indent': ['off'],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
};
