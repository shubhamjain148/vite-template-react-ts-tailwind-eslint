module.exports = {
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "semi": true,
  "trailingComma": "all",
  "singleQuote": false,
  "quoteProps": "as-needed",
  "bracketSpacing": true,
  "arrowParens": "always",
  "jsxBracketSameLine": false,
  "tailwindConfig": "./tailwind.config.js",
  "tailwindAttributes": ["wrapperClassName", "wrapClassName", "rootClassName"],
  "tailwindFunctions": ["classNames", "classnames", "twMerge"],
  "overrides": [
    {
      "files": ".prettierrc.json",
      "options": {
        "parser": "json"
      }
    }
  ],
  "plugins": ["prettier-plugin-tailwindcss"]
};

// {
//   "arrowParens": "always",
//   "bracketSpacing": true,
//   "embeddedLanguageFormatting": "auto",
//   "htmlWhitespaceSensitivity": "css",
//   "insertPragma": false,
//   "jsxBracketSameLine": false,
//   "jsxSingleQuote": false,
//   "proseWrap": "preserve",
//   "quoteProps": "as-needed",
//   "requirePragma": false,
//   "semi": true,
//   "singleQuote": false,
//   "tabWidth": 2,
//   "trailingComma": "es5",
//   "useTabs": false,
//   "vueIndentScriptAndStyle": false,
//   "printWidth": 100
// }
