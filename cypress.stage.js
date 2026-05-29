const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotOnRunFailure: true,
    baseUrl: "https://qauto2.forstudy.space/",
    env: {
      userPassword: "Smyle333",
    },

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: true,
      json: true,
      charts: true,
    },
  },
});
