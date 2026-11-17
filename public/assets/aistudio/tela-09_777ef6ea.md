# 09 · Eventos e frequência

O HTML abaixo é a referência de layout. Implemente na rota existente. Antes de escrever código, localize no projeto os exports do manifesto COMPONENTES DESTA TELA. Use as variantes e propriedades dos componentes já instalados em vez de duplicar marcação ou CSS. Se o nome ou caminho sugerido divergir do projeto, encontre o export equivalente no índice de componentes criado antes das telas. Se houver uma lacuna real, identifique a variante compartilhada necessária e atualize o índice do UI Kit junto com o componente. Ligue os dados e ações aos hooks do contrato desta tela. Valide navegação, estados e permissões.

## HTML e CSS

````html
<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Eventos e frequência</title><style>
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
</style></head><body><div class="history-app"><header class="club"><span class="crest"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 1 10 6v11l-10 5-10-5V7z"/><path d="m3 17 9-10 9 10m-9-8v3m0 3v2m0 2v2"/></svg></span><div><strong>ROTA LIVRE MC</strong><small>Campo Grande • MS</small></div><span class="photo staff"><span aria-hidden="true">RA</span><img data-photo="ricardo" alt=""></span></header><main class="member-page"><div class="page-title"><a class="back-link" href="perfil-membro.html" aria-label="Voltar"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 5-7 7 7 7M5 12h15"/></svg></a><h1>Eventos e frequência</h1></div><div class="identity section-card frequency-member"><span class="photo member-photo"><span aria-hidden="true">RO</span><img data-photo="rafael" alt=""></span><div class="identity-copy"><div class="identity-name"><strong>Rafael Oliveira</strong><span class="badge" data-current-level>Meio-escudo</span></div><small>“Falcão”</small><small class="joined"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg> No clube desde nov/2025</small><small class="frequency-percent"><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="14" width="4" height="7" rx="1"/><rect x="10" y="9" width="4" height="12" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg></span> Frequência <b id="identity-rate">88%</b></small></div></div><div class="select-wrap attendance-period"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg><select class="period-select" id="attendance-period" aria-label="Período">
    <option value="quarter">Últimos 3 meses</option><option value="month">Últimos 30 dias</option><option value="custom">Intervalo personalizado</option></select></div>
    <form class="member-form" id="attendance-range" hidden>
    <div class="form-field"><label for="attendance-start">Início</label><input id="attendance-start" type="date" value="2026-08-07" required></div><div class="form-field"><label for="attendance-end">Fim</label><input id="attendance-end" type="date" value="2026-11-07" required></div>
    <button class="secondary">Aplicar período</button><output role="status" id="attendance-error"></output></form><dl class="profile-stats frequency-stats" aria-label="Resumo do período"><div><dt>Eventos previstos</dt><dd id="event-count">8</dd></div><div><dt>Presenças</dt><dd id="present-count">7</dd></div><div><dt>Frequência</dt><dd id="attendance-rate">88%</dd></div></dl><div class="attendance-tabs" role="group" aria-label="Filtrar por presença"><button class="filter" type="button" data-filter-attendance="all" aria-pressed="true">Todos</button><button class="filter" type="button" data-filter-attendance="present" aria-pressed="false">Presentes</button><button class="filter" type="button" data-filter-attendance="absent" aria-pressed="false">Faltas</button></div><div class="attendance-list" id="attendance-list"><button class="member attendance-card" type="button" data-action="nav" data-label="Encontro na sede" data-date="2026-11-01" data-attendance="present"><span class="photo member-photo"><span aria-hidden="true">MC</span><img data-photo="sede" alt=""></span><span class="event-copy"><strong>Encontro na sede</strong><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> 01 nov 2026 • Campo Grande</small><span class="status"><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span> Presente</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button><button class="member attendance-card" type="button" data-action="nav" data-label="Rota de Aquidauana" data-date="2026-10-18" data-attendance="present"><span class="photo member-photo"><span aria-hidden="true">MC</span><img data-photo="rota" alt=""></span><span class="event-copy"><strong>Rota de Aquidauana</strong><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> 18 out 2026 • Aquidauana</small><span class="status"><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span> Presente</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button><button class="member attendance-card" type="button" data-action="nav" data-label="Reunião de setembro" data-date="2026-09-05" data-attendance="absent"><span class="photo member-photo"><span aria-hidden="true">MC</span><img data-photo="sede" alt=""></span><span class="event-copy"><strong>Reunião de setembro</strong><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> 05 set 2026 • Campo Grande</small><span class="status"><span class="late"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg></span> Faltou</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button><button class="member attendance-card" type="button" data-action="nav" data-label="Encontro de agosto" data-date="2026-08-30" data-attendance="present"><span class="photo member-photo"><span aria-hidden="true">MC</span><img data-photo="sede" alt=""></span><span class="event-copy"><strong>Encontro de agosto</strong><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> 30 ago 2026 • Campo Grande</small><span class="status"><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span> Presente</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button><button class="member attendance-card" type="button" data-action="nav" data-label="Passeio do clube" data-date="2026-08-23" data-attendance="present"><span class="photo member-photo"><span aria-hidden="true">MC</span><img data-photo="rota" alt=""></span><span class="event-copy"><strong>Passeio do clube</strong><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> 23 ago 2026 • Campo Grande</small><span class="status"><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span> Presente</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button><button class="member attendance-card" type="button" data-action="nav" data-label="Reunião de agosto" data-date="2026-08-16" data-attendance="present"><span class="photo member-photo"><span aria-hidden="true">MC</span><img data-photo="sede" alt=""></span><span class="event-copy"><strong>Reunião de agosto</strong><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> 16 ago 2026 • Campo Grande</small><span class="status"><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span> Presente</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button><button class="member attendance-card" type="button" data-action="nav" data-label="Encontro de integração" data-date="2026-08-09" data-attendance="present"><span class="photo member-photo"><span aria-hidden="true">MC</span><img data-photo="sede" alt=""></span><span class="event-copy"><strong>Encontro de integração</strong><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> 09 ago 2026 • Campo Grande</small><span class="status"><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span> Presente</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button><button class="member attendance-card" type="button" data-action="nav" data-label="Rota de inverno" data-date="2026-08-08" data-attendance="present"><span class="photo member-photo"><span aria-hidden="true">MC</span><img data-photo="rota" alt=""></span><span class="event-copy"><strong>Rota de inverno</strong><small><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg> 08 ago 2026 • Campo Grande</small><span class="status"><span class="good"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/></svg></span> Presente</span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button></div><p id="attendance-empty" hidden>Nenhum evento neste recorte.</p><section class="attendance-journey"><h2>Trajetória de participação</h2><p>As presenças vêm das chamadas dos eventos.</p></section><button class="secondary wide-action" id="attendance-more" type="button" aria-controls="attendance-list" aria-expanded="false"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5h13M8 12h13M8 19h13M3 5h.01M3 12h.01M3 19h.01"/></svg><span>Ver todos os 8 eventos</span></button></main><nav class="app-nav" aria-label="Menu da gestão"><button type="button" data-action="nav" data-label="Painel"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v11h-6v-7H9v7H3z"/></svg>Painel</button><button type="button" data-action="nav" data-label="Membros" aria-current="page"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg>Membros</button><button type="button" data-action="nav" data-label="Financeiro"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="12" rx="6" ry="3"/><path d="M3 12v6c0 4 12 4 12 0v-6M3 15c0 4 12 4 12 0m-3-6V5c0-4 10-4 10 0v10c0 2-3 3-5 3m-5-13c0 4 10 4 10 0m-5 5c3 0 5-1 5-3"/></svg>Financeiro</button><button type="button" data-action="nav" data-label="Eventos"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg>Eventos</button><button type="button" data-action="nav" data-label="Mais"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>Mais</button></nav><dialog id="pilot-dialog"><form method="dialog"><h2></h2><p>Ação demonstrada no guia de produção.</p><button class="secondary">Fechar</button></form></dialog></div><script>
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

