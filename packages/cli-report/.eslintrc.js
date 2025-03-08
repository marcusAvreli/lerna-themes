module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};