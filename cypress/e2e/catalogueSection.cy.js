describe("Catalogue Section", () => {

    it("Should verify all the catalogue Details from CMS slider > catalogue menu", () => {

        let activeSliders = [];

        cy.getSlidersFromCMS().then((sliderLists) => {

            // console.log("SLIDER LISTS CATEGORIES:: ", sliderLists);
            sliderLists.forEach(($list) => {
                if ($list.type === "Catalogue") {
                    // Find the row that contains "Catalogue" and click the "View and Add Slides" link in that row
                    cy.get("table#datatable tbody tr")
                        .contains($list.type) 
                        .parents('tr') 
                        .within(() => {
                            cy.get("a[title='View and Add Slides']").click(); 
                        });

                    // Verifying the id of the catalogue and page
                    cy.url().should("include", "8a2da3d8-3ffc-4dec-97e4-e7c30f8de100"); 
                    cy.contains(".card-header h3.card-title", "Slider");
                    cy.wait(2000);

                    // Iterate through each card-body element
                    cy.get(".slide_elements .card.mb-2.mt-5.mx-5.slide .card-body").each(($list, index) => {
                        // console.log("Sliders Lists :: ", $list);

                        // Verify these required fields
                        cy.wrap($list).find("label[for='sort_order']").should('exist').and('have.text', "Sort Order");
                        cy.wrap($list).find("label[for='resource_url']").should('exist').and('have.text', "Resource URL");
                        cy.wrap($list).find("label[for='image']").should('exist').and('have.text', "Image");
                        cy.wrap($list).find("label[for='status']").should('exist').and('have.text', "Inactive/Active");

                        // Check if the status checkbox is checked (i.e., active)
                        cy.wrap($list).find("input[type='checkbox']").then(($status) => {
                            const isActive = $status.prop('checked');

                            if (isActive) {
                                // Construct the name attribute dynamically using the index
                                const sortOrderName = `slides[${index}][sort_order]`;
                                const resourceUrlName = `slides[${index}][resource]`;

                                // Extract values using .then() to resolve Chainable commands
                                cy.wrap($list).find(`input[name='${sortOrderName}']`).then(($sortOrderInput) => {
                                    const sortOrder = $sortOrderInput.attr('value');
                                    
                                    cy.wrap($list).find(`input[name='${resourceUrlName}']`).then(($resourceInput) => {
                                        const resourceUrl = $resourceInput.attr('value');
                                        
                                        cy.wrap($list).find("img").then(($img) => {
                                            const imageUrl = $img.attr('src'); 

                                            // Collecting the data in an object
                                            const sliderData = {
                                                sortOrder: sortOrder,
                                                resourceUrl: resourceUrl,
                                                imageUrl: imageUrl
                                            };

                                            // Push to the activeSliders array
                                            activeSliders.push(sliderData);
                                            console.log("Before Sorting::", activeSliders);

                                             // After processing, sort the array by sortOrder in ascending order
                                             activeSliders.sort((a, b) => a.sortOrder - b.sortOrder);

                                            // After processing, print the collected active sliders
                                            console.log("Active Sliders: ", activeSliders);

                                        });
                                    });
                                });
                            }

                            
                        });
                    }).then(() => {
                        console.log("Sorted Slider Data: ", activeSliders);

                        //login to user homepage and scroll to Catalogue Section
                        cy.home();
                        cy.get('.catalogue > .mx-auto > .text-center').scrollIntoView();
                        
                         // Check that the length of activeSliders matches the length of slick-dots li
                         cy.get(".catalogue ul.slick-dots li").should('have.length', activeSliders.length);                      
                        
                         //check the active sliders resourceUrl
                         activeSliders.forEach((activeSlider, index) => {

                            cy.get(".slick-track .relative > a").eq(index).then(($a) => {

                                cy.wrap($a).should('have.attr', 'href', activeSlider.resourceUrl);
                                // cy.wrap($a).find('img').should('have.attr', 'src').and('include', activeSlider.imageUrl);
                                cy.wrap($a).invoke('removeAttr', 'target');
                                cy.wrap($a).click({force:true});
                                cy.wait(1000);
                                cy.go('back');
                                cy.get('.catalogue > .mx-auto > .text-center').scrollIntoView();

                            });
                        });
                        
                    });
                }
            });
        });
    });
});