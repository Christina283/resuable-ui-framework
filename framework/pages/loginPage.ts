import { BasePage } from '../pages/basePage';

export class LoginPage extends BasePage {
  private readonly usernameInput = '#username';
  private readonly passwordInput = '#password';
  private readonly loginButton = 'button';
  private readonly successMessage = '.flash.success';
  private readonly errorMessage = '.flash.error';
  private readonly secureAreaHeading = 'h2';
  private readonly loginForm = '#login';

  visit() {
    // visit the login path relative to Cypress `baseUrl`
    this.visitPage('/login');
    this.assertVisible(this.loginForm, 'Opened login page');
  }

  enterUsername(username: string) {
    cy.get(this.usernameInput).clear().type(username);
    return this;
  }

  enterPassword(password: string) {
    cy.get(this.passwordInput).clear().type(password);
    return this;
  }

  submit() {
    cy.contains(this.loginButton, ' Login').click();
    return this;
  }

  assertSuccessMessage() {
    this.assertVisible(this.successMessage, 'Login succeeded');
  }

  assertErrorMessage() {
    this.assertVisible(this.errorMessage, 'Login failed');
  }

  assertOnSecureArea() {
    this.assertVisible(this.secureAreaHeading, 'Secure Area');
  }
}
