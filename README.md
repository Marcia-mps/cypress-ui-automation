# Cypress UI Automation - Testes E2E

Este projeto tem como objetivo validar fluxos de cadastro de usuários utilizando testes automatizados E2E com Cypress, aplicando boas práticas de automação e organização de código com Page Object.

---

## Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js

---

## Cenários automatizados

- Cadastro de usuário com sucesso
- Validação da navegação para tela de informações da conta
- Preenchimento de formulário com dados dinâmicos (evitando duplicidade de e-mail)

---

## Estrutura do projeto
cypress/
├── e2e/
│ └── cadastro.cy.js
├── pages/
│ └── cadastroPage.js
├── fixtures/
├── support/


---

## Padrão utilizado

O projeto foi estruturado utilizando o padrão **Page Object**, que permite:

- Melhor organização do código
- Reutilização de funções
- Facilidade de manutenção
- Separação entre lógica de teste e interação com a página

---

## Como executar o projeto

npm install
npx cypress open

### 1. Clonar o repositório
```bash
git clone https://github.com/Marcia-mps/cypress-ui-automation.git

## Evidência de execução

Os testes foram executados com sucesso, validando o fluxo completo de cadastro de usuário.

## Diferenciais aplicados

Uso de dados dinâmicos com Date.now() para evitar conflitos de cadastro
Implementação do padrão Page Object
Estrutura organizada seguindo boas práticas de automação
Versionamento com Git e GitHub

## Autora

Márcia Maria Paulino da Silva