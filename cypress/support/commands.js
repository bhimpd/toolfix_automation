const { faker } = require("@faker-js/faker");
import 'cypress-iframe';
require('cypress-get-table')

Cypress.on("uncaught:exception", (err, runnable) => {
  // prevent the error from failing the test
  return false;
});

Cypress.Commands.add("login", () => {
  cy.visit("/login");
  cy.get(".space-y-5 > :nth-child(1) > .w-full").type(
    "pratik.shrestha@webo.digital"
  );
  cy.get(":nth-child(2) > .relative > .w-full").type("a");
  cy.get("button[type='submit']").click();
  cy.visit("/");
});


Cypress.Commands.add("home", () => {
  cy.visit("/");
  cy.viewport(1366, 768);
});

Cypress.Commands.add("cmsLogin", () => {
  cy.visit(Cypress.env("CMSURL"));
  cy.viewport(1366, 768);

  cy.get(".form-group input[name='email']")
    .should("exist")
    .type(Cypress.env("CMSID"));

  cy.get(".form-group input[name='password']")
    .should("exist")
    .type(Cypress.env("CMSPW"));

  cy.contains("button", "Sign In").click();  

  cy.url().should("include", "/admin/dashboard");
  cy.get(".card-header .card-title").should("contain.text", "Welcome to Dashboard");
  
  });

Cypress.Commands.add("dbLogin", () => {
  cy.visit("https://apid.toolfix.com.au/phpmyadmin/");
  cy.get("#input_username").should("exist").type("toolfix");
  cy.get("#input_password").should("exist").type("toolfix@471");
  cy.get("#input_go").click();
});

Cypress.Commands.add("aboutUs", () => {
  cy.visit("https://toolfix.com.au/");
  cy.viewport(1366, 768);
});

Cypress.Commands.add("randomData", () => {
  const fName = faker.person.firstName();
  const lName = faker.person.lastName();
  const accountName = faker.person.jobTitle();
  const company = faker.company.name();
  const phone = "2 9876 5432";
  const description =
    "This form has been submitted for testing purposes only and should be disregarded. It does not contain any valid or actionable information. We appreciate your understanding and apologize for any inconvenience this may cause. If you have any questions or concerns, please feel free to reach out to our support team.";
  const invoice = faker.finance.pin(6);
  const email = `pratik.shrestha+${invoice}@webo.digital`;
  const address = faker.location.city();
  const postalCode = faker.location.zipCode();
  const genre = faker.music.genre();
  const serial = faker.number.hex({ length: 5 });

  return {
    baseEmail: "pratik.shrestha+30@Webo.digital",
    fName: fName,
    lName: lName,
    accountName: accountName,
    company: company,
    phone: phone,
    description: description,
    invoice: invoice,
    email: email,
    address: address,
    postalCode: postalCode,
    genre: genre,
    serial: serial,
  };
});

Cypress.Commands.add("sucessMsg", (msg) => {
  cy.contains("p.text-sm.font-medium.text-green-800", msg);
});

Cypress.Commands.add("cmsVisit", (path) => {
  cy.visit(Cypress.env("CMSURL") + path);
});


Cypress.Commands.add("fillRegistrationForm",({fName,lName,email,phone,company,address,password,confirmPassword})=>{
  cy.get(".grid > :nth-child(1) > .w-full").type(fName);
  cy.get(".grid > :nth-child(2) > .w-full").type(lName);
  cy.get(".relative #email").type(email);
  cy.get(":nth-child(3) > .w-full").type(phone);
  cy.get(":nth-child(4) > .w-full").type(company);
  cy.get('input[placeholder="Enter Address"]').type(address);
  cy.wait(2000);
  cy.get(".form > .absolute > :nth-child(1)").click();
  cy.get(":nth-child(11) > .relative > .w-full").type(password);
  cy.get(":nth-child(12) > .relative > .w-full").type(confirmPassword);
  cy.get(".mt-7 > .p-3").click();
});

Cypress.Commands.add("addContactUsForm",({fullName, email, location, phone, subject, message}) => {

  console.log({ fullName, email, location, phone, subject, message }); 

  cy.get(".form-input input[placeholder='David Blogg']").type(fullName);
  cy.get(".relative #email").type(email);
  cy.get(".form-input input[placeholder='Sydney']").type(location);
  cy.get(".form-input input[placeholder='01 1234 2456 8793']").type(phone);
  cy.get(".form-input input[placeholder='Subject Here']").type(subject);
  cy.wait(1000);
  cy.get("textarea[placeholder='Message Here']").type(message);

  cy.get("button[type='submit']").click();
});


Cypress.Commands.add("addFaqForm",({question, answer, status, sortOrder})=>{
  
  cy.get("#question").type(question);

  cy.frameLoaded('iframe');
  cy.iframe('iframe').clear().type(answer);

  cy.get("#faq_status_id").select('Draft').should('have.value','Draft');
  cy.get("#sort_order").type(sortOrder);

});

Cypress.Commands.add("getCategoriesFromCMS", () => {

  //login to DashBoard and redirects to Product Categories page.
  cy.cmsLogin();
  cy.contains("a.menu-link .menu-text", "Product Categories").click();
  cy.location("pathname").should("contain", "/product-categories");

  cy.scrapePaginatedTable((columns, map, results) => {
    const categoryName = columns.eq(map["Category Name"]).text().trim();
    const isChecked = columns.eq(map["Browse Product?"]).find('input[type="checkbox"]').prop("checked");
    const order = parseInt(columns.eq(map["Browse Order"]).find('input[type="number"]').val());

    if (isChecked) {
      results.push({ categoryName, browseOrderValue: order });
    }
  });
});


