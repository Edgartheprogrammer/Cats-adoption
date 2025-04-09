import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import cypressPlugin from 'eslint-plugin-cypress'

export default [
  { ignores: ['dist'] },
  
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  // Cypress config
  {
    files: ['cypress/e2e/**/*.cy.js'],
    plugins: {
      cypress: cypressPlugin
    },
    languageOptions: {
      globals: {
        ...globals.mocha,
        ...cypressPlugin.environments.global.globals
      }
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
    }
  }
]