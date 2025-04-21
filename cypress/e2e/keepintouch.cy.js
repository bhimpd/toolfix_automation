const socialLinks = require("../fixtures/social_links.json");

beforeEach(() => {
  cy.home();
  cy.get(".section-subscription").scrollIntoView().should("be.visible");
});

describe("Keep In Touch", () => {
  socialLinks.forEach((data, index) => {
    it(`Test case ${index + 1} : ${data.name}`, () => {
        
      // Step 1: Locate the social media link and validate attributes
      cy.get(`.keep-in-touch a[href="${data.href}"]`)
        .should("have.attr", "target", "blank") 
        .should("have.attr", "href", data.href)
        .then(($el) => {
          const url = $el.prop("href"); 
          cy.log(`Captured URL: ${url}`);

          // Step 2: Remove target="blank" , click and open in same tab as cypress dont allow multiple tab to open
          cy.wrap($el)
            .invoke("removeAttr", "target") 
            .click();

          // Step 3: Validate the opened URL
          cy.url().should("include", data.href);

          // Step 4: Navigate back to homepage
          cy.home();

          // Step 5: Perform CMS validation
          cy.cmsLogin(); 
          cy.contains(".menu-item a span.menu-text", "Settings").click();
          cy.location("pathname").should("contain", "/settings");
          cy.contains(".card-title h3.card-label", "Settings");

          cy.contains(".card-title.collapsed", "Social Media").click();

          // valdiate the url captured from homepage and adminpanel
          cy.get(`#collapseFour4 input[value="${url}"]`)
            .should("exist")
            .and("have.value", url);
        });
    });
  });
});