const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'http://localhost:1337',
    //baseUrl: 'https://tradingroom.sg',
     baseUrl: 'https://genesiv.com',
    // "defaultCommandTimeout": 25000 
  }
})
