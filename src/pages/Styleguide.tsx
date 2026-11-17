import { useState, type ReactNode } from 'react';
import { Calendar, Coins, Layers, Search, Shield, Users } from 'lucide-react';
import {
  AdminClubAccessDialog,
  AdminClubDrawer,
  AdminClubFilters,
  AdminClubForm,
  AdminClubMetrics,
  AdminClubTable,
  AdminDesktopLayout,
  AdminInvoiceDrawer,
  AdminInvoiceFilters,
  AdminInvoicesTable,
  AdminPlanVersionForm,
  AdminPlansTable,
  AdminSectionHeader,
  AdminStatusBadge,
  AlternadorDeFixacao,
  AtalhoDoPerfil,
  Avatar,
  AvisoDeAcessoRestrito,
  AvisoDeVisibilidadeDisciplinar,
  Badge,
  BotaoPrincipal,
  BuscaDeMembros,
  Button,
  CabecalhoDeDetalhe,
  CabecalhoDoClube,
  CampoDeFormulario,
  Card,
  CardDeComunicado,
  CardDeComunicadoDoMembro,
  CardDeEvento,
  CardDeEventoDoMembro,
  CompetenciaESaldoDoMembro,
  ComunicadoEmModoLeitura,
  ControleDeVisibilidadeDoRegistro,
  DataEHorarioLadoALado,
  DecisaoDaJustificativaDoMembro,
  DetalheDeEventoDoMembro,
  FiltrosDeNivel,
  FotoDePerfilEditavel,
  FotoHorizontalDoEvento,
  IdentidadeDoMembro,
  IdentidadeDoProprioMembro,
  IndicadorDeComunicadoFixado,
  IndicadoresDoPainel,
  IndicadoresPessoais,
  Input,
  KpiCard,
  LinhaDeMembro,
  LinhaDeMensalidade,
  LinhaDeNavegacaoDoMembro,
  LinhaDeNivelHierarquico,
  LinhaDeOcorrencia,
  LinhaDePagamentoSaaS,
  LinhaDeParticipante,
  LinhaDePresenca,
  LinhaDeRegistroDisciplinarDoMembro,
  LinhaDoTempo,
  MenuMovelDaGestao,
  MenuMovelDoMembro,
  Modal,
  ModalDeJustificativaDoMembro,
  ModalDeMudancaDeNivel,
  NeonMenuIndicator,
  OpcoesDePresenca,
  PainelDeParticipacaoDoMembro,
  ParticipacaoNoHistoricoDoMembro,
  ProximoEncontroDoMembro,
  PublicoDoComunicado,
  ResumoDaCompetencia,
  ResumoDeFrequenciaDoMembro,
  ResumoDeIndicadores,
  ResumoDisciplinarDoMembro,
  ResumoDoPlanoSaaS,
  SeletorDeCapaDoComunicado,
  SeletorDeFoto,
  SeletorDePaletaDoClube,
  SeletorDePeriodo,
  SeletorDePeriodoDosEventos,
  SeletorEPreviaDeLogo,
  SlidePanel,
  Table,
  type AdminSection,
  type CompetenciaMembroItem,
  type PaletaClubeId,
  type PeriodoPreset,
} from '../components';
import type {
  CobrancaAdminDetalhe,
  CobrancaAdminResumo,
  MotoclubeAdminDetalhe,
  MotoclubeAdminResumo,
  PlanoAdminResumo,
} from '../types';

function ShowcaseItem({
  title,
  exportName,
  description,
  children,
}: {
  title: string;
  exportName: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0 space-y-2.5 rounded-[12px] border border-[#d7dbe3] dark:border-[#2e3138] bg-white/80 dark:bg-[#121316]/80 p-4">
      <div>
        <h3 className="text-sm font-bold text-[#111318] dark:text-[#f6f7f9]">{title}</h3>
        <code className="mt-0.5 block font-mono text-xs text-[#2563eb] dark:text-[#a6cffc]">
          {exportName}
        </code>
      </div>
      <div>{children}</div>
      {description && (
        <p className="text-xs leading-relaxed text-[#5c6270] dark:text-[#bfc2cb]">{description}</p>
      )}
    </div>
  );
}

function ShowcaseSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4 border-t border-[#d7dbe3] dark:border-[#2e3138] pt-6">
      <h2 className="text-xl font-extrabold tracking-tight text-[#111318] dark:text-[#f6f7f9]">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 items-start">{children}</div>
    </section>
  );
}

const SAMPLE_CLUBS: MotoclubeAdminResumo[] = [
  {
    id: 'C01',
    nome: 'Rota Livre MC',
    cidade: 'Campo Grande',
    uf: 'MS',
    gestorNome: 'Ricardo Almeida',
    gestorEmail: 'ricardo@example.com',
    gestorTelefone: '(67)99998-1010',
    planoId: 'estrada',
    planoNome: 'Estrada',
    valorContratadoCentavos: 14900,
    afiliadosAtivos: 86,
    limiteContratado: 100,
    assinaturaStatus: 'ativa',
    statusAcesso: 'ativo',
    proximaCobranca: '05 dez 2026',
    faturaAtualId: '1101',
  },
  {
    id: 'C05',
    nome: 'Estrada Viva MC',
    cidade: 'Dourados',
    uf: 'MS',
    gestorNome: 'Paulo Costa',
    gestorEmail: 'paulo@example.com',
    gestorTelefone: '(67)99881-4040',
    planoId: 'estrada',
    planoNome: 'Estrada',
    valorContratadoCentavos: 14900,
    afiliadosAtivos: 74,
    limiteContratado: 100,
    assinaturaStatus: 'em_atraso',
    statusAcesso: 'ativo',
    proximaCobranca: '05 nov 2026',
    faturaAtualId: '1105',
  },
];

