describe('Cadastro de usuário', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com/login')
  })

  it('Deve realizar cadastro com dados de fixture', () => {

    cy.fixture('example').then((dados) => {

      cy.get('input[data-qa="signup-name"]').type(dados.nome)

      cy.get('input[data-qa="signup-email"]').type(
        `${Date.now()}${dados.email}`
      )

      cy.get('button[data-qa="signup-button"]').click()

      cy.contains('Enter Account Information').should('be.visible')

    })

  })

})