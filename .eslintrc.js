module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended", // Para Vue 3
    "plugin:prettier/recommended", // Integração com Prettier
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "vue/multi-word-component-names": "off", // Exemplo de ajuste para Vue
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
