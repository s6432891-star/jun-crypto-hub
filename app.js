/* =========================================================================
   Jun 幣圈活動整理 — 共用顯示邏輯（給 index.html 與 admin.html 預覽共用）
   ========================================================================= */

window.PLATFORM_META = {
  "bitget-wallet": { label: "Bitget Wallet" },
  bitget:  { label: "Bitget" },
  gate:    { label: "Gate" },
  bybit:   { label: "Bybit" },
  mexc:    { label: "MEXC" },
  bingx:   { label: "BingX" },
  general: { label: "其他" }
};

// HTML 跳脫，避免內容裡的符號破壞版面
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// 跳脫後把換行轉成 <br>（用於 Jun 說等多行文字）
function escMultiline(s) {
  return esc(s).replace(/\n/g, "<br>");
}

// 跳脫後把 **重點** 轉成粉紅強調（用於好處清單裡標金額）
function fmtBenefit(s) {
  return esc(s).replace(/\*\*(.+?)\*\*/g, '<span class="benefit-amount">$1</span>');
}

// 產生單張卡片的 HTML
function cardHTML(a, idx) {
  const statsHTML = (a.stats || [])
    .filter(s => s && (s.label || s.value))
    .map(s => `
      <div class="stat">
        <span class="stat-label">${esc(s.label)}</span>
        <span class="stat-value ${s.color || ""}">${esc(s.value)}</span>
      </div>`)
    .join("");

  const benefitsHTML = (a.benefits && a.benefits.length)
    ? `<div class="benefits">${a.benefits
        .filter(b => b && (b.text || b.icon))
        .map(b => `<div class="benefit-item"><span class="benefit-icon">${esc(b.icon || "•")}</span><span>${fmtBenefit(b.text)}</span></div>`)
        .join("")}</div>`
    : "";

  const deadlineHTML = a.deadline
    ? `<div class="deadline-bar">⏰ ${esc(a.deadline)}</div>`
    : "";

  const noteHTML = a.junNote
    ? `<div class="jun-note"><span class="jun-note-label">Jun 說：</span>${escMultiline(a.junNote)}</div>`
    : "";

  const linkHTML = a.link
    ? `<div class="actions">
         <a class="btn btn-primary" href="${esc(a.link)}" target="_blank" rel="noopener">${esc(a.linkLabel || "🔗 前往活動")}</a>
       </div>`
    : "";

  const codeHTML = a.code
    ? `<div class="code-block">
         <div class="code-display">
           <div>
             <div class="code-label">${esc(a.codeLabel || "邀請碼")}</div>
             <div class="code-value" id="code-${idx}">${esc(a.code)}</div>
           </div>
           <button class="btn btn-copy" data-copy="code-${idx}">複製</button>
         </div>
       </div>`
    : "";

  return `
    <div class="card ${esc(a.platform)}" data-platform="${esc(a.platform)}" data-status="${esc(a.status)}">
      <div class="deco"></div>
      <div class="card-header">
        <span class="platform-badge">${esc(a.platformLabel || (PLATFORM_META[a.platform] || {}).label || a.platform)}</span>
        <span class="status-badge ${esc(a.status)}">${esc(a.statusLabel || "")}</span>
      </div>
      <div class="card-title">${esc(a.title)}</div>
      ${a.desc ? `<div class="card-desc">${esc(a.desc)}</div>` : ""}
      ${statsHTML ? `<div class="stats">${statsHTML}</div>` : ""}
      ${benefitsHTML}
      ${deadlineHTML}
      ${noteHTML}
      ${linkHTML}
      ${codeHTML}
    </div>`;
}

// 把所有卡片畫進容器
function renderCards(container, activities) {
  container.innerHTML = (activities || []).map((a, i) => cardHTML(a, i)).join("");
  // 綁定複製鈕
  container.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", () => copyCode(btn.getAttribute("data-copy"), btn));
  });
}

// 依現有活動產生篩選按鈕
function buildFilters(wrap, activities, onFilter) {
  const platforms = [];
  (activities || []).forEach(a => {
    if (a.platform && !platforms.includes(a.platform)) platforms.push(a.platform);
  });
  const tabs = [
    { type: "all", label: "🌸 全部" },
    { type: "hot", label: "🔥 進行中" }
  ];
  platforms.forEach(p => {
    tabs.push({ type: p, label: (PLATFORM_META[p] || {}).label || p });
  });
  wrap.innerHTML = tabs.map((t, i) =>
    `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${t.type}">${t.label}</button>`
  ).join("");
  wrap.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      wrap.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      onFilter(btn.getAttribute("data-filter"));
    });
  });
}

// 篩選顯示
function applyFilter(container, noResultsEl, type) {
  let visible = 0;
  container.querySelectorAll(".card").forEach(card => {
    let show = false;
    if (type === "all") show = true;
    else if (type === "hot") show = card.dataset.status === "hot";
    else show = card.dataset.platform === type;
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });
  if (noResultsEl) noResultsEl.style.display = visible === 0 ? "block" : "none";
}

// 複製邀請碼
function copyCode(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.textContent;
  const done = () => {
    btn.textContent = "已複製 ✓";
    btn.classList.add("copied");
    showToast("邀請碼已複製！");
    setTimeout(() => { btn.textContent = "複製"; btn.classList.remove("copied"); }, 2000);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}
function fallbackCopy(text, cb) {
  const ta = document.createElement("textarea");
  ta.value = text; document.body.appendChild(ta); ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta); cb && cb();
}

// 提示泡泡
function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast"; t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = "🌸 " + msg;
  t.classList.add("show");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.remove("show"), 2500);
}
