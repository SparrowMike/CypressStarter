export class SearchPage {
    search = "//div[normalize-space()='Search']"
    searchAllChannels = "//div[@class='menu left transition visible']"
    dataValuechannel5 = "//div[@data-value='Channel 5']"
    divSubheader = "//div[@class='sub header _channelName']"

    // String Constant
    Path = '/Testing-server/Basic';
    OpenChannelPath = '/Cypress-server/Open-channel';
    annoucement = "#Announcement"
    channel1 = '#Channel 1'
    channel2 = '#Channel 2'
    channel3 = '#Channel 3'
    channel4 = '#Channel 4'
    channel5 = '#Channel 5'
    Whisper = 'Whisper'
    DmUs = 'DM Us'
    OpenChannel = '#Open Channel'
    selectchannel5 = 'channel5'
    subheaderChannel5 = 'Channel 5'

    now = Date.now(); // Unix timestamp in milliseconds
    replyTxt = this.cyPressReplytxt + this.now
    sendTxt = this.cyPressAutomationtxt + this.now
    editTxt = this.cyPressEdittxt + this.now
    sharetxt = this.cyPressSharetxt + this.now



    VerifyOpenChannelUrl() {
        cy.url().should('include', this.OpenChannelPath);
    }

    goToSearch() {
        cy.xpath(this.search).should('be.visible').wait(10000).click();
    }

    ValidateAllChannelsTriggers() {
        cy.xpath(this.searchAllChannels).should('be.visible').its('length')
        cy.xpath(this.searchAllChannels)
            .should('contain', this.annoucement)
            .should('contain', this.channel1)
            .should('contain', this.channel2)
            .should('contain', this.channel3)
            .should('contain', this.channel4)
            .should('contain', this.channel5)
            .should('contain', this.Whisper)
            .should('contain', this.DmUs)
    }

    enterChannel5AndSelect(){
        cy.xpath(this.searchAllChannels).should('be.visible').type(this.selectchannel5);  
    }

    verifyChaneel5Directed(){
        cy.xpath(this.divSubheader).should('contain',this.subheaderChannel5)
    }
}
export default SearchPage;