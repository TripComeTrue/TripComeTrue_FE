module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'react/function-component-definition': 'off',
    'arrow-body-style': 'off',
    'import/no-absolute-path': 'off',

    'react-hooks/exhaustive-deps': 'off',
    'no-nested-ternary': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/prop-types': 'off', // 임시
    'react/jsx-no-useless-fragment': 'off',
    'no-restricted-syntax': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        some: ['nesting', 'id'],
      },
    ],
  },
};
