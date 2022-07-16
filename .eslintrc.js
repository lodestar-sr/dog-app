module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['jsx-a11y'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/state-in-constructor': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
};
