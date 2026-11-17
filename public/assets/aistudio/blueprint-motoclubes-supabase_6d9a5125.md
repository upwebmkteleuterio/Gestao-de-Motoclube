# Blueprint de arquitetura — Motoclubes (Supabase)

## Escopo desta entrega

- Fase atual: protótipo local. Use este documento como referência de tipos, mocks, serviços simulados e contratos de tela.
- Supabase é o destino de uma fase posterior, após a aprovação do protótipo e mediante solicitação explícita de integração.

## Pontos a confirmar na etapa de produção

- Tipos, chaves e restrições são propostas para a futura implementação. A definição final de campos nulos e estados faz parte da etapa de produção.
- Gateway, primeiro acesso, política de mensalidades e autorização do Superadmin global permanecem decisões da etapa de produção.

## Tabelas e colunas

Os IDs na coluna de leitura correspondem à seção Contratos por tela e hooks. Os vínculos representam consumo pelo sistema e podem ser atendidos por projeções com permissões específicas.

### `motoclubes` — Clube

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | S02F · Cadastrar / editar motoclube, Servidor e banco | 01, 02, 03, 04, 05, 06, 07, 08, 08M, 09, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, U01, U02, U03, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U18, U19, G28, S02, S02D, S02F, S02X, S05, S05D, 18E, 19E |
| `nome` | `text` | — | 17 · Identidade do motoclube, S02F · Cadastrar / editar motoclube | 01, 02, 03, 04, 05, 06, 07, 08, 08M, 09, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, U01, U02, U03, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U18, U19, G28, S02, S02D, S02F, S02X, S05, S05D, 18E, 19E |
| `gestor_usuario_id` | `uuid` | FK → usuarios.id | S02F · Cadastrar / editar motoclube | 17, S02, S02D, S02F, S02X, S05, S05D |
| `telefone` | `text` | — | S02F · Cadastrar / editar motoclube | 17, S02, S02D, S02F, S02X, S05, S05D |
| `cidade` | `text` | — | S02F · Cadastrar / editar motoclube | 01, 02, 03, 04, 05, 06, 07, 08, 08M, 09, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, U01, U02, U03, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U18, U19, G28, S02, S02D, S02F, S02X, S05, S05D, 18E, 19E |
| `uf` | `text` | — | S02F · Cadastrar / editar motoclube | 01, 02, 03, 04, 05, 06, 07, 08, 08M, 09, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, U01, U02, U03, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U18, U19, G28, S02, S02D, S02F, S02X, S05, S05D, 18E, 19E |
| `status_acesso` | `text` | — | S02F · Cadastrar / editar motoclube, S02X · Suspender acesso — confirmação | 17, S02, S02D, S02F, S02X, S05, S05D |
| `excluido_em` | `timestamptz` | Nulo quando não aplicável | S02F · Cadastrar / editar motoclube | 17, S02, S02D, S02F, S02X, S05, S05D |

### `usuarios` — Usuários

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK · FK → auth.users.id | 18 · Cadastrar membro, S02F · Cadastrar / editar motoclube, Autenticação e provisionamento, Servidor e banco | 01, 02, 03, 04, 05, 06, 07, 08, 08M, 09, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, 27, U01, U02, U03, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U18, U19, G28, S02, S02D, S02F, 18E, 19E |
| `nome` | `text` | — | 18 · Cadastrar membro, S02F · Cadastrar / editar motoclube, Autenticação e provisionamento, 18E · Editar membro | 01, 02, 03, 04, 05, 06, 07, 08, 08M, 09, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, 27, U01, U02, U03, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U18, U19, G28, S02, S02D, S02F, 18E, 19E |
| `email` | `text` | — | 18 · Cadastrar membro, S02F · Cadastrar / editar motoclube, Autenticação e provisionamento, 18E · Editar membro | 13, 18, 23, U03, U15, U16, S02, S02D, S02F, 18E |
| `foto_url` | `text` | Nulo quando não aplicável | 18 · Cadastrar membro, S02F · Cadastrar / editar motoclube, Autenticação e provisionamento | 01, 02, 03, 04, 05, 06, 07, 08, 08M, 09, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, U01, U02, U03, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U18, U19, G28, S02, S02D, S02F, 18E, 19E |

### `vinculos` — Vínculos de acesso

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | 18 · Cadastrar membro, S02F · Cadastrar / editar motoclube, Autenticação e provisionamento, Servidor e banco | 18, S02, S02D, S02F, 18E |
| `usuario_id` | `uuid` | FK → usuarios.id | 18 · Cadastrar membro, S02F · Cadastrar / editar motoclube, Autenticação e provisionamento | 18, S02, S02D, S02F, 18E |
| `motoclube_id` | `uuid` | FK → motoclubes.id | 18 · Cadastrar membro, S02F · Cadastrar / editar motoclube, Autenticação e provisionamento | 18, S02, S02D, S02F, 18E |
| `membro_id` | `uuid` | FK → membros.id · Nulo quando não aplicável | 18 · Cadastrar membro, S02F · Cadastrar / editar motoclube, Autenticação e provisionamento | 18, S02, S02D, S02F, 18E |
| `papel` | `text` | — | 18 · Cadastrar membro, S02F · Cadastrar / editar motoclube, Autenticação e provisionamento | 18, S02, S02D, S02F, 18E |
| `status` | `text` | — | 18 · Cadastrar membro, S02F · Cadastrar / editar motoclube, Autenticação e provisionamento | 18, S02, S02D, S02F, 18E |

UNIQUE (usuario_id, motoclube_id). Validar que membro_id, quando presente, pertence ao mesmo clube.

### `identidade_motoclube` — Identidade

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `motoclube_id` | `uuid` | PK · FK → motoclubes.id | 17 · Identidade do motoclube | 01, 02, 03, 04, 05, 06, 07, 08, 08M, 09, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, U01, U02, U03, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U18, U19, G28, 18E, 19E |
| `logo_url` | `text` | Nulo quando não aplicável | 17 · Identidade do motoclube | 01, 02, 03, 04, 05, 06, 07, 08, 08M, 09, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, U01, U02, U03, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U18, U19, G28, 18E, 19E |
| `paleta_id` | `text` | — | 17 · Identidade do motoclube | 01, 02, 03, 04, 05, 06, 07, 08, 08M, 09, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, U01, U02, U03, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U18, U19, G28, 18E, 19E |
| `cor_destaque_hex` | `text` | Nulo quando não aplicável | 17 · Identidade do motoclube | 01, 02, 03, 04, 05, 06, 07, 08, 08M, 09, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, U01, U02, U03, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U18, U19, G28, 18E, 19E |
| `atualizado_em` | `timestamptz` | — | 17 · Identidade do motoclube, Servidor e banco | 01, 02, 03, 04, 05, 06, 07, 08, 08M, 09, 11, 12, 13, 14, 16, 17, 18, 19, 23, 24, 25, 26, U01, U02, U03, U05, U06, U07, U08, U09, U10, U11, U12, U13, U14, U15, U16, U18, U19, G28, 18E, 19E |

### `membros` — Membros

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | 18 · Cadastrar membro, Servidor e banco | 01, 02, 03, 04, 05, 06, 08, 08M, 09, 11, 12, 16, 18, 19, 24, 25, 27, U01, U02, U03, U05, U06, U07, U13, U14, U15, U16, G28, S02, S02D, 18E, 19E, 27M |
| `motoclube_id` | `uuid` | FK → motoclubes.id | 18 · Cadastrar membro | 01, 02, 03, 04, 05, 06, 08, 08M, 09, 11, 12, 16, 18, 19, 24, 25, 27, U01, U02, U03, U05, U06, U07, U13, U14, U15, U16, G28, S02, S02D, 18E, 19E, 27M |
| `usuario_id` | `uuid` | FK → usuarios.id | 18 · Cadastrar membro | 01, 02, 03, 04, 05, 06, 08, 08M, 09, 11, 12, 16, 18, 19, 24, 25, 27, U01, U02, U03, U05, U06, U07, U13, U14, U15, U16, 18E, 19E |
| `nome` | `text` | — | 18 · Cadastrar membro, 18E · Editar membro | 01, 02, 03, 04, 05, 06, 08, 08M, 09, 11, 12, 16, 18, 19, 24, 25, 27, U01, U02, U03, U05, U06, U07, U13, U14, U15, U16, 18E, 19E, 27M |
| `apelido` | `text` | Nulo quando não aplicável | 18 · Cadastrar membro, U03 · Editar meus dados, 18E · Editar membro | 01, 02, 03, 04, 05, 06, 08, 08M, 09, 11, 12, 16, 18, 19, 24, 25, 27, U01, U02, U03, U05, U06, U07, U13, U14, U15, U16, 18E, 19E |
| `foto_url` | `text` | Nulo quando não aplicável | 18 · Cadastrar membro, U03 · Editar meus dados, 18E · Editar membro | 01, 02, 03, 04, 05, 06, 08, 08M, 09, 11, 12, 16, 18, 19, 24, 25, 27, U01, U02, U03, U05, U06, U07, U13, U14, U15, U16, 18E, 19E |
| `entrada_em` | `date` | — | 18 · Cadastrar membro, 18E · Editar membro | 01, 02, 03, 04, 05, 06, 08, 08M, 09, 11, 12, 16, 18, 19, 24, 25, 27, 18E, 19E |
| `nivel_id` | `uuid` | FK → niveis.id | 18 · Cadastrar membro, 27M · Confirmar mudança de nível | 01, 02, 03, 04, 05, 06, 08, 08M, 09, 11, 12, 16, 18, 19, 24, 25, 27, U01, U02, U03, U05, U06, U07, U13, U14, U15, U16, 18E, 19E, 27M |
| `status` | `text` | — | 18 · Cadastrar membro, 18E · Editar membro | 01, 02, 03, 04, 05, 06, 08, 08M, 09, 11, 12, 16, 18, 19, 24, 25, 27, U01, U02, U03, U05, U06, U07, U13, U14, U15, U16, G28, S02, S02D, 18E, 19E |
| `telefone` | `text` | — | 18 · Cadastrar membro, U03 · Editar meus dados, 18E · Editar membro | 01, 02, 03, 04, 05, 06, 08, 08M, 09, 11, 12, 16, 18, 19, 24, 25, 27, U01, U02, U03, U05, U06, U07, U13, U14, U15, U16, 18E, 19E |
| `cadastrado_em` | `timestamptz` | — | 18 · Cadastrar membro, Servidor e banco | 01, 02, 03, 04, 05, 06, 08, 08M, 09, 11, 12, 16, 18, 19, 24, 25, 27, 18E, 19E |

