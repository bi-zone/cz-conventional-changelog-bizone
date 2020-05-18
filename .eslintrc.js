module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
        extensions: ['.js']
      }
    }
  },

  globals: {
    HOST_API: false,
    document: false,
    navigator: false,
    window: false,
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
    getDebugSettings: true,
    isDebugging: true
  },
  plugins: [
    'prettier',
    'import',
    'security',
    'xss',
    'no-use-extend-native',
    'functional'
  ],
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'prettier/prettier': ['warn'],
    // IMPORT
    'import/no-default-export': 1,
    'import/no-unresolved': [2, { caseSensitive: true }],
    'import/named': 2,
    'import/no-self-import': 2,
    'import/no-cycle': 'warn',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    // REST
    'no-unused-vars': 0,
    'functional/no-try-statement': 0,
    'functional/no-conditional-statement': 0,
    'functional/immutable-data': 'error'
  }
};