const SAMPLE_CLUB_DETAIL: MotoclubeAdminDetalhe = {
  ...SAMPLE_CLUBS[0],
  faturaAtual: {
    id: '1101',
    competencia: 'Novembro 2026',
    valorCentavos: 14900,
    vencimento: '05 nov 2026',
    status: 'pago',
  },
};

const SAMPLE_PLANS: PlanoAdminResumo[] = [
  {
    id: 'essencial',
    nome: 'Essencial',
    precoMensalCentavos: 9900,
    limiteAfiliados: 50,
    disponivel: true,
    versao: 1,
    assinaturasVinculadas: 2,
  },
  {
    id: 'estrada',
    nome: 'Estrada',
    precoMensalCentavos: 14900,
    limiteAfiliados: 100,
    disponivel: true,
    versao: 1,
    assinaturasVinculadas: 2,
  },
  {
    id: 'irmandade',
    nome: 'Irmandade',
    precoMensalCentavos: 24900,
    limiteAfiliados: 250,
    disponivel: true,
    versao: 1,
    assinaturasVinculadas: 2,
  },
];

const SAMPLE_INVOICES: CobrancaAdminResumo[] = [
  {
    id: '1101',
    motoclubeId: 'C01',
    motoclubeNome: 'Rota Livre MC',
    planoNome: 'Estrada',
    competencia: 'Novembro 2026',
    valorCentavos: 14900,
    vencimento: '05 nov 2026',
    status: 'pago',
    gatewayId: 'gw_1101',
  },
  {
    id: '1105',
    motoclubeId: 'C05',
    motoclubeNome: 'Estrada Viva MC',
    planoNome: 'Estrada',
    competencia: 'Novembro 2026',
    valorCentavos: 14900,
    vencimento: '05 nov 2026',
    status: 'em_aberto',
    gatewayId: 'gw_1105',
  },
];

const SAMPLE_INVOICE_DETAIL: CobrancaAdminDetalhe = {
  ...SAMPLE_INVOICES[0],
  pagoEm: '03 nov 2026',
  meio: 'Cartão',
  referenciaPagamento: 'pg_1101',
};

const MEMBER_MONTHS: CompetenciaMembroItem[] = [
  {
    key: '2026-10',
    label: 'Outubro 2026',
    mesNome: 'outubro',
    vencimentoTexto: '05 out 2026',
    valorCentavos: 8000,
    pagoCentavos: 8000,
  },
  {
    key: '2026-11',
    label: 'Novembro 2026',
    mesNome: 'novembro',
    vencimentoTexto: '05 nov 2026',
    valorCentavos: 8000,
    pagoCentavos: 0,
  },
  {
    key: '2026-12',
    label: 'Dezembro 2026',
    mesNome: 'dezembro',
    vencimentoTexto: '05 dez 2026',
    valorCentavos: 8000,
    pagoCentavos: 0,
    futura: true,
  },
];

