
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: "https://zuhot-cinema.vercel.app/"
    },
  },
  viewportWidth: 1440,
  viewportHeight: 900,
});
