/* =============================================================
   MATHI OS 98 — script.js
   ============================================================= */

/* =============================================================
   PROJECT DATA  (placeholder — adapte les textes / dates / liens)
   ============================================================= */
const PROJECTS = {
  games: [
    /* ---------- 2026 ---------- */
    {
      name: "DNA",
      date: "2026",
      desc: "Projet en collaboration : hack and slash d'horreur lovecraftienne au gameplay dynamique.",
      media: ["img/work/game/DNA/Video Project 10.mp4","img/work/game/DNA/f.mp4"],
      tags: ["Unity", "C#"],
      download: null,
    },
    {
      name: "Projet Shaders",
      date: "2026",
      desc: "Boss fight mettant l'accent sur les shaders et les effets visuels, avec des couleurs synchronisé à la musique.",
      media: ["img/work/game/Shaders/Video Project 11.mp4"],
      tags: ["Unity", "ShaderGraph"],
      download: null,
    },
    {
      name: "Angry Birds UE5",
      date: "2026",
      desc: "Test de la physique d'Unreal Engine 5 à travers un remake amélioré d'Angry Birds.",
      media: ["img/work/game/Angry Birds/angry.mp4"],
      tags: ["Unreal Engine 5", "Blueprint"],
      download: null,
    },
    {
      name: "Five Nights at Fredanie's",
      date: "2026",
      desc: "Fan game FNAF où l'on doit survivre et accomplir des objectifs dans la map du jeu original, avec des graphismes VHS réalistes.",
      media: ["img/work/game/FNAF/Video Project 13.gif"],
      tags: ["Unreal Engine 5", "Blueprint", "C++"],
      download: null,
    },

    /* ---------- 2025 ---------- */
        {
      name: "Génération Procédurale",
      date: "2025",
      desc: "Jeu d'exploration des abysses, généré procéduralement à l'aide des marching cubes et de FastNoiseLite.",
      media: ["img/work/game/Generation/gen.png"],
      tags: ["Unity", "C#"],
      download: null,
    },
    {
      name: "FPS Project",
      date: "2025",
      desc: "Jeu FPS avec boutique et vagues d'ennemis, inspiré du mode survie de COD MW3.",
      media: ["img/work/game/FPS/a.gif", "img/work/game/FPS/cooked.gif"],
      tags: ["Unity", "C#"],
      download: null,
    },
    {
      name: "Project Sekai Remake",
      date: "2025",
      desc: "Développé sur deux mois, ce jeu de rythme propose un gameplay sur 4 lignes où il faut toucher ou maintenir les notes au tempo de la musique. Il inclut un éditeur de niveaux complet pour créer ses propres morceaux.",
      media: ["img/work/game/Sekai/sekai.gif"],
      tags: ["C++", "Raylib"],
      download: null,
    },
    {
      name: "Moteur 3D",
      date: "2025",
      desc: "Création d'un moteur de jeu vidéo à partir de zéro en C++ avec DirectX. Intègre un système ECS pour gérer efficacement les différents objets affichés à l'écran.",
      media: ["img/work/game/Engine/engine.gif"],
      tags: ["C++", "DirectX12", "ECS"],
      download: null,
    },
        {
      name: "Vampire Survivor",
      date: "2025",
      desc: "Roguelike shooter inspiré de Vampire Survivors où il faut survivre à des vagues d'ennemis. Débloquez de nouvelles armes, compétences et passifs via un arbre de compétences, le tout dans une histoire décalée et immersive.",
      media: ["img/work/game/Vampire Survivor/vampire.gif"],
      tags: ["C++", "SFML", "ECS"],
      download: null,
    },
    {
      name: "Multiplayer",
      date: "2025",
      desc: "Petit projet multijoueur utilisant Winsock2, où plusieurs clients interagissent simultanément sur un serveur.",
      media: ["img/work/game/Multiplayer/multiplayer.png"],
      tags: ["C++", "Winsock2"],
      download: null,
    },
    {
      name: "A Certain Weird Survivor",
      date: "2025",
      desc: "Un Project Zomboid-like dans l'univers urban fantasy de l'anime Toaru.",
      media: ["img/work/game/3C/Video Project 11.gif"],
      tags: ["Unity", "C#"],
      download: null,
    },

    /* ---------- 2024 ---------- */
    {
      name: "Honkai Star Rail 2",
      date: "2024",
      desc: "Jeu de combat au tour par tour inspiré de HSR, développé sur Ren'Py, un moteur de visual novel.",
      media: ["img/work/game/HSR2/a.gif"],
      tags: ["Python", "Ren'Py"],
      download: null,
    },
    {
      name: "Shoot 'em Up",
      date: "2024",
      desc: "Mini-projet de maquette d'un shoot 'em up sur le thème des voitures anciennes pour le musée Malartre à Lyon. Affrontez divers ennemis (missiles guidés, phares aveuglants, boss) dans un gameplay bullet hell avec plusieurs compétences.",
      media: ["img/work/game/Shoot Em Up/shootemup.gif"],
      tags: ["C++", "SFML"],
      download: null,
    },
    {
      name: "Breakout",
      date: "2024",
      desc: "Version moderne du casse-brique classique, avec un système de personnages offrant différents pouvoirs. Comprend également un éditeur de niveaux intégré.",
      media: ["img/work/game/Breakout/breakout.gif"],
      tags: ["C++", "SFML"],
      download: null,
    },
  ],

  design: [
    {
      name: "Map Making pixel art",
      date: "2026",
      desc: "Map réalisée pour le FPS Sector's Edge sous le logiciel MagicaVoxel.",
      media: [
        "img/work/art/MagicaVoxel/1.png",
        "img/work/art/MagicaVoxel/2.jpg",
        "img/work/art/MagicaVoxel/3.png",
        "img/work/art/MagicaVoxel/4.png",
        "img/work/art/MagicaVoxel/5.png",
        "img/work/art/MagicaVoxel/6.jpg",
      ],
      tags: ["MagicaVoxel"],
      download: null,
    },
    {
      name: "Modélisation 3D",
      date: "2023 - Maintenant",
      desc: "Apprentissage des bases de Blender pour créer et produire mes propres assets 3D",
      media: ["img/work/art/Blender/blender.webp"],
      tags: ["Blender"],
      download: null,
    },
  ],

  software: [
    {
      name: "Media Viewer",
      date: "2026",
      desc: "Visionneuse de vidéos, photos et musique, dotée d'outils multiples (crop, optimisation, conversion, audio editing, video editing). Bref, fini de passer par des sites en ligne, tout peut être fait via cette app.",
      media: [
        "img/work/software/Media Viewer/Capture d’écran 2026-05-04 155921.png",
        "img/work/software/Media Viewer/Capture d’écran 2026-05-04 160129.png",
      ],
      tags: ["Web", "Electron"],
      download: null,
    },
    {
      name: "GD Tracker",
      date: "2025",
      desc: "Petite app pour suivre et noter des niveaux de Geometry Dash, parce que personne d'autre ne l'avait fait.",
      media: ["img/work/software/GD Tracker/img.png"],
      tags: ["Web", "Electron"],
      download: null,
    },
  ],

  /* ----------------------------------------------------------
     YOUTUBE — tu peux laisser ça comme ça (ça affiche une carte
     stylée + bouton vers ta chaîne).
     Si tu veux un VRAI player intégré, mets un de ces deux :
       videoId: "dQw4w9WgXcQ"          // une vidéo précise
       playlist: "PLxxxxxxxxxxxxxxx"   // une playlist publique
     (le @handle seul ne marche pas — c'est une limitation YT)
     ---------------------------------------------------------- */
  editing: {
    handle: "@masterroyal_",
    playlist: "PL8sahC8IpI3DKvxa-U6U-XbeLPXhja-8Q",
    videoId: "-ZgC6zaN3j8",
    blurb:
      "Chaîne de montage vidéo que je tiens depuis plusieurs années, où je produis diverses créations via Adobe After Effects.",
  },
};

