describe("Footer Section", () => {
  beforeEach(() => {
    //login to DashBoard and redirects to Settings  page.
    cy.cmsLogin();
    cy.contains("a.menu-link .menu-text", "Settings").click();
    cy.location("pathname").should("contain", "/settings");
    cy.contains(".card-custom .card-title h3.card-label", "Settings");
  });

  it("should verify the existence of logo and description", () => {
    //verify the text and then click there
    cy.get("#headingThree3 .card-title")
      .should("exist")
      .then(($footer) => {
        cy.wrap($footer)
          .invoke("text")
          .then((text) => {
            expect(text.trim()).to.equal("Footer Settings");
          });
      });

    cy.get("#headingThree3 .card-title").click();

    //verify the existence of required field i.e logo and description
    cy.get("#collapseThree3 label[for='footer_logo']")
      .should("exist")
      .and("have.text", "Footer logo");
    cy.get("#collapseThree3 label[for='footer_description']")
      .should("exist")
      .and("have.text", "Footer Description");

    // fetching the value and storing them to validate in the homepage
    let footerLogo, footerDescription;

    cy.get("#collapseThree3 input[name='footer_logo']").then(($logoUrl) => {
      footerLogo = $logoUrl.val();
    });
    cy.get("#collapseThree3 textarea[name='footer_description']")
      .then(($description) => {
        footerDescription = $description.val();
      })
      .then(() => {
        cy.home();
        cy.get(".footer-main").scrollIntoView();

        // Verify the logo and description text in the footer on the homepage
        cy.get(".footer-main")
          .find("p.text-left")
          .should("have.text", footerDescription);
        cy.get(".footer-main").find("img").should("exist");
        cy.get(".footer-main").find("img").click();
        cy.url("/");
      });
  });

  it.only("Should verify the existence of Useful Links", () => {
    const usefulLinks = [];

    //verify the text and then click there
    cy.get("#headingUsefulLinks .card-title")
      .should("exist")
      .then(($footer) => {
        cy.wrap($footer)
          .invoke("text")
          .then((text) => {
            expect(text.trim()).to.equal("Useful Links");
          });
      });

    cy.get("#headingUsefulLinks .card-title").click();

    cy.get("#useful-links-repeater .input-group.repeater-item.mb-2")
      .each(($links, index) => {
        const title = $links.find("input[type='text']").val();
        const url = $links.find("input[type='url']").val();

        // Log the title and URL
        cy.log(`Link ${index + 1} Title:`, title);
        cy.log(`Link ${index + 1} URL:`, url);

        // Optionally, store them in an array for further use
        usefulLinks.push({ title, url });
      })
      .then(() => {
        cy.home();
        cy.get(".footer-main").scrollIntoView();

        cy.contains(
          ".footer-wrap .title.mb-4.text-lg.font-bold",
          "Useful Links"
        );

        cy.get(".ml-0 ul.space-y-4 li").should(
          "have.length",
          usefulLinks.length
        );

        const linksToVisit = [];

        // First: collect all the links safely
        cy.get(".ml-0 ul.space-y-4 li")
          .each(($li, index) => {
            const expectedTitle = usefulLinks[index].title;
            const expectedUrl = usefulLinks[index].url;

            cy.wrap($li)
              .find("a")
              .should("have.attr", "title", expectedTitle)
              .and("have.attr", "href", expectedUrl)
              .then(($a) => {
                linksToVisit.push({
                  url: $a.attr("href"),
                  title: expectedTitle,
                });
              });
          })
          .then(() => {
            // After collecting all links, now visit them one by one
            linksToVisit.forEach((link) => {
              cy.visit(link.url);

              cy.url().should("include", link.url);

              cy.visit("/");

              // Make sure page reloads properly
              cy.get(".footer-main").scrollIntoView();
            });
          });
      });
  });
});
