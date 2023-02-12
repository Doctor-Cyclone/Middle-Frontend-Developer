module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        "semi": "error",
        "no-const-assign": "error",
        'no-plusplus': 'off',
        'class-method-use-this': 'off',
        'no-underscore-dangle': 'off',
        'no-inferrable-types': 'off',
        complexity: ['error', 21],
        'no-magic-numbers': 'off',
    }
}