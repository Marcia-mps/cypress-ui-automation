class CadastroPage {

  acessarSite() {
    cy.visit('https://automationexercise.com')
  }

  acessarTelaCadastro() {
    cy.contains('Signup / Login').click()
  }

  preencherNome(nome) {
    cy.get('input[data-qa="signup-name"]').type(nome)
  }

  preencherEmail(email) {
    cy.get('input[data-qa="signup-email"]').type(email)
  }

  clicarCadastrar() {
    cy.get('button[data-qa="signup-button"]').click()
  }

  validarTelaInformacoesConta() {
    cy.contains('Enter Account Information').should('be.visible')
  }
}

export default new CadastroPage()