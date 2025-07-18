class MessageBoxPage {
  visit() {
    cy.visit('https://community.cloud.automationanywhere.digital/#/home'); // update URL if needed
  }

  // Clicks the button to create a message box
  clickCreateMessageBox() {
    cy.contains('button', 'Create a bot…').click(); // selects button by its text
  }

    // Asserts that the "Create Task Bot" title is visible
   assertCreateTaskBotTitleVisible() {
    cy.contains('span', 'Create Task Bot').should('be.visible');
  }

  // Enters the bot name 
   enterTitle(botName) {
    cy.get('input[name="name"]').type(botName); 
  }

  submit() {
    cy.get('button[name="submit"]').click(); 
  }

  assertBotCreated() {
    cy.get('.toasttray')
      .should('be.visible');
}


    searchMessage(term = 'message') {
        cy.get('input[placeholder="Search actions"]', { timeout: 10000 }) // update selector to your actual search bar selector
        .should('be.visible')
        .clear()
        .type(term);
    }

    // Click the search result containing the term 'message'
    clickSearchResult(term = 'Message box') {
        cy.get('button[name="item-button"]')
        .contains('Message box')
        .should('be.visible')
        .click();
    }

     // Enter the message content in the appropriate input/textarea
    enterMessage(message) {
    cy.get('div[contenteditable="true"][name="content"]', { timeout: 10000 })
        .should('be.visible')
        .clear()  // clear existing content
        .type(message, { force: true }); // force true helps in tricky cases
    }

    // Click the Save button
    clickSave() {
        cy.get('button[name="save"]', { timeout: 10000 }).should('be.visible').click();
        cy.wait(3000);
    }

    // Click the close button
    clickClose() {
        cy.get('button[name="close"]', { timeout: 10000 }).should('be.visible').click();

    }


  createMessageBox(botName) {
    this.clickCreateMessageBox();
    this.assertCreateTaskBotTitleVisible();
    this.enterTitle(botName);
    this.submit();
  }

  // Composite method to handle the whole flow after navigation
  searchAndSendMessage(message) {
    this.searchMessage();
    this.clickSearchResult();
    this.enterMessage(message);
    this.clickSave();
    this.clickClose();
  }
}

export default MessageBoxPage;
