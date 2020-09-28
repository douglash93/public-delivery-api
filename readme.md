# Projeto Delivery API

A estrutura do projeto segue a arquitetura **package-by-feature**. Para saber mais: https://phauer.com/2020/package-by-feature/

Funcionalides do projeto: 

* Criar, listar, atualizar e remover produtos.
* Listagem de produtos para compra.
* Adicionar produtos ao carrinho.
* Finalizar pedido.

O projeto foi desenvolvimento pensando em boas práticas, seguindo alguns dos príncipios SOLID, como por exemplo o Príncipio de responsabilidade única e príncipio da inversão de dependência.

Para os testes de integração foi utilizado o **jest**.

## Passos para executar o projeto 

1. Instalar as dependências do projeto 

        yarn install

2. Criar o banco de dados no mysql, delivery-api 

        create database delivery_api

3. Executar o comando 

        yarn sequelize db:migrate

4. Executar testes de integração 

        yarn jest