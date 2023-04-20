import {login} from "../fixtures/selectors";


 
describe("Given I want to search for a product", function () {
  before(function () {
      cy.visit('/')
    });

    it("LOGIN - I Should be able to LOGIN", function () {
      cy.get(login.emailField).type('standard_user')
      cy.get(login.passwordField).type('secret_sauce')
      cy.get(login.loginBtn).click()
    }) 
    
})
