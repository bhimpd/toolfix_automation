describe("Social Media Post Section", () => {
  beforeEach(() => {
    cy.home();
    cy.scrollToSocialMedia();
  });

  it("Should show a maximum of 8 posts initially if more exist", () => {
    cy.initalEightPosts();
  });

  it("Should show Load More Button, if more post exists", () => {
    cy.contains("button", "Load More").should("be.visible");
  });

  it("Should load 8 more posts on clicking Load More button", () => {
    cy.reload(true);
    cy.loadMorePosts();
  });

  it("Should redirect to the individual correct url", () => {
    cy.initalEightPosts();

    cy.get(
      ".grid-cols-4 .flex.items-center.justify-between.px-4.py-3 .flex.items-center.gap-x-2 .font-semibold.leading-6 a"
    ).then(($links) => {
      const hrefs = [];

      $links.each((index, el) => {
        hrefs.push(el.getAttribute("href"));
      });

      hrefs.forEach((href, index) => {
        cy.log(`Checking link #${index + 1}: ${href}`);

        cy.get(
          ".grid-cols-4 .flex.items-center.justify-between.px-4.py-3 .flex.items-center.gap-x-2 .font-semibold.leading-6 a"
        )
          .eq(index)
          .invoke("removeAttr", "target")
          .click();

        // Confirm URL
        cy.url().should("include", href);

        cy.go("back");
        cy.wait(1000);
      });
    });
  });
});
