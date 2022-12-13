export class MessagePage {
    msgDiv = '#messageDiv';
    sendTxtSpan = "//div[starts-with(@id,'msg_')]//span[@class='white msg-body ui fluid image']";

    // String Constant
    Path = '/Testing-server/Basic';
    cyPressAutomationtxt = "this is cypress automation text";


    VerifyLandingUrl() {
        cy.url().should('include', this.Path);
    }

    sendMessage() {
        cy.get(this.msgDiv).clear().should('be.visible').type('this is cypress automation text{enter}');
    }

    verifySendMessageTxt() {
        cy.xpath(this.sendTxtSpan).should('contain', this.cyPressAutomationtxt);
    }
}

export default MessagePage;