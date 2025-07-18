# Cypress POM Framework Assignment

## Overview

This project demonstrates a Cypress test automation framework built using the **Page Object Model (POM)** design pattern. The framework enables maintainable and scalable tests by separating page interactions from test logic.

---

## Objectives

- Implement a POM framework for Cypress
- Use a property file (`fixtures/testData.json`) to store test data
- Develop reusable test steps (e.g., login, logout)
- Apply assertions to validate expected outcomes
- Generate Mocha test reports for clear test execution visibility

---

## Use Cases

### Use Case 1: Create Message Box Task  
- Automate creation of a message box task  
- Assert successful bot creation after task creation  

### Use Case 2: Create Learning Instance  
- Automate creation of a learning instance with user-defined fields  
- Validate that the instance is created successfully  

---

## Setup Instructions

1. **Install Cypress:**

```bash
npm install cypress --save-dev
```

2. **Run Cypress:**

```bash
npx cypress open
```

### Note:
**TestFlow.cy.js** encompasses an end-to-end component testing script, integrating Mocha for comprehensive reporting and embedding assertions at critical checkpoints to ensure robust validation.
