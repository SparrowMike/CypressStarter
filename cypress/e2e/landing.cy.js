import { LoginPage } from "../PageObjects/LoginPage"

describe('landing page suite', () => {
  // using POM
  it('LoginTest', () => {
    cy.fixture('const').then((data) => {
      const login = new LoginPage();
      login.navigate(data.icGenesivUrl);
      login.setUserName(data.username);
      login.setPassword(data.password);
      login.clickLogin();
    })
  })

  it('Verify CNAME Disclaimer', () => {
    cy.fixture('const').then((data) => {
      const ln = new LoginPage();
      ln.navigate(data.icGenesivUrl);
      ln.loginValid(data.cnameLoginUserName, data.cnameLoginPassword)
      ln.verifyServerAndDisclaimersText();
    })
  })

  it('Verify CNAME Disclaimer GDPR', () => {
    cy.fixture('const').then((data) => {
      const ln = new LoginPage();
      ln.navigate(data.icGenesivUrl);
      ln.loginValid(data.cnameLoginUserName, data.cnameLoginPassword)
      ln.verifyCheckBoxChecked();
    })
  })

  it('Login First Time', () => {
    cy.fixture('const').then((data) => {
      const login = new LoginPage();
      login.navigate(data.icGenesivLoginUrl);
      login.setUserName(data.loginFirstTimeUsername);
      login.setPassword(data.loginFirstTimePassword);
      login.clickLogin();
      login.verifyHeaderText();
    })
  })

  it('CNAME Login', () => {
    cy.fixture('const').then((data) => {
      const login = new LoginPage();
      login.navigate(data.icGenesivUrl);
      login.setUserName(data.cnameLoginUserName);
      login.setPassword(data.cnameLoginPassword);
      login.clickLogin();
      login.verifyLandingUrlAndVipRoomText();
    })
  })

  it('Login Redirect Existing User', () => {
    cy.fixture('const').then((data) => {
      const login = new LoginPage();
      login.navigate(data.icGenesivLoginUrl);
      login.setUserName(data.cytest2Username);
      login.setPassword(data.cytest2password);
      login.clickLogin();
      login.verifyLastVisitedServerGeneSivOfficial();
      login.verifyWelcomeLoadServer();
    })
  })
})