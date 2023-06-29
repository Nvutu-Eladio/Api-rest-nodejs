# API REST com NodeJS

                Aplicação de controle de Finanças Pessoal

# Requisitos Funcionais - RF

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar uma transação única;

# Regras De Negócios - RN

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtrairá
- [x] Deve ser possível identificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações o qual ele criou

<p>
# Instalação

# Faça o clone do repositório
- https://github.com/Nvutu-Eladio/api-rest-nodejs.git

# Instalar as dependências do projeto

    npm run dev

# Executando o projeto no ambiente de desenvolvimento
    npm run dev
  
# Rodar as migrations do projeto para criar o banco de dados
    npm run knex -- migrate:latest
</p>

- Testes e2e
    Os testes foram desenvolvidos utilizando vitest e supertest

- Rotas

- Criar nova transação
    POST /transactions

- Listar todos usuários
    GET /transactions

- Listar transação específica usuários
    GET /transactions/:${transaction_id}

- Mostrar um resumo geral das transações do usuário
    GET /transactions/summary


# Ferramentas utilizadas

- NodeJS
- Fastify
- Sqlite
- Typescript
- Knex
- tsup
- zod
- vitest
- eslint
- supertest
- dotenv

<p>
