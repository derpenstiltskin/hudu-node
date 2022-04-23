'use strict';

module.exports = {
    env: {
        node: true,
        es6: true,
    },
    rules: {
        indent: 'off',
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    plugins: ['prettier'],
    extends: ['plugin:prettier/recommended'],
};
