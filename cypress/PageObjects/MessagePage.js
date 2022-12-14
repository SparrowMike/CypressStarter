export class MessagePage {
    msgDiv = '#messageDiv';
    sendTxtSpan = "//div[starts-with(@id,'msg_')]//span[@class='white msg-body ui fluid image']";
    dataTooltip = "//div[@data-tooltip = 'Delete']"
    deleteButtom = "//button[@class='ui approve button delete-approve']"

    // String Constant
    Path = '/Testing-server/Basic';
    cyPressAutomationtxt = "this is cypress automation text";

    now = Date.now(); // Unix timestamp in milliseconds


    VerifyLandingUrl() {
        cy.url().should('include', this.Path);
    }

    sendMessage() {

        console.log(this.now);
        cy.get(this.msgDiv).should('be.visible').clear().type('this is cypress automation text' + this.now + '{enter}');
    }

    verifySendMessageTxt() {
        cy.xpath(this.sendTxtSpan).should('contain', this.cyPressAutomationtxt + this.now);
    }

    hoverSendMessageTxt() {

        const lastMessageString = this.cyPressAutomationtxt + this.now;
        cy.log(lastMessageString)
        cy.xpath("//span[contains(text()," + "'" + lastMessageString + "'" + ")]").realHover('mouse');
        cy.log(cy.xpath(this.sendTxtSpan).its('length'))
    }

    hoverAndClickDeleteTooltip() {
        cy.log(cy.xpath(this.dataTooltip).its('length'))
        cy.xpath(this.dataTooltip).each(($el) => {
            $el.click();
        })
    }

    clickDeletePopButton() {
        cy.xpath(this.deleteButtom).click();
    }

    verifyDeletedLastMessageNotvisible() {
        cy.xpath(this.sendTxtSpan).should('not.contain', this.cyPressAutomationtxt + this.now);
    }
}


export default MessagePage;