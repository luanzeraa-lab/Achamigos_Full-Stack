# Microserviço de Cadastro e Autenticação de Usuários

Este projeto é um microserviço Node.js para cadastro e autenticação de usuários, utilizando MongoDB, JWT e criptografia de senha com bcrypt.

## Funcionalidades

- Cadastro de usuário com validação de e-mail e login únicos
- Login de usuário com autenticação JWT
- Senha armazenada de forma segura (criptografada)
- Estrutura pronta para expansão de rotas protegidas

## Tecnologias

- Node.js
- Express
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- Bcrypt.js
- dotenv
- CORS

## Instalação

1. **Clone o repositório:**
   ```
   git clone <url-do-repositorio>
   cd <nome-da-pasta>
   ```

2. **Instale as dependências:**
   ```
   npm install
   ```

3. **Configure o arquivo `.env`:**

   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

   ```
   MONGO_URI=<sua_string_de_conexao_mongodb>
   JWT_SECRET=<sua_chave_secreta_jwt>
   PORT=5001
   ```

4. **Inicie o servidor:**
   ```
   node api.js
   ```

## Rotas

### Cadastro de Usuário

- **POST** `/register`
- **Body (JSON):**
  ```json
  {
    "nome": "Maria",
    "cnpj": "12345678000199",
    "telefone": "11999999999",
    "userLogin": "maria2",
    "senha": "senha123",
    "email": "maria2@email.com",
    "endereco": {
      "cep": "12345678",
      "rua": "Rua das Flores",
      "cidade": "São Paulo",
      "numero": "100"
    },
    "tipo": "usuario",
    "userStatus": "ativo",
    "linkUser": "https://site.com/maria2"
  }
  ```

### Login de Usuário

- **POST** `/login`
- **Body (JSON):**
  ```json
  {
    "userLogin": "maria2",
    "senha": "senha123"
  }
  ```

- **Resposta:**
  ```json
  {
    "user": {
      "_id": "...",
      "nome": "...",
      "email": "...",
      // outros campos do usuário
    },
    "token": "JWT_TOKEN_AQUI"
  }
  ```

## Observações

- Use o token JWT retornado no login para acessar rotas protegidas (caso adicione no futuro).
- O serviço está pronto para ser integrado a outros sistemas como microserviço de autenticação.

---

**Desenvolvido para fins acadêmicos.**