module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "settings": {
        "react": {
            "version": "detect",
        },
    },
    "env": {
        "es6": true,
        "browser": true,
        "jest": true,
        "node": true
    },
    "rules": {
        "react/react-in-jsx-scope": 0,
        "react/display-name": 0,
        "react/prop-types": 0,
        "react/jsx-key": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/member-delimiter-style": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "no-console": [
            2,
            {
                "allow": ["info", "warn", "error"]
            }
        ],
        "indent": "off",
        "@typescript-eslint/indent": [ 2, 4 ],
        "semi": "off",
        "@typescript-eslint/semi": [ 2, "always" ],
        "quotes": "off",
        "@typescript-eslint/quotes": [ 2, "double" ],
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/no-unused-vars": [ 1, { "args": "none" } ],
    }
};
