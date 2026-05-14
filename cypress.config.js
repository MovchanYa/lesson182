import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,
  watchForFileChanges: false,

  e2e: {
    baseUrl: "https://qauto.forstudy.space",
    viewportWidth: 1000,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