export function Styleguide() {
  const [primitiveModalOpen, setPrimitiveModalOpen] = useState(false);
  const [primitiveSlideOpen, setPrimitiveSlideOpen] = useState(false);
  const [mgmtNavRoute, setMgmtNavRoute] = useState('/membros');
  const [memberSearch, setMemberSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState('');
  const [periodPreset, setPeriodPreset] = useState<PeriodoPreset>('2026');
  const [formEmail, setFormEmail] = useState('rafael@example.com');
  const [eventDate, setEventDate] = useState('2026-11-22');
  const [eventTime, setEventTime] = useState('07:00');
  const [levelDialogOpen, setLevelDialogOpen] = useState(false);
  const [presenceOption, setPresenceOption] = useState<'presente' | 'faltou' | ''>('presente');
  const [recordVisible, setRecordVisible] = useState(true);
  const [noticePinned, setNoticePinned] = useState(true);
  const [clubPalette, setClubPalette] = useState<PaletaClubeId>('vermelho');
  const [accentHex, setAccentHex] = useState('#ED343B');
  const [memberMonthIdx, setMemberMonthIdx] = useState(1);
  const [rsvpConfirmed, setRsvpConfirmed] = useState(false);
  const [justificationModalOpen, setJustificationModalOpen] = useState(false);
  const [adminNav, setAdminNav] = useState<AdminSection>('motoclubes');
  const [adminCompetencia, setAdminCompetencia] = useState('2026-11');
  const [adminClubQuery, setAdminClubQuery] = useState('');
  const [adminPlanFilter, setAdminPlanFilter] = useState('');
  const [adminSubFilter, setAdminSubFilter] = useState('');
  const [adminAccessFilter, setAdminAccessFilter] = useState('');
  const [adminInvoiceQuery, setAdminInvoiceQuery] = useState('');
  const [adminInvoicePeriod, setAdminInvoicePeriod] = useState('2026-11');
  const [adminInvoiceStatus, setAdminInvoiceStatus] = useState('todos');
  const [feedback, setFeedback] = useState('');

  const filteredClubs = SAMPLE_CLUBS.filter((c) => {
    const q = adminClubQuery.trim().toLowerCase();
    const matchesQ =
      !q ||
      c.nome.toLowerCase().includes(q) ||
      c.gestorNome.toLowerCase().includes(q) ||
      c.gestorEmail.toLowerCase().includes(q);
    const matchesPlan = !adminPlanFilter || c.planoId === adminPlanFilter;
    const matchesSub = !adminSubFilter || c.assinaturaStatus === adminSubFilter;
    const matchesAccess = !adminAccessFilter || c.statusAcesso === adminAccessFilter;
    return matchesQ && matchesPlan && matchesSub && matchesAccess;
  });

  const filteredInvoices = SAMPLE_INVOICES.filter((inv) => {
    const q = adminInvoiceQuery.trim().toLowerCase();
    const matchesQ =
      !q || inv.motoclubeNome.toLowerCase().includes(q) || inv.id.toLowerCase().includes(q);
    const matchesStatus = adminInvoiceStatus === 'todos' || inv.status === adminInvoiceStatus;
    return matchesQ && matchesStatus;
  });

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <span className="inline-flex items-center rounded-full border border-[#ff273a]/40 bg-[#ff273a]/10 px-3 py-1 text-xs font-bold text-[#e4111e] dark:text-[#ff6371]">
          Design System & UI Kit
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight">Styleguide do Motoclub</h2>
        <p className="max-w-3xl text-sm text-[#5c6270] dark:text-[#bfc2cb]">
          Validação visual de todos os componentes primitivos e dos 71 componentes extraídos do UI Kit em modo claro e escuro.
        </p>
        {feedback && (
          <output
            role="status"
            className="block rounded-lg border border-[#d7dbe3] dark:border-[#42454e] bg-white dark:bg-[#191b20] px-3 py-2 text-xs font-medium"
          >
            {feedback}
          </output>
        )}
      </header>

      <ShowcaseSection title="Tokens e Primitivos Base">
        <ShowcaseItem title="Botões base" exportName="Button">
          <div className="flex flex-wrap items-center gap-2.5">
            <Button variant="primary">Primário</Button>
            <Button variant="secondary">Secundário</Button>
            <Button variant="outline">Contorno</Button>
            <Button variant="ghost">Fantasma</Button>
            <Button variant="danger">Perigo</Button>
            <Button variant="primary" disabled>
              Desabilitado
            </Button>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Badges e Avatares" exportName="Badge / Avatar">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="neutral">Neutro</Badge>
              <Badge tone="positive">Em dia</Badge>
              <Badge tone="warning">Em atraso</Badge>
              <Badge tone="danger">Crítico</Badge>
              <Badge tone="accent">Destaque</Badge>
            </div>
            <div className="flex items-center gap-3">
              <Avatar name="Ricardo Almeida" size="sm" />
              <Avatar name="Rafael Oliveira" size="md" />
              <Avatar name="Bruno Souza" size="lg" rounded="square" />
              <Avatar name="Juliana Costa" size="xl" />
            </div>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Campo de entrada e Card" exportName="Input / Card">
          <Card padding="md" className="space-y-3">
            <Input
              label="Buscar registro"
              placeholder="Digite para testar..."
              leftIcon={<Search className="h-4 w-4" />}
              helperText="Suporta ícones, validação e estados dark/light."
            />
          </Card>
        </ShowcaseItem>

        <ShowcaseItem title="Tabela, Modal e Painel Lateral" exportName="Table / Modal / SlidePanel">
          <div className="space-y-3">
            <Table
              columns={[
                { key: 'plano', header: 'Plano', render: (r) => <strong>{r.nome}</strong> },
                { key: 'limite', header: 'Limite', render: (r) => `${r.limiteAfiliados} membros` },
              ]}
              data={SAMPLE_PLANS}
              keyExtractor={(r) => r.id}
              footerNote="Tabela reutilizável com cabeçalho tabular."
            />
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm" onClick={() => setPrimitiveModalOpen(true)}>
                Abrir Modal base
              </Button>
              <Button variant="outline" size="sm" onClick={() => setPrimitiveSlideOpen(true)}>
                Abrir SlidePanel base
              </Button>
            </div>
            <Modal
              open={primitiveModalOpen}
              onClose={() => setPrimitiveModalOpen(false)}
              title="Exemplo de Modal Base"
            >
              <p className="text-sm text-[#5c6270] dark:text-[#bfc2cb]">
                Modal acessível com fechamento via tecla Escape e clique no backdrop.
              </p>
            </Modal>
            <SlidePanel
              open={primitiveSlideOpen}
              onClose={() => setPrimitiveSlideOpen(false)}
              title="Painel Lateral Base"
              footer={
                <Button fullWidth variant="secondary" onClick={() => setPrimitiveSlideOpen(false)}>
                  Fechar painel
                </Button>
              }
            >
              <p className="text-sm text-[#5c6270] dark:text-[#bfc2cb]">
                Conteúdo deslizante para detalhes contextuais em desktop e mobile.
              </p>
            </SlidePanel>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Navegação e identidade">
        <ShowcaseItem
          title="Cabeçalho do clube"
          exportName="CabecalhoDoClube"
          description="Recebe nome, local, marca opcional e avatar do gestor."
        >
          <CabecalhoDoClube
            nome="Rota Livre MC"
            local="Campo Grande • MS"
            avatarNome="Ricardo Almeida"
          />
        </ShowcaseItem>

        <ShowcaseItem
          title="Cabeçalho de detalhe"
          exportName="CabecalhoDeDetalhe"
          description="Cabeçalho compartilhado entre telas internas com botão Voltar e ação opcional."
        >
          <CabecalhoDeDetalhe
            titulo="Perfil do membro"
            onVoltar={() => setFeedback('Ação de voltar acionada.')}
          />
        </ShowcaseItem>

        <ShowcaseItem
          title="Menu móvel da gestão"
          exportName="MenuMovelDaGestao"
          description="Barra inferior responsiva com destaque neon sob o texto selecionado."
        >
          <MenuMovelDaGestao
            rotaAtual={mgmtNavRoute}
            onNavigate={(rota) => {
              setMgmtNavRoute(rota);
              setFeedback(`Navegação da gestão: ${rota}`);
            }}
          />
        </ShowcaseItem>

        <ShowcaseItem
          title="Indicador neon de menu ativo"
          exportName="NeonMenuIndicator"
          description="Luz neon reutilizável que segue a cor de identidade do clube."
        >
          <div className="flex items-center gap-6">
            <span className="inline-flex flex-col items-center text-sm font-bold text-[var(--mc-accent)]">
              Painel
              <NeonMenuIndicator className="mt-1" />
            </span>
            <span className="inline-flex flex-col items-center text-sm font-bold text-[var(--mc-accent)]">
              Eventos
              <NeonMenuIndicator size="sm" className="mt-1" />
            </span>
          </div>
        </ShowcaseItem>

        <ShowcaseItem
          title="Identidade do membro"
          exportName="IdentidadeDoMembro"
          description="Variantes perfil (com data de entrada) e nivel (destacando nível atual)."
        >
          <div className="space-y-3">
            <IdentidadeDoMembro
              nome="Rafael Oliveira"
              apelido="Falcão"
              nivel="Meio-escudo"
              entradaTexto="No clube desde nov/2025"
              variante="perfil"
            />
            <IdentidadeDoMembro
              nome="Rafael Oliveira"
              apelido="Falcão"
              nivel="Meio-escudo"
              variante="nivel"
            />
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Ações e filtros">
        <ShowcaseItem title="Botão principal" exportName="BotaoPrincipal">
          <BotaoPrincipal
            texto="Adicionar membro"
            onClick={() => setFeedback('Botão principal clicado.')}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Busca de membros" exportName="BuscaDeMembros">
          <BuscaDeMembros value={memberSearch} onChange={setMemberSearch} />
        </ShowcaseItem>

        <ShowcaseItem title="Filtros de nível e abas" exportName="FiltrosDeNivel / GrupoDeFiltros">
          <div className="space-y-2.5">
            <FiltrosDeNivel
              niveis={[
                { id: '', nome: 'Todos', contagem: 86 },
                { id: 'prospero', nome: 'Próspero' },
                { id: 'meio-escudo', nome: 'Meio-escudo' },
                { id: 'escudado', nome: 'Escudado' },
              ]}
              selecionado={levelFilter}
              onSelect={setLevelFilter}
            />
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Seletor de período" exportName="SeletorDePeriodo">
          <div className="space-y-3">
            <SeletorDePeriodo
              periodo={periodPreset}
              onApply={({ periodo }) => {
                setPeriodPreset(periodo);
                setFeedback(`Período aplicado: ${periodo}`);
              }}
            />
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Formulários">
        <ShowcaseItem title="Campo de formulário" exportName="CampoDeFormulario">
          <CampoDeFormulario
            rotulo="E-mail de acesso"
            type="email"
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
            textoDeAjuda="Usado para login no aplicativo do motoclube."
          />
        </ShowcaseItem>

        <ShowcaseItem title="Seletor de foto" exportName="SeletorDeFoto">
          <SeletorDeFoto nomeFallback="Rafael Oliveira" />
        </ShowcaseItem>

        <ShowcaseItem title="Foto horizontal do evento" exportName="FotoHorizontalDoEvento">
          <FotoHorizontalDoEvento />
        </ShowcaseItem>

        <ShowcaseItem title="Data e horário lado a lado" exportName="DataEHorarioLadoALado">
          <DataEHorarioLadoALado
            data={eventDate}
            horario={eventTime}
            onDataChange={setEventDate}
            onHorarioChange={setEventTime}
          />
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Listas e indicadores">
        <ShowcaseItem title="Linha de membro" exportName="LinhaDeMembro">
          <div className="space-y-2">
            <LinhaDeMembro
              id="M01"
              nome="Rafael Oliveira"
              apelido="Falcão"
              nivel="Meio-escudo"
              ingressoTexto="Desde nov/2025"
              frequenciaPercentual={88}
              situacaoFinanceira="em_dia"
              onOpen={(id) => setFeedback(`Abrir membro ${id}`)}
            />
            <LinhaDeMembro
              id="M02"
              nome="Bruno Souza"
              apelido="Búfalo"
              nivel="Próspero"
              ingressoTexto="Desde ago/2026"
              frequenciaPercentual={68}
              situacaoFinanceira="em_atraso"
              onOpen={(id) => setFeedback(`Abrir membro ${id}`)}
            />
            <LinhaDeMembro
              id="M03"
              nome="Juliana Costa"
              apelido="Juba"
              nivel="Meio-escudo"
              ingressoTexto="Desde fev/2025"
              frequenciaPercentual={42}
              situacaoFinanceira="em_dia"
              onOpen={(id) => setFeedback(`Abrir membro ${id}`)}
            />
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Atalho do perfil" exportName="AtalhoDoPerfil">
          <AtalhoDoPerfil
            titulo="Nível e histórico"
            descricao="Consultar histórico e alterar nível"
            destino="/membros/M01/nivel"
            icone={<Layers className="h-5 w-5" />}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Resumo de indicadores" exportName="ResumoDeIndicadores">
          <ResumoDeIndicadores
            frequenciaPercentual={88}
            mensalidadeStatus="Em dia"
            ocorrenciasTotal={0}
            eventosTotal={15}
            presencasTotal={12}
            faltasTotal={3}
            justificadasTotal={1}
            exibirResumoEventos
            mensalidadesPeriodo={{
              total: 11,
              pagasNoPrazo: 7,
              pagasComAtraso: 4,
              vencidas: 0,
              aVencer: 0,
            }}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Linha do tempo" exportName="LinhaDoTempo">
          <LinhaDoTempo
            mudancas={[
              {
                id: 'h2',
                dataTexto: '01 ago 2026',
                descricao: 'Próspero → Meio-escudo',
                responsavel: 'Alterado por Ricardo',
              },
              {
                id: 'h1',
                dataTexto: '01 nov 2025',
                descricao: 'Nível inicial: Próspero',
              },
            ]}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Linha de presença" exportName="LinhaDePresenca">
          <div className="space-y-2">
            <LinhaDePresenca
              id="E01"
              nome="Encontro na sede"
              dataTexto="01 nov 2026"
              local="Campo Grande"
              presenca="presente"
              onOpen={(id) => setFeedback(`Abrir evento ${id}`)}
            />
            <LinhaDePresenca
              id="E02"
              nome="Reunião de setembro"
              dataTexto="05 set 2026"
              local="Campo Grande"
              presenca="faltou"
              onOpen={(id) => setFeedback(`Abrir evento ${id}`)}
            />
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Confirmação">
        <ShowcaseItem title="Modal de mudança de nível" exportName="ModalDeMudancaDeNivel">
          <Button variant="secondary" onClick={() => setLevelDialogOpen(true)}>
            Abrir modal de mudança de nível
          </Button>
          <ModalDeMudancaDeNivel
            open={levelDialogOpen}
            membroNome="Rafael Oliveira"
            nivelAtual="Meio-escudo"
            opcoes={[
              { id: 'escudado', nome: 'Escudado' },
              { id: 'prospero', nome: 'Próspero' },
            ]}
            onCancel={() => setLevelDialogOpen(false)}
            onConfirm={(novoNivelId) => {
              setLevelDialogOpen(false);
              setFeedback(`Nível alterado para: ${novoNivelId}`);
            }}
          />
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Eventos e chamada">
        <ShowcaseItem title="Card de evento" exportName="CardDeEvento">
          <CardDeEvento
            id="E01"
            categoria="Passeio"
            titulo="Rota de Bonito"
            dataTexto="22 nov • 07h00"
            local="Saída: Campo Grande"
            confirmadosTotal={32}
            confirmadosAvatares={[
              { nome: 'Ricardo Almeida' },
              { nome: 'Camila Rocha' },
              { nome: 'Bruno Souza' },
            ]}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Linha de participante" exportName="LinhaDeParticipante">
          <LinhaDeParticipante
            id="M01"
            nome="Rafael Oliveira"
            apelido="Falcão"
            nivel="Meio-escudo"
            confirmado
            presenca="presente"
            onSelect={(id) => setFeedback(`Participante selecionado: ${id}`)}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Opções de presença" exportName="OpcoesDePresenca">
          <OpcoesDePresenca value={presenceOption} onChange={setPresenceOption} />
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Painel e financeiro">
        <ShowcaseItem
          title="Card de KPI reutilizável"
          exportName="KpiCard / KpiCornerDot"
          description="Cartão de indicador padronizado com pontinho de destaque no canto superior direito."
        >
          <div className="grid grid-cols-2 gap-2">
            <KpiCard
              layout="horizontal"
              dotTone="accent"
              icon={<Users className="h-5 w-5 text-[var(--mc-accent)]" />}
              value={86}
              label="Membros ativos"
            />
            <KpiCard
              layout="horizontal"
              dotTone="positive"
              icon={<Coins className="h-5 w-5 text-[#15803d] dark:text-[#86de9b]" />}
              value="92%"
              label="Adimplência"
            />
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Indicadores do painel" exportName="IndicadoresDoPainel">
          <IndicadoresDoPainel
            membrosAtivos={86}
            mensalidadesPendentes={12}
            frequenciaGeralPercentual={88}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Resumo da competência" exportName="ResumoDaCompetencia">
          <ResumoDaCompetencia
            previstoCentavos={688000}
            recebidoCentavos={592000}
            pendenteCentavos={96000}
            emDiaCount={74}
            pendentesCount={12}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Linha de mensalidade" exportName="LinhaDeMensalidade">
          <LinhaDeMensalidade
            membroNome="Bruno Souza"
            apelido="Búfalo"
            vencimentoTexto="Venceu em 05 nov"
            saldoCentavos={8000}
            situacao="em_atraso"
            onOpen={() => setFeedback('Abrir recebimento de Bruno Souza')}
          />
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Hierarquia e disciplina">
        <ShowcaseItem title="Linha de nível hierárquico" exportName="LinhaDeNivelHierarquico">
          <LinhaDeNivelHierarquico
            ordem={2}
            titulo="Meio-escudo"
            quantidadeMembros={24}
            ativo
            onEdit={() => setFeedback('Editar nível Meio-escudo')}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Linha de ocorrência" exportName="LinhaDeOcorrencia">
          <LinhaDeOcorrencia
            membroNome="Bruno Souza"
            apelido="Búfalo"
            categoria="Conduta em deslocamento"
            dataTexto="18 out 2026"
            eventoTitulo="Rota de Aquidauana"
            status="em_analise"
            onOpen={() => setFeedback('Abrir ocorrência de Bruno Souza')}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Aviso de acesso restrito" exportName="AvisoDeAcessoRestrito">
          <AvisoDeAcessoRestrito />
        </ShowcaseItem>

        <ShowcaseItem
          title="Controle de visibilidade do registro"
          exportName="ControleDeVisibilidadeDoRegistro"
        >
          <ControleDeVisibilidadeDoRegistro checked={recordVisible} onChange={setRecordVisible} />
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Comunicados">
        <ShowcaseItem title="Card de comunicado" exportName="CardDeComunicado">
          <CardDeComunicado
            id="N01"
            titulo="Orientações para a Rota de Bonito"
            resumo="Saída às 7h. Confira os preparativos."
            autorNome="Ricardo Almeida"
            dataTexto="05 nov 2026"
            publicoRotulo="Todos os membros"
            fixado
            onMenu={(id) => setFeedback(`Menu do comunicado ${id}`)}
          />
        </ShowcaseItem>

        <ShowcaseItem
          title="Público, indicador e alternador de fixação"
          exportName="PublicoDoComunicado / IndicadorDeComunicadoFixado / AlternadorDeFixacao"
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <PublicoDoComunicado rotulo="Todos os membros" />
              <IndicadorDeComunicadoFixado fixado />
            </div>
            <AlternadorDeFixacao checked={noticePinned} onChange={setNoticePinned} />
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Seletor de capa do comunicado" exportName="SeletorDeCapaDoComunicado">
          <SeletorDeCapaDoComunicado />
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Identidade e assinatura">
        <ShowcaseItem title="Seletor de paleta do clube" exportName="SeletorDePaletaDoClube">
          <SeletorDePaletaDoClube
            value={clubPalette}
            onChange={(id, hex) => {
              setClubPalette(id);
              setAccentHex(hex);
            }}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Seletor e prévia de logo" exportName="SeletorEPreviaDeLogo">
          <SeletorEPreviaDeLogo nomeClube="Rota Livre MC" corDestaqueHex={accentHex} />
        </ShowcaseItem>

        <ShowcaseItem title="Resumo do plano SaaS" exportName="ResumoDoPlanoSaaS">
          <ResumoDoPlanoSaaS
            planoNome="Estrada"
            valorMensalCentavos={14900}
            statusLabel="Ativa"
            afiliadosAtivos={86}
            limiteAfiliados={100}
            proximaCobrancaTexto="05 dez 2026"
          />
        </ShowcaseItem>

        <ShowcaseItem title="Linha de pagamento SaaS" exportName="LinhaDePagamentoSaaS">
          <LinhaDePagamentoSaaS
            titulo="Mensalidade • Novembro 2026"
            subtitulo="Pago em 03 nov 2026"
            valorCentavos={14900}
            statusLabel="Paga"
          />
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Área do membro">
        <ShowcaseItem title="Menu móvel do membro" exportName="MenuMovelDoMembro">
          <MenuMovelDoMembro rotaAtual="/membro" />
        </ShowcaseItem>

        <ShowcaseItem title="Identidade do próprio membro" exportName="IdentidadeDoProprioMembro">
          <div className="space-y-3">
            <IdentidadeDoProprioMembro
              nome="Bruno Souza"
              apelido="Búfalo"
              nivel="Próspero"
              densidade="home"
            />
            <IdentidadeDoProprioMembro
              nome="Bruno Souza"
              apelido="Búfalo"
              nivel="Próspero"
              densidade="compact"
            />
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Linha de navegação do membro" exportName="LinhaDeNavegacaoDoMembro">
          <div className="space-y-2">
            <LinhaDeNavegacaoDoMembro
              icone={<Calendar className="h-5 w-5" />}
              titulo="Minha frequência"
              descricao="Consultar minhas participações"
              destino="/membro/frequencia"
              tomIcone="good"
            />
            <LinhaDeNavegacaoDoMembro
              icone={<Shield className="h-5 w-5" />}
              titulo="Minha disciplina"
              descricao="Meus registros disponibilizados"
              destino="/membro/disciplina"
              tomIcone="danger"
            />
            <LinhaDeNavegacaoDoMembro
              icone={<Coins className="h-5 w-5" />}
              titulo="Minha situação financeira"
              descricao="Mensalidades e histórico"
              destino="/membro/financeiro"
              tomIcone="neutral"
            />
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Indicadores pessoais" exportName="IndicadoresPessoais">
          <IndicadoresPessoais
            frequenciaPercentual={75}
            mensalidadesPendentes={1}
            registrosEmAnalise={1}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Próximo encontro do membro" exportName="ProximoEncontroDoMembro">
          <ProximoEncontroDoMembro
            eventoId="E01"
            titulo="Rota de Bonito"
            dataTexto="22 nov • 07h00"
            local="Saída: Campo Grande"
            confirmadosTotal={32}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Foto de perfil editável" exportName="FotoDePerfilEditavel">
          <FotoDePerfilEditavel nome="Bruno Souza" />
        </ShowcaseItem>

        <ShowcaseItem title="Competência e saldo do membro" exportName="CompetenciaESaldoDoMembro">
          <CompetenciaESaldoDoMembro
            competencias={MEMBER_MONTHS}
            indiceAtual={memberMonthIdx}
            onStep={setMemberMonthIdx}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Resumo de frequência do membro" exportName="ResumoDeFrequenciaDoMembro">
          <ResumoDeFrequenciaDoMembro previstos={4} presencas={3} taxaPercentual={75} />
        </ShowcaseItem>

        <ShowcaseItem
          title="Participação no histórico do membro"
          exportName="ParticipacaoNoHistoricoDoMembro"
        >
          <ParticipacaoNoHistoricoDoMembro
            eventoId="E02"
            titulo="Encontro na sede"
            dataTexto="01 nov 2026"
            local="Campo Grande"
            presenca="faltou"
          />
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Eventos e justificativas do membro">
        <ShowcaseItem title="Card de evento do membro" exportName="CardDeEventoDoMembro">
          <CardDeEventoDoMembro
            eventoId="E01"
            titulo="Rota de Bonito"
            dataTexto="22 nov • 07h00"
            local="Saída: Campo Grande"
            confirmadosTotal={32}
            membroNome="Bruno Souza"
            estadoPessoal="Confirmado"
          />
        </ShowcaseItem>

        <ShowcaseItem title="Detalhe de evento do membro" exportName="DetalheDeEventoDoMembro">
          <DetalheDeEventoDoMembro
            titulo="Rota de Bonito"
            dataTexto="22 nov 2026 • 07h00"
            local="Saída: sede • Campo Grande, MS"
            descricao="Passeio do clube até a região de Bonito. Revise sua moto e chegue com antecedência."
            confirmadosTotal={32}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Painel de participação do membro" exportName="PainelDeParticipacaoDoMembro">
          <div className="space-y-3">
            <PainelDeParticipacaoDoMembro
              confirmado={rsvpConfirmed}
              onToggleConfirmacao={() => setRsvpConfirmed((v) => !v)}
            />
            <PainelDeParticipacaoDoMembro
              confirmado={false}
              encerrado
              onJustificarFalta={() => setJustificationModalOpen(true)}
            />
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Seletor de período dos eventos" exportName="SeletorDePeriodoDosEventos">
          <SeletorDePeriodoDosEventos
            rotulo="Próximos 3 meses"
            onOpen={() => setFeedback('Abrir seletor de período dos eventos.')}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Modal de justificativa do membro" exportName="ModalDeJustificativaDoMembro">
          <Button variant="secondary" onClick={() => setJustificationModalOpen(true)}>
            Abrir modal de justificativa
          </Button>
          <ModalDeJustificativaDoMembro
            open={justificationModalOpen}
            initialText="Tive um imprevisto familiar e não consegui participar do evento."
            onCancel={() => setJustificationModalOpen(false)}
            onConfirm={(desc) => {
              setJustificationModalOpen(false);
              setFeedback(`Justificativa enviada: ${desc}`);
            }}
          />
        </ShowcaseItem>

        <ShowcaseItem
          title="Decisão da justificativa do membro"
          exportName="DecisaoDaJustificativaDoMembro"
        >
          <div className="space-y-2.5">
            <DecisaoDaJustificativaDoMembro
              estado="pendente"
              descricao="Tive um imprevisto familiar e não consegui participar do evento."
            />
            <DecisaoDaJustificativaDoMembro
              estado="aceita"
              descricao="Tive um imprevisto familiar e não consegui participar do evento."
            />
            <DecisaoDaJustificativaDoMembro
              estado="nao_aceita"
              descricao="Tive um imprevisto familiar e não consegui participar do evento."
            />
          </div>
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Disciplina e comunicados do membro">
        <ShowcaseItem
          title="Linha de registro disciplinar do membro"
          exportName="LinhaDeRegistroDisciplinarDoMembro"
        >
          <LinhaDeRegistroDisciplinarDoMembro
            id="dis-2026-10-18"
            categoria="Conduta em deslocamento"
            dataTexto="18 out 2026"
            eventoTitulo="Rota de Aquidauana"
            status="em_analise"
          />
        </ShowcaseItem>

        <ShowcaseItem title="Resumo disciplinar do membro" exportName="ResumoDisciplinarDoMembro">
          <ResumoDisciplinarDoMembro
            categoria="Conduta em deslocamento"
            dataTexto="18 out 2026"
            eventoTitulo="Rota de Aquidauana"
            status="em_analise"
          />
        </ShowcaseItem>

        <ShowcaseItem
          title="Aviso de visibilidade disciplinar"
          exportName="AvisoDeVisibilidadeDisciplinar"
        >
          <AvisoDeVisibilidadeDisciplinar />
        </ShowcaseItem>

        <ShowcaseItem title="Card de comunicado do membro" exportName="CardDeComunicadoDoMembro">
          <CardDeComunicadoDoMembro
            id="N01"
            titulo="Orientações para a Rota de Bonito"
            resumo="Saída às 7h. Confira os preparativos."
            autorNome="Ricardo Almeida"
            dataTexto="05 nov 2026"
            publicoRotulo="Todos os membros"
            fixado
          />
        </ShowcaseItem>

        <ShowcaseItem title="Comunicado em modo leitura" exportName="ComunicadoEmModoLeitura">
          <ComunicadoEmModoLeitura
            titulo="Orientações para a Rota de Bonito"
            autorNome="Ricardo Almeida"
            dataTexto="05 nov 2026"
            publicoRotulo="Todos os membros"
            fixado
            conteudo={
              'Nosso passeio será em 22 de novembro, com saída às 7h da sede em Campo Grande.\n\nRevise sua moto e chegue com antecedência.'
            }
          />
        </ShowcaseItem>
      </ShowcaseSection>

      <ShowcaseSection title="Superadmin desktop">
        <ShowcaseItem title="Layout desktop do Superadmin" exportName="AdminDesktopLayout">
          <AdminDesktopLayout active={adminNav} onNavigate={setAdminNav} compact>
            <p className="text-xs text-[#5c6270] dark:text-[#bfc2cb]">
              Seção selecionada: <strong>{adminNav}</strong>
            </p>
          </AdminDesktopLayout>
        </ShowcaseItem>

        <ShowcaseItem
          title="Cabeçalho de seção e Badge"
          exportName="AdminSectionHeader / AdminStatusBadge"
        >
          <AdminSectionHeader
            title="Motoclubes"
            subtitle="Cadastros e assinaturas em um só lugar"
            action={
              <div className="flex gap-1.5">
                <AdminStatusBadge label="Ativa" tone="positive" />
                <AdminStatusBadge label="Em atraso" tone="danger" />
                <AdminStatusBadge label="Pendente" tone="warning" />
              </div>
            }
          />
        </ShowcaseItem>

        <div className="lg:col-span-2 space-y-5">
          <ShowcaseItem title="Indicadores SaaS de motoclubes" exportName="AdminClubMetrics">
            <AdminClubMetrics
              totalMotoclubes={6}
              recebidoCentavos={59600}
              abertoCentavos={39800}
              competencia={adminCompetencia}
              onCompetenciaChange={setAdminCompetencia}
            />
          </ShowcaseItem>

          <ShowcaseItem
            title="Filtros e Tabela de motoclubes"
            exportName="AdminClubFilters / AdminClubTable"
          >
            <div className="space-y-3">
              <AdminClubFilters
                query={adminClubQuery}
                onQueryChange={setAdminClubQuery}
                planFilter={adminPlanFilter}
                onPlanFilterChange={setAdminPlanFilter}
                subscriptionFilter={adminSubFilter}
                onSubscriptionFilterChange={setAdminSubFilter}
                accessFilter={adminAccessFilter}
                onAccessFilterChange={setAdminAccessFilter}
              />
              <AdminClubTable
                clubs={filteredClubs}
                onOpenClub={(c) => setFeedback(`Clube selecionado: ${c.nome}`)}
              />
            </div>
          </ShowcaseItem>
        </div>

        <ShowcaseItem title="Painel de motoclube" exportName="AdminClubDrawer">
          <AdminClubDrawer
            club={SAMPLE_CLUB_DETAIL}
            inlinePreview
            onOpenInvoice={(id) => setFeedback(`Abrir fatura #${id}`)}
            onEditClub={(c) => setFeedback(`Editar ${c.nome}`)}
            onToggleAccess={(c) => setFeedback(`Alterar acesso de ${c.nome}`)}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Formulário de motoclube" exportName="AdminClubForm">
          <AdminClubForm
            isCreate
            inlinePreview
            onSubmit={(vals) => setFeedback(`Motoclube salvo: ${vals.nome}`)}
          />
        </ShowcaseItem>

        <ShowcaseItem
          title="Confirmação de acesso do motoclube"
          exportName="AdminClubAccessDialog"
        >
          <AdminClubAccessDialog
            clubName="Rota Livre MC"
            inlinePreview
            onConfirm={(reason) => setFeedback(`Acesso suspenso: ${reason}`)}
          />
        </ShowcaseItem>

        <ShowcaseItem title="Formulário versionado de plano" exportName="AdminPlanVersionForm">
          <AdminPlanVersionForm
            inlinePreview
            onSubmit={(vals) => setFeedback(`Plano atualizado: ${vals.nome}`)}
          />
        </ShowcaseItem>

        <div className="lg:col-span-2 space-y-5">
          <ShowcaseItem title="Tabela de planos SaaS" exportName="AdminPlansTable">
            <AdminPlansTable
              plans={SAMPLE_PLANS}
              onEditPlan={(p) => setFeedback(`Editar plano: ${p.nome}`)}
            />
          </ShowcaseItem>

          <ShowcaseItem
            title="Filtros e Tabela de cobranças SaaS"
            exportName="AdminInvoiceFilters / AdminInvoicesTable"
          >
            <div className="space-y-3">
              <AdminInvoiceFilters
                query={adminInvoiceQuery}
                onQueryChange={setAdminInvoiceQuery}
                period={adminInvoicePeriod}
                onPeriodChange={setAdminInvoicePeriod}
                status={adminInvoiceStatus}
                onStatusChange={setAdminInvoiceStatus}
              />
              <AdminInvoicesTable
                invoices={filteredInvoices}
                onOpenInvoice={(inv) => setFeedback(`Abrir cobrança #${inv.id}`)}
              />
            </div>
          </ShowcaseItem>
        </div>

        <ShowcaseItem title="Painel de cobrança somente leitura" exportName="AdminInvoiceDrawer">
          <AdminInvoiceDrawer invoice={SAMPLE_INVOICE_DETAIL} inlinePreview />
        </ShowcaseItem>
      </ShowcaseSection>
    </div>
  );
}
