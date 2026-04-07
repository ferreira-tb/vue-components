import { defineConfig } from '@tb-dev/eslint-config';

export default defineConfig({
  project: ['./tsconfig.json'],
  ignores: ['**/base/*'],
  features: {
    perfectionist: true,
    unicorn: true,
    vue: true,
  },
  overrides: {
    typescript: {
      'no-explicit-any': 'off',
      'no-non-null-assertion': 'off',
    },
  },
});
