import {login} from "../fixtures/selectors";


 
describe("Given I want to search for a product", function () {
  before(function () {
      cy.visit('/')
    });

    it("LOGIN - I Should be able to LOGIN", function () {
      cy.get(login.emailField).click()
      cy.get(login.passwordField).type('Iphone15 Flip')
      cy.get(login.loginBtn).click()
    }) 
    
})
