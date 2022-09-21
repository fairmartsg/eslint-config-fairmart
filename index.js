'use strict'

module.exports = {
    'parser': 'babel-eslint',
    'plugins': [
        'react',
        'filenames',
        'folders',
        'detect-bad-words',
        'mocha'
    ],
    'extends': [
        'eslint:recommended',
        'plugin:react/all'
    ],
    'settings': {
        'react': {
            'createClass': 'createClass',
            'pragma': 'React',
            'version': '16.0'
        },
        'customBadWords': ['ele', 'num', 'grouping', 'object', 'err', 'e', 'data', 'some']
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'rules': {
        'arrow-parens': ['error', 'always'],
        'dot-notation': 'error',
        'max-params': ['warn', 3],
        'prefer-const': ['error', {
            'destructuring': 'any',
            'ignoreReadBeforeAssign': false
        }],
        'prefer-arrow-callback': 'error',
        'no-duplicate-imports': 'error',
        'arrow-body-style': ['error', 'as-needed'],
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
        'react/jsx-max-depth': [2, {'max': 5}],
        'react/jsx-sort-default-props': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/no-access-state-in-setstate': 'off',
        'react/button-has-type': 'off',
        'react/destructuring-assignment': 'off',
        'react/prefer-stateless-function': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-tag-spacing': ['error', {
            'beforeSelfClosing': 'never'
        }],
        'react/jsx-sort-props': 'off',
        'react/sort-prop-types': 'off',
        'react/forbid-component-props': 'off',
        'react/jsx-handler-names': 'off',
        'react/no-set-state': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-bind': [
            'error',
            {
                'allowArrowFunctions': true
            }
        ],
        'react/jsx-closing-bracket-location': [
            1,
            'after-props'
        ],
        'react/forbid-prop-types': [
            'error',
            {
                'forbid': [
                    'any'
                ]
            }
        ],
        'react/sort-comp': [
            'error',
            {
                'order': [
                    'state',
                    'static-methods',
                    'lifecycle',
                    'render',
                    '/^render.+$/',
                    'everything-else'
                ]
            }
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
        'react/require-optimization': 'off',
        'react/forbid-foreign-prop-types': 'off',
        'react/no-multi-comp': 'off',
        'no-console': 'off',
        'id-length': [2, {
            'min': 3,
            'exceptions': ['$', 'id', 'lg', 'md', 'sm', 'xl', 'xs',
                'gt', 'to', 'os', 'in', 'qs', 's3', 'S', 'r', 'g', 'b', 'fs']
        }],
        'detect-bad-words/in-code': 'error',
        'detect-bad-words/in-comment': 'error',
        'no-mocha-arrows': ['off'],
        'no-async-describe': ['off']
    }
}
