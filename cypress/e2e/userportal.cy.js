Cypress.on("uncaught:exception", (err, runnable) => {
  // prevent the error from failing the test
  return false;
});
describe("cms", () => {
  it("add new address", () => {
    cy.login();
    cy.wait(1000);
    
    cy.get('a[title="My Profile"]').click();
    cy.location("pathname").should("equal", "/my-profile");
    cy.get(":nth-child(2) > .flex > .text-base").click({ force: true });
    cy.wait(1000);

    cy.contains("button", "Add New Address").click({ force: true });
    cy.location("pathname").should("equal", "/my-address");


    cy.contains("button", "Add New Address").click({force:true});
    // cy.get(".mt-7 > .p-3").click();

    //assertions
    // cy.get(".grid > :nth-child(1) > .error-msg")
    //   .should("exist")
    //   .contains("Please enter your first name");
    // cy.get(".grid > :nth-child(2) > .error-msg")
    //   .should("exist")
    //   .contains("Please enter your last name");
    // cy.get(":nth-child(3) > .error-msg")
    //   .should("exist")
    //   .contains("Please enter your valid phone number");
    // cy.get(".email-field > .error-msg")
    //   .should("exist")
    //   .contains("Please enter your valid email address");
    // cy.get(".space-y-5 > :nth-child(6)")
    //   .should("exist")
    //   .contains("Please enter your address");


    //type data into input box
    cy.randomData().then((data) => {
      cy.get("input[placeholder='David']").type(data.fName);
      cy.get("input[placeholder='Mitchell']").type("test");
      cy.get("input[placeholder='Company Name']").type(data.company);
      cy.get("input[placeholder='01 1234 2456 8793']").type(data.phone);
      cy.get(".space-y-5 > .email-field > .relative > #email").type(data.email);
      cy.get('input[placeholder="Enter Address"]').type(data.address);
      cy.wait(2000);
      cy.get(".form > .absolute > :nth-child(1)").click();  //selecting the address and clicking it

      cy.get(".mt-7 > .p-3").click();   //clicking "add new address" button
      cy.wait(2000);

      //verifing the added new first name is listed on the first row
      cy.get("table tr td p").first().invoke("text").then((text) => {
        expect(text.toUpperCase()).to.include(`${data.fName.toUpperCase()} TEST`);
      });
      
    });

    cy.sucessMsg("Your address has been successfully added.", { timeout:1000 });
  });
});
