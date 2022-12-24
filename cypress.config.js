const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 20000,
  viewportWidth: 1000,
  viewportHeight: 600,
  retries : 2,
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500    
  },
  // Command timeout overridden for E2E tests
  e2e: {
    // baseUrl: 'http://localhost:1337',
    //baseUrl: 'https://tradingroom.sg',
    // baseUrl: 'https://genesiv.com',    
    defaultCommandTimeout: 60000,
    retries : 2
  }
})
