import { RegistrationPage } from "../PageObjects/RegistrationPage"
import { LoginPage } from "../PageObjects/LoginPage"
import MessagePage from "../PageObjects/MessagePage"



describe('message page suite', () => {
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

  it('Message sent successfully', () => {
    cy.fixture('const').then((data) => {
      const msgObj = new MessagePage();
      msgObj.sendMessage();
      msgObj.verifySendMessageTxt();
    })
  })

  it('Message Delete Successfully', () => {
    cy.fixture('const').then((data) => {
      const msgObj = new MessagePage();
      msgObj.sendMessage();
      msgObj.hoverSendMessageTxt();
      msgObj.hoverAndClickDeleteTooltip();
      msgObj.clickDeletePopButton();
      msgObj.verifyDeletedLastMessageNotvisible();
    })
  })

  it('Message reply successfully', () => {
    cy.fixture('const').then((data) => {
      const msgObj = new MessagePage();
      msgObj.sendMessage();
      msgObj.hoverSendMessageTxt();
      msgObj.hoverAndClickReplyTooltip();
      msgObj.sendReplyMessage();
      msgObj.verifyReplyText();
    })
  })

  it('Message edit successfully', () => {
    cy.fixture('const').then((data) => {
      const msgObj = new MessagePage();
      msgObj.sendMessage();
      msgObj.hoverSendMessageTxt();
      msgObj.hoverAndClickEditTooltip();
      msgObj.sendEditMessage();
      msgObj.verifyEditText();
    })
  })

  it('Message react successfully', () => {
    cy.fixture('const').then((data) => {
      const msgObj = new MessagePage();
      msgObj.sendMessage();
      msgObj.hoverSendMessageTxt();
      msgObj.hoverAndClickReactTooltip();
      msgObj.selectEmojiFromtheContainer();
      msgObj.verifyReactMessage();
    })
  })

  it('Post a hyperlink in channel', () => {
    cy.fixture('const').then((data) => {
      const msgObj = new MessagePage();
      msgObj.sendYoutubeMessage();
      msgObj.verifyYoutubeText();
      msgObj.verifyYoutubeAtrributes();
      msgObj.hoverTubelinkAndClick();
      msgObj.verifyNewtabTitle();
    })
  })

  it('Editing a hyperlink in channel', () => {
    cy.fixture('const').then((data) => {
      const msgObj = new MessagePage();
      msgObj.sendYoutubeMessage();
      msgObj.verifyYoutubeText();
      msgObj.verifyYoutubeAtrributes();
      msgObj.hoverTubelinkAndEdit();
      msgObj.sendEditYoutubeMessage();
      msgObj.verifyEditedYoutubeAtrributesAndNewTabTitle();
    })
  })

  it('Post to other channels', () => {
    cy.fixture('const').then((data) => {
      const msgObj = new MessagePage();
      msgObj.sendMessage();
      msgObj.verifySendMessageTxt();
      msgObj.hoverSendMessageTxt();
      msgObj.hoverAndClickPostToOtherChannelToolTip();
      msgObj.SelectCypressServerAnnouncement();
      msgObj.ClickPostButton();
      msgObj.goToAnnoucementChannel();
      msgObj.verifySendMessageTxt();     
    })
  })

  it('Post to other channels  with another user login', () => {
    cy.fixture('const').then((data) => {
      const msgObj = new MessagePage();
      msgObj.sendMessage();
      msgObj.verifySendMessageTxt();
      msgObj.hoverSendMessageTxt();
      msgObj.hoverAndClickPostToOtherChannelToolTip();
      msgObj.SelectCypressServerChaneel1();
      msgObj.ClickPostButton();
      msgObj.logout();
      const login = new LoginPage();
      login.loginValid(data.msgUserName1, data.msgPassword);
      msgObj.goToChannel1();
      msgObj.verifySendMessageTxt();
    })
  })
})