/* =============================================================
   BOOT SEQUENCE  (built from PROJECTS data)
   ============================================================= */
function buildBootLines() {
  const lines = [
    "Copyright (C) 2025, Mathis Software, Inc.",
    "",
    "Loading PORTFOLIO-OS 98 .....",
    "[ OK ] kernel mounted",
    "[ OK ] desktop services",
    "[ OK ] vhs.sys loaded",
    "",
    "Mounting /portfolio ...",
  ];

  const cats = [
    ["games",    PROJECTS.games],
    ["design",   PROJECTS.design],
    ["software", PROJECTS.software],
  ];

  cats.forEach(([key, items]) => {
    lines.push(`[ OK ] /portfolio/${key.padEnd(8)} (${items.length} entries)`);
  });

  const yt = PROJECTS.editing;
  lines.push(`[ OK ] /portfolio/editing  -> youtube ${yt.handle}`);

  lines.push("");
  lines.push("All systems nominal.");
  lines.push("Welcome, MATHIS.");
  return lines;
}
const bootLines = buildBootLines();

const bootEl = document.getElementById("boot-log");
const bootScreen = document.getElementById("boot");
const desktop = document.getElementById("desktop");

let bootI = 0;
function bootStep() {
  if (bootI >= bootLines.length) {
    setTimeout(() => {
      bootScreen.classList.add("hidden");
      desktop.classList.remove("hidden");
      startClock();
      renderCategory("games");
    }, 500);
    return;
  }
  const line = bootLines[bootI];
  bootEl.textContent += line + "\n";
  bootScreen.scrollTop = bootScreen.scrollHeight;
  bootI++;
  const delay = 60 + Math.random() * 110;
  setTimeout(bootStep, delay);
}
bootStep();

