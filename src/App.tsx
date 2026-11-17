import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout';
import {
  AdminCobrancaPainel,
  AdminMotoclubeForm,
  AdminMotoclubePainel,
  AdminMotoclubes,
  AdminPagamentos,
  AdminPlanoForm,
  AdminPlanos,
  AdminSuspenderAcesso,
  CadastrarMembro,
  ComunicadoAbertoMembro,
  Comunicados,
  ComunicadosDoMembro,
  ConfirmarMudancaDeNivel,
  CriarEvento,
  Dashboard,
  DetalheDisciplinar,
  DetalheDoComunicado,
  DetalheDoEvento,
  DetalheMeuRegistroDisciplinar,
  Disciplina,
  EditarEvento,
  EditarMembro,
  EditarMeusDados,
  EnviarJustificativa,
  EventoConfirmarParticipacao,
  EventoEncerradoFalta,
  EventoParticipacaoConfirmada,
  Eventos,
  EventosDoMembro,
  EventosEFrequenciaDoMembro,
  Financeiro,
  FormNivel,
  Hierarquia,
  IdentidadeDoMotoclube,
  InicioDoMembro,
  JustificativaAprovada,
  JustificativaEmAnalise,
  JustificativaNaoAceita,
  Membros,
  MeuPerfil,
  MinhaAssinatura,
  MinhaDisciplina,
  MinhaFrequencia,
  MinhaSituacaoFinanceira,
  NivelEHistorico,
  NovoComunicado,
  ParticipantesEPresenca,
  PerfilDoMembro,
  RegistrarOcorrencia,
  RegistrarPresenca,
  RegistrarRecebimento,
  Relatorios,
  Styleguide,
} from './pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      retry: 1,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Gestão do motoclube */}
            <Route path="/membros" element={<Membros />} />
            <Route path="/membros/novo" element={<CadastrarMembro />} />
            <Route path="/membros/:id" element={<PerfilDoMembro />} />
            <Route path="/membros/:id/editar" element={<EditarMembro />} />
            <Route path="/membros/:id/nivel" element={<NivelEHistorico />} />
            <Route path="/membros/:id/nivel/confirmar" element={<ConfirmarMudancaDeNivel />} />
            <Route path="/membros/:id/frequencia" element={<EventosEFrequenciaDoMembro />} />

            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/financeiro/recebimento" element={<RegistrarRecebimento />} />

            <Route path="/eventos" element={<Eventos />} />
            <Route path="/eventos/novo" element={<CriarEvento />} />
            <Route path="/eventos/:id" element={<DetalheDoEvento />} />
            <Route path="/eventos/:id/editar" element={<EditarEvento />} />
            <Route path="/eventos/:id/participantes" element={<ParticipantesEPresenca />} />
            <Route path="/eventos/:id/presenca" element={<RegistrarPresenca />} />

            <Route path="/hierarquia" element={<Hierarquia />} />
            <Route path="/hierarquia/nivel" element={<FormNivel />} />

            <Route path="/disciplina" element={<Disciplina />} />
            <Route path="/disciplina/nova" element={<RegistrarOcorrencia />} />
            <Route path="/disciplina/:id" element={<DetalheDisciplinar />} />

            <Route path="/comunicados" element={<Comunicados />} />
            <Route path="/comunicados/novo" element={<NovoComunicado />} />
            <Route path="/comunicados/:id" element={<DetalheDoComunicado />} />

            <Route path="/identidade" element={<IdentidadeDoMotoclube />} />
            <Route path="/assinatura" element={<MinhaAssinatura />} />
            <Route path="/relatorios" element={<Relatorios />} />

            {/* Área do membro */}
            <Route path="/membro" element={<InicioDoMembro />} />
            <Route path="/membro/perfil" element={<MeuPerfil />} />
            <Route path="/membro/perfil/editar" element={<EditarMeusDados />} />
            <Route path="/membro/financeiro" element={<MinhaSituacaoFinanceira />} />
            <Route path="/membro/frequencia" element={<MinhaFrequencia />} />
            <Route path="/membro/eventos" element={<EventosDoMembro />} />
            <Route path="/membro/eventos/:id" element={<EventoConfirmarParticipacao />} />
            <Route path="/membro/eventos/:id/confirmado" element={<EventoParticipacaoConfirmada />} />
            <Route path="/membro/eventos/:id/falta" element={<EventoEncerradoFalta />} />
            <Route path="/membro/eventos/:id/justificar" element={<EnviarJustificativa />} />
            <Route path="/membro/justificativa/analise" element={<JustificativaEmAnalise />} />
            <Route path="/membro/justificativa/aprovada" element={<JustificativaAprovada />} />
            <Route path="/membro/justificativa/nao-aceita" element={<JustificativaNaoAceita />} />
            <Route path="/membro/disciplina" element={<MinhaDisciplina />} />
            <Route path="/membro/disciplina/:id" element={<DetalheMeuRegistroDisciplinar />} />
            <Route path="/membro/comunicados" element={<ComunicadosDoMembro />} />
            <Route path="/membro/comunicados/:id" element={<ComunicadoAbertoMembro />} />

            {/* Superadmin */}
            <Route path="/admin/motoclubes" element={<AdminMotoclubes />} />
            <Route path="/admin/motoclubes/cadastro" element={<AdminMotoclubeForm />} />
            <Route path="/admin/motoclubes/:id" element={<AdminMotoclubePainel />} />
            <Route path="/admin/motoclubes/:id/acesso" element={<AdminSuspenderAcesso />} />
            <Route path="/admin/planos" element={<AdminPlanos />} />
            <Route path="/admin/planos/cadastro" element={<AdminPlanoForm />} />
            <Route path="/admin/pagamentos" element={<AdminPagamentos />} />
            <Route path="/admin/pagamentos/:id" element={<AdminCobrancaPainel />} />

            {/* Styleguide */}
            <Route path="/styleguide" element={<Styleguide />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
