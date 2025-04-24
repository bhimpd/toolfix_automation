describe("About Us Section Validation", () => {
  it("Should validate About Us section on homepage and verify redirect URLs", () => {
    cy.getAboutUsLists().then((abousUsLists) => {
      const sorted = [...abousUsLists].sort((a, b) => a.order - b.order);

      cy.home();
      cy.get(":nth-child(8) > .mx-auto > .text-center")
        .scrollIntoView()
        .should("be.visible");

      // Store URLs to visit later
      const linksToVisit = [];

      // Step 1: Validate card content and collect hrefs
      cy.get(
        ".grid.grid-cols-3.gap-5.l\\:grid-cols-1 > .flex.grid-cols-2.flex-col.space-y-4.bg-white.p-4.l\\:grid.l\\:p-0.sm\\:flex.sm\\:p-4"
      )
        .should("have.length", sorted.length)
        .each(($card, index) => {
          const expected = sorted[index];

          // Description
          cy.wrap($card).find("p").should("contain.text", expected.description);

          // Title + URL
          cy.wrap($card)
            .find("h4 a")
            .should("have.text", expected.title)
            .and("have.attr", "href", expected.redirectUrl)
            .invoke("attr", "href")
            .then((href) => {
              linksToVisit.push(href);
            });
        })
        .then(() => {
          // Step 2: After content check, loop over URLs and validate navigation
          linksToVisit.forEach((href) => {
            cy.visit(href);
            cy.url().should("include", href);

            // Return back to About Us section for next check
            cy.go("back");

            // Ensure About Us section is reloaded before next iteration
            cy.get(":nth-child(8) > .mx-auto > .text-center")
              .scrollIntoView()
              .should("be.visible");
          });
        });
    });
  });
});
