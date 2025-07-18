class LoginPage {
  visit() {
    cy.visit('https://community.cloud.automationanywhere.digital/#/login?'); 
  }

  enterUsername(username) {
    cy.get('input[name="username"]', { timeout: 10000 }).type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password); 
  }

  clickLogin() {
    cy.get('button[type="submit"]').click(); 
  }

  login(username, password) {
    this.visit();
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  logout() {
    cy.get('button[name="mysettings"]').click();
    cy.contains('button', 'Log out').click();

  }


}

export default LoginPage;
