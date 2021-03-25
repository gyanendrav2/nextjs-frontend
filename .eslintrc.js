module.exports = {
    globals: {
        window: true,
    },
    extends: [
        "@prismx/eslint-config",
        "@prismx/eslint-config/react",
        "@prismx/eslint-config/prettier",
    ],
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        // {
        // "import/no-named-as-default": false
        // },
    },

}