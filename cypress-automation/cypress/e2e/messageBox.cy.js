import LoginPage from '../pages/LoginPage';
import MessageBoxPage from '../pages/MessageBoxPage';
import testData from '../fixtures/testData.json';

describe('Message Box Automation', () => {
  const loginPage = new LoginPage();
  const messageBoxPage = new MessageBoxPage();

  before(() => {
    loginPage.login(testData.username, testData.password);
    cy.get('.homepage-welcome-title', { timeout: 20000 })
      .should('be.visible')
      .and('contain', 'WELCOME TO AUTOMATION ANYWHERE');
  });

  it('should create a message box and verify bot creation', () => {
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

  });

  // after(() => {
  //   loginPage.logout();
  // });
});
