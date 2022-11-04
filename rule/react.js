module.exports = {
    'react/jsx-max-depth': [2, {'max': 5}],
    'react/jsx-sort-default-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-tag-spacing': ['error', {
        'beforeSelfClosing': 'never'
    }],
    'react/jsx-first-prop-new-line': ['error', 'never'],
    'react/jsx-key': ['error', 'never'],
    'react/jsx-no-duplicate-props': ['error', 'never'],
    'react/jsx-closing-tag-location': ['error', 'never'],
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
    'react/require-optimization': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/no-multi-comp': 'off'
}