bootScreen.addEventListener("click", () => {
  bootEl.textContent = bootLines.join("\n");
  bootI = bootLines.length;
});

/* =============================================================
   PROJECTS RENDERING
   ============================================================= */
const catSide   = document.getElementById("cat-side");
const catList   = document.getElementById("cat-list");
const catTitle  = document.getElementById("cat-title");
const catSub    = document.getElementById("cat-sub");
const catCount  = document.getElementById("cat-count");

const CAT_META = {
  games:    { title: "Games",        sub: "Jeux vidéo, prototypes & expérimentations" },
  design:   { title: "Design",       sub: "3D, art voxel, recherches visuelles" },
  software: { title: "Software",     sub: "Outils & applications faits maison" },
  editing:  { title: "Video Editing",sub: "Montages & shorts — chaîne YouTube" },
};

function isVideo(src) { return /\.(mp4|webm|mov)$/i.test(src); }

function buildMediaEl(src) {
  if (isVideo(src)) {
    const v = document.createElement("video");
    v.src = src; v.muted = true; v.loop = true;
    v.autoplay = true; v.playsInline = true;
    v.setAttribute("playsinline", "");
    return v;
  }
  const img = document.createElement("img");
  img.src = src;
  img.alt = "";
  img.loading = "lazy";
  return img;
}

let gridMode = 2;  // default 2x2

function renderCategory(cat) {
  // sidebar active state
  catSide.querySelectorAll("li").forEach(li =>
    li.classList.toggle("active", li.dataset.cat === cat)
  );
  catTitle.textContent = CAT_META[cat].title;
  catSub.textContent   = CAT_META[cat].sub;
  catList.innerHTML = "";
  catList.className = "cat-list grid-" + gridMode;

  // hide grid toggle on editing tab (single embed)
  const gridToggle = document.getElementById("grid-toggle");
  if (gridToggle) gridToggle.style.display = (cat === "editing") ? "none" : "";

  if (cat === "editing") {
    catList.classList.add("yt-mode");
    renderEditing();
    return;
  }

  const items = PROJECTS[cat] || [];
  catCount.textContent = items.length + " objet(s)";

  items.forEach(p => catList.appendChild(buildProjectCard(p)));
  // restart any visible carousels
  catList.querySelectorAll(".proj-card").forEach(initCarousel);
}

/* grid layout buttons */
document.querySelectorAll(".grid-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    gridMode = +btn.dataset.grid;
    catList.classList.remove("grid-1", "grid-2", "grid-3");
    catList.classList.add("grid-" + gridMode);
    document.querySelectorAll(".grid-btn").forEach(b =>
      b.classList.toggle("active", +b.dataset.grid === gridMode)
    );
  });
});

