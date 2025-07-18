import LoginPage from '../pages/LoginPage';
import testData from '../fixtures/testData.json';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  it('should login successfully', () => {
    loginPage.login(testData.username, testData.password);
    // Assertion after login: check for welcome title on dashboard
    cy.get('.homepage-welcome-title', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'WELCOME TO AUTOMATION ANYWHERE');
  });

})