### `niveis` — Níveis

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | 26 · Criar / editar nível, Servidor e banco | 01, 02, 03, 04, 08, 09, 13, 14, 18, 19, 23, 26, 27, U01, U02, U05, U06, U13, U15, U16, 18E, 19E, 27M |
| `motoclube_id` | `uuid` | FK → motoclubes.id | 26 · Criar / editar nível | 01, 02, 03, 04, 08, 09, 13, 14, 18, 19, 23, 26, 27, U01, U02, U05, U06, U13, U15, U16, 18E, 19E, 27M |
| `nome` | `text` | — | 26 · Criar / editar nível | 01, 02, 03, 04, 08, 09, 13, 14, 18, 19, 23, 26, 27, U01, U02, U05, U06, U13, U15, U16, 18E, 19E, 27M |
| `ordem` | `integer` | — | 26 · Criar / editar nível | 01, 02, 03, 04, 08, 09, 13, 14, 18, 19, 23, 26, 27, U01, U02, U05, U06, U13, U15, U16, 18E, 19E, 27M |

Ordem única por clube. Mudança de nível e inserção no histórico são atômicas.

### `historico_niveis` — Histórico de níveis

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | 27M · Confirmar mudança de nível, Servidor e banco, 18 · Cadastrar membro | 27 |
| `motoclube_id` | `uuid` | FK → motoclubes.id | 27M · Confirmar mudança de nível, 18 · Cadastrar membro | 27 |
| `membro_id` | `uuid` | FK → membros.id | 27M · Confirmar mudança de nível, 18 · Cadastrar membro | 27 |
| `nivel_anterior` | `uuid` | FK → niveis.id · Nulo quando não aplicável | 27M · Confirmar mudança de nível, 18 · Cadastrar membro | 27 |
| `nivel_novo` | `uuid` | FK → niveis.id | 27M · Confirmar mudança de nível, 18 · Cadastrar membro | 27 |
| `alterado_em` | `timestamptz` | — | 27M · Confirmar mudança de nível, 18 · Cadastrar membro | 27 |
| `gestor_id` | `uuid` | FK → usuarios.id | 27M · Confirmar mudança de nível, 18 · Cadastrar membro | 27 |

### `eventos` — Eventos

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | 19 · Criar evento, Servidor e banco, 19E · Editar evento | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 11, 12, 16, 19, 24, 27, U01, U06, U07, U08, U09, U10, U11, U12, U13, U14, U18, U19, 19E |
| `motoclube_id` | `uuid` | FK → motoclubes.id | 19 · Criar evento, 19E · Editar evento | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 11, 12, 16, 19, 24, 27, U01, U06, U07, U08, U09, U10, U11, U12, U13, U14, U18, U19, 19E |
| `titulo` | `text` | — | 19 · Criar evento, 19E · Editar evento | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 11, 12, 16, 19, 24, 27, U01, U06, U07, U08, U09, U10, U11, U12, U13, U14, U18, U19, 19E |
| `descricao` | `text` | — | 19 · Criar evento, 19E · Editar evento | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 11, 12, 16, 19, 24, 27, U01, U06, U07, U08, U09, U10, U11, U12, U13, U14, U18, U19, 19E |
| `foto_url` | `text` | Nulo quando não aplicável | 19 · Criar evento, 19E · Editar evento | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 11, 12, 16, 19, 24, 27, U01, U06, U07, U08, U09, U10, U11, U12, U13, U14, U18, U19, 19E |
| `tipo` | `text` | — | 19 · Criar evento, 19E · Editar evento | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 11, 12, 16, 19, 24, 27, U01, U06, U07, U08, U09, U10, U11, U12, U13, U14, U18, U19, 19E |
| `inicio_em` | `timestamptz` | — | 19 · Criar evento, 19E · Editar evento | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 11, 12, 16, 19, 24, 27, U01, U06, U07, U08, U09, U10, U11, U12, U13, U14, U18, U19, 19E |
| `local` | `text` | — | 19 · Criar evento, 19E · Editar evento | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 11, 12, 16, 19, 24, 27, U01, U06, U07, U08, U09, U10, U11, U12, U13, U14, U18, U19, 19E |
| `estado` | `text` | — | 19 · Criar evento, 19E · Editar evento | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 11, 12, 16, 19, 24, 27, U01, U06, U07, U08, U09, U10, U11, U12, U13, U14, U18, U19, 19E |
| `publico` | `jsonb` | — | 19 · Criar evento, 19E · Editar evento | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 11, 12, 16, 19, 24, 27, U01, U06, U07, U08, U09, U10, U11, U12, U13, U14, U18, U19, 19E |
| `chamada_finalizada_em` | `timestamptz` | Nulo quando não aplicável | 19 · Criar evento, Publicação e finalização da chamada, 19E · Editar evento | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 11, 12, 16, 19, 24, 27, U01, U06, U07, U08, U09, U10, U11, U12, U13, U14, U18, U19, 19E |

### `participacoes` — Participações

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | Servidor e banco, Publicação e finalização da chamada | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 16, 27, U01, U06, U07, U08, U09, U10, U11, U12, U18, U19 |
| `motoclube_id` | `uuid` | FK → motoclubes.id | Publicação e finalização da chamada | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 16, 27, U01, U06, U07, U08, U09, U10, U11, U12, U18, U19 |
| `evento_id` | `uuid` | FK → eventos.id | Publicação e finalização da chamada | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 16, 27, U01, U06, U07, U08, U09, U10, U11, U12, U18, U19 |
| `membro_id` | `uuid` | FK → membros.id | Publicação e finalização da chamada | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 16, 27, U01, U06, U07, U08, U09, U10, U11, U12, U18, U19 |
| `esperado` | `boolean` | — | Publicação e finalização da chamada | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 16, 27, U01, U06, U07, U08, U09, U10, U11, U12, U18, U19 |
| `confirmacao` | `text` | — | U08 · Evento — confirmar participação, U09 · Evento — participação confirmada, Publicação e finalização da chamada | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 16, 27, U01, U06, U07, U08, U09, U10, U11, U12, U18, U19 |
| `confirmacao_em` | `timestamptz` | Nulo quando não aplicável | U08 · Evento — confirmar participação, U09 · Evento — participação confirmada, Publicação e finalização da chamada | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 16, 27, U01, U06, U07, U08, U09, U10, U11, U12, U18, U19 |
| `presenca` | `text` | Nulo quando não aplicável | 08M · Modal de presença, Publicação e finalização da chamada | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 16, 27, U01, U06, U07, U08, U09, U10, U11, U12, U18, U19 |
| `registrado_por` | `uuid` | FK → usuarios.id · Nulo quando não aplicável | 08M · Modal de presença, Publicação e finalização da chamada | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 16, 27, U01, U06, U07, U08, U09, U10, U11, U12, U18, U19 |
| `registrado_em` | `timestamptz` | Nulo quando não aplicável | 08M · Modal de presença, Publicação e finalização da chamada | 01, 02, 03, 04, 06, 07, 08, 08M, 09, 16, 27, U01, U06, U07, U08, U09, U10, U11, U12, U18, U19 |

