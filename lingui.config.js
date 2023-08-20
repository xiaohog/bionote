/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ["en", "zh"],
  extractBabelOptions: {
    presets: [
      "@babel/preset-typescript",
      "@babel/preset-react",
    ],
  },
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
  format: "po",
};
