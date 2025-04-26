describe ("Contact Us Section", ()=>{
    it("Should verify all the Contact Details from CMS lcoation menu", () =>{
        cy.getContactFromCMS().then((contactList) => {
            console.log("Contact List :: ", contactList);
            const sorted = [...contactList].sort((a, b) => a.order - b.order);

            cy.home();
            cy.get(':nth-child(7) > .mx-auto > .text-center')
              .scrollIntoView()
              .should("be.visible"); //Scroll to contact Us section

            // Store URLs to visit later
            const linksToVisit = [];

          // Step 1: Validate card content and collect hrefs
          cy.get('.grid-cols-\\[0\\.75fr_1fr\\]').should("have.length", sorted.length).each(($card,index)=> {
            const expected = sorted[index];

            console.log(expected);

            // confirm Name
            cy.wrap($card).find("h4").should("contain.text", expected.name);

            //confirm addresss
            cy.get('.space-y-5 > :nth-child(1) > .text-lg').should("contain.text", "location")
            cy.wrap($card).find(".space-y-5 > :nth-child(1) > .flex > :nth-child(2)").should("contain.text", expected.address);

             //confirm opening Hours
             cy.wrap($card)
             .find(".space-y-5 > :nth-child(2) > .flex > :nth-child(2)")
             .invoke("html") //  Get raw HTML so we can fix <br>
             .then((rawHtml) => {
               // Replace <br> tags with a space & g refers to global flag measn replace all occurences not just first one.
               const rawWithSpace = rawHtml.replace(/<br>/g, ' ');
               const actualText = Cypress.$("<div>").html(rawWithSpace).text(); // creates the empty div in memory not in DOM. and extract only text
           
               expect(actualText).to.include(expected.openingHour);
             });
           
             //confirm phone numbers
             cy.get(':nth-child(3) > .text-lg').should("contain.text", "Phone Number")
             cy.wrap($card).find(".space-y-5 > :nth-child(3) > .flex > :nth-child(2)").should("contain.text", expected.phoneNumber);

             //confirm iframe map existence
            //  cy.frameLoaded("iframe");
            //  cy.iframe("iframe");

             // confirm Get Direction exists and redrect to the expected URL.
             cy.wrap($card).find("a").should("have.attr","href", expected.redirectUrl).invoke("removeAttr", "target") .invoke("attr", "href").then((href) => {
                linksToVisit.push(href);
              });
          })
          .then(() => {
            // Step 2: After content check, loop over URLs and validate navigation
            linksToVisit.forEach((href) => {
              cy.visit(href);
              cy.url().should("include", "www.google.com/maps/place/Toolfix+Fasteners/");
  
              // Return back to About Us section for next check
              cy.go("back");
  
              cy.get(':nth-child(7) > .mx-auto > .text-center')
              .scrollIntoView()
              .should("be.visible"); //Scroll to contact Us section

            });

            })
        });
    });
});