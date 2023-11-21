
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: "http://localhost:2023/"
    },
  },
  viewportWidth: 1440,
  viewportHeight: 900,
});
