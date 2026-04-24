import cadastroPage from '../pages/cadastroPage'

describe('Cadastro de usuário', () => {
  it('Deve realizar cadastro com sucesso', () => {

    cadastroPage.acessarSite()
    cadastroPage.acessarTelaCadastro()
    cadastroPage.preencherNome('Marcia Teste')
    cadastroPage.preencherEmail(`marcia.teste${Date.now()}@email.com`)
    cadastroPage.clicarCadastrar()
    cadastroPage.validarTelaInformacoesConta()

  })
})