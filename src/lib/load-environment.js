const DEV_ENV = "development"
const dotenv = require("dotenv")

const loadEnvironment = env => {
  // eslint-disable-next-line global-require
  dotenv.config({
    path: `.env.${env || DEV_ENV}`,
  })
}

module.exports = loadEnvironment
