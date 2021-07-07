module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
};
