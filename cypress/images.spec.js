describe('Opening a picture', () => {

    cy.get('image').click();

    cy.contains('Comments').should('be.visible');
})