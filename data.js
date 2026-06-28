/* =========================================================================
   Jun 幣圈活動整理 — 資料檔
   -------------------------------------------------------------------------
   這個檔案是「整個小App的內容來源」。
   你不用手改這裡，用 admin.html 後台填表 → 下載新的 data.js 蓋掉這個檔就好。
   （如果你想手動改也可以，每一個 { ... } 就是一張卡片。）

   小語法：
   - benefits 好處清單裡，想把金額/重點變粉紅色，用 **兩個星號** 包起來。
   - junNote（Jun 說）想換行，直接按 Enter 換行即可。
   最後更新：2026-06-28
   ========================================================================= */

window.SITE = {
  emoji: "🩺",
  name: "Jun 的幣圈活動整理 🌸",
  tagline: "護理師下班後用 AI 整理的幣圈活動<br>我玩過的才分享，沒玩過的不亂推",
  disclaimer: "⚠️ 純個人分享，非投資建議，投資請自行評估風險",
  links: [
    { label: "📱 Threads", url: "https://www.threads.com/@j.i.y__ovo" },
    { label: "✨ Instagram", url: "https://www.instagram.com/j.i.y__ovo" }
  ],
  footer: "追蹤我 Threads / IG：@j.i.y__ovo<br>內容為個人分享，非投資建議 ♡<br>投資有風險，只投閒置資金，自行判斷"
};

/* status：hot（🔥）/ ongoing（✅）/ soon（⏳即將）/ ended（⚪已結束）
   platform：bitget-wallet / bitget / gate / bybit / mexc / bingx / general
   stats / benefits 不需要就寫 []；code / deadline 沒有就留 "" */
