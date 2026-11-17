# 05 · Financeiro

O HTML abaixo é a referência de layout. Implemente na rota existente. Antes de escrever código, localize no projeto os exports do manifesto COMPONENTES DESTA TELA. Use as variantes e propriedades dos componentes já instalados em vez de duplicar marcação ou CSS. Se o nome ou caminho sugerido divergir do projeto, encontre o export equivalente no índice de componentes criado antes das telas. Se houver uma lacuna real, identifique a variante compartilhada necessária e atualize o índice do UI Kit junto com o componente. Ligue os dados e ações aos hooks do contrato desta tela. Valide navegação, estados e permissões.

## HTML e CSS

````html
<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Financeiro</title><style>
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
</style></head><body><div class="history-app"><header class="club"><span class="crest"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 1 10 6v11l-10 5-10-5V7z"/><path d="m3 17 9-10 9 10m-9-8v3m0 3v2m0 2v2"/></svg></span><div><strong>ROTA LIVRE MC</strong><small>Campo Grande • MS</small></div><span class="photo staff"><span aria-hidden="true">RA</span><img data-photo="ricardo" alt=""></span></header><main class="member-page"><div class="money-heading"><h1>Financeiro</h1><p>Mensalidades sob controle.</p></div><div class="finance-month"><button id="month-prev" type="button" aria-label="Mês anterior"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 5-7 7 7 7M5 12h15"/></svg></button>
<strong id="month-label" aria-live="polite">Novembro 2026</strong><button id="month-next" type="button" aria-label="Próximo mês"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button></div><section class="section-card finance-summary"><div><p>Previsto no mês</p><h2 id="money-total">R$ 6.880,00</h2></div>
<dl><div><dt><span class="good">●</span> Recebido</dt><dd id="money-paid">R$ 5.920,00</dd></div>
<div><dt><span class="late">●</span> Pendente</dt><dd id="money-open">R$ 960,00</dd></div></dl>
<footer id="money-counts">74 em dia • 12 pendentes</footer></section><div class="event-tabs finance-filters" role="group" aria-label="Situação das mensalidades"><button type="button" class="filter" data-filter="all" aria-pressed="true">Todos</button><button type="button" class="filter" data-filter="paid" aria-pressed="false">Em dia</button><button type="button" class="filter" data-filter="soon" aria-pressed="false">A vencer</button><button type="button" class="filter" data-filter="late" aria-pressed="false">Em atraso</button></div><div class="finance-title"><h2 id="finance-list-title">Mensalidades em atraso</h2><strong id="finance-list-count">12</strong></div><div class="participant-list"><a class="member finance-row" data-bill="bruno" href="registrar-recebimento.html?membro=bruno"><span class="photo member-photo"><span aria-hidden="true">BS</span><img data-photo="bruno" alt=""></span><span><strong>Bruno Souza</strong><small>“Búfalo”</small><small data-due-date></small></span><span class="dues-amount"><strong data-row-amount></strong><span data-row-state></span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a><a class="member finance-row" data-bill="marcos" href="registrar-recebimento.html?membro=marcos"><span class="photo member-photo"><span aria-hidden="true">ML</span><img data-photo="marcos" alt=""></span><span><strong>Marcos Lima</strong><small>“Tucano”</small><small data-due-date></small></span><span class="dues-amount"><strong data-row-amount></strong><span data-row-state></span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a><a class="member finance-row" data-bill="diego" href="registrar-recebimento.html?membro=diego"><span class="photo member-photo"><span aria-hidden="true">DA</span><img data-photo="diego" alt=""></span><span><strong>Diego Alves</strong><small>“Lobo”</small><small data-due-date></small></span><span class="dues-amount"><strong data-row-amount></strong><span data-row-state></span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a><a class="member finance-row" data-bill="rafael" href="registrar-recebimento.html?membro=rafael"><span class="photo member-photo"><span aria-hidden="true">RO</span><img data-photo="rafael" alt=""></span><span><strong>Rafael Oliveira</strong><small>“Falcão”</small><small data-due-date></small></span><span class="dues-amount"><strong data-row-amount></strong><span data-row-state></span></span><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></a></div><p id="finance-empty" class="event-helper" hidden>Nenhuma mensalidade da amostra neste filtro.</p><a class="primary" id="register-link" href="registrar-recebimento.html">＋ Registrar recebimento</a><aside class="section-card finance-note"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="12" rx="6" ry="3"/><path d="M3 12v6c0 4 12 4 12 0v-6M3 15c0 4 12 4 12 0m-3-6V5c0-4 10-4 10 0v10c0 2-3 3-5 3m-5-13c0 4 10 4 10 0m-5 5c3 0 5-1 5-3"/></svg><div><h2>Controle de recebimentos</h2><p>Pagamentos feitos diretamente ao clube. Registre Pix, dinheiro ou transferência.</p></div></aside></main><nav class="app-nav" aria-label="Menu da gestão"><button type="button" data-action="nav" data-label="Painel"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7v11h-6v-7H9v7H3z"/></svg>Painel</button><button type="button" data-action="nav" data-label="Membros"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="3"/><path d="M2 21v-3a7 7 0 0 1 14 0v3zM17 4a3 3 0 0 1 0 6m2 4a6 6 0 0 1 3 5v2h-3"/></svg>Membros</button><button type="button" data-action="nav" data-label="Financeiro" aria-current="page"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="9" cy="12" rx="6" ry="3"/><path d="M3 12v6c0 4 12 4 12 0v-6M3 15c0 4 12 4 12 0m-3-6V5c0-4 10-4 10 0v10c0 2-3 3-5 3m-5-13c0 4 10 4 10 0m-5 5c3 0 5-1 5-3"/></svg>Financeiro</button><button type="button" data-action="nav" data-label="Eventos"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></svg>Eventos</button><button type="button" data-action="nav" data-label="Mais"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>Mais</button></nav><dialog id="pilot-dialog"><form method="dialog"><h2></h2><p>Ação demonstrada no guia de produção.</p><button class="secondary">Fechar</button></form></dialog></div><script>
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

