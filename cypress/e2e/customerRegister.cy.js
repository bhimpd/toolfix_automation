const { faker } = require("@faker-js/faker"); // importing faker js
const fName = faker.person.firstName();
const lName = faker.person.lastName();
const email = `pratik.shrestha+${lName}@webo.digital`;
const phone = "2 9876 5432";
const company = faker.company.name();
const address = "a";
const password = "Password1!";

describe("costumer registration", () => {

  it("front end registration successful scenerio", () => {

    cy.home();
    cy.contains("a span", "Register").click();
    cy.location("pathname").should("contain", "/register");
    cy.contains("h1.title", "Register an account");

   cy.fillRegistrationForm({fName, lName, email, phone, company,address, password, confirmPassword:password,
   });

    cy.contains("p.text-sm.font-medium.text-green-800","Successful");
    cy.contains("p.text-sm.font-medium.text-green-800","You have successfully registered");

  });


  it("shows error for duplicate email", () => {

    cy.home();
    cy.contains("a span", "Register").click();
    cy.location("pathname").should("contain", "/register");
    cy.contains("h1.title", "Register an account");

    const duplicateEmail = "pratik.shrestha@webo.digital";

    cy.fillRegistrationForm({fName, lName, email:duplicateEmail, phone, company,address, password, confirmPassword:password,
    });

    cy.get(".text-sm.text-red-800").contains("Errors").should("be.visible");
    cy.get(".text-sm.font-medium.text-red-700").contains("Email already exists").should("be.visible");
    
  });

  it("cms verification of registered users", () => {
    cy.cmsLogin();
    cy.log(fName + " " + lName);
    cy.contains('a.menu-link', 'Customers').click();
    cy.url().should("include", "/admin/customers");
   
    cy.get("input[type='search']").type(email);
    cy.wait(1000); 

    cy.get("table").then(($table) => {
      if ($table.find("td.dataTables_empty").length) {
        cy.get("tr td.dataTables_empty")
          .should("have.text", "No matching records found");
      } else {
        cy.contains("td", email).should("be.visible");
        cy.contains("td", fName + " " + lName).should("be.visible");
        cy.contains("td", "298765432").should("be.visible");
      }
    });
  });

  it("cms User approval", () => {
    cy.cmsLogin();

    cy.contains('a.menu-link', 'Customers').click();
    cy.url().should("include", "/admin/customers");
   
    cy.get("input[type='search']").type(email);
    cy.wait(1000); 

    cy.contains("td", email).should("be.visible");
    cy.wait(1000);
    cy.get(".btn-success").click({ force: true });
    cy.wait(1000);
    cy.get(".modal-content").should("exist");
    cy.get("#company_id").type(1285);
    cy.get(".modal-footer > .btn").click();    // click on save and approved
    cy.get(".swal2-title").should("contain.text", "User is now approved.");
    cy.wait(2000);
    cy.writeFile(
      "cypress/fixtures/userData.txt",
      `email:${email},Password:${password}\n`,
      { flag: "a" }
    );
    cy.wait(2000);
  });

  it("cms  delete costumer", () => {
    cy.cmsLogin();
    cy.log(fName + " " + lName);
    cy.get(":nth-child(13) > .menu-link").should("exist").click();
    cy.get("#datatable_filter > label > .form-control").type(email); //Add which email you want to delete
    cy.wait(1000);
    cy.get(".btn-danger > .la").click({ force: true });
    cy.get(".swal2-confirm").click();
    cy.wait(1000);
    cy.get(".swal2-title").should(
      "contain.text",
      "Customer has been deleted successfully."
    );
  });
});
