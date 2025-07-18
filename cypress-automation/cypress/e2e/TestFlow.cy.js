import LoginPage from '../pages/LoginPage';
import MessageBoxPage from '../pages/MessageBoxPage';
import LearningInstancePage from '../pages/LearningInstancePage';
import testData from '../fixtures/testData.json';

describe('Message Box Automation', () => {
  const loginPage = new LoginPage();
  const messageBoxPage = new MessageBoxPage();
  const learningInstancePage = new LearningInstancePage();

  before(() => {
    loginPage.login(testData.username, testData.password);
    cy.get('.homepage-welcome-title', { timeout: 20000 })
      .should('be.visible')
      .and('contain', 'WELCOME TO AUTOMATION ANYWHERE');
  });

  it('should create a message box and verify bot creation, then create a learning instance', () => {
    messageBoxPage.visit();
    cy.wait(2000);
    messageBoxPage.createMessageBox(testData.messageBox.botName);
    messageBoxPage.assertBotCreated();
    cy.wait(2000);

    // Wait or assert page transition before next flow if needed
    cy.url().should('match', /\/bots\/repository\/private\/files\/task\/\d+\/edit$/);

    messageBoxPage.searchAndSendMessage(testData.messageBox.message);
    cy.wait(2000);


    cy.contains('.pathfinder-items__item-label', 'Home')
    .should('be.visible')
    .click();
    cy.wait(4000);

    // Learning Instance flow
    learningInstancePage.clickDocumentAutomationFromAiMenu();
    cy.url({ timeout: 15000 }).should('include', '#/modules/cognitive/iqbot/pages/learning-instances');
    cy.wait(2000);
    learningInstancePage.createLearningInstance(testData.learningInstance.name, testData.learningInstance.dropdownName, testData.learningInstance.optionText);
    cy.wait(2000);
    learningInstancePage.AddFieldandCreate(testData.learningInstance.fieldName, testData.learningInstance.fieldLabel);

    cy.contains('.pathfinder-items__item-label', 'Home')
    .should('be.visible')
    .click();
    cy.wait(4000);

    


  });

  after(() => {
    loginPage.logout();
  });
});
