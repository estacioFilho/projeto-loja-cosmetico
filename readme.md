# Projeto loja Druss
<br>
<br>

## 👀 **Como Visualizar as Aplicações**

Você tem duas opções para visualizar a aplicação em execução:

### 1. **Acesso pela Web**

A aplicação já está disponível online, com o front-end integrado à API:

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

- **Front-end (Vercel)**: Acesse a loja de cosméticos pelo link [projeto-loja-cosmetico.vercel.app](https://projeto-loja-cosmetico.vercel.app/).
- **API (Render)**: A API que alimenta o front-end está disponível em [api-druss.onrender.com](https://api-druss.onrender.com/).

Essa opção permite que você visualize e interaja com a aplicação completa sem precisar configurar nada localmente.

### 2. **Execução Local com Docker**

[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)]()

Se preferir, você pode executar as aplicações localmente utilizando Docker. Siga os passos abaixo:

1. **Clone o repositório do GitHub:**
    
    ```bash
    git clone git@github.com:estacioFilho/projeto-loja-cosmetico.gi
    ```
    
2. **Navegue até a pasta do projeto:**
    
    ```bash
    cd projeto-loja-cosmetico
    ```
    
3. **Suba os contêineres utilizando Docker Compose:**
    
    ```bash
    docker compose up
    ```
    
    Isso irá criar e iniciar os contêineres tanto para o front-end quanto para a API.
    

### 🛠️ **Portas e Acesso Local**

- **Front-end integrado com a API**: Disponível em `http://localhost:5002`
- **API**: Disponível em `http://localhost:3006`

### 📦 **Imagens Docker**

As imagens Docker para o projeto estão disponíveis nos seguintes repositórios:

- **Frontend**: `estacioqueiroz/front-druss`
- **API**: `estacioqueiroz/api-druss`

Com essas opções, você pode visualizar e testar a aplicação conforme sua necessidade, seja diretamente pela web ou em um ambiente local.

## 🖥️ Configuração e Execução Local

### Pré-requisitos
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)


### Passos para configurar e executar:

1. **Clone o repositório:**
    
    ```bash
    git clone https://github.com/estacioFilho/projeto-loja-cosmetico.git
    cd projeto-loja-cosmetico
    ```
    
2. **Instale as dependências:**
    
    ```bash
    npm install
    ```
    
3. **Execute a aplicação:**
    
    Se estiver utilizando o Live Server, basta abrir o arquivo `index.html` localizado na pasta `public`.
    
4. **Conteinerização (opcional):**
    
    Para rodar a aplicação usando Docker:
    
    ```bash
    
    docker compose up --build
    
    ```
    

# Projeto Loja de Cosméticos

Bem-vindo ao repositório do **Projeto Loja de Cosméticos (Druss)**! Este projeto é uma aplicação web desenvolvida para simular uma loja online de cosméticos, onde os usuários podem navegar por produtos, adicionar ao carrinho, favoritar fazer pesquisa e usar em dispositivos com tamanhos diversos.

## 🚀 Funcionalidades

- Navegação por diferentes categorias de cosméticos.
- Adição de produtos ao carrinho de compras.
- Remoção e alteração da quantidade de produtos no carrinho.
- Cálculo de total do carrinho com progressão para frete grátis.
- Favoritar produtos no na área de favoritos, transferir para o carrinho, remover.
- Pesquisa instantânea
- Cadastros de usuários e login com autenticação **jwt**

## 🛠️ Tecnologias Utilizadas


[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/estacioFilho) [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]() [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]() [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)]() [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)]() [![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)]() [![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)]() [![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)]()





## 📂 Estrutura de Pastas

```bash
projeto-loja-cosmetico-Druss/
├── assetes/                      # Recursos como imagens, ícones, etc.
├── pages/                        # Página das categorias HTML
│   ├── boasvindas.html
│   ├── cuidados.html
│   ├── finalizadores.html
│   ├── kits.html
│   ├── promocoes.html
│   └── tratamento.html
├── src/                          # Logica javaScript
│   ├── pages/                   
│   │   ├── listando-produtos-home.js
│   │   ├── listando-produtos-promocoes.js
│   │   └── listando-produtos.js
│   ├── validation/               # Scripts de validação
│   │   └── scrip.js
│   ├── auth.js
│   ├── campoPesquisa.js
│   ├── favoritos.js
│   ├── fomulario.js
│   ├── menu-dropdown.js
│   ├── menu-hamburg.js
│   ├── sacola.js
│   └── ultilities.js
├── style/                        # Estilos CSS
├── compose.yml                   # Arquivo Docker Compose
├── Dockerfile                    # Arquivo Docker para construção da imagem
├── index.html                    # Página inicial da aplicação
├── package-lock.json             # Arquivo de bloqueio de dependências do npm
└── package.json                  # Arquivo de configuração do npm

```

