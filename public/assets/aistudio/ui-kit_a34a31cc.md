# UI Kit

Crie ou atualize o índice de componentes do projeto a partir do manifesto abaixo. Mantenha cada export único, com o caminho real, propriedades e variantes que ele oferece. Os caminhos do manifesto são sugestões para um projeto novo. Ao receber os lotes de páginas, use o índice para resolver os imports e reaproveitar a implementação instalada.

## Manifesto de componentes

```json
[
  {
    "nome": "Cabeçalho do clube",
    "export": "CabecalhoDoClube",
    "arquivo_sugerido": "src/components/ui/CabecalhoDoClube.tsx",
    "uso": "ClubHeader recebe nome, local, marca e avatar do gestor."
  },
  {
    "nome": "Botão principal",
    "export": "BotaoPrincipal",
    "arquivo_sugerido": "src/components/ui/BotaoPrincipal.tsx",
    "uso": "PrimaryButton recebe texto, estado disabled e onClick."
  },
  {
    "nome": "Busca de membros",
    "export": "BuscaDeMembros",
    "arquivo_sugerido": "src/components/ui/BuscaDeMembros.tsx",
    "uso": "SearchField recebe value, placeholder e onChange."
  },
  {
    "nome": "Filtros de nível",
    "export": "FiltrosDeNivel",
    "arquivo_sugerido": "src/components/ui/FiltrosDeNivel.tsx",
    "uso": "LevelFilter recebe níveis, seleção atual e onSelect. Cada opção pode receber a contagem correspondente."
  },
  {
    "nome": "Linha de membro",
    "export": "LinhaDeMembro",
    "arquivo_sugerido": "src/components/ui/LinhaDeMembro.tsx",
    "uso": "MemberRow recebe nome, apelido, avatar, nível, ingresso, frequência e situação financeira. onOpen recebe o ID do membro. Frequência: usar barras e percentual visível. Classificar pelo valor bruto: 70% ou mais em verde, de 50% até menos de 70% em laranja e abaixo de 50% em vermelho. Frequência indisponível usa tom neutro e exibe “Sem dados”. Situação financeira: mostrar check verde e o texto “Em dia”, ou relógio laranja e o texto “Em atraso”, conforme o status recebido. A cor da frequência e a situação financeira são independentes."
  },
  {
    "nome": "Menu móvel da gestão",
    "export": "MenuMovelDaGestao",
    "arquivo_sugerido": "src/components/ui/MenuMovelDaGestao.tsx",
    "uso": "ManagementNav recebe itens, rota atual e onNavigate."
  },
  {
    "nome": "Cabeçalho de detalhe",
    "export": "CabecalhoDeDetalhe",
    "arquivo_sugerido": "src/components/ui/CabecalhoDeDetalhe.tsx",
    "uso": "Cabeçalho compartilhado entre Perfil e Nível e histórico. Recebe título, destino da seta Voltar e ação opcional."
  },
  {
    "nome": "Identidade do membro",
    "export": "IdentidadeDoMembro",
    "arquivo_sugerido": "src/components/ui/IdentidadeDoMembro.tsx",
    "uso": "A identidade usa foto, nome, apelido e nível. O Perfil inclui a entrada no clube. Nível e histórico destaca o nível atual."
  },
  {
    "nome": "Atalho do perfil",
    "export": "AtalhoDoPerfil",
    "arquivo_sugerido": "src/components/ui/AtalhoDoPerfil.tsx",
    "uso": "ProfileLink recebe título, descrição e destino."
  },
  {
    "nome": "Seletor de período",
    "export": "SeletorDePeriodo",
    "arquivo_sugerido": "src/components/ui/SeletorDePeriodo.tsx",
    "uso": "PeriodFilter recebe período e onApply. Alterar a opção ou aplicar um intervalo muda a consulta do resumo."
  },
  {
    "nome": "Resumo de indicadores",
    "export": "ResumoDeIndicadores",
    "arquivo_sugerido": "src/components/ui/ResumoDeIndicadores.tsx",
    "uso": "O resumo associa cada valor a seu rótulo e ícone. Frequência usa as faixas documentadas em Linha de membro."
  },
  {
    "nome": "Linha do tempo",
    "export": "LinhaDoTempo",
    "arquivo_sugerido": "src/components/ui/LinhaDoTempo.tsx",
    "uso": "LevelTimeline recebe mudanças ordenadas e exibe data, níveis e responsável."
  },
  {
    "nome": "Modal de mudança de nível",
    "export": "ModalDeMudancaDeNivel",
    "arquivo_sugerido": "src/components/ui/ModalDeMudancaDeNivel.tsx",
    "uso": "LevelChangeDialog recebe nível atual, opções, onConfirm e onCancel. Confirmar depende de seleção válida."
  },
  {
    "nome": "Campo de formulário",
    "export": "CampoDeFormulario",
    "arquivo_sugerido": "src/components/ui/CampoDeFormulario.tsx",
    "uso": "FormField recebe rótulo, valor, validação e texto de ajuda."
  },
  {
    "nome": "Seletor de foto",
    "export": "SeletorDeFoto",
    "arquivo_sugerido": "src/components/ui/SeletorDeFoto.tsx",
    "uso": "PhotoInput recebe URL atual, aceita arquivo de imagem e mostra a prévia antes de salvar."
  },
  {
    "nome": "Linha de presença",
    "export": "LinhaDePresenca",
    "arquivo_sugerido": "src/components/ui/LinhaDePresenca.tsx",
    "uso": "AttendanceRow recebe imagem, nome, data, local e presença. O clique abre o evento."
  },
  {
    "nome": "Card de evento",
    "export": "CardDeEvento",
    "arquivo_sugerido": "src/components/ui/CardDeEvento.tsx",
    "uso": "EventCard recebe foto, categoria, título, data, local e confirmações."
  },
  {
    "nome": "Linha de participante",
    "export": "LinhaDeParticipante",
    "arquivo_sugerido": "src/components/ui/LinhaDeParticipante.tsx",
    "uso": "ParticipantRow recebe membro, confirmação e presença. A seleção abre o modal da chamada."
  },
  {
    "nome": "Opções de presença",
    "export": "OpcoesDePresenca",
    "arquivo_sugerido": "src/components/ui/OpcoesDePresenca.tsx",
    "uso": "Grupo de opções com seleção única por teclado e mouse."
  },
  {
    "nome": "Foto horizontal do evento",
    "export": "FotoHorizontalDoEvento",
    "arquivo_sugerido": "src/components/ui/FotoHorizontalDoEvento.tsx",
    "uso": "PhotoInput na variante de capa horizontal. Recebe imagem atual, arquivo escolhido e feedback de validação."
  },
  {
    "nome": "Data e horário lado a lado",
    "export": "DataEHorarioLadoALado",
    "arquivo_sugerido": "src/components/ui/DataEHorarioLadoALado.tsx",
    "uso": "Reutilizar FormField para os dois controles e interpretar data e hora no fuso do clube."
  },
  {
    "nome": "Indicadores do painel",
    "export": "IndicadoresDoPainel",
    "arquivo_sugerido": "src/components/ui/IndicadoresDoPainel.tsx",
    "uso": "As métricas recebem valores e destinos de navegação."
  },
  {
    "nome": "Resumo da competência",
    "export": "ResumoDaCompetencia",
    "arquivo_sugerido": "src/components/ui/ResumoDaCompetencia.tsx",
    "uso": "Exibir previsto, recebido e saldo em aberto da competência consultada."
  },
  {
    "nome": "Linha de mensalidade",
    "export": "LinhaDeMensalidade",
    "arquivo_sugerido": "src/components/ui/LinhaDeMensalidade.tsx",
    "uso": "DuesRow recebe membro, situação, vencimento e saldo. O saldo positivo permite abrir o registro de recebimento."
  },
  {
    "nome": "Linha de nível hierárquico",
    "export": "LinhaDeNivelHierarquico",
    "arquivo_sugerido": "src/components/ui/LinhaDeNivelHierarquico.tsx",
    "uso": "Mostrar ordem, título, quantidade e ação contextual."
  },
  {
    "nome": "Linha de ocorrência",
    "export": "LinhaDeOcorrencia",
    "arquivo_sugerido": "src/components/ui/LinhaDeOcorrencia.tsx",
    "uso": "Renderizar os metadados e o status textual do registro."
  },
  {
    "nome": "Aviso de acesso restrito",
    "export": "AvisoDeAcessoRestrito",
    "arquivo_sugerido": "src/components/ui/AvisoDeAcessoRestrito.tsx",
    "uso": "Informar o escopo de leitura do membro."
  },
  {
    "nome": "Controle de visibilidade do registro",
    "export": "ControleDeVisibilidadeDoRegistro",
    "arquivo_sugerido": "src/components/ui/ControleDeVisibilidadeDoRegistro.tsx",
    "uso": "Toggle com descrição da permissão concedida ao membro."
  },
  {
    "nome": "Card de comunicado",
    "export": "CardDeComunicado",
    "arquivo_sugerido": "src/components/ui/CardDeComunicado.tsx",
    "uso": "Reutilizar na lista do gestor com título, resumo, autor, data, público e estado de fixação."
  },
  {
    "nome": "Público do comunicado",
    "export": "PublicoDoComunicado",
    "arquivo_sugerido": "src/components/ui/PublicoDoComunicado.tsx",
    "uso": "Exibir o público resolvido pelo blueprint e manter o ID do nível separado do rótulo."
  },
  {
    "nome": "Indicador de comunicado fixado",
    "export": "IndicadorDeComunicadoFixado",
    "arquivo_sugerido": "src/components/ui/IndicadorDeComunicadoFixado.tsx",
    "uso": "Refletir o estado retornado pela publicação e exibir apenas quando fixado."
  },
  {
    "nome": "Alternador de fixação",
    "export": "AlternadorDeFixacao",
    "arquivo_sugerido": "src/components/ui/AlternadorDeFixacao.tsx",
    "uso": "Vincular a propriedade booleana de fixação da publicação."
  },
  {
    "nome": "Seletor de capa do comunicado",
    "export": "SeletorDeCapaDoComunicado",
    "arquivo_sugerido": "src/components/ui/SeletorDeCapaDoComunicado.tsx",
    "uso": "Adaptar o seletor de foto existente ao formato horizontal com miniatura. Usar ID do arquivo carregado no contrato da publicação."
  },
  {
    "nome": "Seletor de paleta do clube",
    "export": "SeletorDePaletaDoClube",
    "arquivo_sugerido": "src/components/ui/SeletorDePaletaDoClube.tsx",
    "uso": "Seleciona uma paleta por vez. A troca remove a substituição manual da cor de destaque."
  },
  {
    "nome": "Seletor e prévia de logo",
    "export": "SeletorEPreviaDeLogo",
    "arquivo_sugerido": "src/components/ui/SeletorEPreviaDeLogo.tsx",
    "uso": "Mostra logo e aparência do rascunho sem publicar. Valida PNG/JPEG até 5 MB e aceita remover a imagem."
  },
  {
    "nome": "Resumo do plano SaaS",
    "export": "ResumoDoPlanoSaaS",
    "arquivo_sugerido": "src/components/ui/ResumoDoPlanoSaaS.tsx",
    "uso": "Exibe o plano contratado, o status, o uso do limite de afiliados e a próxima cobrança."
  },
  {
    "nome": "Linha de pagamento SaaS",
    "export": "LinhaDePagamentoSaaS",
    "arquivo_sugerido": "src/components/ui/LinhaDePagamentoSaaS.tsx",
    "uso": "Mostra competência, valor contratado, data efetiva do pagamento e situação."
  },
  {
    "nome": "Menu móvel do membro",
    "export": "MenuMovelDoMembro",
    "arquivo_sugerido": "src/components/ui/MenuMovelDoMembro.tsx",
    "uso": "Manter a ordem dos destinos, o foco de teclado e o estado ativo conforme a rota."
  },
  {
    "nome": "Identidade do próprio membro",
    "export": "IdentidadeDoProprioMembro",
    "arquivo_sugerido": "src/components/ui/IdentidadeDoProprioMembro.tsx",
    "uso": "Reutilizar a foto, o nome, o apelido e o nível atual. Variar a densidade conforme a tela."
  },
  {
    "nome": "Linha de navegação do membro",
    "export": "LinhaDeNavegacaoDoMembro",
    "arquivo_sugerido": "src/components/ui/LinhaDeNavegacaoDoMembro.tsx",
    "uso": "Usar ícone, título, descrição e seta. Aplicar hover, foco e ação de clique."
  },
  {
    "nome": "Indicadores pessoais",
    "export": "IndicadoresPessoais",
    "arquivo_sugerido": "src/components/ui/IndicadoresPessoais.tsx",
    "uso": "Ler os totais do membro e ligar cada indicador à consulta correspondente."
  },
  {
    "nome": "Próximo encontro do membro",
    "export": "ProximoEncontroDoMembro",
    "arquivo_sugerido": "src/components/ui/ProximoEncontroDoMembro.tsx",
    "uso": "Ler o próximo evento visível e o total de confirmações."
  },
  {
    "nome": "Foto de perfil editável",
    "export": "FotoDePerfilEditavel",
    "arquivo_sugerido": "src/components/ui/FotoDePerfilEditavel.tsx",
    "uso": "Mostrar a seleção de imagem em prévia e persistir somente ao salvar."
  },
  {
    "nome": "Competência e saldo do membro",
    "export": "CompetenciaESaldoDoMembro",
    "arquivo_sugerido": "src/components/ui/CompetenciaESaldoDoMembro.tsx",
    "uso": "Alterar a competência e recalcular saldo, situação e vencimento. O histórico exibe os recebimentos do próprio membro."
  },
  {
    "nome": "Resumo de frequência do membro",
    "export": "ResumoDeFrequenciaDoMembro",
    "arquivo_sugerido": "src/components/ui/ResumoDeFrequenciaDoMembro.tsx",
    "uso": "Mostrar total de eventos previstos, presenças e frequência do período."
  },
  {
    "nome": "Participação no histórico do membro",
    "export": "ParticipacaoNoHistoricoDoMembro",
    "arquivo_sugerido": "src/components/ui/ParticipacaoNoHistoricoDoMembro.tsx",
    "uso": "Mostrar foto, evento, data, local e presença. Abrir o detalhe autorizado pelo identificador da participação."
  },
  {
    "nome": "Card de evento do membro",
    "export": "CardDeEventoDoMembro",
    "arquivo_sugerido": "src/components/ui/CardDeEventoDoMembro.tsx",
    "uso": "Exibir foto, título, horário, local, total e estado pessoal. A ação carrega o evento por ID."
  },
  {
    "nome": "Detalhe de evento do membro",
    "export": "DetalheDeEventoDoMembro",
    "arquivo_sugerido": "src/components/ui/DetalheDeEventoDoMembro.tsx",
    "uso": "Compartilhar foto, informações e total entre os estados de evento e justificar falta."
  },
  {
    "nome": "Painel de participação do membro",
    "export": "PainelDeParticipacaoDoMembro",
    "arquivo_sugerido": "src/components/ui/PainelDeParticipacaoDoMembro.tsx",
    "uso": "Combinar status pessoal, ação permitida e descrição de quem registra a presença."
  },
  {
    "nome": "Seletor de período dos eventos",
    "export": "SeletorDePeriodoDosEventos",
    "arquivo_sugerido": "src/components/ui/SeletorDePeriodoDosEventos.tsx",
    "uso": "Exibir o intervalo e abrir o controle de data inicial e final."
  },
  {
    "nome": "Modal de justificativa do membro",
    "export": "ModalDeJustificativaDoMembro",
    "arquivo_sugerido": "src/components/ui/ModalDeJustificativaDoMembro.tsx",
    "uso": "Abrir sobre o detalhe do evento, exigir descrição, manter o foco no diálogo e gravar apenas ao confirmar."
  },
  {
    "nome": "Decisão da justificativa do membro",
    "export": "DecisaoDaJustificativaDoMembro",
    "arquivo_sugerido": "src/components/ui/DecisaoDaJustificativaDoMembro.tsx",
    "uso": "Exibir texto original e decisão pendente, aceita ou não aceita com rótulo e ícone."
  },
  {
    "nome": "Linha de registro disciplinar do membro",
    "export": "LinhaDeRegistroDisciplinarDoMembro",
    "arquivo_sugerido": "src/components/ui/LinhaDeRegistroDisciplinarDoMembro.tsx",
    "uso": "Exibir categoria, contexto público e situação, com link que preserva os filtros da lista."
  },
  {
    "nome": "Resumo disciplinar do membro",
    "export": "ResumoDisciplinarDoMembro",
    "arquivo_sugerido": "src/components/ui/ResumoDisciplinarDoMembro.tsx",
    "uso": "Mostrar data, evento, categoria e situação do registro liberado ao próprio membro."
  },
  {
    "nome": "Aviso de visibilidade disciplinar",
    "export": "AvisoDeVisibilidadeDisciplinar",
    "arquivo_sugerido": "src/components/ui/AvisoDeVisibilidadeDisciplinar.tsx",
    "uso": "Explicar que o membro recebe somente as informações disponibilizadas pela gestão."
  },
  {
    "nome": "Card de comunicado do membro",
    "export": "CardDeComunicadoDoMembro",
    "arquivo_sugerido": "src/components/ui/CardDeComunicadoDoMembro.tsx",
    "uso": "Mostrar capa, título, resumo, autor, data, público, fixação e link de leitura."
  },
  {
    "nome": "Comunicado em modo leitura",
    "export": "ComunicadoEmModoLeitura",
    "arquivo_sugerido": "src/components/ui/ComunicadoEmModoLeitura.tsx",
    "uso": "Apresentar título, capa, autor, destinatários e conteúdo após autorizar o ID."
  },
  {
    "nome": "Layout desktop do Superadmin",
    "export": "AdminDesktopLayout",
    "arquivo_sugerido": "src/components/ui/AdminDesktopLayout.tsx",
    "uso": "Manter navegação lateral, contexto e estado ativo da rota. Recebe active e children."
  },
  {
    "nome": "Cabeçalho de seção do Superadmin",
    "export": "AdminSectionHeader",
    "arquivo_sugerido": "src/components/ui/AdminSectionHeader.tsx",
    "uso": "Recebe title, subtitle e action opcional. Reusar nos três módulos."
  },
  {
    "nome": "Badge de situação do Superadmin",
    "export": "AdminStatusBadge",
    "arquivo_sugerido": "src/components/ui/AdminStatusBadge.tsx",
    "uso": "Recebe label e tone. Estado tem rótulo legível independente da cor."
  },
  {
    "nome": "Indicadores SaaS de motoclubes",
    "export": "AdminClubMetrics",
    "arquivo_sugerido": "src/components/ui/AdminClubMetrics.tsx",
    "uso": "Cadastro usa base atual e financeiro usa competência."
  },
  {
    "nome": "Filtros de motoclubes",
    "export": "AdminClubFilters",
    "arquivo_sugerido": "src/components/ui/AdminClubFilters.tsx",
    "uso": "Buscar por clube, gestor ou e-mail e filtrar plano, acesso e situação da assinatura."
  },
  {
    "nome": "Tabela de motoclubes",
    "export": "AdminClubTable",
    "arquivo_sugerido": "src/components/ui/AdminClubTable.tsx",
    "uso": "Tabela com dados contratuais e acesso ao painel por clube."
  },
  {
    "nome": "Painel de motoclube",
    "export": "AdminClubDrawer",
    "arquivo_sugerido": "src/components/ui/AdminClubDrawer.tsx",
    "uso": "Compor cadastro, gestor, assinatura e fatura atual. Ações por clube e fatura selecionados."
  },
  {
    "nome": "Formulário de motoclube",
    "export": "AdminClubForm",
    "arquivo_sugerido": "src/components/ui/AdminClubForm.tsx",
    "uso": "Cadastro e edição compartilham campos; o plano inicial pertence apenas ao cadastro."
  },
  {
    "nome": "Confirmação de acesso do motoclube",
    "export": "AdminClubAccessDialog",
    "arquivo_sugerido": "src/components/ui/AdminClubAccessDialog.tsx",
    "uso": "Motivo obrigatório, operação auditada e assinatura preservada."
  },
  {
    "nome": "Tabela de planos SaaS",
    "export": "AdminPlansTable",
    "arquivo_sugerido": "src/components/ui/AdminPlansTable.tsx",
    "uso": "Apresentar catálogo, disponibilidade de contratação e assinaturas vinculadas."
  },
  {
    "nome": "Formulário versionado de plano",
    "export": "AdminPlanVersionForm",
    "arquivo_sugerido": "src/components/ui/AdminPlanVersionForm.tsx",
    "uso": "Validar preço em centavos e limite, criando versão apenas para contratações futuras."
  },
  {
    "nome": "Filtros de cobranças SaaS",
    "export": "AdminInvoiceFilters",
    "arquivo_sugerido": "src/components/ui/AdminInvoiceFilters.tsx",
    "uso": "Filtrar pelo vencimento, estado e termo de busca."
  },
  {
    "nome": "Tabela de cobranças SaaS",
    "export": "AdminInvoicesTable",
    "arquivo_sugerido": "src/components/ui/AdminInvoicesTable.tsx",
    "uso": "Exibir dados do período selecionado e abrir o detalhe pelo identificador da cobrança."
  },
  {
    "nome": "Painel de cobrança somente leitura",
    "export": "AdminInvoiceDrawer",
    "arquivo_sugerido": "src/components/ui/AdminInvoiceDrawer.tsx",
    "uso": "Exibir dados de pagamento confirmado apenas quando disponíveis. Fechar volta ao contexto de origem."
  }
]
```

## Referência visual

