
---

### `docs/arquitetura.md`

```md
---
sidebar_position: 4
sidebar_label: Arquitetura
---

# Arquitetura da Aplicação

A **Loja Checkpoint** segue uma arquitetura modular, separando responsabilidades
por ficheiro Python.

## Visão geral

- Interface em **modo texto** (CLI);
- Lógica de negócio em módulos Python;
- Armazenamento de dados na **Supabase** (utilizadores, produtos, compras, etc.).

```text
+-------------------------+
|  Utilizador (terminal)  |
+------------+------------+
             |
             v
+-------------------------+
|   Módulos Python        |
|  (autenticação,         |
|   carrinho, wishlist…)  |
+------------+------------+
             |
             v
+-------------------------+
|      Supabase           |
|  (tabelas e API REST)   |
+-------------------------+
