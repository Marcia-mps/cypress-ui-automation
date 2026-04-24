describe('Carrinho de compras com intercept', () => {

  it('Deve validar intercept funcionando', () => {

    cy.intercept('GET', '**/products*').as('getProducts')

    cy.visit('https://automationexercise.com/products')

    cy.wait('@getProducts').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })

  })

})