class CadastroPage {

    acessarSite() {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    }

    acessarTelaCadastro() {
        cy.contains('Minha Conta').click()
    }

    preencherEmail(email) {
        cy.get('#reg_email').type(email)
    }

    preencherSenha(senha) {
        cy.get('#reg_password').type(senha)
    }

    clicarCadastrar() {
        cy.get('button[name="register"]').click()
    }

    validarCadastroSucesso() {
        cy.contains('Minha conta').should('be.visible')
    }
}

export default new CadastroPage()