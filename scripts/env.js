"use strict";

require("dotenv-expand")(require("dotenv").config());

const SAPPER = /^SAPPER_/i;

module.exports = mode => {
  const raw = Object.keys(process.env).reduce(
    (env, key) => {
      env[key] = SAPPER.test(key) ? process.env[key] : undefined;
      return env;
    },
    {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches Webpack and Sapper into the correct mode.
      NODE_ENV: process.env.NODE_ENV || mode
    }
  );
  // Stringify all values so we can feed into webpack DefinePlugin
  const stringified = {
    ...Object.keys(raw).reduce((env, key) => {
      env[`process.env.${key}`] = JSON.stringify(raw[key]);
      return env;
    }, {})
  };

  return stringified;
};
