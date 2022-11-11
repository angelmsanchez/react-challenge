module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
    'deprecate',
    'import',
    'react',
    'prettier',
  ],
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'react-app',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    'class-methods-use-this': 'off',
    'eqeqeq': ['error', 'always'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        'groups': ['external', 'internal'],
        'pathGroups': [{
          'pattern': 'react',
          'group': 'external',
          'position': 'before'
        }],
        'pathGroupsExcludedImportTypes': ['react'],
        'newlines-between': 'always',
      },
    ],
    'max-len': ['error', 120, 2, { ignoreUrls: true, ignoreRegExpLiterals: true, ignoreStrings: true, ignoreComments: true }],
    'no-console': 1,
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'no-restricted-imports': ['error', 'import1', 'import2'],
    'no-shadow': 0,
    'operator-linebreak': ['error', 'before', { 'overrides': { '&&': 'after' } }],
    'operator-linebreak': 0,
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-key': 2,
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      },
    },
  },
};