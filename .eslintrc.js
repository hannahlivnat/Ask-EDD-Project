module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parser: "babel-eslint",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        "import/extensions": [".js", ".jsx"],
        "import/resolver": {
            node: {},
            webpack: "webpack.config.js",
        },
    },
    plugins: ["react", "react-hooks"],
    rules: {
        "linebreak-style": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "arrow-parens": ["error", "as-needed"],
        indent: [
            "error",
            2,
            {
                SwitchCase: 1,
                MemberExpression: "off",
                ignoredNodes: ["TemplateLiteral"],
            },
        ],
        "template-curly-spacing": "off",
    },
};