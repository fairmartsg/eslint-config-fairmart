module.exports = {
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/sort-type-constituents": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "@typescript-eslint/no-invalid-void-type": "warn",
    '@typescript-eslint/ban-types': ['warn', {
        'types': {
            'String': true,
            'Boolean': true,
            'Number': true,
            'Symbol': true,
            '{}': true,
            'Object': true,
            'object': true,
            'Function': true
        },
        'extendDefaults': true
    }
    ]

}
