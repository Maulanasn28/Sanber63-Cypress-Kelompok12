const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://magento.softwaretestingboard.com/',
    viewportWidth :900,
    viewportHeight : 1000,
    

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false
});
