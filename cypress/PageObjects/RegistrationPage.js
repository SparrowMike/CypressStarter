export class RegistrationPage
{
    txtFirstName = "#first_name";
    txtLastName = "#last_name";
    txtEmail = "#email";
    txtUserName = "#user_name";
    txtPassword = "#newpassword";
    txtConfirmPassword ="#confirmpassword";
    btnregister = ".submit";
    divError = ".errored";

    // String Constant
    Register = "REGISTER";
    ErrrorEmailMsg = "This email address is already taken.";
    ErrrorUserNameMsg = "This username is already taken.";


    navigate(registerUrl){
        cy.visit(registerUrl)
    }

    setFirstName(fName)
    {
        const field = cy.get(this.txtFirstName).clear()
        field.should('be.visible').type(fName)
        return this
    }

    setLastName(lastName)
    {
        const field = cy.get(this.txtLastName).clear()
        field.should('be.visible').type(lastName)
        return this
    }

    setEmailId(emailID)
    {
        const field = cy.get(this.txtEmail).clear()
        field.should('be.visible').type(emailID)
        return this
    }

    setRegisterUsername(userName)
    {
        const field = cy.get(this.txtUserName).clear()
        field.should('be.visible').type(userName)
        return this
    }

    setPassword(password)
    {
        const field = cy.get(this.txtPassword).clear()
        field.should('be.visible').type(password)
        return this
    }

    setConfirmPassword(confirmPassword)
    {
        const field = cy.get(this.txtConfirmPassword).clear()
        field.should('be.visible').type(confirmPassword)
        return this
    }

    clickRegister(){
        const button = cy.get(this.btnregister)
        button.contains(this.Register)
        button.click()
    }

    VerifyDuplicateEmailid(){
        cy.get(this.divError).should('contain',this.ErrrorEmailMsg)
    }

    VerifyDuplicateUserName(){
        cy.get(this.divError).should('contain',this.ErrrorUserNameMsg)
    }
    
}

export default RegistrationPage;