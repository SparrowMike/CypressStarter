const user = "cypressdisclaimer"
const password = "Cypressdisclaimer1!"

describe('CNAME Disclaimer', () => {
  beforeEach(() => {
    cy.visit('https://ic.genesiv.com/app/login')    
    cy.on('uncaught:exception', (_err, runnable) => {
    return false;    
    });
  })

  it('Greets with welcome', () => {
    cy.contains('h1', 'Welcome Back!')
  })
  
  it('require username or email', () => {
    cy.get('.sixteen > #login-splash .field:nth-child(5) > .ui').contains('Login').click()
    cy.get('.errored').should('contain', 'Username/Email is required')
  })
  
  it('require password', () => {
    cy.get('#username').type('randomuser@email.com')
    cy.get('.sixteen > #login-splash .field:nth-child(5) > .ui').contains('Login').click() 
    cy.get('.errored').should('contain', 'Password is required')
  })
 
  it('requires valid username and password', () => {
    cy.get('#username').type(user)
    cy.get('#password').type('invalidpassword{enter}')
    cy.get('.field .message .content .header').should('contain', 'The username/email or password you have entered is incorrect. Please try again')
  }) 

  it('navigates to the server', () => {
    cy.get('#username').type(user)
    cy.get('#password').type(`${password}{enter}`)
    cy.get('.ng-dirty > .field > .center').contains('Logging you in...')
        
    cy.on('url:changed', (newUrl) => {
     console.log('newUrl', newUrl)
  })

    cy.location('pathname', { timeout: 20000 }).should('not.include', '/login');    
    cy.get('.field:nth-child(1) > label').contains('Server Rules and Disclaimers')
  })  
})