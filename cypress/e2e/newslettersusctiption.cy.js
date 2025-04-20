const { faker } = require("@faker-js/faker"); // importing faker js
const email = `pratik.shrestha+${faker.finance.pin(4)}@webo.digital`;

describe("newsletter", () => {
  it("Newsletter negative testcase", () => {
    cy.home();
    cy.wait(1000);
    cy.log(email);
    cy.get("#email").scrollIntoView();
    cy.get(".p-3").click({ force: true });
    cy.wait(1000);
    cy.get(".error-msg").should(
      "contain.text",
      "Please enter your valid email address"
    );
  });

  it("Newsletter susctiption postitve", () => {
    cy.home();
    cy.wait(1000);
    cy.log(email);
    cy.get("#email").scrollIntoView();
    cy.get("#email").should("exist").type(email);
    cy.get(".p-3").click({ force: true });
    cy.wait(4000);
    cy.get(".p-3").click({ force: true });
    cy.contains("p", "Successful").should("exist");
    //cy.get('.ml-3 > :nth-child(1)')
    cy.log("Newsleter sucessfully susctibed in cms");
  });

  it("Newsletter cms verification", () => {
    cy.cmsLogin();
    cy.wait(1000);
    cy.get(":nth-child(5) > .menu-link").should("exist").click();
    cy.get("#datatable_filter > label > .form-control")
      .should("exist")
      .type(email);
    cy.contains("tr", email);
    cy.log("newsletter verified in cms");
  });

  /*
    it("Newsletter DB verification",()=>{
    cy.dbLogin()
    cy.contains('a', 'toolfix').click();
    cy.contains('a', 'newsletters').click();
    cy.get('select[name="sql_query"]').select('PRIMARY (ASC)',{force:true});
     })

*/
});
