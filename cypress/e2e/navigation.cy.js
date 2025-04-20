const categories = require('../fixtures/rivet_nuts_categories.json');

describe("navigation", () => {
  context("nav", () => {

    beforeEach(() => {
      cy.home();
      cy.get('.nav > .flex-wrap > :nth-child(1) > .flex')
        .should('exist')
        .contains("Rivet Nuts")
        .click();

      cy.location("pathname").should("eq", "/products/rivet-nuts");
      cy.contains('h1.whitespace-nowrap', 'Rivet Nuts').should('be.visible');
    });

    categories.forEach(({ title, path }) => {
      it(`should navigate to ${title} page`, () => {
        cy.get(`.product-cat-item a[title="${title}"]`).click();
        cy.location('pathname').should('eq', path);
        cy.go('back');
        cy.location("pathname").should("eq", "/products/rivet-nuts");
    });
    });

  });
});
