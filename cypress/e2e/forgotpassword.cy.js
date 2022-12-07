//? add another test to check forgot password

//! replace below user/password when testing
const user = "yourUser"
const password = "yourUserPassword!"

describe('/login', () => {
  beforeEach(() => {
    cy.visit('/app/login')

    cy.on('uncaught:exception', (err) => {
      if (expect(err.message).to.include("> Unexpected token '<'")) {
        return false;
      } 
    });
  })

  it('greets with welcome', () => {
    cy.contains('h1', 'Welcome')
  })

  it('links to forgot password', () => {
    cy.contains('Forgot Password?').click()
    cy.contains('h2', 'Forgot your password?')
  })

  it('Invalid username', () => {
    cy.get('.ng-scope > .fluid').contains('Reset Password').click()
    cy.get('.errored').should('contain', 'Invalid username')
  })

})