import {search} from "../fixtures/selectors";


 
describe("Given I want to search for a product", function () {
  before(function () {
      cy.visit('/')
    });

    it("SEARCH - I Should be able to search for a product", function () {
      cy.get(search.searchField).click()
      cy.get(search.searchField).type('Iphone15 Flip')
      cy.get(search.searchBtn).click()
    }) 
    
})
