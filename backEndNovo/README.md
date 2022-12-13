## Name

Agenda de contatos ( BACK-END )

## Intro

Esse App cria uma interface web full-stack onde você pode criar usuários e seus contatos com autentição por email e senha. Você pode também editar e deletar seu usuário e seu contatos cadastrados.

## Instalando dependências

```shell

yarn

```

## Criando DB

Usuário precisa criar um banco de dados

## Criando .env

Usuário precisa criar .env com suas informações do postgres

## Rodando as migrations

```shell

yarn typeorm migration:run -d src/data-source.ts

```

## Rodar o Projeto

```shell

yarn dev

```
O back-end esta rodando na porta 3001


## Rotas usuário

`POST /users - Criação usuário`

```json
{
	"name": "Matheus Willcox",
	"email": "matheus@gmail.com",
	"telefone": "22223333",
	"password": "1234"
}
```

`POST /login - Login`

```json
{
	"email": "matheus@mail.com",
	"password": "1234"
}
```

`GET /users - Listar usuários`

Necessita de Token no header da requisição.

`PATCH /users Atualizar usuário`

Necessita de Token no header da requisição.

```json
{
	"name": "Marcelo Willcox"
}
```


`DELETE users/ - Apagar conta`

Necessita de Token no header da requisição.

___

## Rotas contatos

`POST /contact - Criação contato`

Necessita de Token no header da requisição.

```json
{
	"name": "Maria da Silva",
	"email": "maria@gmail.com",
	"telefone": "22223333"
}
```

`PATCH contact/:id - Atualizar contato`

Necessita de Token no header da requisição.

```json
{
	"name": "João da Silva"
}
```

`GET contact - Listar contatos`

Necessita de Token no header da requisição.

`DELETE contact/:id - Deletar contato`

Necessita de Token no header da requisição.

## Tabelas e relacionamentos

Temos duas tabelas, uma de usuários e outra de contatos, sendo uma relação um para any, um usuário pode ter vários contatos, mas um contato só tem um usuáio.

## Ferramentas e principais bibliotecas utilizadas

- JavaScript 
- Node.JS
- Express
- TypeORM
- Redux
- jsonwebtoken
- CSS
- HTML






___


