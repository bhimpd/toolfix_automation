const { defineConfig } = require("cypress");
require("dotenv").config({ path: "./.env.staging" });

module.exports = defineConfig({
  projectId: "v1xsrx",
  chromeWebSecurity: false,
  env: { ...process.env },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: process.env.BASEURL,
    viewportWidth: 1660,
    viewportHeight: 880,
  },
});
