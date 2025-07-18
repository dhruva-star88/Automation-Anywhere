class MessageBoxPage {
  visit() {
    cy.visit('https://community.cloud.automationanywhere.digital/#/home'); 
  }

  
  clickCreateMessageBox() {
    cy.contains('button', 'Create a bot…').click(); 
  }

    
   assertCreateTaskBotTitleVisible() {
    cy.contains('span', 'Create Task Bot').should('be.visible');
  }

 
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
        cy.get('input[placeholder="Search actions"]', { timeout: 10000 }) 
        .should('be.visible')
        .clear()
        .type(term);
    }


    clickSearchResult(term = 'Message box') {
        cy.get('button[name="item-button"]')
        .contains('Message box')
        .should('be.visible')
        .click();
    }

     
    enterMessage(message) {
    cy.get('div[contenteditable="true"][name="content"]', { timeout: 10000 })
        .should('be.visible')
        .clear() 
        .type(message, { force: true });
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

  
  searchAndSendMessage(message) {
    this.searchMessage();
    this.clickSearchResult();
    this.enterMessage(message);
    this.clickSave();
    this.clickClose();
  }
}

export default MessageBoxPage;