UNIQUE (evento_id, membro_id). Confirmação e presença registradas separadamente.

### `justificativas` — Justificativas

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | Servidor e banco | 07, 08, 08M, 09, 27, U06, U08, U09, U10, U11, U12, U18, U19 |
| `participacao_id` | `uuid` | FK → participacoes.id | 08M · Modal de presença, U11 · Modal — enviar justificativa | 07, 08, 08M, 09, 27, U01, U06, U08, U09, U10, U11, U12, U18, U19 |
| `descricao` | `text` | — | 08M · Modal de presença, U11 · Modal — enviar justificativa | 07, 08, 08M, 09, 27, U06, U08, U09, U10, U11, U12, U18, U19 |
| `enviada_em` | `timestamptz` | — | U11 · Modal — enviar justificativa | 07, 08, 08M, 09, 27, U06, U08, U09, U10, U11, U12, U18, U19 |
| `status` | `text` | — | 08M · Modal de presença, U11 · Modal — enviar justificativa | 07, 08, 08M, 09, 27, U01, U06, U08, U09, U10, U11, U12, U18, U19 |
| `analisada_por` | `uuid` | FK → usuarios.id · Nulo quando não aplicável | 08M · Modal de presença | 07, 08, 08M, 09, 27 |
| `analisada_em` | `timestamptz` | Nulo quando não aplicável | 08M · Modal de presença | 07, 08, 08M, 09, 27, U06, U08, U09, U10, U11, U12, U18, U19 |
| `observacao_decisao` | `text` | Nulo quando não aplicável | 08M · Modal de presença | 07, 08, 08M, 09, 27 |
| `origem` | `text` | — | 08M · Modal de presença, U11 · Modal — enviar justificativa | 07, 08, 08M, 09, 27, U06, U08, U09, U10, U11, U12, U18, U19 |
| `criada_por` | `uuid` | FK → usuarios.id | 08M · Modal de presença, U11 · Modal — enviar justificativa | 07, 08, 08M, 09, 27 |

UNIQUE (participacao_id). Autor e status inicial são definidos no servidor.

### `ocorrencias` — Disciplina

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | 12 · Registrar ocorrência, Servidor e banco | 03, 11, 12, 16, 24, U01, U13, U14 |
| `motoclube_id` | `uuid` | FK → motoclubes.id | 12 · Registrar ocorrência | 03, 11, 12, 16, 24, U01, U13, U14 |
| `membro_id` | `uuid` | FK → membros.id | 12 · Registrar ocorrência | 03, 11, 12, 16, 24, U01, U13, U14 |
| `evento_id` | `uuid` | FK → eventos.id · Nulo quando não aplicável | 12 · Registrar ocorrência | 03, 11, 12, 16, 24, U01, U13, U14 |
| `data` | `date` | — | 12 · Registrar ocorrência | 03, 11, 12, 16, 24, U01, U13, U14 |
| `categoria` | `text` | — | 12 · Registrar ocorrência | 03, 11, 12, 16, 24, U01, U13, U14 |
| `descricao` | `text` | — | 12 · Registrar ocorrência | 03, 11, 12, 16, 24, U01, U13, U14 |
| `visivel_membro` | `boolean` | — | 12 · Registrar ocorrência, 24 · Detalhe / decisão disciplinar | 03, 11, 12, 16, 24, U01, U13, U14 |
| `observacao_interna` | `text` | Nulo quando não aplicável | 12 · Registrar ocorrência, 24 · Detalhe / decisão disciplinar | 03, 11, 12, 16, 24 |
| `status` | `text` | — | 12 · Registrar ocorrência, 24 · Detalhe / decisão disciplinar | 03, 11, 12, 16, 24, U01, U13, U14 |
| `decisao` | `text` | Nulo quando não aplicável | 12 · Registrar ocorrência, 24 · Detalhe / decisão disciplinar | 03, 11, 12, 16, 24, U01, U13, U14 |
| `gestor_id` | `uuid` | FK → usuarios.id | 12 · Registrar ocorrência, 24 · Detalhe / decisão disciplinar | 03, 11, 12, 16, 24 |

### `comunicados` — Comunicados

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | 14 · Novo comunicado, Servidor e banco | 13, 14, 23, U15, U16 |
| `motoclube_id` | `uuid` | FK → motoclubes.id | 14 · Novo comunicado | 13, 14, 23, U15, U16 |
| `titulo` | `text` | — | 14 · Novo comunicado | 13, 14, 23, U15, U16 |
| `conteudo` | `text` | — | 14 · Novo comunicado | 13, 14, 23, U15, U16 |
| `capa_url` | `text` | Nulo quando não aplicável | 14 · Novo comunicado | 13, 14, 23, U15, U16 |
| `autor_id` | `uuid` | FK → usuarios.id | 14 · Novo comunicado | 13, 14, 23, U15, U16 |
| `estado` | `text` | — | 14 · Novo comunicado, 13 · Comunicados, 23 · Detalhe do comunicado | 13, 14, 23, U15, U16 |
| `fixado` | `boolean` | — | 14 · Novo comunicado, 13 · Comunicados, 23 · Detalhe do comunicado | 13, 14, 23, U15, U16 |
| `publicado_em` | `timestamptz` | Nulo quando não aplicável | 14 · Novo comunicado | 13, 14, 23, U15, U16 |
| `atualizado_em` | `timestamptz` | — | 14 · Novo comunicado, 13 · Comunicados, 23 · Detalhe do comunicado, Servidor e banco | 13, 14, 23, U15, U16 |

### `comunicado_publico` — Público do comunicado

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `comunicado_id` | `uuid` | FK → comunicados.id | 14 · Novo comunicado | 13, 14, 23, U15, U16 |
| `todos` | `boolean` | — | 14 · Novo comunicado | 13, 14, 23, U15, U16 |
| `nivel_id` | `uuid` | FK → niveis.id · Nulo quando não aplicável | 14 · Novo comunicado | 13, 14, 23, U15, U16 |

Público geral usa todos=true e nivel_id nulo. Público por nível usa todos=false e nivel_id preenchido. Proposta: unicidade parcial para a linha geral e para cada par comunicado/nível. Validar exclusividade entre os dois modos na gravação.

### `mensalidades` — Mensalidades internas

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | Servidor e banco, Geração de mensalidades — regra pendente | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |
| `motoclube_id` | `uuid` | FK → motoclubes.id | Geração de mensalidades — regra pendente | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |
| `membro_id` | `uuid` | FK → membros.id | Geração de mensalidades — regra pendente | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |
| `competencia` | `date` | Primeiro dia do mês | Geração de mensalidades — regra pendente | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |
| `valor_centavos` | `integer` | Centavos inteiros | Geração de mensalidades — regra pendente | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |
| `vencimento` | `date` | — | Geração de mensalidades — regra pendente | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |
| `cancelada_em` | `timestamptz` | Nulo quando não aplicável | Geração de mensalidades — regra pendente | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |

Proposta: UNIQUE (motoclube_id, membro_id, competencia) para a cobrança recorrente atual. Definir discriminador antes de incluir outros tipos de cobrança.

### `recebimentos` — Recebimentos manuais

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | 25 · Registrar recebimento, Servidor e banco | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |
| `motoclube_id` | `uuid` | FK → motoclubes.id | 25 · Registrar recebimento | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |
| `mensalidade_id` | `uuid` | FK → mensalidades.id | 25 · Registrar recebimento | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |
| `valor_centavos` | `integer` | Centavos inteiros | 25 · Registrar recebimento | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |
| `recebido_em` | `timestamptz` | — | 25 · Registrar recebimento | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |
| `forma` | `text` | — | 25 · Registrar recebimento | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |
| `observacao` | `text` | Nulo quando não aplicável | 25 · Registrar recebimento | 01, 02, 03, 04, 05, 16, 25, 27 |
| `gestor_id` | `uuid` | FK → usuarios.id | 25 · Registrar recebimento | 01, 02, 03, 04, 05, 16, 25, 27 |
| `estornado_em` | `timestamptz` | Nulo quando não aplicável | 25 · Registrar recebimento | 01, 02, 03, 04, 05, 16, 25, 27, U01, U05 |

Recebimento manual. Correções por estorno auditado. Calcular saldo e validar gravações concorrentes em transação.

### `politica_mensalidades` — Política de mensalidades

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `motoclube_id` | `uuid` | PK · FK → motoclubes.id | Geração de mensalidades — regra pendente | — |
| `valor_centavos` | `integer` | Centavos inteiros | Geração de mensalidades — regra pendente | — |
| `dia_vencimento` | `integer` | — | Geração de mensalidades — regra pendente | — |
| `inicio_competencia` | `date` | Primeiro dia do mês | Geração de mensalidades — regra pendente | — |

