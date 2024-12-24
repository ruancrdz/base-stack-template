# Base Stack Template

Bem-vindo ao **Base Stack Template**, um repositório projetado para ser a fundação de aplicações globais, compondo front-end, back-end e banco de dados em uma estrutura modular e escalável. Este template tem como objetivo facilitar a inicialização e padronização de projetos, fornecendo uma base reutilizável, automatizada e otimizada.

---

## 📚 Estrutura do Repositório

```plaintext
base-stack-template/
├── README.md                     # Documentação geral do repositório
├── front-end/                    # Diretório do projeto front-end
├── back-end/                     # Diretório do projeto back-end
├── database/                     # Diretório para scripts de banco de dados
├── docker-compose.yml            # Orquestra containers (front, back, db)
└── .gitignore                    # Configurações de exclusão para o Git
```

### **Front-End**
O diretório `front-end/` contém um projeto base para aplicações web, utilizando:
- **HTML** e **CSS** para a estrutura e estilização.
- **JavaScript** para desenvolvimento com tipagem estática.
- Organização modular de componentes e estilos globais reutilizáveis.

### **Back-End**
O diretório `back-end/` é uma aplicação base desenvolvida em:
- **Kotlin**, utilizando o framework **Spring Boot**.
- Um sistema de **CRUD genérico** para acelerar o desenvolvimento de APIs.
- Estrutura de pastas organizada para escalar com facilidade.

### **Banco de Dados**
O diretório `database/` contém:
- **Scripts SQL** para criação do esquema e inserção de dados iniciais.
- Suporte a ferramentas de migração como **Flyway** ou **Liquibase**.
- Pronto para ser configurado com **MySQL**.

---

## 🚀 Como Utilizar

### Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas:
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/)
- [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) (ou superior)
- [Maven](https://maven.apache.org/)

### Passos para Inicialização
1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seu-usuario/base-stack-template.git
   cd base-stack-template
   ```

2. **Inicialize os Serviços**
   Use o `docker-compose.yml` para subir todos os serviços.
   ```bash
   docker-compose up --build
   ```

3. **Front-End**
   Acesse o diretório `front-end` e instale as dependências.
   ```bash
   cd front-end
   npm install
   npm run dev
   ```
   O front estará disponível em `http://localhost:3000`.

4. **Back-End**
   Acesse o diretório `back-end` e inicie o servidor.
   ```bash
   cd back-end
   mvn spring-boot:run
   ```
   O back estará disponível em `http://localhost:8080`.

5. **Banco de Dados**
   O banco de dados será inicializado automaticamente pelo Docker na porta `5432`.

---

## 🌟 Funcionalidades

- **Front-End**
  - Estrutura modular e escalável.
  - Estilos globais e reutilizáveis com **CSS**.
  - Componentes pré-configurados com **JavaScript**.

- **Back-End**
  - CRUD genérico para APIs REST.
  - Suporte para **Kotlin** e **Spring Boot**.
  - Configuração pronta para integração com bancos de dados relacionais.

- **Banco de Dados**
  - Configuração inicial para **MySQL**.
  - Scripts de criação e popularização do banco.

---

## 🛠️ Tecnologias Utilizadas

### **Front-End**
- HTML
- CSS
- JavaScript

### **Back-End**
- Kotlin
- Spring Boot
- Maven

### **Banco de Dados**
- MySQL

### **Infraestrutura**
- Docker e Docker Compose

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:
1. Faça um fork do repositório.
2. Crie uma branch com sua feature ou correção.
   ```bash
   git checkout -b minha-feature
   ```
3. Faça o commit das suas alterações.
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie a branch para o repositório remoto.
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE). Sinta-se à vontade para usá-lo e modificá-lo como desejar.

---

## 🧩 Próximos Passos
- Adicionar suporte para testes automatizados.
- Implementar autenticação e autorização no back-end.
- Criar uma interface administrativa no front-end.

---

💡 **Dúvidas? Sugestões?** Entre em contato ou abra uma issue no repositório.
