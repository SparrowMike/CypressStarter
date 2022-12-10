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
    const ln = new LoginPage();
    ln.verifyServerAndDisclaimersText();
  })

  it('Verify CNAME Disclaimer GDPR', () => {
    const ln = new LoginPage();
    ln.verifyCheckBoxChecked();
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

  it.only('CNAME Login', () => {
    cy.fixture('const').then((data) => {
      const login = new LoginPage();
      login.navigate(data.icGenesivUrl);
      login.setUserName(data.cnameLoginUserName);
      login.setPassword(data.cnameLoginPassword);
      login.clickLogin();
      login.verifyLandingUrlAndVipRoomText();
    })
  })

})