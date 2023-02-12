module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'no-plusplus': 'off',
        'class-method-use-this': 'off',
        'no-underscore-dangle': 'off',
        'no-inferrable-types': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'all',
                ignoreRestSiblings: false,
                argsIgnorePattern: '^_'
            }
        ],
        complexity: ['error', 21],
        'no-magic-numbers': 'off',
    }
}