const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 720,
    viewportHeight: 720,
    baseUrl: "https://demoqa.com/selectable",
  },
}); 