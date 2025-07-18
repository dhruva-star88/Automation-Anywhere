import 'cypress-iframe';
import "cypress-real-events/support";


class LearningInstancePage {
  visit() {
    cy.visit('https://community.cloud.automationanywhere.digital/#/home');
  }

  clickDocumentAutomationFromAiMenu() {
    cy.get('button[name="ai"]', { timeout: 10000 })
      .should('be.visible')
      .then(($btn) => {
        if ($btn.attr('aria-expanded') === 'false') {
          cy.wrap($btn).click();
        }
      });

    cy.get('a[name="module-cognitive-iqbot-learning-instances"]', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });
  }


  clickOnLearningInstance() {
  cy.frameLoaded('iframe.modulepage-frame');

  cy.iframe('iframe.modulepage-frame')
    .contains('span.clipped-text__string.clipped-text__string--for_presentation', 'Create Learning Instance', { timeout: 10000 })
    .should('be.visible')
    .click();
}



enterName(name) {

  cy.iframe('iframe.modulepage-frame')
    .find('input[name="name"]', { timeout: 15000 })
    .should('be.visible')
    .invoke('removeAttr', 'tabindex')
    .clear()
    .type(name);
}


  
  openDropdown(dropdownName) {
  cy.iframe('iframe.modulepage-frame')
    .find(`div.rio-select-input[data-name="${dropdownName}"]`)
    .within(() => {
      cy.get('button[data-path="RioSelectInputQuery.toggle-button"]')
        .first()
        .click({ force: true });
    });
  cy.wait(700);  
}


selectOptionGlobally(optionText) {
  cy.iframe('iframe.modulepage-frame')
  .find('div[data-path="RioSelectInput.Dropdown.option-button"]')
  .contains(optionText)
  .should('be.visible')
  .click({ force: true });
}

  clickNextButton() {
    cy.iframe('iframe.modulepage-frame')
      .contains('button', 'Next', { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  clickAddField() {
    cy.iframe('iframe.modulepage-frame')
      .contains('button', 'Add a field', { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  enterFieldName(fieldName) {
    cy.iframe('iframe.modulepage-frame')
      .find('input[name="name"]', { timeout: 10000 })
      .should('be.visible')
      .invoke('removeAttr', 'tabindex')
      .clear()
      .type(fieldName);
  }

  enterFieldLabel(fieldLabel) {
    cy.iframe('iframe.modulepage-frame')
      .find('input[name="displayName"]', { timeout: 10000 })
      .should('be.visible')
      .click()
      .clear()
      .type(fieldLabel);
  }

  clickConfidenceThreshold() {
    cy.iframe('iframe.modulepage-frame')
      .find('input[name="confidenceThreshold"]', { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  clickCreateButton() {
cy.iframe('iframe.modulepage-frame')
  .find('button[aria-label="Create"]')
  .should('not.be.disabled')
  .click({ force: true });

  }

  deleteInstance(){
    cy.get('button.datatable-actions-button').click();


cy.contains('button', 'Delete').should('be.visible').click();

  }



  createLearningInstance(name, dropdownName, optionText) {
    this.clickOnLearningInstance();
    cy.wait(2000);
    this.enterName(name);
    this.openDropdown(dropdownName);
  this.selectOptionGlobally(optionText);
    this.clickNextButton();
  }

  AddFieldandCreate(fieldName, fieldLabel) {
    this.clickAddField();
    this.enterFieldName(fieldName);
    this.enterFieldLabel(fieldLabel);
    this.clickConfidenceThreshold();
    cy.wait(2000);
    this.clickCreateButton();
    cy.wait(4000);
    // this.deleteInstance();

  }
}

export default LearningInstancePage;
