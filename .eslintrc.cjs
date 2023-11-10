const path = require('node:path');

module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:import/recommended',
    'airbnb-base',
    'eslint:recommended',
    'plugin:compat/recommended',
    'plugin:github/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  plugins: ['astro', 'prettier', 'sonarjs', 'unicorn', 'github'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    extends: 'airbnb-base',
    requireConfigFile: false,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['/scss/*', '/assets/*'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/', path.resolve(__dirname, './src')],
          ['~', path.resolve(__dirname, './')],
        ],
        extensions: ['.astro', '.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'i18n-text/no-en': 0,
    'compat/compat': ['warn'],
    'eslint-comments/no-use': ['warn', { allow: ['eslint-disable-next-line'] }],
    'filenames/match-regex': 0,
    'github/array-foreach': 0,
    'import/no-anonymous-default-export': 0,
    'import/no-mutable-exports': ['warn'],
    'import/no-namespace': 0,
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-lodash-typecheck': 'off',
    'lodash/prefer-noop': 'off',
    'max-classes-per-file': ['warn', 1],
    'max-lines': ['warn', 700],
    'max-nested-callbacks': ['warn', 4],
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-plusplus': ['off'],
    'no-unused-vars': 'warn',
    'prettier/prettier': 'warn',
    'unicorn/filename-case': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/prefer-dom-node-remove': 'off',
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        replacements: {
          params: false,
          props: false,
          args: false,
          src: false,
          req: false,
          res: false,
          prop: false,
        },
      },
    ],
  },
};
