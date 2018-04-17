Cypress.Commands.add('searchQuery', (query) => {
    cy.get('input.gsfi').first()
        .clear()
        .type(query);
    cy.wait(500);
    cy.get('ul[role="listbox"] > li').first().click();
});