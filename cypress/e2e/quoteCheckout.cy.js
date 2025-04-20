Cypress.on("uncaught:exception", (err, runnable) => {
  // prevent the error from failing the test
  return false;
});

const { faker } = require("@faker-js/faker");
const fName = faker.person.firstName();
const email = `pratik.shrestha+${fName}@webo.digital`;
const phone = "2 9876 5432";
const company = faker.company.name();
const message =
  "This is test message generated for testing purpouse. Please ignore this message";

describe("quote sbmission", () => {
  it("quote sumbission", () => {
    cy.login();
    cy.wait(4000);
    cy.visit("/apex-hand-rivet-nut-tool-m3-m6-a6");
    cy.wait(4000);
    cy.location("pathname").should(
      "equal",
      "/apex-hand-rivet-nut-tool-m3-m6-a6"
    );
    cy.get('input[type="number"]').type("1", { force: true });
    cy.contains("button", "Add to quote").click({ force: true });
    cy.wait(2000);
    cy.contains("Your quote has been successfully added.").should("exist");

    cy.get(".mr-auto > :nth-child(2) > a > .flex").click();
    cy.get(".space-y-5 > :nth-child(2) > .w-full").scrollIntoView();
    cy.get(".space-y-5 > :nth-child(2) > .w-full").type(company, {
      force: true,
    });
    cy.get(":nth-child(3) > .w-full").type(fName, { force: true });
    cy.get(".space-y-5 > .email-field > .relative > #email").type(email, {
      force: true,
    });
    cy.get(":nth-child(5) > .w-full").type(phone, { force: true });
    cy.get(":nth-child(6) > .px-4").type(message, { force: true });
    cy.get(".mt-7 > .p-3").click({ force: true });
    cy.contains("The quote request has been sent successfully").should("exist");
    //asserting quote is empty after submission
    cy.contains("h4", "Your Quote is empty").should("exist");
  });
});
