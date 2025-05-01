// cypress/support/pageObjects/MediaLibraryPage.js

class MediaLibraryPage {
  uploadImage() {
    cy.contains(".input-group-append button", "Upload").click();
    cy.contains(".nav-text.viewMediaTab", "Media Library").click();
    cy.get("#3b89a936-d164-45f2-bc4c-3d65e2df5b30").check({ force: true });
    cy.get("#insert-btn").click();
  }
}

export default new MediaLibraryPage();
