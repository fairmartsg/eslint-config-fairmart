'use strict';

module.exports = {
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/all"
    ],
    "settings": {
        "react": {
            "createClass": "createClass",
            "pragma": "React",
            "version": "15.0"
        }
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "max-lines": [
            "error",
            {
                "max": 270
            }
        ],
        "max-len": [
            "error",
            {
                "code": 120
            }
        ],
        "indent": "off",
        "sort-imports": "off",
        "no-case-declarations": "off",
        "no-useless-escape": "off",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxEOF": 1,
                "maxBOF": 1
            }
        ],
        "quote-props": [
            "error",
            "as-needed"
        ],
        "operator-linebreak": [
            "error",
            "after",
            {
                "overrides": {
                    "?": "after",
                    ":": "after"
                }
            }
        ],
        "dot-location": [
            "error",
            "property"
        ],
        "newline-before-return": "off",
        "semi": [
            "error",
            "never"
        ],
        "react/prefer-stateless-function": "off",
        "react/jsx-tag-spacing": "off",
        "react/jsx-sort-props": "off",
        "react/sort-prop-types": "off",
        "react/forbid-component-props": "off",
        "react/jsx-handler-names": "off",
        "react/no-set-state": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-indent": "off",
        "react/jsx-no-literals": "off",
        "react/jsx-no-bind": [
            "error",
            {
                "allowArrowFunctions": true
            }
        ],
        "react/jsx-space-before-closing": [
            "error",
            "never"
        ],
        "react/jsx-closing-bracket-location": [
            1,
            "after-props"
        ],
        "react/forbid-prop-types": [
            "error",
            {
                "forbid": [
                    "any"
                ]
            }
        ],
        "react/sort-comp": [
            "error",
            {
                "order": [
                    "static-methods",
                    "lifecycle",
                    "render",
                    "everything-else"
                ]
            }
        ],
        "eol-last": [
            "error",
            "always"
        ],
        "padded-blocks": [
            "error",
            {
                "switches": "never",
                "classes": "always"
            }
        ],
        "prefer-const": 1,
        "curly": "error",
        "comma-dangle": ["error", "never"],
        "quotes": ["error", "single", {"allowTemplateLiterals": true}],
        "eqeqeq": ["error", "always"]
    }
};