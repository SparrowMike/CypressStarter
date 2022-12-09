export class LoginPage {
    txtUserName = "#username";
    textPassWord = "#password";
    btnLogin = ".submit";
    clsPopUp = ".field ng-scope"
    checkBoxFirstName = "//input[@id='First Name' and @type='checkbox']"
    checkBoxLastName = "//input[@id='Last Name' and @type='checkbox']"
    checkBoxEmail = "//input[@id='Email' and @type='checkbox']"

    // String Constant
    Login = "Login";
    ServerAndDisclaimer = "Server Rules and Disclaimers"

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