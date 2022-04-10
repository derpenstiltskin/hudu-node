'use strict';

module.exports = {
    env: {
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2017,
    },
    plugins: ['prettier'],
    extends: ['plugin:prettier/recommended'],
};