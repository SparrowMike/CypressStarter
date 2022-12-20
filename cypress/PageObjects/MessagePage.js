export class MessagePage {
    msgDiv = '#messageDiv';
    sendTxtSpan = "//div[starts-with(@id,'msg_')]//span[@class='white msg-body ui fluid image']";
    deleteToolTip = "//div[@data-tooltip = 'Delete']"
    replyToolTip = "//div[@data-tooltip = 'Reply']"
    editToolTip = "//div[@data-tooltip = 'Edit']"
    reactToolTip = "//div[@data-tooltip = 'React to this message']"
    deleteButtom = "//button[@class='ui approve button delete-approve']"
    replyHeader = '.medium ng-binding'
    reactImage = "//img[@data-src='/img/emojis/1f600.png']"
    reactImageXpathSrc = "//img[@src='/img/emojis/1f600.png']"

    // String Constant
    Path = '/Testing-server/Basic';
    cyPressAutomationtxt = "this is cypress automation text";
    cyPressReplytxt = "this is cypress reply automation text";
    cyPressEdittxt = "this is cypress edit automation text";
    reactImageSrc = "/img/emojis/1f600.png";

    now = Date.now(); // Unix timestamp in milliseconds
    replyTxt = this.cyPressReplytxt + this.now
    sendTxt = this.cyPressAutomationtxt + this.now
    editTxt = this.cyPressEdittxt + this.now


    VerifyLandingUrl() {
        cy.url().should('include', this.Path);
    }

    sendMessage() {
        console.log(this.now);
        cy.get(this.msgDiv).should('be.visible').clear().type(this.sendTxt + '{enter}');
    }

    verifySendMessageTxt() {
        cy.xpath(this.sendTxtSpan).should('contain', this.cyPressAutomationtxt + this.now);
    }

    sendReplyMessage() {
        console.log(this.now);
        cy.get(this.msgDiv).should('be.visible').clear().type(this.replyTxt + '{enter}');
    }

    sendEditMessage() {
        console.log(this.now);
        cy.get(this.msgDiv).clear().should('be.visible').clear().type(this.editTxt + '{enter}');
    }

    hoverSendMessageTxt() {
        const lastMessageString = this.cyPressAutomationtxt + this.now;
        cy.log(lastMessageString)
        cy.xpath("//span[contains(text()," + "'" + lastMessageString + "'" + ")]").realHover('mouse');
        cy.log(cy.xpath(this.sendTxtSpan).its('length'))
    }

    hoverAndClickDeleteTooltip() {
        cy.log(cy.xpath(this.deleteToolTip).its('length'))
        cy.xpath(this.deleteToolTip).each(($el) => {
            $el.click();
        })
    }

    hoverAndClickReplyTooltip() {
        cy.log(cy.xpath(this.replyToolTip).its('length'))
        cy.xpath(this.replyToolTip).each(($el) => {
            $el.click();
        })
    }

    hoverAndClickEditTooltip() {
        cy.log(cy.xpath(this.editToolTip).its('length'))
        cy.xpath(this.editToolTip).each(($el) => {
            $el.click();
        })
    }

    hoverAndClickReactTooltip() {
        cy.log(cy.xpath(this.reactToolTip).its('length'))
        cy.xpath(this.reactToolTip).each(($el) => {
            $el.click();
        })
    }

    clickDeletePopButton() {
        cy.xpath(this.deleteButtom).click();
    }

    selectEmojiFromtheContainer() {
        cy.xpath(this.reactImage).each(($el) => {
            $el.click();
        })
    }

    verifyDeletedLastMessageNotvisible() {
        cy.xpath(this.sendTxtSpan).should('not.contain', this.cyPressAutomationtxt + this.now);
    }

    verifyReplyText() {
        cy.xpath(this.sendTxtSpan).should('contain', this.replyTxt);
    }

    verifyReactMessage() {
        cy.xpath(this.sendTxtSpan).should('contain', this.cyPressAutomationtxt + this.now)
        cy.xpath(this.reactImageXpathSrc).invoke('attr', 'src').should('contain', this.reactImageSrc)

    }

    verifyEditText() {
        cy.xpath(this.sendTxtSpan).should('contain', this.editTxt);
    }

}


export default MessagePage;