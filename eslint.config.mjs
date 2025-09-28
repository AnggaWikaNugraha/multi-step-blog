// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals", "next/typescript"), {
  ignores: [
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",      // ✅ disable any
    "@typescript-eslint/no-unused-vars": "off",      // (opsional) disable unused vars
    "react-hooks/exhaustive-deps": "off",            // (opsional) disable deps warning
  },
}, ...storybook.configs["flat/recommended"]];

export default eslintConfig;
