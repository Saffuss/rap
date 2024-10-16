describe('Homepage', () => {
    it('should display a popup when a user clicks on an image', () => {
        cy.visit('/');

        cy.get('.image-wrapper').should('exist').scrollIntoView().should('be.visible').click();
    
        cy.get('.pop-up').contains('Comments').scrollIntoView().should('be.visible');
    })
})