export class BasePage {
  protected visitPage(url: string) {
    cy.visit(url);
  }

  protected log(message: string) {
    cy.task('log', message);
  }

  protected assertVisible(selector: string, message?: string) {
    cy.get(selector, { timeout: 10000 }).should('be.visible').and('exist');
    if (message) {
      this.log(message);
    }
  }
}
