import { RegistrationPage } from "../PageObjects/RegistrationPage"

describe('registeration page suite', () => {
 
  it('Register Email  Duplicate',()=> {
    cy.fixture('const').then((data) => {
    const register = new RegistrationPage();
    register.navigate(data.genesivRegisterUrl);
    register.setFirstName(data.firstName);
    register.setLastName(data.lastName);
    register.setEmailId(data.duplicateEmailId);
    register.setRegisterUsername(data.registerUserName);
    register.setPassword(data.registerPassword);
    register.setConfirmPassword(data.confirmPassword);
    register.clickRegister();
    register.VerifyDuplicateEmailid();
    })
  })

  it('Register Username Duplicate',()=> {
    cy.fixture('const').then((data) => {
    const register = new RegistrationPage();
    register.navigate(data.genesivRegisterUrl);
    register.setFirstName(data.firstName);
    register.setLastName(data.lastName);
    register.setEmailId(data.emailId);
    register.setRegisterUsername(data.registerUserName);
    register.setPassword(data.registerPassword);
    register.setConfirmPassword(data.confirmPassword);
    register.clickRegister();
    register.VerifyDuplicateUserName();
    })
  })
})