window.ACTIVITIES = [
  {
    platform: "bybit",
    platformLabel: "Bybit · 新用戶專屬",
    status: "hot",
    statusLabel: "🔥 限時",
    title: "🌱 新人禮：$30 + 高達 $500 盲盒",
    desc: "用我的邀請碼註冊 Bybit，完成新人任務逐步解鎖獎勵，最高可拿 $530 以上",
    stats: [],
    benefits: [
      { icon: "✅", text: "完成身份認證 → 立領 **10 USDT 抵扣金**" },
      { icon: "💰", text: "充值任務 → 再領 **20 USDT**" },
      { icon: "🎁", text: "完成更多任務 → 解鎖高達 **$500 盲盒**驚喜獎勵" },
      { icon: "📈", text: "TradFi 首單 ≥$10 → **5 USDT**（新用戶限定）" }
    ],
    deadline: "",
    junNote: "Bybit 新人禮蠻實在的，身分驗證就先給 10U，一步一步做任務就有，適合剛進來的新人 🌸",
    link: "https://partner.bybit.com/b/BYJUN",
    linkLabel: "🔗 前往 Bybit 註冊",
    code: "BYJUN",
    codeLabel: "Bybit 邀請碼"
  },
  {
    platform: "bybit",
    platformLabel: "Bybit · 福利中心",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "Bybit 福利中心 — 理財 & 質押高息",
    desc: "登入 Bybit App → 福利中心，各種任務都可以領加息券，儲蓄質押最高衝 555% 年化",
    stats: [],
    benefits: [
      { icon: "💸", text: "Bybit 儲蓄質押 ≥100 USDT → 享 **555% APR 加息券**（+300%）" },
      { icon: "💸", text: "活期儲蓄帳戶餘額 ≥$100 → 享 **+800% 加息券**" },
      { icon: "🃏", text: "Bybit Card 消費 ≥100 USDT → **2 USDT 空投**（循環任務）" },
      { icon: "🎮", text: "模擬帳戶完成衍生品交易 → **50 USDT 等值倉位**" }
    ],
    deadline: "",
    junNote: "福利中心每天都有新任務，有些是循環的，進去看一下會有驚喜，USDT 理財 555% 年化那個加息券很香 🌷",
    link: "https://partner.bybit.com/b/BYJUN",
    linkLabel: "🔗 前往 Bybit 福利中心",
    code: "BYJUN",
    codeLabel: "Bybit 邀請碼"
  },
  {
    platform: "bybit",
    platformLabel: "Bybit · 理財",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "持有 USD1，賺 WLFI 收益",
    desc: "持有 USD1 穩定幣自動獲得 WLFI 代幣，天天領獎勵，無需鎖倉、無需操作，放著就賺",
    stats: [
      { label: "預估年化", value: "7.29%", color: "highlight" },
      { label: "最低持有", value: "≥ 1 USD1", color: "" },
      { label: "結算", value: "每日自動", color: "" }
    ],
    benefits: [
      { icon: "1️⃣", text: "完成身分驗證（1 級即可）" },
      { icon: "2️⃣", text: "帳戶持有 ≥ 1 USD1（不用鎖倉）" },
      { icon: "3️⃣", text: "每天自動獲得 WLFI 空投，隔天早上入帳" }
    ],
    deadline: "",
    junNote: "USD1 是 World Liberty Financial 發行的穩定幣，1:1 錨定美元。放著就有 WLFI，適合懶人理財 🌷\n\n⚠️ 年化為預估值，WLFI 市價會波動",
    link: "https://partner.bybit.com/b/BYJUN",
    linkLabel: "🔗 前往 Bybit 買 USD1",
    code: "BYJUN",
    codeLabel: "Bybit 邀請碼"
  },
  {
    platform: "bitget-wallet",
    platformLabel: "Bitget Wallet",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "Bitget Wallet Card 實體卡邀請",
    desc: "申請加密貨幣實體簽帳卡，0 手續費 Google 匯率全球消費，邀請好友雙方都有獎勵",
    stats: [],
    benefits: [
      { icon: "💳", text: "綁定我的邀請碼申請卡 → 領 **5 USDT**" },
      { icon: "🎁", text: "每邀請 1 人開卡消費 → 你拿 **$5 USD** 返佣" },
      { icon: "🌍", text: "0 手續費 · 用 Google 匯率 · 全球通用" }
    ],
    deadline: "",
    junNote: "我的實體卡已經到手了！0 手續費刷卡真的很香 💳🌸",
    link: "https://web3.bitget.com",
    linkLabel: "🔗 申請 Bitget Wallet 卡",
    code: "Cqeue9",
    codeLabel: "邀請碼（綁定領 5 USDT）"
  },
  {
    platform: "bitget-wallet",
    platformLabel: "Bitget Wallet",
    status: "hot",
    statusLabel: "🔥 限時",
    title: "🚀 下一站・月球 合約抽獎",
    desc: "做合約交易賺「燃料」，發射火箭抽 USDC，飛得越高獎越大，單抽最高 $200",
    stats: [
      { label: "總獎池", value: "$26,200 USDC", color: "highlight" },
      { label: "單抽最高", value: "$200", color: "highlight" }
    ],
    benefits: [
      { icon: "⛽", text: "合約交易額 ≥ $1,000 → +1 燃料" },
      { icon: "⛽", text: "交易額每滿 $2,000 → +1 燃料" },
      { icon: "👥", text: "每邀請 1 位好友累計交易 ≥ $2,000 → +1 燃料（上限 10 次）" }
    ],
    deadline: "截止：Jun 30, 2026 23:59（UTC+8）",
    junNote: "需用邀請碼 Cqeue9 綁定才算。合約風險高，新手謹慎評估 🚀",
    link: "https://web3.bitget.com",
    linkLabel: "🔗 前往活動",
    code: "Cqeue9",
    codeLabel: "邀請碼"
  },
  {
    platform: "bitget-wallet",
    platformLabel: "Bitget Wallet Card × Stellar",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "✨ 奧德賽之旅 × XLM 大獎",
    desc: "持卡人專屬！完成任務累積積分，瓜分 $20 萬 XLM 獎勵",
    stats: [
      { label: "總獎池", value: "$200,000 XLM", color: "highlight" },
      { label: "社群追加", value: "$2,000 XLM", color: "highlight" }
    ],
    benefits: [
      { icon: "💳", text: "首次刷卡 ≥$1 → **+50 積分**" },
      { icon: "👥", text: "每邀請 1 人開卡 → **+200 積分**（1人+150 / 3人+750 / 10人+2000 階梯加碼）" },
      { icon: "🌐", text: "Stellar 網路做 ≥10 USDC Swap → **+10 積分**" }
    ],
    deadline: "截止：2026 年 7 月 7 日 15:59（UTC+8）",
    junNote: "我目前預估獎勵 $3，積分還在累積中！持卡的都應該去參加 🌸",
    link: "https://web3.bitget.com",
    linkLabel: "🔗 前往奧德賽之旅",
    code: "Cqeue9",
    codeLabel: "邀請碼"
  },
  {
    platform: "bitget",
    platformLabel: "Bitget",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "新用戶可贏取 $80 BTC 空投 + 1,500 USDT 盲盒",
    desc: "用我的邀請碼掃碼加入 Bitget，開啟 2026 財富之路，受邀新用戶享豐厚新人禮",
    stats: [],
    benefits: [
      { icon: "₿", text: "受邀用戶可贏取 **$80 BTC 空投**" },
      { icon: "🎁", text: "+ **1,500 USDT 盲盒**驚喜獎勵" }
    ],
    deadline: "",
    junNote: "Bitget 的 PoolX 質押空投我也有在用，目前 APR 72.29%，新人進來記得先去看看理財區 😌",
    link: "https://www.bitget.com/zh-TW/referral/register?from=referral&clacCode=MHEQPVWR",
    linkLabel: "🔗 前往 Bitget 註冊",
    code: "MHEQPVWR",
    codeLabel: "Bitget 邀請碼"
  },
  {
    platform: "gate",
    platformLabel: "Gate",
    status: "hot",
    statusLabel: "🔥 今天截止",
    title: "⚡ 瘋狂星期三 AI 儲存日",
    desc: "報名即送抽獎機會，100% 解鎖盲盒，獎品含 MU 股票、美光旗艦 SSD 及高息理財豪禮",
    stats: [
      { label: "USDT 理財", value: "最高 100% 年化", color: "highlight" },
      { label: "BTC/ETH/SOL 質押", value: "最高 16% 年化", color: "highlight" }
    ],
    benefits: [
      { icon: "🎰", text: "活動一：報名即抽盲盒，獎品含 MU 股票、美光 SSD、USDT" },
      { icon: "💰", text: "活動二：USDT 14 天定期理財 **6% 年化**；新用戶 3 天 **100% 年化**" },
      { icon: "₿", text: "活動三：質押 BTC/ETH/SOL → 最高享 **16% 年化**（SOL 0-1 顆 8.5%）" }
    ],
    deadline: "截止：2026/06/28 08:00（UTC）",
    junNote: "今天就截止了，要衝快點！不過盲盒任務不要短時間頻繁操作，避免觸發風控 💜",
    link: "https://www.gate.io",
    linkLabel: "🔗 前往 Gate 活動",
    code: "VFVFVW9AVG",
    codeLabel: "Gate 邀請碼"
  },
  {
    platform: "gate",
    platformLabel: "Gate",
    status: "hot",
    statusLabel: "🔥 剩 5 天",
    title: "SK海力士・美光・閃迪 合約空投",
    desc: "SKHYNIX / MU / SNDK 合約，新人第一筆交易領 $5，天天打卡最高 $35，交易達標最高 $200",
    stats: [
      { label: "單人最高", value: "$240", color: "highlight" },
      { label: "新人首筆", value: "$5", color: "highlight" }
    ],
    benefits: [
      { icon: "🎁", text: "福利一：合約新人首次交易（≥$5,000）→ 立領 **$5**" },
      { icon: "📅", text: "福利二：每日交易打卡 → 累積最高 **$35**" },
      { icon: "🏆", text: "福利三：交易量 ≥$10,000 → 瓜分 $30,000，單人最高 **$200**" }
    ],
    deadline: "截止：2026/07/03 17:00 · 先到先得",
    junNote: "適合本來就有在玩合約的！新人做第一筆就可以拿錢，合約風險高請自評 💜",
    link: "https://www.gate.io",
    linkLabel: "🔗 前往 Gate 活動",
    code: "VFVFVW9AVG",
    codeLabel: "Gate 邀請碼"
  },
  {
    platform: "mexc",
    platformLabel: "MEXC",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "立即邀請，你與好友各得 $120",
    desc: "邀請新用戶完成任務，你和好友各拿 $120，總獎池 $100,000 限時爭奪！",
    stats: [
      { label: "每人獎勵", value: "$120", color: "highlight" },
      { label: "獎池", value: "$100,000", color: "highlight" }
    ],
    benefits: [],
    deadline: "",
    junNote: "MEXC 的 Pre-IPO 活動頻率很高，SPAX(PRE) 我自己有跟過 🌸",
    link: "https://www.mexc.com/register?inviteCode=3uXZE",
    linkLabel: "🔗 前往 MEXC 註冊",
    code: "3uXZE",
    codeLabel: "MEXC 邀請碼"
  },
  {
    platform: "bingx",
    platformLabel: "BingX",
    status: "ongoing",
    statusLabel: "✅ 長期",
    title: "BingX 首創「保證價格」交易",
    desc: "無懼市場波動，暢享 0 滑點交易，新人用邀請碼享手續費優惠",
    stats: [],
    benefits: [],
    deadline: "",
    junNote: "0 滑點這個特色蠻特別的，做合約的可以注意一下 💚",
    link: "https://bingx.com/invite/22KLUM",
    linkLabel: "🔗 前往 BingX",
    code: "22KLUM",
    codeLabel: "BingX 邀請碼"
  }
];