const cards = [...document.querySelectorAll('[data-attendance]')];
const dateSelect = document.querySelector('#attendance-period');
const tabs = [...document.querySelectorAll('[data-filter-attendance]')];
const more = document.querySelector('#attendance-more');
const custom = document.querySelector('#attendance-range');
let selected = 'all', expanded = false, range = ['2026-08-07','2026-11-07'];
function updateAttendance() {
  const eligible = cards.filter(card => card.dataset.date >= range[0] && card.dataset.date <= range[1]);
  const present = eligible.filter(card => card.dataset.attendance === 'present').length;
  const rate = eligible.length ? Math.round(present / eligible.length * 100) + '%' : '—';
  document.querySelector('#event-count').textContent = eligible.length;
  document.querySelector('#present-count').textContent = present;
  document.querySelector('#attendance-rate').textContent = rate;
  document.querySelector('#identity-rate').textContent = rate;
  const matches = eligible.filter(card => selected === 'all' || card.dataset.attendance === selected);
  cards.forEach(card => card.hidden = true);
  matches.slice(0,expanded ? matches.length : 3).forEach(card => card.hidden = false);
  document.querySelector('#attendance-empty').hidden = matches.length > 0;
  more.hidden = matches.length <= 3;
  more.querySelector('span').textContent = expanded ? 'Mostrar menos' : 'Ver todos os ' + matches.length + ' eventos';
  more.setAttribute('aria-expanded', String(expanded));
}
tabs.forEach(tab => tab.addEventListener('click', () => {
  selected = tab.dataset.filterAttendance;
  tabs.forEach(option => option.setAttribute('aria-pressed', String(option === tab)));
  expanded = false; updateAttendance();
}));
dateSelect.addEventListener('change', () => {
  custom.hidden = dateSelect.value !== 'custom';
  if (dateSelect.value === 'custom') return;
  range = dateSelect.value === 'month' ? ['2026-10-08','2026-11-07'] : ['2026-08-07','2026-11-07'];
  expanded = false; updateAttendance();
});
custom.addEventListener('submit', event => {
  event.preventDefault();
  const start = document.querySelector('#attendance-start').value, end = document.querySelector('#attendance-end').value;
  if (!start || !end || start > end) { document.querySelector('#attendance-error').textContent = 'Informe um intervalo válido.'; return; }
  document.querySelector('#attendance-error').textContent = '';
  range = [start,end]; expanded = false; updateAttendance();
});
more.addEventListener('click', () => { expanded = !expanded; updateAttendance(); });
cards.forEach(card => {
 const events = {'2026-11-01':'sede','2026-10-18':'aquidauana'};
 if (!events[card.dataset.date]) return;
 card.addEventListener('click', event => {
  event.stopPropagation();
  location.href = 'detalhe-evento.html?evento=' + events[card.dataset.date];
 });
});
updateAttendance();
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
    "nome": "Linha de presença",
    "export": "LinhaDePresenca",
    "arquivo_sugerido": "src/components/ui/LinhaDePresenca.tsx",
    "uso": "AttendanceRow recebe imagem, nome, data, local e presença. O clique abre o evento."
  }
]
```

## Regras de negócio

- Gestor consulta qualquer membro do próprio clube

## Contrato da tela

Buscar participações autorizadas. Período recalcula os indicadores. O filtro por presença atua só na lista. Abrir detalhe 07 ao escolher um evento. Os oito eventos são fictícios.

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
      "entity": "justificativas",
      "fields": [
        "id",
        "participacao_id",
        "descricao",
        "enviada_em",
        "status",
        "analisada_por",
        "analisada_em",
        "observacao_decisao",
        "origem",
        "criada_por"
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
    "frequencia"
  ],
  "scope": "Gestor autenticado, exclusivamente seu motoclube; todas as mutações verificadas no servidor.",
  "inputs": [
    "Período padrão: últimos 3 meses; intervalo personalizado",
    "Filtros por presença e paginação; indicadores calculados sobre o período inteiro"
  ],
  "outputs": [
    "Eventos esperados e presença ← MESMAS participacoes do evento",
    "Taxa ← presentes / esperados elegíveis, arredondada"
  ],
  "actions": [
    "Abrir detalhe do evento 07",
    "Gestor consulta qualquer membro do próprio clube"
  ],
  "filter_policy": "Consulta paginada e filtrada no servidor; preservar filtros ao voltar. Contagens sobre conjunto completo. Datas no fuso America/Campo_Grande; timestamps armazenados em UTC.",
  "links": [
    {
      "from": "03",
      "to": "09",
      "label": "eventos e frequência",
      "type": "nav"
    },
    {
      "from": "08M",
      "to": "09",
      "label": "mesma participação",
      "type": "dados"
    },
    {
      "from": "09",
      "to": "07",
      "label": "abrir evento",
      "type": "nav"
    }
  ],
  "reusable_components": [
    "CabecalhoDoClube",
    "MenuMovelDaGestao",
    "CabecalhoDeDetalhe",
    "IdentidadeDoMembro",
    "SeletorDePeriodo",
    "ResumoDeIndicadores",
    "LinhaDePresenca"
  ]
}
```
