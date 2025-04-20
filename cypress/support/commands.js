const { faker } = require("@faker-js/faker");

Cypress.on("uncaught:exception", (err, runnable) => {
  // prevent the error from failing the test
  return false;
});

Cypress.Commands.add("login", () => {
  cy.visit("/login");
  cy.get(".space-y-5 > :nth-child(1) > .w-full").type(
    "pratik.shrestha@webo.digital"
  );
  cy.get(":nth-child(2) > .relative > .w-full").type("a");
  cy.get("button[type='submit']").click();
  cy.visit("/");
});


Cypress.Commands.add("home", () => {
  cy.visit("/");
  cy.viewport(1366, 768);
});

Cypress.Commands.add("cmsLogin", () => {
  cy.visit(Cypress.env("CMSURL"));
  cy.viewport(1366, 768);

  cy.get(".form-group input[name='email']")
    .should("exist")
    .type(Cypress.env("CMSID"));

  cy.get(".form-group input[name='password']")
    .should("exist")
    .type(Cypress.env("CMSPW"));

  cy.contains("button", "Sign In").click();  

  cy.url().should("include", "/admin/dashboard");
  cy.get(".card-header .card-title").should("contain.text", "Welcome to Dashboard");
  
  });

Cypress.Commands.add("dbLogin", () => {
  cy.visit("https://apid.toolfix.com.au/phpmyadmin/");
  cy.get("#input_username").should("exist").type("toolfix");
  cy.get("#input_password").should("exist").type("toolfix@471");
  cy.get("#input_go").click();
});

Cypress.Commands.add("aboutUs", () => {
  cy.visit("https://toolfix.com.au/");
  cy.viewport(1366, 768);
});

Cypress.Commands.add("randomData", () => {
  const fName = faker.person.firstName();
  const lName = faker.person.lastName();
  const accountName = faker.person.jobTitle();
  const company = faker.company.name();
  const phone = "2 9876 5432";
  const description =
    "This form has been submitted for testing purposes only and should be disregarded. It does not contain any valid or actionable information. We appreciate your understanding and apologize for any inconvenience this may cause. If you have any questions or concerns, please feel free to reach out to our support team.";
  const invoice = faker.finance.pin(6);
  const email = `pratik.shrestha+${invoice}@webo.digital`;
  const address = faker.location.city();
  const postalCode = faker.location.zipCode();
  const genre = faker.music.genre();
  const serial = faker.number.hex({ length: 5 });

  return {
    baseEmail: "pratik.shrestha+30@Webo.digital",
    fName: fName,
    lName: lName,
    accountName: accountName,
    company: company,
    phone: phone,
    description: description,
    invoice: invoice,
    email: email,
    address: address,
    postalCode: postalCode,
    genre: genre,
    serial: serial,
  };
});

Cypress.Commands.add("sucessMsg", (msg) => {
  cy.contains("p.text-sm.font-medium.text-green-800", msg);
});

Cypress.Commands.add("cmsVisit", (path) => {
  cy.visit(Cypress.env("CMSURL") + path);
});


Cypress.Commands.add("fillRegistrationForm",({fName,lName,email,phone,company,address,password,confirmPassword})=>{
  cy.get(".grid > :nth-child(1) > .w-full").type(fName);
  cy.get(".grid > :nth-child(2) > .w-full").type(lName);
  cy.get(".relative #email").type(email);
  cy.get(":nth-child(3) > .w-full").type(phone);
  cy.get(":nth-child(4) > .w-full").type(company);
  cy.get('input[placeholder="Enter Address"]').type(address);
  cy.wait(2000);
  cy.get(".form > .absolute > :nth-child(1)").click();
  cy.get(":nth-child(11) > .relative > .w-full").type(password);
  cy.get(":nth-child(12) > .relative > .w-full").type(confirmPassword);
  cy.get(".mt-7 > .p-3").click();
});

Cypress.Commands.add("addContactUsForm",({fullName, email, location, phone, subject, message}) => {

  console.log({ fullName, email, location, phone, subject, message }); 

  cy.get(".form-input input[placeholder='David Blogg']").type(fullName);
  cy.get(".relative #email").type(email);
  cy.get(".form-input input[placeholder='Sydney']").type(location);
  cy.get(".form-input input[placeholder='01 1234 2456 8793']").type(phone);
  cy.get(".form-input input[placeholder='Subject Here']").type(subject);
  cy.wait(1000);
  cy.get("textarea[placeholder='Message Here']").type(message);

  cy.get("button[type='submit']").click();
});


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
