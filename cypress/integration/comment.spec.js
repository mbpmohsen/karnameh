describe('Comments', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
      cy.get('[data-testid="goto-post"]').first().click()

    });
    it('Happy reaction', () => {
        cy.get('[data-testid="happy-reaction"]').first().click();
    })
    it('Sad reaction', () => {
        cy.get('[data-testid="sad-reaction"]').first().click();
    })

    it('submit comment', () => {
        cy.get('[data-testid="comment-description"]').type("Lorem Ipesom");
        cy.get('[data-testid="comment-submit"]').click();
    })

    it('submit validation', () => {
        cy.get('[data-testid="comment-submit"]').click();
        cy.get('[data-testid="textarea-error"]').should('contain', 'وارد کردن پاسخ الزامی است.');
    })
}
)