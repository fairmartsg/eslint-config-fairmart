'use strict'
const snakeCase = require('./rule/snakeCase')
const react = require('./rule/react')

module.exports = {
    'parser': 'babel-eslint',
    'plugins': [
        'react',
        'sonarjs',
        'no-else',
        'filenames',
        'folders',
        'detect-bad-words',
        'prefer-arrow'
    ],
    'extends': [
        'eslint:recommended',
        'plugin:react/all',
        'plugin:sonarjs/recommended'
    ],
    'settings': {
        'react': {
            'createClass': 'createClass',
            'pragma': 'React',
            'version': '18.2'
        },
        'customBadWords': ['ele', 'num', 'grouping', 'err', 'e', 'data', 'some', 'buff']
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'rules': {
        ...react,
        'dot-notation': 'error',
        'max-params': ['warn', 3],
        'prefer-const': ['error', {
            'destructuring': 'any',
            'ignoreReadBeforeAssign': false
        }],
        'prefer-arrow-callback': 'error',
        'no-duplicate-imports': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        "function-paren-newline": ["warn", "never"],
        "array-bracket-spacing": ["warn", "never"],
        "no-unexpected-multiline": "error",
        "func-call-spacing": ["error", "never"],
        "no-spaced-func": "error",
        "arrow-parens": ["error", "always", { "requireForBlockBody": true }],
        'func-name-matching': 'error',
        'func-style': ['error', 'declaration', {'allowArrowFunctions': true}],
        'no-var': 'error',
        'folders/match-regex': [
            2,
            '^[a-z_]+$', '/src/'
        ],
        'max-lines-per-function': ['warn', {'max': 10, 'skipBlankLines': true}],
        'complexity': ['warn', 8],
        'max-depth': ['error', 3],
        'max-statements-per-line': ['error', {'max': 1}],
        'filenames/match-regex': [2, '^[a-z][a-zA-Z-_.]*$', true],
        'object-curly-spacing': ['error', 'never'],
        'max-lines': [
            'error',
            {
                'max': 270
            }
        ],
        'max-len': [
            'error',
            {
                'code': 120
            }
        ],
        'indent': 'off',
        'sort-imports': 'off',
        'no-case-declarations': 'off',
        'no-useless-escape': 'off',
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
                'maxEOF': 1,
                'maxBOF': 1
            }
        ],
        'quote-props': [
            'error',
            'as-needed'
        ],
        'operator-linebreak': [
            'error',
            'after',
            {
                'overrides': {
                    '?': 'after',
                    ':': 'after'
                }
            }
        ],
        'dot-location': [
            'error',
            'property'
        ],
        'newline-before-return': 'off',
        'semi': [
            'error',
            'never'
        ],
        'eol-last': [
            'error',
            'always'
        ],
        'padded-blocks': [
            'error',
            {
                'switches': 'never',
                'classes': 'always'
            }
        ],
        'curly': 'error',
        'comma-dangle': ['error', 'never'],
        'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
        'eqeqeq': ['error', 'always'],
        'no-param-reassign': 'error',
        'max-nested-callbacks': ['error', 2],
        'no-inner-declarations': 'warn',
        'no-loop-func': 'warn',
        'no-empty-function': 'warn',
        'no-console': 'off',
        'id-length': [2, {
            'min': 3,
            'exceptions': ['$', 'id', 'lg', 'md', 'sm', 'xl', 'xs',
                'gt', 'to', 'os', 'in', 'qs', 's3', 'S', 'r', 'g', 'b', 'fs',
                'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        }],
        'detect-bad-words/in-code': 'warn',
        'detect-bad-words/in-comment': 'warn',
        'no-async-describe': 'off',
        'sonarjs/no-small-switch': 'off',
        'sonarjs/no-duplicate-string': 'off',
        'no-else/no-else': ['warn', 2],
        'camelcase': ['error',
            {
                'properties': 'never',
                'allow': snakeCase
            }
        ],
        'prefer-arrow/prefer-arrow-functions': ['error',
            {
                'disallowPrototype': true,
                'singleReturnOnly': false,
                'classPropertiesAllowed': false
            }
        ]

    }
}
