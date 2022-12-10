export class LoginPage {
    txtUserName = "#username";
    textPassWord = "#password";
    btnLogin = ".submit";
    clsPopUp = ".field ng-scope"
    checkBoxFirstName = "//input[@id='First Name' and @type='checkbox']"
    checkBoxLastName = "//input[@id='Last Name' and @type='checkbox']"
    checkBoxEmail = "//input[@id='Email' and @type='checkbox']"
    header ='.header'
    divVipHeader = "//span[@class='ng-binding ng-scope']"


    // String Constant
    Login = "Login";
    ServerAndDisclaimer = "Server Rules and Disclaimers"
    WhatWouldLileToDoToday = "'What would you like to do today?"
    WelcomeToVipRoom = "Welcome to the IC Markets VIP Room!"
    url = "https://ic.genesiv.com/app/IC-VIP-Room/Welcome!"

    setUserName(userName) {
        const field = cy.get(this.txtUserName).clear()
        field.should('be.visible').clear().type(userName)
        return this
    }

    loginValid(username, password) {
        this.setUserName(username);
        this.setPassword(password);
        this.clickLogin();
    }

    setPassword(password) {
        const pass = cy.get(this.textPassWord)
        pass.should('be.visible')
        pass.type(password)
        return this
    }

    clickLogin() {
        const button = cy.get(this.btnLogin)
        button.contains(this.Login)
        button.click()
    }

    verifyServerAndDisclaimersText() {
        cy.get(this.clsPopUp).should('to.have', this.ServerAndDisclaimer)
    }

    verifyHeaderText() {
        cy.get(this.header).should('to.have', this.WhatWouldLileToDoToday)
    }

    verifyLandingUrlAndVipRoomText() {
        cy.get('.content:nth-child(2) > .white > .ng-binding').contains(this.WelcomeToVipRoom);
        cy.url().should('be.visible').should('eq',this.url);
    }


    verifyCheckBoxChecked() {
        cy.xpath(this.checkBoxFirstName).wait(20000).should('be.disabled')
        cy.xpath(this.checkBoxLastName).should('be.disabled')
        cy.xpath(this.checkBoxEmail).should('be.disabled')

    }

    navigate(url) {
        cy.visit(url)
    }
}

export default LoginPage;