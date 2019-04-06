module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // `.jsx` extension cannot be used with React Native
    // https://github.com/airbnb/javascript/issues/982
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
};
