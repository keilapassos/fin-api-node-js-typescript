
# FinApi: API Financeira 

## Tecnologias utilizadas:
- Node.Js;
- Express;
- Typescript

---

<br>

Este projeto foi feito seguindo orientação da desenvolvedora <b>Dani Leão</b> no curso de Node.Js pela Rocketseat.

O projeto FinAPI é uma API Financeira simples, onde é possível fazer operações CRUD (Create, Read, Update, Delete) de contas, realizar depósitos, saques, ver extrato, entre outros.

A aplicação original possuia Node.Js com Express, e os códigos ficavam apenas em um arquivo.

Para exercitar a organização do projeto, decidi separar por diretórios, com controller, services e routes. Adicionei Typescript a este projeto para poder praticá-lo mais.

Como resultado, apesar de ser uma aplicação simples pude trabalhar com alguns conceitos como <b>middleware</b>, pude praticar o <b>Typescript</b>, usei <b>padrão MVC</b> e pude usar o raciocínio lógico para resolver problemas que apareciam. 

Abaixo estão os requisitos e regras de negócio que a aplicação pedia. Pode ser encontrado também as rotas e os resultados esperados das requisições


<br>

---

<br>

## Requisitos

* Deve ser possível criar uma conta
* Deve ser possível buscar o extrato bancário do cliente
* Deve ser possível realizar um depósito
* Deve ser possível realizar um saque
* Deve ser possível buscar o extrato bancário do cliente por data
* Deve ser possível atualizar dados da conta do cliente
* Deve ser possível obter dados da conta do cliente
* Deve ser possível deletar uma conta


<br>

## Regras de negócio

* Não deve ser possível cadastrar uma conta com CPF já existente
* Não deve ser possível fazer depósito em uma conta não existente
* Não deve ser possível buscar extrato em uma conta não existente
* Não deve ser possível fazer saque em uma conta não existente
* Não deve ser possível excluir uma conta não existente
* Não deve ser possível fazer saque quando o saldo for insuficiente

<br>

---
<br>

## Rotas da aplicação

### em progresso