const using = require('jasmine-data-provider');
const data = require('./../../fixtures/sample.data').testData;
const timeout = require('./../../fixtures/sample.data').timeout;
const commonData = require('./../../fixtures/sample.data').commonData;
 
given('I open Google page', () => {
  cy.visit('/');
});

then(`I see {string} url`, title => {
    cy.contains('type').click();
    expectoPatronum(cy.url(), 'to.include', title);
});

when(`I put {string} into search input`, query => {
    cy.get('input.gsfi').first()
        .type(`${query}`);
    cy.wait(timeout.short);
    cy.get('ul[role="listbox"] > li').first().click();
});

then(`I see {string} results searched`, resultsCount => {
    expectoPatronum(cy.get('h3 > a'), 'to.have.length', resultsCount);
});

then(`first result title is {string}`, title => {
    cy.get('h3 > a').first().then(el => {
        expect(el.text()).to.eq(title);
    });
});

when('I switch to videos tab', title => {
    cy.contains('Filmy').click();
});

then(`I see {string} results shown`, resultsCount => {
    expectoPatronum(cy.get('a img'), 'to.have.length', resultsCount);
});

given('I search query {string}', (query) => {
    cy.searchQuery(query);
});

function expectoPatronum(element, condition, param) {
    element.should(condition.replace('to.', ''), param);
};