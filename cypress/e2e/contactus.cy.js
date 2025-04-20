const { faker } = require("@faker-js/faker"); // importing faker js

describe("Contact Us Page Full Flow", () => {
  it("should submit contact form and verify CMS data", () => {
    // Generate dynamic test data
    const fullName = "Pratik " + faker.person.middleName() + " Shrestha";
    const email = `pratik.shrestha+${faker.finance.pin(4)}@intuji.com`;
    const location = faker.location.cityName();
    const phone = faker.phone.number("2 #### ####");
    const subject = "Test From Intuji";
    const message = "This message has been generated from Intuji for testing purposes. Please disregard and take no action.";

    // Visit contact page and submit form
    cy.visit("/contact-us");
    cy.location("pathname").should("equal", "/contact-us");
    cy.wait(300);

    cy.addContactUsForm({ fullName, email, location, phone, subject, message });

    cy.contains("p.text-sm.font-medium.text-green-800", "Successful");
    cy.contains("p.text-sm.font-medium.text-green-800", "Your message has been sent. We will get back to you soon.");

    // Now go to CMS and validate
    cy.cmsLogin();
    cy.wait(2000);
    cy.reload();
    cy.cmsVisit("/admin/contactus");

    cy.get("input[type='search']").type(email); // search by dynamic email
    cy.wait(5000);

    cy.get("tbody > tr").first().within(() => {
      cy.get(".la.la-cog").click();
    });

    cy.get(".dropdown-menu.show")
      .contains("View Details")
      .click();

    // Validate the form data matches
    cy.get("#contactus-name").should("contain", fullName);
    cy.get("#contactus-email").should("contain", email);
    cy.get("#contactus-phone").should("contain", phone);
    cy.get("#contactus-location").should("contain", location);
    cy.get("#contactus-subject").should("contain", subject);
    cy.get("#contactus-message").should("contain", message);
  });
});
