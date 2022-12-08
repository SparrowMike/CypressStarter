import { RegistrationPage } from "../PageObjects/RegistrationPage"
import { LoginPage } from "../PageObjects/LoginPage"
import MessagePage from "../PageObjects/MessagePage"


describe('message page suite', () => {

  it('Message sent successfully', () => {
    cy.fixture('const').then((data) => {
      const login = new LoginPage();
      login.navigate(data.icGenesivLoginUrl);
      login.loginValid(data.msgUserName,data.msgPassword);
      const msgObj = new MessagePage();
      msgObj.VerifyLandingUrl();
      msgObj.sendMessage();
      msgObj.verifySendMessageTxt();
    })
  })
})