module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'no-mixed-operators': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'import-helpers/order-imports': [
      'warn',
      { // example configuration
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          'module',
          ['/^@services/', '/^@hooks/'],
          '/^@components/',
          '/^@styles/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