### `planos_saas` — Planos SaaS

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | S03F · Cadastrar / editar plano, Servidor e banco | G28, S02, S02D, S02F, S03, S03F, S05, S05D |
| `nome` | `text` | — | S03F · Cadastrar / editar plano | G28, S02, S02D, S02F, S03, S03F, S05, S05D |
| `preco_mensal_centavos` | `integer` | Centavos inteiros | S03F · Cadastrar / editar plano | G28, S02, S02D, S02F, S03, S03F, S05, S05D |
| `limite_afiliados` | `integer` | — | S03F · Cadastrar / editar plano | G28, S02, S02D, S02F, S03, S03F, S05, S05D |
| `disponivel` | `boolean` | — | S03F · Cadastrar / editar plano | G28, S02, S02D, S02F, S03, S03F, S05, S05D |
| `versao` | `integer` | — | S03F · Cadastrar / editar plano | G28, S02, S02D, S02F, S03, S03F, S05, S05D |

### `assinaturas_saas` — Assinaturas SaaS

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | Servidor e banco, Gateway SaaS e eventos autenticados | G28, S02, S02D, S03, S05, S05D |
| `motoclube_id` | `uuid` | FK → motoclubes.id | Gateway SaaS e eventos autenticados | G28, S02, S02D, S03, S05, S05D |
| `plano_id` | `uuid` | FK → planos_saas.id | Gateway SaaS e eventos autenticados | G28, S02, S02D, S03, S05, S05D |
| `versao_preco` | `integer` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S03, S05, S05D |
| `valor_contratado_centavos` | `integer` | Centavos inteiros | Gateway SaaS e eventos autenticados | G28, S02, S02D, S03, S05, S05D |
| `limite_contratado` | `integer` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S03, S05, S05D |
| `periodicidade` | `text` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S03, S05, S05D |
| `status` | `text` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S03, S05, S05D |
| `periodo_inicio` | `date` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S03, S05, S05D |
| `periodo_fim` | `date` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S03, S05, S05D |
| `proxima_cobranca` | `date` | Nulo quando não aplicável | Gateway SaaS e eventos autenticados | G28, S02, S02D, S03, S05, S05D |
| `gateway_id` | `text` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S03, S05, S05D |

No máximo uma vigente por clube. Valores e limites congelados por contratação. Estados confirmados pelo gateway.

### `faturas_saas` — Faturas SaaS

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | Servidor e banco, Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `assinatura_id` | `uuid` | FK → assinaturas_saas.id | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `competencia` | `date` | Primeiro dia do mês | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `valor_centavos` | `integer` | Centavos inteiros | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `moeda` | `text` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `vencimento` | `date` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `status` | `text` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `gateway_id` | `text` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |

### `pagamentos_saas` — Pagamentos SaaS

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | Servidor e banco, Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `fatura_id` | `uuid` | FK → faturas_saas.id | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `valor_centavos` | `integer` | Centavos inteiros | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `status` | `text` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `pago_em` | `timestamptz` | Nulo quando não aplicável | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `meio` | `text` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |
| `gateway_id` | `text` | — | Gateway SaaS e eventos autenticados | G28, S02, S02D, S05, S05D |

### `eventos_gateway` — Eventos da integração

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `external_id` | `text` | PK | Gateway SaaS e eventos autenticados | — |
| `tipo` | `text` | — | Gateway SaaS e eventos autenticados | — |
| `recebido_em` | `timestamptz` | — | Gateway SaaS e eventos autenticados | — |
| `processado_em` | `timestamptz` | Nulo quando não aplicável | Gateway SaaS e eventos autenticados | — |
| `resultado` | `text` | — | Gateway SaaS e eventos autenticados | — |

external_id único para um provedor. Para múltiplos provedores, incluir provedor na chave de idempotência antes da integração.

### `auditoria` — Auditoria

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | Servidor e banco, Auditoria automática | — |
| `motoclube_id` | `uuid` | FK → motoclubes.id | Auditoria automática | — |
| `entidade` | `text` | — | Auditoria automática | — |
| `registro_id` | `uuid` | Referência lógica | Auditoria automática | — |
| `antes` | `jsonb` | — | Auditoria automática | — |
| `depois` | `jsonb` | — | Auditoria automática | — |
| `autor_id` | `uuid` | FK → usuarios.id | Auditoria automática | — |
| `criado_em` | `timestamptz` | — | Auditoria automática | — |
| `motivo` | `text` | — | Auditoria automática | — |

registro_id é referência lógica ao registro indicado em entidade. Restringir leitura e inserção a rotinas autorizadas.

### `auditoria_acesso` — Auditoria de acesso

| Coluna | Tipo proposto | Chave ou regra | Origem / gravação | Telas que leem |
| --- | --- | --- | --- | --- |
| `id` | `uuid` | PK | S02X · Suspender acesso — confirmação, Servidor e banco | — |
| `motoclube_id` | `uuid` | FK → motoclubes.id | S02X · Suspender acesso — confirmação | — |
| `ator_id` | `uuid` | FK → usuarios.id | S02X · Suspender acesso — confirmação | — |
| `motivo` | `text` | — | S02X · Suspender acesso — confirmação | — |
| `antes` | `jsonb` | — | S02X · Suspender acesso — confirmação | — |
| `depois` | `jsonb` | — | S02X · Suspender acesso — confirmação | — |
| `criado_em` | `timestamptz` | — | S02X · Suspender acesso — confirmação | — |

## Relações e integridade

- FK de todas as entidades operacionais ao motoclube; relações evento/membro/participação devem ter o mesmo motoclube. Não aceitar tenant do cliente como autorização.
- UNIQUE(evento_id,membro_id) em participacoes; UNIQUE(participacao_id) em justificativas; UNIQUE(usuario_id,motoclube_id) em vinculos.
- motoclubes.gestor_usuario_id → usuarios.id; membros.usuario_id → usuarios.id; membros.nivel_id → niveis.id; identidade_motoclube.motoclube_id → motoclubes.id (1:1).
- participacoes.evento_id → eventos.id e membro_id → membros.id; justificativas.participacao_id → participacoes.id. Salvar presença/decisão/auditoria atomicamente; rejeitar edição desatualizada.
- ocorrencias → membro e evento opcional; comunicado_publico → comunicado e nível opcional. Restringir validação de público no servidor e nunca retornar observação interna ao membro.
- mensalidades → membro; recebimentos → mensalidade. Valores em centavos, total não negativo, sem apagar recebimento: correção/estorno auditados. Geração não pode duplicar membro+competência+tipo de cobrança.
- assinaturas_saas.motoclube_id → clube, plano_id → plano; no máximo uma assinatura vigente por clube. faturas → assinatura; pagamentos → fatura. UNIQUE gateway_id por provedor e eventos_gateway.external_id por provedor.
- Ao escolher plano em S02F, servidor envia plano_id ao gateway e cria intenção pendente de assinatura; nunca confirmar pagamento por input do cadastro. Troca de plano de contrato existente via portal G28/gateway.
- Upload da logo valida tipo real, tamanho máximo5MB e permissão; salva URL/chave do arquivo. Remover usa placeholder. Validar HEX; seleção de paleta e override obedecem precedência documentada.
- Mudança de nível restrita ao gestor do clube. Validar nível de destino distinto e pertencente ao clube. Gravar nivel_id e histórico juntos, com nível anterior, novo nível, data e autor. Rejeitar alteração concorrente e gravação duplicada. Histórico inicial tem nível anterior vazio.

## Processos de sistema

### Autenticação e provisionamento

Sessão identifica usuário e papel; cadastro/vínculo de gestor por S02F e membro por18. Convite/primeiro acesso ainda exige fluxo a detalhar.

Tabelas gravadas: usuarios, vinculos.

### Servidor e banco

IDs, timestamps e tenant derivados no servidor, nunca confiados ao cliente.

Tabelas gravadas: motoclubes, usuarios, vinculos, identidade_motoclube, membros, niveis, historico_niveis, eventos, participacoes, justificativas, ocorrencias, comunicados, mensalidades, recebimentos, planos_saas, assinaturas_saas, faturas_saas, pagamentos_saas, auditoria, auditoria_acesso.

### Publicação e finalização da chamada

Publicar19 cria população esperada elegível. Não usar confirmação como presença. Correções auditadas. Controle de finalizar chamada ainda sem mockup.

Tabelas gravadas: participacoes, eventos.

### Geração de mensalidades — regra pendente

Produz mensalidades internas conforme política de valor/competência/vencimento. Formulário e política ainda pendentes; não são preenchidos pela tela17 de identidade.

Tabelas gravadas: mensalidades, politica_mensalidades.

### Gateway SaaS e eventos autenticados

Sessão de portal/checkout criada pelo servidor do clube autenticado; eventos assinados e idempotentes confirmam estados. Homologar provedor/meios/carência/cancelamento/troca antes de produção.

Tabelas gravadas: assinaturas_saas, faturas_saas, pagamentos_saas, eventos_gateway.

### Auditoria automática

Registrar autor, antes/depois, data e motivo em alterações relevantes.

