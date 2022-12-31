export class directMessagePage {
    userTab = "//div[contains(text(),'Users')]"
    usersProfile = "//div[@id='count']"
    messageButton = "//button[@class='ui primary button ng-scope']"
    asniiProfileName = "//div[@class='name ng-binding'][normalize-space()='Asni11']"
    close = "//div[@ng-click='closeProfileCard()']"
    messageToolTip = "//span[@data-tooltip='Direct Messages']"
    userHeader = "//div[@class='header username ng-binding']"
    

    // String Constant
    Path = '/Testing-server/Basic';
    OpenChannelPath = '/Cypress-server/Open-channel';
    Asni11 = "Asni11"
    dmAsni11url ="/app/messages/Asni11"
    

    now = Date.now(); // Unix timestamp in milliseconds
    replyTxt = this.cyPressReplytxt + this.now
    sendTxt = this.cyPressAutomationtxt + this.now
    editTxt = this.cyPressEdittxt + this.now
    sharetxt = this.cyPressSharetxt + this.now

    selectUserAsni11() {
        cy.xpath(this.userTab).should('be.visible').should('exist').click();
        cy.xpath(this.usersProfile).each(($el) => {
            if ($el.text() == this.Asni11) {
                $el.click();
            }
        })
    }

    verifyAsni11ProfileCard(){
        cy.xpath(this.messageButton).should('exist').should('be.visible')
        cy.xpath(this.close).should('exist').should('be.visible')
        cy.xpath(this.asniiProfileName).should('exist').should('be.visible')
    }

    verifyAsni11DMpage(){
        cy.xpath(this.messageButton).should('be.visible').click();
        cy.xpath(this.messageToolTip).should('exist').should('be.visible')
        cy.url().should('contain',this.dmAsni11url);
        cy.xpath(this.userHeader).should('contain',this.Asni11);
    }
}
export default directMessagePage;