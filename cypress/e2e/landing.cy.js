
const userName = "rahul1988gupta88@gmail.com"
const password = "Welcome1234!"
const landingTitle = 'SG Trading Room'

describe('landing page suite', () => {
  it('verify valid user login and landing page title', () => {
    cy.visit('/app/login')
    cy.title().should('eq','Login')
    cy.wait(20000)
    cy.get('#username').type(userName)
    cy.get('#password').type(password)
    cy.get('.submit').contains('Login').click()
    cy.title().should('eq', landingTitle)

  })
})