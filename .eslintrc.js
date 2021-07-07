module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'no-console': 'error',
    'no-unused-vars': 'warn',
  },
};
