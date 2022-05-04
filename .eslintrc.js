module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'deprecate',
    'import',
  ],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'deprecate/rule-name': 0,
    'deprecate/function': 1,
    'deprecate/member-expression': 1,
    'deprecate/import': 1,
    'no-console': 1,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      },
    },
  },
};