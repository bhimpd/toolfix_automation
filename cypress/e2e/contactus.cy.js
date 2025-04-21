const { faker } = require("@faker-js/faker"); // importing faker js

const invalidData = require("../fixtures/contactus_invalid_data.json");

describe("Contact Us Page Full Flow with Valid Data", () => {
  it("should submit contact form and verify CMS data", () => {
    // Generate dynamic test data
    const fullName = "Pratik " + faker.person.middleName() + " Shrestha";
    const email = `pratik.shrestha+${faker.finance.pin(4)}@intuji.com`;
    const location = faker.location.cityName();
    const phone = faker.phone.number("2 #### ####");
    const subject = "Test From Intuji";
    const message =
      "This message has been generated from Intuji for testing purposes. Please disregard and take no action.";

    // Visit contact page and submit form
    cy.visit("/contact-us");
    cy.location("pathname").should("equal", "/contact-us");
    cy.wait(300);

    cy.addContactUsForm({ fullName, email, location, phone, subject, message });

    cy.contains("p.text-sm.font-medium.text-green-800", "Successful");
    cy.contains(
      "p.text-sm.font-medium.text-green-800",
      "Your message has been sent. We will get back to you soon."
    );

    // Now go to CMS and validate
    cy.cmsLogin();
    cy.wait(2000);
    cy.reload();
    cy.cmsVisit("/admin/contactus");

    cy.get("input[type='search']").type(email); // search by dynamic email
    cy.wait(5000);

    cy.get("tbody > tr")
      .first()
      .within(() => {
        cy.get(".la.la-cog").click();
      });

    cy.get(".dropdown-menu.show").contains("View Details").click();

    // Validate the form data matches
    cy.get("#contactus-name").should("contain", fullName);
    cy.get("#contactus-email").should("contain", email);
    cy.get("#contactus-phone").should("contain", phone);
    cy.get("#contactus-location").should("contain", location);
    cy.get("#contactus-subject").should("contain", subject);
    cy.get("#contactus-message").should("contain", message);
  });

  describe("Contact Us Form - Invalid Data Scenarios", () => {
    beforeEach(() => {
      cy.home();
      cy.get("a[title='Contact us']").click();
      cy.visit("/contact-us");
      cy.location("pathname").should("equal", "/contact-us");
    });

    invalidData.forEach((data, index) => {
      it(`Test #${index + 1} : ${data.testName}`, () => {
        if (data.fullName) {
          cy.get("input[placeholder='David Blogg']").type(data.fullName);
        }

        if (data.email) {
          cy.get("#email").type(data.email);
        }

        if (data.location) {
          cy.get("input[placeholder='Sydney']").type(data.location);
        }

        if (data.phone) {
          cy.get("input[placeholder='01 1234 2456 8793']").type(data.phone);
        }

        if (data.subject) {
          cy.get("input[placeholder='Subject Here']").type(data.subject);
        }

        if (data.message) {
          cy.get("textarea[placeholder='Message Here']").type(data.message);
        }

        // Check for disabled state BEFORE clicking
        if (data.expectedDisable || data.testName === "Invalid email format") {
          cy.get("button[type='submit']").should("be.disabled");
        } else {
          cy.get("button[type='submit']").should("not.be.disabled").click();
        }

        // Error message assertion
        if (Array.isArray(data.expectedError)) {
          data.expectedError.forEach((msg) => {
            cy.get(".error-msg").should("contain.text", msg);
          });
        } else if (typeof data.expectedError === "string") {
          cy.get(".error-msg").should("contain.text", data.expectedError);
        }
      });
    });
  });
});
