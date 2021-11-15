describe('Second Test check image successfully uploaded  ', () => {
    it('should open website successfully', () => {
        cy.visit('https://the-internet.herokuapp.com/');
    });

    it('Should Click on File Upload', () => {
        cy.get('a[href*="/upload"]').click();
    });

    it('Should uploade image', () => {
        const filepath = '\img.jpg';
        cy.get('input[type="file"]').attachFile(filepath);
        cy.get('#file-submit').click();
    });

    it('Should check image Upload', () => {
       cy.get('#uploaded-files').contains('img.jpg');
    });


});