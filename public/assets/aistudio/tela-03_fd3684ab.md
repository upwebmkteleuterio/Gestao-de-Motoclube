# 03 · Perfil do membro

O HTML abaixo é a referência de layout. Implemente na rota existente. Antes de escrever código, localize no projeto os exports do manifesto COMPONENTES DESTA TELA. Use as variantes e propriedades dos componentes já instalados em vez de duplicar marcação ou CSS. Se o nome ou caminho sugerido divergir do projeto, encontre o export equivalente no índice de componentes criado antes das telas. Se houver uma lacuna real, identifique a variante compartilhada necessária e atualize o índice do UI Kit junto com o componente. Ligue os dados e ações aos hooks do contrato desta tela. Valide navegação, estados e permissões.

## HTML e CSS

````html
<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Perfil do membro</title><style>
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
</style></head><body><div class="history-app"><header class="club"><span class="crest"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 1 10 6v11l-10 5-10-5V7z"/><path d="m3 17 9-10 9 10m-9-8v3m0 3v2m0 2v2"/></svg></span><div><strong>ROTA LIVRE MC</strong><small>Campo Grande • MS</small></div><span class="photo staff"><span aria-hidden="true">RA</span><img data-photo="ricardo" alt=""></span></header><main class="member-page"><div class="page-title"><a class="back-link" href="membros-piloto.html" aria-label="Voltar"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 5-7 7 7 7M5 12h15"/></svg></a><h1>Perfil do membro</h1><button class="header-action" type="button" data-action="nav" data-label="Editar membro" aria-label="Editar membro"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7M9 15l1-5L19 1l4 4-9 9z"/></svg></button></div><div class="identity"><span class="photo member-photo"><span aria-hidden="true">RO</span><img data-photo="rafael" alt=""></span><div class="identity-copy"><div class="identity-name"><strong>Rafael Oliveira</strong><span class="badge" data-current-level>Meio-escudo</span></div><small>“Falcão”</small><small class="joined"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg> No clube desde nov/2025</small></div></div><dl class="profile-stats" aria-label="Resumo do perfil"><div><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="14" width="4" height="7" rx="1"/><rect x="10" y="9" width="4" height="12" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg></span><dt>Frequência</dt><dd>88%</dd></div><div><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span><dt>Mensalidade</dt><dd>Em dia</dd></div><div><span class="low"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 4v6c0 5-4 8-9 10-5-2-9-5-9-10V6z"/></svg></span><dt>Ocorrências</dt><dd>0</dd></div></dl><div class="profile-shortcuts"><a class="member profile-shortcut" href="nivel-e-historico.html"><span class=""><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 10 6-10 6-10-6zm-9 10 9 5 9-5M3 17l9 5 9-5"/></svg></span><span><strong>Nível e histórico</strong><small>Consultar histórico e alterar nível</small></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a><a class="member profile-shortcut" href="eventos-do-membro.html"><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg></span><span><strong>Eventos e frequência</strong><small>Consultar participações e presenças</small></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a><button class="member profile-shortcut" type="button" data-action="nav" data-label="Disciplina"><span class="low"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 4v6c0 5-4 8-9 10-5-2-9-5-9-10V6z"/></svg></span><span><strong>Disciplina</strong><small>Consultar registros deste membro</small></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button></div></main><nav class="app-nav" aria-label="Menu da gestão"><button type="button" data-action="nav" data-label="Painel"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v11h-6v-7H9v7H3z"/></svg>Painel</button><button type="button" data-action="nav" data-label="Membros" aria-current="page"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg>Membros</button><button type="button" data-action="nav" data-label="Financeiro"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="12" rx="6" ry="3"/><path d="M3 12v6c0 4 12 4 12 0v-6M3 15c0 4 12 4 12 0m-3-6V5c0-4 10-4 10 0v10c0 2-3 3-5 3m-5-13c0 4 10 4 10 0m-5 5c3 0 5-1 5-3"/></svg>Financeiro</button><button type="button" data-action="nav" data-label="Eventos"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg>Eventos</button><button type="button" data-action="nav" data-label="Mais"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>Mais</button></nav><dialog id="pilot-dialog"><form method="dialog"><h2></h2><p>Ação demonstrada no guia de produção.</p><button class="secondary">Fechar</button></form></dialog></div><script>
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
</script></body></html>
````

## Componentes desta tela

```json
[
  {
    "nome": "Cabeçalho do clube",
    "export": "CabecalhoDoClube",
    "arquivo_sugerido": "src/components/ui/CabecalhoDoClube.tsx",
    "uso": "ClubHeader recebe nome, local, marca e avatar do gestor."
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
  }
]
```

