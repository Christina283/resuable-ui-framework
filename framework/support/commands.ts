/// <reference types="cypress" />

Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('#username').clear().type(username);
  cy.get('#password').clear().type(password);
  cy.contains('button', ' Login').click();
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>;
    }
  }
}

export {}