import cadastroPage from '../pages/cadastroPage'

describe('Cadastro de usuário', () => {

  it('Deve realizar cadastro com sucesso', () => {

    cadastroPage.acessarSite()
    cadastroPage.acessarTelaCadastro()

    cadastroPage.preencherEmail(`marcia.teste${Date.now()}@email.com`)
    cadastroPage.preencherSenha('123456')

    cadastroPage.clicarCadastrar()

    cadastroPage.validarCadastroSucesso()
  })

})