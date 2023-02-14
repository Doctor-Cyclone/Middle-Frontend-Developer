module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["airbnb", "airbnb-typescript", "prettier"],
    plugins: ["prettier"],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    rules: {
        "prettier/prettier": ["error"]
    }
}