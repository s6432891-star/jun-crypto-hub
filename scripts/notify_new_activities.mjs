/* =========================================================================
   自動推播腳本：比對 data.js 新舊版本，有新活動就發 OneSignal 推播
   由 GitHub Action 自動執行，Jun 不用手動跑。
   ========================================================================= */
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const APP_ID = process.env.ONESIGNAL_APP_ID;
const API_KEY = process.env.ONESIGNAL_API_KEY;
const SITE_URL = process.env.SITE_URL || "https://s6432891-star.github.io/jun-crypto-hub/";

// 把 data.js 的內容跑起來，取出 ACTIVITIES 陣列
function extractActivities(code) {
  const win = {};
  try {
    new Function("window", code)(win);
  } catch (e) {
    console.error("data.js 解析失敗：", e.message);
    return null;
  }
  return Array.isArray(win.ACTIVITIES) ? win.ACTIVITIES : [];
}

// 活動的唯一鍵：平台 + 標題
const keyOf = (a) => `${a.platform || ""}|${(a.title || "").trim()}`;

// 讀新版（工作目錄）與舊版（上一個 commit）
const newCode = readFileSync("data.js", "utf8");
let oldCode = "";
try {
  oldCode = execSync("git show HEAD^:data.js", { encoding: "utf8" });
} catch {
  console.log("找不到上一版 data.js（可能是第一次 commit），這次不發通知。");
  process.exit(0);
}

const newActs = extractActivities(newCode);
const oldActs = extractActivities(oldCode);
if (!newActs || !oldActs) process.exit(0);

const oldKeys = new Set(oldActs.map(keyOf));
const added = newActs.filter((a) => !oldKeys.has(keyOf(a)) && a.status !== "ended" && a.title);

if (added.length === 0) {
  console.log("沒有偵測到新活動（只是修改舊活動不會發通知），結束。");
  process.exit(0);
}

if (!APP_ID || !API_KEY) {
  console.log("⚠️ 尚未設定 ONESIGNAL_APP_ID / ONESIGNAL_API_KEY（GitHub Secrets），略過發送。");
  console.log("偵測到的新活動：", added.map((a) => a.title).join("、"));
  process.exit(0);
}

// 組通知文案
const first = added[0];
const heading = added.length === 1
  ? "🌸 新活動上架！"
  : `🌸 一次上架 ${added.length} 個新活動！`;
const content = added.length === 1
  ? `${first.title}${first.desc ? " — " + first.desc : ""}`.slice(0, 120)
  : added.map((a) => a.title).join("｜").slice(0, 120);

const res = await fetch("https://api.onesignal.com/notifications", {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Key ${API_KEY}`,
  },
  body: JSON.stringify({
    app_id: APP_ID,
    included_segments: ["Total Subscriptions"],
    headings: { en: heading, "zh-Hant": heading },
    contents: { en: content, "zh-Hant": content },
    url: SITE_URL,
  }),
});

const body = await res.json().catch(() => ({}));
if (!res.ok || body.errors) {
  console.error("推播發送失敗：", res.status, JSON.stringify(body));
  process.exit(1);
}
console.log(`✅ 推播已發送（${added.length} 個新活動）：`, added.map((a) => a.title).join("、"));
console.log("OneSignal 回應：", JSON.stringify(body));
