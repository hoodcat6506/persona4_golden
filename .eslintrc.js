module.exports = {
  env: {
    browser: true,
    es2021 : true,
  },
  extends  : 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType : 'module',
  },
  rules: {
    'no-unused-vars' : 'warn',
    'linebreak-style': 'off',
    'key-spacing'    : ['error', { align: 'colon' }],
    'max-len'        : ['error', {
      code         : 80,
      ignorePattern: '^\\s*\\[',
    }],
    'no-use-before-define': 'off',
  },
};
