Cypress.on('uncaught:exception', (err, runnable) => {
   // prevent the error from failing the test
   return false;
 });
 import 'cypress-plugin-stripe-elements';

const { faker } = require('@faker-js/faker');
const fName=faker.person.firstName();
const email=`pratik.shrestha+${fName}@webo.digital`
const phone='2 9876 5432';
const company=faker.company.name();
const message="This is test message generated for testing purpouse. Please ignore this message"

describe("cart sbmission",()=>{


   it("cart checkout",()=>{
       cy.login()
       cy.wait(4000)
       cy.visit('https://new.toolfix.com.au/checkout')
       cy.get('#address_id > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
       cy.get('#react-select-address_id-option-0').click()
       cy.get('#shipping_method > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
       cy.get('#react-select-shipping_method-option-0').click()
       cy.get('.h-20').type(message)
       cy.contains("button","Go to billing address").click()
       cy.get('.block > .mb-5').scrollIntoView()
       cy.get(':nth-child(1) > #address_id > .css-13cymwt-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer').click()
       cy.get('#react-select-address_id-option-1').click()
       cy.contains("button","Go to payment options").click()
       cy.get('.block > :nth-child(2) > :nth-child(1) > .relative').click()
       cy.get('iframe').then(($iframe)=>{
         const iframe =$iframe.contents();
         cy.wrap(iframe.find('input[name="cardnumber"]')).type('4242424242424242');
       })
        



//        const product=['eibenstock-diamond-core-drill-wetdry-etn1623','apex-rivet-nut-steel-lf-632unc-nsl6-32','apex-rivet-nut-tool-adaptor-m6-m10-cap-a250']
//        product.forEach(products=>{
//          cy.log(products)
//       cy.visit(`https://new.toolfix.com.au/${products}`)
//        cy.wait(4000)
//        cy.location("pathname").should("equal",`/${products}`)
//        cy.contains('button', 'Add to Cart').click({force:true});
//       cy.wait(2000)
//       cy.contains('Your item has been successfully added.').should('exist');
//        })

//    let itemCount;

// cy.get('a[title="My Cart"] span') //Number displayed in the cart icon
//   .invoke('text')
//   .then(text => {
//     itemCount = Number(text);
//     cy.wrap(itemCount).as('count');
//   });
//   cy.get('a[title="My Cart"]').click();
   
//   cy.get('@count').then(count => {
//     cy.log(count); // Logging the value
//     cy.get('tbody tr').should('have.length', count+count); // Using the value in an assertion
//   });

//   cy.contains("span","Proceed with Checkout").click({force:true})
  




   
   })
})