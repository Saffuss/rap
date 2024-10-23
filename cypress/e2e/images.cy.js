describe('PopUp', () => {
    it('should display when a user clicks on an image', () => {
        cy.visit('/');

        cy.get('.jim').eq(1).should('exist').click();
    
        cy.get('.pop-up').contains('Comments').scrollIntoView().should('be.visible');
    })

    it('should close when a user clicks on the x button', () => {
        //show popup
        cy.visit('/');
        cy.get('.jim').eq(1).should('exist').click();
        cy.get('.pop-up').contains('Comments').scrollIntoView().should('be.visible');
        //click on x
        cy.contains('button', 'X').should('exist').click();
        cy.get('pop-up').should('not.exist');
    })
})