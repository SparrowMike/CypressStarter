import { RegistrationPage } from "../PageObjects/RegistrationPage"
import { LoginPage } from "../PageObjects/LoginPage"
import MessagePage from "../PageObjects/MessagePage"
import SearchPage from "../PageObjects/SearchPage"



describe('Personal DM suite', () => {

  it('Using #hashtag search', () => {
    cy.fixture('const').then((data) => {
      const login = new LoginPage();
      login.navigate(data.icGenesivLoginUrl);
      login.loginValid(data.comsicUsername, data.msgPassword);
      const dmObj = new SearchPage();
      dmObj.VerifyOpenChannelUrl();
      dmObj.goToSearch();
      dmObj.ValidateAllChannelsTriggers();
      dmObj.enterChannel5AndSelect();
      dmObj.verifyChaneel5Directed();
    })
  })
})
