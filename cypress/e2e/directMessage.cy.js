import { RegistrationPage } from "../PageObjects/RegistrationPage"
import { LoginPage } from "../PageObjects/LoginPage"
import MessagePage from "../PageObjects/MessagePage"
import directMessagePage from "../PageObjects/directMessagePage"



describe('Direct Message page suite', () => {
  beforeEach(() => {
    cy.fixture('const').then((data) => {
    const login = new LoginPage();
    login.navigate(data.icGenesivLoginUrl);
    login.loginValid(data.msgUserName, data.msgPassword);
    const msgObj = new MessagePage();
    msgObj.VerifyOpenChannelUrl();
    cy.on('uncaught:exception', (err, runnable) => {
    return false;    
    });
  })
})

  it('Navigation to DM page', () => {
    cy.fixture('const').then((data) => {
      const dmPage = new directMessagePage();
      dmPage.selectUserAsni11();
      dmPage.verifyAsni11ProfileCard();
      dmPage.verifyAsni11DMpage();
      
    })
  })
})
