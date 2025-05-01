// cypress/e2e/product/createProduct.cy.js

import ProductPage from '../../support/pageObjects/ProductPage';
import MediaLibraryPage from '../../support/pageObjects/MediaLibraryPage';
import { faker } from '@faker-js/faker';

describe("Create Product and Verify", () => {
  const menuOrder = faker.number.int({ min: 1, max: 10 });
  const browseOrder = faker.number.int({ min: -99, max: 99 });
  const myobId = faker.number.int({ min: 1000, max: 9999 });

  const baseProductName = faker.commerce.productName();
  const timestamp = Date.now();
  const productName = `${baseProductName} ${timestamp}`;
  const slug = productName.toLowerCase().replace(/\s+/g, "-");
  const description = faker.commerce.productDescription();
  const urlKey = slug;
  const metaTitle = faker.commerce.productName();
  const metaKeyword = slug;
  const metaDescription = faker.commerce.productDescription();

  it("Should create the Product with valid data and validate it", () => {
    cy.cmsLogin();
    ProductPage.navigateToProductCategories();
    ProductPage.clickNewCategory();
    ProductPage.verifyRequiredFields();
    ProductPage.fillProductDetails({ menuOrder, browseOrder, myobId, productName, slug, description });
    MediaLibraryPage.uploadImage();
    ProductPage.toggleMenuOptions();
    ProductPage.selectParentCategory();
    ProductPage.fillSeoDetails({ urlKey, metaTitle, metaKeyword, metaDescription });
    ProductPage.submitForm();
    ProductPage.searchProduct(productName);
    ProductPage.verifyRegisteredData({ myobId, productName, menuOrder, browseOrder });
  });
});
