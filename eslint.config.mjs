import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Disable the unescaped entities rule
      "react/no-unescaped-entities": "off",

      // Other common rules you might want to adjust
      "@next/next/no-img-element": "off",
      "react/no-unknown-property": ["error", { ignore: ["css"] }],

      // TypeScript specific rules (if using TS)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",

      // React specific rules
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/prop-types": "off", // Not needed with TypeScript
    },
  },
  {
    // For files that don't need React specific rules
    files: ["*.ts", "*.tsx"],
    extends: ["plugin:@typescript-eslint/recommended"],
  },
];

export default eslintConfig;
