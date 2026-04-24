# Cypress UI Automation - Testes E2E

## Sobre o projeto

Projeto desenvolvido como parte da formação em Engenharia de Qualidade de Software (QA), com foco em automação de testes E2E utilizando Cypress.

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