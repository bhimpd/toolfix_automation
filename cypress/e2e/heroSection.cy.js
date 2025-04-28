describe("Catalogue Section", () => {
    it("Should verify all the hero Sliders Details from CMS slider > Homepage menu", () => {
        let activeHomeSliders = [];

        cy.getSlidersFromCMS().then((sliderLists) => {
            sliderLists.forEach(($list) => {
                if ($list.type === "Homepage") {
                    // Find the row that contains "Home" and click the "View and Add Slides" link in that row
                    cy.get("table#datatable tbody tr")
                        .contains($list.type)
                        .parents('tr')
                        .within(() => {
                            cy.get("a[title='View and Add Slides']").click();
                        });

                    // Verifying the id of the Home Sliders and page
                    cy.url().should("include", "2ba9622b-85d4-4a13-b323-990a0db5fbb1");
                    cy.contains(".card-header h3.card-title", "Slider");
                    cy.wait(2000);

                    // Iterate through each card-body element
                    cy.get(".slide_elements .card.mb-2.mt-5.mx-5.slide .card-body").each(($list, index) => {
                        // Verify these required fields
                        cy.wrap($list).find("label[for='sort_order']").should('exist').and('have.text', "Sort Order");
                        cy.wrap($list).find("label[for='title']").should('exist').and('have.text', "Title");
                        cy.wrap($list).find("label[for='button_text']").should('exist').and('have.text', "Button Text");
                        cy.wrap($list).find("label[for='button_url']").should('exist').and('have.text', "Button URL");
                        cy.wrap($list).find("label[for='image']").should('exist').and('have.text', "Image");
                        cy.wrap($list).find("label[for='status']").should('exist').and('have.text', "Inactive/Active");

                        // Check if the status checkbox is checked (i.e., active)
                        cy.wrap($list).find("input[type='checkbox']").then(($status) => {
                            const isActive = $status.prop('checked');

                            if (isActive) {
                                // Construct the name attribute dynamically using the index
                                const sortOrderName = `slides[${index}][sort_order]`;
                                const titleName = `slides[${index}][title]`;
                                const buttonTextName = `slides[${index}][button_text]`;
                                const buttonUrlName = `slides[${index}][button_url]`;

                                // Extract values using .then() to resolve Chainable commands
                                cy.wrap($list).find(`input[name='${sortOrderName}']`).then(($sortOrderInput) => {
                                    const sortOrder = $sortOrderInput.attr('value');

                                    cy.wrap($list).find(`input[name='${titleName}']`).then(($titleInput) => {
                                        const titleName = $titleInput.attr('value');

                                        cy.wrap($list).find(`input[name='${buttonTextName}']`).then(($buttonTextInput) => {
                                            const buttonText = $buttonTextInput.attr('value');

                                            cy.wrap($list).find(`input[name='${buttonUrlName}']`).then(($buttonUrlInput) => {
                                                const buttonUrl = $buttonUrlInput.attr('value');

                                                cy.wrap($list).find("img").then(($img) => {
                                                    const imageUrl = $img.attr('src');

                                                    // Collecting the data in an object
                                                    const sliderData = {
                                                        sortOrder:  parseInt(sortOrder),
                                                        titleName: titleName,
                                                        buttonText: buttonText,
                                                        buttonUrl: buttonUrl,
                                                        imageUrl: imageUrl
                                                    };

                                                    // Push to the activeHomeSliders array
                                                    activeHomeSliders.push(sliderData);

                                                    // Print the collected active sliders
                                                    cy.log("Active Sliders Before Sorting::: ", JSON.stringify(activeHomeSliders));
                                                });
                                            });
                                        });
                                    });
                                });
                            }
                        });
                    }).then(() => {

                        activeHomeSliders.sort((a, b) => a.sortOrder - b.sortOrder); 

                        cy.log("Sorted HomeSlider Data: ", JSON.stringify(activeHomeSliders));


                        //login to user homepage
                        cy.home();

                        if(activeHomeSliders.length === 1){
                            cy.get(".hero ul.slick-dots li").should('not.exist');                      
                        }
                        else{
                            cy.get(".hero ul.slick-dots li").should('have.length', activeHomeSliders.length);                      
                        }
                                                                            
                        //check the active sliders resourceUrl
                        // activeHomeSliders.forEach((activeSlider, index) => {
                        //     cy.log("actve :: ",JSON.stringify(activeSlider));
                        //     cy.log("index :: ", index);

                        //     cy.clock();
                        //     cy.get(".hero .slick-slider.h-full.slick-initialized .line-clamp-3").eq(index).then(($homeData) => {
                        //         cy.wrap($homeData).should('have.text', activeSlider.titleName);
                        //     });
                        //     cy.get(".hero .mx-auto.flex.items-center.gap-x-4 text-white").eq(index).then(($homeData) => {
                        //         cy.wrap($homeData).should('have.text', activeSlider.buttonText);
                        //     });

                        //     cy.get(".hero .mx-auto.flex.items-center.gap-x-4 text-white").eq(index).then(($homeData) => {
                        //         cy.wrap($homeData).should('have.attr','href', activeSlider.buttonUrl);
                        //     });

                        //     cy.tick(2000);
                        // });
                        
                         
                        
                    });;
                }
            });
        });
    });
});