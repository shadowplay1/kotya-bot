module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'semi': ['error', 'never'],
    'no-plusplus': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'no-param-reassign': 'off',
    'arrow-body-style': 'off',
    'no-unneeded-ternary': 'error',
    'consistent-return': 'off',
    'function-paren-newline': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-console': 'warn',
    'max-classes-per-file': 'off',
    'prefer-const': 'warn',
    'no-mixed-operators': 'error',
    'camelcase': 'warn',
    'max-len': ['warn', { 'code': 120 }],
    'dot-notation': 'warn',
    'no-continue': 'warn',
    'no-dupe-else-if': 'error',
    'block-spacing': ['error', 'never'],
    'no-spaced-func': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': ['error', {
      'ignoreComments': true,
    }],
    'quotes': ['error', 'single'],
    'no-return-await': ['error'],
  },
}