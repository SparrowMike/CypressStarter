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

})