## Regras de negócio

- Nível e histórico → 27
- Editar membro → 18E
- Eventos e frequência → 09
- Disciplina → 11

## Contrato da tela

Compor o perfil com os dados do membro selecionado. Conectar os atalhos de edição, frequência, disciplina e nível às rotas do projeto.

```json
{
  "reads": [
    {
      "entity": "membros",
      "fields": [
        "id",
        "motoclube_id",
        "usuario_id",
        "nome",
        "apelido",
        "foto_url",
        "entrada_em",
        "nivel_id",
        "status",
        "telefone",
        "cadastrado_em"
      ]
    },
    {
      "entity": "niveis",
      "fields": [
        "id",
        "motoclube_id",
        "nome",
        "ordem"
      ]
    },
    {
      "entity": "eventos",
      "fields": [
        "id",
        "motoclube_id",
        "titulo",
        "descricao",
        "foto_url",
        "tipo",
        "inicio_em",
        "local",
        "estado",
        "publico",
        "chamada_finalizada_em"
      ]
    },
    {
      "entity": "participacoes",
      "fields": [
        "id",
        "motoclube_id",
        "evento_id",
        "membro_id",
        "esperado",
        "confirmacao",
        "confirmacao_em",
        "presenca",
        "registrado_por",
        "registrado_em"
      ]
    },
    {
      "entity": "mensalidades",
      "fields": [
        "id",
        "motoclube_id",
        "membro_id",
        "competencia",
        "valor_centavos",
        "vencimento",
        "cancelada_em"
      ]
    },
    {
      "entity": "recebimentos",
      "fields": [
        "id",
        "motoclube_id",
        "mensalidade_id",
        "valor_centavos",
        "recebido_em",
        "forma",
        "observacao",
        "gestor_id",
        "estornado_em"
      ]
    },
    {
      "entity": "ocorrencias",
      "fields": [
        "id",
        "motoclube_id",
        "membro_id",
        "evento_id",
        "data",
        "categoria",
        "descricao",
        "visivel_membro",
        "observacao_interna",
        "status",
        "decisao",
        "gestor_id"
      ]
    },
    {
      "entity": "motoclubes",
      "fields": [
        "id",
        "nome",
        "cidade",
        "uf"
      ]
    },
    {
      "entity": "identidade_motoclube",
      "fields": [
        "motoclube_id",
        "logo_url",
        "paleta_id",
        "cor_destaque_hex",
        "atualizado_em"
      ]
    },
    {
      "entity": "usuarios",
      "fields": [
        "id",
        "nome",
        "foto_url"
      ]
    }
  ],
  "writes": [],
  "calculations": [
    "frequencia",
    "financeiro_interno"
  ],
  "scope": "Gestor autenticado, exclusivamente seu motoclube; todas as mutações verificadas no servidor.",
  "inputs": [],
  "outputs": [
    "Dados pessoais e nível atual ← membros + niveis",
    "Frequência, situação da mensalidade e ocorrências ← registros de origem"
  ],
  "actions": [
    "Nível e histórico → 27",
    "Editar membro → 18E",
    "Eventos e frequência → 09",
    "Disciplina → 11"
  ],
  "filter_policy": "Consulta paginada e filtrada no servidor; preservar filtros ao voltar. Contagens sobre conjunto completo. Datas no fuso America/Campo_Grande; timestamps armazenados em UTC.",
  "links": [
    {
      "from": "02",
      "to": "03",
      "label": "abrir membro",
      "type": "nav"
    },
    {
      "from": "03",
      "to": "09",
      "label": "eventos e frequência",
      "type": "nav"
    },
    {
      "from": "24",
      "to": "03",
      "label": "resumo disciplinar",
      "type": "dados"
    },
    {
      "from": "03",
      "to": "11",
      "label": "disciplina do membro",
      "type": "nav"
    },
    {
      "from": "03",
      "to": "18E",
      "label": "Editar cadastro",
      "type": "nav"
    },
    {
      "from": "03",
      "to": "27",
      "label": "abrir nível e histórico",
      "type": "nav"
    },
    {
      "from": "27M",
      "to": "03",
      "label": "atualizar nível atual",
      "type": "dados"
    }
  ],
  "reusable_components": [
    "CabecalhoDoClube",
    "MenuMovelDaGestao",
    "CabecalhoDeDetalhe",
    "IdentidadeDoMembro",
    "AtalhoDoPerfil"
  ]
}
```
