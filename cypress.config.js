import { defineConfig } from "cypress";

module.exports = defineConfig({
  reporter: "mochawesome",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

export default defineConfig({
  watchForFileChanges: false,

  e2e: {
    baseUrl: "https://qauto.forstudy.space",
    viewportWidth: 1000,
    viewportHeight: 720,

    setupNodeEvents(on, config) {},
  },
});
