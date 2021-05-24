# App teste-dev

## Tecnologias utilizadas:

### Backend:

* Linguagem: Typescript
* Framewok: ExpressJS
* ORM: Typeorm
* Lib YUP para validação dos dados vindo da requisição

### Frontend:

* Linguagem: Typescript:
* Framework/Lib: ReactJS
* API adicional: OpenWeatherMap para busca de clima da cidade

## Executar o backend:

### Instalar as dependencias e Configurar o projeto:

* Criar um banco no postgresql com o nome de api

* Realizar as configurações do banco (nome, senha, porta) no arquivo ormconfig.json

![Image](https://github.com/yasmin-carvalho/teste-dev/blob/master/api/assets/ormconfig.PNG "Arquivo de configuração do banco")

* Instalar as dependencias:
```bash
yarn
```

* Rodar a migration:
```bash
yarn typeorm migration:run
```

### Rodar o projeto:

```bash
yarn dev
```

* Servidor front roda na porta 3333 
* (http://localhost:3333)


## Executar o front

## Instalar dependências:

```bash
 yarn
```

## Rodar Projeto:

```bash
 yarn start
```

* Servidor front roda na porta 3000 
* (http://localhost:3000)