(() => {

const months = {
  '2026-10':{label:'Outubro 2026',total:688000,paid:688000,settled:86,open:0},
  '2026-11':{label:'Novembro 2026',total:688000,paid:592000,settled:74,open:12},
  '2026-12':{label:'Dezembro 2026',total:688000,paid:0,settled:0,open:86}
};
const members = {
  bruno:{name:'Bruno Souza',nickname:'Búfalo'},
  marcos:{name:'Marcos Lima',nickname:'Tucano'},
  diego:{name:'Diego Alves',nickname:'Lobo'},
  rafael:{name:'Rafael Oliveira',nickname:'Falcão'}
};
const bills = {
  '2026-10':{rafael:{amount:8000,paid:8000}},
  '2026-11':{bruno:{amount:8000,paid:0},marcos:{amount:8000,paid:0},diego:{amount:8000,paid:0},rafael:{amount:8000,paid:8000}},
  '2026-12':{bruno:{amount:8000,paid:0},marcos:{amount:8000,paid:0},diego:{amount:8000,paid:0},rafael:{amount:8000,paid:0}}
};
const money = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'});
const storageKey = 'motoclubes.receipts.demo.v1';
let receipts = {};
try { receipts=JSON.parse(sessionStorage.getItem(storageKey)) ?? {}; } catch {}
const extraPaid = (month,id) => receipts[month+':'+id] ?? 0;
const balance = (month,id) => {
  const item = bills[month]?.[id];
  return item ? Math.max(0,item.amount-item.paid-extraPaid(month,id)) : 0;
};
const isFuture = month => month > '2026-11';

const query=new URLSearchParams(location.search), monthKeys=Object.keys(months);
let cursor=monthKeys.includes(query.get('mes')) ? monthKeys.indexOf(query.get('mes')) : 1;
let filter=['all','paid','soon','late'].includes(query.get('filtro')) ? query.get('filtro') : 'late';
const labels={all:'Mensalidades',paid:'Mensalidades em dia',soon:'Mensalidades a vencer',late:'Mensalidades em atraso'};
const buttons=[...document.querySelectorAll('[data-filter]')];
const billRows=[...document.querySelectorAll('[data-bill]')];
const prev=document.querySelector('#month-prev'), next=document.querySelector('#month-next');
function drawFinance(){
 const month=monthKeys[cursor], totals=months[month];
 const entries=Object.entries(bills[month]);
 const paid=totals.paid+entries.reduce((sum,[id])=>sum+extraPaid(month,id),0);
 const settled=totals.settled+entries.filter(([id,item])=>item.paid<item.amount && balance(month,id)===0).length;
 const pending=totals.open-(settled-totals.settled);
 document.querySelector('#month-label').textContent=totals.label;
 document.querySelector('#money-total').textContent=money.format(totals.total/100);
 document.querySelector('#money-paid').textContent=money.format(paid/100);
 document.querySelector('#money-open').textContent=money.format((totals.total-paid)/100);
 document.querySelector('#money-counts').textContent=settled+' em dia • '+pending+' pendentes';
 document.querySelector('#finance-list-title').textContent=labels[filter];
 document.querySelector('#finance-list-count').textContent={all:settled+pending,paid:settled,soon:isFuture(month)?pending:0,late:isFuture(month)?0:pending}[filter];
 document.querySelector('#register-link').href='registrar-recebimento.html?mes='+month;
 prev.disabled=cursor===0;next.disabled=cursor===monthKeys.length-1;
 buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===filter)));
 for(const row of billRows){
  const id=row.dataset.bill, item=bills[month][id], due=balance(month,id);
  const state=!due?'paid':isFuture(month)?'soon':'late';
  row.hidden=!item||(filter!=='all'&&filter!==state);
  if(!item)continue;
  row.querySelector('[data-row-amount]').textContent=money.format((due||item.amount)/100);
  const badge=row.querySelector('[data-row-state]');
  badge.className=state==='paid'?'good':'late';
  badge.textContent={paid:'✓ Em dia',soon:'◷ A vencer',late:'◷ Em atraso'}[state];
  row.querySelector('[data-due-date]').textContent=(state==='late'?'Venceu em ':'Vencimento em ')+'05 '+totals.label.slice(0,3).toLowerCase();
  if(due){row.href='registrar-recebimento.html?mes='+month+'&membro='+id;row.removeAttribute('aria-disabled');}
  else{row.removeAttribute('href');row.setAttribute('aria-disabled','true');}
 }
 document.querySelector('#finance-empty').hidden=billRows.some(row=>!row.hidden);
}
prev.onclick=()=>{cursor--;drawFinance()};
next.onclick=()=>{cursor++;drawFinance()};
buttons.forEach(button=>button.onclick=()=>{filter=button.dataset.filter;drawFinance()});
drawFinance();

})();</script></body></html>
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
  }
]
```

## Regras de negócio

- Registrar recebimento → formulário pendente
- Definir geração das mensalidades → configuração pendente

## Contrato da tela

Consultar mensalidades por competência. Os indicadores vêm da competência completa. A lista usa filtro de situação e a prévia mostra uma amostra de membros.

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
    "financeiro_interno"
  ],
  "scope": "Gestor autenticado, exclusivamente seu motoclube; todas as mutações verificadas no servidor.",
  "inputs": [
    "Mês e filtros (consulta)"
  ],
  "outputs": [
    "Previsto ← mensalidades.valor",
    "Recebido ← recebimentos.valor",
    "Pendente ← saldo das mensalidades"
  ],
  "actions": [
    "Registrar recebimento → formulário pendente",
    "Definir geração das mensalidades → configuração pendente"
  ],
  "filter_policy": "Consulta paginada e filtrada no servidor; preservar filtros ao voltar. Contagens sobre conjunto completo. Datas no fuso America/Campo_Grande; timestamps armazenados em UTC.",
  "links": [
    {
      "from": "05",
      "to": "25",
      "label": "registrar",
      "type": "nav"
    },
    {
      "from": "25",
      "to": "05",
      "label": "saldo atualizado",
      "type": "dados"
    }
  ],
  "reusable_components": [
    "CabecalhoDoClube",
    "MenuMovelDaGestao",
    "ResumoDaCompetencia",
    "LinhaDeMensalidade"
  ]
}
```
