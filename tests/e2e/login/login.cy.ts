import { LoginPage } from '../../../framework/pages/loginPage';

describe('Login flow', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.task('log', '=== Test Start: Login flow - beforeEach ===');
    loginPage.visit();
  });

  it('logs in with valid credentials', () => {
    cy.fixture('loginUsers').then((users) => {
      cy.task('log', `Using valid credentials: username=${users.valid.username} password=***masked***`);
      loginPage
        .enterUsername(users.valid.username)
        .enterPassword(users.valid.password)
        .submit();

      loginPage.assertSuccessMessage();
      loginPage.assertOnSecureArea();
      cy.task('log', 'Valid-login test completed');
    });
  });

  it('shows an error for invalid credentials', () => {
    cy.fixture('loginUsers').then((users) => {
      cy.task('log', `Using invalid credentials: username=${users.invalid.username} password=***masked***`);
      loginPage
        .enterUsername(users.invalid.username)
        .enterPassword(users.invalid.password)
        .submit();

      loginPage.assertErrorMessage();
      cy.task('log', 'Invalid-login test completed');
    });
  });

  afterEach(() => {
    cy.task('log', '=== Test End: Login flow - afterEach ===');
  });
});
