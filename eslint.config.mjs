// eslint.config.js
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      js,
      stylistic,
    },
    rules: {
      ...js.configs.recommended.rules,

      // Stylistic rules
      ...stylistic.configs.customize({
        indent: 2,
        semi: true,
        quotes: 'single',
        commaDangle: 'always-multiline',
        arrowParens: 'always',
        spaceBeforeFunctionParen: 'never',
      }).rules,
    },
  },
]);