## 📦 Implantação

Para implantação em produção, você pode utilizar serviços como o Docker Hub para hospedar a imagem da aplicação ou optar por plataformas como o [Heroku](https://www.heroku.com/) ou [Vercel](https://vercel.com/).

# API Loja de Cosméticos

Bem-vindo ao repositório da **API Loja de Cosméticos**! Esta API foi desenvolvida para gerenciar as operações de backend da loja de cosméticos, incluindo o gerenciamento de produtos, usuários e  carrinho de compras.

### Repositório da API no GitHUB

[https://github.com/estacioFilho/api-loja-cosmetico](https://github.com/estacioFilho/api-loja-cosmetico)

## 🚀 Funcionalidades

- **Gerenciamento de Produtos**: CRUD de produtos na loja.
- **Autenticação de Usuários**: Registro e login com criptografia de senhas.
- **Gerenciamento de Carrinho**: Adição, remoção e atualização de itens no carrinho.
- **Integração com Banco de Dados MongoDB Atlas**: Utilização de Mongoose para modelagem dos dados.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento.
- **Express.js**: Framework para criação da API.
- **MongoDB Atlas**: Banco de dados NoSQL.
- **Mongoose**: ODM para MongoDB, utilizado para modelagem de dados.
- **Docker**: Conteinerização da API para fácil distribuição e execução.

## 📂 Estrutura de Pastas

```bash
api-loja-cosmetico/
├── src/
│   ├── controllers/   # Controladores que contêm a lógica de negócio
│   ├── models/        # Modelos Mongoose para a estrutura do MongoDB
│   ├── routers/       # Definição das rotas da API
│   ├── middleware/    # Middlewares personalizados para autenticação, etc.
│   ├── test/          # Testes automatizados
│   └── app.js         # Configuração principal da aplicação Express
├── server.js          # Ponto de entrada da API
├── Dockerfile         # Dockerfile para conteinerização da API
└── README.md          # Documentação do projeto

```

## 🧪 Testes Automatizados com Jest

Os testes para o projeto **Loja de Cosméticos Druss (API)** foram desenvolvidos utilizando o Jest, uma das bibliotecas mais populares para testes em JavaScript. O Jest é conhecido por sua simplicidade e eficiência, facilitando a criação e execução de testes unitários e de integração.

### 🔍 O que foi Testado?

1. **Funções de Negócio:**
    - As funções que manipulam os dados dos produtos, como listagem,cadastro usuário, autenticação por meio **JWT Json Web Token** foram testadas para garantir que retornam os resultados esperados.
2. **Validação de Formulários:**
    - Os scripts responsáveis pela validação de formulários de entrada de dados, como login, cadastro de usuários e finalização de compras, foram minuciosamente testados para assegurar que os dados estão sendo validados corretamente.
3. **Interações com a API:**
    - Foram criados testes para as interações com a API, garantindo que as requisições HTTP são feitas corretamente e que os dados recebidos são manipulados conforme o esperado.

### 🤖 Mocking com Jest

Durante os testes, utilizamos mocks e dados mockados para simular diferentes cenários e garantir que cada parte do código se comporta corretamente de forma isolada:

- **Funções Mocks:**
    - Funções críticas como chamadas a APIs ou cálculos complexos foram mockadas. Isso permite testar a lógica do código sem depender de fatores externos como a disponibilidade da API ou o banco de dados. Com o uso de `jest.fn()`, foi possível criar funções mockadas que emulam o comportamento de funções reais, permitindo verificar, por exemplo, se elas foram chamadas com os parâmetros corretos.
- **Dados Mockados:**
    - Foram criados conjuntos de dados fictícios para testar o comportamento do sistema em diferentes situações. Esses dados incluem listas de produtos, informações de usuários, e respostas simuladas da API. Os dados mockados garantem que os testes sejam consistentes e reproduzíveis, sem depender de dados reais ou ambientes externos.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## ✨ Autor

- **Estácio Quieroz** 

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/estacioFilho)

---

Espero que este *README* ajude a guiar o uso e desenvolvimento do projeto. Se precisar de alguma modificação ou adição, só me avisar! 😊