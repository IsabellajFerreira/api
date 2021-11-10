## iniciar um projeto node.js (package.json)

npm init -y

### instalação de dependências (sempre consultar  a documentação oficial ) npm| yarn

Exemplo
npm install express ou npm i express (versão atual 4.17.1) licença em MIT - ou seja, é gratuito. Podendo comercializar o projeto sem violar os direitos autorais.
Cada dependência instalada trás com ele vários outras 

## Executar o projeto

node NOME_DO_ARQUIVO

Exemplo:

node src/server.js

### Instalação de módulos como devDependencies

npm install NOME_TECNOLOGIA -D

### instalação de módulos de forma global 

npm install -g  NOME_DA_TECNOLOGIA

Exemplo:

npm install -g nodemom

### Instalar o MongoDb

npm install --save mongodb // tanto faz o --save

### Instalar o Mongoose  
//vai traduzir os dados do banco dedaados para objetos javaScript para que possam ser utilizados por sua aplicação

npm install --save mongoose

### Validar campos

npm install yup

### Criptografia de dados (hash bcryptjs)

npm i bcryptjs

### toke JWT

npm i jsonwebtoken