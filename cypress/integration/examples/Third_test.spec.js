describe('Third Test ', () => {
  it('should open website successfully', () => {
      cy.visit("https://the-internet.herokuapp.com/");
  });

  it('Should Click on Dynamic Loading  ', () => {
      //access using href link
      cy.get('a[href*="/dynamic_loading"]').click();
      //anathor way to access using contains
      //cy.contains("Dynamic Loading").click();
  });

  it('Should open example two', () => {
      //access using href link
      cy.get('a[href*="/dynamic_loading/2"]').click();
      //anathor way to access using contains
      //cy.contains("Example 2: Element rendered after the fact").click();
  });

  it('should click on start button', () => {
    //access using ID
      cy.get('#start').contains("Start").click();
  });

  it('should find hello world successfully', () => {
      cy.wait(2000);
      cy.contains("h4","Hello World");
  });
});