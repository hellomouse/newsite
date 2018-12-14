module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    extends: ['eslint:recommended', 'google', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', 'babel'],
    parser: 'babel-eslint',
    settings: {
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            // default to 'createReactClass'
            pragma: 'React',  // Pragma to use, default to 'React'
            version: '15.0', // React version, default to the latest React stable release
            flowVersion: '0.53' // Flow version
        },
        propWrapperFunctions: ['forbidExtraProps']     // The names of any functions used to wrap the
        // propTypes object, e.g. `forbidExtraProps`.
        // If this isn't set, any propTypes wrapped in
        // a function will be skipped.
    },
    rules: {
        'require-jsdoc': 1,
        'no-console': 0,
        'max-len': 0,
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        'quote-props': ['error', 'as-needed'],
        semi: 0,
        'babel/semi': 2,
        'comma-dangle': ['error', 'never'],
        'arrow-parens': [2, 'as-needed'],
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true
            }
        ],
        'block-spacing': [2, 'always'],
        'object-curly-spacing': [2, 'always']
    }
};
