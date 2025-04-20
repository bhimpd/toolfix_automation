describe("slider", () => {
  it("Homepage slider", () => {

    cy.cmsLogin();
    cy.cmsVisit("/admin/dashboard");
    cy.get('.card .card-header h3.card-title').should('be.visible').contains("Welcome to Dashboard");

    cy.contains("a.menu-link","Slider").click();
    cy.cmsVisit("/admin/slider/");
    cy.wait(1000);

    cy.contains("h3.card-label","List of Sliders");
    
    // for (let i = 0; i < 2; i++) {
    //   cy.get('[placeholder="Enter title"]')
    //     .eq(i)
    //     .type("title" + i);
    //   cy.get('[placeholder="Enter button text"]')
    //     .eq(i)
    //     .type("button" + i);
    //   cy.get('[placeholder="Enter button URL"]')
    //     .eq(i)
    //     .type("https://toolfix.webo.dev/" + i);
    //   cy.get('input[type="file"]')
    //     .eq(i)
    //     .selectFile('cypress/fixtures/landscape.jpg');
    //   if (i < 9) {
    //     cy.contains("button", "Add new slides").click();
    //   }
    // }

    // cy.contains("button", "Create").click();
  });
});
