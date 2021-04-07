/* eslint-disable prettier/prettier */
module.exports = {
    globals: {
        window: true,
        document: true,
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
        "max-lines": ["error", { code: 1000 }],

        // {
        // "import/no-named-as-default": false
        // },
    },
}