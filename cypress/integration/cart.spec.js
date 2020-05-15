describe('Cart', () => {
    it('Add item to cart', () => {
      cy.visit('/product/algaecal-plus/')
      cy.contains('Add to cart').first().click()
      cy.url().should('include', 'cart')
      cy.get('[data-title="Product"]').should('exist')
    })
})