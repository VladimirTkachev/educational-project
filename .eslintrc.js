module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-max-props-per-line': ['error', {
      maximum: {
        single: 1, multi: 1,
      },
    }],
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [
      'error', {
        markupOnly: true, ignoreAttribute: ['to', 'data-testid'],
      },
    ],
    'max-len': ['error', {
      ignoreComments: true, code: 100,
    }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    semi: ['error', 'always'],
    'no-param-reassign': 'off',
    // 'comma-dangle': ["error", "always"],
    // 'object-curly-newline': ['error', {
    //   ObjectExpression: 'always',
    //   ObjectPattern: {
    //     multiline: true,
    //   },
    //   ImportDeclaration: 'never',
    //   ExportDeclaration: {
    //     multiline: true, maxProperties: 2,
    //   },
    // }],
    // 'object-curly-newline': ["error", { "ImportDeclaration": "always", "ExportDeclaration": "never" }]
  },
  globals: {
    React: true,
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
    DeepPartial: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
