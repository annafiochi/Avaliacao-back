# Avaliação Back-End

Este é um projeto de back-end desenvolvido para gerenciar eventos. Ele fornece uma API RESTful para criar, atualizar, listar e excluir eventos.

## Funcionalidades

O projeto oferece as seguintes funcionalidades:

1. **Listar todos os eventos**:
   - Endpoint: `GET /eventos`
   - Retorna uma lista de todos os eventos cadastrados.

2. **Criar um novo evento**:
   - Endpoint: `POST /eventos`
   - Campos obrigatórios no corpo da requisição:
     - `titulo`: Nome do evento.
     - `descricao`: Descrição do evento.
     - `data`: Data do evento no formato `YYYY-MM-DD`.
     - `local`: Local onde o evento será realizado.
     - `capacidade`: Número máximo de participantes.
     - `categoria`: Categoria do evento (ex.: Tecnologia, Educação, etc.).
     - `preco`: Preço do ingresso.

3. **Atualizar um evento existente**:
   - Endpoint: `PUT /eventos/:id`
   - Atualiza os dados de um evento com base no ID fornecido na URL.
   - Campos aceitos no corpo da requisição:
     - `titulo`, `descricao`, `data`, `local`, `capacidade`, `categoria`, `preco`.

4. **Excluir um evento**:
   - Endpoint: `DELETE /eventos/:id`
   - Remove um evento com base no ID fornecido na URL.

## Estrutura do Projeto

Abaixo está a estrutura básica do projeto:
Avaliacao-back/ ├── src/ │ ├── controllers/ │ │ └── eventoController.js # Controlador responsável pelas operações de eventos │ ├── models/ │ │ └── eventoModel.js # Modelo que interage com o banco de dados │ ├── routes/ │ │ └── eventoRoutes.js # Rotas para os endpoints de eventos │ ├── config/ │ │ └── database.js # Configuração do banco de dados │ └── app.js # Configuração principal do servidor ├── package.json # Dependências e scripts do projeto └── README.md # Documentação do projeto


### Arquivos principais

- **`eventoController.js`**:
  - Contém os métodos para gerenciar eventos:
    - `getAll`: Lista todos os eventos.
    - `create`: Cria um novo evento.
    - `update`: Atualiza um evento existente.
    - `delete`: Exclui um evento.

- **`eventoModel.js`**:
  - Define as interações com o banco de dados, como buscar, criar, atualizar e excluir eventos.

- **`eventoRoutes.js`**:
  - Define as rotas da API e associa cada rota ao método correspondente no controlador.

- **`database.js`**:
  - Configura a conexão com o banco de dados.

- **`app.js`**:
  - Configura o servidor Express e registra as rotas.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado.
- Um banco de dados configurado (ex.: MySQL, PostgreSQL, etc.).
- Gerenciador de pacotes `npm` ou `yarn`.

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/avaliacao-back.git
   cd avaliacao-back
   
  
2. Instale as dependências:
 npm install


3. configure o banco de dados:
Edite o arquivo src/config/database.js com as credenciais do seu banco de dados.

4. Inicie o servidor:
npm start

5. Acesse a API em http://localhost:3000.


Exemplos de Requisições
Criar um Evento
Endpoint: POST /eventos


body:
{
  "titulo": "Workshop de Node.js",
  "descricao": "Aprenda Node.js do zero",
  "data": "2025-04-15",
  "local": "Sala 101",
  "capacidade": 50,
  "categoria": "Tecnologia",
  "preco": 100.00
}


Atualizar um Evento
Endpoint: PUT /eventos/1

Body:
{
  "titulo": "Workshop de Node.js Avançado",
  "descricao": "Aprenda técnicas avançadas de Node.js",
  "data": "2025-05-20",
  "local": "Sala 102",
  "capacidade": 60,
  "categoria": "Tecnologia",
  "preco": 150.00
}

Excluir um Evento
Endpoint: DELETE /eventos/1
{
  "message": "evento deletado com sucesso!"
}


Tecnologias Utilizadas
Node.js: Plataforma de execução JavaScript.
Express: Framework para criação de APIs.
Banco de Dados: Configurável (MySQL, PostgreSQL, etc.).