function buildProjectCard(p) {
  const card = document.createElement("article");
  card.className = "proj-card" + (p.media.length === 1 ? " single" : "");

  // media
  const mediaWrap = document.createElement("div");
  mediaWrap.className = "proj-media";
  const track = document.createElement("div");
  track.className = "media-track";
  p.media.forEach((src, i) => {
    const el = buildMediaEl(src);
    if (i === 0) el.classList.add("active");
    track.appendChild(el);
  });
  mediaWrap.appendChild(track);

  if (p.media.length > 1) {
    const prev = document.createElement("button");
    prev.className = "media-prev"; prev.textContent = "‹";
    const next = document.createElement("button");
    next.className = "media-next"; next.textContent = "›";
    const dots = document.createElement("div");
    dots.className = "media-dots";
    p.media.forEach((_, i) => {
      const d = document.createElement("span");
      d.className = "media-dot" + (i === 0 ? " active" : "");
      d.dataset.idx = i;
      dots.appendChild(d);
    });
    const counter = document.createElement("div");
    counter.className = "media-counter";
    counter.textContent = `1/${p.media.length}`;
    mediaWrap.appendChild(prev);
    mediaWrap.appendChild(next);
    mediaWrap.appendChild(dots);
    mediaWrap.appendChild(counter);
  }

  // info
  const info = document.createElement("div");
  info.className = "proj-info";
  info.innerHTML = `
    <div class="proj-meta">
      <h3>${escapeHtml(p.name)}</h3>
      <p class="proj-date">${escapeHtml(p.date)}</p>
      <div class="proj-tags">${p.tags.map(t => `<span>${escapeHtml(t)}</span>`).join("")}</div>
    </div>
    <p class="proj-desc">${escapeHtml(p.desc)}</p>
    ${p.download ? `<div class="proj-actions"><a class="w98-btn" href="${p.download}" target="_blank" rel="noopener">⬇ Télécharger</a></div>` : ""}
  `;

  card.appendChild(mediaWrap);
  card.appendChild(info);

  return card;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;",
  }[c]));
}

/* ---------- CAROUSEL LOGIC ---------- */
function initCarousel(card) {
  const items = card.querySelectorAll(".media-track > *");
  if (items.length <= 1) return;
  const dots = card.querySelectorAll(".media-dot");
  const counter = card.querySelector(".media-counter");
  let idx = 0;
  let timer = null;

  function go(i) {
    idx = (i + items.length) % items.length;
    items.forEach((el, k) => el.classList.toggle("active", k === idx));
    dots.forEach((d, k) => d.classList.toggle("active", k === idx));
    if (counter) counter.textContent = `${idx + 1}/${items.length}`;
    // pause/play videos
    items.forEach((el, k) => {
      if (el.tagName === "VIDEO") {
        if (k === idx) el.play().catch(()=>{});
        else el.pause();
      }
    });
  }
  function play()  { stop(); timer = setInterval(() => go(idx + 1), 3500); }
  function stop()  { if (timer) { clearInterval(timer); timer = null; } }
  function reset() { stop(); play(); }

  card.querySelector(".media-prev").addEventListener("click", () => { go(idx - 1); reset(); });
  card.querySelector(".media-next").addEventListener("click", () => { go(idx + 1); reset(); });
  dots.forEach(d => d.addEventListener("click", () => { go(+d.dataset.idx); reset(); }));

  // pause on hover
  card.addEventListener("mouseenter", stop);
  card.addEventListener("mouseleave", play);

  play();
}

