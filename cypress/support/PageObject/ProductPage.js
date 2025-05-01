// cypress/support/pageObjects/ProductPage.js

class ProductPage {
  navigateToProductCategories() {
    cy.contains("a.menu-link .menu-text", "Product Categories").click();
    cy.location("pathname").should("contain", "/product-categories");
    cy.contains(
      ".card .card-header .card-title h3.card-label",
      "List of Product Categories"
    );
  }

  clickNewCategory() {
    cy.get(".card-toolbar > .btn").click();
    cy.location("pathname").should("contain", "/create");
    cy.contains(
      ".row .card .card-header .card-title  h3.card-label",
      "Product Category Details"
    );
  }

  verifyRequiredFields() {
    cy.get(".form-group label[for='name']").should("exist").and("be.visible");
    cy.get(".form-group label[for='slug']").should("exist").and("be.visible");
  }

  fillProductDetails({
    menuOrder,
    browseOrder,
    myobId,
    productName,
    slug,
    description,
  }) {
    cy.get("#order").type(menuOrder);
    cy.get("#browse_order").type(browseOrder);
    cy.get("#myob_id").type(myobId);
    cy.get("#name").type(productName);
    cy.get("#slug").type(slug);
    cy.get("#desc").type(description);
    cy.get('label[for="is_featured"]').click();
  }

  selectParentCategory() {
    cy.get("#parent_id").select("2 - Drilling ()");
  }

  toggleMenuOptions() {
    cy.get('label[for="show_on_menu"]').click();
    cy.get('label[for="show_on_homepage"]').click();
  }

  fillSeoDetails({ urlKey, metaTitle, metaKeyword, metaDescription }) {
    cy.get("#seo #slug").type(urlKey);
    cy.get("#meta_title").type(metaTitle);
    cy.get("#meta_keywords").type(metaKeyword);
    cy.iframe().find("p").should("be.visible").type(metaDescription);
  }

  submitForm() {
    cy.get(".card-footer button[type='submit']").click();
    cy.get("#swal2-title", { timeout: 1000 })
      .should("be.visible")
      .and("have.text", "Slide has been added successfully.");
  }

  searchProduct(productName) {
    cy.wait(1000);
    cy.get("input[type='search']").type(productName);
  }

  verifyRegisteredData({ myobId, productName, menuOrder, browseOrder }) {
    cy.get(".odd > :nth-child(2)").should("have.text", myobId);
    cy.get(".odd > :nth-child(4)").should("have.text", productName);
    cy.get("input.is_featured").should("be.checked");
    cy.get(".odd > :nth-child(6)").should("have.text", "Drilling");
    cy.get("input.show_on_menu").should("be.checked");
    cy.get('input[name="order"]').should("have.value", menuOrder);
    cy.get('input[name="browse_order"]').should("have.value", browseOrder);
  }
}

export default new ProductPage();