````html
<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>UI Kit — Motoclubes</title><style>
:root{color-scheme:dark;--bg:#0c0d10;--surface:#191b20;--line:#42454e;--text:#f6f7f9;--muted:#bfc2cb;--red:#ff273a;--green:#86de9b;--amber:#ffb35c;--low:#ff6371}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);font:15px/1.4 'Segoe UI',system-ui,sans-serif}
button,input{font:inherit;color:inherit}
button{cursor:pointer}
button:focus-visible,input:focus-visible{outline:2px solid #a6cdff;outline-offset:2px}
h1,h2,p{margin:0}
.club{display:flex;align-items:center;gap:12px;padding:20px 14px}
.club strong,.club small,.member strong,.member small{display:block}
.club small,.member small,.intro p{color:var(--muted)}
.crest,.avatar{flex:none;display:grid;place-items:center;border-radius:11px;font-weight:750}
.crest{width:42px;height:42px;color:var(--red);border:2px solid currentColor}
.avatar{width:48px;height:48px;background:#343740;color:#fff}
.avatar{overflow:hidden}
.avatar span,.avatar img{grid-area:1/1}
.avatar img{width:100%;height:100%;object-fit:cover}
.avatar img:not([src]){display:none}
.club .avatar{margin-left:auto;width:36px;height:36px;border-radius:50%}
.member-page{padding:0 12px 14px;display:grid;gap:15px}
.intro h1{font-size:28px;line-height:1.15}
.primary{min-height:44px;border:none;border-radius:10px;background:var(--red);color:#140509;font-weight:750;padding:8px 12px;width:100%}
.search{display:block;width:100%;min-height:44px;border:1px solid var(--line);border-radius:10px;background:var(--surface);padding:10px 12px}
.filters{display:flex;gap:6px;flex-wrap:wrap}
.filter,.badge{border:1px solid var(--line);border-radius:99px;background:var(--surface);padding:6px 9px;font-size:12px}
.filter{min-height:38px}
.filter[aria-pressed=true]{background:var(--red);border-color:var(--red);color:#140509;font-weight:750}
.list-heading{display:flex;justify-content:space-between;align-items:center;gap:8px;font-size:15px}
.list-heading span{color:var(--red)}
.members-list{display:grid;gap:8px;list-style:none;padding:0;margin:0}
.member{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:9px;width:100%;text-align:left;border:1px solid var(--line);border-radius:12px;background:var(--surface);padding:9px}
.member-title,.meta{display:flex;align-items:center;flex-wrap:wrap;gap:4px 8px}
.meta{font-size:12px;color:var(--muted);margin-top:5px}
.metric{display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
.metric + .metric{border-left:1px solid var(--line);padding-left:8px}
.attendance-icon{display:inline-flex;align-items:end;gap:2px;height:13px}
.attendance-icon i{width:3px;border:1px solid currentColor;border-radius:1px;height:5px}
.attendance-icon i:nth-child(2){height:9px}
.attendance-icon i:nth-child(3){height:13px}
.status-icon{position:relative;display:inline-grid;place-items:center;width:14px;height:14px;flex:none;border-radius:50%;line-height:1}
.status-icon.check{background:var(--green);color:var(--bg);font-size:11px;font-weight:800}
.status-icon.clock{border:1.5px solid currentColor}
.status-icon.clock::before{content:"";width:3px;height:4px;border-left:1px solid currentColor;border-bottom:1px solid currentColor;transform:translate(1px,-1px)}
.badge{padding:1px 6px;white-space:nowrap}
.member strong,.member small{overflow-wrap:anywhere}
.good{color:var(--green)}.late{color:var(--amber)}.low{color:var(--low)}
.app-nav{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));background:var(--surface);border-top:1px solid var(--line);padding:6px 3px}
.app-nav button{border:0;background:transparent;min-height:44px;padding:0 2px;font-size:11px}
.app-nav span{display:block;font-size:19px;line-height:1.15}
.app-nav [aria-current=page]{color:#ff6371;font-weight:750}
.empty-list{color:var(--muted);padding:10px 0}
dialog{max-width:calc(100% - 24px);width:380px;background:var(--surface);color:var(--text);border:1px solid var(--line);border-radius:12px;padding:16px}
dialog::backdrop{background:#000b}dialog form{display:grid;gap:12px}dialog button{padding:8px}
.framed-preview dialog{position:absolute;inset:var(--dialog-top,12px) 0 auto;margin:0 auto}
.secondary,.period-select,.date-input{min-height:44px;padding:8px 12px;border:1px solid var(--line);border-radius:10px;background:var(--surface);color:var(--text);font:inherit}
.section-card{display:grid;gap:10px;padding:14px;border:1px solid var(--line);border-radius:12px;background:var(--surface)}
.section-card h2{font-size:18px}
.summary{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin:0}
.summary div{padding:8px;background:var(--bg);border-radius:8px}
.summary dt{font-size:12px;color:var(--muted)}.summary dd{font-size:18px;font-weight:700;margin:0}
.timeline{margin:0;padding-left:22px}.timeline li{padding:0 0 9px 5px}.timeline li::marker{color:var(--red)}.timeline small{display:block;color:var(--muted)}
.page-title{display:flex;align-items:center;gap:10px}.page-title h1{font-size:24px}
.date-input,.period-select{width:100%}.period-note{color:var(--muted);font-size:13px}
button,a,.search,.period-select,.date-input{transition:background-color .16s,border-color .16s,transform .16s,box-shadow .16s}
a{color:inherit}
@media(hover:hover){
  .primary:not(:disabled):hover{background:#ff6472;box-shadow:0 3px 12px #ff273a45}
  :is(.member,.filter,.secondary,.app-nav button,.period-select,.date-input):not(:disabled):hover{background:#30343e;border-color:#a7aebb}
  .filter[aria-pressed=true]:hover{background:#ff6472}
  .search:hover{border-color:#a7aebb}
}
button:not(:disabled):active{transform:translateY(1px);filter:brightness(.9)}
:is(button,input,select,a):focus-visible{outline:2px solid #a6cdff;outline-offset:2px}
button:disabled{opacity:.5;cursor:not-allowed}
@media(prefers-reduced-motion:reduce){button,a,input,select{transition:none}}
.history-app{background:#0c0d0f;color:#f7f7fa;max-width:520px;margin:auto}
body:not(.framed-preview)>.history-app{min-height:100svh;display:flex;flex-direction:column}
body:not(.framed-preview)>.history-app>.app-nav{margin-top:auto}
.history-app .club{padding:22px 16px 12px;gap:12px}
.history-app .club>div{border-left:1px solid #777;padding-left:12px}
.history-app .club strong{font-size:16px;letter-spacing:.025em}
.history-app .club small{font-size:12px}
.history-app .crest{border:0;color:#ff1435}
.history-app svg{width:1.35em;height:1.35em;vertical-align:middle;flex:none}
.history-app .crest svg{width:100%;height:100%}
.history-app .photo{display:inline-grid;place-items:center;overflow:hidden;background:#32363e;color:#fff;font-weight:700;flex:none}
.history-app .photo img{width:100%;height:100%;object-fit:cover;grid-area:1/1}
.history-app .photo:not(:has(img[src])) img{display:none}
.history-app .photo span{grid-area:1/1}
.history-app .photo.staff{margin-left:auto;width:42px;height:42px;border:1px solid #c4c4c4;border-radius:50%}
.history-app .photo.member-photo{width:58px;height:54px;border-radius:10px;font-size:15px}
.history-app .member-page{padding:0 12px 14px;gap:10px}
.history-app .page-title{gap:8px;margin:0 0 2px}
.history-app .page-title h1{font-size:clamp(20px,6cqi,25px);line-height:1.2}
.history-app .page-title h1{flex:1}
.history-app .back-link{min-width:36px;min-height:44px;display:grid;place-items:center;border-radius:10px;text-decoration:none;font-size:19px}
.history-app .header-action{min-width:44px;min-height:44px;display:grid;place-items:center;background:transparent;border:0;border-radius:10px;font-size:18px}
.history-app .identity{display:flex;align-items:center;gap:9px;padding:2px 3px}
.history-app .identity-copy{border-left:1px solid #888;padding-left:9px;flex:1;min-width:0}
.history-app .identity-copy strong{display:block;line-height:1.15;font-size:16px}
.history-app .identity-name{display:flex;flex-wrap:wrap;align-items:center;gap:4px 8px}
.history-app .identity-name .badge{border-color:#888;background:#2d2f33;font-size:11px;padding:2px 7px}
.history-app .joined{display:block;margin-top:3px}
.history-app .joined svg{width:1em;height:1em;margin-right:2px}
.history-app .identity-copy small,.history-app .current small{color:var(--muted)}
.history-app .current{border-left:1px solid #888;padding-left:8px;display:grid;justify-items:start;gap:4px}
.history-app .current .badge{border-color:#98999f;background:#2d2f33;font-size:11px;padding:3px 7px}
.history-app .primary{background:#fa092a;color:#fff;border-radius:10px;min-height:36px;display:flex;justify-content:center;align-items:center;gap:9px}
.history-app output:empty{display:none}
.history-app .period-panel{border-top:1px solid #525459;padding-top:5px;display:grid;gap:7px}
.history-app h2{font-size:17px;line-height:1.2}
.history-app .period-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.history-app .select-wrap{position:relative;display:flex;align-items:center;flex:1 1 143px;min-width:0}
.history-app .select-wrap>svg{position:absolute;left:8px;pointer-events:none}
.history-app .select-wrap select{padding-left:32px}
.history-app .period-select{background:#151618;border-color:#a9a9ab;min-height:36px;padding-block:5px}
.history-app .period-note{font-size:12px}
.history-app #custom-period:not([hidden]){display:grid;gap:6px}
.history-app .section-card{gap:7px;padding:8px;border-color:#85868a;background:linear-gradient(130deg,#151719,#101112)}
.history-app .section-title{display:flex;gap:9px;align-items:center}
.history-app .section-title>svg{font-size:18px}
.history-app .section-title p{font-size:12px}
.history-app .event-row{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;text-align:center;font-size:12px}
.history-app .event-row span+span{border-left:1px solid #76787b}
.history-app .participation{background:#28292b;padding:5px 10px;border-radius:8px;font-weight:750}
.history-app .participation svg,.history-app .history-title svg{color:#ff1634;margin-right:8px}
.history-app .event-foot{font-size:12px;margin-left:10px}
.history-app .dues-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:5px}
.history-app .dues-item{display:flex;align-items:center;gap:7px;border:1px solid #747679;border-radius:7px;padding:4px 6px;font-size:11px;line-height:1.15}
.history-app .dues-item strong{display:block;font-size:16px}
.history-app .dues-item svg{font-size:15px}
.history-app .timeline{list-style:none;margin:0;padding:3px 0 0 28px}
.history-app .timeline li{position:relative;padding:0 0 8px 5px;font-size:13px;line-height:1.3}
.history-app .timeline li::before{content:"";position:absolute;left:-15px;top:4px;width:9px;height:9px;border:2px solid white;border-radius:50%;background:#fa092a;z-index:1}
.history-app .timeline li:not(:last-child)::after{content:"";position:absolute;top:12px;bottom:-8px;left:-10px;border-left:1px solid #b2b2b2}
.history-app .timeline strong,.history-app .timeline small{display:block}
.history-app .app-nav{padding:5px 4px;background:#15161a;border-color:#4c4e53}
.history-app .app-nav svg{width:22px;height:22px;display:block;margin:0 auto 3px}
.history-app .app-nav [aria-current=page]{color:#ff1634}
.history-app #level-dialog{width:min(84%,380px);padding:14px;border:1px solid #949599;border-radius:15px;background:#111214}
.history-app #level-dialog::backdrop{background:#000b}
.history-app #level-form{gap:7px}
.history-app .modal-heading{display:flex;align-items:center;justify-content:space-between;gap:4px}
.history-app .modal-close{color:inherit;background:transparent;border:0;border-radius:8px;font-size:21px;line-height:1;min-width:35px;min-height:36px;padding:2px}
.history-app .modal-person{display:flex;align-items:center;justify-content:center;gap:10px;padding:4px 0}
.history-app .modal-person strong{border-left:1px solid #888;padding-left:10px;font-size:16px}
.history-app #level-form label{font-size:13px}
.history-app .level-readonly{background:#292b2e;border:1px solid #777;border-radius:7px;padding:5px 9px}
.history-app .modal-note{padding:5px 0;text-align:center;font-size:12px}
.history-app #cancel-level{border-color:#e0e1e5;background:transparent;min-height:34px;font-weight:700}
.history-app .profile-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin:0;border:1px solid #74767c;border-radius:12px;padding:10px 2px;background:linear-gradient(130deg,#1b1d20,#131415)}
.history-app .profile-stats div{display:grid;grid-template-columns:auto minmax(0,max-content);grid-template-rows:auto auto;align-items:center;justify-content:center;column-gap:5px;padding:0 3px}
.history-app .profile-stats div+div{border-left:1px solid #65676c}
.history-app .profile-stats div>span{grid-row:1/-1;font-size:14px}
.history-app .profile-stats dd{grid-column:2;grid-row:1;margin:0;font-weight:750;font-size:14px;line-height:1.2}
.history-app .profile-stats dt{grid-column:2;grid-row:2;font-size:11px;color:var(--muted);overflow-wrap:anywhere}
.history-app .profile-shortcuts{display:grid;gap:10px}
.history-app .profile-shortcut{min-height:54px;text-decoration:none;padding:9px 11px;border-color:#66696f;background:linear-gradient(130deg,#1b1d20,#141517);grid-template-columns:27px minmax(0,1fr) 16px}
.history-app .profile-shortcut>span:first-child{font-size:17px}
.history-app .profile-shortcut strong{font-size:14px}
.history-app .profile-shortcut small{font-size:12px}
.history-app .profile-shortcut>svg:last-child{width:16px}
@media(hover:hover){
  .history-app .back-link:hover,.history-app .header-action:hover,.history-app .modal-close:hover{background:#292c32}
  .history-app .primary:not(:disabled):hover{background:#d90926}
  .history-app .profile-shortcut:hover{background:#2a2d32;border-color:#a7aebb}
}
.mock-status{padding:11px 18px 0;display:flex;justify-content:space-between;align-items:center;height:31px;font-size:13px;font-weight:650}
.history-app .mock-status svg{width:68px;height:16px}
.member-form{display:grid;gap:10px}
[hidden]{display:none!important}
.form-field{display:grid;gap:4px}
.form-field label,.photo-label{font-weight:700}
.form-field small,.photo-label small{color:var(--muted);font-weight:400}
.form-field :is(input,select,textarea){min-height:39px;width:100%;background:#191b1e;border:1px solid #777b82;border-radius:9px;padding:7px 11px;font:inherit;color:inherit}
.form-field select:disabled{background:#292b2e;color:#c1c3ca;opacity:1}
.form-field :is(input,select):not(:disabled):hover,.upload-button:hover{border-color:#d2d4dc}
.upload-row{display:flex;align-items:center;gap:14px;margin-top:6px}
.upload-box{width:70px;height:66px;display:grid;place-items:center;border:1px dashed #c4c4cb;border-radius:11px;color:var(--muted)}
.upload-box .photo{width:58px;height:54px}
.upload-box:has(img[src])>svg{display:none}
.upload-box:not(:has(img[src]))>.photo{display:none}
.upload-button{cursor:pointer;font-weight:700;display:inline-flex;align-items:center;gap:6px}
.upload-input{position:absolute;width:1px;height:1px;clip-path:inset(50%);overflow:hidden}
.upload-input:focus-visible+.upload-button{outline:2px solid #a6cdff;outline-offset:2px}
.form-actions{display:grid;gap:8px;margin-top:7px}
.form-actions .secondary,.wide-action{display:flex;align-items:center;justify-content:center;text-decoration:none;border-color:#e0e1e5;background:transparent;font-weight:700}
.member-form .primary,.form-actions .secondary{min-height:42px}
.frequency-member.identity{padding:9px}
.frequency-member .identity-copy{min-width:0}
.frequency-percent{display:block;margin-top:2px}
.frequency-percent svg{margin-right:4px}
.frequency-stats>div{display:grid;justify-items:center;align-items:center;padding:4px;text-align:center}
.frequency-stats>div>*{grid-column:1!important}
.frequency-stats dd{font-size:21px!important}
.attendance-tabs{display:flex;gap:8px}
.attendance-tabs .filter{flex:1;font-weight:650}
.attendance-list{display:grid;gap:7px}
.attendance-card{grid-template-columns:62px minmax(0,1fr) 16px;text-decoration:none;min-height:77px;border-color:#686a70}
.attendance-card .photo{width:62px;height:59px;border-radius:10px}
.attendance-card .event-copy{border-left:1px solid #777;padding-left:9px}
.attendance-card strong{line-height:1.18;margin-bottom:3px}
.attendance-card small{line-height:1.25}
.attendance-card .status{display:block;margin-top:4px;font-size:13px}
.attendance-card svg{margin-right:3px}
.attendance-card>svg:last-child,.wide-action svg{margin:0}
.wide-action{width:100%;gap:8px}
.attendance-journey p{color:var(--muted);font-size:13px;margin-top:3px}
.event-intro h1{font-size:26px;line-height:1.2}
.event-intro p,.event-description,.event-helper{color:var(--muted)}
.history-app a.primary{text-decoration:none}
.event-options{position:relative;z-index:2}
.event-options summary{list-style:none;cursor:pointer}
.event-options summary::-webkit-details-marker{display:none}
.event-options summary:focus-visible{outline:2px solid #a6cdff;outline-offset:2px}
.event-options>div{position:absolute;right:0;top:100%;min-width:145px;background:#1a1c21;border:1px solid #6b6d74;border-radius:9px;box-shadow:0 8px 20px #0009}
.event-options a{display:block;text-decoration:none;padding:10px 12px}
.event-options a:hover{background:#30343e}
.event-date-time{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.event-form{padding:0 3px}
.form-control-icon{display:block;min-width:0;position:relative}
.form-control-icon>svg{position:absolute;top:10px;left:9px;color:#ff344c;pointer-events:none}
.form-control-icon :is(input,select,textarea){padding-left:34px;min-width:0}
.form-control-icon textarea{display:block;resize:vertical}
.event-photo-field .upload-box{width:45%;height:auto;aspect-ratio:2.3;border-radius:9px;overflow:hidden}
.event-photo-field .upload-box .photo{grid-area:1/1;width:100%;height:100%;border-radius:0}
.event-photo-field .upload-button svg{color:#ff344c}
.event-photo-field .photo-label small{background:#3c3f46;border-radius:99px;font-size:11px;padding:3px 7px;margin-left:4px}
.audience-levels{margin:0;border:1px solid var(--line);border-radius:9px;padding:8px 10px;display:grid;gap:4px}
.audience-levels input{accent-color:#ec1734}
.event-helper{font-size:13px;margin:0 3px}
.event-tabs{display:flex;gap:8px;flex-wrap:wrap}
.event-tabs .filter{padding-inline:14px}
.event-tabs .filter[aria-pressed=true]{background:#c91d31;color:white;border-color:#c91d31}
.event-media{position:relative;display:block;background:#22252a;overflow:hidden;aspect-ratio:4.25;isolation:isolate}
.event-media img{display:block;width:100%;height:100%;object-fit:cover}
.event-media img:not([src]){visibility:hidden}
.event-media .badge{position:absolute;top:8px;left:10px;color:white;background:#94192b;border:0;text-transform:uppercase;font-weight:700;font-size:11px}
.event-card{display:block;text-decoration:none;border:1px solid #70737b;border-radius:12px;background:#17191d;overflow:hidden}
.event-card-copy{padding:8px 10px;display:grid;gap:4px}
.event-card h2,.event-profile h2{font-size:20px}
.event-meta{display:grid;gap:4px}
.event-meta span{display:flex;align-items:center;gap:7px}
.event-card .event-meta svg{color:#ff5263}
.event-confirmed{display:flex;align-items:center;gap:10px;margin-top:3px}
.photo-stack{display:flex;padding-right:10px;border-right:1px solid #787b84}
.history-app .photo-stack .photo{height:26px;width:26px;border:1px solid #d4d5da;border-radius:50%;font-size:9px}
.photo-stack .photo+.photo{margin-left:-5px}
.event-hero{border-radius:13px;border:1px solid #686b70;aspect-ratio:2.45}
.event-profile{display:grid;gap:7px;padding:2px 4px}
.event-profile h2{display:flex;flex-wrap:wrap;align-items:center;gap:8px}
.event-profile .badge{font-size:11px;background:#34363c;border-color:#7c8088}
.event-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:7px;margin:0}
.event-metrics>div{display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:8px;align-items:center;border:1px solid #585b63;border-radius:10px;background:#181a1e;padding:8px}
.event-metrics>div>span{grid-row:1/3;font-size:19px}
.event-metrics dt{grid-column:2;grid-row:2;font-size:12px;color:var(--muted)}
.event-metrics dd{grid-column:2;grid-row:1;margin:0;font-size:23px;font-weight:750;line-height:1.15}
.attendance-overview{grid-template-columns:auto minmax(0,1fr);align-items:center;padding:9px 13px!important}
.attendance-overview>svg{font-size:24px}
.attendance-overview>div{border-left:1px solid #868a92;padding-left:10px;display:grid;gap:2px}
.participant-list{display:grid;gap:7px}
.participant-row{grid-template-columns:58px minmax(0,1fr) 16px;padding:7px 9px}
.participant-row .participant-text{border-left:1px solid #83868d;padding-left:9px}
.participant-row .participant-name{display:flex;align-items:center;flex-wrap:wrap;gap:3px 7px}
.participant-row .participant-status{display:flex;align-items:center;gap:5px;margin-top:2px}
.participant-row .participant-status strong{font-size:13px}
.participant-row .badge{font-size:10px}
.event-dialog{width:min(85%,385px);padding:14px;background:#15171b}
.event-dialog form{gap:8px}
.event-dialog .modal-heading{display:flex;justify-content:space-between;align-items:center}
.event-dialog fieldset{padding:0;border:0;margin:0;display:grid;gap:5px}
.event-dialog legend{color:var(--muted);font-weight:700;margin-bottom:4px}
.event-dialog .radio-row{display:flex;align-items:center;gap:8px;padding:6px 8px;border:1px solid #777b82;border-radius:8px;cursor:pointer}
.event-dialog .radio-row:has(:checked){border-color:#ff293f;box-shadow:inset 0 0 0 1px #ff293f}
.event-dialog input[type=radio]{accent-color:#ff293f}
.event-dialog textarea{font:inherit;color:inherit;background:#101114;border:1px solid #7b808a;border-radius:8px;padding:7px;width:100%}
.event-dialog blockquote{margin:0;background:#1c1e22;border:1px solid #6a6d75;border-radius:8px;padding:7px 9px}
.event-dialog .present-person{display:flex;align-items:center;gap:9px;padding-bottom:7px;border-bottom:1px solid #737781}
.event-dialog .present-person strong,.event-dialog .present-person small{display:block}
.event-dialog output:empty{display:none}
@media(hover:hover){.event-card:hover{border-color:#ccd0da;background:#242730}.radio-row:hover{background:#2b2d33}}
.money-heading h1{font-size:27px;line-height:1.14}.money-heading p{color:var(--muted)}
.dashboard-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}
.dashboard-stats>a{padding:8px 6px;display:flex;align-items:center;gap:5px;text-decoration:none;background:#191b20;border:1px solid var(--line);border-radius:10px}
.dashboard-stats svg{color:#ff344d}.dashboard-stats span{font-size:11px;color:var(--muted);line-height:1.15}
.dashboard-stats strong{display:block;color:var(--text);font-size:21px;margin-bottom:3px}
.dashboard-section{display:flex;justify-content:space-between;align-items:center;margin-top:8px}
.dashboard-section a{color:#ff6673;font-size:13px}
.dashboard-event{position:relative;min-height:211px;display:flex;flex-direction:column;justify-content:flex-end}
.dashboard-event .event-media{position:absolute;inset:0;aspect-ratio:auto}
.dashboard-event .event-card-copy{position:relative;background:linear-gradient(transparent,#17191d 42%);padding-top:36px}
.dashboard-event .event-meta{display:flex;flex-wrap:wrap;gap:5px 11px;font-size:11px}
.finance-month{display:grid;grid-template-columns:44px minmax(0,1fr) 44px;align-items:center;text-align:center;background:#1a1c20;border:1px solid #71747b;border-radius:11px}
.finance-month button{display:grid;place-items:center;min-height:42px;background:transparent;color:inherit;border:0;border-radius:10px}
.finance-month button:hover:not(:disabled){background:#333640}
.finance-summary{padding:12px!important}
.finance-summary p,.finance-summary dt{color:var(--muted);font-size:13px}
.finance-summary h2{font-size:24px}
.finance-summary dl{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin:0}
.finance-summary dl>div+div{border-left:1px solid #777;padding-left:10px}
.finance-summary dd{margin:0;font-size:17px;font-weight:750}
.finance-summary footer{border-top:1px solid #6b6e75;text-align:center;padding-top:6px;font-size:12px;color:var(--muted)}
.finance-filters .filter{flex:1 1 auto;padding-inline:6px;white-space:nowrap}
.finance-title{display:flex;align-items:center;justify-content:space-between}
.finance-title strong{color:#ff4356}
.finance-row{grid-template-columns:48px minmax(0,1fr) auto 12px;text-decoration:none;column-gap:7px}
.history-app .finance-row .photo{width:48px;height:49px;border-radius:8px}
.finance-row small{font-size:11px}
.finance-row .dues-amount{border-left:1px solid #757781;padding-left:7px;font-size:12px}
.finance-row .dues-amount span{display:block;font-size:11px}
.finance-row .dues-amount svg{margin-right:2px}
.finance-row[aria-disabled=true]{cursor:default}
.finance-note{display:flex;align-items:center;gap:10px}
.finance-note>svg{font-size:20px}
.finance-note p{font-size:12px;color:var(--muted)}
.receipt-person{display:flex;gap:10px;align-items:center}
.receipt-person>div{padding-left:10px;border-left:1px solid #777}
.receipt-person strong,.receipt-person small{display:block}
.receipt-balance{display:flex;justify-content:space-between;gap:8px;border:1px solid #555a64;border-radius:9px;background:#252830;padding:8px 10px}
.receipt-balance span{color:var(--muted)}
.receipt-actor .photo{width:58px;height:54px;border-radius:9px}
.receipt-feedback{font-size:13px}
.history-app .dashboard-stats a:hover,.history-app .finance-row[href]:hover{background:#282c34;border-color:#a5aab4}
@media(max-width:345px){.dashboard-stats>a{flex-direction:column;align-items:start}.finance-row{column-gap:5px}.finance-row .dues-amount{padding-left:4px}}
 .rank-heading{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 2px}
.rank-heading h1,.rank-heading p{margin:0}.rank-heading h1{font-size:23px}.rank-heading p{color:#bcbfc6;font-size:14px;margin-top:2px}
.rank-new,.rank-edit,.case-open{background:none;color:inherit;border:0;padding:0;cursor:pointer}
.rank-new{border:1px solid #fa1532;color:#ff3a50;border-radius:8px;padding:4px 8px;font-size:12px;min-height:30px}
.rank-list,.case-list{list-style:none;padding:0;margin:0;display:grid;gap:7px}
.rank-row{display:grid;grid-template-columns:36px minmax(0,1fr) auto 29px;align-items:center;gap:8px;background:#171b20;border:1px solid #35383e;border-radius:9px;min-height:36px;padding:3px 5px 3px 12px;position:relative}
.rank-row:not(:last-child)::after{content:'';position:absolute;width:2px;height:8px;background:#fb1232;left:28px;top:100%}
.rank-row strong{font-size:14px}.rank-row.rank-active{border-color:#fc2b45;background:linear-gradient(100deg,#341418,#39181e 66%,#241418)}
.rank-number{display:grid;place-items:center;background:#373a40;border-radius:6px;font-weight:750;font-size:13px;min-height:24px}
.rank-active .rank-number{background:#fa192f}
.rank-count{font-size:12px;white-space:nowrap;color:#d7d8dc}.rank-count svg{margin-right:3px}
.rank-edit{border-left:1px solid #616169;min-height:22px;display:grid;place-items:center}
.case-create{text-decoration:none}.case-search,.case-period{display:flex;align-items:center;gap:10px;padding:0 12px;background:#191b20;border:1px solid #3d4047;border-radius:10px;min-height:34px}
.case-search span{font-size:22px;line-height:1}.case-search input,.case-period select,.case-member select{width:100%;min-width:0;color:inherit;background:none;border:0;font:inherit;color-scheme:dark}
.case-period select{min-height:31px}.case-count{font-size:14px;padding-inline:4px}
.case-row{background:#191b20;border:1px solid #3d4047;border-radius:10px;padding:7px 9px 6px 11px;display:grid;grid-template-columns:auto minmax(0,1fr) 23px;gap:9px;align-items:center}
.case-row[hidden]{display:none}
.history-app .case-row .photo.member-photo,.kit-example .case-row .photo{width:73px;height:70px;border-radius:9px}
.case-row>div{display:grid;gap:1px;border-left:1px solid #72747a;padding-left:10px;line-height:1.16}
.case-row strong{font-size:14px}.case-row small,.case-row .case-category{font-size:11px}
.case-row .case-meta{white-space:normal;color:#d0d2d7}.case-row .case-meta svg{width:12px;height:12px}
.case-status{display:inline-flex;align-items:center;gap:4px;justify-self:start;border:1px solid #96601d;color:#fdaa39;background:#40270f;border-radius:12px;padding:1px 7px;font-size:10px;line-height:1.3}
.case-status.done{border-color:#43804b;background:#1d3825;color:#a1edaa}
.case-open{display:grid;justify-items:center;gap:8px;align-self:stretch;align-content:center}
.case-access{background:#191b20;border:1px solid #3c3f46;border-radius:10px;display:flex;align-items:center;gap:12px;padding:11px 16px;margin-top:3px}
.case-access>span{border-radius:9px;background:#32353a;padding:8px;font-size:18px}
.case-access>div{padding-left:12px;border-left:1px solid #686b71}
.case-access p,.case-intro{margin:3px 0 0;color:#bfc1c7;font-size:13px}
.case-form-page .page-title{margin-bottom:-12px}.case-intro{margin:4px 0 0 37px;font-size:14px}
.case-draft{justify-self:start;background:#191b20;border:1px solid #303338;border-radius:20px;padding:4px 9px;font-size:11px;color:#ced0d4}
.case-draft svg{color:#fda649;margin-right:4px}
.case-form{display:grid;gap:7px}.case-form .form-field{gap:4px}
.case-form .form-field label{font-size:13px}.case-form .form-field :is(input,select){min-height:34px}.case-form textarea{min-height:58px}
.case-member{display:flex;align-items:center;background:#191b20;border:1px solid #45484e;border-radius:9px;padding:3px 7px;gap:10px}
.history-app .case-member .photo{width:44px;height:44px;border-radius:7px}
.case-toggle{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:2px 4px;font-size:13px}
.case-toggle small{display:block;color:#c4c6cb;font-size:11px}
.case-toggle input{appearance:none;width:42px;height:24px;border:1px solid #696c72;border-radius:18px;background:#484b51;display:grid;align-items:center;padding:2px;margin:0;flex:none;cursor:pointer}
.case-toggle input:checked{background:#fa1732;border-color:#fa1732;justify-items:end}
.case-toggle input::before{content:'';border-radius:50%;width:18px;height:18px;background:white}
.case-form .form-field small svg{width:12px;height:12px}.case-form .primary{margin-top:8px}
.case-cancel{display:grid;place-items:center;text-decoration:none}
.kit-example :is(.rank-row,.case-row,.case-access,.case-toggle) svg{width:18px;height:18px}

.history-app.mgmt-reference .club{padding-top:11px}
.history-app.mgmt-reference .app-nav:has(+ :is(#pilot-dialog,#flow-pending)){min-height:69px}
.history-app .case-create{min-height:34px}
.history-app .member-page:has(.case-list){padding-inline:9px;gap:8px}
.history-app .case-search,.history-app .case-period{min-height:33px}
.history-app .member-page:has(.case-list) .event-tabs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.history-app .member-page:has(.case-list) .event-tabs button{min-height:29px;min-width:0;padding:0 3px}
.history-app .member-page:has(.case-list) .event-tabs [aria-pressed=true]{background:#ff1e36;border-color:#ff1e36}
.history-app .case-form-page{padding-inline:12px;gap:8px}
.history-app .case-form-page .page-title{margin-bottom:-8px;gap:3px}
.history-app .case-form-page .back-link{min-height:31px;min-width:32px}
.case-form .form-field label{line-height:1.15}
.history-app .case-form .form-field :is(input,select){min-height:32px;height:32px;padding:4px 10px;font-size:13px}
.history-app .case-form .form-field textarea{height:59px;min-height:59px;padding:6px 10px;font-size:13px}
.history-app .case-form .form-field:has(#case-internal){position:relative}
.history-app .case-form #case-internal{height:69px;min-height:69px;padding-bottom:20px}
.history-app .case-form .form-field #case-internal-help{position:absolute;left:11px;bottom:7px;font-size:10px;pointer-events:none}
.history-app .case-form .case-member select{padding-inline:0;font-weight:650}
.history-app .case-form .case-cancel{min-height:33px}
.history-app .case-form .primary{margin-top:10px}

.notices-app{background:#0d0e12;color:#f8f8fa}
.notices-app[hidden],.notices-app [hidden],.notice-card [hidden]{display:none!important}
.notices-app .club{padding:44px 15px 12px 18px;gap:12px}
.notices-app .club strong{font-size:17px;letter-spacing:0}
.notices-app .club small{font-size:13px}
.notices-app .club .staff{width:48px;height:48px}
.notices-app .club .crest{width:45px;height:45px}
.notices-app .club>div{padding-left:14px}
.notices-app .app-nav{background:#14171c;padding:8px 3px min(28px,6vw)}
.notices-app .app-nav button{font-size:11px;line-height:1.3}
.notices-app .app-nav svg{width:21px;height:21px;margin-bottom:3px}
.notices-app .app-nav [aria-current=page]{color:#ff2938}
.notices-app .member-page{padding:0 9px 18px;gap:9px}
.notices-app .notice-list-page{padding-bottom:35px}
.notice-intro{padding:0 5px 6px}
.notice-intro h1{font-size:27px;line-height:1.12;font-weight:750}
.notice-intro p{font-size:15px;color:#b8b9c4;margin:4px 0 1px}
.history-app .notice-new,.notice-editor .primary{background:#ff202f;text-decoration:none;border-radius:10px}
.notice-new svg{font-size:15px}
.notice-search{position:relative;display:flex;align-items:center}
.notice-search>svg{position:absolute;left:16px;font-size:14px;pointer-events:none}
.notice-search .search{min-height:38px;padding:7px 12px 7px 45px;font-size:13px}
.notices-app :is(.notice-search .search,.period-select,.filter,.notice-card){background:#191b1f;border-color:#56585c}
.notice-search .search::placeholder{color:#cfd0d7;opacity:1}
.notice-list-page .select-wrap .period-select{min-height:33px;padding-left:45px;font-weight:650;border-radius:11px;font-size:14px}
.notice-list-page .select-wrap>svg{left:16px;font-size:14px}
.notice-list-page .event-tabs{gap:6px}
.notice-list-page .event-tabs .filter{min-height:31px;padding-block:3px;font-weight:650;font-size:13px}
.notice-list-page .filter[aria-pressed=true]{background:#ff202f;color:#fff;border-color:#ff7240}
.notice-list-page #notice-list-heading{font-size:15px;padding:2px 5px 0}
.notice-list{display:grid;gap:8px}
.notice-card{display:grid;grid-template-columns:minmax(55px,25%) minmax(0,1fr) 23px;position:relative;gap:10px;padding:7px 8px 7px 11px;border:1px solid #56585c;border-radius:10px;background:#191b1f;color:#f8f8fa;align-items:stretch}
.notice-thumb{border-right:1px solid #b7bac2;display:grid;align-content:center;padding-right:9px;min-height:83px}
.notice-thumb img{object-fit:cover;width:100%;aspect-ratio:.97;border-radius:9px;background:#292c33}
.notice-card-copy{min-width:0;align-self:center}
.notice-card h3{font-size:15px;line-height:1.06;margin:0 0 3px;font-weight:750;overflow-wrap:anywhere}
.notice-card p{font-size:12px;line-height:1.25;color:#d9dbe4;margin-bottom:4px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.notice-meta{display:flex;align-items:center;gap:6px;font-size:11px;line-height:1.3;flex-wrap:wrap}
.notice-meta+.notice-meta{margin-top:3px}
.notice-meta svg{flex:none;width:1.28em;height:1.28em;vertical-align:middle}
.notice-audience{color:#f7f7fa;background:#303135;border:1px solid #606267;border-radius:99px;font-size:inherit;padding:1px 8px;display:inline-block}
.notice-pinned{display:inline-flex;align-items:center;gap:5px;color:#ff2938;font-weight:700}
.notice-pinned svg{width:1.15em;height:1.15em;vertical-align:middle}
.notice-card .notice-pinned{border-left:1px solid #777a80;padding-left:8px}
.notice-card-actions{display:flex;flex-direction:column;justify-content:flex-start;align-items:center}
.notice-card-actions :is(button,a){display:grid;place-items:center;min-width:25px;min-height:20px;text-decoration:none}
.notice-options{background:transparent;border:0;color:inherit;padding:0}
.notice-card-actions a{flex:1;min-height:34px;font-size:13px}
.notice-card-actions svg{width:1.25em;height:1.25em}
.notice-note{font-size:12px;color:#e2e3eb;margin:3px 5px 0;display:flex;align-items:center;gap:9px}
.notice-note>svg{font-size:13px}
.notice-status{height:34px;padding:9px 18px 0 22px;display:flex;align-items:flex-start;justify-content:space-between;font-size:14px;font-weight:650}
.notice-signal{display:flex;align-items:center;gap:4px;line-height:1}
.notice-signal i{border:1px solid #d5d7df;border-radius:2px;width:21px;height:11px;display:inline-block;background:#eee;box-shadow:inset 0 0 0 1px #0d0e12}
.notice-shell-detail .club{padding-top:10px}
.notices-app .notice-detail-page{padding-bottom:54px}
.notice-detail-page .page-title{border-bottom:1px solid #44454b;margin:0 -9px;padding:0 12px 4px}
.notices-app .notice-detail-page .page-title h1,.notices-app .notice-form-page h1{font-size:24px}
.notice-detail{padding:10px 8px 0}
.notice-detail .notice-pinned{width:max-content;background:#ff1d32;color:white;border-radius:9px;padding:3px 10px;gap:7px;font-size:14px}
.notice-detail h2{font-size:30px;line-height:1.04;letter-spacing:-.013em;margin:11px 0 11px;max-width:345px}
.notice-detail .notice-meta{font-size:15px;gap:10px}
.notice-detail .notice-meta+.notice-meta{margin-top:8px}
.notice-detail .notice-audience{font-size:14px;padding:3px 9px}
.notice-detail-cover{display:block;width:calc(100% + 12px);max-width:none;aspect-ratio:802/447;object-fit:cover;border-radius:14px;margin:19px -6px 20px}
.notice-detail>p{white-space:pre-wrap;font-size:18px;line-height:1.27}
.notice-form-page .page-title{margin-bottom:1px}
.notice-editor{display:grid;gap:10px}
.notice-editor .form-field{gap:3px}
.notice-editor .form-field label{font-size:15px;font-weight:750;padding-left:5px}
.notice-editor :is(input:not([type=file]),textarea,select),.notice-cover-picker,.notice-switch{background:#191b1f;border:1px solid #737477;border-radius:10px}
.notice-editor .form-field input:not([type=file]),.notice-editor .form-field textarea,.notice-editor .form-field select{font-size:15px;padding:5px 16px;min-height:33px}
.notice-editor .form-field textarea{min-height:64px;line-height:1.14;resize:vertical}
.notice-editor select{width:100%}
.notice-editor .form-field small{font-size:12px;padding-left:7px;color:#d6d9e2}
.notice-cover-picker{min-height:86px;display:flex;align-items:center;position:relative;gap:15px;padding:5px 11px;background:#191b1f;border:1px solid #737477;border-radius:10px}
.notice-cover-picker>img{width:26%;height:73px;object-fit:cover;border-radius:7px;background:#22252b}
.notice-cover-picker::after{content:'';width:1px;height:60px;background:#a4a7ae;order:1}
.notice-cover-picker .secondary{min-height:28px;order:2;margin:auto;background:transparent;border:1px solid #f2f3f6;border-radius:10px;display:flex;align-items:center;gap:10px;padding:3px 12px;font-size:13px;font-weight:600;cursor:pointer}
.notice-cover-picker input{position:absolute;width:1px;height:1px;opacity:0}
.notice-cover-picker:focus-within .secondary{outline:2px solid #a6cdff;outline-offset:2px}
.notice-switch{position:relative;display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:38px;padding:5px 9px 5px 14px;font-size:15px;font-weight:750;cursor:pointer;background:#191b1f;border:1px solid #737477;border-radius:10px}
.notice-switch input{position:absolute;opacity:0;right:14px}
.notice-switch>span{position:relative;flex:none;border-radius:99px;background:#63666e;width:44px;height:25px;transition:background .16s}
.notice-switch>span::after{content:'';position:absolute;top:3px;left:3px;width:19px;height:19px;background:#fff;border-radius:50%;transition:transform .16s}
.notice-switch input:checked+span{background:#ff202f}
.notice-switch input:checked+span::after{transform:translateX(19px)}
.notice-switch input:focus-visible+span{outline:2px solid #a6cdff;outline-offset:2px}
.notice-editor-actions{display:grid;gap:8px;margin-top:7px}
.notice-editor-actions :is(.primary,.secondary){font-size:15px;min-height:39px;display:flex;align-items:center;justify-content:center;gap:10px;font-weight:750}
.notice-editor-actions .secondary{background:transparent;border:1px solid #fff}
.notice-cancel{text-align:center;font-weight:750;text-decoration:none;padding:4px 0}
#notice-menu .secondary{display:flex;justify-content:center;text-decoration:none}
#notice-cover-feedback,#notice-feedback{color:#ff8996;font-size:12px}
@media (max-width:360px){.notice-card{gap:6px;padding-inline:7px}.notice-thumb{padding-right:6px}.notice-meta{gap:4px}.notice-card .notice-pinned{padding-left:4px}.notice-cover-picker .secondary{gap:6px;padding-inline:6px}}

.notice-remove-cover{position:absolute;left:8px;top:6px;border:0;border-radius:50%;width:19px;height:19px;background:#0b1015c9;color:#fff;line-height:1;padding:0}.notice-cover-picker:has(>img[hidden]) .notice-remove-cover{display:none}.notice-cover-picker:has(>img[hidden])::after{display:none}

.notice-list-page .event-tabs .filter{flex:1 1 0}
.notice-list-page .notice-card h3{font-size:15.5px;letter-spacing:.01em;max-width:194px}
.notice-detail h2{max-width:min(100%,315px);font-size:30px;letter-spacing:.002em}
.notice-detail>p{font-size:18.6px;letter-spacing:.012em;line-height:1.27}
.notices-app .notice-form-page{gap:4px}
.notice-editor{gap:9px}
.notice-editor .form-field textarea{resize:none}
.notice-thumb:has(img[hidden])::before{content:'▤';display:grid;place-items:center;height:100%;min-height:58px;color:#bfc2cb;font-size:24px;background:#24272d;border-radius:9px}
.notices-app .notice-intro{padding-bottom:3px}
.notices-app .app-nav button svg{width:21px;height:21px;margin-bottom:3px}
.notice-status svg{width:2.35em;height:1.13em}

.club-page{container-type:inline-size;--club-red:#ff283e;background:radial-gradient(ellipse at 35% 40%,#101114 0%,#0c0d10 76%)}
.club-page .member-page{padding-inline:3cqi}
.club-page .app-nav{min-height:15.6cqi;padding:1.5cqi 1cqi;background:linear-gradient(130deg,#16171b,#131519)}
.club-page .app-nav button{color:var(--muted);font-size:2.8cqi}
.club-page .app-nav [aria-current=page]{color:var(--club-red)}
.club-page .app-nav svg{width:5.6cqi;height:5.6cqi;margin-bottom:.6cqi}
.club-page .page-title{gap:2.3cqi}
.club-page .back-link{padding:0;min-width:8cqi;min-height:6cqi}
.club-page .back-link svg{width:5.1cqi;height:5.1cqi}
.club-phone-status{height:10.6cqi;display:flex;align-items:center;justify-content:space-between;padding:0 4.6cqi 0 6cqi;font-size:3.8cqi;font-weight:650}
.club-status-icons{display:flex;align-items:center;gap:1.1cqi}
.club-phone-status .club-status-icons svg{width:4.2cqi;height:4.2cqi;fill:none;stroke:currentColor;stroke-width:1.9}
.club-signal{letter-spacing:.2cqi;font-size:3.5cqi}
.club-battery{position:relative;width:5.4cqi;height:2.7cqi;border:1px solid white;border-radius:.5cqi;background:#fff;background-clip:content-box;padding:.25cqi}
.club-battery::after{content:"";position:absolute;right:-.55cqi;top:25%;height:50%;border-right:1px solid white}
.club-identity .page-title{min-height:7.6cqi;margin-bottom:2.6cqi;gap:3.7cqi}
.club-identity .page-title h1{border-left:1px solid #85868a;padding-left:3.7cqi;font-size:4.5cqi;line-height:6.4cqi}
.club-identity .back-link{color:var(--club-red)}
.club-identity-form{display:grid;gap:4.3cqi}
.club-identity .member-page{gap:.7cqi;padding-bottom:7cqi}
.club-identity-form :is(h2,legend,.form-field label,.club-custom>label){font-size:4.15cqi;line-height:1.22;font-weight:750}
.club-identity-form :is(.form-field,.club-logo-section,.club-preview,.club-custom){display:grid;gap:2cqi}
.club-identity-form :is(.form-field input,.club-custom input[type=text]){width:100%;min-width:0;height:9.5cqi;min-height:0;border:1px solid #888b91;border-radius:2.2cqi;background:linear-gradient(145deg,#181a1d,#15171a);padding:0 3.3cqi;font-size:3.8cqi}
.club-logo-row{display:grid;grid-template-columns:24cqi 1fr;align-items:center;gap:3.8cqi}
.club-logo-row>div{display:grid;justify-items:start;gap:1.2cqi}
.club-logo{display:grid;position:relative;place-items:center;flex:none;overflow:hidden;color:var(--club-brand,#ff283e)}
.club-logo-row>.club-logo{height:22.4cqi;border:1px solid #3b3d43;border-radius:3.5cqi;background:linear-gradient(135deg,#181a1d,#141619)}
.club-logo .club-emblem{width:68%;height:85%}
.club-logo img{position:absolute;width:100%;height:100%;object-fit:contain}
.club-logo.logo-removed::after{content:'—';color:var(--muted)}
.club-logo-input{position:absolute;width:1px;height:1px;clip-path:inset(50%);overflow:hidden}
.club-logo-input:focus-visible+.upload-button{outline:2px solid #a6cdff;outline-offset:2px}
.club-logo-row .upload-button{width:min(44.5cqi,100%);min-height:8.8cqi;justify-content:center;gap:3.7cqi;padding:.7cqi;border-color:#67686d;border-radius:2cqi;font-size:3.35cqi;background:linear-gradient(#181a1d,#15171b)}
.club-logo-row .upload-button svg{color:var(--club-red);width:4.8cqi;height:4.8cqi}
.club-logo-row button{background:none;border:0;padding:0;color:var(--club-red);text-decoration:underline;font-size:3.2cqi}
.club-identity-form small{font-size:3.05cqi;color:var(--muted)}
.club-logo-row output{color:var(--low);font-size:3cqi}
.club-palettes{border:0;margin:0;padding:0;min-width:0}
.club-palettes legend{padding:0;margin-bottom:3.4cqi}
.club-palettes>div{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:2.3cqi}
.club-palette{cursor:pointer;position:relative;display:grid;grid-template-columns:1fr auto;align-items:center;gap:3cqi 0;border:1px solid #6b6d73;border-radius:2.5cqi;background:linear-gradient(145deg,#191b1e,#141619);padding:2cqi 2.7cqi 3.4cqi;min-height:22cqi;font-size:3.4cqi}
.club-palette input{position:absolute;opacity:0;width:1px;height:1px}
.club-palette:has(:focus-visible){outline:2px solid #a6cdff;outline-offset:2px}
.club-palette:has(:checked){background:linear-gradient(145deg,#2d1519,#211215);border-color:var(--club-red);outline:1px solid var(--club-red)}
.club-palette-indicator{width:3.8cqi;height:3.8cqi;border:1.5px solid #b9bbc2;border-radius:50%;display:grid;place-items:center;font-size:2.5cqi;color:transparent;line-height:1}
.club-palette:has(:checked) .club-palette-indicator{background:var(--club-red);border-color:var(--club-red);color:white}
.club-swatches{display:grid;grid-template-columns:repeat(3,1fr);gap:1.15cqi;grid-column:1/-1}
.club-swatches i{aspect-ratio:1;border:1px solid #64666d;border-radius:1.55cqi;background:#101113}
.club-swatches i:nth-child(2){background:#292b2e}
.club-identity-form .club-custom{gap:1.2cqi}
.club-custom>div{display:grid;grid-template-columns:9.5cqi 1fr;gap:2.7cqi;margin-top:.8cqi}
.club-custom input[type=color]{width:100%;height:9.5cqi;border:1px solid #5b5d62;background:#17181b;padding:0;border-radius:2cqi;overflow:hidden;cursor:pointer}
.club-custom input[type=color]::-webkit-color-swatch-wrapper{padding:0}
.club-custom input[type=color]::-webkit-color-swatch{border:none}
.club-custom input[type=color]::-moz-color-swatch{border:none}
.club-custom small{font-size:2.85cqi}
.club-preview>div{display:flex;align-items:center;gap:3.6cqi;min-height:15.2cqi;padding:1.5cqi 3.2cqi;border:1px solid #3b3d43;border-radius:2.5cqi;background:linear-gradient(145deg,#181a1e,#15171a)}
.club-preview .club-logo{width:10.6cqi;height:11cqi}
.club-preview .club-emblem{width:100%;height:100%}
.club-preview strong{flex:1;min-width:0;padding:1.6cqi 0 1.6cqi 3.7cqi;border-left:1px solid #999ba2;font-size:3.8cqi;overflow-wrap:anywhere}
.club-preview>div>span:last-child{background:var(--club-brand,#ed343b);padding:1.85cqi 4cqi;border-radius:1.6cqi;font-size:3.1cqi;font-weight:650}
.club-identity-form .form-actions{margin-top:1.4cqi;gap:2cqi}
.club-identity .form-actions :is(.primary,.secondary){min-height:9.6cqi;border-radius:2.3cqi;font-size:4.02cqi}
.club-identity .form-actions .primary{background:#f72438}
.club-identity .form-actions .secondary{border-color:#9b9da5;font-size:3.75cqi}
.club-identity #club-save-status{font-size:3.1cqi;color:var(--muted)}
.club-subscription .club{padding:11.2cqi 3.6cqi 3.1cqi 4cqi;gap:3.6cqi}
.club-subscription .club>div{padding-left:3.9cqi}
.club-subscription .club strong{font-size:4.55cqi;letter-spacing:0;line-height:1.2;white-space:nowrap}
.club-subscription .club small{font-size:3.35cqi;line-height:1.35}
.club-subscription .club .crest,.club-subscription .club .staff{width:12.2cqi;height:12.2cqi}
.club-subscription .member-page{gap:0;padding-bottom:6cqi}
.club-subscription .page-title{margin:1.7cqi 0 4.3cqi}
.club-subscription .page-title h1{font-size:6.05cqi;line-height:1.18}
.club-subscription .back-link svg{transform:rotate(180deg)}
.club-plan{border:1px solid #ff273a;border-radius:2.85cqi;padding:3.5cqi 3.8cqi 4.2cqi;background:linear-gradient(135deg,#a0242a 0%,#65181d 42%,#371315 95%);color:#f7f4f4}
.club-plan-header{display:flex;align-items:flex-start;justify-content:space-between;gap:1cqi}
.club-plan-header p{font-size:3.75cqi;color:#e8d8d8}
.club-plan-header p:last-child{font-size:4.45cqi}
.club-plan-header h2{font-size:6.65cqi;line-height:1.23}
.club-paid{display:inline-flex;align-items:center;justify-content:center;gap:.95cqi;border:1px solid #169e50;border-radius:100px;background:#136132;color:white;white-space:nowrap;font-weight:700}
.club-plan-header .club-paid{font-size:3.45cqi;padding:.9cqi 2.75cqi;margin-top:1.45cqi}
.club-plan-facts{display:grid;grid-template-columns:1fr 1fr;margin:3.1cqi 0 0;padding:3.5cqi 0 0;border-top:1px solid #ffffff65}
.club-plan-facts>div{display:flex;align-items:center;gap:2.6cqi;min-width:0}
.club-plan-facts>div+div{border-left:1px solid #ffffffb0;padding-left:4.6cqi;gap:3cqi}
.club-plan-facts svg{width:7.5cqi;height:7.5cqi;color:var(--club-red)}
.club-fact-label{display:block;font-size:3.2cqi;white-space:nowrap;line-height:1.23}
.club-fact-value{display:block;margin:0;font-size:3.95cqi;font-weight:750;line-height:1.22;white-space:nowrap}
.club-plan-facts>div:first-child .club-fact-value{font-size:5.55cqi;line-height:.95}
.club-portal-button{display:flex;align-items:center;justify-content:center;gap:2cqi;padding:0;border:2px solid var(--club-red);border-radius:2.6cqi;background:transparent;min-height:10.5cqi;margin-top:4.6cqi;font-size:4.03cqi;font-weight:750}
.club-portal-button svg{width:4.5cqi;height:4.5cqi}
.club-billing-history{display:grid;margin-top:5.45cqi}
.club-billing-history h2{font-size:4.9cqi;margin-bottom:3.25cqi}
.club-period-control{display:grid;align-items:center;grid-template-columns:8.5cqi 1fr 4.6cqi;padding:0 3cqi 0 3.5cqi;min-height:9.8cqi;border:1px solid #55585f;border-radius:2.2cqi;background:linear-gradient(125deg,#1b1d21,#16181c)}
.club-period-control select{appearance:none;min-width:0;width:100%;border:0;border-left:1px solid #a9abb0;background:transparent;color:inherit;padding:0 0 0 3.5cqi;font:inherit;font-size:3.75cqi;font-weight:720}
.club-period-control option{background:#191b20}
.club-period-control>svg:first-child{color:var(--club-red);width:5.1cqi;height:5.1cqi}
.club-period-control>svg:last-child{width:4.4cqi;height:4.4cqi;transform:rotate(90deg);pointer-events:none}
#club-period-form{display:grid;gap:2cqi;margin-top:2.4cqi}
.club-payments{display:grid;gap:2.4cqi;list-style:none;padding:0;margin:4.3cqi 0 0}
.club-payment{display:grid;grid-template-columns:9.6cqi minmax(0,1fr) auto;align-items:center;gap:0;min-height:16.2cqi;padding:2.1cqi 2.8cqi 2.1cqi 4cqi;border:1px solid #4e5158;border-radius:2.35cqi;background:linear-gradient(125deg,#191b1e,#16181b)}
.club-payment>svg{width:6cqi;height:6cqi;color:var(--club-red)}
.club-payment>div{display:grid;align-content:center;min-height:7.6cqi;padding-left:3.05cqi;border-left:1px solid #a5a7ac}
.club-payment>div:last-child{justify-items:end;padding-left:3cqi}
.club-payment strong{font-size:3.4cqi;line-height:1.18}
.club-payment>div:last-child strong{font-size:3.65cqi}
.club-payment small{margin-top:.8cqi;font-size:3.1cqi;color:var(--muted)}
.club-payment .club-paid{margin-top:.9cqi;padding:.3cqi 2.6cqi;font-size:2.95cqi}
#club-empty-payments{margin-top:2cqi;color:var(--muted)}
.club-billing-note{display:flex;gap:1.8cqi;align-items:center;color:var(--muted);font-size:3.3cqi;margin:4.7cqi 1.1cqi 0}
.club-billing-note span{font-size:4.3cqi}
#club-portal h2{font-size:17px}
.rider-app {
  --rider-surface: #17191d;
  --rider-line: #54565d;
  --rider-red: #ff273b;
  background: #0b0c10;
  container-type: inline-size;
}
.rider-app .club {padding: 10px 16px 12px; gap: 14px}
.rider-app .club strong {font-size: 17px; letter-spacing: .01em}
.rider-app .club small {font-size: 13px}
.rider-app .member-page {gap: 13px; padding: 0 9px 22px}
.rider-app .rider-title {padding: 0 6px; margin-bottom: 2px}
.rider-app .rider-title h1 {font-size: clamp(20px, 6.05cqi, 30px); font-weight: 800}
.rider-app .rider-title p {margin-top: 3px; font-size: 15px}
.rider-app .rider-block {display: grid; gap: 9px}
.rider-app .rider-block h2 {font-size: 19px; padding-left: 3px}
.rider-app :is(.rider-identity-home, .rider-identity-dues, .rider-row, .rider-event, .rider-metric, .rider-month, .rider-amount, .rider-info) {
  border: 1px solid var(--rider-line);
  border-radius: 12px;
  background: var(--rider-surface);
}
.rider-app .rider-identity {gap: 10px; padding: 8px 12px}
.rider-app .rider-identity .member-photo {width: clamp(43px, 17cqi, 69px); height: auto; aspect-ratio: 1}
.rider-app .rider-identity .identity-copy {padding: 5px 0 5px 9px; border-color: #a4a6ac}
.rider-app .rider-identity .identity-copy strong {font-size: clamp(14px, 4.1cqi, 21px); overflow-wrap: anywhere}
.rider-app .rider-identity .identity-copy small {font-size: clamp(12px, 3.3cqi, 17px)}
.rider-app .rider-identity .badge {border-color: #84868c; background: #292c32; font-size: 12px; padding: 2px 8px}
.rider-app .rider-identity-profile {padding-block: 3px; align-items: stretch}
.rider-app .rider-identity-profile .member-photo {width: clamp(66px, 26cqi, 112px); border-radius: 13px}
.rider-app .rider-identity-profile .identity-copy {padding-top: 6px; margin-block: 2px}
.rider-app .rider-identity-profile .identity-copy strong {font-size: clamp(16px, 5.5cqi, 24px)}
.rider-app .rider-identity-dues .member-photo {width: clamp(55px, 20cqi, 84px)}
.rider-app .rider-level {display: flex; align-items: center; gap: 7px; font-size: 11px}
.rider-app .rider-level > svg {font-size: clamp(15px, 6.2cqi, 25px)}
.rider-app .rider-level > span {display: grid; justify-items: start; gap: 4px; padding-left: 8px; border-left: 1px solid #a4a6ac}
.rider-app .rider-metrics {display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 7px}
.rider-app .rider-metric {display: flex; align-items: flex-start; gap: 6px; text-align: left; text-decoration: none; padding: 10px 7px; font-size: clamp(10px, 3cqi, 14px); line-height: 1.2}
.rider-app .rider-metric svg {font-size: clamp(13px, 5cqi, 24px)}
.rider-app .rider-metric strong {display: block; font-size: 1.75em; line-height: 1.15; margin-bottom: 2px}
.rider-app .rider-red {color: var(--rider-red)}
.rider-app .rider-event {grid-template-columns: 36% minmax(0, 1fr) auto; padding: 7px 9px; gap: 8px}
.rider-app .rider-event-photo {aspect-ratio: 1.43; width: 100%; border-radius: 9px}
.rider-app .rider-event small {display: flex; align-items: flex-start; gap: 5px}
.rider-app .rider-event small + small {margin-top: 2px}
.rider-app .rider-event .rider-row-copy {padding-block: 2px}
.rider-app .rider-row {gap: 8px; padding: 9px 10px; text-decoration: none}
.rider-app .rider-row-copy {display: block; border-left: 1px solid #a4a6ac; padding-left: 9px; min-width: 0}
.rider-app .rider-row-copy strong {font-size: clamp(13px, 3.95cqi, 18px); line-height: 1.15}
.rider-app .rider-event .rider-row-copy strong {margin-bottom: 4px}
.rider-app .rider-row-copy small {color: #e0e1e6; font-size: clamp(11px, 3.15cqi, 15px); margin-top: 2px}
.rider-app .rider-row-icon {width: clamp(25px, 11cqi, 48px); display: grid; place-items: center; font-size: 21px}
.rider-app .rider-absence {display: table; margin-top: 3px; border: 1px solid currentColor; border-radius: 99px; padding: 0 9px; color: #ffad41; background: #472d14}
.rider-app .rider-outline {display: flex; align-items: center; justify-content: center; gap: 10px; font-weight: 750; border: 1px solid var(--rider-red); color: var(--rider-red); background: transparent; text-decoration: none}
.rider-app .rider-profile-links {gap: 9px}
.rider-app .rider-signout {justify-self: center; color: var(--rider-red); font-weight: 700; background: transparent; border: 0; border-radius: 10px; padding: 12px; margin-top: 5px}
.rider-app .rider-form {gap: 13px; padding: 0 4px}
.rider-app .rider-edit-photo {display: grid; place-items: center; gap: 10px; position: relative}
.rider-app .rider-edit-photo .photo {width: clamp(80px, 27cqi, 125px); height: auto; aspect-ratio: 1; border-radius: 17px}
.rider-app .rider-edit-photo .upload-button {background: transparent; border-color: #bfc2cc; border-radius: 99px; padding-inline: 19px; min-height: 38px}
.rider-app .rider-edit-photo small:empty {display: none}
.rider-app .rider-readonly, .rider-app .rider-list {display: grid; gap: 8px}
.rider-app .rider-readonly .rider-row {grid-template-columns: auto minmax(0, 1fr)}
.rider-app .rider-edit-hint {color: var(--muted); text-align: center; font-size: 13px}
.rider-app .rider-month {display: grid; grid-template-columns: 44px 1fr 44px; align-items: center; text-align: center}
.rider-app .rider-month strong {font-size: 17px}
.rider-app .rider-month button {border: 0; background: transparent; min-height: 43px; border-radius: 11px}
.rider-app .rider-amount {padding: 11px 14px}
.rider-app .rider-amount > strong {font-size: 30px; line-height: 1}
.rider-app .rider-status {display: inline-flex; gap: 4px; align-items: center; font-size: clamp(11px, 3.2cqi, 15px); font-weight: 700}
.rider-app .rider-status-badge {padding: 3px 10px; border: 1px solid currentColor; border-radius: 99px}
.rider-app .rider-row-side {display: grid; justify-items: end; gap: 2px; text-align: right}
.rider-app .rider-info {display: flex; align-items: center; gap: 12px; padding: 9px 13px; font-size: 13px}
.rider-app .rider-info svg {font-size: 18px}
.rider-app .rider-nav :is(a, button) {min-height: 45px; padding: 6px 2px; text-align: center; text-decoration: none; border-radius: 7px; font-size: 11px; line-height: 1.25}
.rider-app .rider-nav svg {width: 21px; height: 21px}
.rider-app :is(a, button, label.upload-button):active {filter: brightness(.87)}
@media (hover: hover) {
  .rider-app :is(.rider-metric, a.rider-row, button.rider-row, .rider-event, .rider-outline, .rider-nav a, .rider-month button, .rider-signout, .upload-button, .back-link):not(:disabled):hover {
    background: #282d35;
    border-color: #a0a4ad;
  }
}
@container (max-width: 340px) {
  .rider-app .rider-level > svg {display: none}
  .rider-app .rider-event {grid-template-columns: 32% minmax(0, 1fr) auto}
}
.kit-example .rider-app > :is(.rider-identity, .rider-row, .rider-month, .rider-amount) + * {margin-top: 8px}

.rider-app .member-page:has(.rider-identity-dues) {padding-top: 6px}
.rider-app .rider-identity-dues .identity-copy {align-self: stretch; padding-top: 0}
.rider-app .rider-identity-dues .identity-copy strong {font-size: clamp(15px, 4.55cqi, 21px)}
.rider-app .rider-month button {min-height: 41px}
.rider-app .rider-amount {gap: 7px}
.rider-app #rider-payments .rider-row {padding-right: min(10cqi, 41px); padding-block: 7px}

.rider-app .member-page:has(.rider-identity-home) {gap: 10px}
.rider-app .rider-identity-home {padding-block: 6px}
.rider-app .member-page:has(.rider-identity-home) .rider-block {gap: 7px}
.rider-app .member-page:has(.rider-identity-profile) {padding-top: 9px; gap: 15px}
body:not(.framed-preview) > .rider-app > .member-page:has(.rider-identity-profile) {
  flex: 1;
  grid-template-rows: repeat(4, auto) minmax(54px, 1fr);
  padding-bottom: clamp(22px, 6.5svh, 55px);
}
body:not(.framed-preview) .rider-app .rider-signout {align-self: end}
.rider-app .member-page:has(.rider-form) {gap: 5px}
.rider-app .rider-form {gap: 11px}
.rider-app .rider-edit-photo {margin-bottom: 5px}
.rider-app:has(.rider-attendance) .club {padding-block:7px 4px}

.rider-attendance {display:grid;gap:clamp(7px,2.65cqi,13px)}
.rider-attendance .page-title {gap:2px;margin:0}
.rider-attendance .page-title h1 {font-size:clamp(20px,5.2cqi,27px);font-weight:800}
.rider-attendance .back-link {min-height:31px;min-width:36px}
.rider-app .rider-identity-attendance {padding:1px 7px;align-items:stretch;gap:10px}
.rider-app .rider-identity-attendance .member-photo {width:clamp(52px,18.8cqi,94px)}
.rider-app .rider-identity-attendance .identity-copy {margin:2px 0;padding:0 0 2px 11px}
.rider-app .rider-identity-attendance .identity-copy strong {font-size:clamp(15px,4.85cqi,25px)}
.rider-app .rider-identity-attendance .identity-name {gap:3px 14px}
.rider-attendance-period,.rider-attendance-summary,.rider-attendance-filters,.rider-attendance .rider-outline {margin-inline:3px}
.rider-attendance-period,.rider-attendance-summary {
  border:1px solid var(--rider-line);border-radius:9px;background:var(--rider-surface);
}
.rider-attendance-period {display:flex;align-items:center;gap:11px;padding:0 10px;min-height:33px}
.rider-app .rider-attendance-period svg {width:20px;height:20px}
.rider-attendance-period select {min-height:31px;flex:1;min-width:0;color:inherit;background:transparent;border:0;font:inherit;font-size:13px;color-scheme:dark}
.rider-attendance-dates {display:grid;grid-template-columns:1fr 1fr;gap:8px}
.rider-attendance-dates > label {display:grid;gap:3px;font-size:12px}
.rider-attendance-dates input {color:inherit;background:var(--rider-surface);border:1px solid var(--rider-line);border-radius:8px;color-scheme:dark;padding:6px;min-width:0}
.rider-attendance-dates button {grid-column:1/-1}
.rider-attendance-summary {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-block:0;padding:8px 2px}
.rider-attendance-summary > div {
  display:grid;grid-template-columns:auto minmax(0,max-content);grid-template-rows:auto 1fr;gap:2px 9px;
  align-items:start;justify-content:center;padding-inline:4px;line-height:1.13;
}
.rider-attendance-summary > div + div {border-inline-start:1px solid #62646a}
.rider-attendance-summary dt {grid-row:2;grid-column:2;color:#dddfe3;font-size:clamp(10px,2.75cqi,13px)}
.rider-attendance-summary dd {grid-column:2;grid-row:1;margin:0;font-size:clamp(17px,4.85cqi,25px);font-weight:800}
.rider-attendance-summary > div > span {grid-column:1;grid-row:1/-1;font-size:clamp(14px,4.5cqi,22px)}
.rider-attendance-filters {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
.rider-attendance-filters .filter {padding:2px 4px;min-height:29px;font:inherit;font-size:clamp(11px,3cqi,14px);border-color:#514f56}
.rider-attendance-filters .filter[aria-pressed=true] {background:#fa1937;border-color:#fa1937;color:#fff;font-weight:750}
.rider-attendance-list {display:grid;gap:7px;list-style:none;margin:0;padding:0}
.rider-app .rider-attendance-event {display:grid;grid-template-columns:19.5% minmax(0,1fr) 16px;gap:9px;text-align:left;width:100%;padding:4px 8px}
.rider-app .rider-attendance-event .rider-event-photo {aspect-ratio:1.14;border-radius:7px}
.rider-app .rider-attendance-event .rider-row-copy {padding:1px 0 1px 9px}
.rider-app .rider-attendance-event .rider-row-copy strong {display:block;margin-bottom:3px}
.rider-app .rider-attendance-event :is(.rider-row-copy small,.rider-status) {font-size:clamp(10px,2.95cqi,14px)}
.rider-app .rider-attendance-event .rider-status {margin-top:3px}
.rider-app .rider-attendance-event > svg:last-child {width:16px;height:16px}
.rider-attendance [hidden] {display:none!important}
.rider-attendance .rider-outline {min-height:35px;border-radius:9px;font-size:clamp(12px,3.7cqi,17px);padding:4px 9px}
.rider-attendance .good {color:#65d83c}
.rider-attendance-note,.rider-attendance [data-attendance-empty] {margin:0;text-align:center;font-size:clamp(10px,2.8cqi,14px);color:#dedfe3}



.rider-app .member-page:has(.rider-event-list, .rider-event-detail) {
  padding: 0 9px 16px;
}
.rider-app:has(.member-page .rider-event-detail) .club {padding: 11px 16px 8px; gap: 12px}
.rider-app:has(.member-page .rider-event-detail) .club .crest {width: 34px; height: 34px}
.rider-app:has(.member-page .rider-event-detail) .club strong {font-size: 14px}
.rider-app:has(.member-page .rider-event-detail) .club small {font-size: 11px}

.rider-event-list {display: grid; gap: 14px}
.rider-event-list .rider-title {padding: 0 6px; margin: 0}
.rider-event-tabs {display: flex; gap: 9px; margin-left: 3px}
.rider-event-tabs button {
  min-height: 32px;
  padding: 4px 18px;
  color: #f7f7fa;
  border: 1px solid #4b4d53;
  border-radius: 99px;
  background: #181b20;
  cursor: pointer;
}
.rider-event-tabs button[aria-pressed="true"] {background: #ff2339; border-color: #ff2339}
.rider-event-period {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 10px;
  padding: 3px 10px 3px 12px;
  margin-inline: 2px;
  text-align: left;
  min-height: 35px;
  color: inherit;
  background: #171a1e;
  border: 1px solid #53565b;
  border-radius: 9px;
  cursor: pointer;
}
.rider-event-period > svg:first-child {color: var(--rider-red)}
.rider-event-period > svg:last-child {width: 17px}
.rider-event-period-dialog label {font-weight: 650}
.rider-event-period-dialog input {
  width: 100%;
  padding: 8px;
  border: 1px solid #777b82;
  border-radius: 8px;
  background: #191b20;
  color: inherit;
  color-scheme: dark;
  font: inherit;
}
.rider-event-cards {display: grid; gap: 14px}
.rider-calendar-card, .rider-detail-hero, .rider-event-surface {
  display: block;
  overflow: hidden;
  border: 1px solid #54565d;
  border-radius: 10px;
  background: #171a1e;
  color: inherit;
  text-decoration: none;
}
.history-app .photo.rider-event-cover {
  display: grid;
  width: 100%;
  aspect-ratio: 3.86;
  background: #383226;
}
.history-app .rider-event-cover img {object-position: center}
.rider-calendar-inner {padding: 7px 13px 8px}
.rider-calendar-inner h2 {font-size: 20px}
.rider-event-meta {display: grid; gap: 3px; margin: 2px 0 0; font-size: 13px}
.rider-event-meta > span {display: flex; align-items: center; gap: 8px}
.rider-event-meta svg {color: var(--rider-red); width: 16px; height: 16px}
.rider-calendar-card-footer {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px 13px;
  border-top: 1px solid #56595e;
  min-height: 51px;
  padding-top: 6px;
  margin-top: 8px;
}
.rider-app .rider-calendar-card-footer .photo {
  width: 46px;
  height: 46px;
  border: 1px solid #b9bbc1;
  border-radius: 50%;
  grid-row: 1 / span 2;
}
.rider-calendar-card-footer strong {
  align-self: stretch;
  display: flex;
  align-items: center;
  padding-left: 12px;
  min-height: 37px;
  border-left: 1px solid #888b92;
  line-height: 1.14;
  grid-row: 1 / span 2;
}
.rider-calendar-card-footer > svg {grid-column: 3; grid-row: 1 / span 2; width: 16px}
.rider-calendar-card-footer:has(.rider-calendar-personal:not([hidden])) strong {grid-row: 1; min-height: 0}
.rider-calendar-personal {grid-column: 2; grid-row: 2; padding-left: 12px; color: #9fecaf; font-size: 12px}
.rider-calendar-personal.is-finished {color: #ffd78d}
.rider-event-empty {margin: 15px; text-align: center; color: var(--muted)}

.rider-event-detail {display: grid; gap: 7px}
.rider-event-title {display: flex; align-items: center; gap: 7px; margin-bottom: 3px}
.rider-event-title a {display: grid; place-items: center; min-width: 24px; height: 28px; color: inherit}
.rider-event-title a svg {width: 16px; height: 16px}
.rider-event-title h1 {font-size: clamp(18px, 5.3cqi, 24px); line-height: 1.17; margin: 0}
.rider-event-detail .rider-event-cover {aspect-ratio: 3.62}
.rider-event-detail .rider-calendar-inner {padding: 4px 10px 7px}
.rider-event-detail .rider-event-meta {margin-top: 4px; gap: 5px}
.rider-event-description, .rider-event-participation {padding: 5px 10px 7px}
.rider-event-description h2, .rider-event-participation h2 {font-size: 17px; margin-bottom: 2px}
.rider-event-description p, .rider-event-participation p {color: #d3d4d9; margin: 0; line-height: 1.22; font-size: 13px}
.rider-event-total {display: flex; gap: 13px; align-items: center; min-height: 33px; padding: 3px 12px}
.rider-event-total > span {display: grid; place-items: center; min-width: 43px; padding-right: 12px; border-right: 1px solid #9a9ba2}
.rider-event-total > span svg {width: 24px; height: 20px}
.rider-event-total > strong {font-size: 14px}
.rider-event-state {
  display: inline-block;
  border: 1px solid #5f6066;
  background: #41434a;
  border-radius: 99px;
  padding: 1px 12px;
  font-size: 13px;
  line-height: 16px;
}
.rider-event-state.is-confirmed {background: #0a8a43; border-color: #0a8a43; color: #e9ffef}
.rider-event-participation :is(.primary, .secondary) {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 30px;
  margin: 8px 0 5px;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 750;
  text-decoration: none;
}
.rider-event-participation .secondary {background: none; border-color: #d5d5de}
.rider-event-participation p {font-size: 11px}
.rider-event-detail + #rider-event-feedback {margin-top: 8px; color: #ff9aa6}
@media (hover: hover) {
  .rider-app :is(.rider-calendar-card, .rider-event-tabs button, .rider-event-period):hover {border-color: #a1a5ab}
}


.rider-absence-page {display:grid;gap:7px}
.rider-absence-page [hidden],.rider-absence-result [hidden] {display:none!important}
.rider-app .rider-absence-badge {
  display:inline-flex;justify-self:start;align-items:center;background:#65470d;border:1px solid #9f7019;
  border-radius:20px;padding:2px 9px;color:#fff3d7;font-size:12px;font-weight:700;line-height:1.2;
}
.rider-app .rider-absence-action {min-height:29px;padding:4px 8px;border-radius:8px;font-size:13px;font-weight:750}
.rider-app .rider-absence-action:disabled {background:#505256;border-color:#505256;color:#bbbcbf;opacity:1;cursor:default}
.rider-absence-result-list {display:grid;gap:7px}
.rider-absence-result {
  padding:9px 12px 8px;border:1px solid var(--rider-line);border-radius:8px;background:var(--rider-surface);
}
.rider-absence-result h2 {display:flex;align-items:center;gap:5px;margin:0;font-size:clamp(13px,3.85cqi,18px);font-weight:800}
.rider-absence-result h2 [data-absence-icon] {display:inline-flex;align-items:center}
.rider-app .rider-absence-result svg {width:16px;height:16px}
.rider-absence-result h2[data-color=late] > :is([data-absence-icon],strong) {color:#ffc139}
.rider-absence-result h2[data-color=good] [data-absence-icon] {color:#24d559}
.rider-absence-result h2[data-color=rider-red] [data-absence-icon] {color:#ff243e}
.rider-absence-result p {margin:5px 0 0;color:#d3d4d9;font-size:clamp(11px,3.1cqi,15px);line-height:1.3;white-space:pre-wrap;overflow-wrap:anywhere}
.rider-app #rider-explanation-dialog,.rider-explanation-example {
  color:inherit;background:#181b20;border:1px solid #57595f;border-radius:11px;padding:11px 14px 12px;
}
.rider-app #rider-explanation-dialog {
  inset:auto auto auto 50%;top:min(55svh,calc(100svh - 210px));transform:translateX(-50%);
  width:min(71%,350px);margin:0;box-sizing:border-box;max-height:calc(100svh - 12px);
}
.rider-app #rider-explanation-dialog::backdrop {background:#0009}
.rider-app #rider-explanation-dialog .rider-explanation-form,.rider-explanation-form {
  display:grid;align-items:start;gap:5px;
}
.rider-explanation-heading {display:flex;align-items:center;justify-content:space-between;gap:5px}
.rider-app .rider-explanation-heading h2 {margin:0;font-size:clamp(16px,4.45cqi,21px);font-weight:800}
.rider-explanation-close {border:0;background:transparent;color:inherit;padding:0;line-height:1;min-width:26px;min-height:25px;font-size:23px}
.rider-explanation-form label {font-size:11px;font-weight:650;margin-top:1px}
.rider-explanation-form textarea {
  border:1px solid #8c8d91;border-radius:4px;background:#22252a;color:inherit;resize:vertical;
  width:100%;min-height:55px;padding:5px 8px;font:inherit;font-size:11px;line-height:1.25;
}
.rider-explanation-form output {font-size:11px;color:#ffc139}
.rider-explanation-form .primary,.rider-explanation-form .secondary {font-weight:750}
.rider-app .rider-explanation-form .primary {min-height:29px;padding:4px 8px;border-radius:8px;margin-top:6px;font-size:13px}
.rider-app .rider-explanation-form .secondary {min-height:28px;padding:4px 8px;border-radius:8px;border-color:#b1b2b5;background:transparent;margin-top:2px;font-size:11px}
@media (max-height:480px) {
  .rider-app #rider-explanation-dialog {top:12px;max-height:calc(100svh - 24px)}
}



.rider-discipline-view {display:grid;gap:12px}
.rider-discipline-view [hidden],.rider-discipline-records [hidden] {display:none!important}
.rider-discipline-view .page-title {margin:0;gap:3px}
.rider-discipline-view .page-title h1 {font-size:clamp(19px,5.3cqi,24px);font-weight:800}
.rider-discipline-view .back-link {min-width:35px;min-height:34px}
.rider-discipline-subtitle {color:#c4c5ca;font-size:14px;margin:-13px 0 4px 40px}
.rider-app .rider-discipline-view .rider-identity {padding:10px 11px;align-items:stretch;gap:11px}
.rider-app .rider-discipline-view .rider-identity .member-photo {width:clamp(56px,19.5cqi,98px);border-radius:9px}
.rider-app .rider-discipline-view .rider-identity .identity-copy {padding:0 0 3px 11px;margin:2px 0;align-content:start}
.rider-app .rider-discipline-view .rider-identity .identity-copy strong {font-size:clamp(16px,4.85cqi,24px)}
.rider-app .rider-discipline-view .rider-identity .badge {font-size:11px;padding-block:1px}
.rider-discipline-period,.rider-discipline-notice,.rider-discipline-summary,.rider-discipline-info {
  border:1px solid var(--rider-line);border-radius:10px;background:var(--rider-surface);
}
.rider-discipline-period {display:flex;align-items:center;gap:10px;padding:0 11px;min-height:36px}
.rider-app .rider-discipline-period svg {width:19px;height:19px}
.rider-discipline-period select {min-height:34px;flex:1;min-width:0;color:inherit;background:transparent;border:0;font:inherit;font-size:13px;color-scheme:dark}
.rider-discipline-dates {display:grid;grid-template-columns:1fr 1fr;gap:8px}
.rider-discipline-dates label {display:grid;gap:4px;font-size:12px}
.rider-discipline-dates input {min-width:0;padding:7px;color:inherit;color-scheme:dark;background:var(--rider-surface);border:1px solid var(--rider-line);border-radius:8px}
.rider-discipline-dates button {grid-column:1/-1}
.rider-discipline-filters {display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}
.rider-discipline-filters .filter {padding:3px 5px;min-height:31px;font:inherit;font-size:clamp(11px,3.3cqi,15px);border-color:#4d5057}
.rider-discipline-filters .filter[aria-pressed=true] {background:#fa1937;border-color:#fa1937;color:#fff;font-weight:750}
.rider-discipline-records {display:grid;gap:8px;list-style:none;padding:0;margin:0}
.rider-app .rider-discipline-records .rider-row {grid-template-columns:45px minmax(0,1fr) 16px;gap:8px;padding:8px 11px}
.rider-app .rider-discipline-records .rider-row-icon {width:42px}
.rider-app .rider-discipline-records .rider-row-icon svg {width:32px;height:32px}
.rider-app .rider-discipline-records .rider-row-copy {padding-left:12px}
.rider-app .rider-discipline-records .rider-row-copy strong {font-size:clamp(13px,4.05cqi,19px)}
.rider-app .rider-discipline-records .rider-row-copy small {display:grid;gap:4px;color:#c4c5ca;font-size:clamp(11px,3.15cqi,15px);margin-top:3px}
.rider-discipline-records .rider-row-copy .rider-status {justify-self:start}
.rider-discipline-records .rider-row > svg {width:16px;height:16px}
.rider-discipline-notice {display:flex;align-items:center;gap:13px;padding:11px 16px;color:#d2d4da;font-size:13px}
.rider-discipline-notice p {margin:0}
.rider-app .rider-discipline-notice svg {width:26px;height:26px}
.rider-discipline-list .rider-discipline-notice {margin-top:4px}
.rider-discipline-detail [data-discipline-detail] {display:grid;gap:10px}
.rider-discipline-detail .rider-discipline-notice {min-height:35px;padding:6px 12px;gap:8px;font-size:11px}
.rider-app .rider-discipline-detail .rider-discipline-notice svg {width:17px;height:17px}
.rider-discipline-summary {padding:13px 13px 3px}
.rider-discipline-category {display:grid;grid-template-columns:43px minmax(0,1fr);align-items:center;gap:10px;margin-bottom:12px}
.rider-app .rider-discipline-category > svg {width:36px;height:36px;color:var(--rider-red)}
.rider-discipline-category > div {border-left:1px solid #86888d;padding-left:12px;display:grid;justify-items:start;gap:5px}
.rider-app .rider-discipline-category h2 {margin:0;font-size:clamp(15px,4.95cqi,24px);font-weight:800}
.rider-app .rider-discipline-category .rider-status-badge {background:#412b0c;border-color:#704606;padding:2px 8px;font-size:11px}
.rider-discipline-summary dl {margin:0}
.rider-discipline-summary dl > div {
  display:flex;justify-content:space-between;align-items:center;gap:12px;border-top:1px solid #53545a;padding:7px 0;
}
.rider-discipline-summary dt {display:flex;align-items:center;gap:17px;font-weight:750}
.rider-app .rider-discipline-summary dt svg,.rider-app .rider-discipline-info svg {width:25px;height:25px}
.rider-discipline-summary dd {margin:0;color:#e4e5e9;text-align:right;font-size:13px}
.rider-discipline-info {display:flex;align-items:flex-start;gap:11px;padding:9px 13px 11px}
.rider-app .rider-discipline-info h2 {margin:0 0 3px;font-size:16px}
.rider-discipline-info p {margin:0;color:#e0e1e6;font-size:13px;line-height:1.3}

.rider-app .member-page:has(.rider-notice-list-page, .rider-notice-detail-page) {
  padding: 0 9px 22px;
}
.rider-app:has(.member-page .rider-notice-list-page) > .club {padding-top: 50px}
.rider-app:has(.member-page .rider-notice-detail-page) > .club {padding-top: 22px}
.rider-notice-list-page, .rider-notice-list-section, .rider-notice-pinned-section {
  display: grid;
  gap: 10px;
}
.rider-notice-list-page .rider-title {margin: 0 0 3px}
.rider-notice-controls, .rider-notice-grid, .rider-notice-pinned-grid {display: grid; gap: 8px}
.rider-notice-search, .rider-notice-period {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding: 5px 13px 5px 15px;
  border: 1px solid #45484f;
  border-radius: 11px;
  background: #171a1e;
}
.rider-notice-search {min-height: 38px; cursor: text}
.rider-notice-search input {
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
  min-width: 0;
}
.rider-notice-search input::placeholder {color: #c3c4cb}
.rider-notice-search:focus-within {border-color: #a8abb6}
.rider-notice-period {
  min-height: 35px;
  grid-template-columns: auto minmax(0, 1fr) auto;
  color: inherit;
  cursor: pointer;
  text-align: left;
}
.rider-notice-period > svg, .rider-notice-search > svg {width: 20px; height: 20px}
.rider-notice-chevron > svg {width: 14px; height: 14px; transform: rotate(90deg)}
.rider-notice-published {
  display: grid;
  place-items: center;
  min-height: 32px;
  border-radius: 99px;
  background: #fa2338;
  font-weight: 650;
}
.rider-notice-list-section h2, .rider-notice-pinned-section h2 {font-size: 15px; margin: 2px 4px 0}
.rider-notice-card {
  display: grid;
  align-items: center;
  grid-template-columns: clamp(55px, 21.4cqi, 94px) minmax(0, 1fr) 15px;
  gap: 9px;
  padding: 5px 8px 5px 10px;
  border: 1px solid #40434a;
  border-radius: 11px;
  background: #171a1e;
  color: inherit;
  text-decoration: none;
}
.rider-notice-card > svg {width: 14px}
.rider-notice-thumb {
  display: grid;
  overflow: hidden;
  background: #262b32;
  border-radius: 8px;
  min-height: 83px;
  height: calc(100% - 6px);
  position: relative;
}
.rider-notice-thumb img {width: 100%; height: 100%; position: absolute; object-fit: cover}
.rider-notice-card-copy {
  display: grid;
  gap: 2px;
  padding-left: 10px;
  border-left: 1px solid #5f636b;
  min-width: 0;
  min-height: 87px;
  align-content: center;
}
.rider-notice-card-copy strong {
  font-size: 16px;
  line-height: 1.04;
  color: #fff;
  max-width: 170px;
  overflow-wrap: anywhere;
}
.rider-notice-summary {
  overflow: hidden;
  overflow-wrap: anywhere;
  color: #dfe0e3;
  line-height: 1.14;
  font-size: 13px;
  margin-bottom: 3px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.rider-notice-meta {display: flex; flex-wrap: wrap; gap: 3px 6px; align-items: center; font-size: 12px}
.rider-notice-meta svg {width: 15px; height: 15px}
.rider-notice-meta .notice-audience {
  border-radius: 99px;
  border: 1px solid #4f5158;
  padding: 1px 7px;
  background: #2d2f36;
  color: #eee;
  font-size: 11px;
  line-height: 1.2;
}
.rider-notice-card .notice-pinned {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding-left: 8px;
  margin-left: 2px;
  border-left: 1px solid #696a71;
  color: #ff3041;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.1;
}
.rider-notice-card .notice-pinned svg {width: 13px; height: 13px}
.rider-notice-detail-page {margin-inline: -9px}
.rider-notice-detail-top {
  display: flex;
  gap: 8px;
  align-items: center;
  min-height: 45px;
  padding: 0 10px 8px;
  border-bottom: 1px solid #383b42;
}
.rider-notice-detail-top a {
  display: grid;
  place-items: center;
  min-width: 31px;
  min-height: 35px;
  border-radius: 7px;
}
.rider-notice-detail-top h1 {font-size: clamp(20px, 5.9cqi, 27px); margin: 0}
.rider-notice-article {display: grid; gap: 7px; margin: 0; padding: 17px 12px 23px}
.rider-notice-article > .notice-pinned {
  display: inline-flex;
  gap: 5px;
  align-items: center;
  justify-self: start;
  border-radius: 7px;
  padding: 3px 8px;
  margin: 0 6px 3px;
  color: #fff;
  background: #ff273b;
  font-size: 14px;
  font-weight: 700;
}
.rider-notice-article > .notice-pinned svg {width: 16px; height: 16px}
.rider-notice-article h2 {
  font-size: clamp(25px, 8.25cqi, 36px);
  max-width: 335px;
  line-height: 1.07;
  margin: 0 6px 3px;
  overflow-wrap: anywhere;
}
.rider-notice-article > .rider-notice-meta {font-size: 16px; margin-inline: 6px; gap: 8px}
.rider-notice-article .rider-notice-meta svg {width: 20px; height: 20px}
.rider-notice-article .notice-audience {padding: 4px 7px; font-size: 14px}
.rider-notice-hero {width: 100%; aspect-ratio: 1.785; object-fit: cover; border-radius: 13px; margin: 12px 0 15px}
.rider-notice-article-copy {display: grid; gap: 19px; padding-inline: 6px}
.rider-notice-article-copy p {font-size: 19px; max-width: 350px; line-height: 1.27; margin: 0; white-space: pre-line; overflow-wrap: anywhere}
.rider-notice-empty {padding: 14px; color: #d0d1d7; text-align: center}
.rider-notice-period-dialog label {font-weight: 650}
.rider-notice-period-dialog input {
  width: 100%;
  padding: 8px;
  border: 1px solid #777b82;
  border-radius: 8px;
  background: #191b20;
  color: inherit;
  color-scheme: dark;
  font: inherit;
}
.rider-notice-more {justify-self: center}
@media (hover:hover) {
  .rider-notice-card:hover,.rider-notice-period:hover {border-color: #a1a5ad}
  .rider-notice-detail-top a:hover {background: #272b33}
}

.admin-shell{--admin-unit:clamp(.74px,.0925926vw,1.8px);--admin-bg:#121316;--admin-surface:#1c1d20;--admin-border:#424348;--admin-accent:#e4111e;--admin-muted:#c1c2c6;background:radial-gradient(ellipse at 39% 32%,#18191d,#111215 78%);color:#f7f7f8;display:grid;grid-template-columns:16.85% minmax(0,1fr);min-height:100svh;font-size:clamp(11px,1.17vw,21px);line-height:1.25;min-width:0}
.admin-shell svg{width:1.4em;height:1.4em;vertical-align:middle;flex:none}
.admin-sidebar{display:flex;flex-direction:column;padding:calc(12 * var(--admin-unit)) calc(8 * var(--admin-unit)) calc(16 * var(--admin-unit));border-right:1px solid #3d3e42;background:#121316;min-width:0}
.admin-brand{display:grid;justify-items:center;gap:calc(3 * var(--admin-unit));padding-bottom:calc(14 * var(--admin-unit));margin:0 calc(5 * var(--admin-unit)) calc(22 * var(--admin-unit));border-bottom:1px solid #323338;text-align:center}
.admin-brand svg{color:#f21624;width:calc(52 * var(--admin-unit));height:calc(40 * var(--admin-unit));margin-bottom:calc(3 * var(--admin-unit))}
.admin-brand strong{font-size:1.1em;line-height:1.2}.admin-brand span{font-size:.76em;color:#e2e2e6}
.admin-sidebar nav{display:grid;gap:calc(4 * var(--admin-unit))}
.admin-sidebar nav a{display:flex;align-items:center;gap:calc(12 * var(--admin-unit));padding:calc(7 * var(--admin-unit)) calc(10 * var(--admin-unit));font-size:.96em;min-height:calc(31 * var(--admin-unit));border-radius:calc(5 * var(--admin-unit));color:inherit;text-decoration:none}
.admin-sidebar nav a[aria-current=page]{background:linear-gradient(100deg,#e30b16,#cd111a);box-shadow:inset 0 -1px #fc2834}
.admin-sidebar nav a:hover:not([aria-current]){background:#232428}
.admin-actor{display:flex;align-items:center;gap:calc(10 * var(--admin-unit));margin:auto calc(5 * var(--admin-unit)) 0;padding-top:calc(12 * var(--admin-unit));border-top:1px solid #323338;font-size:.92em}
.admin-actor>span{display:grid;place-items:center;border-radius:50%;width:calc(30 * var(--admin-unit));height:calc(30 * var(--admin-unit));background:#d71120;font-weight:750}
.admin-actor strong{font-weight:500}
.admin-content{min-width:0;padding:calc(14 * var(--admin-unit)) calc(16 * var(--admin-unit)) calc(28 * var(--admin-unit)) calc(18 * var(--admin-unit))}
.admin-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:calc(16 * var(--admin-unit))}
.admin-heading h1{font-size:calc(28 * var(--admin-unit));line-height:1.08;margin:0;font-weight:790}
.admin-heading p{font-size:calc(13.5 * var(--admin-unit));margin:calc(4 * var(--admin-unit)) 0 0;color:var(--admin-muted)}
.admin-badge{display:inline-flex;align-items:center;white-space:nowrap;border-radius:99px;padding:.26em .78em;font-size:.82em;line-height:1;font-weight:700;background:#34363a;color:#eee}
.admin-badge--positive,.admin-badge--good,.admin-badge--success{background:#124715;color:#b9ffc3}
.admin-badge--danger,.admin-badge--bad,.admin-badge--negative{background:#850e17;color:#fff2f2}
.admin-badge--warning,.admin-badge--late{background:#62460b;color:#ffdd99}
.admin-sample{--admin-unit:1px;font-size:13px;min-height:0;grid-template-columns:1fr}
.admin-sample.admin-layout-example{grid-template-columns:minmax(130px,30%) 1fr;min-height:230px}


.ac-page, .ac-drawer, .ac-dialog {
  --ac-u: var(--admin-unit);
  --ac-border: #3e3f43;
  --ac-surface: #17181b;
  --ac-red: #e6111c;
}
.ac-page [hidden] {display: none !important}
.ac-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(8 * var(--ac-u));
  min-height: calc(32 * var(--ac-u));
  padding: calc(5 * var(--ac-u)) calc(13 * var(--ac-u));
  border: 1px solid #666970;
  border-radius: calc(6 * var(--ac-u));
  color: #f7f7fa;
  background: #1a1b1f;
  text-decoration: none;
  text-align: center;
  font-size: calc(12 * var(--ac-u));
  font-family: inherit;
  white-space: nowrap;
  cursor: pointer;
}
.ac-button.ac-primary {background: linear-gradient(105deg,#e5111d,#cb0b16);border-color:#e5131d}
.ac-button.ac-outline {background: #191a1d}
.ac-button.ac-primary:hover {background:#fc2030}
.ac-button.ac-outline:hover {background:#25262b}
.ac-button svg {width: 1.3em; height: 1.3em}
.ac-overview .admin-heading {margin-bottom: calc(12 * var(--ac-u))}
.ac-kpis {
  display: grid;
  grid-template-columns: 1.07fr 1fr 1.06fr .76fr;
  gap: calc(11 * var(--ac-u));
  align-items: center;
  margin-bottom: calc(16 * var(--ac-u));
}
.ac-kpis select {margin-left: calc(8 * var(--ac-u))}
.ac-kpi {
  display: grid;
  grid-template-columns: auto minmax(0,1fr);
  gap: calc(12 * var(--ac-u));
  align-items: center;
  padding: calc(7 * var(--ac-u)) calc(13 * var(--ac-u));
  min-height: calc(66 * var(--ac-u));
  border-radius: calc(8 * var(--ac-u));
  border: 1px solid var(--ac-border);
  background: #17181b;
}
.ac-icon-box {
  display: grid;
  place-items: center;
  width: calc(40 * var(--ac-u));
  height: calc(39 * var(--ac-u));
  border-radius: calc(7 * var(--ac-u));
  background: #28292c;
  color: #f4f4f6;
  flex: none;
}
.ac-icon-box svg {font-size: calc(15 * var(--ac-u))}
.ac-kpi > div {display: grid; gap: calc(2 * var(--ac-u)); padding-left: calc(13 * var(--ac-u)); border-left: 1px solid #48494f}
.ac-kpi strong {font-size: calc(21 * var(--ac-u));line-height: 1.06}
.ac-kpi span:not(.ac-icon-box) {font-size: calc(11 * var(--ac-u))}
.ac-kpi small {font-size: calc(10 * var(--ac-u));color: #bfc0c5}
.ac-filters {display: grid; grid-template-columns: 2.75fr .94fr 1.02fr 1.04fr; gap: calc(10 * var(--ac-u)); margin-bottom: calc(14 * var(--ac-u))}
.ac-search, .ac-page select, .ac-sample select {
  min-width: 0;
  min-height: calc(29 * var(--ac-u));
  background: #1b1c1f;
  border: 1px solid #47484e;
  color: #f0f0f3;
  border-radius: calc(6 * var(--ac-u));
  padding: 0 calc(9 * var(--ac-u));
  font-size: calc(11.5 * var(--ac-u));
  font-family: inherit;
  color-scheme: dark;
}
.ac-search {display: flex; align-items: center; gap: calc(9 * var(--ac-u))}
.ac-search input {border: 0; padding: 0; background: transparent; color: inherit; font: inherit; width:100%; min-width:0}
.ac-search input::placeholder {color:#bfc0c5}
.ac-search:focus-within {border-color:#96989f}
.ac-page select:focus-visible,.ac-search input:focus-visible {outline-color:#e9edf8}
.ac-table-wrap {border: 1px solid var(--ac-border); border-radius: calc(7 * var(--ac-u)); overflow: clip;background:#141518}
.ac-table {border-collapse: collapse; width: 100%;table-layout:fixed;text-align:left}
.ac-name-col {width:35.4%}.ac-plan-col {width:19.4%}.ac-people-col {width:18.4%}.ac-action-col {width: calc(35 * var(--ac-u))}
.ac-table th {background:#202124;padding:calc(6 * var(--ac-u)) calc(11 * var(--ac-u));font-size:calc(11.5 * var(--ac-u));font-weight:650}
.ac-table td {border-top:1px solid #3d3e42;padding:calc(4 * var(--ac-u)) calc(11 * var(--ac-u));vertical-align:middle;font-size:calc(12 * var(--ac-u));overflow-wrap:anywhere}
.ac-table td:last-child {padding:0}
.ac-table td strong {display:block;font-size:calc(12.5 * var(--ac-u));line-height:1.15}
.ac-table td small {display:block;margin-top:calc(2 * var(--ac-u));font-size:calc(10 * var(--ac-u));color:#dddde0}
.ac-table td a {display:grid;place-items:center;min-height:calc(40 * var(--ac-u));color:inherit}
.ac-table tr:hover td {background:#1b1d22}
.ac-table .admin-badge {margin-bottom:0}
.ac-visually-hidden {position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}
.ac-empty {padding:calc(10 * var(--ac-u));color:#ddd;text-align:center}
.ac-drawer,.ac-dialog {
  box-sizing:border-box;
  font:inherit;
  color:#f7f7fa;
  border:1px solid #43444a;
  background:#16171a;
  padding:0;
  overflow:auto;
  color-scheme:dark;
}
.ac-drawer {position:fixed;inset:0 0 0 auto;margin:0;width:37.2vw;max-width:100%;height:100%;max-height:none;border-width:0 0 0 1px;border-radius:0}
.ac-drawer[open] {display:flex;flex-direction:column}
.ac-drawer::backdrop {backdrop-filter:blur(calc(2.5 * var(--ac-u)));background:rgba(0,0,0,.23)}
.ac-drawer-head,.ac-dialog-head {display:flex;justify-content:space-between;align-items:flex-start;gap:calc(10 * var(--ac-u))}
.ac-drawer-head {padding:calc(13 * var(--ac-u)) calc(13 * var(--ac-u)) calc(14 * var(--ac-u)) calc(17 * var(--ac-u))}
.ac-drawer-head h2,.ac-dialog-head h2 {font-size:calc(24 * var(--ac-u));line-height:1.16;margin:0}
.ac-close {display:grid;place-items:center;color:inherit;min-width:calc(28 * var(--ac-u));min-height:calc(25 * var(--ac-u));border-radius:4px}
.ac-close svg {width:calc(16 * var(--ac-u));height:calc(16 * var(--ac-u))}
.ac-drawer-content {display:grid;gap:calc(13 * var(--ac-u));padding:0 calc(13 * var(--ac-u)) 0 calc(17 * var(--ac-u))}
.ac-panel {padding:calc(12 * var(--ac-u)) calc(15 * var(--ac-u));border:1px solid #45464a;border-radius:calc(8 * var(--ac-u));background:#151619}
.ac-panel strong {font-size:calc(14 * var(--ac-u))}
.ac-panel span:not(.ac-icon-box,.admin-badge) {font-size:calc(11 * var(--ac-u));color:#d5d6db}
.ac-panel .ac-icon-box {width:calc(35 * var(--ac-u));height:calc(35 * var(--ac-u))}
.ac-club-triplet {display:grid;grid-template-columns:1.15fr 1fr .74fr;gap:calc(15 * var(--ac-u))}
.ac-club-triplet > div {display:grid;align-content:start;justify-items:start;gap:calc(2 * var(--ac-u));min-width:0}
.ac-club-triplet > div:not(:first-child) {border-left:1px solid #535458;padding-left:calc(22 * var(--ac-u))}
.ac-club-triplet > div:first-child strong {font-size:calc(13 * var(--ac-u));margin-right:calc(-8 * var(--ac-u))}
.ac-club-triplet .ac-icon-box {margin-bottom:calc(3 * var(--ac-u))}
.ac-drawer-person {display:grid;grid-template-columns:auto 1fr;gap:calc(24 * var(--ac-u))}
.ac-drawer-person > div,.ac-drawer-split > div {display:grid;align-content:start;justify-items:start;gap:calc(3 * var(--ac-u))}
.ac-drawer-person svg:not(.ac-icon-box svg) {width:1.18em;margin-right:calc(6 * var(--ac-u))}
.ac-drawer-split {display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:calc(24 * var(--ac-u))}
.ac-drawer-split .ac-drawer-end {justify-items:end;text-align:right}
.ac-drawer-split big {font-size:calc(13 * var(--ac-u))}
.ac-invoice-row {margin-top:calc(13 * var(--ac-u));padding-top:calc(13 * var(--ac-u));border-top:1px solid #626368}
.ac-bill-link {display:flex;margin-top:calc(14 * var(--ac-u));min-height:calc(32 * var(--ac-u))}
.ac-drawer-actions {display:grid;grid-template-columns:1fr 1fr;gap:calc(12 * var(--ac-u));margin-top:auto;padding:calc(24 * var(--ac-u)) calc(13 * var(--ac-u)) calc(27 * var(--ac-u)) calc(17 * var(--ac-u))}
.ac-drawer-actions .ac-button {min-height:calc(37 * var(--ac-u))}
.ac-dialog {border-radius:calc(10 * var(--ac-u));border-color:#515259;width:calc(482 * var(--ac-u));max-width:calc(100vw - 32px);max-height:calc(100vh - 28px);padding:calc(13 * var(--ac-u)) calc(19 * var(--ac-u)) calc(15 * var(--ac-u))}
.ac-dialog::backdrop {background:rgba(0,0,0,.33)}
.ac-form-dialog {transform:translate(8%,7%);background:#191a1d}
.ac-form-dialog .ac-dialog-head {margin-bottom:calc(12 * var(--ac-u))}
.ac-form-dialog .ac-dialog-head h2 {font-size:calc(22 * var(--ac-u))}
.ac-form-dialog::backdrop {background:transparent}
.admin-shell:has(.ac-form-dialog[open]) .ac-overview {filter:blur(calc(1.4 * var(--admin-unit))) brightness(.68)}
.ac-club-form, .ac-access-dialog form {display:grid;gap:calc(7 * var(--ac-u))}
.ac-dialog label {display:grid;gap:calc(3 * var(--ac-u));font-size:calc(11.5 * var(--ac-u));font-weight:650}
.ac-dialog :is(input,select,textarea) {min-height:calc(28 * var(--ac-u));width:100%;padding:calc(3 * var(--ac-u)) calc(10 * var(--ac-u));border:1px solid #5d5e64;border-radius:calc(6 * var(--ac-u));background:#202124;color:inherit;font:inherit;font-weight:400}
.ac-field-columns {display:grid;grid-template-columns:1.34fr 1fr;gap:calc(16 * var(--ac-u))}
.ac-form-note {display:flex;align-items:center;gap:calc(8 * var(--ac-u));margin:calc(2 * var(--ac-u)) 0 0;font-size:calc(11 * var(--ac-u));color:#d5d5d8}
.ac-dialog-actions {display:flex;justify-content:flex-end;gap:calc(11 * var(--ac-u));margin-top:calc(10 * var(--ac-u))}
.ac-dialog-actions .ac-primary {font-weight:650}
.ac-access-dialog {width:calc(400 * var(--ac-u));padding:calc(15 * var(--ac-u)) calc(21 * var(--ac-u)) calc(17 * var(--ac-u))}
.ac-access-dialog > p {font-size:calc(12.5 * var(--ac-u));margin:calc(15 * var(--ac-u)) 0 calc(16 * var(--ac-u))}
.ac-access-dialog label {font-size:calc(12.5 * var(--ac-u))}
.ac-access-dialog textarea {min-height:calc(76 * var(--ac-u));padding-top:calc(8 * var(--ac-u));resize:vertical}
.ac-access-dialog .ac-access-note {font-style:italic;font-size:calc(12 * var(--ac-u));color:#e0e0e5;margin:calc(2 * var(--ac-u)) 0}
.ac-access-dialog .ac-dialog-actions {display:grid;grid-template-columns:1fr 1.15fr;gap:calc(13 * var(--ac-u))}
.ac-feedback {color:#ffadb2;font-size:calc(11 * var(--ac-u))}
.admin-sample .ac-drawer-sample,.admin-sample .ac-dialog-sample {position:relative;inset:auto;transform:none;margin:auto;width:min(100%,480px);height:auto;max-height:none;--ac-u:1px}
.admin-sample .ac-kpis,.admin-sample .ac-filters,.admin-sample .ac-table-wrap {--ac-u:1px;--ac-border:#424348}
body.framed-preview .ac-drawer {position:fixed;inset:0 0 0 auto;margin:0;height:100%}
body.framed-preview .ac-dialog {position:fixed;inset:0;margin:auto}
@media(max-width:650px) {
  .ac-kpis {grid-template-columns:repeat(2,minmax(0,1fr))}
  .ac-filters {grid-template-columns:repeat(2,minmax(0,1fr))}
  .ac-drawer {width:min(100vw,440px)}
  .ac-form-dialog {transform:none}
  .ac-field-columns {gap:8px}
}


.ac-drawer-head h2:focus,.ac-dialog-head h2:focus {outline:none}

.admin-billing [hidden],.admin-bill-table-wrap [hidden],.admin-invoice-panel [hidden]{display:none!important}
.bill-sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
.admin-billing .admin-heading{margin-bottom:calc(20 * var(--admin-unit))}
.admin-bill-primary,.admin-bill-secondary{
  display:inline-flex;justify-content:center;align-items:center;gap:.5em;padding:.44em .9em;
  min-height:calc(31 * var(--admin-unit));border:1px solid transparent;border-radius:calc(6 * var(--admin-unit));
  color:#fff;text-align:center;text-decoration:none;font:inherit;white-space:nowrap;
}
.admin-bill-primary{background:linear-gradient(110deg,#ed0817,#d70f1d)}
.admin-bill-primary:hover{background:#ff1424}
.admin-bill-secondary{background:#232427;border-color:#6e7075}
.admin-bill-secondary:hover{background:#303237}
.admin-bill-new{min-width:calc(145 * var(--admin-unit))}
.admin-bill-table-wrap{border:1px solid var(--admin-border);border-radius:calc(5 * var(--admin-unit));overflow-x:auto}
.admin-bill-table{width:100%;border-collapse:collapse;line-height:1.14;text-align:left}
.admin-bill-table th,.admin-bill-table td{padding-inline:calc(13 * var(--admin-unit));vertical-align:middle}
.admin-bill-table thead{background:#202124;font-size:.91em}
.admin-bill-table thead tr{height:calc(32 * var(--admin-unit))}
.admin-bill-table tr{border-bottom:1px solid var(--admin-border)}
.admin-bill-table tbody th{font-weight:740}
.admin-bill-table .admin-bill-icon-button{min-width:calc(28 * var(--admin-unit));min-height:calc(26 * var(--admin-unit))}
.admin-bill-table td.admin-bill-action-cell{text-align:right;padding-right:calc(12 * var(--admin-unit))}
.admin-plan-table tbody tr{height:calc(39 * var(--admin-unit))}
.admin-plan-table :is(th,td):first-child{width:16.4%}
.admin-plan-table :is(th,td):nth-child(2){width:16%}
.admin-plan-table :is(th,td):nth-child(3){width:17.8%}
.admin-plan-table :is(th,td):nth-child(4){width:20.7%}
.admin-plan-table :is(th,td):nth-child(5){width:24%}
.admin-bill-icon-button{
  display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:5px;min-width:1.6em;min-height:1.6em;
  color:inherit;background:none;text-decoration:none;line-height:1;font-size:inherit;
}
.admin-bill-icon-button svg{width:1.2em;height:1.2em}
.admin-bill-icon-button:hover{background:#36363b}
.admin-bill-table-note{padding:calc(9 * var(--admin-unit)) calc(13 * var(--admin-unit));color:var(--admin-muted);background:#202124;font-size:.91em}
.admin-invoice-filters{display:grid;grid-template-columns:minmax(0,1.85fr) minmax(0,1.07fr) minmax(0,1fr);gap:calc(11 * var(--admin-unit))}
.admin-invoice-filters label{min-width:0;background:var(--admin-surface);border:1px solid var(--admin-border);border-radius:calc(5 * var(--admin-unit))}
.admin-invoice-filters :is(input,select){
  width:100%;min-width:0;min-height:calc(27 * var(--admin-unit));padding:0 calc(10 * var(--admin-unit));
  border:0;background:transparent;color:inherit;color-scheme:dark;font:inherit;font-size:.92em;
}
.admin-invoice-filters input::placeholder{color:var(--admin-muted)}
.admin-invoice-search{display:flex;align-items:center;padding-left:calc(10 * var(--admin-unit));gap:calc(1 * var(--admin-unit))}
.admin-invoice-search svg{width:1.1em;height:1.1em}
.admin-bill-summary{margin:calc(12 * var(--admin-unit)) 0 calc(11 * var(--admin-unit));font-size:.92em;color:#dddde0}
.admin-invoice-table{min-width:600px}
.admin-invoice-table :is(th,td):nth-child(1){width:12%}
.admin-invoice-table :is(th,td):nth-child(2){width:24%}
.admin-invoice-table :is(th,td):nth-child(3){width:16.3%}
.admin-invoice-table :is(th,td):nth-child(4){width:13.6%}
.admin-invoice-table :is(th,td):nth-child(5){width:14.6%}
.admin-invoice-table :is(th,td):nth-child(6){width:15.6%}
.admin-invoice-table thead tr{height:calc(27 * var(--admin-unit))}
.admin-invoice-table tbody tr{height:calc(29.5 * var(--admin-unit));cursor:pointer}
.admin-invoice-table tbody tr:hover{background:#28292c}
.admin-invoice-table tbody td:nth-child(2),.admin-invoice-table tbody td:nth-child(3){font-weight:650}
.admin-bill-plan-dialog,.admin-invoice-panel{
  color:#f7f7f8;background:#191a1d;border:1px solid #4a4b4e;box-shadow:0 0 20px #0004;font-size:inherit;
}
.admin-billing .admin-bill-plan-dialog{
  position:fixed;inset:clamp(20px,32.4vh,calc(100vh - 355 * var(--admin-unit))) auto auto 52.5%;
  margin:0;transform:translateX(-50%);width:calc(323 * var(--admin-unit));max-width:calc(100vw - 28px);
  max-height:calc(100vh - 28px);padding:calc(13 * var(--admin-unit)) calc(17 * var(--admin-unit)) calc(16 * var(--admin-unit));
  border-radius:calc(10 * var(--admin-unit));
}
.admin-billing :is(.admin-bill-plan-dialog,.admin-invoice-panel)::backdrop{
  background:#0008;backdrop-filter:blur(2.4px);
}
.admin-bill-plan-dialog header,.admin-invoice-panel header{
  display:flex;justify-content:space-between;align-items:center;gap:calc(8 * var(--admin-unit));
}
.admin-bill-plan-dialog header{margin-bottom:calc(8 * var(--admin-unit))}
.admin-bill-plan-dialog h2,.admin-invoice-panel h2{
  margin:0;font-size:calc(18 * var(--admin-unit));font-weight:800;outline:0;
}
.admin-bill-plan-dialog header .admin-bill-icon-button,.admin-invoice-panel header .admin-bill-icon-button{
  font-size:calc(23 * var(--admin-unit));
}
.admin-bill-plan-form,.admin-bill-plan-dialog .admin-bill-plan-form{display:grid;gap:calc(4 * var(--admin-unit));font-size:.91em}
.admin-bill-plan-form>input{
  width:100%;padding:calc(4 * var(--admin-unit)) calc(11 * var(--admin-unit));min-height:calc(27 * var(--admin-unit));
  margin-bottom:calc(3 * var(--admin-unit));border:1px solid #6a6b70;border-radius:calc(6 * var(--admin-unit));background:#1a1b1e;
  color:inherit;color-scheme:dark;font:inherit;
}
.admin-bill-plan-form>label{line-height:1.13}
.admin-bill-switch{display:flex;align-items:center;gap:calc(10 * var(--admin-unit));margin:calc(5 * var(--admin-unit)) 0}
.admin-bill-switch input{
  appearance:none;box-sizing:border-box;display:grid;align-items:center;justify-content:start;margin:0;
  padding:calc(2 * var(--admin-unit));width:calc(37 * var(--admin-unit));height:calc(20 * var(--admin-unit));
  border-radius:99px;background:#5b5d62;cursor:pointer;
}
.admin-bill-switch input:checked{background:#1bba3c;justify-content:end}
.admin-bill-switch input::before{content:"";width:calc(15 * var(--admin-unit));height:calc(15 * var(--admin-unit));background:white;border-radius:50%}
.admin-bill-plan-form p{margin:0;color:var(--admin-muted);font-size:.91em;line-height:1.28}
.admin-bill-plan-form output{margin-top:3px;color:#ffb660}
.admin-bill-plan-form output:empty{display:none}
.admin-bill-plan-form footer{
  display:grid;grid-template-columns:1fr 1.07fr;gap:calc(10 * var(--admin-unit));
  margin-top:calc(12 * var(--admin-unit));font-weight:650;
}
.admin-billing .admin-invoice-panel{
  position:fixed;inset:0 0 0 auto;margin:0;width:33.7vw;min-width:min(100%,310px);max-width:none;
  height:100svh;max-height:none;border-width:0 0 0 1px;border-radius:0;
  padding:calc(14 * var(--admin-unit)) calc(15 * var(--admin-unit)) calc(23 * var(--admin-unit)) calc(19 * var(--admin-unit));
  background:#141518;box-sizing:border-box;
}
.admin-invoice-panel[open],.admin-invoice-panel.admin-bill-example{display:flex;flex-direction:column}
.admin-invoice-panel header{border-bottom:1px solid #38393d;padding-bottom:calc(12 * var(--admin-unit))}
.admin-invoice-panel h2{font-size:calc(24 * var(--admin-unit))}
.admin-invoice-panel dl{margin:calc(17 * var(--admin-unit)) 0}
.admin-invoice-panel dl>div{
  display:grid;grid-template-columns:1fr 1.08fr;align-items:center;gap:calc(9 * var(--admin-unit));min-height:calc(34.5 * var(--admin-unit));
  padding:0 calc(5 * var(--admin-unit));border-bottom:1px solid #37383c;
}
.admin-invoice-panel dd{margin:0;font-weight:740;overflow-wrap:anywhere}
.admin-invoice-panel dt{font-size:.96em}
.admin-invoice-panel>.admin-bill-secondary{margin-top:auto;min-height:calc(37 * var(--admin-unit));font-weight:750}
.admin-bill-example{width:min(100%,420px);padding:16px;border-radius:10px}
.admin-bill-example .admin-bill-secondary{margin-top:8px}
@media(max-width:780px){
  .admin-plan-table{min-width:550px}
  .admin-invoice-filters{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
  .admin-invoice-search{grid-column:1/-1}
  .admin-bill-plan-dialog h2,.admin-invoice-panel h2{font-size:20px}
}

.admin-billing-invoices .admin-heading{margin-bottom:calc(17 * var(--admin-unit))}
.admin-invoice-table + .admin-bill-table-note{padding-block:calc(7.5 * var(--admin-unit))}
.admin-bill-plan-dialog header .admin-bill-icon-button{min-width:1.15em;min-height:1.02em}
.admin-billing .admin-bill-plan-dialog::backdrop{
  background:linear-gradient(to right,#0004 0 16.85%,#0008 16.85%);backdrop-filter:none;
}
.admin-billing-plans:has(.admin-bill-plan-dialog[open]) > :is(.admin-heading,.admin-bill-table-wrap){filter:blur(2px)}
.admin-billing .admin-invoice-panel{padding-top:calc(11 * var(--admin-unit))}
body{background:#0d1015}
.kit-page{padding:4px 2px 20px}
.kit-category{padding:20px 0 24px}
.kit-category+.kit-category{border-top:1px solid #303744}
.kit-category h2{font-size:20px;margin-bottom:16px}
.kit-examples{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));align-items:start;gap:24px 32px}
.kit-example{min-width:0}
.kit-example h3{font-size:14px;margin:0 0 12px}
.kit-example>p{font-size:13px;color:var(--muted);margin-top:10px;max-width:64ch}
.kit-example .history-app{margin:0;background:transparent}
.kit-example .identity+.identity{margin-top:12px}
.kit-example .profile-stats+.section-card{margin-top:12px}
.kit-example .member,.kit-example .search,.kit-example .primary{max-width:520px}
.kit-example .club{padding-top:6px;padding-left:0}
.kit-example .member-page{padding-inline:0}
#demo-feedback:empty{display:none}
.component-export{display:block;color:#a6cffc;overflow-wrap:anywhere;margin:3px 0 8px}
</style></head><body><main class="kit-page"><section class="kit-category"><h2>Navegação e identidade</h2><div class="kit-examples"><div class="kit-example"><h3>Cabeçalho do clube</h3><code class="component-export">CabecalhoDoClube</code><div class="history-app"><header class="club"><span class="crest"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 1 10 6v11l-10 5-10-5V7z"/><path d="m3 17 9-10 9 10m-9-8v3m0 3v2m0 2v2"/></svg></span><div><strong>ROTA LIVRE MC</strong><small>Campo Grande • MS</small></div><span class="photo staff"><span aria-hidden="true">RA</span><img data-photo="ricardo" alt=""></span></header></div><p>ClubHeader recebe nome, local, marca e avatar do gestor.</p></div><div class="kit-example"><h3>Cabeçalho de detalhe</h3><code class="component-export">CabecalhoDeDetalhe</code><div class="history-app"><div class="page-title"><a class="back-link" href="membros-piloto.html" aria-label="Voltar"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 5-7 7 7 7M5 12h15"/></svg></a><h1>Perfil do membro</h1><button class="header-action" type="button" data-action="nav" data-label="Editar membro" aria-label="Editar membro"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M9 15l1-5L19 1l4 4-9 9z"/></svg></button></div></div><p>Cabeçalho compartilhado entre Perfil e Nível e histórico. Recebe título, destino da seta Voltar e ação opcional.</p></div><div class="kit-example"><h3>Menu móvel da gestão</h3><code class="component-export">MenuMovelDaGestao</code><div class="history-app"><nav class="app-nav" aria-label="Menu da gestão"><button type="button" data-action="nav" data-label="Painel"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v11h-6v-7H9v7H3z"/></svg>Painel</button><button type="button" data-action="nav" data-label="Membros" aria-current="page"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg>Membros</button><button type="button" data-action="nav" data-label="Financeiro"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="12" rx="6" ry="3"/><path d="M3 12v6c0 4 12 4 12 0v-6M3 15c0 4 12 4 12 0m-3-6V5c0-4 10-4 10 0v10c0 2-3 3-5 3m-5-13c0 4 10 4 10 0m-5 5c3 0 5-1 5-3"/></svg>Financeiro</button><button type="button" data-action="nav" data-label="Eventos"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg>Eventos</button><button type="button" data-action="nav" data-label="Mais"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>Mais</button></nav></div><p>ManagementNav recebe itens, rota atual e onNavigate.</p></div><div class="kit-example"><h3>Identidade do membro</h3><code class="component-export">IdentidadeDoMembro</code><div class="history-app"><div class="identity"><span class="photo member-photo"><span aria-hidden="true">RO</span><img data-photo="rafael" alt=""></span><div class="identity-copy"><div class="identity-name"><strong>Rafael Oliveira</strong><span class="badge" data-current-level>Meio-escudo</span></div><small>“Falcão”</small><small class="joined"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg> No clube desde nov/2025</small></div></div><div class="identity"><span class="photo member-photo"><span aria-hidden="true">RO</span><img data-photo="rafael" alt=""></span><div class="identity-copy"><strong>Rafael Oliveira</strong><small>“Falcão”</small></div><div class="current"><small>Nível atual</small><span class="badge" data-current-level>Meio-escudo</span></div></div></div><p>A identidade usa foto, nome, apelido e nível. O Perfil inclui a entrada no clube. Nível e histórico destaca o nível atual.</p></div></div></section><section class="kit-category"><h2>Ações e filtros</h2><div class="kit-examples"><div class="kit-example"><h3>Botão principal</h3><code class="component-export">BotaoPrincipal</code><button class="primary" type="button" data-action="add">＋ Adicionar membro</button><p>PrimaryButton recebe texto, estado disabled e onClick.</p></div><div class="kit-example"><h3>Busca de membros</h3><code class="component-export">BuscaDeMembros</code><input class="search" type="search" id="member-search" aria-label="Buscar por nome ou apelido" placeholder="Buscar por nome ou apelido"><p>SearchField recebe value, placeholder e onChange.</p></div><div class="kit-example"><h3>Filtros de nível</h3><code class="component-export">FiltrosDeNivel</code><div class="filters" role="group" aria-label="Filtrar por nível"><button type="button" class="filter" data-level="" aria-pressed="true">Todos 86</button><button type="button" class="filter" data-level="Próspero" aria-pressed="false">Próspero</button><button type="button" class="filter" data-level="Meio-escudo" aria-pressed="false">Meio-escudo</button><button type="button" class="filter" data-level="Escudado" aria-pressed="false">Escudado</button></div><p>LevelFilter recebe níveis, seleção atual e onSelect. Cada opção pode receber a contagem correspondente.</p></div><div class="kit-example"><h3>Seletor de período</h3><code class="component-export">SeletorDePeriodo</code><div class="history-app"><form class="period-panel" id="period-form"><h2>Resumo do período</h2>
<div class="period-row"><span class="select-wrap"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><select class="period-select" id="period" aria-label="Período">
<option value="rolling">Últimos 12 meses</option><option value="2026" selected>Ano de 2026</option>
<option value="2025">Ano de 2025</option><option value="custom">Intervalo de datas</option></select></span><p class="period-note" id="period-status" role="status">01/01/2026 a 31/12/2026</p></div>
<div id="custom-period" hidden><label for="date-start">Data inicial</label><input type="date" class="date-input" id="date-start">
<label for="date-end">Data final</label><input type="date" class="date-input" id="date-end">
<button class="secondary">Aplicar período</button></div>
</form></div><p>PeriodFilter recebe período e onApply. Alterar a opção ou aplicar um intervalo muda a consulta do resumo.</p></div></div></section><section class="kit-category"><h2>Formulários</h2><div class="kit-examples"><div class="kit-example"><h3>Campo de formulário</h3><code class="component-export">CampoDeFormulario</code><div class="form-field"><label for="sample-email">E-mail de acesso</label><input id="sample-email" type="email" value="rafael@example.com" required></div><p>FormField recebe rótulo, valor, validação e texto de ajuda.</p></div><div class="kit-example"><h3>Seletor de foto</h3><code class="component-export">SeletorDeFoto</code><div class="history-app"><div class="photo-field"><div class="photo-label">Foto <small>(opcional)</small></div><div class="upload-row"><span class="upload-box"><span class="photo member-photo"><span aria-hidden="true">RO</span><img data-photo="rafael" alt=""></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V3m-5 5 5-5 5 5M4 15v5h16v-5"/></svg></span><input class="upload-input" id="member-photo" type="file" accept="image/*"><label for="member-photo" class="upload-button secondary"><span aria-hidden=true>＋</span>Alterar foto</label></div><small class="upload-feedback" role="status"></small></div></div><p>PhotoInput recebe URL atual, aceita arquivo de imagem e mostra a prévia antes de salvar.</p></div><div class="kit-example"><h3>Foto horizontal do evento</h3><code class="component-export">FotoHorizontalDoEvento</code><div class="history-app"><div class="photo-field event-photo-field"><div class="photo-label">Foto do evento <small>(opcional)</small></div><div class="upload-row"><span class="upload-box"><span class="photo"><img data-photo="bonito-form" alt="Prévia da foto do evento"></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V3m-5 5 5-5 5 5M4 15v5h16v-5"/></svg></span><input class="upload-input" id="event-photo" type="file" accept="image/*"><label for="event-photo" class="upload-button secondary"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m3 17 5-5 4 4 4-5 5 5"/></svg>Alterar imagem</label></div><small class="upload-feedback" role="status"></small></div></div><p>PhotoInput na variante de capa horizontal. Recebe imagem atual, arquivo escolhido e feedback de validação.</p></div><div class="kit-example"><h3>Data e horário lado a lado</h3><code class="component-export">DataEHorarioLadoALado</code><div class="history-app event-date-time"><div class="form-field"><label for="demo-event-date">Data</label><span class="form-control-icon"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><input id="demo-event-date" type="date" value="2026-11-22" required></span></div><div class="form-field"><label for="demo-event-time">Horário</label><span class="form-control-icon"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg><input id="demo-event-time" type="time" value="07:00" required></span></div></div><p>Reutilizar FormField para os dois controles e interpretar data e hora no fuso do clube.</p></div></div></section><section class="kit-category"><h2>Listas e indicadores</h2><div class="kit-examples"><div class="kit-example"><h3>Linha de membro</h3><code class="component-export">LinhaDeMembro</code><ul class="members-list"><li data-level="Meio-escudo" data-query="Rafael Oliveira Falcão"><button type="button" class="member" data-action="profile" data-member="Rafael Oliveira"><span class="avatar" aria-hidden="true"><span>RO</span><img data-photo="rafael" alt=""></span><span><span class="member-title"><strong>Rafael Oliveira</strong><span class="badge">Meio-escudo</span></span><small>“Falcão” · Desde nov/2025</small><span class="meta"><span class="metric"><span class="attendance-icon good" aria-hidden="true"><i></i><i></i><i></i></span>Frequência 88%</span><span class="metric good"><span class="status-icon check" aria-hidden="true">✓</span>Em dia</span></span></span><span aria-hidden="true">›</span></button></li><li data-level="Próspero" data-query="Bruno Souza Búfalo"><button type="button" class="member" data-action="profile" data-member="Bruno Souza"><span class="avatar" aria-hidden="true"><span>BS</span><img data-photo="bruno" alt=""></span><span><span class="member-title"><strong>Bruno Souza</strong><span class="badge">Próspero</span></span><small>“Búfalo” · Desde ago/2026</small><span class="meta"><span class="metric"><span class="attendance-icon late" aria-hidden="true"><i></i><i></i><i></i></span>Frequência 68%</span><span class="metric late"><span class="status-icon clock" aria-hidden="true"></span>Em atraso</span></span></span><span aria-hidden="true">›</span></button></li><li data-level="Meio-escudo" data-query="Juliana Costa Juba"><button type="button" class="member" data-action="profile" data-member="Juliana Costa"><span class="avatar" aria-hidden="true"><span>JC</span><img data-photo="juliana" alt=""></span><span><span class="member-title"><strong>Juliana Costa</strong><span class="badge">Meio-escudo</span></span><small>“Juba” · Desde fev/2025</small><span class="meta"><span class="metric"><span class="attendance-icon low" aria-hidden="true"><i></i><i></i><i></i></span>Frequência 42%</span><span class="metric good"><span class="status-icon check" aria-hidden="true">✓</span>Em dia</span></span></span><span aria-hidden="true">›</span></button></li></ul><p>MemberRow recebe nome, apelido, avatar, nível, ingresso, frequência e situação financeira. onOpen recebe o ID do membro. Frequência: usar barras e percentual visível. Classificar pelo valor bruto: 70% ou mais em verde, de 50% até menos de 70% em laranja e abaixo de 50% em vermelho. Frequência indisponível usa tom neutro e exibe “Sem dados”. Situação financeira: mostrar check verde e o texto “Em dia”, ou relógio laranja e o texto “Em atraso”, conforme o status recebido. A cor da frequência e a situação financeira são independentes.</p></div><div class="kit-example"><h3>Atalho do perfil</h3><code class="component-export">AtalhoDoPerfil</code><div class="history-app"><a class="member profile-shortcut" href="nivel-e-historico.html"><span class=""><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 10 6-10 6-10-6zm-9 10 9 5 9-5M3 17l9 5 9-5"/></svg></span><span><strong>Nível e histórico</strong><small>Consultar histórico e alterar nível</small></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></div><p>ProfileLink recebe título, descrição e destino.</p></div><div class="kit-example"><h3>Resumo de indicadores</h3><code class="component-export">ResumoDeIndicadores</code><div class="history-app"><dl class="profile-stats" aria-label="Resumo do perfil"><div><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="14" width="4" height="7" rx="1"/><rect x="10" y="9" width="4" height="12" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg></span><dt>Frequência</dt><dd>88%</dd></div><div><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span><dt>Mensalidade</dt><dd>Em dia</dd></div><div><span class="low"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 4v6c0 5-4 8-9 10-5-2-9-5-9-10V6z"/></svg></span><dt>Ocorrências</dt><dd>0</dd></div></dl><section class="section-card" id="event-summary">
<div class="section-title"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><h2>Eventos</h2></div>
<div class="event-row"><span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> <strong data-value>15</strong> eventos</span><span><svg class=good aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg> <strong data-value>12</strong> presenças</span><span><svg class=low aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8 8 8 8m0-8-8 8"/></svg> <strong data-value>3</strong> faltas</span></div>
<div class="participation"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg><span data-value>80%</span> de participação</div>
<p class="event-foot"><span data-value>1</span> <span id="justified-label">falta justificada</span>.</p></section></div><p>O resumo associa cada valor a seu rótulo e ícone. Frequência usa as faixas documentadas em Linha de membro.</p></div><div class="kit-example"><h3>Linha do tempo</h3><code class="component-export">LinhaDoTempo</code><div class="history-app"><section class="section-card"><h2 class="history-title"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 10 6-10 6-10-6zm-9 10 9 5 9-5M3 17l9 5 9-5"/></svg>Histórico de níveis</h2><ol class="timeline">
<li><strong>01 ago 2026</strong>Próspero → Meio-escudo<small>Alterado por Ricardo</small></li>
<li><strong>01 nov 2025</strong>Nível inicial: Próspero</li></ol></section></div><p>LevelTimeline recebe mudanças ordenadas e exibe data, níveis e responsável.</p></div><div class="kit-example"><h3>Linha de presença</h3><code class="component-export">LinhaDePresenca</code><div class="history-app attendance-list"><button class="member attendance-card" type="button" data-action="nav" data-label="Encontro na sede" data-date="2026-11-01" data-attendance="present"><span class="photo member-photo"><span aria-hidden="true">MC</span><img data-photo="sede" alt=""></span><span class="event-copy"><strong>Encontro na sede</strong><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> 01 nov 2026 • Campo Grande</small><span class="status"><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span> Presente</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button><button class="member attendance-card" type="button" data-action="nav" data-label="Reunião de setembro" data-date="2026-09-05" data-attendance="absent"><span class="photo member-photo"><span aria-hidden="true">MC</span><img data-photo="sede" alt=""></span><span class="event-copy"><strong>Reunião de setembro</strong><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> 05 set 2026 • Campo Grande</small><span class="status"><span class="late"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg></span> Faltou</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button></div><p>AttendanceRow recebe imagem, nome, data, local e presença. O clique abre o evento.</p></div></div></section><section class="kit-category"><h2>Confirmação</h2><div class="kit-examples"><div class="kit-example"><h3>Modal de mudança de nível</h3><code class="component-export">ModalDeMudancaDeNivel</code><button type="button" class="secondary" id="demo-level">Abrir modal</button><div class="history-app"><dialog id="level-dialog" aria-labelledby="change-title">
<form id="level-form"><div class="modal-heading"><h2 id="change-title">Confirmar mudança de nível</h2><button type="button" class="modal-close" id="close-level" aria-label="Fechar">×</button></div>
<div class="modal-person"><span class="photo member-photo"><span aria-hidden="true">RO</span><img data-photo="rafael" alt=""></span><strong>Rafael Oliveira</strong></div>
<label for="current-display">Nível atual</label><div class="level-readonly" id="current-display" data-current-level>Meio-escudo</div>
<label for="new-level">Novo nível</label><select id="new-level" class="period-select" required></select>
<p class="modal-note">A mudança ficará registrada no histórico do membro.</p>
<button type="submit" class="primary" disabled>Confirmar alteração</button>
<button type="button" class="secondary" id="cancel-level">Cancelar</button></form></dialog></div><p>LevelChangeDialog recebe nível atual, opções, onConfirm e onCancel. Confirmar depende de seleção válida.</p></div></div></section><section class="kit-category"><h2>Eventos e chamada</h2><div class="kit-examples"><div class="kit-example"><h3>Card de evento</h3><code class="component-export">CardDeEvento</code><div class="history-app"><a class="event-card" href="detalhe-evento.html?evento=bonito" data-event-date="2026-11-22"><span class="event-media"><img data-photo="bonito" alt=""><span class="badge">Passeio</span></span><div class="event-card-copy"><h2>Rota de Bonito</h2><div class="event-meta"><span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg>22 nov • 07h00</span><span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>Saída: Campo Grande</span></div><div class="event-confirmed"><span class="photo-stack"><span class="photo member-photo"><span aria-hidden="true">RA</span><img data-photo="ricardo" alt=""></span><span class="photo member-photo"><span aria-hidden="true">CM</span><img data-photo="camila" alt=""></span><span class="photo member-photo"><span aria-hidden="true">BS</span><img data-photo="bruno" alt=""></span></span><strong>32 confirmados</strong></div></div></a></div><p>EventCard recebe foto, categoria, título, data, local e confirmações.</p></div><div class="kit-example"><h3>Linha de participante</h3><code class="component-export">LinhaDeParticipante</code><div class="history-app"><button class="member participant-row" type="button" data-action="nav" data-label="Registrar presença" data-status="present" data-decision="" data-confirmed="true"><span class="photo member-photo"><span aria-hidden="true">RO</span><img data-photo="rafael" alt=""></span><span class="participant-text"><span class="participant-name"><strong>Rafael Oliveira</strong><span class="badge">Meio-escudo</span></span><small data-nick>“Falcão”</small><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg> Confirmou participação</small><span class="participant-status"><span class="good" data-present><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span><span class="late" data-absent hidden><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg></span><strong>Presente</strong></span><small data-pending hidden>Justificativa pendente</small></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button></div><p>ParticipantRow recebe membro, confirmação e presença. A seleção abre o modal da chamada.</p></div><div class="kit-example"><h3>Opções de presença</h3><code class="component-export">OpcoesDePresenca</code><div class="history-app event-dialog"><fieldset><legend>Presença</legend><label class="radio-row"><input type="radio" name="demo-attendance" value="present">Presente</label><label class="radio-row"><input type="radio" name="demo-attendance" value="absent">Faltou</label></fieldset></div><p>Grupo de opções com seleção única por teclado e mouse.</p></div></div></section><section class="kit-category"><h2>Painel e financeiro</h2><div class="kit-examples"><div class="kit-example"><h3>Indicadores do painel</h3><code class="component-export">IndicadoresDoPainel</code><div class="history-app"><div class="dashboard-stats"><a href="membros-piloto.html"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg><span><strong>86</strong>Membros ativos</span></a><a href="financeiro-gestao.html"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><span><strong>12</strong>Mensalidades pendentes</span></a><a href="eventos-gestao.html?aba=realizados"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="14" width="4" height="7" rx="1"/><rect x="10" y="9" width="4" height="12" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg><span><strong>88%</strong>Frequência geral</span></a></div></div><p>As métricas recebem valores e destinos de navegação.</p></div><div class="kit-example"><h3>Resumo da competência</h3><code class="component-export">ResumoDaCompetencia</code><div class="history-app"><section class="section-card finance-summary"><div><p>Previsto no mês</p><h2 id="money-total">R$ 6.880,00</h2></div>
<dl><div><dt><span class="good">●</span> Recebido</dt><dd id="money-paid">R$ 5.920,00</dd></div>
<div><dt><span class="late">●</span> Pendente</dt><dd id="money-open">R$ 960,00</dd></div></dl>
<footer id="money-counts">74 em dia • 12 pendentes</footer></section></div><p>Exibir previsto, recebido e saldo em aberto da competência consultada.</p></div><div class="kit-example"><h3>Linha de mensalidade</h3><code class="component-export">LinhaDeMensalidade</code><div class="history-app"><a class="member finance-row" data-bill="bruno" href="registrar-recebimento.html?membro=bruno"><span class="photo member-photo"><span aria-hidden="true">BS</span><img data-photo="bruno" alt=""></span><span><strong>Bruno Souza</strong><small>“Búfalo”</small><small data-due-date>Venceu em 05 nov</small></span><span class="dues-amount"><strong data-row-amount>R$ 80,00</strong><span data-row-state class="late">◷ Em atraso</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></div><p>DuesRow recebe membro, situação, vencimento e saldo. O saldo positivo permite abrir o registro de recebimento.</p></div></div></section><section class="kit-category"><h2>Hierarquia e disciplina</h2><div class="kit-examples"><div class="kit-example"><h3>Linha de nível hierárquico</h3><code class="component-export">LinhaDeNivelHierarquico</code><ol class="rank-list"><li class="rank-row rank-active"><span class="rank-number">02</span><strong>Meio-escudo</strong><span class="rank-count"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg> 24 membros</span><button class="rank-edit" data-demo-title="Editar Meio-escudo" aria-label="Editar Meio-escudo"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M9 15l1-5L19 1l4 4-9 9z"/></svg></button></li></ol><p>Mostrar ordem, título, quantidade e ação contextual.</p></div><div class="kit-example"><h3>Linha de ocorrência</h3><code class="component-export">LinhaDeOcorrencia</code><ul class="case-list"><li class="case-row" data-status="pending" data-month="2026-10" data-query="Bruno Souza Búfalo Conduta em deslocamento Rota de Aquidauana"><span class="photo member-photo"><span aria-hidden="true">BS</span><img data-photo="disciplina-bruno" alt=""></span><div><strong>Bruno Souza</strong><small>“Búfalo”</small><span class="case-category">Conduta em deslocamento</span><small class="case-meta"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> 18 out 2026 • Rota de Aquidauana</small><span class="case-status pending"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg> Em análise</span></div><button class="case-open" data-demo-title="Ocorrência de Bruno Souza" aria-label="Abrir ocorrência de Bruno Souza"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button></li></ul><p>Renderizar os metadados e o status textual do registro.</p></div><div class="kit-example"><h3>Aviso de acesso restrito</h3><code class="component-export">AvisoDeAcessoRestrito</code><aside class="case-access"><span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></span><div><strong>Acesso restrito</strong><p>O membro vê apenas os próprios registros disponibilizados pela gestão.</p></div></aside><p>Informar o escopo de leitura do membro.</p></div><div class="kit-example"><h3>Controle de visibilidade do registro</h3><code class="component-export">ControleDeVisibilidadeDoRegistro</code><label class="case-toggle"><span><strong>Visível para o membro</strong><small>Somente o próprio membro poderá consultar.</small></span><input type="checkbox" id="case-visible" role="switch" checked></label><p>Toggle com descrição da permissão concedida ao membro.</p></div></div></section><section class="kit-category"><h2>Comunicados</h2><div class="kit-examples"><div class="kit-example"><h3>Card de comunicado</h3><code class="component-export">CardDeComunicado</code><article class="notice-card">
    <span class="notice-thumb"><img data-photo="notice-bonito" alt=""></span>
    <div class="notice-card-copy">
      <h3 data-copy="title">Orientações para a Rota de Bonito</h3><p data-copy="summary">Saída às 7h. Confira os preparativos.</p>
      <div class="notice-meta"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><span data-copy="byline">05 nov 2026 • Ricardo Almeida</span></div>
      <div class="notice-meta"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg><span class="badge notice-audience">Todos os membros</span><span class="notice-pinned"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m10 5 9 9-3 1-3 3-3-3-6 6 6-6-4-4 3-3z" fill="currentColor"/><path d="m11 3 10 10"/></svg> Fixado</span></div>
    </div>
    <div class="notice-card-actions">
      <button class="notice-options" type="button" aria-label="Opções de Orientações para a Rota de Bonito" data-notice-menu="bonito"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg></button>
      <a data-notice-link href="comunicado-aberto.html?comunicado=bonito" aria-label="Abrir Orientações para a Rota de Bonito"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a>
    </div>
    </article><p>Reutilizar na lista do gestor com título, resumo, autor, data, público e estado de fixação.</p></div><div class="kit-example"><h3>Público do comunicado</h3><code class="component-export">PublicoDoComunicado</code><span class="badge notice-audience">Todos os membros</span><p>Exibir o público resolvido pelo blueprint e manter o ID do nível separado do rótulo.</p></div><div class="kit-example"><h3>Indicador de comunicado fixado</h3><code class="component-export">IndicadorDeComunicadoFixado</code><span class="notice-pinned"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m10 5 9 9-3 1-3 3-3-3-6 6 6-6-4-4 3-3z" fill="currentColor"/><path d="m11 3 10 10"/></svg> Fixado</span><p>Refletir o estado retornado pela publicação e exibir apenas quando fixado.</p></div><div class="kit-example"><h3>Alternador de fixação</h3><code class="component-export">AlternadorDeFixacao</code><label class="notice-switch">Fixar no topo<input type="checkbox" id="kit-notice-pin" role="switch" checked><span aria-hidden="true"></span></label><p>Vincular a propriedade booleana de fixação da publicação.</p></div><div class="kit-example"><h3>Seletor de capa do comunicado</h3><code class="component-export">SeletorDeCapaDoComunicado</code><div class="form-field"><label for="kit-notice-cover-input">Imagem de capa (opcional)</label>
    <div class="kit-notice-cover-picker"><img data-photo="notice-form" id="kit-notice-cover-preview" alt="Prévia da capa">
      <label class="secondary" for="kit-notice-cover-input"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m3 17 5-5 4 4 4-5 5 5"/></svg> Adicionar imagem</label>
      <input id="kit-notice-cover-input" type="file" accept="image/png,image/jpeg,image/webp,image/gif" aria-describedby="kit-notice-cover-feedback">
      <button id="notice-remove-cover" class="notice-remove-cover" type="button" aria-label="Remover capa" title="Remover capa">×</button>
    </div><output id="kit-notice-cover-feedback" role="status"></output></div><p>Adaptar o seletor de foto existente ao formato horizontal com miniatura. Usar ID do arquivo carregado no contrato da publicação.</p></div></div></section><section class="kit-category"><h2>Identidade e assinatura</h2><div class="kit-examples"><div class="kit-example"><h3>Seletor de paleta do clube</h3><code class="component-export">SeletorDePaletaDoClube</code><div class="history-app club-page"><fieldset class="club-palettes"><legend>Paleta de cores</legend><div><label class="club-palette"><input type="radio" name="paleta" value="Vermelho" data-accent="#ED343B" checked><strong>Vermelho</strong><span class="club-palette-indicator" aria-hidden="true">✓</span><span class="club-swatches" aria-hidden="true"><i></i><i></i><i style="background:#ED343B"></i></span></label><label class="club-palette"><input type="radio" name="paleta" value="Azul" data-accent="#267EF0"><strong>Azul</strong><span class="club-palette-indicator" aria-hidden="true">✓</span><span class="club-swatches" aria-hidden="true"><i></i><i></i><i style="background:#267EF0"></i></span></label><label class="club-palette"><input type="radio" name="paleta" value="Laranja" data-accent="#FA871C"><strong>Laranja</strong><span class="club-palette-indicator" aria-hidden="true">✓</span><span class="club-swatches" aria-hidden="true"><i></i><i></i><i style="background:#FA871C"></i></span></label></div></fieldset></div><p>Seleciona uma paleta por vez. A troca remove a substituição manual da cor de destaque.</p></div><div class="kit-example"><h3>Seletor e prévia de logo</h3><code class="component-export">SeletorEPreviaDeLogo</code><div class="history-app club-page"><section class="club-logo-section"><h2>Logo</h2><div class="club-logo-row"><span class="club-logo" data-club-logo><svg class="club-emblem" viewBox="0 0 100 100" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="6" stroke-linejoin="round" d="M50 5 91 28v42L50 95 9 70V28Z"/><path fill="currentColor" d="M48 36 11 70l10 7zm4 0 37 34-10 7zM47 73h6l2 19-5 3-5-3zm2-13h2l2 10h-6zm0-9h2l1 6h-4zm1-11 1 8h-2z"/></svg><img alt="Logo do motoclube" hidden></span><div><input id="club-logo-file" class="club-logo-input" type="file" accept="image/png,image/jpeg" aria-describedby="club-logo-hint"><label class="upload-button secondary" for="club-logo-file"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V3m-5 5 5-5 5 5M4 15v5h16v-5"/></svg>Alterar logo</label><button type="button" id="club-logo-remove">Remover</button><small id="club-logo-hint">PNG ou JPG • até 5 MB</small><output id="club-logo-error" role="alert"></output></div></div></section><section class="club-preview"><h2>Prévia</h2><div><span class="club-logo" data-club-logo><svg class="club-emblem" viewBox="0 0 100 100" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="6" stroke-linejoin="round" d="M50 5 91 28v42L50 95 9 70V28Z"/><path fill="currentColor" d="M48 36 11 70l10 7zm4 0 37 34-10 7zM47 73h6l2 19-5 3-5-3zm2-13h2l2 10h-6zm0-9h2l1 6h-4zm1-11 1 8h-2z"/></svg><img alt="Logo do motoclube" hidden></span><strong id="club-preview-name">Rota Livre MC</strong><span>Exemplo</span></div></section></div><p>Mostra logo e aparência do rascunho sem publicar. Valida PNG/JPEG até 5 MB e aceita remover a imagem.</p></div><div class="kit-example"><h3>Resumo do plano SaaS</h3><code class="component-export">ResumoDoPlanoSaaS</code><div class="history-app club-page"><section class="club-plan"><div class="club-plan-header"><div><p>Plano atual</p><h2>Estrada</h2><p>R$149,00/mês</p></div><span class="club-paid"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg> Ativa</span></div><div class="club-plan-facts"><div><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg><span><strong class="club-fact-value">86</strong><span class="club-fact-label">de 100 afiliados</span></span></div><div><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><span><span class="club-fact-label">Próxima cobrança</span><strong class="club-fact-value"><time datetime="2026-12-05">05 dez 2026</time></strong></span></div></div></section></div><p>Exibe o plano contratado, o status, o uso do limite de afiliados e a próxima cobrança.</p></div><div class="kit-example"><h3>Linha de pagamento SaaS</h3><code class="component-export">LinhaDePagamentoSaaS</code><div class="history-app club-page"><ul class="club-payments"><li class="club-payment" data-month="2026-11"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 2h10l4 4v16H5zM14 2v5h5M8 12h8M8 16h8"/></svg><div><strong>Mensalidade • Novembro 2026</strong><small>Pago em <time datetime="2026-11-03">03 nov 2026</time></small></div><div><strong>R$149,00</strong><span class="club-paid"><span aria-hidden="true">✓</span> Paga</span></div></li></ul></div><p>Mostra competência, valor contratado, data efetiva do pagamento e situação.</p></div></div></section><section class="kit-category"><h2>Área do membro</h2><div class="kit-examples"><div class="kit-example"><h3>Menu móvel do membro</h3><code class="component-export">MenuMovelDoMembro</code><div class="history-app rider-app"><nav class="app-nav rider-nav" aria-label="Menu do membro"><a href="inicio-do-membro.html" aria-current="page"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v11h-6v-7H9v7H3z"/></svg>Início</a><a href="eventos-membro.html"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg>Eventos</a><a href="minha-situacao-financeira.html"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="12" rx="6" ry="3"/><path d="M3 12v6c0 4 12 4 12 0v-6M3 15c0 4 12 4 12 0m-3-6V5c0-4 10-4 10 0v10c0 2-3 3-5 3m-5-13c0 4 10 4 10 0m-5 5c3 0 5-1 5-3"/></svg>Financeiro</a><a href="avisos-membro.html"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9h5l12-5v16L8 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm5 6 2 6H6l-2-6"/></svg>Avisos</a><a href="meu-perfil.html"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M4 21v-2a7 7 0 0 1 7-7h2a7 7 0 0 1 7 7v2Z"/></svg>Perfil</a></nav></div><p>Manter a ordem dos destinos, o foco de teclado e o estado ativo conforme a rota.</p></div><div class="kit-example"><h3>Identidade do próprio membro</h3><code class="component-export">IdentidadeDoProprioMembro</code><div class="history-app rider-app"><div class="identity rider-identity rider-identity-home"><span class="photo member-photo"><span aria-hidden="true">BS</span><img data-photo="bruno-membro" alt=""></span><div class="identity-copy"><div class="identity-name"><strong>Bruno Souza</strong></div><small data-rider-nickname>“Búfalo”</small></div><span class="rider-level"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5v10l-9 5-9-5V7zM3 14l9-5 9 5"/></svg><span><b>Seu nível atual:</b><span class="badge">Próspero</span></span></span></div><div class="identity rider-identity rider-identity-dues"><span class="photo member-photo"><span aria-hidden="true">BS</span><img data-photo="bruno-membro" alt=""></span><div class="identity-copy"><div class="identity-name"><strong>Bruno Souza</strong><span class="badge">Próspero</span></div><small data-rider-nickname>“Búfalo”</small></div></div></div><p>Reutilizar a foto, o nome, o apelido e o nível atual. Variar a densidade conforme a tela.</p></div><div class="kit-example"><h3>Linha de navegação do membro</h3><code class="component-export">LinhaDeNavegacaoDoMembro</code><div class="history-app rider-app"><a class="member rider-row" href="minha-frequencia.html"><span class="rider-row-icon good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg></span><span class="rider-row-copy"><strong>Minha frequência</strong><small>Consultar minhas participações</small></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a><a class="member rider-row" href="minha-disciplina.html"><span class="rider-row-icon rider-red"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 4v6c0 5-4 8-9 10-5-2-9-5-9-10V6z"/></svg></span><span class="rider-row-copy"><strong>Minha disciplina</strong><small>Meus registros disponibilizados</small></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a><a class="member rider-row" href="minha-situacao-financeira.html"><span class="rider-row-icon "><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="12" rx="6" ry="3"/><path d="M3 12v6c0 4 12 4 12 0v-6M3 15c0 4 12 4 12 0m-3-6V5c0-4 10-4 10 0v10c0 2-3 3-5 3m-5-13c0 4 10 4 10 0m-5 5c3 0 5-1 5-3"/></svg></span><span class="rider-row-copy"><strong>Minha situação financeira</strong><small>Mensalidades e histórico</small></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></div><p>Usar ícone, título, descrição e seta. Aplicar hover, foco e ação de clique.</p></div><div class="kit-example"><h3>Indicadores pessoais</h3><code class="component-export">IndicadoresPessoais</code><div class="history-app rider-app"><div class="rider-metrics"><a class="rider-metric" href="minha-frequencia.html"><span class="rider-red"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="14" width="4" height="7" rx="1"/><rect x="10" y="9" width="4" height="12" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg></span><span><strong >75%</strong>Minha frequência</span></a><a class="rider-metric" href="minha-situacao-financeira.html"><span class="rider-red"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 4v6c0 5-4 8-9 10-5-2-9-5-9-10V6z"/></svg></span><span><strong id="rider-open-dues">1</strong>Mensalidade pendente</span></a><a class="rider-metric" href="minha-disciplina.html"><span class="late"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg></span><span><strong >1</strong>Registro em análise</span></a></div></div><p>Ler os totais do membro e ligar cada indicador à consulta correspondente.</p></div><div class="kit-example"><h3>Próximo encontro do membro</h3><code class="component-export">ProximoEncontroDoMembro</code><div class="history-app rider-app"><a class="member rider-event" href="evento-do-membro.html?evento=bonito&amp;origem=inicio"><span class="photo rider-event-photo"><span aria-hidden="true"></span><img data-photo="bonito-membro" alt=""></span><span class="rider-row-copy"><strong>Rota de Bonito</strong><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg>22 nov • 07h00</small><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>Saída: Campo Grande</small><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg><span data-rider-upcoming-count>32 confirmados</span></small></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></div><p>Ler o próximo evento visível e o total de confirmações.</p></div><div class="kit-example"><h3>Foto de perfil editável</h3><code class="component-export">FotoDePerfilEditavel</code><div class="history-app rider-app"><div class="rider-edit-photo"><span class="photo member-photo"><span aria-hidden="true">BS</span><img data-photo="bruno-membro" alt=""></span><input id="rider-photo" class="upload-input" type="file" accept="image/*"><label for="rider-photo" class="secondary upload-button"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m3 17 5-5 4 4 4-5 5 5"/></svg>Alterar foto</label><small id="rider-photo-message" role="status"></small></div></div><p>Mostrar a seleção de imagem em prévia e persistir somente ao salvar.</p></div><div class="kit-example"><h3>Competência e saldo do membro</h3><code class="component-export">CompetenciaESaldoDoMembro</code><div class="history-app rider-app"><div class="rider-month"><button type="button" aria-label="Mês anterior" data-month-step="-1"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5-7 7 7 7"/></svg></button><strong id="rider-month-label" role="status">Novembro 2026</strong><button type="button" aria-label="Próximo mês" data-month-step="1"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button></div><template id="rider-paid-icon"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></template><section class="section-card rider-amount" aria-label="Saldo da competência"><h2>Pendente no mês</h2><strong id="rider-due-amount">R$ 80,00</strong><div id="rider-month-status"><span class="rider-status late rider-status-badge"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>Em atraso</span></div></section><div id="rider-month-bill"><div class="member rider-row" ><span class="rider-row-icon "><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="12" rx="6" ry="3"/><path d="M3 12v6c0 4 12 4 12 0v-6M3 15c0 4 12 4 12 0m-3-6V5c0-4 10-4 10 0v10c0 2-3 3-5 3m-5-13c0 4 10 4 10 0m-5 5c3 0 5-1 5-3"/></svg></span><span class="rider-row-copy"><strong>Mensalidade de novembro</strong><small>Vencimento: 05 nov 2026</small></span><span class="rider-row-side"><strong>R$ 80,00</strong><span class="rider-status late"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>Em atraso</span></span></div></div></div><p>Alterar a competência e recalcular saldo, situação e vencimento. O histórico exibe os recebimentos do próprio membro.</p></div><div class="kit-example"><h3>Resumo de frequência do membro</h3><code class="component-export">ResumoDeFrequenciaDoMembro</code><div class="history-app rider-app"><dl class="rider-attendance-summary" aria-label="Frequência no período" aria-live="polite"><div><dt>Eventos previstos</dt><dd data-attendance-total="total">4</dd><span class="" aria-hidden="true"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg></span></div><div><dt>Presenças</dt><dd data-attendance-total="present">3</dd><span class="good" aria-hidden="true"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span></div><div><dt>Frequência</dt><dd data-attendance-total="rate">75%</dd><span class="rider-red" aria-hidden="true"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="14" width="4" height="7" rx="1"/><rect x="10" y="9" width="4" height="12" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg></span></div></dl></div><p>Mostrar total de eventos previstos, presenças e frequência do período.</p></div><div class="kit-example"><h3>Participação no histórico do membro</h3><code class="component-export">ParticipacaoNoHistoricoDoMembro</code><div class="history-app rider-app"><ul class="rider-attendance-list"><li data-attendance-date="2026-11-01" data-attendance-state="absent"><a class="member rider-event rider-attendance-event" href="evento-encerrado.html?evento=sede&amp;origem=frequencia"><span class="photo rider-event-photo"><span aria-hidden="true"></span><img data-photo="usermetrics-sede" alt=""></span><span class="rider-row-copy"><strong>Encontro na sede</strong><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> 01 nov 2026 • Campo Grande</small><span class="rider-status late"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>Faltou</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></li></ul></div><p>Mostrar foto, evento, data, local e presença. Abrir o detalhe autorizado pelo identificador da participação.</p></div></div></section><section class="kit-category"><h2>Eventos e justificativas do membro</h2><div class="kit-examples"><div class="kit-example"><h3>Card de evento do membro</h3><code class="component-export">CardDeEventoDoMembro</code><div class="history-app rider-app"><a class="rider-calendar-card" href="evento-do-membro.html?evento=bonito&amp;origem=eventos" data-event="bonito" data-event-date="2026-11-22" data-event-finished="false" data-event-count="32"><span class="photo rider-event-cover"><span aria-hidden="true"></span><img data-photo="rider-event-list-bonito" alt=""></span><div class="rider-calendar-inner"><h2>Rota de Bonito</h2><p class="rider-event-meta"><span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><span data-event-date-label>22 nov • 07h00</span></span><span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span data-event-place>Saída: Campo Grande</span></span></p><div class="rider-calendar-card-footer"><span class="photo member-photo"><span aria-hidden="true">BS</span><img data-photo="bruno-membro" alt=""></span><strong>32 confirmados</strong><span class="rider-calendar-personal" hidden></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></div></div></a></div><p>Exibir foto, título, horário, local, total e estado pessoal. A ação carrega o evento por ID.</p></div><div class="kit-example"><h3>Detalhe de evento do membro</h3><code class="component-export">DetalheDeEventoDoMembro</code><div class="history-app rider-app"><section class="rider-event-detail"><div class="rider-event-title"><a href="eventos-membro.html" data-event-back aria-label="Voltar"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5-7 7 7 7"/></svg></a><h1>Detalhes do evento</h1></div><article class="rider-detail-hero"><span class="photo rider-event-cover"><span aria-hidden="true"></span><img data-event-cover data-photo="rider-event-detail-bonito" alt=""></span><div class="rider-calendar-inner"><h2 data-event-name>Rota de Bonito</h2><p class="rider-event-meta"><span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><span data-event-date-label>22 nov 2026 • 07h00</span></span><span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span data-event-place>Saída: sede • Campo Grande, MS</span></span></p></div></article><section class="rider-event-surface rider-event-description"><h2>Sobre o encontro</h2><p data-event-about>Passeio do clube até a região de Bonito. Revise sua moto e chegue com antecedência.</p></section><div class="rider-event-surface rider-event-total"><span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg></span><strong>32 confirmados</strong></div></section></div><p>Compartilhar foto, informações e total entre os estados de evento e justificar falta.</p></div><div class="kit-example"><h3>Painel de participação do membro</h3><code class="component-export">PainelDeParticipacaoDoMembro</code><div class="history-app rider-app"><section class="rider-event-surface rider-event-participation"><h2>Sua participação</h2><span class="rider-event-state " data-absence-status>Aguardando confirmação</span><button type="button" class="primary" data-rider-rsvp>Confirmar participação</button><p>A presença é registrada pela gestão.</p></section><section class="rider-event-surface rider-event-participation"><h2>Sua participação</h2><span class="rider-event-state is-confirmed" data-absence-status>Confirmado</span><button type="button" class="secondary" data-rider-rsvp>Cancelar participação</button><p>A presença é registrada pela gestão.</p></section></div><p>Combinar status pessoal, ação permitida e descrição de quem registra a presença.</p></div><div class="kit-example"><h3>Seletor de período dos eventos</h3><code class="component-export">SeletorDePeriodoDosEventos</code><div class="history-app rider-app"><button type="button" class="rider-event-period" aria-haspopup="dialog"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><span>Próximos 3 meses</span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button></div><p>Exibir o intervalo e abrir o controle de data inicial e final.</p></div><div class="kit-example"><h3>Modal de justificativa do membro</h3><code class="component-export">ModalDeJustificativaDoMembro</code><div class="history-app rider-app"><div class="rider-explanation-example"><form class="rider-explanation-form" aria-label="Enviar justificativa"><div class="rider-explanation-heading"><h2 id="rider-explanation-heading">Justificar falta</h2><button type="button" data-absence-close class="rider-explanation-close" aria-label="Fechar justificativa">×</button></div><label for="rider-explanation-text">Sua justificativa</label><textarea id="rider-explanation-text" name="descricao" rows="3" maxlength="1000" autofocus required>Tive um imprevisto familiar e não consegui participar do evento.</textarea><output role="status"></output><button class="primary" type="submit">Confirmar justificativa</button><button class="secondary" data-absence-close type="button">Cancelar</button></form></div></div><p>Abrir sobre o detalhe do evento, exigir descrição, manter o foco no diálogo e gravar apenas ao confirmar.</p></div><div class="kit-example"><h3>Decisão da justificativa do membro</h3><code class="component-export">DecisaoDaJustificativaDoMembro</code><div class="history-app rider-app"><div class="rider-absence-result-list"><section class="rider-absence-result" data-absence-result data-state="pendente" aria-live="polite"><h2 tabindex="-1" data-color="late"><span data-absence-icon="pendente"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg></span><span data-absence-icon="aceita" hidden><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span><span data-absence-icon="naoAceita" hidden><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8 8 8 8m0-8-8 8"/></svg></span><span data-absence-title>Justificativa </span><strong data-absence-emphasis>em análise</strong></h2><p>Tive um imprevisto familiar e não consegui participar do evento.</p></section><section class="rider-absence-result" data-absence-result data-state="aceita" aria-live="polite"><h2 tabindex="-1" data-color="good"><span data-absence-icon="pendente" hidden><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg></span><span data-absence-icon="aceita"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span><span data-absence-icon="naoAceita" hidden><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8 8 8 8m0-8-8 8"/></svg></span><span data-absence-title>Justificativa aprovada</span><strong data-absence-emphasis hidden>em análise</strong></h2><p>Tive um imprevisto familiar e não consegui participar do evento.</p></section><section class="rider-absence-result" data-absence-result data-state="naoAceita" aria-live="polite"><h2 tabindex="-1" data-color="rider-red"><span data-absence-icon="pendente" hidden><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg></span><span data-absence-icon="aceita" hidden><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span><span data-absence-icon="naoAceita"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8 8 8 8m0-8-8 8"/></svg></span><span data-absence-title>Justificativa não aceita</span><strong data-absence-emphasis hidden>em análise</strong></h2><p>Tive um imprevisto familiar e não consegui participar do evento.</p></section></div></div><p>Exibir texto original e decisão pendente, aceita ou não aceita com rótulo e ícone.</p></div></div></section><section class="kit-category"><h2>Superadmin desktop</h2><div class="kit-examples"><div class="kit-example"><h3>Layout desktop do Superadmin</h3><code class="component-export">AdminDesktopLayout</code><div class="admin-shell admin-sample admin-layout-example" data-ui-component="AdminDesktopLayout"><aside class="admin-sidebar"><div class="admin-brand"><svg aria-hidden="true" viewBox="0 0 60 46" fill="none"><path d="M3 43 22 4h5L12 43Zm54 0L38 4h-5l15 39Z" fill="currentColor"/><path d="M30 6v7m0 5v8m0 5v11" stroke="currentColor" stroke-width="2.8"/></svg><strong>Gestão de Motoclubes</strong><span>SUPERADMIN</span></div><nav aria-label="Menu do Superadmin"><a href="admin-motoclubes.html" aria-current="page"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="17" r="3.5"/><circle cx="19" cy="17" r="3.5"/><path d="m5 17 4-7 4 7H5m8 0 4-8 2 8M7 10h4m4-4h3l1 4"/></svg><span>Motoclubes</span></a><a href="admin-planos.html"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 10 6-10 6-10-6zm-9 10 9 5 9-5M3 17l9 5 9-5"/></svg><span>Planos</span></a><a href="admin-pagamentos.html"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20m-16 5h5"/></svg><span>Pagamentos</span></a></nav><div class="admin-actor"><span aria-hidden="true">SA</span><strong>Superadmin</strong></div></aside><div class="admin-content">Conteúdo da seção</div></div><p>Manter navegação lateral, contexto e estado ativo da rota. Recebe active e children.</p></div><div class="kit-example"><h3>Cabeçalho de seção do Superadmin</h3><code class="component-export">AdminSectionHeader</code><div class="admin-shell admin-sample"><div class="admin-content"><header class="admin-heading" data-ui-component="AdminSectionHeader"><div><h1>Motoclubes</h1><p>Cadastros e assinaturas em um só lugar</p></div></header></div></div><p>Recebe title, subtitle e action opcional. Reusar nos três módulos.</p></div><div class="kit-example"><h3>Badge de situação do Superadmin</h3><code class="component-export">AdminStatusBadge</code><div class="admin-shell admin-sample"><div class="admin-content"><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--positive">Ativa</span> <span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--danger">Em atraso</span></div></div><p>Recebe label e tone. Estado tem rótulo legível independente da cor.</p></div><div class="kit-example"><h3>Indicadores SaaS de motoclubes</h3><code class="component-export">AdminClubMetrics</code><div class="admin-shell admin-sample"><div class="admin-content"><div class="ac-kpis" data-ui-component="AdminClubMetrics"><div class="ac-kpi"><span class="ac-icon-box"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="17" r="3.5"/><circle cx="19" cy="17" r="3.5"/><path d="m5 17 4-7 4 7H5m8 0 4-8 2 8M7 10h4m4-4h3l1 4"/></svg></span><div><span>Motoclubes cadastrados</span><strong data-ac-kpi="clubs">6</strong><small>Base atual</small></div></div><div class="ac-kpi"><span class="ac-icon-box"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="12" rx="6" ry="3"/><path d="M3 12v6c0 4 12 4 12 0v-6M3 15c0 4 12 4 12 0m-3-6V5c0-4 10-4 10 0v10c0 2-3 3-5 3m-5-13c0 4 10 4 10 0m-5 5c3 0 5-1 5-3"/></svg></span><div><span>Recebido no período</span><strong data-ac-kpi="paid">R$596,00</strong></div></div><div class="ac-kpi"><span class="ac-icon-box"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 2h10l4 4v16H5zM14 2v5h5M8 12h8M8 16h8"/></svg></span><div><span>Faturas em aberto</span><strong data-ac-kpi="open">R$398,00</strong></div></div><select aria-label="Competência financeira" data-ac-period><option value="2026-11">Novembro de 2026</option><option value="2026-10">Outubro de 2026</option><option value="2026-09">Setembro de 2026</option></select></div></div></div><p>Cadastro usa base atual e financeiro usa competência.</p></div><div class="kit-example"><h3>Filtros de motoclubes</h3><code class="component-export">AdminClubFilters</code><div class="admin-shell admin-sample"><div class="admin-content"><div class="ac-filters" data-ui-component="AdminClubFilters"><label class="ac-search"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></svg><input type="search" aria-label="Buscar clube, gestor ou e-mail" placeholder="Buscar clube, gestor ou e-mail"></label><select aria-label="Plano" data-ac-filter="plan"><option value="">Plano: Todos</option><option value="essencial">Essencial</option><option value="estrada">Estrada</option><option value="irmandade">Irmandade</option></select><select aria-label="Assinatura" data-ac-filter="subscription"><option value="">Assinatura: Todas</option><option value="ativa">Ativa</option><option value="em_atraso">Em atraso</option><option value="pendente">Aguardando pagamento</option></select><select aria-label="Acesso" data-ac-filter="access"><option value="">Acesso: Todos</option><option value="ativo">Ativo</option><option value="suspenso">Suspenso</option></select></div></div></div><p>Buscar por clube, gestor ou e-mail e filtrar plano, acesso e situação da assinatura.</p></div><div class="kit-example"><h3>Tabela de motoclubes</h3><code class="component-export">AdminClubTable</code><div class="admin-shell admin-sample"><div class="admin-content"><div class="ac-table-wrap" data-ui-component="AdminClubTable"><table class="ac-table"><colgroup><col class="ac-name-col"><col class="ac-plan-col"><col class="ac-people-col"><col><col class="ac-action-col"></colgroup><thead><tr><th scope="col">Motoclube</th><th scope="col">Plano</th><th scope="col">Afiliados</th><th scope="col">Assinatura</th><th scope="col"><span class="ac-visually-hidden">Ações</span></th></tr></thead><tbody><tr><td><strong data-ac="name">Rota Livre MC</strong><small data-ac="manager">Ricardo Almeida • ricardo@example.com</small></td><td><strong data-ac="plan">Estrada</strong><small data-ac="price">R$149,00/mês</small></td><td><strong data-ac="members">86</strong><small data-ac="limit">de 100 no plano</small></td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--positive">Ativa</span><small data-ac="bill-date">Próxima: 05 dez 2026.</small></td><td><a href="admin-motoclube.html?clube=C01" aria-label="Abrir Rota Livre MC"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr><tr><td><strong data-ac="name">Guardiões do Pantanal</strong><small data-ac="manager">Marcos Azevedo • marcos@example.com</small></td><td><strong data-ac="plan">Irmandade</strong><small data-ac="price">R$249,00/mês</small></td><td><strong data-ac="members">142</strong><small data-ac="limit">de 250 no plano</small></td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--positive">Ativa</span><small data-ac="bill-date">Próxima: 05 dez 2026.</small></td><td><a href="admin-motoclube.html?clube=C02" aria-label="Abrir Guardiões do Pantanal"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr><tr><td><strong data-ac="name">Rota Sul MC</strong><small data-ac="manager">Camila Rocha • camila@example.com</small></td><td><strong data-ac="plan">Essencial</strong><small data-ac="price">R$99,00/mês</small></td><td><strong data-ac="members">38</strong><small data-ac="limit">de 50 no plano</small></td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--positive">Ativa</span><small data-ac="bill-date">Próxima: 05 dez 2026.</small></td><td><a href="admin-motoclube.html?clube=C03" aria-label="Abrir Rota Sul MC"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr><tr><td><strong data-ac="name">Fronteira MC</strong><small data-ac="manager">André Martins • andre@example.com</small></td><td><strong data-ac="plan">Essencial</strong><small data-ac="price">R$99,00/mês</small></td><td><strong data-ac="members">46</strong><small data-ac="limit">de 50 no plano</small></td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--positive">Ativa</span><small data-ac="bill-date">Próxima: 05 dez 2026.</small></td><td><a href="admin-motoclube.html?clube=C04" aria-label="Abrir Fronteira MC"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr><tr><td><strong data-ac="name">Estrada Viva MC</strong><small data-ac="manager">Paulo Costa • paulo@example.com</small></td><td><strong data-ac="plan">Estrada</strong><small data-ac="price">R$149,00/mês</small></td><td><strong data-ac="members">74</strong><small data-ac="limit">de 100 no plano</small></td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--danger">Em atraso</span><small data-ac="bill-date">Venceu: 05 nov 2026.</small></td><td><a href="admin-motoclube.html?clube=C05" aria-label="Abrir Estrada Viva MC"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr><tr><td><strong data-ac="name">Serra Livre MC</strong><small data-ac="manager">Juliana Lima • juliana@example.com</small></td><td><strong data-ac="plan">Irmandade</strong><small data-ac="price">R$249,00/mês</small></td><td><strong data-ac="members">126</strong><small data-ac="limit">de 250 no plano</small></td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--danger">Em atraso</span><small data-ac="bill-date">Venceu: 05 nov 2026.</small></td><td><a href="admin-motoclube.html?clube=C06" aria-label="Abrir Serra Livre MC"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr></tbody></table><p class="ac-empty" role="status" hidden>Nenhum motoclube encontrado.</p><template class="ac-row-template"><table><tbody><tr><td><strong data-ac="name">Rota Livre MC</strong><small data-ac="manager">Ricardo Almeida • ricardo@example.com</small></td><td><strong data-ac="plan">Estrada</strong><small data-ac="price">R$149,00/mês</small></td><td><strong data-ac="members">86</strong><small data-ac="limit">de 100 no plano</small></td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--positive">Ativa</span><small data-ac="bill-date">Próxima: 05 dez 2026.</small></td><td><a href="admin-motoclube.html?clube=C01" aria-label="Abrir Rota Livre MC"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr></tbody></table></template></div></div></div><p>Tabela com dados contratuais e acesso ao painel por clube.</p></div><div class="kit-example"><h3>Painel de motoclube</h3><code class="component-export">AdminClubDrawer</code><div class="admin-shell admin-sample"><div class="admin-content"><dialog open class="ac-drawer ac-drawer-sample" data-ui-component="AdminClubDrawer" aria-labelledby="ac-club-title"><div class="ac-drawer-head"><h2 id="ac-club-title" tabindex="-1" autofocus>Rota Livre MC</h2><a class="ac-close" href="admin-motoclubes.html" aria-label="Fechar"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6 6 12 12M18 6 6 18"/></svg></a></div><div class="ac-drawer-content"><section class="ac-panel ac-club-triplet"><div><span class="ac-icon-box"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></span><span>Cadastro</span><strong data-ac-detail="location">Campo Grande MS</strong></div><div><span class="ac-icon-box"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg></span><strong data-ac-detail="members">86 afiliados</strong><span data-ac-detail="limit">de 100</span></div><div><span class="ac-icon-box"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="15" cy="9" r="5"/><path d="m11 13-7 7H2v-4l7-7M16 8h.01"/></svg></span><span>Acesso</span><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--positive">Ativo</span></div></section><section class="ac-panel ac-drawer-person"><span class="ac-icon-box"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M4 21v-2a7 7 0 0 1 7-7h2a7 7 0 0 1 7 7v2Z"/></svg></span><div><span>Gestor</span><strong data-ac-detail="manager">Ricardo Almeida</strong><span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg> <span data-ac-detail="email">ricardo@example.com</span></span><span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m7 3 3 4-2 3a13 13 0 0 0 6 6l3-2 4 3-1 3c-.4 1-2 1-3 1C10 20 4 14 3 7c0-1 0-2 1-3z"/></svg> <span data-ac-detail="phone">(67)99998-1010</span></span></div></section><section class="ac-panel ac-drawer-subscription"><div class="ac-drawer-split"><span class="ac-icon-box"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 10 6-10 6-10-6zm-9 10 9 5 9-5M3 17l9 5 9-5"/></svg></span><div><span>Assinatura</span><strong data-ac-detail="plan">Estrada</strong><big data-ac-detail="price">R$149,00/mês</big></div><div class="ac-drawer-end"><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--positive">Ativa</span><span data-ac-detail="charge-label">Próxima cobrança</span><strong data-ac-detail="charge-date">05 dez 2026</strong></div></div><div class="ac-drawer-split ac-invoice-row"><span class="ac-icon-box"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 2h10l4 4v16H5zM14 2v5h5M8 12h8M8 16h8"/></svg></span><div><span>Cobrança atual</span><strong data-ac-detail="invoice"># 1101</strong><big data-ac-detail="invoice-date">Novembro 2026</big></div><div class="ac-drawer-end"><strong data-ac-detail="invoice-total">R$149,00</strong><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--positive">Paga</span></div></div><a class="ac-button ac-outline ac-bill-link" href="admin-cobranca.html?fatura=1101&amp;origem=motoclube&amp;clube=C01"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6m0-6-9 9m7 0v6H5V6h6"/></svg> Abrir cobrança</a></section></div><footer class="ac-drawer-actions"><a class="ac-button ac-outline ac-edit-club" href="admin-editar-motoclube.html?clube=C01"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M9 15l1-5L19 1l4 4-9 9z"/></svg> Editar cadastro</a><a class="ac-button ac-primary ac-access-club" href="admin-suspender-motoclube.html?clube=C01"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5v14m8-14v14"/></svg> <span>Suspender acesso</span></a></footer></dialog></div></div><p>Compor cadastro, gestor, assinatura e fatura atual. Ações por clube e fatura selecionados.</p></div><div class="kit-example"><h3>Formulário de motoclube</h3><code class="component-export">AdminClubForm</code><div class="admin-shell admin-sample"><div class="admin-content"><dialog open class="ac-dialog ac-dialog-sample ac-form-dialog" data-ui-component="AdminClubForm" aria-labelledby="ac-form-title"><div class="ac-dialog-head"><h2 id="ac-form-title" tabindex="-1" autofocus>Novo motoclube</h2><a class="ac-close" href="admin-motoclubes.html" aria-label="Fechar"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6 6 12 12M18 6 6 18"/></svg></a></div><form class="ac-club-form"><label>Nome do motoclube<input name="name" type="text" value="Caminhos do Cerrado MC" required></label><label>Nome do gestor<input name="manager" type="text" value="Felipe Nunes" required></label><div class="ac-field-columns"><label>E-mail<input name="email" type="email" value="felipe@example.com" required></label><label>Telefone<input name="phone" type="tel" value="(67)99991-2026" required></label></div><div class="ac-field-columns"><label>Cidade<input name="city" type="text" value="Campo Grande" required></label><label>Estado<select name="state" required><option value="AC">AC</option><option value="AL">AL</option><option value="AP">AP</option><option value="AM">AM</option><option value="BA">BA</option><option value="CE">CE</option><option value="DF">DF</option><option value="ES">ES</option><option value="GO">GO</option><option value="MA">MA</option><option value="MT">MT</option><option value="MS" selected>MS</option><option value="MG">MG</option><option value="PA">PA</option><option value="PB">PB</option><option value="PR">PR</option><option value="PE">PE</option><option value="PI">PI</option><option value="RJ">RJ</option><option value="RN">RN</option><option value="RS">RS</option><option value="RO">RO</option><option value="RR">RR</option><option value="SC">SC</option><option value="SP">SP</option><option value="SE">SE</option><option value="TO">TO</option></select></label></div><label class="ac-plan-field">Plano inicial<select name="plan" required><option value="essencial">Essencial — R$99,00/mês</option><option value="estrada">Estrada — R$149,00/mês</option><option value="irmandade">Irmandade — R$249,00/mês</option></select></label><p class="ac-form-note"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.1"/></svg> <span>A assinatura será ativada após a confirmação do pagamento.</span></p><output class="ac-feedback" role="status" hidden></output><footer class="ac-dialog-actions"><a href="admin-motoclubes.html" class="ac-button ac-outline ac-cancel">Cancelar</a><button class="ac-button ac-primary">Salvar cadastro</button></footer></form></dialog></div></div><p>Cadastro e edição compartilham campos; o plano inicial pertence apenas ao cadastro.</p></div><div class="kit-example"><h3>Confirmação de acesso do motoclube</h3><code class="component-export">AdminClubAccessDialog</code><div class="admin-shell admin-sample"><div class="admin-content"><dialog open class="ac-dialog ac-dialog-sample ac-access-dialog" data-ui-component="AdminClubAccessDialog" aria-labelledby="ac-access-title"><div class="ac-dialog-head"><h2 id="ac-access-title" tabindex="-1" autofocus>Suspender acesso?</h2><a class="ac-close" href="admin-motoclube.html?clube=C01" aria-label="Fechar"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6 6 12 12M18 6 6 18"/></svg></a></div><p data-ac-access-explanation>O gestor e os membros do Rota Livre MC ficarão sem acesso.</p><form><label><span data-ac-access-label>Motivo da suspensão *</span><textarea name="reason" rows="4" placeholder="Descreva o motivo." required></textarea></label><p class="ac-access-note" data-ac-access-note>Suspender acesso não cancela a assinatura.</p><output class="ac-feedback" role="status" hidden></output><footer class="ac-dialog-actions"><a href="admin-motoclube.html?clube=C01" class="ac-button ac-outline ac-cancel">Cancelar</a><button class="ac-button ac-primary" data-ac-access-submit>Suspender acesso</button></footer></form></dialog></div></div><p>Motivo obrigatório, operação auditada e assinatura preservada.</p></div><div class="kit-example"><h3>Tabela de planos SaaS</h3><code class="component-export">AdminPlansTable</code><div class="admin-shell admin-sample"><div class="admin-content"><div class="admin-bill-table-wrap"><table class="admin-bill-table admin-plan-table" data-ui-component="AdminPlansTable"><thead><tr><th scope="col">Plano</th><th scope="col">Mensalidade</th><th scope="col">Limite de afiliados</th><th scope="col">Assinaturas vinculadas</th><th scope="col">Disponível para contratação</th><th scope="col"><span class="bill-sr-only">Ações</span></th></tr></thead><tbody><tr data-plan="essencial"><th scope="row" data-plan-name>Essencial</th><td data-plan-price>R$ 99,00</td><td data-plan-limit>50</td><td data-plan-linked>2</td><td data-plan-available><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--good">Sim</span></td><td class="admin-bill-action-cell"><a class="admin-bill-icon-button" href="admin-editar-plano.html?plano=essencial" aria-label="Editar plano Essencial"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m4 16 12-12a2.8 2.8 0 0 1 4 4L8 20l-5 1 1-5Z"/><path d="m14 6 4 4"/></svg></a></td></tr><tr data-plan="estrada"><th scope="row" data-plan-name>Estrada</th><td data-plan-price>R$ 149,00</td><td data-plan-limit>100</td><td data-plan-linked>2</td><td data-plan-available><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--good">Sim</span></td><td class="admin-bill-action-cell"><a class="admin-bill-icon-button" href="admin-editar-plano.html?plano=estrada" aria-label="Editar plano Estrada"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m4 16 12-12a2.8 2.8 0 0 1 4 4L8 20l-5 1 1-5Z"/><path d="m14 6 4 4"/></svg></a></td></tr><tr data-plan="irmandade"><th scope="row" data-plan-name>Irmandade</th><td data-plan-price>R$ 249,00</td><td data-plan-limit>250</td><td data-plan-linked>2</td><td data-plan-available><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--good">Sim</span></td><td class="admin-bill-action-cell"><a class="admin-bill-icon-button" href="admin-editar-plano.html?plano=irmandade" aria-label="Editar plano Irmandade"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="m4 16 12-12a2.8 2.8 0 0 1 4 4L8 20l-5 1 1-5Z"/><path d="m14 6 4 4"/></svg></a></td></tr></tbody></table><div class="admin-bill-table-note">Alterações de preço não modificam contratos existentes.</div></div></div></div><p>Apresentar catálogo, disponibilidade de contratação e assinaturas vinculadas.</p></div><div class="kit-example"><h3>Formulário versionado de plano</h3><code class="component-export">AdminPlanVersionForm</code><div class="admin-shell admin-sample"><div class="admin-content"><div class="admin-bill-plan-dialog admin-bill-example"><form class="admin-bill-plan-form" data-ui-component="AdminPlanVersionForm"><header><h2 id="edit-plan-heading" tabindex="-1" autofocus>Editar plano</h2><a class="admin-bill-icon-button" href="admin-planos.html" aria-label="Fechar edição">×</a></header><label for="admin-plan-name">Nome do plano</label><input id="admin-plan-name" name="name" value="Estrada" required maxlength="80"><label for="admin-plan-price">Mensalidade (R$)</label><input id="admin-plan-price" name="price" value="149,00" required inputmode="decimal"><label for="admin-plan-limit">Limite de afiliados</label><input id="admin-plan-limit" name="limit" type="number" value="100" required min="1" step="1"><label class="admin-bill-switch"><input type="checkbox" name="available" role="switch" checked><span>Disponível para novas assinaturas</span></label><p>Novos valores e limites valem para novas contratações. Contratos existentes mantêm as condições contratadas.</p><output role="status"></output><footer><a class="admin-bill-secondary" href="admin-planos.html">Cancelar</a><button class="admin-bill-primary" type="submit">Salvar alterações</button></footer></form></div></div></div><p>Validar preço em centavos e limite, criando versão apenas para contratações futuras.</p></div><div class="kit-example"><h3>Filtros de cobranças SaaS</h3><code class="component-export">AdminInvoiceFilters</code><div class="admin-shell admin-sample"><div class="admin-content"><div class="admin-invoice-filters" data-ui-component="AdminInvoiceFilters"><label class="admin-invoice-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><span class="bill-sr-only">Buscar motoclube ou cobrança</span><input type="search" id="admin-invoice-search" placeholder="Buscar motoclube ou cobrança"></label><label><span class="bill-sr-only">Período por vencimento</span><select id="admin-invoice-period"><option value="2026-11">Período: Novembro de 2026</option><option value="2026-10">Período: Outubro de 2026</option><option value="todos">Período: Todos</option></select></label><label><span class="bill-sr-only">Status da cobrança</span><select id="admin-invoice-status"><option value="todos">Status: Todos</option><option value="pago">Status: Paga</option><option value="em_aberto">Status: Em aberto</option></select></label></div></div></div><p>Filtrar pelo vencimento, estado e termo de busca.</p></div><div class="kit-example"><h3>Tabela de cobranças SaaS</h3><code class="component-export">AdminInvoicesTable</code><div class="admin-shell admin-sample"><div class="admin-content"><div class="admin-bill-table-wrap"><table class="admin-bill-table admin-invoice-table" data-ui-component="AdminInvoicesTable"><thead><tr><th scope="col">Cobrança</th><th scope="col">Motoclube</th><th scope="col">Plano</th><th scope="col">Valor</th><th scope="col">Vencimento</th><th scope="col">Status</th><th scope="col"><span class="bill-sr-only">Ações</span></th></tr></thead><tbody><tr data-invoice-id="1101" data-due="2026-11-05" data-status="pago"><th scope="row">#1101</th><td data-invoice-club>Rota Livre MC</td><td>Estrada</td><td>R$ 149,00</td><td>05 nov 2026</td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--good">Paga</span></td><td class="admin-bill-action-cell"><a class="admin-bill-icon-button" href="admin-cobranca.html?fatura=1101" aria-label="Abrir cobrança #1101"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr><tr data-invoice-id="1102" data-due="2026-11-05" data-status="pago"><th scope="row">#1102</th><td data-invoice-club>Guardiões do Pantanal</td><td>Irmandade</td><td>R$ 249,00</td><td>05 nov 2026</td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--good">Paga</span></td><td class="admin-bill-action-cell"><a class="admin-bill-icon-button" href="admin-cobranca.html?fatura=1102" aria-label="Abrir cobrança #1102"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr><tr data-invoice-id="1103" data-due="2026-11-05" data-status="pago"><th scope="row">#1103</th><td data-invoice-club>Rota Sul MC</td><td>Essencial</td><td>R$ 99,00</td><td>05 nov 2026</td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--good">Paga</span></td><td class="admin-bill-action-cell"><a class="admin-bill-icon-button" href="admin-cobranca.html?fatura=1103" aria-label="Abrir cobrança #1103"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr><tr data-invoice-id="1104" data-due="2026-11-05" data-status="pago"><th scope="row">#1104</th><td data-invoice-club>Fronteira MC</td><td>Essencial</td><td>R$ 99,00</td><td>05 nov 2026</td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--good">Paga</span></td><td class="admin-bill-action-cell"><a class="admin-bill-icon-button" href="admin-cobranca.html?fatura=1104" aria-label="Abrir cobrança #1104"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr><tr data-invoice-id="1105" data-due="2026-11-05" data-status="em_aberto"><th scope="row">#1105</th><td data-invoice-club>Estrada Viva MC</td><td>Estrada</td><td>R$ 149,00</td><td>05 nov 2026</td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--danger">Em aberto</span></td><td class="admin-bill-action-cell"><a class="admin-bill-icon-button" href="admin-cobranca.html?fatura=1105" aria-label="Abrir cobrança #1105"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr><tr data-invoice-id="1106" data-due="2026-11-05" data-status="em_aberto"><th scope="row">#1106</th><td data-invoice-club>Serra Livre MC</td><td>Irmandade</td><td>R$ 249,00</td><td>05 nov 2026</td><td><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--danger">Em aberto</span></td><td class="admin-bill-action-cell"><a class="admin-bill-icon-button" href="admin-cobranca.html?fatura=1106" aria-label="Abrir cobrança #1106"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></td></tr></tbody></table><div class="admin-bill-table-note" id="admin-invoice-total" aria-live="polite">6 cobranças</div></div></div></div><p>Exibir dados do período selecionado e abrir o detalhe pelo identificador da cobrança.</p></div><div class="kit-example"><h3>Painel de cobrança somente leitura</h3><code class="component-export">AdminInvoiceDrawer</code><div class="admin-shell admin-sample"><div class="admin-content"><div class="admin-invoice-panel admin-bill-example" data-ui-component="AdminInvoiceDrawer"><header><h2 id="admin-invoice-heading" tabindex="-1" autofocus>Cobrança #1101</h2><a class="admin-bill-icon-button" href="admin-pagamentos.html" data-invoice-back aria-label="Fechar cobrança">×</a></header><dl><div data-invoice-field="club_name"><dt>Motoclube</dt><dd>Rota Livre MC</dd></div><div data-invoice-field="plan"><dt>Plano contratado</dt><dd>Estrada</dd></div><div data-invoice-field="competency"><dt>Competência</dt><dd>Novembro 2026</dd></div><div data-invoice-field="amount"><dt>Valor</dt><dd>R$ 149,00</dd></div><div data-invoice-field="due"><dt>Vencimento</dt><dd>05 nov 2026</dd></div><div data-invoice-field="status"><dt>Status</dt><dd><span data-ui-component="AdminStatusBadge" class="admin-badge admin-badge--good">Paga</span></dd></div><div data-invoice-field="paid_at"><dt>Pagamento confirmado</dt><dd>03 nov 2026</dd></div><div data-invoice-field="method"><dt>Meio</dt><dd>Cartão</dd></div><div data-invoice-field="gateway_ref"><dt>Referência do pagamento</dt><dd>pg_1101</dd></div></dl><p data-invoice-unavailable hidden>Cobrança indisponível.</p><a class="admin-bill-secondary" href="admin-pagamentos.html" data-invoice-back>Fechar</a></div></div></div><p>Exibir dados de pagamento confirmado apenas quando disponíveis. Fechar volta ao contexto de origem.</p></div></div></section><section class="kit-category"><h2>Disciplina e comunicados do membro</h2><div class="kit-examples"><div class="kit-example"><h3>Linha de registro disciplinar do membro</h3><code class="component-export">LinhaDeRegistroDisciplinarDoMembro</code><div class="history-app rider-app"><ul class="rider-discipline-records"><li data-discipline-id="dis-2026-10-18" data-date="2026-10-18" data-state="analise"><a class="member rider-row" href="meu-registro-disciplinar.html?registro=dis-2026-10-18"><span class="rider-row-icon rider-red"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 4v6c0 5-4 8-9 10-5-2-9-5-9-10V6z"/></svg></span><span class="rider-row-copy"><strong>Conduta em deslocamento</strong><small><span>18 out 2026 • Rota de Aquidauana</span><span class="rider-status late"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>Em análise</span></small></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></li></ul></div><p>Exibir categoria, contexto público e situação, com link que preserva os filtros da lista.</p></div><div class="kit-example"><h3>Resumo disciplinar do membro</h3><code class="component-export">ResumoDisciplinarDoMembro</code><div class="history-app rider-app"><section class="rider-discipline-summary"><div class="rider-discipline-category"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 4v6c0 5-4 8-9 10-5-2-9-5-9-10V6z"/></svg><div><h2>Conduta em deslocamento</h2><span class="rider-status late rider-status-badge"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>Em análise</span></div></div><dl><div><dt><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><span>Data</span></dt><dd>18 out 2026</dd></div><div><dt><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span>Evento</span></dt><dd>Rota de Aquidauana</dd></div></dl></section></div><p>Mostrar data, evento, categoria e situação do registro liberado ao próprio membro.</p></div><div class="kit-example"><h3>Aviso de visibilidade disciplinar</h3><code class="component-export">AvisoDeVisibilidadeDisciplinar</code><div class="history-app rider-app"><aside class="rider-discipline-notice"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg><p>Somente informações disponibilizadas para você são exibidas.</p></aside></div><p>Explicar que o membro recebe somente as informações disponibilizadas pela gestão.</p></div><div class="kit-example"><h3>Card de comunicado do membro</h3><code class="component-export">CardDeComunicadoDoMembro</code><div class="history-app rider-app"><a class="rider-notice-card" href="aviso-do-membro.html?comunicado=bonito&amp;origem=avisos"><span class="rider-notice-thumb"><img class="" data-photo="rider-notice-bonito" alt=""></span><span class="rider-notice-card-copy"><strong>Orientações para a Rota de Bonito</strong><span class="rider-notice-summary">Saída às 7h. Confira os preparativos.</span><span class="rider-notice-meta"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><span data-rider-notice-date>05 nov 2026 • Ricardo Almeida</span></span><span class="rider-notice-meta"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg><span class="badge notice-audience">Todos os membros</span><span class="notice-pinned"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m10 5 9 9-3 1-3 3-3-3-6 6 6-6-4-4 3-3z" fill="currentColor"/><path d="m11 3 10 10"/></svg> Fixado</span></span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></div><p>Mostrar capa, título, resumo, autor, data, público, fixação e link de leitura.</p></div><div class="kit-example"><h3>Comunicado em modo leitura</h3><code class="component-export">ComunicadoEmModoLeitura</code><div class="history-app rider-app"><section class="rider-notice-detail-page"><div class="rider-notice-detail-top"><a href="avisos-membro.html" aria-label="Voltar"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 5-7 7 7 7M5 12h15"/></svg></a><h1>Comunicado</h1></div><article class="rider-notice-article"><span class="notice-pinned"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m10 5 9 9-3 1-3 3-3-3-6 6 6-6-4-4 3-3z" fill="currentColor"/><path d="m11 3 10 10"/></svg> Fixado</span><h2>Orientações para a Rota de Bonito</h2><div class="rider-notice-meta"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><span data-rider-notice-date>Ricardo Almeida • 05 nov 2026</span></div><div class="rider-notice-meta"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg><span class="badge notice-audience">Todos os membros</span></div><img class="rider-notice-hero" data-photo="rider-notice-cover" alt=""><div class="rider-notice-article-copy"><p>Nosso passeio será em 22 de novembro, com saída às 7h da sede em Campo Grande.</p><p>Revise sua moto e chegue com antecedência.</p></div></article><p class="rider-notice-empty" role="status" hidden>Comunicado indisponível.</p></section></div><p>Apresentar título, capa, autor, destinatários e conteúdo após autorizar o ID.</p></div></div></section><p id="demo-feedback" role="status"></p></main><dialog id="pilot-dialog"><form method="dialog"><h2></h2><p>Ação demonstrada no guia de produção.</p><button class="secondary">Fechar</button></form></dialog><dialog id="rider-demo" aria-labelledby="rider-demo-heading"><form method="dialog"><h2 id="rider-demo-heading"></h2><p id="rider-demo-text"></p><button class="secondary">Fechar</button></form></dialog><script>
const search = document.querySelector('#member-search');
const filters = [...document.querySelectorAll('.filter[data-level]')];
const rows = [...document.querySelectorAll('.members-list li')];
const dialog = document.querySelector('#pilot-dialog');
let level = '';
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
function updateList() {
  const term = normalize(search?.value ?? '');
  for (const row of rows) {
    row.hidden = (level !== '' && level !== row.dataset.level) || !normalize(row.dataset.query).includes(term);
  }
  const visible = rows.filter(row => !row.hidden).length;
  const count = document.querySelector('#member-count');
  const empty = document.querySelector('#members-empty');
  if (count) count.textContent = term || level ? visible : '86';
  if (empty) empty.hidden = visible > 0;
}
search?.addEventListener('input', updateList);
if (search && !rows.length) search.addEventListener('input', () => {
  document.querySelector('#demo-feedback').textContent = search.value ? 'Busca: ' + search.value : '';
});
for (const filter of filters) {
  filter.addEventListener('click', () => {
    level = filter.dataset.level;
    for (const option of filters) option.setAttribute('aria-pressed', String(option === filter));
    updateList();
  });
}
document.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  if (button.dataset.action === 'nav' && button.dataset.label === 'Mais' && document.querySelector('main.member-page')) {
    let more = document.querySelector('#management-more');
    if (!more) {
      more = document.createElement('dialog');
      more.id = 'management-more';
      more.setAttribute('aria-labelledby', 'management-more-title');
      more.innerHTML = '<form method="dialog"><h2 id="management-more-title">Mais</h2>'
        + '<p><a href="hierarquia-gestao.html">Hierarquia</a></p>'
        + '<p><a href="disciplina-gestao.html">Disciplina</a></p>'
        + '<p><a href="comunicados-gestao.html">Comunicados</a></p>'
        + '<p><a href="identidade-motoclube.html">Identidade do motoclube</a></p>'
        + '<p><a href="minha-assinatura.html">Minha assinatura</a></p>'
        + '<button class="secondary">Fechar</button></form>';
      document.body.append(more);
    }
    more.showModal();
    return;
  }
  if (button.getAttribute('aria-current') === 'page') return;
  const labels = {add: 'Adicionar membro', profile: button.dataset.member, nav: button.dataset.label};
  if (!(button.dataset.action in labels)) return;
  if (document.querySelector('main.member-page')) {
    const destinations = {'Editar membro':'editar-membro.html','Membros':'membros-piloto.html','Eventos':'eventos-gestao.html','Painel':'painel-gestor.html','Financeiro':'financeiro-gestao.html'};
    const destination = button.dataset.action === 'add' ? 'cadastrar-membro.html' : destinations[button.dataset.label];
    if (destination) {
      location.href = destination;
      return;
    }
  }
  if (button.dataset.member === 'Rafael Oliveira' && document.querySelector('main.member-page')) {
    location.href = 'perfil-membro.html';
    return;
  }
  dialog.querySelector('h2').textContent = labels[button.dataset.action];
  dialog.style.setProperty('--dialog-top', (button.offsetTop + 8) + 'px');
  dialog.showModal();
});

const p = document.querySelector('#period');
const feedback = document.querySelector('#period-status');
p.onchange = () => {
  document.querySelector('#custom-period').hidden = p.value !== 'custom';
  feedback.textContent = 'Selecionado: ' + p.selectedOptions[0].textContent;
};
document.querySelector('#period-form').onsubmit = event => {
  event.preventDefault();
  const start = document.querySelector('#date-start').value;
  const end = document.querySelector('#date-end').value;
  feedback.textContent = start && end && start <= end ? 'Intervalo aplicado: ' + start + ' a ' + end : 'Informe um intervalo válido.';
};

const modal = document.querySelector('#level-dialog'), target = document.querySelector('#new-level');
const trigger = document.querySelector('#demo-level');
trigger.onclick = () => {
  target.replaceChildren(new Option('Selecione um nível', ''), new Option('Escudado'), new Option('Próspero'));
  modal.querySelector('.primary').disabled = true;
  modal.style.setProperty('--dialog-top', (trigger.offsetTop + 8) + 'px');
  modal.showModal();
};
target.onchange = () => { modal.querySelector('.primary').disabled = !target.value; };
document.querySelector('#cancel-level').onclick = document.querySelector('#close-level').onclick = () => modal.close();
document.querySelector('#level-form').onsubmit = event => {
  event.preventDefault();
  if (!target.value) return;
  document.querySelector('#demo-feedback').textContent = 'Confirmação de exemplo: ' + target.value;
  modal.close();
};

for (const photoInput of document.querySelectorAll('.photo-field .upload-input')) {
  const field = photoInput.closest('.photo-field');
  const preview = field.querySelector('.upload-box img');
  const feedback = field.querySelector('.upload-feedback');
  let photoUrl;
  photoInput.addEventListener('change', () => {
    const file = photoInput.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { feedback.textContent = 'Selecione um arquivo de imagem.'; photoInput.value = ''; return; }
    if (photoUrl) URL.revokeObjectURL(photoUrl);
    photoUrl = URL.createObjectURL(file);
    preview.src = photoUrl;
    feedback.textContent = 'Foto selecionada.';
  });
}
(() => {
  const profileKey = 'motoclubes.rider-profile.demo.v1';
  const readSession = key => {
    try { return JSON.parse(sessionStorage.getItem(key)) ?? {}; } catch { return {}; }
  };
  const profile = readSession(profileKey);
  const participation = readSession('motoclubes.rider-rsvp.demo.v1');
  for (const total of document.querySelectorAll('[data-rider-upcoming-count]')) {
    total.textContent = participation.bonito === true ? '33 confirmados' : '32 confirmados';
  }
  const justification = readSession('motoclubes.rider-justifications.demo.v1').sede;
  const attention = document.querySelector('.rider-attention-link strong');
  if (attention && justification?.estado === 'pendente') attention.textContent = 'Justificativa em análise';
  const photoInput = document.querySelector('#rider-photo');
  const edit = document.querySelector('#rider-edit');
  const dialog = document.querySelector('#rider-demo');

  for (const label of document.querySelectorAll('[data-rider-nickname]')) {
    if (typeof profile.nickname === 'string') label.textContent = profile.nickname ? '“' + profile.nickname + '”' : '';
  }
  if (profile.photo) {
    for (const img of document.querySelectorAll('.rider-app img[data-photo="bruno-membro"]')) img.src = profile.photo;
  }
  document.addEventListener('click', event => {
    const trigger = event.target.closest('[data-rider-pending]');
    if (!trigger || !dialog || dialog.open) return;
    const title = trigger.dataset.riderPending;
    dialog.querySelector('h2').textContent = title;
    dialog.querySelector('p').textContent = title === 'Sair da conta'
      ? 'A saída encerra a sessão quando integrada à autenticação do aplicativo.'
      : 'Este destino será ligado à respectiva tela HTML da área do membro.';
    dialog.style.setProperty('--dialog-top', (trigger.getBoundingClientRect().top + window.scrollY + 8) + 'px');
    dialog.showModal();
  });

  let selectedPhoto = profile.photo;
  if (photoInput) {
    const preview = photoInput.parentElement.querySelector('img');
    const message = document.querySelector('#rider-photo-message');
    const save = edit?.querySelector('button[type="submit"], button.primary');
    photoInput.addEventListener('change', () => {
      const file = photoInput.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/') || file.size > 1500000) {
        message.textContent = 'Selecione uma imagem de até 1,5 MB para a prévia.';
        photoInput.value = '';
        if (save) save.disabled = false;
        return;
      }
      const reader = new FileReader();
      if (save) save.disabled = true;
      const finish = () => { if (save) save.disabled = false; };
      reader.onload = () => {
        if (photoInput.files[0] !== file) return;
        selectedPhoto = reader.result;
        preview.src = selectedPhoto;
        message.textContent = 'Foto selecionada.';
        finish();
      };
      reader.onerror = () => {
        if (photoInput.files[0] !== file) return;
        message.textContent = 'Não foi possível abrir a imagem.';
        photoInput.value = '';
        finish();
      };
      reader.readAsDataURL(file);
    });
  }
  if (edit) {
    const nickname = edit.querySelector('#rider-nickname');
    const phone = edit.querySelector('#rider-phone');
    nickname.value = profile.nickname ?? nickname.value;
    phone.value = profile.phone ?? phone.value;
    phone.addEventListener('input', () => phone.setCustomValidity(''));
    edit.addEventListener('submit', event => {
      event.preventDefault();
      const digits = phone.value.replace(/\D/g, '');
      if (![10, 11].includes(digits.length)) {
        phone.setCustomValidity('Informe o telefone com DDD.');
        phone.reportValidity();
        return;
      }
      const formattedPhone = '(' + digits.slice(0, 2) + ') ' + digits.slice(2, -4) + '-' + digits.slice(-4);
      try {
        sessionStorage.setItem(profileKey, JSON.stringify({
          nickname: nickname.value.trim(), phone: formattedPhone, photo: selectedPhoto,
        }));
      } catch {
        edit.querySelector('output').textContent = 'O navegador não conseguiu guardar a prévia.';
        return;
      }
      location.href = 'meu-perfil.html';
    });
  }

  const months = [
    {key:'2026-09', label:'Setembro 2026', month:'setembro', due:'05 set 2026', received:'04 set', paid:8000},
    {key:'2026-10', label:'Outubro 2026', month:'outubro', due:'05 out 2026', received:'05 out', paid:8000},
    {key:'2026-11', label:'Novembro 2026', month:'novembro', due:'05 nov 2026', paid:0},
    {key:'2026-12', label:'Dezembro 2026', month:'dezembro', due:'05 dez 2026', paid:0, future:true},
  ];
  const charge = 8000;
  const receipts = readSession('motoclubes.receipts.demo.v1');
  const paid = item => Math.min(charge, item.paid + (Number(receipts[item.key + ':bruno']) || 0));
  const openCount = document.querySelector('#rider-open-dues');
  if (openCount) openCount.textContent = months.filter(item => !item.future && paid(item) < charge).length;

  const monthLabel = document.querySelector('#rider-month-label');
  if (!monthLabel) return;
  let current = 2;
  const money = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'});
  const formatMoney = cents => money.format(cents / 100);
  const bill = document.querySelector('#rider-month-bill');
  const amount = document.querySelector('#rider-due-amount');
  const summaryStatus = document.querySelector('#rider-month-status .rider-status');
  const billStatus = bill.querySelector('.rider-status');
  const payments = document.querySelector('#rider-payments');
  const paidIcon = document.querySelector('#rider-paid-icon').content.firstElementChild;
  const clockIcon = billStatus.querySelector('svg').cloneNode(true);
  const paidRow = payments?.firstElementChild.cloneNode(true);
  const monthButtons = [...document.querySelectorAll('[data-month-step]')];

  function setStatus(target, label, color, symbol) {
    target.classList.remove('good', 'late');
    target.classList.add(color);
    target.replaceChildren(symbol.cloneNode(true), label);
  }
  function renderMonth() {
    const item = months[current];
    const balance = charge - paid(item);
    const label = balance === 0 ? 'Pago' : item.future ? 'A vencer' : 'Em atraso';
    const color = balance === 0 ? 'good' : 'late';
    const symbol = balance === 0 ? paidIcon : clockIcon;
    monthLabel.textContent = item.label;
    amount.textContent = formatMoney(balance);
    bill.querySelector('.rider-row-copy strong').textContent = 'Mensalidade de ' + item.month;
    bill.querySelector('.rider-row-copy small').textContent = 'Vencimento: ' + item.due;
    bill.querySelector('.rider-row-side strong').textContent = formatMoney(balance || charge);
    setStatus(summaryStatus, label, color, symbol);
    setStatus(billStatus, label, color, symbol);
    for (const button of monthButtons) {
      const index = current + Number(button.dataset.monthStep);
      button.disabled = index < 0 || index >= months.length;
    }
  }
  if (payments) {
    const history = months.filter(item => paid(item) > 0).reverse();
    payments.replaceChildren(...history.map(item => {
      const row = paidRow.cloneNode(true);
      row.querySelector('strong').textContent = item.label;
      row.querySelector('small').textContent = formatMoney(paid(item))
        + (item.received ? ' • Recebido em ' + item.received : '');
      if (paid(item) < charge) setStatus(row.querySelector('.rider-status'), 'Parcial', 'late', clockIcon);
      return row;
    }));
  }
  for (const button of monthButtons) {
    button.addEventListener('click', () => {
      current += Number(button.dataset.monthStep);
      renderMonth();
    });
  }
  renderMonth();
})();


</script></body></html>
````
