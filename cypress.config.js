import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    viewportWidth: 700,
    viewportHeight: 720,
    baseUrl: "https://youtube.com",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
