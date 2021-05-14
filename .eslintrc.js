/* eslint-disable prettier/prettier */
module.exports = {
    globals: {
        window: true,
        document: true,
        Image: true,
        navigator: true,
        localStorage: true,
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
