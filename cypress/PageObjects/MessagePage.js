export class MessagePage {
    msgDiv = '#messageDiv';
    sendTxtSpan = "//div[starts-with(@id,'msg_')]//span[@class='white msg-body ui fluid image']";
    deleteToolTip = "//div[@data-tooltip = 'Delete']"
    replyToolTip = "//div[@data-tooltip = 'Reply']"
    editToolTip = "//div[@data-tooltip = 'Edit']"
    reactToolTip = "//div[@data-tooltip = 'React to this message']"
    newCommentDotTip = "//div[@data-tooltip = 'New Comment']"
    postToOtherChannelsToolTip = "//div[@data-tooltip = 'Post to other channels']"
    shareToolTip = "//div[@data-tooltip = 'Share']"
    shareTextMessage ="//textarea[@id='shareModalText']"
    sendButton = "//button[normalize-space()='Send']"
    deleteButtom = "//button[@class='ui approve button delete-approve']"
    replyHeader = '.medium ng-binding'
    reactImage = "//img[@data-src='/img/emojis/1f600.png']"
    reactImageXpathSrc = "//img[@src='/img/emojis/1f600.png']"
    youtubeLink = "//a[@href='http://www.youtube.com']"
    editedYoutubeLink = "//a[contains(text(),'https://youtu.be/gZN3b9irMQ0')]"
    headerYoutubeLink = "//h3[contains(text(),'YouTube')]"
    description = '.description'
    youtubeImage = "//img[@src='https://www.youtube.com/img/desktop/yt_1200.png']"
    announcementTag = "//div[@class='sub header ng-binding'][normalize-space()='Announcement']"
    channel1Tag = "//div[@class='sub header ng-binding'][normalize-space()='Channel 1']"
    postButton = "//button[@class='ui green approve button blast']"
    announcementChannelId = "//div[@id='channel_63a041aaf29f4030b7e66b24']"
    channel1Id = "//div[@id='channel_63a04140f29f4030b7e66aff']"
    profileImg = "//a[@data-tooltip = 'Profile']"
    logoutIcon = "//div[@class='content redTomato padleft5']"
    logoutApprove = "//button[@class='ui approve button']"
    shareChannel1= "//div[@class='scrolling content modalContent']//div[2]//div[2]//div[1]//div[1]//div[1]//div[2]//a[1]"

    // String Constant
    Path = '/Testing-server/Basic';
    OpenChannelPath = '/Cypress-server/Open-channel';
    cyPressAutomationtxt = "this is cypress automation text";
    cyPressReplytxt = "this is cypress reply automation text";
    cyPressEdittxt = "this is cypress edit automation text";
    cyPressSharetxt = "this is cypress share automation text"
    reactImageSrc = "/img/emojis/1f600.png";
    descriptionText = "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube"

    now = Date.now(); // Unix timestamp in milliseconds
    replyTxt = this.cyPressReplytxt + this.now
    sendTxt = this.cyPressAutomationtxt + this.now
    editTxt = this.cyPressEdittxt + this.now
    sharetxt = this.cyPressSharetxt + this.now
    editHyperlinkTxt = "https://youtu.be/gZN3b9irMQ0";
    sendYoutubetext = "www.youtube.com";


    VerifyLandingUrl() {
        cy.url().should('include', this.Path);
    }

    VerifyOpenChannelUrl() {
        cy.url().should('include', this.OpenChannelPath);
    }


    sendMessage() {
        console.log(this.now);
        cy.get(this.msgDiv).should('be.visible').clear().type(this.sendTxt + '{enter}');
    }

    sendYoutubeMessage() {
        console.log(this.now);
        cy.get(this.msgDiv).should('be.visible').clear().type(this.sendYoutubetext + '{enter}');
    }

    verifySendMessageTxt() {
        cy.xpath(this.sendTxtSpan).should('contain', this.cyPressAutomationtxt + this.now);
    }

    verifySharemessageTxt(){
        cy.get('div.content').should('contain',this.cyPressAutomationtxt + this.now);
        cy.xpath(this.sendTxtSpan).should('contain', this.cyPressSharetxt + this.now);

    }

    sendReplyMessage() {
        console.log(this.now);
        cy.get(this.msgDiv).should('be.visible').clear().type(this.replyTxt + '{enter}');
    }

    sendEditMessage() {
        console.log(this.now);
        cy.get(this.msgDiv).clear().should('be.visible').clear().type(this.editTxt + '{enter}');
    }

    sendEditYoutubeMessage() {
        cy.get(this.msgDiv).should('be.visible').clear().wait(5000).type(this.editHyperlinkTxt + '{enter}');
    }

    hoverSendMessageTxt() {
        const lastMessageString = this.cyPressAutomationtxt + this.now;
        cy.log(lastMessageString)
        cy.xpath("//span[contains(text()," + "'" + lastMessageString + "'" + ")]").realHover('mouse');
        cy.log(cy.xpath(this.sendTxtSpan).its('length'))
    }

    hoverTubelinkAndClick() {
        const lastMessageString = this.sendYoutubetext;
        cy.log(lastMessageString);
        cy.xpath(this.youtubeLink).last().realHover('mouse');
        cy.xpath(this.youtubeLink).last().should('have.attr', 'target')
        cy.xpath(this.youtubeLink).last().click();
    }

    hoverTubelinkAndEdit() {
        cy.xpath(this.youtubeLink).last().realHover('mouse');
        cy.xpath(this.youtubeLink).last().should('have.attr', 'target')
        cy.log(cy.xpath(this.editToolTip).its('length'))
        cy.xpath(this.editToolTip).each(($el) => {
            $el.click();
        })
    }

    verifyEditedYoutubeAtrributesAndNewTabTitle() {
        cy.xpath(this.editedYoutubeLink).last().should('exist')
        cy.log(cy.xpath(this.editedYoutubeLink).its('length'))
        cy.xpath(this.editedYoutubeLink).last().should('have.attr', 'href').should('contain', "https://youtu.be/gZN3b9irMQ0")
        cy.xpath(this.editedYoutubeLink).last().realHover('mouse').click({ multiple: true });
    }

    hoverAndClickDeleteTooltip() {
        cy.log(cy.xpath(this.deleteToolTip).its('length'))
        cy.xpath(this.deleteToolTip).each(($el) => {
            $el.click();
        })
    }

    logout() {
        cy.xpath(this.profileImg).should('be.visible').click();
        cy.xpath(this.logoutIcon).should('be.visible').click();
        cy.xpath(this.logoutApprove).should('be.visible').last().click();
    }

    hoverAndClickPostToOtherChannelToolTip() {
        cy.log(cy.xpath(this.postToOtherChannelsToolTip).its('length'))
        cy.xpath(this.postToOtherChannelsToolTip).each(($el) => {
            $el.click();
        })
    }

    shareMessageToChannel1() {
        cy.log(cy.xpath(this.shareToolTip).its('length'))
        cy.xpath(this.shareToolTip).each(($el) => {
            $el.click();
        })
        cy.xpath(this.shareTextMessage).should('be.visible').clear().type(this.sharetxt + '{enter}');
        cy.xpath(this.shareChannel1).click();
        cy.xpath(this.sendButton).click();
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

    goToChannel1() {
        cy.xpath(this.channel1Id).click();
    }

    goToAnnoucementChannel() {
        cy.xpath(this.announcementChannelId).click();
    }

    ClickPostButton() {
        cy.xpath(this.postButton).click();
    }

    SelectCypressServerAnnouncement() {
        cy.xpath(this.announcementTag).should('be.visible').click();
    }

    SelectCypressServerChaneel1() {
        cy.xpath(this.channel1Tag).should('be.visible').click();
    }

    selectEmojiFromtheContainer() {
        cy.xpath(this.reactImage).each(($el) => {
            $el.click();
        })
    }

    verifyDeletedLastMessageNotvisible() {
        cy.xpath(this.sendTxtSpan).should('not.contain', this.cyPressAutomationtxt + this.now);
    }

    verifyNewCommentDotonChannel1() {
        cy.xpath(this.newCommentDotTip).should('be.visible').its('length').should('eq', 1);
    }

    verifyYoutubeText() {
        cy.xpath(this.sendTxtSpan).should('contain', this.sendYoutubetext);
    }

    verifyNewtabTitle() {
        cy.xpath(this.youtubeLink).last().should('have.attr', 'href').should('contain', "http://www.youtube.com")

    }

    verifyYoutubeAtrributes() {
        cy.xpath(this.headerYoutubeLink).last().should('exist');
        cy.get(this.description).should('exist').should('contain', this.descriptionText);
        cy.xpath(this.youtubeImage).should('exist');

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