Tabelas gravadas: auditoria.

## Fórmulas e regras de cálculo

- frequencia: No período por inicio_em: denominador = participações esperado=true em eventos encerrados, não cancelados e com chamada finalizada; numerador = presente nesse conjunto. Não registrada não vira falta automaticamente. Justificada continua ausência física. Se denominador0, exibir —, não0%. Arredondar apenas apresentação.
- financeiro_interno: Saldo = max(0, mensalidade.valor_centavos − soma de recebimentos não estornados). Pendente = soma dos saldos não cancelados; atraso = saldo>0 e vencimento anterior à data local. Em dia/a vencer/atraso são derivados, não inputs.
- presenca: Esperados = COUNT esperado=true; confirmados = COUNT confirmacao=confirmada; presentes/faltas = COUNT presenca. Justificadas = faltou AND justificativa.status=aceita, subconjunto das faltas. Contagens sempre do conjunto completo filtrado, nunca só página carregada.
- saas_kpis: Motoclubes = COUNT não excluídos, base atual. Recebido = SUM pagamentos confirmados por pago_em no período. Em aberto = saldo de faturas por vencimento no período. Filtros da listagem não alteram KPIs; seletor de mês altera só os dois financeiros. Sem lista de faturas em aberto no resumo.
- identidade: Paletas estáticas: vermelho/azul/laranja com fundo#0C0D10 e superfície#191B20; destaque#ED343B/#397BFA/#F58220. HEX manual válido #RRGGBB substitui destaque; nova paleta limpa override. Logo ausente usa ícone neutro. Preview local não grava. Garantir contraste por token; status semânticos não seguem destaque.
- historico_saas: G28 consulta faturas da própria assinatura no período por competência, com confirmação/data efetiva de pagamento do gateway; valores contratados preservados. S05 filtra faturas por vencimento. Novembro atual:596 recebido/398 aberto; histórico set/out de G28 fica fora desse mês.
- resumo_nivel: Eventos: filtrar por data de início, com chamada concluída e participação esperada. Taxa = presenças ÷ eventos elegíveis. Faltas justificadas fazem parte das faltas. Mensalidades: filtrar por vencimento no intervalo e excluir canceladas. A situação reflete os recebimentos registrados até a consulta. Quitação pela data em que os recebimentos válidos atingem o valor integral. Quitada até o vencimento = paga no prazo, depois do vencimento = paga com atraso. Saldo em aberto = vencida ou a vencer conforme a data local. Recebimento parcial mantém o saldo em aberto. O filtro incide só no resumo, e o histórico mostra todas as alterações.

## Contratos por tela e hooks

### 01 · Dashboard

- Leitura: membros, niveis, mensalidades, recebimentos, eventos, participacoes, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, IndicadoresDoPainel, CardDeEvento, AtalhoDoPerfil
- Abrir membros, financeiro ou eventos pelo painel

### 02 · Membros

- Leitura: membros, niveis, participacoes, eventos, mensalidades, recebimentos, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, BuscaDeMembros, FiltrosDeNivel, LinhaDeMembro, BotaoPrincipal
- Abrir perfil 03
- Adicionar membro → formulário pendente

### 03 · Perfil do membro

- Leitura: membros, niveis, eventos, participacoes, mensalidades, recebimentos, ocorrencias, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, IdentidadeDoMembro, AtalhoDoPerfil
- Nível e histórico → 27
- Editar membro → 18E
- Eventos e frequência → 09
- Disciplina → 11

### 04 · Hierarquia

- Leitura: niveis, membros, participacoes, eventos, mensalidades, recebimentos, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, LinhaDeNivelHierarquico
- Novo nível ou editar → 26
- useNiveisDoClube(): Query<NivelResumo[]> · NivelResumo { id: string, nome: string, ordem: number, totalMembros: number }
- Novo nível e editar navegam ao fluxo 26 com nivelId opcional. Este protótipo sinaliza que o formulário está pendente.

### 05 · Financeiro

- Leitura: membros, mensalidades, recebimentos, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, ResumoDaCompetencia, LinhaDeMensalidade
- Registrar recebimento → formulário pendente
- Definir geração das mensalidades → configuração pendente

### 06 · Eventos

- Leitura: eventos, participacoes, membros, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CardDeEvento, SeletorDePeriodo
- Tocar em qualquer parte do card → detalhe 07
- Criar evento → formulário 19. Editar evento → menu do detalhe 07 → formulário 19E.

### 07 · Detalhe do evento

- Leitura: eventos, participacoes, justificativas, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, CardDeEvento
- Abrir Participantes e presença 08
- Pendência de justificativa → 08 filtrada no evento e nas justificativas pendentes; tocar membro abre 08M

### 08 · Participantes e presença

- Leitura: eventos, membros, niveis, participacoes, justificativas, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, LinhaDeParticipante, OpcoesDePresenca
- Tocar no participante → modal 08M na própria tela
- Salvar no modal atualiza o mesmo registro e os totais
- Chamada só finaliza quando todos os esperados tiverem registro; estado de finalização ainda a desenhar

### 08M · Modal de presença

- Leitura: eventos, membros, participacoes, justificativas, motoclubes, identidade_motoclube, usuarios
- Gravação: participacoes, justificativas
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, LinhaDeParticipante, OpcoesDePresenca
- Salvar decisão → fecha modal e atualiza 08, 07 e histórico individual
- Cancelar / fechar mantém o registro anterior
- Nenhum caminho para tela separada Analisar justificativa

### 09 · Eventos e frequência do membro

- Leitura: membros, niveis, eventos, participacoes, justificativas, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, IdentidadeDoMembro, SeletorDePeriodo, ResumoDeIndicadores, LinhaDePresenca
- Abrir detalhe do evento 07
- Gestor consulta qualquer membro do próprio clube

### 11 · Disciplina

- Leitura: membros, ocorrencias, eventos, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, LinhaDeOcorrencia, AvisoDeAcessoRestrito, SeletorDePeriodo
- Registrar ocorrência → 12
- Abrir ocorrência → detalhe/decisão pendente
- useOcorrencias(filtros: { busca?: string, de?: string, ate?: string, status?: OcorrenciaStatus }): Query<{ registros: OcorrenciaResumo[], totais: { emAnalise: number, concluidas: number } }>
- OcorrenciaStatus deriva do enum do banco. Calcular totais com o mesmo recorte de período e busca, antes do filtro de situação. Abrir a tela 24 por ocorrenciaId.

### 12 · Registrar ocorrência

- Leitura: membros, eventos, ocorrencias, motoclubes, identidade_motoclube, usuarios
- Gravação: ocorrencias
- Componentes do UI Kit · CabecalhoDoClube, CabecalhoDeDetalhe, CampoDeFormulario, BotaoPrincipal, ControleDeVisibilidadeDoRegistro
- Salvar ocorrência
- Cancelar sem gravar
- useCriarOcorrencia(): Mutation<{ membroId: string, eventoId?: string, data: string, categoria: string, descricao: string, visivelMembro: boolean, observacaoInterna?: string }, { id: string }>
- Data é YYYY-MM-DD no fuso do clube. Servidor verifica vínculos, define o gestor e inicia o status como em análise. Projeções do membro excluem observacaoInterna mesmo quando o registro é visível.

### 13 · Comunicados

- Leitura: comunicados, comunicado_publico, usuarios, niveis, motoclubes, identidade_motoclube
- Gravação: comunicados
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CardDeComunicado, PublicoDoComunicado, IndicadorDeComunicadoFixado, SeletorDePeriodo
- Novo comunicado → 14
- Abrir conteúdo → 23
- Menu gestor: editar / fixar / arquivar
- useComunicados(filtros: { busca?: string, de?: string, ate?: string, estado?: "rascunho" | "publicado", cursor?: string }): Query<{ itens: ComunicadoResumo[], proximoCursor?: string }> e useAcaoComunicado(): Mutation<{ id: string, acao: "fixar" | "desafixar" | "arquivar" }, { id: string }>.
- Incluir comunicados ativos fixados mesmo fora do período conforme o blueprint; ordenar fixados antes dos demais, invalidar lista e detalhe após mutação.

### 14 · Novo comunicado

- Leitura: comunicados, comunicado_publico, niveis, motoclubes, identidade_motoclube, usuarios
- Gravação: comunicados, comunicado_publico
- Componentes do UI Kit · CabecalhoDoClube, CabecalhoDeDetalhe, CampoDeFormulario, BotaoPrincipal, SeletorDeCapaDoComunicado, AlternadorDeFixacao, PublicoDoComunicado
- Publicar
- Salvar rascunho
- Cancelar
- useSalvarComunicado(): Mutation<{ id?: string, titulo: string, conteudo: string, capaUrl?: string, publico: { todos: true } | { todos: false, nivelIds: string[] }, estado: "rascunho" | "publicado", fixado: boolean }, { id: string }>.
- Enviar capa ao armazenamento do clube antes da gravação. Persistir os públicos e o comunicado na mesma operação e disponibilizar a publicação aos níveis destinatários.

