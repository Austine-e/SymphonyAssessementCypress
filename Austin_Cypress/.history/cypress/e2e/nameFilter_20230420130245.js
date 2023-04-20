import {nameFilter} from "../fixtures/selectors";

describe("Given I want to search for a product", function () {
  before(function () {
      cy.visit('/')
    });

    it("NAMEFILTER - I Should be able to filter ", function () {
      cy.get(nameFilter.nameFilter).click()
      cy.get(nameFilter.nameFilter).select('Name (Z to A)')

      
    }) 
    
})
