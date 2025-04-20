describe("Lesson to be learned", () => {
  it("selectors hub", () => {
    cy.visit("www.toolfix.com.au");

    //get element by Tag name

    cy.get("input");

    //get element by ID (Note: remember to include # for id)

    cy.get("#email");

    //get element by class name(Note : remembner to include . for class name)
    //cy.get(".border-1 h-10 w-full");

    //get element by attribute name
    cy.get("[placeholder]");

    //get element by attribute name and value

    cy.get('[placeholder="Enter Email Here *"]');

    //get element by class value (should provide entire class value)

    cy.get(
      '[class="border-1 h-10 w-full border-gray-e2e py-3 pl-10 pr-3 text-sm text-black outline-none placeholder:text-gray-a7a"]'
    );

    //get element by tagname attribute by value

    cy.get('input[placeholder="Enter Email Here *"]');

    //get element by two different attrinute
    cy.get('input[placeholder="Enter Email Here *"]');

    // The recomended way
    //add data-cy="inputEmail"
  });
});
