# FrontBancomundial

**Introdução**

A aplicação deve permitir que o usuário digite o código do país para em seguida solicitar os índices históricos. Ou seja, quando o usuário entrar no sistema, irá visualizar um formulário, após o preenchimento e submissão desse, será apresentada uma tabela com o resultado obtido da API do Banco Mundial.

[Angular CLI](https://github.com/angular/angular-cli) version 9.0.0.

**Execução**
Abrir o projeto no Visual Studio Code ou similar

* docker build -t front-bancomundial:v1.0.0 .
* docker run -p 8000:80 -d front-bancomundial:v1.0.0

No browser navegue no endereço
http://localhost:8000/

