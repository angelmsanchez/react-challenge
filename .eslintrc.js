module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  extends: [
    'react-app',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript/base',
  ],
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      },
    },
  },
};