Cypress.Commands.add("scrollToSocialMedia", () => {
  
  cy.get('.grid-cols-4').scrollIntoView().should("be.visible");  // Scroll  till social media  section appears in the frame

});

Cypress.Commands.add("initalEightPosts", () => {

  cy.get('.grid-cols-4 .flex.items-center.justify-between.px-4.py-3 .flex.items-center.gap-x-2 .font-semibold.leading-6 a').should('have.length','8');

});


Cypress.Commands.add("loadMorePosts", () => {
  let totalPosts = 8;

  // Initial validation of the starting 8 posts
  cy.initalEightPosts({ timeout: 10000 }).should('have.length', totalPosts).then(() => {
      console.log(`Initial posts validated: ${totalPosts}`);
      loadPostsAndValidate();
    });

  // Recursive function to load posts and validate
  function loadPostsAndValidate() {
    cy.get('button').contains('Load More').then(($button) => {
          cy.wrap($button).should('be.visible').click();
          cy.wait(1000);

          // Wait for posts to load and validate the new count
          cy.get('.grid-cols-4 .flex.items-center.justify-between.px-4.py-3 .flex.items-center.gap-x-2 .font-semibold.leading-6 a').then(($posts) => {
            cy.wait(1000);
            const newCount = $posts.length;
            const added = newCount - totalPosts;
            
            // Log progress
            console.log(`Loaded ${added} more posts, total now: ${newCount}`);
            console.log(`newCount :: ${newCount} && added :: ${added}`);

            // Update total posts
            totalPosts = newCount;
            console.log(`totalPosts :: ${totalPosts} `);

            if (added < 8) {
              console.log("Fewer than 8 posts added. Reached the end.");
              return;
            }

            // Continue loading if the button is still available
            loadPostsAndValidate();
          });
        
      });
  }
});

Cypress.Commands.add("getAboutUsLists", () => {

  //login to DashBoard and redirects to about us page.
  cy.cmsLogin();
  cy.contains("a.menu-link .menu-text", "About us").click();
  cy.location("pathname").should("contain", "/aboutus");
  cy.contains('.card-custom .card-title h3.card-label',"About us Lists");

  cy.scrapePaginatedTable((columns, map, results) => {
    const title = columns.eq(map["Title"]).text().trim();
    const description = columns.eq(map["Description"]).text().trim();
    const imageUrl = columns.eq(map["ImageUrl"]).text().trim();
    const isChecked = columns.eq(map["Status"]).find('input[type="checkbox"]').prop("checked");
    const order = parseInt(columns.eq(map["Order"]).text().trim());
    const redirectUrl = columns.eq(map["Redirect Url"]).text().trim();

    if (isChecked) {
      results.push({ title, description, imageUrl, order, redirectUrl });
    }
  });
});


Cypress.Commands.add("getContactFromCMS", () =>{

  //login to DashBoard and redirects to Our Location Page.
  cy.cmsLogin();
  cy.contains("a.menu-link .menu-text", "Our Locations").click();
  cy.location("pathname").should("contain", "/locations");
  cy.contains('.card-custom .card-title h3.card-label',"List of our locations");

  cy.scrapePaginatedTable((columns, map, results) =>{
    const name = columns.eq(map["Name"]).text().trim();
    const tag = columns.eq(map["Tag"]).text().trim();
    const address = columns.eq(map["Address"]).text().trim();
    const openingHour = columns.eq(map["Opening Hour"]).text().trim();
    const phoneNumber = columns.eq(map["Phone Number"]).text().trim();
    const order = columns.eq(map["Order"]).text().trim();
    const redirectUrl = columns.eq(map["Redirect Url"]).text().trim();
    const status = columns.eq(map["Status"]).find('input[type="checkbox"]').prop("checked");
    const headOffice = columns.eq(map["HeadOffice"]).find('input[type="checkbox"]').prop("checked");

    if (status) {
      results.push({ name, tag, address, openingHour, phoneNumber, order, redirectUrl,status,headOffice });
    }  
  });
});



//generic function to get headers, row and paginate.
Cypress.Commands.add("scrapePaginatedTable", (rowProcessor) => {
  const columnIndexMap = {};
  const results = [];

  cy.get("table#datatable thead tr th").each(($th, index) => {
    const headerText = $th.text().trim();
    columnIndexMap[headerText] = index;
  }).then(() => {
    function scrapePageAndGoNext() {
      cy.wait(300).then(() => {
        cy.get("table#datatable tbody tr").each(($row) => {
          const $columns = $row.find("td");
          rowProcessor($columns, columnIndexMap, results);
        }).then(() => {
          cy.get(".pagination li#datatable_next").then(($nextBtn) => {
            const isDisabled = $nextBtn.hasClass("disabled");

            if (!isDisabled) {
              cy.wrap($nextBtn).find("a").click({ force: true }).then(() => {
                return cy.wait(500).then(() =>scrapePageAndGoNext()); // recursive
              });
            } else {
              return cy.wrap(results);
            }
          });
        });
      });
    }

    scrapePageAndGoNext();
  });
});





// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })