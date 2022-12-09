const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 10000,
  viewportWidth: 1000,
  viewportHeight: 600,
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500    
  },
  // Command timeout overridden for E2E tests
  e2e: {
    // baseUrl: 'http://localhost:1337',
    baseUrl: 'https://tradingroom.sg',
    // baseUrl: 'https://genesiv.com',    
    defaultCommandTimeout: 10000
  }
})
/*
module.exports = defineConfig({
  e2e: {
    // baseUrl: 'http://localhost:1337',
       baseUrl: 'https://tradingroom.sg',
    // baseUrl: 'https://genesiv.com',
    "execTimout": 60000,
    "defaultCommandTimeout": 10000,
    "pageLoadTimeout": 60000,
    "requestTimeout": 10000,
    "responseTimeout": 30000
  }
})*/
