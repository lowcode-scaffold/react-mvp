module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'object-curly-newline': 'off',
    'react/destructuring-assignment': 'off',
    'react/function-component-definition': 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
  },
};
