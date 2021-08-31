module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'no-console': 1,
    'no-unused-vars': 1,
    'no-proto': 0,
    'max-params': 0,
  },
};
