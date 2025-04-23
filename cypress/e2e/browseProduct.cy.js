describe("Browse Product Session", () => {
  it("should display only browse_product=true categories in correct order", () => {
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
});
