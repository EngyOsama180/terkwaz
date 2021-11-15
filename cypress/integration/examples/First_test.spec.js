describe('First Test Google search ', () => {
    it('should open website successfully', () => {
        cy.visit("https://www.google.com/ncr");
    });
  
    it('Should Fill data in search field & search by input selenium webdriver ', () => {
       cy.get('.a4bIc').click().type("selenium webdriver").type('{enter}');
    });
  
    it('check third result is What is the WebDriver in selenium? ', () => {
     let x=  cy.get('.wWOJcd');
     x.eq(0).contains("What is the WebDriver in selenium?");
    });
    
  });