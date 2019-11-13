const defaultConfig = require("tailwindcss/defaultConfig")

module.exports = Object.assign({}, defaultConfig, {
  theme: {
      fontFamily: {
        mono: ["'IBM Plex Mono'", ...defaultConfig.theme.fontFamily.mono],
        sans: ["'IBM Plex Sans'", ...defaultConfig.theme.fontFamily.sans],
      },
  },
})
