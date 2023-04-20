const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://www.saucedemo.com",
    "defaultCommandTimeout": 50000,
    "pageLoadTimeout": 50000,
    "viewportHeight": 800,
    "viewportWidth": 1500,
  }
  // setupNodeEvents(on, config) {
  //   // implement node event listeners here
  // },
  // },
});
