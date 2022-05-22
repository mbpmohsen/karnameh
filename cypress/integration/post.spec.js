/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Post', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
    it('Go to post', () => {
      cy.get('[data-testid="goto-post"]').first().click()
      cy.wait(2000);
      cy.url().should('include', '/question')
    })
})


  