### 16 · Relatórios

- Leitura: membros, eventos, participacoes, mensalidades, recebimentos, ocorrencias, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Definir relatórios antes de desenhar indicadores

### 17 · Identidade do motoclube

- Leitura: motoclubes, identidade_motoclube, usuarios
- Gravação: motoclubes, identidade_motoclube
- Componentes do UI Kit · CabecalhoDeDetalhe, CampoDeFormulario, BotaoPrincipal, SeletorDePaletaDoClube, SeletorEPreviaDeLogo
- Salvar alterações → atualiza identidade do clube autenticado
- Cancelar descarta rascunho
- Ao escolher outra paleta, limpar substituição manual; preenchimento manual substitui apenas destaque
- useIdentidadeMotoclube(): Query<IdentidadeDoClube> e useSalvarIdentidade(): Mutation<{ nome: string, logoUrl?: string | null, paletaId: string, corDestaqueHex?: string }, IdentidadeDoClube>.
- Enviar logoUrl null para remover o logo. Trocar a paleta limpa a substituição manual. Validar HEX no servidor. Atualizar nome e identidade juntos, invalidar os dados usados pelo cabeçalho.

### 18 · Cadastrar membro

- Leitura: membros, niveis, usuarios, vinculos, motoclubes, identidade_motoclube
- Gravação: membros, usuarios, vinculos, historico_niveis
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, CampoDeFormulario, BotaoPrincipal, SeletorDeFoto
- Salvar membro, vínculo de acesso e registro inicial de nível na mesma operação
- Usar a data real informada para o ingresso. Registrar o nível inicial com a data efetiva conhecida, ou com a data do cadastro identificada como registro
- Cancelar descarta o rascunho

### 19 · Criar evento

- Leitura: eventos, niveis, membros, motoclubes, identidade_motoclube, usuarios
- Gravação: eventos
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, CampoDeFormulario, BotaoPrincipal, FotoHorizontalDoEvento, DataEHorarioLadoALado
- Publicar evento e criar população esperada elegível
- Editar reutiliza o mesmo formulário; alterar data não registra presença
- Após chamada finalizada, mudanças em esperados exigem revisão auditada; não reescrever presenças silenciosamente

### 23 · Detalhe do comunicado

- Leitura: comunicados, comunicado_publico, usuarios, niveis, motoclubes, identidade_motoclube
- Gravação: comunicados
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, PublicoDoComunicado, IndicadorDeComunicadoFixado
- Voltar à lista mantendo período e posição
- Gestor: menu editar / fixar / arquivar; membro não vê menu
- useComunicado(id: string): Query<ComunicadoDetalhe> e useAcaoComunicado() compartilhado com a tela 13.
- Preservar filtros e posição da lista ao voltar. O servidor verifica a permissão de edição, fixação e arquivamento a cada mutação.

### 24 · Detalhe / decisão disciplinar

- Leitura: membros, ocorrencias, eventos, motoclubes, identidade_motoclube, usuarios
- Gravação: ocorrencias
- Concluir registro
- Membro consulta somente versão permitida

### 25 · Registrar recebimento

- Leitura: membros, mensalidades, recebimentos, motoclubes, identidade_motoclube, usuarios
- Gravação: recebimentos
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, CampoDeFormulario, BotaoPrincipal, LinhaDeMensalidade
- Validar valor positivo e não superior ao saldo atual; recebimento parcial permitido
- Registrar manualmente pagamento recebido diretamente pelo clube; sem processar dinheiro
- Salvar com proteção contra duplo envio e concorrência; cancelar não grava

### 26 · Criar / editar nível

- Leitura: niveis, motoclubes, identidade_motoclube, usuarios
- Gravação: niveis
- Salvar em niveis

### 27 · Nível e histórico

- Leitura: membros, niveis, historico_niveis, eventos, participacoes, justificativas, mensalidades, recebimentos, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, IdentidadeDoMembro, ResumoDeIndicadores, LinhaDoTempo, SeletorDePeriodo
- Alterar nível → 27M
- Filtrar o resumo mantendo todo o histórico visível

### U01 · Início do membro

- Leitura: membros, niveis, participacoes, eventos, justificativas, mensalidades, recebimentos, ocorrencias, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, IdentidadeDoProprioMembro, IndicadoresPessoais, ProximoEncontroDoMembro, LinhaDeNavegacaoDoMembro
- Frequência → U06
- Financeiro → U05
- Disciplina → U13
- Abrir evento → U08
- Falta registrada → U10
- Sem tela institucional separada ou atalho de notificações
- useMeuPainel(): Query<MeuPainel>. MeuPainel contém identidade, nível, frequência, pendências, próximo evento e falta justificável do membro autenticado.
- Contar as confirmações do próximo evento no servidor, sem expor a lista de participantes. A falta precisa estar registrada e apta para justificativa. Exibir ocorrências em análise somente entre as que são visíveis ao membro.

### U02 · Meu perfil

- Leitura: membros, niveis, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, IdentidadeDoProprioMembro, LinhaDeNavegacaoDoMembro
- Editar meus dados U03
- Minha frequência U06
- Minha disciplina U13
- Minha situação financeira U05
- Sair encerra sessão
- useMeuPerfil(): Query<MeuPerfil> · { nome: string, apelido?: string, fotoUrl?: string, nivelAtual: NivelResumo }. useSair(): Mutation<void, void>. Encerrar a sessão e limpar consultas privadas.

### U03 · Editar meus dados

- Leitura: membros, usuarios, motoclubes, identidade_motoclube
- Gravação: membros
- Componentes do UI Kit · CabecalhoDoClube, CabecalhoDeDetalhe, CampoDeFormulario, BotaoPrincipal, FotoDePerfilEditavel, LinhaDeNavegacaoDoMembro
- Salvar → U02
- Cancelar não grava; nome/email só gestão
- useMeusDados(): Query<MeusDados>. Nome e e-mail somente leitura. useSalvarMeusDados(): Mutation<{ apelido?: string, telefone?: string, fotoUrl?: string }, MeusDados>.
- Enviar imagem ao armazenamento antes da mutação. O servidor deriva membro e clube da sessão. Invalidar perfil e início após salvar.

### U05 · Minha situação financeira

- Leitura: membros, niveis, mensalidades, recebimentos, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, IdentidadeDoProprioMembro, CompetenciaESaldoDoMembro, LinhaDeNavegacaoDoMembro
- Consultar meses anteriores
- Sem checkout, upload ou baixa pelo membro
- useMinhasMensalidades({ competencia }: { competencia: string }): Query<ResumoMensalidade>. useMeusRecebimentos({ cursor }?: { cursor?: string }): Query<Pagina<RecebimentoResumo>>. Competência YYYY-MM e dinheiro em centavos inteiros.
- Descontar somente recebimentos válidos. Consultar a competência no fuso do clube. A ação de registrar recebimento continua no financeiro do gestor.

### U06 · Minha frequência

- Leitura: membros, niveis, eventos, participacoes, justificativas, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, CabecalhoDeDetalhe, IdentidadeDoProprioMembro, ResumoDeFrequenciaDoMembro, ParticipacaoNoHistoricoDoMembro, SeletorDePeriodo
- Abrir evento encerrado U10
- Ver todos os eventos do período
- Sem alterar a presença
- useMinhaFrequencia(filtros: { de: string, ate: string, presenca?: PresencaStatus, cursor?: string }): Query<{ resumo: ResumoFrequencia, itens: ParticipacaoResumo[], proximoCursor?: string }>.
- ResumoFrequencia = { previstos: number, presencas: number, taxaPercentual: number | null }. A taxa é nula se não houver eventos elegíveis no período.
- Contabilizar somente participações previstas com chamada finalizada no fuso do clube. Os filtros de situação e cursor afetam a lista, sem alterar o resumo do período.
- Autorizar leitura pelo membro da sessão. O detalhe recebe o ID de evento/participação. Estado de falta abre U10; a presença continua sob gestão do clube.

### U07 · Eventos do membro

- Leitura: eventos, participacoes, membros, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, CardDeEventoDoMembro, SeletorDePeriodoDosEventos
- Tocar card → detalhe pessoal U08 ou U10
- Sem criar, editar ou gerenciar eventos
- useEventosDoMembro(filtro: { aba: "proximos" | "realizados", de?: string, ate?: string, cursor?: string }): Query<Pagina<EventoDoMembroResumo>>.
- O servidor deriva motoclube e membro da sessão. Filtrar pelo público e pelo período do evento no fuso do clube. Retornar a confirmação própria e total agregado de confirmados.
- Encaminhar pelo eventoId para o detalhe com a participação própria. Preservar aba, período e ponto da lista ao voltar.

### U08 · Evento — confirmar participação

