module.exports = {
    globals: {
        window: true,
        document: true,
        Image: true,
        navigator: true,
        localStorage: true,
    },
    parser: "@babel/eslint-parser",
    parserOptions: {
        sourceType: "module",
        allowImportExportEverywhere: true,
        requireConfigFile: false,
        babelOptions: {
            presets: ["@babel/preset-react"],
        },
    },
    extends: ["@prismx/eslint-config", "@prismx/eslint-config/react", "@prismx/eslint-config/prettier"],
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        // {
        // "import/no-named-as-default": false
        // },
    },
}
