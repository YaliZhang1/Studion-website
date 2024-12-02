import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    languageOptions: { globals: globals.browser },
    rules: {
      eqeqeq: 'off', //Requires the use of strict equality operators (=== and !==) instead of loose equality (== and !=).
      curly: 'error', //Requires curly braces for control statements.
      quotes: ['error', 'double'],
      indent: ['error', 2],
      semi: ['error', 'always'],
      'no-console': 'off',
    },
  },
  pluginJs.configs.recommended,
];
