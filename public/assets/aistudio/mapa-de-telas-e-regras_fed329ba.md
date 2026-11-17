# Mapa de telas e regras gerais

Use na montagem da base do protótipo para configurar papéis, navegação e rotas manequim.

## Regras gerais

- Superadmin administra clubes, planos e cobranças SaaS. Gestor opera no próprio clube. Membro consulta apenas os próprios registros e os comunicados publicados para seu público.
- Confirmação de participação e presença são estados distintos. O gestor registra presença. A frequência usa apenas eventos elegíveis com chamada finalizada.
- O membro pode justificar uma falta registrada. Enviar uma justificativa mantém a falta. A gestão analisa, decide e registra a decisão.
- Comunicados publicados respeitam o público do clube. Criação, edição, fixação e arquivamento são ações da gestão. Fixados ativos fora do período aparecem em seção própria, sem duplicar.
- Disciplina do membro inclui somente os registros liberados para ele. Observações internas ficam restritas à gestão.
- Mensalidades internas são registradas pela gestão. Cobranças SaaS refletem o gateway, preservam os valores contratados e são consultadas pelo Superadmin.
- Eventos usa os próximos 3 meses para Próximos e os últimos 3 meses para Realizados. Frequência, disciplina e comunicados começam nos últimos 3 meses. Financeiro começa na competência atual. Cadastros não recebem corte temporal padrão.
- Intervalos personalizados usam início inclusivo e fim exclusivo. Abrir um evento antigo por vínculo direto deve incluir aquele evento no recorte.
- Filtros e paginação são processados no serviço simulado e, depois, no servidor. Totais usam todo o recorte filtrado. Datas seguem o fuso do clube.

## Mapa de telas

### Gestão do motoclube

Tela inicial: 01 · Dashboard.

#### Painel

- 01 · Painel do gestor → 17 · Identidade do motoclube, G28 · Minha assinatura

#### Membros

- 02 · Membros → 03 · Perfil do membro, 18 · Cadastrar membro
- 18 · Cadastrar membro
- 03 · Perfil do membro → 09 · Eventos e frequência do membro, 11 · Disciplina, 18E · Editar membro, 27 · Nível e histórico
- 27 · Nível e histórico → 27M · Confirmar mudança de nível
- 27M · Confirmar mudança de nível
- 18E · Editar membro → 27 · Nível e histórico
- 09 · Eventos e frequência → 07 · Detalhe do evento

#### Financeiro

- 05 · Financeiro → 25 · Registrar recebimento
- 25 · Registrar recebimento

#### Eventos

- 06 · Eventos → 07 · Detalhe do evento, 19 · Criar evento
- 19 · Criar evento
- 07 · Detalhes do evento → 08 · Participantes e presença, 19E · Editar evento
- 19E · Editar evento
- 08 · Participantes e presença → 08M · Modal de presença
- 08M · Registrar presença

#### Mais • Hierarquia

- 04 · Hierarquia

#### Mais • Disciplina

- 11 · Disciplina → 12 · Registrar ocorrência
- 12 · Registrar ocorrência

#### Mais • Comunicados

- 13 · Comunicados → 14 · Novo comunicado, 23 · Detalhe do comunicado
- 14 · Novo comunicado
- 23 · Detalhe do comunicado

#### Mais • Identidade, assinatura e relatórios

- 17 · Identidade do motoclube
- G28 · Minha assinatura

### Área do membro

Tela inicial: U01 · Início do membro.

#### Dashboard e perfil

- U01 · Início do membro → U02 · Meu perfil, U08 · Evento — confirmar participação, U10 · Evento encerrado — falta, U16 · Comunicado aberto — membro, U06 · Minha frequência, U05 · Minha situação financeira, U13 · Minha disciplina
- U02 · Meu perfil → U03 · Editar meus dados, U06 · Minha frequência, U13 · Minha disciplina, U05 · Minha situação financeira
- U03 · Editar meus dados
- U05 · Minha situação financeira
- U06 · Minha frequência → U10 · Evento encerrado — falta

#### Eventos — mesma tela, estados diferentes

- U07 · Eventos do membro → U08 · Evento — confirmar participação, U10 · Evento encerrado — falta
- U08 · Evento — confirmar participação → U09 · Evento — participação confirmada
- U09 · Evento — participação confirmada → U08 · Evento — confirmar participação
- U10 · Evento encerrado — falta → U11 · Modal — enviar justificativa

#### Justificativa — modal, análise e resultados

- U11 · Modal — enviar justificativa → U12 · Justificativa — em análise
- U12 · Justificativa — em análise
- U18 · Justificativa — aprovada
- U19 · Justificativa — não aceita

#### Disciplina e comunicados

- U13 · Minha disciplina → U14 · Detalhe do meu registro disciplinar
- U14 · Detalhe do meu registro disciplinar
- U15 · Comunicados do membro → U16 · Comunicado aberto — membro
- U16 · Comunicado aberto — membro

### Superadmin desktop

Tela inicial: S02 · Motoclubes.

#### Motoclubes e indicadores

- S02 · Motoclubes → S02D · Motoclube — painel lateral, S02F · Cadastrar / editar motoclube
- S02D · Motoclube — painel lateral → S02F · Cadastrar / editar motoclube, S02X · Suspender acesso — confirmação, S05D · Cobrança — painel lateral
- S02F · Cadastrar / editar motoclube
- S02X · Suspender acesso — confirmação

#### Planos

- S03 · Planos → S03F · Cadastrar / editar plano
- S03F · Cadastrar / editar plano

#### Pagamentos

- S05 · Pagamentos → S05D · Cobrança — painel lateral
- S05D · Cobrança — painel lateral
