(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(a){if(a.ep)return;a.ep=!0;const e=t(a);fetch(a.href,e)}})();const x={brandId:"sample-brand",brandName:"Amore Creatives",brandNameKo:"아모레 크리에이티브",tagline:"Creating Beauty Beyond Boundaries",theme:{primaryColor:"#000000",secondaryColor:"#000000",accentColor:"#000000",backgroundColor:"#FFFFFF",surfaceColor:"#FFFFFF",textColor:"#000000",textSecondary:"#666666",borderColor:"#E8E8E8",fontHeading:"'Inter', sans-serif",fontBody:"'Noto Sans KR', sans-serif"},strategy:{purpose:{title:"Brand Purpose",content:"시간이 지나도 변하지 않는 본질적인 아름다움을 추구합니다.",mission:"모든 사람이 자신만의 아름다움을 발견하고 표현할 수 있도록 돕는다.",vision:"글로벌 프리미엄 뷰티 브랜드 Top 10",values:["Authenticity","Innovation","Sustainability","Elegance"]},personality:{title:"Brand Personality",keywords:["Confident","Sophisticated","Warm","Progressive"],spectrum:[{axis:"Formal ↔ Casual",position:25},{axis:"Classic ↔ Modern",position:60},{axis:"Bold ↔ Subtle",position:40},{axis:"Luxurious ↔ Accessible",position:30}]},principles:{title:"Brand Principles",main:"Clear Confidence",description:"명확한 자신감. 과잉 장식 없이 본질로 말한다.",subPrinciples:["진정성을 기반으로 소통한다","품질로 신뢰를 쌓는다","겸손하지만 흔들리지 않는다"]},designPrinciples:{title:"Design Principles",items:[{name:"Clear Hierarchy",description:"정보의 위계를 명확하게. 한눈에 핵심을 파악할 수 있는 구조.",doExample:"제목 → 서브카피 → 본문의 명확한 크기 차이",dontExample:"모든 텍스트가 비슷한 크기와 굵기"},{name:"Strong Focus",description:"하나의 핵심 메시지에 시선을 집중시킨다.",doExample:"메인 비주얼 1개 + 최소한의 텍스트",dontExample:"여러 이미지와 메시지가 경쟁하는 레이아웃"},{name:"Reduced Decoration",description:"불필요한 장식을 줄이고, 콘텐츠가 돋보이게 한다.",doExample:"충분한 여백과 깔끔한 레이아웃",dontExample:"과도한 그림자, 테두리, 패턴 남용"}]}},colors:{primary:[{name:"Navy",hex:"#1B2838",rgb:"27, 40, 56",cmyk:"85, 60, 35, 60",usage:"주요 텍스트, 로고, 핵심 요소"},{name:"Gold",hex:"#B8924A",rgb:"184, 146, 74",cmyk:"15, 30, 70, 10",usage:"강조, 포인트, CTA"},{name:"Cream",hex:"#F9F6F2",rgb:"249, 246, 242",cmyk:"2, 2, 4, 0",usage:"배경, 여백"}],secondary:[{name:"Deep Brown",hex:"#8B7355",rgb:"139, 115, 85",cmyk:"30, 35, 50, 20",usage:"보조 텍스트, 서브 요소"},{name:"Warm Gray",hex:"#A09890",rgb:"160, 152, 144",cmyk:"20, 20, 22, 15",usage:"비활성 상태, 보조 정보"},{name:"Light Sand",hex:"#EDE7DF",rgb:"237, 231, 223",cmyk:"5, 5, 8, 2",usage:"카드 배경, 구분선"}],functional:[{name:"Success",hex:"#5B8C6F",rgb:"91, 140, 111",usage:"성공, 확인"},{name:"Warning",hex:"#D4A853",rgb:"212, 168, 83",usage:"주의, 경고"},{name:"Error",hex:"#C75050",rgb:"199, 80, 80",usage:"오류, 삭제"}],ratio:{primary:60,secondary:30,accent:10}},typography:{heading:{fontFamily:"Pretendard",purchaseUrl:"https://cactus.tistory.com/306",license:"SIL Open Font License",weights:["Bold (700)","ExtraBold (800)"],usage:"제목, 타이틀, 강조 텍스트"},body:{fontFamily:"Pretendard",purchaseUrl:"https://cactus.tistory.com/306",license:"SIL Open Font License",weights:["Regular (400)","Medium (500)","SemiBold (600)"],usage:"본문, 캡션, UI 텍스트"},english:{fontFamily:"Inter",purchaseUrl:"https://rsms.me/inter/",license:"SIL Open Font License",weights:["Regular (400)","SemiBold (600)","Bold (700)","ExtraBold (800)"],usage:"영문 제목, 숫자, 코드"},scale:[{name:"Display",size:"48px",weight:"800",lineHeight:"1.15",letterSpacing:"-1.5px"},{name:"Heading 1",size:"36px",weight:"800",lineHeight:"1.25",letterSpacing:"-0.5px"},{name:"Heading 2",size:"28px",weight:"700",lineHeight:"1.3",letterSpacing:"-0.3px"},{name:"Heading 3",size:"22px",weight:"700",lineHeight:"1.35",letterSpacing:"0"},{name:"Heading 4",size:"18px",weight:"600",lineHeight:"1.4",letterSpacing:"0"},{name:"Body Large",size:"16px",weight:"400",lineHeight:"1.7",letterSpacing:"0"},{name:"Body",size:"14px",weight:"400",lineHeight:"1.7",letterSpacing:"0"},{name:"Caption",size:"12px",weight:"400",lineHeight:"1.5",letterSpacing:"0.2px"},{name:"Overline",size:"10px",weight:"600",lineHeight:"1.5",letterSpacing:"2px"}]},assets:{categories:[{id:"logo",name:"Logo",icon:"🏷️",formats:["SVG","PNG","AI","EPS"],count:6},{id:"symbol",name:"Symbol",icon:"◆",formats:["SVG","PNG","AI"],count:3},{id:"wordmark",name:"Wordmark",icon:"🔤",formats:["SVG","PNG","AI"],count:3},{id:"color-palette",name:"Color Palette",icon:"🎨",formats:["ASE","CLR","JSON"],count:1},{id:"typeface",name:"Typeface",icon:"✏️",formats:[],count:0,externalLink:!0},{id:"icon",name:"Icon",icon:"⬡",formats:["SVG","PNG"],count:24},{id:"pattern",name:"Pattern",icon:"▦",formats:["SVG","PNG","AI"],count:8},{id:"illustration",name:"Illustration",icon:"🖼️",formats:["SVG","PNG","AI"],count:12},{id:"graphic-motif",name:"Graphic Motif",icon:"✦",formats:["SVG","PNG","AI"],count:6},{id:"key-visual",name:"Key Visual",icon:"📸",formats:["PNG","PSD","AI"],count:4},{id:"product-rendering",name:"Product Rendering",icon:"📦",formats:["PNG","PSD"],count:10},{id:"photography",name:"Photography",icon:"📷",formats:["JPG","PNG"],count:20},{id:"motion-asset",name:"Motion Asset",icon:"🎬",formats:["MP4","MOV","GIF","Lottie"],count:5},{id:"presentation",name:"Presentation Template",icon:"📊",formats:["PPTX","KEY"],count:3},{id:"sns-template",name:"SNS Template",icon:"📱",formats:["PSD","Figma"],count:6}]},voiceTone:{tone:{description:"자신감 있되 겸손하게, 전문적이되 따뜻하게",keywords:["신뢰감 있는","세련된","따뜻한","명확한"],examples:{do:["당신의 피부가 가진 본래의 힘을 깨웁니다.","오랜 연구가 만든 확실한 결과.","자연에서 찾은 답, 과학으로 완성한 솔루션."],dont:["미친 할인! 지금 바로 구매하세요!!!","이거 안 사면 후회할 걸요~","경쟁사 제품과 비교 불가한 퀄리티!"]}},glossary:[{term:"LUXE",correct:"LUXE (대문자)",incorrect:"Luxe, luxe, 럭스"},{term:"스킨케어",correct:"스킨케어",incorrect:"스킨 케어, 스킨-케어"},{term:"에센스",correct:"에센스",incorrect:"에쎈스, 에센스류"}]},versions:[{version:"v3.0",date:"2025.06",summary:"브랜드 리뉴얼 — 로고, 컬러 시스템 전면 변경",type:"major"},{version:"v2.2",date:"2025.01",summary:"보조 컬러 2종 추가, SNS 가이드 업데이트",type:"minor"},{version:"v2.1",date:"2024.09",summary:"타이포그래피 가이드 보완, 모션 가이드 추가",type:"minor"},{version:"v2.0",date:"2024.03",summary:"디지털 전용 컬러 팔레트 신설",type:"major"},{version:"v1.0",date:"2023.06",summary:"초판 발행",type:"major"}],checkerRules:{logoMinMarginPx:20,logoMinSizePx:80,allowedColors:["#1B2838","#B8924A","#F9F6F2","#8B7355","#A09890","#EDE7DF","#FFFFFF","#000000"],officialFonts:["Pretendard","Inter"],colorTolerance:15}};let u=x,I=[{id:"sample-brand",name:"Amore Creatives",nameKo:"아모레 크리에이티브"}];function c(){return u||x}function z(n="sample-brand"){return u=x,B(u.theme),u}function k(){return I}function B(n){if(!n)return;const i=document.documentElement;i.style.setProperty("--primary",n.primaryColor||"#000000"),i.style.setProperty("--secondary",n.secondaryColor||"#000000"),i.style.setProperty("--accent",n.accentColor||"#000000"),i.style.setProperty("--bg",n.backgroundColor||"#FFFFFF"),i.style.setProperty("--surface",n.surfaceColor||"#FFFFFF"),i.style.setProperty("--text",n.textColor||"#000000"),i.style.setProperty("--text-secondary",n.textSecondary||"#666666"),i.style.setProperty("--border",n.borderColor||"#E8E8E8"),n.fontHeading&&i.style.setProperty("--font-heading",n.fontHeading),n.fontBody&&i.style.setProperty("--font-body",n.fontBody)}B(x.theme);const b={};function p(n,i){b[n]=i}function h(){const n=window.location.hash.slice(1);return(n.startsWith("/")?n:"/"+n)||"/"}function A(n){function i(){const t=h(),s=b[t]||b["/"],a=document.getElementById("content");if(a&&s)try{a.style.opacity="1",s(a)}catch(e){console.error("Error rendering route:",e)}finally{a.style.opacity="1"}n&&n(t)}window.addEventListener("hashchange",i),i()}const T=[{section:"Foundation",items:[{path:"/",icon:"◎",label:"Brand Strategy"},{path:"/assets",icon:"◆",label:"Asset Library"}]},{section:"Interactive Guide",items:[{path:"/colors",icon:"●",label:"Color System"},{path:"/typography",icon:"Aa",label:"Typography"},{path:"/voice-tone",icon:"✦",label:"Voice & Tone"}]},{section:"Governance",items:[{path:"/versions",icon:"⟳",label:"Version History"}]}];function F(n){const i=c(),t=h();let s="";T.forEach(e=>{s+=`<div class="sidebar-section-label">${e.section}</div>`,e.items.forEach(o=>{const r=o.path===t?" active":"";s+=`
        <a href="#${o.path}" class="sidebar-link${r}" data-path="${o.path}">
          <span class="nav-icon">${o.icon}</span>
          <span>${o.label}</span>
        </a>`})});const a=i?.versions?.[0];n.innerHTML=`
    <div class="sidebar-brand">
      <div class="brand-name">${i?.brandName||"Brand"}</div>
      <div class="brand-subtitle">Brand Operating Site</div>
    </div>
    <nav class="sidebar-nav">
      ${s}
    </nav>
    <div class="sidebar-version">
      ${a?`<span class="version-tag">${a.version}</span> ${a.date}`:""}
    </div>
  `}function H(){const n=h();document.querySelectorAll(".sidebar-link").forEach(i=>{i.classList.toggle("active",i.dataset.path===n)})}const G={"/":"Brand Strategy","/assets":"Asset Library","/colors":"Color System","/typography":"Typography","/voice-tone":"Voice & Tone","/versions":"Version History"};function w(n){const i=c(),t=h(),s=G[t]||"Brand Operating Site";n.innerHTML=`
    <div class="header-left">
      <span class="header-title">${s}</span>
      <span class="header-breadcrumb">${i?.brandName||""} › ${s}</span>
    </div>
    <div class="header-right">
      <div class="search-box" id="global-search">
        <span>🔍</span>
        <input type="text" placeholder="가이드, 에셋, 컬러 검색..." id="search-input" />
      </div>
      <button class="brand-switcher" id="brand-switcher-btn">
        <span>◆</span>
        <span>${i?.brandName||"Brand"}</span>
        <span style="font-size:10px;">▼</span>
      </button>
    </div>
  `,j(),D()}function j(){const n=document.getElementById("search-input");n&&n.addEventListener("keydown",i=>{if(i.key==="Enter"){const t=n.value.trim().toLowerCase();if(!t)return;const s=c(),a=N(s,t);M(a,t)}})}function N(n,i){if(!n)return[];const t=[];["primary","secondary","functional"].forEach(a=>{n.colors?.[a]?.forEach(e=>{(e.name.toLowerCase().includes(i)||e.hex.toLowerCase().includes(i)||e.usage?.toLowerCase().includes(i))&&t.push({type:"color",label:`${e.name} (${e.hex})`,link:"#/colors",detail:e.usage})})}),n.assets?.categories?.forEach(a=>{(a.name.toLowerCase().includes(i)||a.id.toLowerCase().includes(i))&&t.push({type:"asset",label:a.name,link:"#/assets",detail:a.formats.join(", ")})}),["heading","body","english"].forEach(a=>{const e=n.typography?.[a];e&&e.fontFamily.toLowerCase().includes(i)&&t.push({type:"typography",label:e.fontFamily,link:"#/typography",detail:e.usage})});const s=n.strategy;return s&&(s.principles?.main?.toLowerCase().includes(i)&&t.push({type:"strategy",label:s.principles.main,link:"#/",detail:"Brand Principle"}),s.designPrinciples?.items?.forEach(a=>{(a.name.toLowerCase().includes(i)||a.description.toLowerCase().includes(i))&&t.push({type:"strategy",label:a.name,link:"#/",detail:a.description})})),t}function M(n,i){const t=document.getElementById("search-dropdown");t&&t.remove();const s=document.getElementById("global-search");if(!s)return;const a=document.createElement("div");a.id="search-dropdown",a.style.cssText=`
    position: absolute; top: 100%; left: 0; right: 0; margin-top: 4px;
    background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg); z-index: 100; max-height: 300px; overflow-y: auto;
  `,n.length===0?a.innerHTML=`<div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 13px;">
      "${i}"에 대한 검색 결과가 없습니다.</div>`:a.innerHTML=n.map(e=>`
      <a href="${e.link}" style="display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-bottom: 1px solid var(--border-light); text-decoration: none; color: var(--text); transition: background 0.15s;"
         onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background='transparent'">
        <span class="tag tag-${e.type==="color"?"gold":e.type==="asset"?"primary":"green"}" style="font-size:9px;">${e.type.toUpperCase()}</span>
        <span style="font-size: 13px; font-weight: 600;">${e.label}</span>
        <span style="font-size: 11px; color: var(--text-muted); margin-left: auto;">${e.detail||""}</span>
      </a>
    `).join(""),s.style.position="relative",s.appendChild(a),setTimeout(()=>{document.addEventListener("click",function e(o){s.contains(o.target)||(a.remove(),document.removeEventListener("click",e))})},10)}async function D(){const n=document.getElementById("brand-switcher-btn");n&&n.addEventListener("click",async()=>{const i=await k(),t=document.getElementById("brand-dropdown");if(t){t.remove();return}const s=document.createElement("div");s.id="brand-dropdown",s.style.cssText=`
      position: absolute; top: 100%; right: 0; margin-top: 4px;
      background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg); z-index: 100; min-width: 180px;
    `,s.innerHTML=i.map(a=>`
      <div class="brand-option" data-brand-id="${a.id}" style="padding: 10px 16px; cursor: pointer; font-size: 13px; font-weight: 600; transition: background 0.15s;"
           onmouseover="this.style.background='var(--bg)'" onmouseout="this.style.background='transparent'">
        ${a.name} <span style="font-size:11px; color: var(--text-muted);">${a.nameKo||""}</span>
      </div>
    `).join(""),n.style.position="relative",n.appendChild(s),s.querySelectorAll(".brand-option").forEach(a=>{a.addEventListener("click",async()=>{await z(a.dataset.brandId),F(document.getElementById("sidebar")),w(document.getElementById("header")),window.dispatchEvent(new HashChangeEvent("hashchange")),s.remove()})}),setTimeout(()=>{document.addEventListener("click",function a(e){n.contains(e.target)||(s.remove(),document.removeEventListener("click",a))})},10)})}function O(n){const i=c();if(!i)return;const t=i.strategy;let s="";t.personality?.spectrum?.forEach(e=>{s+=`
      <div class="spectrum-row">
        <span class="spectrum-label">${e.axis}</span>
        <div class="spectrum-bar">
          <div class="spectrum-dot" style="left: ${e.position}%"></div>
        </div>
      </div>`});let a="";t.designPrinciples?.items?.forEach(e=>{a+=`
      <div class="principle-card">
        <div class="principle-header">
          <div class="principle-name">${e.name}</div>
          <div class="principle-desc">${e.description}</div>
        </div>
        <div class="principle-examples">
          <div class="do-dont-grid">
            <div class="do-card">
              <div class="dd-label">✓ DO</div>
              <div class="dd-item">${e.doExample}</div>
            </div>
            <div class="dont-card">
              <div class="dd-label">✕ DON'T</div>
              <div class="dd-item">${e.dontExample}</div>
            </div>
          </div>
        </div>
      </div>`}),n.innerHTML=`
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
        <div class="level-title" style="color: #000;">${t.designPrinciples?.items?.map(e=>e.name).join(" · ")||""}</div>
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
          ${(t.purpose?.values||[]).map(e=>`<span class="tag tag-gold">${e}</span>`).join("")}
        </div>
      </div>
    </div>

    <!-- Personality Spectrum -->
    <div class="section-subtitle">◎ Brand Personality</div>
    <div class="card" style="margin-bottom: 32px;">
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:20px;">
        ${(t.personality?.keywords||[]).map(e=>`<span class="tag tag-primary" style="font-size:12px; padding:5px 14px;">${e}</span>`).join("")}
      </div>
      ${s}
    </div>

    <!-- Brand Principles -->
    <div class="section-subtitle">◎ Brand Principles</div>
    <div class="card" style="margin-bottom: 32px; text-align: center; padding: 32px;">
      <div style="font-size:12px; color:var(--secondary); font-weight:700; letter-spacing:2px; margin-bottom:8px;">CORE PRINCIPLE</div>
      <div style="font-size:28px; font-weight:800; color:var(--text);">${t.principles?.main||""}</div>
      <div style="font-size:14px; color:var(--text-secondary); margin-top:8px;">${t.principles?.description||""}</div>
      <div style="display:flex; gap:12px; justify-content:center; margin-top:20px; flex-wrap:wrap;">
        ${(t.principles?.subPrinciples||[]).map(e=>`<span class="tag tag-gold" style="font-size:11px; padding:6px 14px;">${e}</span>`).join("")}
      </div>
    </div>

    <!-- Design Principles -->
    <div class="section-subtitle">◎ Design Principles</div>
    <div class="card-grid" style="grid-template-columns: 1fr; gap: 16px;">
      ${a}
    </div>
  `}function $(n,i=2500){const t=document.getElementById("toast-container");if(!t)return;const s=document.createElement("div");s.className="toast",s.textContent=n,t.appendChild(s),setTimeout(()=>{s.classList.add("fade-out"),setTimeout(()=>s.remove(),300)},i)}function f(n){navigator.clipboard.writeText(n).then(()=>{$(`복사됨: ${n}`)}).catch(()=>{$("복사 실패")})}function E(n){const i=parseInt(n.slice(1,3),16),t=parseInt(n.slice(3,5),16),s=parseInt(n.slice(5,7),16);return{r:i,g:t,b:s}}function S(n,i){function t(l,v,y){const[m,P,C]=[l,v,y].map(g=>(g=g/255,g<=.03928?g/12.92:Math.pow((g+.055)/1.055,2.4)));return .2126*m+.7152*P+.0722*C}const s=E(n),a=E(i),e=t(s.r,s.g,s.b),o=t(a.r,a.g,a.b),r=Math.max(e,o),d=Math.min(e,o);return((r+.05)/(d+.05)).toFixed(2)}function L(n){return n>=7?{level:"AAA",pass:!0}:n>=4.5?{level:"AA",pass:!0}:n>=3?{level:"AA Large",pass:!0}:{level:"Fail",pass:!1}}function R(n){const i=c();if(!i)return;const t=i.assets?.categories||[];let s=t.reduce((e,o)=>e+o.count,0),a=t.map(e=>`
    <div class="asset-category-card" data-cat-id="${e.id}" ${e.externalLink?'data-external="true"':""}>
      <div class="cat-icon">${e.icon}</div>
      <div class="cat-name">${e.name}</div>
      <div class="cat-count">${e.externalLink?"외부 링크":e.count+"개 에셋"}</div>
      <div class="cat-formats">
        ${e.formats.map(o=>`<span class="format-tag">${o}</span>`).join("")}
      </div>
    </div>
  `).join("");n.innerHTML=`
    <div class="page-title">
      <div class="page-label">Asset Library</div>
      <h1>에셋 라이브러리</h1>
      <p class="page-desc">총 ${t.length}개 카테고리 · ${s}개 에셋을 포맷별로 탐색하고 다운로드합니다.</p>
    </div>

    <!-- Stats -->
    <div style="display:flex; gap:12px; margin-bottom:28px;">
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${t.length}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">카테고리</div>
      </div>
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${s}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">전체 에셋</div>
      </div>
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${new Set(t.flatMap(e=>e.formats)).size}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">포맷 종류</div>
      </div>
    </div>

    <!-- Category Grid -->
    <div class="section-subtitle">📂 에셋 카테고리</div>
    <div class="asset-category-grid" id="asset-grid">
      ${a}
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
          <div id="logo-preview" style="font-family:var(--font-heading); font-size:48px; font-weight:900; color:var(--primary); letter-spacing:-1px; transition: font-size 0.2s;">${i.brandName||"LOGO"}</div>
          <div id="logo-margin-indicator" style="position:absolute; border:1px dashed var(--secondary); opacity:0.4; pointer-events:none; transition: all 0.2s;"></div>
        </div>
      </div>
    </div>
  `,V(i),U(i)}function V(n){const i=document.getElementById("logo-size-slider"),t=document.getElementById("logo-preview"),s=document.getElementById("logo-size-value"),a=document.getElementById("logo-margin-indicator"),e=document.getElementById("logo-preview-area");if(!i||!t)return;const o=n.checkerRules?.logoMinMarginPx||20;i.addEventListener("input",()=>{const r=i.value;t.style.fontSize=r*.4+"px",s.textContent=r+"px";const d=t.getBoundingClientRect(),l=e.getBoundingClientRect();a.style.width=d.width+o*2+"px",a.style.height=d.height+o*2+"px",a.style.left=d.left-l.left-o+"px",a.style.top=d.top-l.top-o+"px"}),document.querySelectorAll(".bg-preview-btn").forEach(r=>{r.addEventListener("click",()=>{e.style.background=r.dataset.bg;const d=r.dataset.bg==="#1B2838";t.style.color=d?"#FFFFFF":"var(--primary)"})})}function U(n){document.querySelectorAll(".asset-category-card").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.catId,s=n.assets?.categories?.find(e=>e.id===t);if(!s)return;if(s.externalLink){$(`${s.name}: 유료 폰트 구매 페이지로 이동합니다.`);return}const a=document.getElementById("asset-detail");a.style.display="block",a.innerHTML=`
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <div>
              <span style="font-size:24px; margin-right:8px;">${s.icon}</span>
              <span style="font-size:18px; font-weight:700;">${s.name}</span>
              <span class="tag tag-gold" style="margin-left:8px;">${s.count}개</span>
            </div>
            <button class="btn btn-sm btn-outline" onclick="document.getElementById('asset-detail').style.display='none'">✕ 닫기</button>
          </div>
          <p style="font-size:13px; color:var(--text-secondary); margin-bottom:16px;">
            에셋 파일을 <code>brands/${n.brandId}/assets/${t}/</code> 폴더에 넣으면 이 카테고리에 자동으로 표시됩니다.
          </p>
          <div style="display:flex; gap:8px; flex-wrap:wrap;">
            ${s.formats.map(e=>`
              <button class="btn btn-sm btn-secondary" onclick="alert('${e} 포맷 다운로드 — 실제 에셋 파일이 업로드되면 활성화됩니다.')">
                ⬇ ${e}
              </button>
            `).join("")}
          </div>
        </div>
      `,a.scrollIntoView({behavior:"smooth"})})})}function W(n){const i=c();if(!i)return;const{colors:t}=i;function s(r,d){return d.map(l=>`
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
    `).join("")}const a=[...t.primary||[],...t.secondary||[]];let e="";for(let r=0;r<a.length;r++)for(let d=r+1;d<a.length;d++){const l=a[r],v=a[d],y=S(l.hex,v.hex),m=L(y);e+=`
        <div style="display:flex; align-items:center; gap:12px; padding:8px 0; border-bottom:1px solid var(--border-light);">
          <div style="width:24px; height:24px; border-radius:4px; background:${l.hex}; border:1px solid var(--border);"></div>
          <span style="font-size:11px; min-width:60px;">${l.name}</span>
          <span style="font-size:11px; color:var(--text-muted);">×</span>
          <div style="width:24px; height:24px; border-radius:4px; background:${v.hex}; border:1px solid var(--border);"></div>
          <span style="font-size:11px; min-width:60px;">${v.name}</span>
          <span style="font-family:var(--font-heading); font-size:12px; font-weight:700; min-width:40px;">${y}:1</span>
          <span class="wcag-badge ${m.pass?"wcag-pass":"wcag-fail"}">${m.level}</span>
        </div>`}const o=t.ratio||{primary:60,secondary:30,accent:10};n.innerHTML=`
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
      ${s("primary",t.primary||[])}
    </div>

    <!-- Secondary Colors -->
    <div class="section-subtitle">● Secondary Colors</div>
    <div class="card-grid cols-3" style="margin-bottom:28px;">
      ${s("secondary",t.secondary||[])}
    </div>

    <!-- Functional Colors -->
    <div class="section-subtitle">● Functional Colors</div>
    <div class="card-grid cols-3" style="margin-bottom:28px;">
      ${s("functional",t.functional||[])}
    </div>

    <div class="section-divider"></div>

    <!-- WCAG Accessibility Checker -->
    <div class="section-subtitle">♿ 접근성 대비 검사 (WCAG)</div>
    <div class="card-grid cols-2">
      <div class="card">
        <div style="font-size:13px; font-weight:700; margin-bottom:12px;">컬러 대비 조합표</div>
        ${e}
      </div>
      <div class="a11y-checker">
        <div style="font-size:13px; font-weight:700; margin-bottom:12px;">커스텀 대비 검사</div>
        <div class="a11y-selectors">
          <select id="a11y-fg">
            ${a.map((r,d)=>`<option value="${r.hex}" ${d===0?"selected":""}>${r.name} (${r.hex})</option>`).join("")}
          </select>
          <select id="a11y-bg">
            ${a.map((r,d)=>`<option value="${r.hex}" ${d===a.length-1?"selected":""}>${r.name} (${r.hex})</option>`).join("")}
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
          ${a.map((r,d)=>`<option value="${r.hex}" ${d===0?"selected":""}>${r.name}</option>`).join("")}
        </select>
        <span style="font-size:11px; color:var(--text-muted);">→</span>
        <select id="grad-color2" style="padding:6px 10px; border:1px solid var(--border); border-radius:var(--radius-sm); font-size:12px;">
          ${a.map((r,d)=>`<option value="${r.hex}" ${d===1?"selected":""}>${r.name}</option>`).join("")}
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
  `,n.querySelectorAll(".copy-btn[data-copy]").forEach(r=>{r.addEventListener("click",d=>{d.stopPropagation(),f(r.dataset.copy)})}),n.querySelectorAll(".color-swatch").forEach(r=>{r.addEventListener("click",()=>{f(r.dataset.hex)})}),K(),X()}function K(){const n=document.getElementById("a11y-fg"),i=document.getElementById("a11y-bg"),t=document.getElementById("a11y-preview"),s=document.getElementById("a11y-result");if(!n||!i)return;function a(){t.style.color=n.value,t.style.background=i.value;const e=S(n.value,i.value),o=L(e);s.innerHTML=`
      <span style="font-family:var(--font-heading); font-size:20px; font-weight:800;">${e}:1</span>
      <span class="wcag-badge ${o.pass?"wcag-pass":"wcag-fail"}" style="margin-left:8px;">${o.level}</span>
    `}n.addEventListener("change",a),i.addEventListener("change",a),a()}function X(){const n=document.getElementById("grad-color1"),i=document.getElementById("grad-color2"),t=document.getElementById("grad-angle"),s=document.getElementById("grad-preview"),a=document.getElementById("grad-css"),e=document.getElementById("grad-copy-btn");if(!n||!i)return;function o(){const r=`linear-gradient(${t.value}deg, ${n.value} 0%, ${i.value} 100%)`;s.style.background=r,a.textContent=r}n.addEventListener("change",o),i.addEventListener("change",o),t.addEventListener("change",o),o(),e?.addEventListener("click",()=>{f(a.textContent)})}function _(n){const i=c();if(!i)return;const{typography:t}=i;function s(e,o){return`
      <div class="card">
        <div style="font-size:11px; font-weight:700; color:var(--secondary); letter-spacing:1px; margin-bottom:8px;">${e.toUpperCase()}</div>
        <div style="font-size:20px; font-weight:700; margin-bottom:4px;">${o.fontFamily}</div>
        <div style="font-size:12px; color:var(--text-secondary); margin-bottom:12px;">${o.usage}</div>
        <div style="display:flex; flex-wrap:wrap; gap:4px; margin-bottom:12px;">
          ${o.weights.map(r=>`<span class="tag tag-primary">${r}</span>`).join("")}
        </div>
        ${o.purchaseUrl?`
          <a href="${o.purchaseUrl}" target="_blank" class="btn btn-sm btn-outline" style="text-decoration:none;">
            🔗 폰트 구매/다운로드
          </a>
        `:""}
        <div style="font-size:10px; color:var(--text-muted); margin-top:8px;">License: ${o.license||"N/A"}</div>
      </div>
    `}let a=t.scale?.map(e=>`
    <div class="type-preview-card" style="margin-bottom:12px;">
      <div class="type-preview-header">
        <span class="type-name">${e.name}</span>
        <span class="type-specs">${e.size} / ${e.weight} / ${e.lineHeight}</span>
      </div>
      <div class="type-preview-body">
        <div id="preview-${e.name.replace(/\s/g,"-")}" style="font-size:${e.size}; font-weight:${e.weight}; line-height:${e.lineHeight}; letter-spacing:${e.letterSpacing}; transition: font-size 0.2s;">
          ${i.brandName} 가나다라 ABCDEFG 0123456789
        </div>
      </div>
    </div>
  `).join("")||"";n.innerHTML=`
    <div class="page-title">
      <div class="page-label">Interactive Guide</div>
      <h1>타이포그래피</h1>
      <p class="page-desc">브랜드 공식 폰트와 타입 스케일을 확인하고, 직접 입력해 미리봅니다.</p>
    </div>

    <!-- Font Family Cards -->
    <div class="section-subtitle">✏️ 브랜드 서체</div>
    <div class="card-grid cols-3" style="margin-bottom:28px;">
      ${s("heading",t.heading||{})}
      ${s("body",t.body||{})}
      ${s("english",t.english||{})}
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
      ${a}
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
      <textarea id="live-textarea" style="width:100%; border:1px solid var(--border); border-radius:var(--radius-md); padding:20px; font-size:24px; font-weight:700; min-height:120px; resize:vertical; outline:none; transition: all 0.2s;" placeholder="여기에 텍스트를 입력하세요...">${i.brandName} — 시간이 지나도 변하지 않는 본질적인 아름다움</textarea>
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
  `,J(t),Y()}function J(n){const i=document.getElementById("type-global-slider"),t=document.getElementById("type-global-value");i&&i.addEventListener("input",()=>{const s=i.value/100;t.textContent=i.value+"%",n.scale?.forEach(a=>{const e=document.getElementById(`preview-${a.name.replace(/\s/g,"-")}`);if(e){const o=parseFloat(a.size);e.style.fontSize=o*s+"px"}})})}function Y(n){const i=document.getElementById("live-textarea"),t=document.getElementById("live-font"),s=document.getElementById("live-weight"),a=document.getElementById("live-size"),e=document.getElementById("live-size-value"),o=document.getElementById("copy-font-css");if(!i)return;function r(){i.style.fontFamily=t.value,i.style.fontWeight=s.value,i.style.fontSize=a.value+"px",e.textContent=a.value+"px"}t?.addEventListener("change",r),s?.addEventListener("change",r),a?.addEventListener("input",r),o?.addEventListener("click",()=>{const d=`font-family: '${t.value}'; font-size: ${a.value}px; font-weight: ${s.value};`;f(d)})}function q(n){const i=c();if(!i)return;const t=i.voiceTone,s=(t?.tone?.examples?.do||[]).map(o=>`<div class="dd-item">• ${o}</div>`).join(""),a=(t?.tone?.examples?.dont||[]).map(o=>`<div class="dd-item">• ${o}</div>`).join("");let e=(t?.glossary||[]).map(o=>`
    <tr>
      <td style="font-weight:700;">${o.term}</td>
      <td><span style="color:var(--success); font-weight:600;">✓ ${o.correct}</span></td>
      <td><span style="color:var(--error); font-weight:600;">✕ ${o.incorrect}</span></td>
    </tr>
  `).join("");n.innerHTML=`
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
        ${s}
      </div>
      <div class="dont-card">
        <div class="dd-label">✕ DON'T — 이런 표현은 피합니다</div>
        ${a}
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
          ${e}
        </tbody>
      </table>
    </div>
  `}function Q(n){const i=c();if(!i)return;const t=i.versions||[],s=t[0];let a=t.map(e=>`
    <div class="version-item ${e.type||"minor"}">
      <div class="version-header">
        <span class="version-tag">${e.version}</span>
        <span class="tag ${e.type==="major"?"tag-gold":"tag-primary"}">${e.type==="major"?"Major":"Minor"}</span>
        <span class="version-date">${e.date}</span>
      </div>
      <div class="version-summary">${e.summary}</div>
    </div>
  `).join("");n.innerHTML=`
    <div class="page-title">
      <div class="page-label">Governance</div>
      <h1>버전 히스토리</h1>
      <p class="page-desc">가이드라인의 변경 이력을 타임라인으로 관리합니다.</p>
    </div>

    <!-- Current Version Banner -->
    ${s?`
      <div class="card" style="margin-bottom:28px; padding:28px; display:flex; align-items:center; justify-content:space-between; background: #000; color:#fff; border:none;">
        <div>
          <div style="font-size:11px; font-weight:700; opacity:0.6; letter-spacing:2px; margin-bottom:4px;">CURRENT VERSION</div>
          <div style="font-family:var(--font-heading); font-size:32px; font-weight:800;">${s.version}</div>
          <div style="font-size:13px; opacity:0.8; margin-top:4px;">${s.summary}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:12px; opacity:0.6;">Updated</div>
          <div style="font-size:16px; font-weight:700;">${s.date}</div>
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
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${t.filter(e=>e.type==="major").length}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Major 릴리즈</div>
      </div>
      <div class="card" style="flex:1; text-align:center; padding:20px;">
        <div style="font-family:var(--font-heading); font-size:28px; font-weight:800; color:var(--secondary);">${t.filter(e=>e.type==="minor").length}</div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Minor 업데이트</div>
      </div>
    </div>

    <!-- Timeline -->
    <div class="section-subtitle">⟳ 변경 이력</div>
    <div class="version-timeline">
      ${a}
    </div>
  `}function Z(){z("sample-brand"),F(document.getElementById("sidebar")),w(document.getElementById("header")),p("/",i=>O(i)),p("/assets",i=>R(i)),p("/colors",i=>W(i)),p("/typography",i=>_(i)),p("/voice-tone",i=>q(i)),p("/versions",i=>Q(i)),A(i=>{H(),w(document.getElementById("header"))});const n=document.getElementById("content");n&&(n.style.opacity="1")}Z();
