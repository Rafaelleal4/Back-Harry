# API Harry Potter
Este projeto é uma API RESTful que permite gerenciar bruxos e varinhas do universo Harry Potter.

## Tecnologias Utilizadas
* Node.js
* Express.js
* PostgreSQL
## Rotas
### Bruxos
#### POST /bruxos:
 Adiciona um novo bruxo. O corpo da requisição deve incluir nome, idade, casa, habilidade, status_sangue e patrono.
#### GET /bruxos:
 Retorna todos os bruxos.
#### PUT /bruxos/:id:
 Atualiza um bruxo existente. O corpo da requisição deve incluir nome, idade, casa, habilidade, status_sangue e patrono.
#### DELETE /bruxos/:id:
 Exclui um bruxo.
#### GET /bruxos/:id:
 Retorna um bruxo específico.
### Varinhas
#### POST /varinhas:
 Adiciona uma nova varinha. O corpo da requisição deve incluir material, comprimento, nucleo e fabricacao.
#### GET /varinhas:
 Retorna todas as varinhas.
#### PUT /varinhas/:id:
 Atualiza uma varinha existente. O corpo da requisição deve incluir material, comprimento, nucleo e fabricacao.
#### DELETE /varinhas/:id:
 Exclui uma varinha.
#### GET /varinhas/:id:
 Retorna uma varinha específica.

## Como Executar
1. Clone este repositório.
2. Instale as dependências com npm install.
3. Inicie o servidor com npm start.
4. O servidor estará rodando na porta 4000.
## Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.