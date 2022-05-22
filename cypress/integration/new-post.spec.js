/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
    it('Submit new question form', () => {
      cy.get('[data-testid="new-question"]').click()

      cy.get('[data-testid="question-title"]').type('Lorem Ipesom');
      cy.get('[data-testid="question-description"]').type('Lorem Ipesom');

      cy.get('[data-testid="question-submit"]').click();
      //cy.url().should('include', '/about')
    })

    it('Cancel new question form', () => {
        cy.get('[data-testid="new-question"]').click()
  
        cy.get('[data-testid="question-title"]').type('Lorem Ipesom');
        cy.get('[data-testid="question-description"]').type('Lorem Ipesom');
  
  
        cy.get('[data-testid="question-cancel"]').click();
      })

      it('Validation test question', () => {
        cy.get('[data-testid="new-question"]').click()
  
        cy.get('[data-testid="question-description"]').type('Lorem Ipesom');
  
        cy.get('[data-testid="question-submit"]').click();

        cy.get('[data-testid="input-error"]').should('contain', 'وارد کردن سوال الزامی است.');
      })

      it('Validation test description', () => {
        cy.get('[data-testid="new-question"]').click()
  
        cy.get('[data-testid="question-title"]').type('Lorem Ipesom');
  
        cy.get('[data-testid="question-submit"]').click();

        cy.get('[data-testid="textarea-error"]').should('contain', 'وارد کردن متن سوال الزامی است.');
      })
  })
  