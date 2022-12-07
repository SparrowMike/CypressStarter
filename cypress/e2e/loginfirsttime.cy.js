const user = "cypresstest1"
const password = "Cypresstest1!"

describe('/login', () => {
  beforeEach(() => {
    cy.visit('/app/login');

    cy.on('uncaught:exception', (err, runnable) => {
     // if (expect(err.message).to.include("> Unexpected token '<'")) {
        return false;
     // } 
    });
  })


  it('Greets with welcome', () => {
    cy.contains('h1', 'Welcome Back!')
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
        
    cy.on('url:changed', (newUrl) => {
      // cy.url().should('not.include', 'login');
      // cy.get('.server-active .item').click()
      console.log('newUrl', newUrl)
    })

    cy.location('pathname', { timeout: 20000 })
      .should('not.include', '/login');
  })

  
})