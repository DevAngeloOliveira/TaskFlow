# 🚀 TaskFlow (Em Desenvolvimento)

<div align="center">

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

**Uma plataforma de gestão de projetos em desenvolvimento, focada em aprendizado e boas práticas.**

[Sobre](#-sobre-o-projeto) •
[Tecnologias](#-tecnologias) •
[Estrutura](#-estrutura) •
[Instalação](#-instalação) •
[Roadmap](#-roadmap)

</div>

## 📋 Sobre o Projeto

O TaskFlow é um projeto em desenvolvimento que está sendo construído como uma plataforma de gestão de projetos. Este é um projeto de aprendizado onde estou aplicando e explorando diversas tecnologias modernas do desenvolvimento web.

### 🎯 Objetivos do Projeto

- Aprender e aplicar tecnologias modernas de desenvolvimento
- Implementar boas práticas de programação
- Desenvolver uma aplicação completa (fullstack)
- Explorar conceitos de DevOps e containerização
- Criar uma base sólida para futuras melhorias

## 💻 Tecnologias em Uso

### Frontend
- ⚛️ **React** com TypeScript
- 🎨 **Tailwind CSS** para estilização
- 📦 **Redux** para gerenciamento de estado
- ⚡ **Vite** como bundler

### Backend
- 🦁 **NestJS** com TypeScript
- 🐘 **PostgreSQL** como banco de dados
- 🔑 **JWT** para autenticação
- 📝 **TypeORM** para ORM

### DevOps
- 🐳 **Docker** e Docker Compose
- 🌐 **Nginx** como proxy reverso

## 🏗️ Estrutura Atual

```
taskflow/
├── frontend/                 # Aplicação React
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── pages/          # Páginas
│   │   ├── services/       # Integrações com API
│   │   └── store/          # Estado global
│   
└── backend/                 # API NestJS
    ├── src/
    │   ├── modules/
    │   │   ├── auth/       # Autenticação
    │   │   ├── users/      # Usuários
    │   │   ├── projects/   # Projetos
    │   │   └── tasks/      # Tarefas
    │   └── config/         # Configurações
```

## ⚙️ Funcionalidades em Desenvolvimento

### Módulo de Autenticação
- Sistema de registro e login
- Autenticação JWT
- Gerenciamento de perfis

### Módulo de Projetos
- Criação de projetos
- Gerenciamento de equipes
- Acompanhamento de status

### Módulo de Tarefas
- Criação e atribuição de tarefas
- Sistema de prioridades
- Acompanhamento de progresso

## 🚀 Instalação

> ⚠️ **Nota**: Este projeto está em desenvolvimento ativo e pode conter funcionalidades incompletas.

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/taskflow.git
cd taskflow
```

2. **Configure o ambiente**
```bash
cp .env.example .env
# Configure as variáveis necessárias
```

3. **Inicie com Docker**
```bash
docker-compose up -d
```

4. **Acesse**
- Frontend: http://localhost:3000
- Backend: http://localhost:3333

## 📝 Roadmap

### Fase 1 (Em Andamento)
- [x] Setup inicial do projeto
- [x] Configuração do Docker
- [x] Estrutura básica do backend
- [x] Estrutura básica do frontend
- [ ] Sistema de autenticação
- [ ] CRUD básico de projetos
- [ ] CRUD básico de tarefas

### Fase 2 (Planejado)
- [ ] Dashboard de projetos
- [ ] Kanban board
- [ ] Sistema de notificações
- [ ] Melhorias de UI/UX

### Fase 3 (Futuro)
- [ ] Chat em tempo real
- [ ] Relatórios e analytics
- [ ] Integrações externas
- [ ] App mobile

## 👨‍💻 Desenvolvedor

**Gabriel**

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/seu-linkedin)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/seu-github)

---

<div align="center">

🚧 **Projeto em Desenvolvimento** 🚧

</div>