(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();let f=null,p=[];async function B(a){try{const e=await fetch(`/brands/${a}/brand.json`);if(!e.ok)throw new Error(`Brand "${a}" not found`);return f=await e.json(),F(f.theme),f}catch(e){return console.error("Failed to load brand:",e),null}}function c(){return f}async function P(){if(p.length)return p;try{const a=await fetch("/brands/brands-index.json");a.ok?p=await a.json():p=[{id:"sample-brand",name:"LUXE",nameKo:"럭스"}]}catch{p=[{id:"sample-brand",name:"LUXE",nameKo:"럭스"}]}return p}function F(a){if(!a)return;const e=document.documentElement;e.style.setProperty("--primary",a.primaryColor),e.style.setProperty("--secondary",a.secondaryColor),e.style.setProperty("--accent",a.accentColor||a.secondaryColor),e.style.setProperty("--bg",a.backgroundColor),e.style.setProperty("--surface",a.surfaceColor),e.style.setProperty("--text",a.textColor),e.style.setProperty("--text-secondary",a.textSecondary),e.style.setProperty("--border",a.borderColor),a.fontHeading&&e.style.setProperty("--font-heading",a.fontHeading),a.fontBody&&e.style.setProperty("--font-body",a.fontBody)}const h={};let E=null;function v(a,e){h[a]=e}function b(){return window.location.hash.slice(1)||"/"}function T(a){async function e(){const t=b();if(t===E)return;E=t;const n=h[t]||h["/"];if(n){const s=document.getElementById("content");s&&(s.style.opacity="0",await new Promise(i=>setTimeout(i,120)),await n(s),s.style.opacity="1")}a&&a(t)}window.addEventListener("hashchange",e),e()}const j=[{section:"Foundation",items:[{path:"/",icon:"◎",label:"Brand Strategy"},{path:"/assets",icon:"◆",label:"Asset Library"}]},{section:"Interactive Guide",items:[{path:"/colors",icon:"●",label:"Color System"},{path:"/typography",icon:"Aa",label:"Typography"},{path:"/voice-tone",icon:"✦",label:"Voice & Tone"}]},{section:"Governance",items:[{path:"/versions",icon:"⟳",label:"Version History"}]}];function L(a){const e=c(),t=b();let n="";j.forEach(i=>{n+=`<div class="sidebar-section-label">${i.section}</div>`,i.items.forEach(o=>{const d=o.path===t?" active":"";n+=`
        <a href="#${o.path}" class="sidebar-link${d}" data-path="${o.path}">
          <span class="nav-icon">${o.icon}</span>
          <span>${o.label}</span>
        </a>`})});const s=e?.versions?.[0];a.innerHTML=`
    <div class="sidebar-brand">
      <div class="brand-name">${e?.brandName||"Brand"}</div>
      <div class="brand-subtitle">Brand Operating Site</div>
    </div>
    <nav class="sidebar-nav">
      ${n}
    </nav>
    <div class="sidebar-version">
      ${s?`<span class="version-tag">${s.version}</span> ${s.date}`:""}
    </div>
  `}function A(){const a=b();document.querySelectorAll(".sidebar-link").forEach(e=>{e.classList.toggle("active",e.dataset.path===a)})}const H={"/":"Brand Strategy","/assets":"Asset Library","/colors":"Color System","/typography":"Typography","/voice-tone":"Voice & Tone","/versions":"Version History"};function $(a){const e=c(),t=b(),n=H[t]||"Brand Operating Site";a.innerHTML=`
    <div class="header-left">
      <span class="header-title">${n}</span>
      <span class="header-breadcrumb">${e?.brandName||""} › ${n}</span>
    </div>
    <div class="header-right">
      <div class="search-box" id="global-search">
        <span>🔍</span>
        <input type="text" placeholder="가이드, 에셋, 컬러 검색..." id="search-input" />
      </div>
      <button class="brand-switcher" id="brand-switcher-btn">
        <span>◆</span>
        <span>${e?.brandName||"Brand"}</span>
        <span style="font-size:10px;">▼</span>
      </button>
    </div>
  `,M(),N()}function M(){const a=document.getElementById("search-input");a&&a.addEventListener("keydown",e=>{if(e.key==="Enter"){const t=a.value.trim().toLowerCase();if(!t)return;const n=c(),s=O(n,t);R(s,t)}})}function O(a,e){if(!a)return[];const t=[];["primary","secondary","functional"].forEach(s=>{a.colors?.[s]?.forEach(i=>{(i.name.toLowerCase().includes(e)||i.hex.toLowerCase().includes(e)||i.usage?.toLowerCase().includes(e))&&t.push({type:"color",label:`${i.name} (${i.hex})`,link:"#/colors",detail:i.usage})})}),a.assets?.categories?.forEach(s=>{(s.name.toLowerCase().includes(e)||s.id.toLowerCase().includes(e))&&t.push({type:"asset",label:s.name,link:"#/assets",detail:s.formats.join(", ")})}),["heading","body","english"].forEach(s=>{const i=a.typography?.[s];i&&i.fontFamily.toLowerCase().includes(e)&&t.push({type:"typography",label:i.fontFamily,link:"#/typography",detail:i.usage})});const n=a.strategy;return n&&(n.principles?.main?.toLowerCase().includes(e)&&t.push({type:"strategy",label:n.principles.main,link:"#/",detail:"Brand Principle"}),n.designPrinciples?.items?.forEach(s=>{(s.name.toLowerCase().includes(e)||s.description.toLowerCase().includes(e))&&t.push({type:"strategy",label:s.name,link:"#/",detail:s.description})})),t}function R(a,e){const t=document.getElementById("search-dropdown");t&&t.remove();const n=document.getElementById("global-search");if(!n)return;const s=document.createElement("div");s.id="search-dropdown",s.style.cssText=`
    position: absolute; top: 100%; left: 0; right: 0; margin-top: 4px;
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg); z-index: 100; max-height: 300px; overflow-y: auto;
  `,a.length===0?s.innerHTML=`<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 13px;">
      "${e}"에 대한 검색 결과가 없습니다.</div>`:s.innerHTML=a.map(i=>`
      <a href="${i.link}" style="display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-bottom: 1px solid var(--border-light); text-decoration: none; color: var(--text); transition: background 0.15s;"
         onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background='transparent'">
        <span class="tag tag-${i.type==="color"?"gold":i.type==="asset"?"primary":"green"}" style="font-size:9px;">${i.type.toUpperCase()}</span>
        <span style="font-size: 13px; font-weight: 600;">${i.label}</span>
        <span style="font-size: 11px; color: var(--text-muted); margin-left: auto;">${i.detail||""}</span>
      </a>
    `).join(""),n.style.position="relative",n.appendChild(s),setTimeout(()=>{document.addEventListener("click",function i(o){n.contains(o.target)||(s.remove(),document.removeEventListener("click",i))})},10)}async function N(){const a=document.getElementById("brand-switcher-btn");a&&a.addEventListener("click",async()=>{const e=await P(),t=document.getElementById("brand-dropdown");if(t){t.remove();return}const n=document.createElement("div");n.id="brand-dropdown",n.style.cssText=`
      position: absolute; top: 100%; right: 0; margin-top: 4px;
      background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg); z-index: 100; min-width: 180px;
    `,n.innerHTML=e.map(s=>`
      <div class="brand-option" data-brand-id="${s.id}" style="padding: 10px 16px; cursor: pointer; font-size: 13px; font-weight: 600; transition: background 0.15s;"
           onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background='transparent'">
        ${s.name} <span style="font-size:11px; color: var(--text-muted);">${s.nameKo||""}</span>
      </div>
    `).join(""),a.style.position="relative",a.appendChild(n),n.querySelectorAll(".brand-option").forEach(s=>{s.addEventListener("click",async()=>{await B(s.dataset.brandId),L(document.getElementById("sidebar")),$(document.getElementById("header")),window.dispatchEvent(new HashChangeEvent("hashchange")),n.remove()})}),setTimeout(()=>{document.addEventListener("click",function s(i){a.contains(i.target)||(n.remove(),document.removeEventListener("click",s))})},10)})}function G(a){const e=c();if(!e){a.innerHTML="<p>브랜드 데이터를 로드 중입니다...</p>";return}const t=e.strategy;let n="";t.personality?.spectrum?.forEach(i=>{n+=`
      <div class="spectrum-row">
        <span class="spectrum-label">${i.axis}</span>
        <div class="spectrum-bar">
          <div class="spectrum-dot" style="left: ${i.position}%"></div>
        </div>
      </div>`});let s="";t.designPrinciples?.items?.forEach(i=>{s+=`
      <div class="principle-card">
        <div class="principle-header">
          <div class="principle-name">${i.name}</div>
          <div class="principle-desc">${i.description}</div>
        </div>
        <div class="principle-examples">
          <div class="do-dont-grid">
            <div class="do-card">
              <div class="dd-label">✓ DO</div>
              <div class="dd-item">${i.doExample}</div>
            </div>
            <div class="dont-card">
              <div class="dd-label">✕ DON'T</div>
              <div class="dd-item">${i.dontExample}</div>
            </div>
          </div>
        </div>
      </div>`}),a.innerHTML=`
    <div class="page-title">
      <div class="page-label">Brand Strategy</div>
      <h1>브랜드 전략 계층</h1>
      <p class="page-desc">브랜드의 존재 이유부터 실제 적용까지, 연결되는 전략 구조입니다.</p>
    </div>

    <!-- Strategy Flow Diagram -->
    <div class="strategy-flow">
      <div class="strategy-level" style="background: #000; color: #fff;">
        <div class="level-label">Brand Purpose</div>
        <div class="level-title">${t.purpose?.content||""}</div>
        <div class="level-desc">${t.purpose?.mission||""}</div>
      </div>
      <div class="strategy-arrow"></div>
      <div class="strategy-level" style="background: #222; color: #fff;">
        <div class="level-label">Brand Personality</div>
        <div class="level-title">${t.personality?.keywords?.join(" · ")||""}</div>
      </div>
      <div class="strategy-arrow"></div>
      <div class="strategy-level" style="background: #444; color: #fff;">
        <div class="level-label">Brand Principles</div>
        <div class="level-title">${t.principles?.main||""}</div>
        <div class="level-desc">${t.principles?.description||""}</div>
      </div>
      <div class="strategy-arrow"></div>
      <div class="strategy-level" style="background: #F5F5F5; border: 1px solid #E8E8E8;">
        <div class="level-label" style="color: #999;">Design Principles</div>
        <div class="level-title" style="color: #000;">${t.designPrinciples?.items?.map(i=>i.name).join(" · ")||""}</div>
      </div>
      <div class="strategy-arrow"></div>
      <div class="strategy-level" style="background: #FAFAFA; border: 1px solid #E8E8E8;">
        <div class="level-label" style="color: #999;">Design System</div>
        <div class="level-title" style="color: #000;">Typography · Layout · Color · Photography</div>
      </div>
      <div class="strategy-arrow"></div>
      <div class="strategy-level" style="background: #fff; border: 1px solid #E8E8E8;">
        <div class="level-label" style="color: #999;">Application</div>
        <div class="level-title" style="color: #000;">SNS · Package · Digital · Offline</div>
      </div>
    </div>

    <div class="section-divider"></div>

    <!-- Brand Purpose Detail -->
    <div class="section-subtitle">◎ Brand Purpose</div>
    <div class="card-grid cols-3" style="margin-bottom: 32px;">
      <div class="card">
        <div style="font-size:11px; font-weight:700; color:var(--secondary); margin-bottom:8px;">MISSION</div>
        <div style="font-size:14px; font-weight:600; line-height:1.6;">${t.purpose?.mission||""}</div>
      </div>
      <div class="card">
        <div style="font-size:11px; font-weight:700; color:var(--secondary); margin-bottom:8px;">VISION</div>
        <div style="font-size:14px; font-weight:600; line-height:1.6;">${t.purpose?.vision||""}</div>
      </div>
      <div class="card">
        <div style="font-size:11px; font-weight:700; color:var(--secondary); margin-bottom:8px;">CORE VALUES</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:4px;">
          ${(t.purpose?.values||[]).map(i=>`<span class="tag tag-gold">${i}</span>`).join("")}
        </div>
      </div>
    </div>

    <!-- Personality Spectrum -->
    <div class="section-subtitle">◎ Brand Personality</div>
    <div class="card" style="margin-bottom: 32px;">
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:20px;">
        ${(t.personality?.keywords||[]).map(i=>`<span class="tag tag-primary" style="font-size:12px; padding:5px 14px;">${i}</span>`).join("")}
      </div>
      ${n}
    </div>

    <!-- Brand Principles -->
    <div class="section-subtitle">◎ Brand Principles</div>
    <div class="card" style="margin-bottom: 32px; text-align: center; padding: 32px;">
      <div style="font-size:12px; color:var(--secondary); font-weight:700; letter-spacing:2px; margin-bottom:8px;">CORE PRINCIPLE</div>
      <div style="font-size:28px; font-weight:800; color:var(--text);">${t.principles?.main||""}</div>
      <div style="font-size:14px; color:var(--text-secondary); margin-top:8px;">${t.principles?.description||""}</div>
      <div style="display:flex; gap:12px; justify-content:center; margin-top:20px; flex-wrap:wrap;">
        ${(t.principles?.subPrinciples||[]).map(i=>`<span class="tag tag-gold" style="font-size:11px; padding:6px 14px;">${i}</span>`).join("")}
      </div>
    </div>

    <!-- Design Principles -->
    <div class="section-subtitle">◎ Design Principles</div>
    <div class="card-grid" style="grid-template-columns: 1fr; gap: 16px;">
      ${s}
    </div>
  `}function w(a,e=2500){const t=document.getElementById("toast-container");if(!t)return;const n=document.createElement("div");n.className="toast",n.textContent=a,t.appendChild(n),setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>n.remove(),300)},e)}function x(a){navigator.clipboard.writeText(a).then(()=>{w(`복사됨: ${a}`)}).catch(()=>{w("복사 실패")})}function z(a){const e=parseInt(a.slice(1,3),16),t=parseInt(a.slice(3,5),16),n=parseInt(a.slice(5,7),16);return{r:e,g:t,b:n}}function C(a,e){function t(l,g,m){const[u,k,S]=[l,g,m].map(y=>(y=y/255,y<=.03928?y/12.92:Math.pow((y+.055)/1.055,2.4)));return .2126*u+.7152*k+.0722*S}const n=z(a),s=z(e),i=t(n.r,n.g,n.b),o=t(s.r,s.g,s.b),d=Math.max(i,o),r=Math.min(i,o);return((d+.05)/(r+.05)).toFixed(2)}function I(a){return a>=7?{level:"AAA",pass:!0}:a>=4.5?{level:"AA",pass:!0}:a>=3?{level:"AA Large",pass:!0}:{level:"Fail",pass:!1}}function D(a){const e=c();if(!e){a.innerHTML="<p>로딩 중...</p>";return}const t=e.assets?.categories||[];let n=t.reduce((i,o)=>i+o.count,0),s=t.map(i=>`
    <div class="asset-category-card" data-cat-id="${i.id}" ${i.externalLink?'data-external="true"':""}>
      <div class="cat-icon">${i.icon}</div>
      <div class="cat-name">${i.name}</div>
      <div class="cat-count">${i.externalLink?"외부 링크":i.count+"개 에셋"}</div>
      <div class="cat-formats">
        ${i.formats.map(o=>`<span class="format-tag">${o}</span>`).join("")}
      </div>
    </div>
  `).join("");a.innerHTML=`
    <div class="page-title">
      <div class="page-label">Asset Library</div>
      <h1>에셋 라이브러리</h1>
      <p class="page-desc">총 ${t.length}개 카테고리 · ${n}개 에셋을 포맷별로 탐색하고 다운로드합니다.</p>
    </div>

    <!-- Stats -->
    <div style="display:flex; gap:12px; margin-bottom:28px;">
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${t.length}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">카테고리</div>
      </div>
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${n}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">전체 에셋</div>
      </div>
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${new Set(t.flatMap(i=>i.formats)).size}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">포맷 종류</div>
      </div>
    </div>

    <!-- Category Grid -->
    <div class="section-subtitle">📂 에셋 카테고리</div>
    <div class="asset-category-grid" id="asset-grid">
      ${s}
    </div>

    <!-- Detail Panel (hidden by default) -->
    <div id="asset-detail" style="display:none; margin-top:32px;"></div>

    <div class="section-divider"></div>

    <!-- Interactive Logo Resize -->
    <div class="section-subtitle">🔍 로고/심볼 인터랙티브 프리뷰</div>
    <div class="card" style="margin-bottom:24px;">
      <div style="display:flex; gap:24px; align-items:flex-start;">
        <div style="flex:1;">
          <div style="font-size:12px; font-weight:600; margin-bottom:8px;">로고 크기 조절</div>
          <input type="range" class="range-slider" id="logo-size-slider" min="40" max="300" value="120" />
          <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--text-muted); margin-top:4px;">
            <span>40px</span>
            <span id="logo-size-value">120px</span>
            <span>300px</span>
          </div>
          <div style="margin-top:16px;">
            <div style="font-size:12px; font-weight:600; margin-bottom:8px;">배경 미리보기</div>
            <div style="display:flex; gap:8px;">
              <button class="btn btn-sm btn-outline bg-preview-btn" data-bg="#FFFFFF">밝은 배경</button>
              <button class="btn btn-sm btn-outline bg-preview-btn" data-bg="#1B2838">어두운 배경</button>
              <button class="btn btn-sm btn-outline bg-preview-btn" data-bg="#F9F6F2">크림 배경</button>
            </div>
          </div>
        </div>
        <div id="logo-preview-area" style="flex:1; display:flex; align-items:center; justify-content:center; min-height:200px; background:#fff; border:1px solid var(--border); border-radius:var(--radius-md); position:relative;">
          <div id="logo-preview" style="font-family:var(--font-heading); font-size:48px; font-weight:900; color:var(--primary); letter-spacing:-1px; transition: font-size 0.2s;">${e.brandName||"LOGO"}</div>
          <div id="logo-margin-indicator" style="position:absolute; border:1px dashed var(--secondary); opacity:0.4; pointer-events:none; transition: all 0.2s;"></div>
        </div>
      </div>
    </div>
  `,V(e),U(e)}function V(a){const e=document.getElementById("logo-size-slider"),t=document.getElementById("logo-preview"),n=document.getElementById("logo-size-value"),s=document.getElementById("logo-margin-indicator"),i=document.getElementById("logo-preview-area");if(!e||!t)return;const o=a.checkerRules?.logoMinMarginPx||20;e.addEventListener("input",()=>{const d=e.value;t.style.fontSize=d*.4+"px",n.textContent=d+"px";const r=t.getBoundingClientRect(),l=i.getBoundingClientRect();s.style.width=r.width+o*2+"px",s.style.height=r.height+o*2+"px",s.style.left=r.left-l.left-o+"px",s.style.top=r.top-l.top-o+"px"}),document.querySelectorAll(".bg-preview-btn").forEach(d=>{d.addEventListener("click",()=>{i.style.background=d.dataset.bg;const r=d.dataset.bg==="#1B2838";t.style.color=r?"#FFFFFF":"var(--primary)"})})}function U(a){document.querySelectorAll(".asset-category-card").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.catId,n=a.assets?.categories?.find(i=>i.id===t);if(!n)return;if(n.externalLink){w(`${n.name}: 유료 폰트 구매 페이지로 이동합니다.`);return}const s=document.getElementById("asset-detail");s.style.display="block",s.innerHTML=`
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <div>
              <span style="font-size:24px; margin-right:8px;">${n.icon}</span>
              <span style="font-size:18px; font-weight:700;">${n.name}</span>
              <span class="tag tag-gold" style="margin-left:8px;">${n.count}개</span>
            </div>
            <button class="btn btn-sm btn-outline" onclick="document.getElementById('asset-detail').style.display='none'">✕ 닫기</button>
          </div>
          <p style="font-size:13px; color:var(--text-secondary); margin-bottom:16px;">
            에셋 파일을 <code>brands/${a.brandId}/assets/${t}/</code> 폴더에 넣으면 이 카테고리에 자동으로 표시됩니다.
          </p>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            ${n.formats.map(i=>`
              <button class="btn btn-sm btn-secondary" onclick="alert('${i} 포맷 다운로드 — 실제 에셋 파일이 업로드되면 활성화됩니다.')">
                ⬇ ${i}
              </button>
            `).join("")}
          </div>
        </div>
      `,s.scrollIntoView({behavior:"smooth"})})})}function K(a){const e=c();if(!e)return;const{colors:t}=e;function n(d,r){return r.map(l=>`
      <div class="color-swatch" data-hex="${l.hex}" data-name="${l.name}">
        <div class="swatch-color" style="background: ${l.hex};"></div>
        <div class="swatch-info">
          <div class="swatch-name">${l.name}</div>
          <div class="swatch-hex">${l.hex}</div>
          ${l.rgb?`<div style="font-family:var(--font-heading); font-size:10px; color:var(--text-muted); margin-top:2px;">RGB ${l.rgb}</div>`:""}
          ${l.cmyk?`<div style="font-family:var(--font-heading); font-size:10px; color:var(--text-muted);">CMYK ${l.cmyk}</div>`:""}
          <div class="swatch-usage">${l.usage||""}</div>
          <div style="display:flex; gap:4px; margin-top:8px;">
            <button class="copy-btn" data-copy="${l.hex}">HEX</button>
            ${l.rgb?`<button class="copy-btn" data-copy="rgb(${l.rgb})">RGB</button>`:""}
          </div>
        </div>
      </div>
    `).join("")}const s=[...t.primary||[],...t.secondary||[]];let i="";for(let d=0;d<s.length;d++)for(let r=d+1;r<s.length;r++){const l=s[d],g=s[r],m=C(l.hex,g.hex),u=I(m);i+=`
        <div style="display:flex; align-items:center; gap:12px; padding:8px 0; border-bottom:1px solid var(--border-light);">
          <div style="width:24px; height:24px; border-radius:4px; background:${l.hex}; border:1px solid var(--border);"></div>
          <span style="font-size:11px; min-width:60px;">${l.name}</span>
          <span style="font-size:11px; color:var(--text-muted);">×</span>
          <div style="width:24px; height:24px; border-radius:4px; background:${g.hex}; border:1px solid var(--border);"></div>
          <span style="font-size:11px; min-width:60px;">${g.name}</span>
          <span style="font-family:var(--font-heading); font-size:12px; font-weight:700; min-width:40px;">${m}:1</span>
          <span class="wcag-badge ${u.pass?"wcag-pass":"wcag-fail"}">${u.level}</span>
        </div>`}const o=t.ratio||{primary:60,secondary:30,accent:10};a.innerHTML=`
    <div class="page-title">
      <div class="page-label">Interactive Guide</div>
      <h1>컬러 시스템</h1>
      <p class="page-desc">브랜드 공식 컬러를 확인하고 복사합니다. 접근성(WCAG) 대비 검사도 제공합니다.</p>
    </div>

    <!-- Color Ratio Bar -->
    <div class="card" style="margin-bottom:24px; padding:20px;">
      <div style="font-size:12px; font-weight:700; margin-bottom:10px;">사용 비율 가이드</div>
      <div style="display:flex; height:16px; border-radius:8px; overflow:hidden;">
        <div style="width:${o.primary}%; background:var(--primary);"></div>
        <div style="width:${o.secondary}%; background:var(--secondary);"></div>
        <div style="width:${o.accent}%; background:var(--accent);"></div>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--text-muted); margin-top:6px;">
        <span>Primary ${o.primary}%</span>
        <span>Secondary ${o.secondary}%</span>
        <span>Accent ${o.accent}%</span>
      </div>
    </div>

    <!-- Primary Colors -->
    <div class="section-subtitle">● Primary Colors</div>
    <div class="card-grid cols-3" style="margin-bottom:28px;">
      ${n("primary",t.primary||[])}
    </div>

    <!-- Secondary Colors -->
    <div class="section-subtitle">● Secondary Colors</div>
    <div class="card-grid cols-3" style="margin-bottom:28px;">
      ${n("secondary",t.secondary||[])}
    </div>

    <!-- Functional Colors -->
    <div class="section-subtitle">● Functional Colors</div>
    <div class="card-grid cols-3" style="margin-bottom:28px;">
      ${n("functional",t.functional||[])}
    </div>

    <div class="section-divider"></div>

    <!-- WCAG Accessibility Checker -->
    <div class="section-subtitle">♿ 접근성 대비 검사 (WCAG)</div>
    <div class="card-grid cols-2">
      <div class="card">
        <div style="font-size:13px; font-weight:700; margin-bottom:12px;">컬러 대비 조합표</div>
        ${i}
      </div>
      <div class="a11y-checker">
        <div style="font-size:13px; font-weight:700; margin-bottom:12px;">커스텀 대비 검사</div>
        <div class="a11y-selectors">
          <select id="a11y-fg">
            ${s.map((d,r)=>`<option value="${d.hex}" ${r===0?"selected":""}>${d.name} (${d.hex})</option>`).join("")}
          </select>
          <select id="a11y-bg">
            ${s.map((d,r)=>`<option value="${d.hex}" ${r===s.length-1?"selected":""}>${d.name} (${d.hex})</option>`).join("")}
          </select>
        </div>
        <div id="a11y-preview" class="a11y-preview">
          Sample Text 가나다라
        </div>
        <div id="a11y-result" style="text-align:center; margin-top:8px;">
        </div>
      </div>
    </div>

    <div class="section-divider"></div>

    <!-- Gradient Generator -->
    <div class="section-subtitle">🌈 그라디언트 생성기</div>
    <div class="card" id="gradient-section">
      <div style="display:flex; gap:12px; margin-bottom:16px; align-items:center;">
        <select id="grad-color1" style="padding:6px 10px; border:1px solid var(--border); border-radius:var(--radius-sm); font-size:12px;">
          ${s.map((d,r)=>`<option value="${d.hex}" ${r===0?"selected":""}>${d.name}</option>`).join("")}
        </select>
        <span style="font-size:11px; color:var(--text-muted);">→</span>
        <select id="grad-color2" style="padding:6px 10px; border:1px solid var(--border); border-radius:var(--radius-sm); font-size:12px;">
          ${s.map((d,r)=>`<option value="${d.hex}" ${r===1?"selected":""}>${d.name}</option>`).join("")}
        </select>
        <select id="grad-angle" style="padding:6px 10px; border:1px solid var(--border); border-radius:var(--radius-sm); font-size:12px;">
          <option value="90">90°</option>
          <option value="135" selected>135°</option>
          <option value="180">180°</option>
          <option value="45">45°</option>
        </select>
      </div>
      <div id="grad-preview" style="height:80px; border-radius:var(--radius-md);"></div>
      <div style="margin-top:8px; display:flex; justify-content:space-between; align-items:center;">
        <code id="grad-css" style="font-size:11px; color:var(--text-secondary);"></code>
        <button class="copy-btn" id="grad-copy-btn">CSS 복사</button>
      </div>
    </div>
  `,a.querySelectorAll(".copy-btn[data-copy]").forEach(d=>{d.addEventListener("click",r=>{r.stopPropagation(),x(d.dataset.copy)})}),a.querySelectorAll(".color-swatch").forEach(d=>{d.addEventListener("click",()=>{x(d.dataset.hex)})}),W(),X()}function W(){const a=document.getElementById("a11y-fg"),e=document.getElementById("a11y-bg"),t=document.getElementById("a11y-preview"),n=document.getElementById("a11y-result");if(!a||!e)return;function s(){t.style.color=a.value,t.style.background=e.value;const i=C(a.value,e.value),o=I(i);n.innerHTML=`
      <span style="font-family:var(--font-heading); font-size:20px; font-weight:800;">${i}:1</span>
      <span class="wcag-badge ${o.pass?"wcag-pass":"wcag-fail"}" style="margin-left:8px;">${o.level}</span>
    `}a.addEventListener("change",s),e.addEventListener("change",s),s()}function X(){const a=document.getElementById("grad-color1"),e=document.getElementById("grad-color2"),t=document.getElementById("grad-angle"),n=document.getElementById("grad-preview"),s=document.getElementById("grad-css"),i=document.getElementById("grad-copy-btn");if(!a||!e)return;function o(){const d=`linear-gradient(${t.value}deg, ${a.value} 0%, ${e.value} 100%)`;n.style.background=d,s.textContent=d}a.addEventListener("change",o),e.addEventListener("change",o),t.addEventListener("change",o),o(),i?.addEventListener("click",()=>{x(s.textContent)})}function _(a){const e=c();if(!e)return;const{typography:t}=e;function n(i,o){return`
      <div class="card">
        <div style="font-size:11px; font-weight:700; color:var(--secondary); letter-spacing:1px; margin-bottom:8px;">${i.toUpperCase()}</div>
        <div style="font-size:20px; font-weight:700; margin-bottom:4px;">${o.fontFamily}</div>
        <div style="font-size:12px; color:var(--text-secondary); margin-bottom:12px;">${o.usage}</div>
        <div style="display:flex; flex-wrap:wrap; gap:4px; margin-bottom:12px;">
          ${o.weights.map(d=>`<span class="tag tag-primary">${d}</span>`).join("")}
        </div>
        ${o.purchaseUrl?`
          <a href="${o.purchaseUrl}" target="_blank" class="btn btn-sm btn-outline" style="text-decoration:none;">
            🔗 폰트 구매/다운로드
          </a>
        `:""}
        <div style="font-size:10px; color:var(--text-muted); margin-top:8px;">License: ${o.license||"N/A"}</div>
      </div>
    `}let s=t.scale?.map(i=>`
    <div class="type-preview-card" style="margin-bottom:12px;">
      <div class="type-preview-header">
        <span class="type-name">${i.name}</span>
        <span class="type-specs">${i.size} / ${i.weight} / ${i.lineHeight}</span>
      </div>
      <div class="type-preview-body">
        <div id="preview-${i.name.replace(/\s/g,"-")}" style="font-size:${i.size}; font-weight:${i.weight}; line-height:${i.lineHeight}; letter-spacing:${i.letterSpacing}; transition: font-size 0.2s;">
          ${e.brandName} 가나다라 ABCDEFG 0123456789
        </div>
      </div>
    </div>
  `).join("")||"";a.innerHTML=`
    <div class="page-title">
      <div class="page-label">Interactive Guide</div>
      <h1>타이포그래피</h1>
      <p class="page-desc">브랜드 공식 폰트와 타입 스케일을 확인하고, 직접 입력해 미리봅니다.</p>
    </div>

    <!-- Font Family Cards -->
    <div class="section-subtitle">✏️ 브랜드 서체</div>
    <div class="card-grid cols-3" style="margin-bottom:28px;">
      ${n("heading",t.heading||{})}
      ${n("body",t.body||{})}
      ${n("english",t.english||{})}
    </div>

    <div class="section-divider"></div>

    <!-- Interactive Type Scale -->
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
      <div class="section-subtitle" style="margin-bottom:0;">📏 Type Scale</div>
      <div style="display:flex; align-items:center; gap:12px;">
        <span style="font-size:11px; color:var(--text-muted);">전체 크기 조절</span>
        <input type="range" class="range-slider" id="type-global-slider" min="50" max="200" value="100" style="width:160px;" />
        <span id="type-global-value" style="font-family:var(--font-heading); font-size:12px; font-weight:700; min-width:36px;">100%</span>
      </div>
    </div>

    <div id="type-scale-list">
      ${s}
    </div>

    <div class="section-divider"></div>

    <!-- Live Preview -->
    <div class="section-subtitle">⌨️ 라이브 미리보기</div>
    <div class="card">
      <div style="display:flex; gap:16px; margin-bottom:16px; flex-wrap:wrap;">
        <select id="live-font" style="padding:6px 12px; border:1px solid var(--border); border-radius:var(--radius-sm); font-size:12px;">
          <option value="${t.heading?.fontFamily}">${t.heading?.fontFamily} (Heading)</option>
          <option value="${t.body?.fontFamily}">${t.body?.fontFamily} (Body)</option>
          <option value="${t.english?.fontFamily}">${t.english?.fontFamily} (English)</option>
        </select>
        <select id="live-weight" style="padding:6px 12px; border:1px solid var(--border); border-radius:var(--radius-sm); font-size:12px;">
          <option value="400">Regular (400)</option>
          <option value="500">Medium (500)</option>
          <option value="600">SemiBold (600)</option>
          <option value="700" selected>Bold (700)</option>
          <option value="800">ExtraBold (800)</option>
        </select>
        <div style="display:flex; align-items:center; gap:8px;">
          <input type="range" class="range-slider" id="live-size" min="10" max="72" value="24" style="width:120px;" />
          <span id="live-size-value" style="font-family:var(--font-heading); font-size:12px; min-width:40px;">24px</span>
        </div>
      </div>
      <textarea id="live-textarea" style="width:100%; border:1px solid var(--border); border-radius:var(--radius-md); padding:20px; font-size:24px; font-weight:700; min-height:120px; resize:vertical; outline:none; transition: all 0.2s;" placeholder="여기에 텍스트를 입력하세요...">${e.brandName} — 시간이 지나도 변하지 않는 본질적인 아름다움</textarea>
      <div style="margin-top:8px; display:flex; gap:8px; justify-content:flex-end;">
        <button class="copy-btn" id="copy-font-css">CSS 복사</button>
      </div>
    </div>

    <div class="section-divider"></div>

    <!-- Font Pairing Guide -->
    <div class="section-subtitle">🔗 폰트 페어링 가이드</div>
    <div class="card-grid cols-2">
      <div class="card" style="text-align:center; padding:32px;">
        <div style="font-family:${t.heading?.fontFamily}; font-size:28px; font-weight:800; margin-bottom:8px;">Heading Style</div>
        <div style="font-family:${t.body?.fontFamily}; font-size:14px; color:var(--text-secondary); line-height:1.7;">
          본문 텍스트는 가독성을 최우선으로 합니다. 적절한 행간과 자간으로 읽기 편한 환경을 만듭니다.
        </div>
        <div style="margin-top:16px;">
          <span class="tag tag-gold">${t.heading?.fontFamily} + ${t.body?.fontFamily}</span>
        </div>
      </div>
      <div class="card" style="text-align:center; padding:32px;">
        <div style="font-family:${t.english?.fontFamily}; font-size:28px; font-weight:800; margin-bottom:8px;">English Heading</div>
        <div style="font-family:${t.body?.fontFamily}; font-size:14px; color:var(--text-secondary); line-height:1.7;">
          영문 제목에는 전용 서체를 사용하여 국제적인 톤을 유지합니다. 숫자와 데이터 표현에도 활용됩니다.
        </div>
        <div style="margin-top:16px;">
          <span class="tag tag-gold">${t.english?.fontFamily} + ${t.body?.fontFamily}</span>
        </div>
      </div>
    </div>
  `,Y(t),q()}function Y(a){const e=document.getElementById("type-global-slider"),t=document.getElementById("type-global-value");e&&e.addEventListener("input",()=>{const n=e.value/100;t.textContent=e.value+"%",a.scale?.forEach(s=>{const i=document.getElementById(`preview-${s.name.replace(/\s/g,"-")}`);if(i){const o=parseFloat(s.size);i.style.fontSize=o*n+"px"}})})}function q(a){const e=document.getElementById("live-textarea"),t=document.getElementById("live-font"),n=document.getElementById("live-weight"),s=document.getElementById("live-size"),i=document.getElementById("live-size-value"),o=document.getElementById("copy-font-css");if(!e)return;function d(){e.style.fontFamily=t.value,e.style.fontWeight=n.value,e.style.fontSize=s.value+"px",i.textContent=s.value+"px"}t?.addEventListener("change",d),n?.addEventListener("change",d),s?.addEventListener("input",d),o?.addEventListener("click",()=>{const r=`font-family: '${t.value}'; font-size: ${s.value}px; font-weight: ${n.value};`;x(r)})}function J(a){const e=c();if(!e)return;const t=e.voiceTone,n=(t?.tone?.examples?.do||[]).map(o=>`<div class="dd-item">• ${o}</div>`).join(""),s=(t?.tone?.examples?.dont||[]).map(o=>`<div class="dd-item">• ${o}</div>`).join("");let i=(t?.glossary||[]).map(o=>`
    <tr>
      <td style="font-weight:700;">${o.term}</td>
      <td><span style="color:var(--success); font-weight:600;">✓ ${o.correct}</span></td>
      <td><span style="color:var(--error); font-weight:600;">✕ ${o.incorrect}</span></td>
    </tr>
  `).join("");a.innerHTML=`
    <div class="page-title">
      <div class="page-label">Interactive Guide</div>
      <h1>Voice & Tone</h1>
      <p class="page-desc">브랜드의 말투와 어조, 올바른 표기법을 확인합니다.</p>
    </div>

    <!-- Tone Overview -->
    <div class="card" style="margin-bottom:24px; text-align:center; padding:32px;">
      <div style="font-size:12px; font-weight:700; color:var(--secondary); letter-spacing:2px; margin-bottom:8px;">BRAND VOICE</div>
      <div style="font-size:22px; font-weight:800; color:var(--text); margin-bottom:12px;">"${t?.tone?.description||""}"</div>
      <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap;">
        ${(t?.tone?.keywords||[]).map(o=>`<span class="tag tag-gold" style="font-size:12px; padding:5px 14px;">${o}</span>`).join("")}
      </div>
    </div>

    <!-- DO / DON'T -->
    <div class="section-subtitle">✦ 톤 DO / DON'T</div>
    <div class="do-dont-grid" style="margin-bottom:28px;">
      <div class="do-card">
        <div class="dd-label">✓ DO — 이런 표현을 사용합니다</div>
        ${n}
      </div>
      <div class="dont-card">
        <div class="dd-label">✕ DON'T — 이런 표현은 피합니다</div>
        ${s}
      </div>
    </div>

    <div class="section-divider"></div>

    <!-- Glossary -->
    <div class="section-subtitle">📖 용어 사전 (표기 규칙)</div>
    <div class="card">
      <table class="glossary-table">
        <thead>
          <tr>
            <th style="width:25%;">용어</th>
            <th style="width:37.5%;">올바른 표기</th>
            <th style="width:37.5%;">잘못된 표기</th>
          </tr>
        </thead>
        <tbody>
          ${i}
        </tbody>
      </table>
    </div>
  `}function Q(a){const e=c();if(!e)return;const t=e.versions||[],n=t[0];let s=t.map(i=>`
    <div class="version-item ${i.type||"minor"}">
      <div class="version-header">
        <span class="version-tag">${i.version}</span>
        <span class="tag ${i.type==="major"?"tag-gold":"tag-primary"}">${i.type==="major"?"Major":"Minor"}</span>
        <span class="version-date">${i.date}</span>
      </div>
      <div class="version-summary">${i.summary}</div>
    </div>
  `).join("");a.innerHTML=`
    <div class="page-title">
      <div class="page-label">Governance</div>
      <h1>버전 히스토리</h1>
      <p class="page-desc">가이드라인의 변경 이력을 타임라인으로 관리합니다.</p>
    </div>

    <!-- Current Version Banner -->
    ${n?`
      <div class="card" style="margin-bottom:28px; padding:28px; display:flex; align-items:center; justify-content:space-between; background: #000; color:#fff; border:none;">
        <div>
          <div style="font-size:11px; font-weight:700; opacity:0.6; letter-spacing:2px; margin-bottom:4px;">CURRENT VERSION</div>
          <div style="font-family:var(--font-heading); font-size:32px; font-weight:800;">${n.version}</div>
          <div style="font-size:13px; opacity:0.8; margin-top:4px;">${n.summary}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:12px; opacity:0.6;">Updated</div>
          <div style="font-size:16px; font-weight:700;">${n.date}</div>
        </div>
      </div>
    `:""}

    <!-- Stats -->
    <div style="display:flex; gap:12px; margin-bottom:28px;">
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${t.length}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">전체 버전</div>
      </div>
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${t.filter(i=>i.type==="major").length}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Major 릴리즈</div>
      </div>
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${t.filter(i=>i.type==="minor").length}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Minor 업데이트</div>
      </div>
    </div>

    <!-- Timeline -->
    <div class="section-subtitle">⟳ 변경 이력</div>
    <div class="version-timeline">
      ${s}
    </div>
  `}async function Z(){await B("sample-brand"),L(document.getElementById("sidebar")),$(document.getElementById("header")),v("/",e=>G(e)),v("/assets",e=>D(e)),v("/colors",e=>K(e)),v("/typography",e=>_(e)),v("/voice-tone",e=>J(e)),v("/versions",e=>Q(e)),T(e=>{A(),$(document.getElementById("header"))});const a=document.getElementById("content");a&&(a.style.transition="opacity 0.12s ease")}Z();
