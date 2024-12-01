# 🚀 TaskFlow

<div align="center">

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

**Uma plataforma moderna de gestão de projetos focada em produtividade e colaboração em equipe.**

[Tecnologias](#-tecnologias) •
[Funcionalidades](#-funcionalidades) •
[Arquitetura](#-arquitetura) •
[Instalação](#-instalação) •
[Documentação](#-documentação)

</div>

## 📋 Sobre o Projeto

O TaskFlow é uma solução completa para gestão de projetos e tarefas, desenvolvida com tecnologias modernas e seguindo as melhores práticas de desenvolvimento. O sistema oferece uma experiência fluida e intuitiva para gerenciamento de equipes, projetos e tarefas.

### 🎯 Principais Diferenciais

- **Arquitetura Moderna**: Desenvolvido com React e NestJS, utilizando TypeScript para maior segurança e manutenibilidade
- **Design Responsivo**: Interface adaptável a qualquer dispositivo com Tailwind CSS
- **Alta Performance**: Otimizado para carregamento rápido e experiência fluida
- **Escalabilidade**: Arquitetura em containers Docker pronta para escalar
- **Segurança**: Implementação robusta de autenticação JWT e práticas de segurança

## 💻 Tecnologias

### Frontend
- ⚛️ **React 18** - Biblioteca para construção de interfaces
- 🔷 **TypeScript** - Superset JavaScript com tipagem estática
- 🎨 **Tailwind CSS** - Framework CSS utilitário
- 📦 **Redux Toolkit** - Gerenciamento de estado
- ⚡ **Vite** - Build tool e bundler

### Backend
- 🦁 **NestJS** - Framework Node.js progressivo
- 🐘 **PostgreSQL** - Banco de dados relacional
- 🔑 **JWT** - Autenticação e autorização
- 📝 **TypeORM** - ORM para TypeScript

### DevOps
- 🐳 **Docker** - Containerização
- 🔄 **Docker Compose** - Orquestração de containers
- 🌐 **Nginx** - Proxy reverso e load balancer

## ✨ Funcionalidades

### Autenticação e Usuários
- 🔐 Sistema completo de autenticação
- 👤 Gerenciamento de perfis de usuário
- 🔒 Controle de acesso baseado em roles

### Gestão de Projetos
- 📊 Dashboard de projetos
- 👥 Gerenciamento de equipes
- 📈 Acompanhamento de progresso

### Gestão de Tarefas
- ✅ Kanban board interativo
- 🏷️ Sistema de tags e prioridades
- ⏰ Controle de prazos e status

## 🏗️ Arquitetura

```
taskflow/
├── frontend/           # Aplicação React
│   ├── src/
│   │   ├── components/ # Componentes reutilizáveis
│   │   ├── pages/     # Páginas da aplicação
│   │   ├── store/     # Estado global Redux
│   │   └── services/  # Serviços e API
│   
└── backend/           # API NestJS
    ├── src/
    │   ├── modules/   # Módulos da aplicação
    │   ├── config/    # Configurações
    │   └── shared/    # Recursos compartilhados
```

## 🚀 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/taskflow.git
cd taskflow
```

2. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Configure as variáveis necessárias
```

3. **Inicie com Docker**
```bash
docker-compose up -d
```

4. **Acesse a aplicação**
- Frontend: http://localhost:3000
- Backend: http://localhost:3333
- Documentação API: http://localhost:3333/api

## 📚 Documentação

### API Endpoints

#### Autenticação
- `POST /auth/login` - Login de usuário
- `POST /auth/register` - Registro de novo usuário

#### Projetos
- `GET /projects` - Lista todos os projetos
- `POST /projects` - Cria novo projeto
- `GET /projects/:id` - Detalhes do projeto
- `PUT /projects/:id` - Atualiza projeto
- `DELETE /projects/:id` - Remove projeto

#### Tarefas
- `GET /tasks` - Lista todas as tarefas
- `POST /tasks` - Cria nova tarefa
- `PUT /tasks/:id` - Atualiza tarefa
- `DELETE /tasks/:id` - Remove tarefa

## 🔜 Próximas Features

- [ ] Chat em tempo real
- [ ] Sistema de notificações
- [ ] Relatórios avançados
- [ ] Integrações (Slack, GitHub)
- [ ] App mobile

## 👨‍💻 Autor

**Gabriel**

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-%C3%A2ngelo-b71565267/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DevAngeloOliveira/DevAngeloOliveira)
## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com ❤️ por Gabriel

</div>