- Leitura: eventos, participacoes, justificativas, motoclubes, identidade_motoclube, usuarios
- Gravação: participacoes
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, DetalheDeEventoDoMembro, PainelDeParticipacaoDoMembro
- Confirmar participação → U09
- Confirmar não registra presença
- Sem ícone de notificações ou lista de participantes
- useEventoDoMembro(eventoId: string): Query<EventoDoMembroDetalhe>. useDefinirMinhaConfirmacao(): Mutation<{ eventoId: string, confirmacao: "confirmada" | "cancelada" }, ConfirmacaoAtualizada>.
- Antes de confirmar ou cancelar, verificar no servidor evento publicado, público elegível, vínculo com o clube e prazo. Gravar confirmação e timestamp juntos, sem alteração de presença.
- Invalidar detalhe, lista e Início. Derivar o contador de todos os confirmados após a mutação e impedir duplo envio enquanto a ação estiver pendente.

### U09 · Evento — participação confirmada

- Leitura: eventos, participacoes, justificativas, motoclubes, identidade_motoclube, usuarios
- Gravação: participacoes
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, DetalheDeEventoDoMembro, PainelDeParticipacaoDoMembro
- Cancelar participação antes do início → U08; cancela apenas a confirmação, não altera presença
- Reutilizar useEventoDoMembro e useDefinirMinhaConfirmacao da U08. Derivar o estado visual confirmado e o contador da resposta do servidor.
- Cancelar até o início permitido pelo clube restaura a ação de confirmar e preserva a presença. Em erro, manter a confirmação que o servidor devolveu.

### U10 · Evento encerrado — falta

- Leitura: eventos, participacoes, justificativas, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, DetalheDeEventoDoMembro, PainelDeParticipacaoDoMembro, ModalDeJustificativaDoMembro, DecisaoDaJustificativaDoMembro
- Justificar falta → abre modal local U11, sem navegar para formulário separado
- Usar useEventoDoMembro para ler status finalizado e presença própria registrada pela gestão.
- Exibir Justificar falta apenas quando a participação for elegível e ainda não tiver justificativa enviada. Abrir o modal U11 no mesmo detalhe.

### U11 · Modal — enviar justificativa

- Leitura: eventos, participacoes, justificativas, motoclubes, identidade_motoclube, usuarios
- Gravação: justificativas
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, DetalheDeEventoDoMembro, PainelDeParticipacaoDoMembro, ModalDeJustificativaDoMembro
- Confirmar justificativa → salva, fecha modal e mostra U12
- Cancelar / X mantém o evento como estava
- Somente o próprio membro marcado faltou pode enviar
- useEnviarMinhaJustificativa(): Mutation<{ participacaoId: string, descricao: string }, JustificativaDoMembro>.
- Validar descrição após trim. No servidor, validar que a participação pertence ao membro, está marcada como falta e é elegível. Impedir envio duplicado em concorrência.
- O servidor grava origem, identidade, horário e status pendente e mantém a falta. Fechar o modal após confirmação da gravação. Em erro, manter o texto para nova tentativa.

### U12 · Justificativa — em análise

- Leitura: eventos, participacoes, justificativas, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, DetalheDeEventoDoMembro, PainelDeParticipacaoDoMembro, DecisaoDaJustificativaDoMembro
- Aguardar decisão do gestor
- Não reenviar enquanto houver justificativa submetida
- useMinhaJustificativa(participacaoId: string): Query<JustificativaDoMembro | null>. Invalidar detalhe e Início após criar uma justificativa.
- JustificativaDoMembro expõe texto, data e decisão visível. A presença segue faltou e o fluxo não oferece novo envio enquanto a justificativa estiver em análise.

### U13 · Minha disciplina

- Leitura: membros, niveis, ocorrencias, eventos, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, CabecalhoDeDetalhe, IdentidadeDoProprioMembro, LinhaDeRegistroDisciplinarDoMembro, AvisoDeVisibilidadeDisciplinar, SeletorDePeriodo
- Abrir registro U14
- Sem cadastro ou edição de ocorrências
- useMinhaDisciplina(filtros: { de?: string, ate?: string, situacao?: OcorrenciaStatus, cursor?: string }): Query<Pagina<OcorrenciaDoMembroResumo>>.
- Derivar clube e membro da sessão. Aplicar visivel_membro=true e o vínculo com o próprio membro antes de filtrar ou paginar. Usar datas no fuso do clube.
- Manter período, situação e posição ao abrir um registro. Não incluir observação interna na projeção de resumo.

### U14 · Detalhe do meu registro disciplinar

- Leitura: membros, ocorrencias, eventos, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, CabecalhoDeDetalhe, IdentidadeDoProprioMembro, ResumoDisciplinarDoMembro, AvisoDeVisibilidadeDisciplinar
- Voltar para U13 mantendo filtros
- Sem decidir ocorrência ou alterar histórico
- useMeuRegistroDisciplinar(ocorrenciaId: string): Query<OcorrenciaDoMembroDetalhe>.
- Revalidar no servidor a leitura pelo próprio membro e visibilidade do registro, inclusive em link direto. Retornar somente data, categoria, evento público vinculado, descrição disponibilizada e situação.
- Usar a mesma resposta de indisponibilidade para IDs ausentes ou sem acesso. Retornar à consulta de Disciplina preservando seu estado.

### U15 · Comunicados do membro

- Leitura: comunicados, comunicado_publico, usuarios, membros, niveis, motoclubes, identidade_motoclube
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, CardDeComunicadoDoMembro, PublicoDoComunicado, IndicadorDeComunicadoFixado, SeletorDePeriodo
- Abrir comunicado U16
- Sem rascunhos, novo, editar, fixar ou arquivar
- useMeusComunicados(filtros: { busca?: string, de?: string, ate?: string, cursor?: string }): Query<{ fixadosForaDoPeriodo: ComunicadoResumo[], itens: ComunicadoResumo[], proximoCursor?: string }>.
- Consultar apenas publicados e ativos do clube cujo público inclua o nível atual do membro ou todos. Aplicar a busca aos dois grupos, manter fixados ativos fora do período em seção própria e deduplicar pelo ID.
- Preservar busca, período e posição na volta do detalhe. Publicação e alterações editoriais pertencem ao fluxo do gestor.

### U16 · Comunicado aberto — membro

- Leitura: comunicados, comunicado_publico, usuarios, membros, niveis, motoclubes, identidade_motoclube
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, ComunicadoEmModoLeitura, PublicoDoComunicado, IndicadorDeComunicadoFixado
- Voltar preservando filtros e posição
- Sem comentários, reações ou botão de editar
- useMeuComunicado(comunicadoId: string): Query<ComunicadoDoMembroDetalhe>.
- Aplicar novamente as regras de publicação, clube e público no servidor, mesmo em link direto. Entregar título, autor, data, público, capa autorizada e conteúdo.
- Se o conteúdo for HTML, sanitizar antes de renderizar. Tornar anexos e capa acessíveis somente ao público autorizado. Preservar a consulta e a posição ao voltar.

### U18 · Justificativa — aprovada

- Leitura: eventos, participacoes, justificativas, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, DetalheDeEventoDoMembro, PainelDeParticipacaoDoMembro, DecisaoDaJustificativaDoMembro
- Somente consultar resultado; sem alterar decisão
- Usar useMinhaJustificativa da U12. A decisão aceita do gestor gera a indicação faltou/justificado. O registro de presença continua sendo falta.
- Este estado é somente leitura para o membro. A aprovação deve carregar os dados autorizados pelo evento e pela participação.

### U19 · Justificativa — não aceita

- Leitura: eventos, participacoes, justificativas, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDoMembro, DetalheDeEventoDoMembro, PainelDeParticipacaoDoMembro, DecisaoDaJustificativaDoMembro
- Somente consultar resultado; política de reenvio segue não habilitada
- Usar useMinhaJustificativa da U12. A decisão não aceita mantém o registro de falta e exibe o texto enviado, sem abrir novo envio.
- Este estado é somente leitura para o membro. Excluir notas internas e informações de outros participantes da resposta.

### G28 · Minha assinatura

- Leitura: assinaturas_saas, planos_saas, membros, faturas_saas, pagamentos_saas, motoclubes, identidade_motoclube, usuarios
- Gravação: —
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, ResumoDoPlanoSaaS, LinhaDePagamentoSaaS
- Gerenciar assinatura → servidor cria sessão curta do portal do gateway para o clube autenticado
- Portal permite atualizar cobrança, regularizar, alterar plano ou cancelar conforme recursos/regras homologados
- Retorno do portal apenas atualiza consulta; webhook autenticado confirma alterações
- Sem baixa manual, QR Pix de membros ou acesso do membro final
- useMinhaAssinatura(): Query<ResumoAssinaturaClube>, useHistoricoAssinatura({ de?: string, ate?: string, cursor?: string }): Query<{ itens: PagamentoAssinatura[], proximoCursor?: string }> e useAbrirPortalAssinatura(): Mutation<void, { url: string }>.
- O servidor identifica a assinatura pelo clube autenticado e cria sessão curta no gateway. Retorno apenas reconsulta. O webhook autenticado do gateway confirma alterações de plano, estado e cobrança.

