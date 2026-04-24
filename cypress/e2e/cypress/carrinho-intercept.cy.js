describe('Carrinho de compras com intercept', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2')
    cy.visit('https://automationexercise.com/products')
  })

  it('Deve simular e validar adicionar, atualizar e remover item do carrinho', () => {

    cy.intercept('POST', '**/cart/add', {
      statusCode: 200,
      body: {
        success: true,
        message: 'Produto adicionado ao carrinho'
      }
    }).as('adicionarItem')

    cy.intercept('PUT', '**/cart/update', {
      statusCode: 200,
      body: {
        success: true,
        quantity: 2,
        message: 'Quantidade atualizada'
      }
    }).as('atualizarItem')

    cy.intercept('DELETE', '**/cart/remove', {
      statusCode: 200,
      body: {
        success: true,
        message: 'Produto removido do carrinho'
      }
    }).as('removerItem')

    cy.window().then((win) => {
      win.fetch('/cart/add', { method: 'POST' })
      win.fetch('/cart/update', { method: 'PUT' })
      win.fetch('/cart/remove', { method: 'DELETE' })
    })

    cy.wait('@adicionarItem').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
      expect(interception.response.body.success).to.eq(true)
    })

    cy.wait('@atualizarItem').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
      expect(interception.response.body.quantity).to.eq(2)
    })

    cy.wait('@removerItem').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
      expect(interception.response.body.success).to.eq(true)
    })

  })

})