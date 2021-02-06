module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
  rules: {
    semi: 0,
    'no-await-in-loop': 'error',
    'block-spacing': [2, 'always'],
    // 'no-extra-parens': 'error',
    'no-prototype-builtins': 'error',
    'no-template-curly-in-string': 'error',
    'valid-jsdoc': 'error',
    'array-callback-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],
    'block-scoped-var': 'error',
    complexity: [
      'error',
      {
        max: 40,
      },
    ],
    'consistent-return': 'error',
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-debugger': 'warn',
    'no-div-regex': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-restricted-properties': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'require-await': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    'vue/script-indent': ['error', 2, { baseIndent: 1, switchCase: 1 }],
    'vue/no-side-effects-in-computed-properties': 0,
    yoda: 'error',
    'no-catch-shadow': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-shadow': 'error',
    'no-undefined': 'error',
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'arrow-parens': ['error', 'always'],
    strict: 'off',
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
      env: {
        jest: true,
      },
    },
  ],
}