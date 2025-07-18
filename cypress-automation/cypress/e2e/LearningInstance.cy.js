import LoginPage from '../pages/LoginPage';
import LearningInstancePage from '../pages/LearningInstancePage';
import testData from '../fixtures/testData.json';

describe('Message Box Automation', () => {
  const loginPage = new LoginPage();
  const learningInstancePage = new LearningInstancePage();

  before(() => {
    loginPage.login(testData.username, testData.password);
    cy.get('.homepage-welcome-title', { timeout: 20000 })
      .should('be.visible')
      .and('contain', 'WELCOME TO AUTOMATION ANYWHERE');
  });

  it('create a learning instance', () => {

    // Learning Instance flow
    learningInstancePage.visit();
    cy.url().then(url => {
  cy.log('Current URL:', url);
});
    learningInstancePage.clickDocumentAutomationFromAiMenu();
    cy.url({ timeout: 15000 }).should('include', '#/modules/cognitive/iqbot/pages/learning-instances');
    cy.wait(2000);
    learningInstancePage.createLearningInstance(testData.learningInstance.name, testData.learningInstance.dropdownName, testData.learningInstance.optionText);
    cy.wait(2000);
    learningInstancePage.AddFieldandCreate(testData.learningInstance.fieldName, testData.learningInstance.fieldLabel);


  });

  // after(() => {
  //   loginPage.logout();
  // });
});
