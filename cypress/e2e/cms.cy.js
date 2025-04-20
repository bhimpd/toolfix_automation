const { faker } = require("@faker-js/faker"); // importing faker js
const name = faker.person.fullName();
const position = faker.person.jobTitle();
const company = faker.company.name();
const reviewNum = faker.finance.pin(4);
const review = faker.lorem.paragraph(2);

describe("cms", () => {
  context.skip("review section", () => {
    it("create review", () => {
      cy.log(name);
      cy.cmsLogin();
      cy.get(":nth-child(9) > .menu-link").click();
      cy.get("#newReview").should("exist").click();
      cy.get("#reviewed_by").type(name);
      cy.get("#position").type(position);
      cy.get("#company").type(company);
      cy.get("#ckeditor").type(review);
      cy.get("#reviews_source_id").select("Custom");
      cy.get("#status").select("Enabled");
      cy.get("#review-submit").click();
      cy.wait(2000);
      cy.get(".swal2-popup").should("exist");
      cy.wait(3000);
    });

    it("front end CREATE verification", () => {
      cy.log(name);
      cy.aboutUs();
      cy.get(".flex > .pl-10").scrollIntoView();
      cy.contains(".slick-slide", `${name}`)
        .find(".overflow-y-auto")
        .should("contain", `${review}`);
      cy.wait(3000);
    });

    it("Cms update review to draft", () => {
      cy.log(name);
      cy.cmsLogin();
      cy.get(":nth-child(9) > .menu-link").click();
      cy.get("#datatable_filter > label > .form-control").type(name);
      cy.contains("td", name) // Find the cell containing 'name'
        .parent("tr") // Move up to the parent row element
        .find(".la-edit") // Find the edit button
        .click(); // Click on the edit button
      cy.get("#reviewed_by").type("1");
      cy.get("#status").select("Disabled");
      cy.get("#review-submit").click();
      cy.wait(2000);
      cy.get(".swal2-popup").should("exist");
      cy.wait(3000);
    });

    it("frontend Draft verification", () => {
      cy.log(name);
      cy.aboutUs();
      cy.get(".flex > .pl-10").scrollIntoView();
      cy.contains(".slick-slide", name).should("not.exist");
      cy.wait(3000);
    });

    it("Cms update review", () => {
      cy.log(name + 1);
      cy.cmsLogin();
      cy.get(":nth-child(9) > .menu-link").click();
      cy.get("#datatable_filter > label > .form-control").type(name);
      cy.contains("td", name) // Find the cell containing 'name'
        .parent("tr") // Move up to the parent row element
        .find(".la-edit") // Find the edit button
        .click(); // Click on the edit button
      cy.get("#reviewed_by").type("1");
      cy.get("#status").select("Enabled");
      cy.get("#review-submit").click();
      cy.wait(2000);
      cy.get(".swal2-popup").should("exist");
      cy.wait(3000);
    });

    it("front end UPDATE verification", () => {
      cy.log(name + 1);
      cy.aboutUs();
      cy.get(".flex > .pl-10").scrollIntoView();
      cy.contains(".slick-slide", `${name}1`)
        .find(".overflow-y-auto")
        .should("contain", `${review}`);
      cy.wait(3000);
    });

    it("Delete review", () => {
      cy.log(name + 1);
      cy.cmsLogin();
      cy.get(":nth-child(9) > .menu-link").click();
      cy.get("#datatable_filter > label > .form-control").type(name + 1);
      cy.contains("td", name + 1) // Find the cell containing 'name'
        .parent("tr") // Move up to the parent row element
        .find(".la-trash") // Find the edit button
        .click();
      cy.wait(1000);
      cy.get(".swal2-confirm").click();
      cy.wait(1000);
      cy.get(".swal2-popup").should("exist");
      cy.wait(3000);
    });

    it("front end Delete verification", () => {
      cy.log(name + 1);
      cy.aboutUs();
      cy.get(".flex > .pl-10").scrollIntoView();
      cy.contains(".slick-slide", `${name}+1`).should("not.exist");
    });
  });

  context("faq", () => {
    it("Cms create faq", () => {
      cy.cmsLogin();
      cy.get(":nth-child(3) > .menu-link").click();
      cy.get("#newFaq").click();
      cy.get("#question").type(name);

      cy.get("#faq_status_id").select("Published");
      cy.get("#sort_order").type(1);
      //cy.get("#faq-submit").click();
      cy.wait(1000);
      cy.iframe()
        .find(".cke_wysiwyg_frame")
        .then(($iframe) => {
          const body = $iframe.contents().find("body");

          // Clear any existing content (if needed)
          body.clear();

          // Type the desired content
          body.type("Your text goes here");
        });
    });
  });
});
