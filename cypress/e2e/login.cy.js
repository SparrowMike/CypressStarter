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

  it('links to register', () => {
    cy.contains('Register Now').click()
    cy.url().should('contain', '/register');
  })

  it('require username or email', () => {
    cy.get('.submit').contains('Login').click()
    cy.get('.errored').should('contain', 'Username/Email is required')
  })
  
  it('require password', () => {
    cy.get('#username').type('randomuser@email.com')
    cy.get('.submit').contains('Login').click() 
    cy.get('.errored').should('contain', 'Password is required')
  })
 
  it('requires valid username and password', () => {
    cy.get('#username').type(user)
    cy.get('#password').type('invalidpassword{enter}')
    cy.wait(2000)
    cy.get('.field .message .content .header').should('contain', 'The username/email or password you have entered is incorrect. Please try again')
  }) 

  it('navigates to the server', () => {
    cy.get('#username').type(user)
    cy.get('#password').type(`${password}{enter}`)
    cy.get('.submit').contains('Logging you in...')
    
    // cy.get('.errored').should('not.exist');

    cy.on('url:changed', (newUrl) => {
      // cy.url().should('not.include', 'login');
      // cy.get('.server-active .item').click()
      console.log('newUrl', newUrl)
    })

    cy.location('pathname', { timeout: 20000 })
      .should('not.include', '/login');
  })
})