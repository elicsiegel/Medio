module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react", 
        "prettier"
    ],
    "rules": {
        "prettier/prettier": [
        "error",
            {
                printWidth: 120,
                tabWidth: 4,
                bracketSpacing: false,
                parser: "babel",
                trailingComma: "none",
                singleQuote: true
            }],
    }
};