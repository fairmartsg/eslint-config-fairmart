module.exports = {
    'files': ["src/**/*.ts", "src/**/*.tsx"],
    'parser': '@typescript-eslint/parser',
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "parserOptions": {
        "project": ["./tsconfig.json"]
    },
    "rules": {
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/method-signature-style": "error",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/restrict-plus-operands": "warn",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/sort-type-constituents": "error"
    }
}
