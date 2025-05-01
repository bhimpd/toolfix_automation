describe("Browse Product Session", () => {
  it.skip("should display only browse_product=true categories in correct order", () => {
    // Custom Cypress command to fetch categories from CMS
    cy.getCategoriesFromCMS().then((cmsCategories) => {
      console.log("CMS Category :: ", cmsCategories);

      cy.home();
      cy.get(".bg-white h2.w-full.text-center")
        .scrollIntoView()
        .should("be.visible");

      // Sort the CMS categories based on the `browseOrderValue`
      const sorted = [...cmsCategories].sort(
        (a, b) => a.browseOrderValue - b.browseOrderValue
      );
      console.log("SORETD LISTE :: ", sorted);

      // Extract the category names from the sorted list to compare with UI
      const expectedNames = sorted.map((cat) => cat.categoryName);
      console.log("EXPECTED NAMES HERE :: ", expectedNames);

      // Assert that each category name on the UI matches the sorted CMS list
      cy.get(".text-lg.font-semibold.uppercase.leading-7").each(
        ($el, index) => {
          expect($el.text().trim()).to.eq(expectedNames[index]);
        }
      );
    });
  });

  it("Should create the Product with the valid data and validate it ", () => {
    cy.createAndVerifyProduct();
  });

  it("Should create the Product wth valid data, verify it and then  delete it and veriify it as well", () => {
    cy.reload();
    cy.createAndVerifyProduct();

    cy.get("a[title='Delete']").click();
    cy.get("#swal2-title").should("have.text", "Are you sure?");
    cy.get("#swal2-content").should(
      "have.text",
      'You won"t be able to revert this!'
    );
    cy.get(".swal2-actions button.swal2-confirm.swal2-styled")
      .should("have.text", "Yes, delete it!")
      .click();
    cy.get("h2.swal2-title#swal2-title")
      .should("exist")
      .and("have.text", "Product category has been deleted successfully.");

    cy.get(".dataTables_empty").should(
      "have.text",
      "No matching records found"
    );
  });
});