### S02 · Motoclubes

- Leitura: motoclubes, usuarios, vinculos, membros, planos_saas, assinaturas_saas, faturas_saas, pagamentos_saas
- Gravação: —
- Componentes do UI Kit · AdminDesktopLayout, AdminSectionHeader, AdminStatusBadge, AdminClubMetrics, AdminClubFilters, AdminClubTable
- Abrir painel S02D
- Novo motoclube → S02F
- useMotoclubesAdmin({ busca?, planoId?, assinaturaStatus?, acessoStatus?, cursor? }): Query<Pagina<MotoclubeAdminResumo>>.
- useIndicadoresAdmin({ competencia }): Query<IndicadoresAdmin>. Retornar total de clubes, recebidos no período e faturas abertas em centavos, calculados no servidor.
- Abrir painel pelo clubeId e preservar filtros e posição da lista. Plano vigente e acesso são estados distintos.

### S02D · Motoclube — painel lateral

- Leitura: motoclubes, usuarios, vinculos, membros, assinaturas_saas, planos_saas, faturas_saas, pagamentos_saas
- Gravação: —
- Componentes do UI Kit · AdminDesktopLayout, AdminSectionHeader, AdminStatusBadge, AdminClubMetrics, AdminClubFilters, AdminClubTable, AdminClubDrawer
- Editar cadastro → S02F (mesmo formulário)
- Suspender/reativar acesso → S02X
- Abrir cobrança → S05D
- useMotoclubeAdmin(clubeId: string): Query<MotoclubeAdminDetalhe>. Retornar cadastro, gestor, uso, assinatura vigente e cobrança vinculada por ID.
- O painel pode abrir S02F, S02X e S05D. A sessão do Superadmin é revalidada para cada consulta; detalhes financeiros vêm de fatura e contrato, não do preço atual do plano.

### S02F · Cadastrar / editar motoclube

- Leitura: motoclubes, usuarios, vinculos, planos_saas
- Gravação: motoclubes, usuarios, vinculos
- Componentes do UI Kit · AdminDesktopLayout, AdminSectionHeader, AdminStatusBadge, AdminClubMetrics, AdminClubFilters, AdminClubTable, AdminClubForm
- Salvar cadastro; validar campos no servidor
- Cadastro não confirma pagamento; assinatura aguarda gateway
- Não alterar plano contratado pelo formulário de cadastro
- useSalvarMotoclubeAdmin(): Mutation<{ clubeId?: string, nome: string, gestorNome: string, email: string, telefone: string, cidade: string, uf: string, planoInicialId?: string }, { clubeId: string }>.
- Criar ou atualizar cadastro, usuário e vínculo pelos serviços autorizados. Na criação, enviar plano inicial ao servidor para intenção de assinatura pendente. Provisionamento Auth e gateway exigem idempotência e recuperação em caso de falha parcial.
- Campo de plano inicial aplica-se à criação. Edição cadastral não muda o plano contratado e nunca confirma cobrança.

### S02X · Suspender acesso — confirmação

- Leitura: motoclubes
- Gravação: motoclubes, auditoria_acesso
- Componentes do UI Kit · AdminDesktopLayout, AdminSectionHeader, AdminStatusBadge, AdminClubMetrics, AdminClubFilters, AdminClubTable, AdminClubDrawer, AdminClubAccessDialog
- Confirmar suspensão/reativação → motoclubes.status_acesso
- Registrar ator, motivo, antes/depois e data
- Suspender acesso não cancela assinatura
- useDefinirAcessoMotoclube(): Mutation<{ clubeId: string, statusDestino: AcessoStatus, motivo: string, statusEsperado: AcessoStatus }, { clubeId: string, statusAcesso: AcessoStatus }>.
- Exigir motivo após trim. Revalidar papel e estado esperado, gravar mudança e auditoria com ator e antes/depois em transação, invalidar lista/detalhe e reavaliar acesso do clube. A assinatura continua independente.

### S03 · Planos

- Leitura: planos_saas, assinaturas_saas
- Gravação: —
- Componentes do UI Kit · AdminDesktopLayout, AdminSectionHeader, AdminStatusBadge, AdminPlansTable
- Novo/editar plano → S03F
- usePlanosAdmin({ cursor? }): Query<Pagina<PlanoAdminResumo>>. Para cada plano, retornar versão atual, preço, limite, disponibilidade e quantidade de assinaturas vinculadas.
- Versões e contratos anteriores mantêm os valores originalmente contratados.

### S03F · Cadastrar / editar plano

- Leitura: planos_saas
- Gravação: planos_saas
- Componentes do UI Kit · AdminDesktopLayout, AdminSectionHeader, AdminStatusBadge, AdminPlansTable, AdminPlanVersionForm
- Salvar nova versão; preservar preço/limite dos contratos existentes
- useSalvarVersaoPlano(): Mutation<{ planoId?: string, versaoEsperada?: number, nome: string, precoMensalCentavos: number, limiteAfiliados: number, disponivel: boolean }, { planoId: string, versao: number }>.
- Validar preço em centavos, limite inteiro e estado de versão. Impedir conflitos e alterações retroativas. Disponibilidade afeta a contratação futura. Invalidar catálogo do Superadmin e seleção inicial de plano.

### S05 · Pagamentos

- Leitura: motoclubes, planos_saas, assinaturas_saas, faturas_saas, pagamentos_saas
- Gravação: —
- Componentes do UI Kit · AdminDesktopLayout, AdminSectionHeader, AdminStatusBadge, AdminInvoiceFilters, AdminInvoicesTable
- Abrir cobrança → S05D
- Paginação no servidor; sem baixa manual
- useCobrancasAdmin({ busca?, competencia?, status?, cursor? }): Query<Pagina<CobrancaAdminResumo>>. Consultar faturas com assinatura e clube; retornar totais do mesmo recorte de filtro.
- Competência em YYYY-MM na interface e valores em centavos. Preservar busca, período e estado ao voltar. Financeiro SaaS em leitura, estados confirmados pelo webhook do provedor.

### S05D · Cobrança — painel lateral

- Leitura: motoclubes, planos_saas, assinaturas_saas, faturas_saas, pagamentos_saas
- Gravação: —
- Componentes do UI Kit · AdminDesktopLayout, AdminSectionHeader, AdminStatusBadge, AdminInvoiceFilters, AdminInvoicesTable, AdminInvoiceDrawer
- Fechar painel; dados financeiros somente leitura
- useCobrancaAdmin(faturaId: string): Query<CobrancaAdminDetalhe>. Retornar competência, contrato, valor, vencimento, situação e referência de pagamento autorizada.
- Abrir pelo ID da fatura e voltar à lista filtrada ou ao painel do clube de origem. O gateway autenticado é a fonte de lançamentos e confirmações.

### 18E · Editar membro

- Leitura: membros, niveis, usuarios, vinculos, motoclubes, identidade_motoclube
- Gravação: membros, usuarios
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, CampoDeFormulario, BotaoPrincipal, SeletorDeFoto
- Salvar alterações cadastrais
- Alteração de e-mail exige atualização segura do acesso
- Cancelar mantém o cadastro

### 19E · Editar evento

- Leitura: eventos, niveis, membros, motoclubes, identidade_motoclube, usuarios
- Gravação: eventos
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, CampoDeFormulario, BotaoPrincipal, FotoHorizontalDoEvento, DataEHorarioLadoALado
- Salvar alterações do evento existente
- Reconciliar elegibilidade sem apagar presenças/justificativas; alterações após chamada exigem auditoria
- Cancelar mantém evento publicado anterior

### 27M · Confirmar mudança de nível

- Leitura: membros, niveis
- Gravação: membros, historico_niveis
- Componentes do UI Kit · CabecalhoDoClube, MenuMovelDaGestao, CabecalhoDeDetalhe, IdentidadeDoMembro, ModalDeMudancaDeNivel
- Confirmar grava o nível e o histórico juntos
- Cancelar fecha o modal
- Ao detectar mudança concorrente, recarregar o nível antes de confirmar

## Pendências do projeto

- Campos têm fonte e produtor documentados; isso é contrato de implementação, não banco ou integração já executados.
- Relatórios 16, decisão disciplinar 24 e formulário de níveis 26 ainda sem mockup. Finalização de chamada, política de mensalidades e primeiro acesso ainda exigem definição.
- Gateway/portal: provedor, meios, carência, mudança de plano e cancelamento exigem homologação.
- Relatórios dependem de escopo; não há indicadores extras prometidos.
- A barra de horário, bateria e sinal nos mockups representa o dispositivo. Descartar a marcação .mock-status no produto ou em novos HTMLs.
