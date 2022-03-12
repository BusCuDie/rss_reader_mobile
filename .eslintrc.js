module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-shadow': 0,
    'max-lines': [
      'error',
      {max: 800, skipComments: true, skipBlankLines: true},
    ],
  },
};
