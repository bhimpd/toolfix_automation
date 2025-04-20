describe("tool serviving form", () => {
  it("toolservising form submit", () => {
    cy.home();
    cy.get('a[title="Tool Servicing"]').should('exist').and('be.visible').click();
    cy.visit("/tool-repairs");
    
    cy.get(".mr-5>span").click({ force: true });
    cy.contains("button", "FILL UP ONLINE FORM").click({ force: true });
    cy.get(".p-3").eq(0).scrollIntoView().click({ force: true });
    // cy.get('button:contains("FILL UP ONLINE FORM")').trigger('mouseover',{force:true});
    cy.get(".inputWrap > .w-full").click();
    cy.get(".mt-8 > .p-3 > .flex").click();

    cy.randomData().then((data) => {
      cy.get('input[placeholder="ACME Industries"]').type(
        "New ACME Industries"
      );
      cy.get('input[placeholder="John Blogg"]').type("John Doe");
      cy.get('input[placeholder="1440 123 456"]').type(data.phone);
      cy.get('input[name="email"]').eq(0).type(data.email);
      cy.get(".section-form-step.block > .mx-auto").click();
    });
    cy.wait(1000);
    cy.contains("button", "Go to delivery info").click();
    cy.get('input[placeholder="Enter Address"]').type("a");
    cy.wait(2000);
    cy.get(".form > .absolute > :nth-child(1)").click();
    cy.get('button[type="submit"]').contains("GO TO TOOL INFO").click();

    cy.randomData().then((data) => {
      cy.get('input[autocomplete="checkbox"]').check(); // Check the checkbox
      cy.get('input[autocomplete="tool_brand"]').type(data.company); // Fill in the tool brand
      cy.get('input[autocomplete="model"]').type(data.invoice); // Fill in the model
      cy.get('input[autocomplete="serial_no"]').type(data.serial); // Fill in the serial number
      cy.get('input[autocomplete="date_purchased"]').type("2023-09-04"); // Fill in the date
      cy.get('textarea[placeholder="Details Here"]').type(data.description); // Fill in the problem details
    });

    // Click the submit button
    cy.get('button[type="submit"]').contains("PROCEED WITH SERVICE").click();

    cy.wait(2000);
    cy.sucessMsg("Tool Service created successfully");
    cy.contains("FORM GENERATED");
  });
});
