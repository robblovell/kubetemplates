module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
    ],
    rules: {
        "camelcase": [1, { "properties": "always" }],
        "no-alert": 1,
        "no-console": 1,
        "no-trailing-spaces": [1, { "skipBlankLines": true }],
        "no-multi-spaces": 0,
        "prefer-const": 1,
        "quotes": [1, "single", "avoid-escape"],
        "semi": [2, "never"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-interface": "off",
    },
  }