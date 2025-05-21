# 🚀 Projeto React - Lift State Up + React Router

Este é um projeto simples em React desenvolvido para praticar dois conceitos fundamentais:

- **Lift State Up (Elevar o estado para um componente pai)**
- **React Router (Navegação entre páginas)**

---

## 📚 Funcionalidades

- **Página Home**: Mensagem de boas-vindas e links para navegação.
- **Página Produtos**: Contém dois componentes:
  - `ExibirTexto`: Exibe o texto atual.
  - `AlterarTexto`: Permite alterar o texto compartilhado.
- **Página Sobre**: Informações gerais sobre a aplicação.
- **Navegação com React Router** entre as três páginas.
- **Estado compartilhado (Lift State Up)** entre componentes da página Produtos.

---

## 🧱 Estrutura de Pastas

```bash
lift-state-router/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── AlterarTexto.jsx
│ │ └── ExibirTexto.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Produtos.jsx
│ │ └── Sobre.jsx
│ ├── App.jsx
│ └── main.jsx
├── .gitignore
├── package.json
└── README.md

---

## 📦 Instalação e Execução

### 1. Clone o repositório:

```bash
git clone https://github.com/gzluizz/State-Lift-e-Router.git