/* ---------- VIDEO EDITING TAB ---------- */
function renderEditing() {
  const e = PROJECTS.editing;
  catCount.textContent = "Chaîne YouTube";

  // Build embed src — ONLY if we have a real ID
  let embedSrc = null;
  if (e.videoId)        embedSrc = `https://www.youtube.com/embed/${e.videoId}`;
  else if (e.playlist)  embedSrc = `https://www.youtube.com/embed/videoseries?list=${e.playlist}`;

  const channelUrl = e.handle
    ? `https://www.youtube.com/${e.handle}`
    : (e.playlist ? `https://www.youtube.com/playlist?list=${e.playlist}` : "https://www.youtube.com");

  const player = embedSrc
    ? `<div class="yt-frame">
         <iframe src="${embedSrc}" title="YouTube"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
       </div>`
    : `<div class="yt-frame yt-placeholder">
         <div class="yt-play">▶</div>
         <p>${escapeHtml(e.handle || "Ma chaîne YouTube")}</p>
         <small>Clique sur "Voir la chaîne" pour ouvrir YouTube</small>
       </div>`;

  catList.innerHTML = `
    <div class="yt-wrap">
      <div class="yt-card">
        ${player}
        <div style="padding:10px 4px 0;">
          <h3 style="margin:0 0 6px;">Ma chaîne YouTube</h3>
          <p style="margin:0 0 10px; color:#222; line-height:1.45;">${escapeHtml(e.blurb)}</p>
          <div class="yt-cta">
            <a class="w98-btn" href="${channelUrl}" target="_blank" rel="noopener">▶ Voir la chaîne</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* sidebar clicks */
catSide.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => renderCategory(li.dataset.cat));
});

/* =============================================================
   WINDOW MANAGEMENT
   ============================================================= */
const windows = document.querySelectorAll(".window");
let zTop = 100;

function focusWindow(win) {
  windows.forEach(w => w.classList.remove("active"));
  win.classList.add("active");
  zTop++;
  win.style.zIndex = zTop;
  highlightTaskbar(win.dataset.id);
}

function openWindow(id) {
  const win = document.querySelector(`.window[data-id="${id}"]`);
  if (!win) return;
  if (!win.classList.contains("open")) {
    win.classList.add("open");
    addTaskbarApp(win);
    const offset = (document.querySelectorAll(".window.open").length - 1) * 18;
    if (offset > 0 && !win.dataset.placed && !win.classList.contains("big")) {
      const cs = getComputedStyle(win);
      win.style.left  = (parseFloat(cs.left) + offset) + "px";
      win.style.top   = (parseFloat(cs.top)  + offset) + "px";
      win.dataset.placed = "1";
    }
  }
  win.style.display = "flex";
  focusWindow(win);
}

function closeWindow(win) {
  win.classList.remove("open");
  win.style.display = "none";
  removeTaskbarApp(win.dataset.id);
}

function toggleMaximize(win) {
  win.classList.toggle("maximized");
}

windows.forEach(win => {
  win.addEventListener("pointerdown", () => focusWindow(win));

  win.querySelectorAll(".tb-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const a = btn.dataset.act;
      if (a === "close") closeWindow(win);
      if (a === "max")   toggleMaximize(win);
      if (a === "min")   win.style.display = "none";
    });
  });

  const bar = win.querySelector(".title-bar");
  let lastTapTime = 0;

  bar.addEventListener("pointerdown", e => {
    if (e.target.closest(".tb-btn")) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;

    e.preventDefault();
    focusWindow(win);

    const isMaximized = win.classList.contains("maximized");
    const rect = win.getBoundingClientRect();
    const offX = e.clientX - rect.left;
    const offY = e.clientY - rect.top;
    const startX = e.clientX;
    const startY = e.clientY;
    let dragging = false;

    if (!isMaximized) bar.style.cursor = "grabbing";
    try { bar.setPointerCapture(e.pointerId); } catch (_) {}

    function move(ev) {
      if (isMaximized) return;
      const dx = ev.clientX - startX;
      const dy = ev.clientY - startY;
      if (!dragging && Math.abs(dx) < 5 && Math.abs(dy) < 5) return;
      dragging = true;
      let x = ev.clientX - offX;
      let y = ev.clientY - offY;
      x = Math.max(-rect.width + 60, Math.min(window.innerWidth - 30, x));
      y = Math.max(0, Math.min(window.innerHeight - 60, y));
      win.style.left = x + "px";
      win.style.top  = y + "px";
      win.style.right = "auto";
    }
    function up() {
      bar.style.cursor = "grab";
      bar.removeEventListener("pointermove", move);
      bar.removeEventListener("pointerup", up);
      bar.removeEventListener("pointercancel", up);

      if (!dragging) {
        const now = Date.now();
        if (now - lastTapTime < 400) {
          toggleMaximize(win);
          lastTapTime = 0;
        } else {
          lastTapTime = now;
        }
      }
    }
    bar.addEventListener("pointermove", move);
    bar.addEventListener("pointerup", up);
    bar.addEventListener("pointercancel", up);
  });
});

/* =============================================================
   DESKTOP ICONS
   ============================================================= */
const dicons = document.querySelectorAll(".dicon");
let iconLastTap = 0;
let iconLastTarget = null;

dicons.forEach(ic => {
  ic.addEventListener("click", () => {
    dicons.forEach(d => d.classList.remove("selected"));
    ic.classList.add("selected");

    const now = Date.now();
    if (iconLastTarget === ic && now - iconLastTap < 500) {
      openWindow(ic.dataset.window);
      iconLastTap = 0;
      iconLastTarget = null;
    } else {
      iconLastTap = now;
      iconLastTarget = ic;
    }
  });
});
desktop.addEventListener("pointerdown", e => {
  if (!e.target.closest(".dicon") && !e.target.closest(".window") &&
      !e.target.closest("#taskbar") && !e.target.closest("#start-menu")) {
    dicons.forEach(d => d.classList.remove("selected"));
  }
});

/* =============================================================
   TASKBAR
   ============================================================= */
const tbApps = document.getElementById("taskbar-apps");

function addTaskbarApp(win) {
  const id = win.dataset.id;
  if (tbApps.querySelector(`[data-id="${id}"]`)) return;
  const titleImg = win.querySelector(".title-text img").src;
  const titleTxt = win.querySelector(".title-text span").textContent;
  const btn = document.createElement("button");
  btn.className = "tb-app active";
  btn.dataset.id = id;
  btn.innerHTML = `<img src="${titleImg}" alt=""><span>${titleTxt}</span>`;
  btn.addEventListener("click", () => {
    if (win.style.display === "none") {
      win.style.display = "flex";
      focusWindow(win);
    } else if (win.classList.contains("active")) {
      win.style.display = "none";
      btn.classList.remove("active");
    } else {
      focusWindow(win);
    }
  });
  tbApps.appendChild(btn);
}

function removeTaskbarApp(id) {
  const el = tbApps.querySelector(`[data-id="${id}"]`);
  if (el) el.remove();
}

function highlightTaskbar(id) {
  tbApps.querySelectorAll(".tb-app").forEach(a => {
    a.classList.toggle("active", a.dataset.id === id);
  });
}

/* =============================================================
   CLOCK
   ============================================================= */
function startClock() {
  const clock = document.getElementById("clock");
  function tick() {
    const d = new Date();
    const h = String(d.getHours()).padStart(2,"0");
    const m = String(d.getMinutes()).padStart(2,"0");
    clock.textContent = `${h}:${m}`;
  }
  tick();
  setInterval(tick, 30 * 1000);
}

/* =============================================================
   START MENU
   ============================================================= */
const startBtn  = document.getElementById("start-btn");
const startMenu = document.getElementById("start-menu");

startBtn.addEventListener("click", e => {
  e.stopPropagation();
  startMenu.classList.toggle("hidden");
  startBtn.classList.toggle("active");
});
document.addEventListener("click", e => {
  if (!e.target.closest("#start-menu") && !e.target.closest("#start-btn")) {
    startMenu.classList.add("hidden");
    startBtn.classList.remove("active");
  }
});
startMenu.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    if (li.dataset.window) openWindow(li.dataset.window);
    if (li.dataset.action === "shutdown") shutdown();
    if (li.dataset.action === "glitch")   toggleGlitch();
    startMenu.classList.add("hidden");
    startBtn.classList.remove("active");
  });
});

/* =============================================================
   CONTEXT MENU
   ============================================================= */
const ctx = document.getElementById("ctx-menu");
desktop.addEventListener("contextmenu", e => {
  if (e.target.closest(".window") || e.target.closest("#taskbar")) return;
  e.preventDefault();
  ctx.style.left = Math.min(e.clientX, window.innerWidth  - 220) + "px";
  ctx.style.top  = Math.min(e.clientY, window.innerHeight - 180) + "px";
  ctx.classList.remove("hidden");
});
document.addEventListener("click", () => ctx.classList.add("hidden"));
ctx.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    const a = li.dataset.action;
    if (a === "refresh") flickerOnce();
    if (a === "glitch")  toggleGlitch();
    if (a === "vhs")     toggleVHS();
    if (a === "about")   openWindow("about");
  });
});

/* =============================================================
   VFX
   ============================================================= */
function toggleGlitch() { document.body.classList.toggle("glitch"); }
function toggleVHS() {
  const v = document.querySelector(".vhs");
  v.style.display = v.style.display === "none" ? "block" : "none";
}
function flickerOnce() {
  document.body.classList.add("flicker");
  setTimeout(() => document.body.classList.remove("flicker"), 200);
}

/* =============================================================
   SHUTDOWN
   ============================================================= */
const shutdownEl = document.getElementById("shutdown");
function shutdown() {
  desktop.classList.add("hidden");
  shutdownEl.classList.remove("hidden");
}
document.getElementById("reboot").addEventListener("click", () => {
  location.reload();
});

/* =============================================================
   INITIAL OPEN
   ============================================================= */
setTimeout(() => {
  if (!desktop.classList.contains("hidden")) {
    openWindow("about");
  }
}, 1800);
