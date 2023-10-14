## Consulta-CNPJ-Angular-Signals - Angular 16 Signals 🚀 🔄 🌐

Codificação de aplicação Angular 16 com Signals usa uma forma avançada de programação reativa muito mais rápida. O frontend moderno com uso de TailwindCSS para estilização deixar interface responsiva para todos tamanho de telas. Uso de programação reativa para consultar informações de CNPJ. Utiliza o Angular, um framework popular para construir aplicações SPA (Single Page Application), e Signals para tornar a aplicação mais reativa e eficiente.
A aplicação consome uma um Backend em NodeJS que realiza todo processo para acesso ao Endpoint e retornar os dados para Frontend em Angular.


## Introdução

O projeto Angular utiliza a biblioteca Signals para criar uma interface reativa e eficiente para a consulta de informações de CNPJ. A aplicação é construída com uma arquitetura modular e limpa, garantindo fácil manutenibilidade e expansão.

## Funcionalidades

### Inicialização e Configuração

O componente Angular é inicializado com a importação de módulos necessários, incluindo o `CnpjService` para a recuperação de dados, e a biblioteca Signals para a gestão reativa do estado. A estratégia de detecção de mudanças `OnPush` é utilizada para otimizar o desempenho da aplicação.

### Sinal de Busca de CNPJ

Um sinal, `buscaCnpj`, é criado para capturar e reagir às mudanças no valor do CNPJ inserido pelo usuário. Este sinal é utilizado para acionar a consulta de dados de forma reativa, garantindo que a interface seja atualizada de forma eficiente e responsiva.

### Verificação de Validade do CNPJ

Antes de realizar a consulta, o valor do CNPJ é validado para garantir que está no formato correto. Se o CNPJ não for válido, a consulta não é realizada, evitando chamadas desnecessárias ao serviço e garantindo a integridade dos dados apresentados.

### Consulta Reativa de Dados

Com o uso da biblioteca Signals e RxJS, a consulta de dados é realizada de forma reativa. O sinal `buscaCnpj` é transformado em um Observable, que é então manipulado para realizar a consulta de dados com eficiência, utilizando operadores como `debounceTime`, `distinctUntilChanged`, e `switchMap`.

### Apresentação dos Dados

Os dados recuperados são apresentados na interface de forma reativa. A estrutura modular do código facilita a personalização e expansão da interface, permitindo a adição de novas funcionalidades e aprimoramentos com facilidade.


### Como rodar aplicação:

- Instale os Pacotes:

```
npm install
```

- Instale o TailwindCSS usado na estilização do Design da aplicação
```
npm install tailwindcss
```

- Rode a aplicação:
```
ng serve
```

- Acesse aplicação:
```
http://localhost:4200
```


#### Conclusão
Esta aplicação Angular com Signals é um exemplo de uma aplicação frontend reativa e eficiente. Utiliza tecnologias modernas e práticas de programação reativa para proporcionar uma experiência de usuário suave e responsiva. A validação e a consulta do CNPJ são feitas de maneira eficiente, e as informações são exibidas de forma reativa conforme são recebidas.
Este código Angular com Signals exemplifica uma aplicação reativa eficiente para consultar informações de CNPJ. É limpo, modular e fácil de entender, tornando-se uma excelente base para projetos mais complexos.


#### Autor:
Emerson Amorim

