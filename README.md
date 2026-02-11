
## system-login-react-js 👨‍💻

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
---

Interface de login desenvolvida para praticar conceitos de rotas e autenticação em um sistema React utilizando JavaScript.

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Rodar](#como-rodar)
- [Exemplo de Uso](#exemplo-de-uso)

---

## Sobre o Projeto

Este projeto é uma aplicação de login simples feita em React, com autenticação de usuários utilizando armazenamento local (localStorage). O objetivo é demonstrar conceitos de rotas protegidas, autenticação e uso de contextos no React.

## Funcionalidades

- Cadastro de novo usuário
- Login de usuário
- Logout
- Rotas protegidas (acesso à página Home apenas autenticado)
- Validação de campos e mensagens de erro

## Estrutura de Pastas

```
src/
  components/        # Componentes reutilizáveis (Button, Input)
  contexts/          # Contexto de autenticação
  hooks/             # Hook customizado para autenticação
  pages/             # Páginas (Signin, Signup, Home)
  routes/            # Definição das rotas e proteção
  styles/            # Estilos globais
  App.js             # Componente principal
  index.js           # Ponto de entrada
```

## Tecnologias Utilizadas

- React
- React Router DOM
- Styled-components
- JavaScript

## Como Rodar

1. Clone o repositório:
	```bash
	git clone https://github.com/michaelfsnts/system-login-react-js.git
	```
2. Instale as dependências:
	```bash
	npm install
	```
3. Inicie o projeto:
	```bash
	npm start
	```
4. Acesse em [http://localhost:3000](http://localhost:3000)

## Exemplo de Uso

1. Faça o cadastro de um novo usuário na tela de registro.
2. Realize o login com o usuário cadastrado.
3. Após o login, acesse a página protegida (Home) e utilize o botão de logout para sair.

---

## 📄 Licença

Este projeto é apenas para fins de estudo e não possui licença comercial.
