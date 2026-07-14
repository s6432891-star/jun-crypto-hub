/* =========================================================================
   Jun 幣圈活動整理 — 資料檔
   -------------------------------------------------------------------------
   這個檔案是「整個小App的內容來源」。
   你不用手改這裡，用 admin.html 後台填表 → 下載新的 data.js 蓋掉這個檔就好。
   （如果你想手動改也可以，每一個 { ... } 就是一張卡片。）

   小語法：
   - benefits 好處清單裡，想把金額/重點變粉紅色，用 **兩個星號** 包起來。
   - junNote（Jun 說）想換行，直接按 Enter 換行即可。
   最後更新：2026-07-09
   ========================================================================= */

window.SITE = {
  emoji: "",
  name: "Jun 的幣圈活動整理 🌸",
  tagline: "幫小資族整理幣圈活動與空投<br>先看懂規則，再決定要不要研究",
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
    platformLabel: "Bybit · USD1 超級賽季",
    status: "hot",
    statusLabel: "🔥 限時",
    title: "USD1 超級賽季：最高抽 1,000,000 WLFI",
    desc: "先報名活動後交易 USD1 現貨或衍生品，完成交易量任務可拿抽獎次數與 WLFI 空投階梯獎勵",
    stats: [
      { label: "活動截止", value: "7/31 10:00 UTC", color: "" },
      { label: "轉盤大獎", value: "1,000,000 WLFI", color: "highlight" },
      { label: "最高抽獎", value: "50 次", color: "highlight" }
    ],
    benefits: [
      { icon: "🎯", text: "轉盤顯示可抽 **25 / 50 / 200 / 1000 WLFI**，最高大獎為 **1,000,000 WLFI**；獎勵有限、先到先得" },
      { icon: "🎁", text: "抽獎任務：USD1 現貨交易量達 **US$10,000** 可拿 1 次抽獎；截圖顯示每次完成任務皆可獲得獎勵，最多 **50 次**" },
      { icon: "🪂", text: "WLFI 空投階梯：USD1 現貨或衍生品交易量達 **US$100,000 → 200 WLFI**、**US$500,000 → 400 WLFI**、**US$2,500,000 → 800 WLFI**" },
      { icon: "✅", text: "需先點活動頁「立即報名」，並完成 1 級個人身分認證或企業認證；機構 / Pro 用戶不符合資格" },
      { icon: "⏳", text: "獎勵預計活動結束後 **30 個工作日**內發到福利中心，且需在 30 天內領取" },
      { icon: "⚠️", text: "來自服務受限制國家 / 地區的用戶無法參與；Bybit 可依規則調整活動與取消惡意套利資格" }
    ],
    deadline: "截止：2026/07/31 10:00（UTC）",
    junNote: "這個是 Bybit USD1 超級賽季，重點是交易 USD1 來拿 WLFI 轉盤抽獎與空投階梯獎勵。適合本來就有在交易 USD1 的人順手看；新手不要為了抽獎硬刷交易量，尤其衍生品交易量風險更高。\n\n⚠️ WLFI 價格會波動，交易量任務也有成本與風險；最高獎勵不代表人人拿得到，請先確認報名、KYC、地區資格與活動規則，只用自己能承受的資金。",
    link: "https://partner.bybit.com/b/BYJUN",
    linkLabel: "🔗 前往 Bybit USD1 活動",
    code: "BYJUN",
    codeLabel: "Bybit 邀請碼"
  },
  {
    platform: "bybit",
    platformLabel: "Bybit · USD1 理財",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "持有 USD1，賺 WLFI 收益",
    desc: "持有 USD1 穩定幣可自動獲得 WLFI 收益，無需鎖倉、無需手動申購，適合想小額觀察 USD1 的人",
    stats: [
      { label: "預估年化", value: "7.29%", color: "highlight" },
      { label: "最低持有", value: "≥ 1 USD1", color: "" },
      { label: "結算", value: "每日自動", color: "" }
    ],
    benefits: [
      { icon: "1️⃣", text: "完成身分驗證（1 級即可）" },
      { icon: "2️⃣", text: "帳戶持有 ≥ 1 USD1，不用鎖倉、不用申購" },
      { icon: "3️⃣", text: "每天自動獲得 WLFI 收益，通常隔天發放" },
      { icon: "⚠️", text: "APR 為預估值且可能浮動，WLFI 價格也會波動，不是保證收益" }
    ],
    deadline: "",
    junNote: "對，原本這個 USD1 升息 / 持有收益活動也還在進行，所以我把它獨立保留成一張卡。它跟 USD1 超級賽季不一樣：這張偏懶人持有收益，超級賽季偏交易量任務與抽獎。\n\n⚠️ 穩定幣和 WLFI 都有市場與平台風險，先小額研究，不要為了收益重倉。",
    link: "https://partner.bybit.com/b/BYJUN",
    linkLabel: "🔗 前往 Bybit 查看 USD1 理財",
    code: "BYJUN",
    codeLabel: "Bybit 邀請碼"
  },
  {
    platform: "bybit",
    platformLabel: "Bybit · TradFi 入金抽獎",
    status: "hot",
    statusLabel: "🔥 限時",
    title: "入金 TradFi，必得獎勵",
    desc: "活動期間完成 TradFi 淨充值任務可拿抽獎次數，100% 中獎，最高可抽 1 XAUT",
    stats: [
      { label: "活動時間", value: "6/3–7/31", color: "" },
      { label: "最高獎勵", value: "1 XAUT", color: "highlight" },
      { label: "中獎率", value: "100%", color: "highlight" }
    ],
    benefits: [
      { icon: "🎁", text: "獎項含 **10 / 20 / 50 / 100 / 500 / 1000 USDT TradFi 獎勵金**" },
      { icon: "🏆", text: "大獎含 **iPhone 17 Pro Max** 與 **1 XAUT**" },
      { icon: "💰", text: "7 天內 TradFi 淨充值 ≥500 / ≥1,000 / ≥5,000 USDT，可各拿 1 次抽獎機會" },
      { icon: "⚠️", text: "需先點立即參與並完成 1 級 KYC；獎品數量有限、先到先得" }
    ],
    deadline: "截止：2026/07/31 10:00（UTC）",
    junNote: "這個是 Bybit TradFi 入金抽獎活動，適合原本就要把資金放進 TradFi 的人順手參加。任務看的是活動期間 7 天內淨充值，不是叫新手為了抽獎硬入金；活動僅開放特定地區，且獎品數量有限，先確認資格再做。",
    link: "https://partner.bybit.com/b/BYJUN",
    linkLabel: "🔗 前往 Bybit TradFi 活動",
    code: "BYJUN",
    codeLabel: "Bybit 邀請碼"
  },
  {
    platform: "bybit",
    platformLabel: "Bybit · 星艦啟航邀請戰",
    status: "hot",
    statusLabel: "🔥 限時",
    title: "🚀 星艦啟航：太空邀約戰",
    desc: "邀請好友登上 Bybit 星艦，完成註冊與入金任務可解鎖抽獎、首邀獎勵、推薦返現與排行榜獎金",
    stats: [
      { label: "單人最高", value: "$4,850", color: "highlight" },
      { label: "排行榜獎池", value: "$25,000", color: "highlight" },
      { label: "好友門檻", value: "14 天內儲值 ≥ $100", color: "" }
    ],
    benefits: [
      { icon: "🛸", text: "星際里程碑：邀請 **3 / 5 / 7 位**符合條件好友，可解鎖 **1 / 2 / 3 次**星艦補給抽獎機會" },
      { icon: "🎁", text: "幸運抽獎獎項含 **1000 / 500 / 200 / 100 / 50 USDT** 空投倉位、手續費抵扣券與體驗金等" },
      { icon: "🧊", text: "首次邀請破冰：從未邀請過好友的用戶，首位符合條件好友達標後可拿 **6.12 USDT**（名額有限）" },
      { icon: "👥", text: "受邀好友完成新手任務最高可拿 **$100**，雙方另可依規則瓜分儲值返現與推薦返佣" },
      { icon: "🏆", text: "太空精英排行榜：前 **200 名**依有效好友數瓜分獎池，榜首最高顯示 **$1,750**" },
      { icon: "⚠️", text: "SPCX / 合約倉位空投不等於現金；0 手續費交易對可能不計入任務，獎勵需通過平台風控審核" }
    ],
    deadline: "活動頁倒數中：截圖顯示約剩 6 天，實際截止請以 Bybit 活動頁為準",
    junNote: "這個是 Bybit 的邀請好友活動，包裝成太空任務、里程碑、抽獎和排行榜。適合本來就有朋友想開 Bybit、而且能清楚說明風險的人；不建議為了衝排行榜亂拉人，更不要鼓勵小白為了獎勵去硬入金或硬交易合約。\n\n⚠️ 部分獎勵是合約倉位 / 抵扣券 / 體驗金，不一定等於可直接領出的現金；實際資格、地區限制、KYC、發放時間與風控審核都以 Bybit 官方規則為準。",
    link: "https://partner.bybit.com/b/BYJUN",
    linkLabel: "🔗 前往 Bybit 星艦活動",
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
    platform: "bitget",
    platformLabel: "Bitget · 盛夏打卡週",
    status: "hot",
    statusLabel: "🔥 限時",
    title: "盛夏打卡週：七日全勤最高 200 USDT",
    desc: "活動期間每日完成合約交易量任務可領 USDT，每日打卡與高門檻階梯任務都以平台規則計算",
    stats: [
      { label: "活動時間", value: "2026/07/06–2026/07/13 11:00", color: "" },
      { label: "每日獎勵", value: "1 / 3 USDT", color: "highlight" },
      { label: "最高獎勵", value: "200 USDT", color: "highlight" }
    ],
    benefits: [
      { icon: "✅", text: "每日輕鬆打卡：合約交易額 ≥ **10,000 USDT**，可領 **1 USDT**；每日額度有限，00:00（UTC+8）更新" },
      { icon: "🔥", text: "每日進階打卡：合約交易額 ≥ **100,000 USDT**，可領 **3 USDT**；低門檻與中門檻獎勵可疊加" },
      { icon: "🏆", text: "高門檻階梯任務看活動期間 **7 天累計合約交易量**，截圖可見 300K / 800K / 1.00M+ / 3.00M / 4.00M+ 等門檻" },
      { icon: "🎯", text: "第 7 階獎勵 **82 USDT**需同時達成：累計交易量 ≥ **10,000,000 USDT**，且連續 7 天每日合約交易量均 ≥ **100,000 USDT**" },
      { icon: "⚠️", text: "活動不統計 **0 手續費 / 穩定幣 / CFD 幣對**交易量；子帳號交易量不計入，同 IP / 同設備視為同一用戶" },
      { icon: "🚫", text: "作幣、刷量、對沖或其他異常交易，Bitget 可取消資格並收回獎勵" }
    ],
    deadline: "截止：2026/07/13 11:00（UTC+8）",
    junNote: "這個是 Bitget 合約交易打卡活動，重點是每天合約交易量達標才有 USDT 獎勵。小資新手可以先看懂規則就好，不要為了 1U / 3U 或階梯獎勵硬刷合約交易量；合約本身風險高，最高 200U 也不代表人人拿得到。\n\n⚠️ 如果你本來就有在 Bitget 做合約，可以順手看看；如果只是為了獎勵才想交易，建議先停一下，只用自己能承受的小錢並自行評估風險。部分連結可能含邀請碼 / 分潤。",
    link: "https://www.bitget.com/zh-TW/referral/register?from=referral&clacCode=V0K17SD8",
    linkLabel: "🔗 前往 Bitget 活動",
    code: "V0K17SD8",
    codeLabel: "Bitget 邀請碼"
  },
  {
    platform: "bitget",
    platformLabel: "Bitget · 新用戶股票代幣",
    status: "hot",
    statusLabel: "🔥 限時",
    title: "新用戶直接領 20U 股票，最高 200U",
    desc: "繁體中文區 7/6 後註冊並完成 KYC 的新用戶，完成入金與合約任務拿積分，兌換 USDT 或股票代幣",
    stats: [
      { label: "直接領", value: "20 USDT 等值股票", color: "highlight" },
      { label: "最高獎勵", value: "200 USDT 等值", color: "highlight" },
      { label: "活動時間", value: "2026/07/13 11:00–2026/07/27 11:00", color: "" }
    ],
    benefits: [
      { icon: "✅", text: "資格：繁體中文區 **7/6 後註冊的新用戶**，需完成 **KYC**" },
      { icon: "🎁", text: "完成 KYC、累計入金 ≥ **200 USDT** 與指定合約交易任務，可取得首波 **20 積分**，兌換 20 USDT 等值股票" },
      { icon: "📈", text: "合約交易量達標可再拿積分，頁面顯示最高 **180 積分**；可見門檻包含 **50,000 / 200,000 / 600,000 / 1,000,000 / 3,000,000 USDT**" },
      { icon: "🧾", text: "10 積分可換 10 USDT 等值獎勵；可選 **USDT、rSPY、rQQQ、rNVDA、rTSM、rMU、rAMD、rQCOM、rINTC、rSNDK、rSKHY、rTSLA、rMeta、rGOOGL、rAAPL、rAVGO**" },
      { icon: "📌", text: "USDT 每人最多兌換 2 次、共 20 USDT；股票代幣支援碎股兌換且無兌換次數限制，獎勵通常於 **7 個工作日內**到帳" },
      { icon: "⚠️", text: "不統計 **0 手續費 / 穩定幣 / CFD 幣對**交易量；子帳號不能報名且交易量不計入，API 用戶可正常報名" },
      { icon: "🚫", text: "禁止快速出入金、個人划轉刷量、對敲、批量註冊等行為；同 IP 多帳號可能被取消資格並追回獎勵" }
    ],
    deadline: "截止：2026/07/27 11:00（UTC+8）",
    junNote: "這檔是 7/13 開始的新版 Bitget 新戶活動，首波任務可換 20U 等值股票；後續要拿到最高 200U，仍需累積很高的合約交易量。新手不要為了股票獎勵硬刷合約交易量，合約可能虧損甚至爆倉，最高獎勵也不代表人人拿得到。\n\n⚠️ 股票代幣仍有市場波動、平台規則與地區資格風險；請先確認 KYC、任務門檻及反作弊規則。部分連結含邀請碼 / 分潤，不構成投資建議。",
    link: "https://www.bitget.com/events/activities/new/e4bfb459098a5dde94a9ad70ec9e06f5?color=dark&languageType=5&clacCode=MHEQPVWR",
    linkLabel: "🔗 前往 Bitget 新戶活動",
    code: "MHEQPVWR",
    codeLabel: "Bitget 邀請碼"
  },
  {
    platform: "bitget",
    platformLabel: "Bitget · 足球拼圖活動",
    status: "hot",
    statusLabel: "🔥 限時",
    title: "⚽ 九宮格射門：集拼圖拿 2,026 USDT",
    desc: "完成合約交易量任務拿拼圖碎片，集齊九宮格可換 2,026 USDT；碎片也能換抽獎機會，另有世界冠軍預測好禮",
    stats: [
      { label: "完整拼圖", value: "2,026 USDT", color: "highlight" },
      { label: "單次抽獎", value: "1–666 USDT", color: "highlight" },
      { label: "活動時間", value: "2026/07/13 11:00–2026/07/20 11:00", color: "" }
    ],
    benefits: [
      { icon: "🧩", text: "完成指定合約交易量任務，最多取得 **13 個拼圖碎片**；碎片隨機發放且可能重複" },
      { icon: "🎯", text: "集齊 9 個不同碎片可合成完整九宮格，領取 **2,026 USDT**；每人只能合成一次" },
      { icon: "🎰", text: "任意 1 個碎片可換 1 次抽獎；獎池為 **1 / 5 / 10 / 20 / 66 / 99 / 168 / 666 USDT**" },
      { icon: "🔄", text: "若不兌換 2,026 USDT 大禮包，最多可換 13 次抽獎；若先兌換大禮包，剩餘碎片最多可換 4 次" },
      { icon: "🎁", text: "可與好友互贈碎片，活動期間贈送與接收合計上限 **20 次**，不可贈送給自己；活動結束後不可再贈送或撤回" },
      { icon: "⚽", text: "完成 KYC 的繁體中文區老用戶可參加；另可填表預測世界冠軍，抽 Bitget 足球觀賽周邊禮盒" },
      { icon: "📌", text: "代幣獎勵通常於 **7 個工作日內**到帳；不統計 CFD、0 手續費、穩定幣與美股交易量，子帳號不能報名且交易量不計入" },
      { icon: "🚫", text: "禁止快速出入金、個人划轉刷量、對敲與批量註冊；同 IP 異常帳號可能取消資格，平台可追回獎勵" }
    ],
    deadline: "截止：2026/07/20 11:00（UTC+8）",
    junNote: "這個活動的 2,026U 大獎要先靠合約交易量拿碎片，而且碎片可能重複，不是完成一次就能拿滿。新手不要為了獎勵硬刷合約交易量；合約的虧損或爆倉金額，很可能遠高於抽獎獎勵。\n\n⚠️ 1～666U 是抽獎獎池範圍，2,026U 需集齊九種碎片才可兌換，最高不代表人人拿得到。部分連結含邀請碼 / 分潤，不構成投資建議。",
    link: "https://www.bitget.com/zh-TC/events/activities/new/d476af1609c9567a9eb6c1a70a448c3f?color=dark&clacCode=MHEQPVWR",
    linkLabel: "🔗 前往 Bitget 足球拼圖活動",
    code: "MHEQPVWR",
    codeLabel: "Bitget 邀請碼"
  },
  {
    platform: "gate",
    platformLabel: "Gate · USD1 理財",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "持有 USD1 即享 15% 預估年化",
    desc: "在 Gate 資產帳戶持有 USD1，系統每小時快照計算收益，次日發放到資產帳戶",
    stats: [
      { label: "預估年化", value: "15%", color: "highlight" },
      { label: "最低持有", value: "≥ 1 USD1", color: "" },
      { label: "快照", value: "每日 24 次", color: "" }
    ],
    benefits: [
      { icon: "💵", text: "持有 USD1 即可計算收益，**無需申購、無需鎖倉**" },
      { icon: "⏱️", text: "系統每小時快照，每天 24 次，收益次日發放" },
      { icon: "📌", text: "APR 約每日 14:00（UTC+8）更新，顯示為預估值" },
      { icon: "⚠️", text: "USD1 仍有穩定幣、監管、智能合約與市場波動風險" }
    ],
    deadline: "",
    junNote: "這個比較像懶人型穩定幣收益，只要在 Gate 帳戶持有 USD1 就會計算，不用鎖倉。但 15% 是預估年化，不是保證收益，USD1 本身也有穩定幣、監管和市場波動風險，適合先小額研究。",
    link: "https://www.gate.io",
    linkLabel: "🔗 前往 Gate 查看 USD1",
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
    platform: "mexc",
    platformLabel: "MEXC · 足球盛宴",
    status: "hot",
    statusLabel: "🔥 限時",
    title: "⚽ 足球盛宴 8,000,000 USDT 獎池",
    desc: "報名參加足球競猜與合約積分賽，每日可免費競猜，交易任務可解鎖更高積分與獎池",
    stats: [
      { label: "總獎池", value: "8,000,000 USDT", color: "highlight" },
      { label: "最高獎勵", value: "2,375 USDT", color: "highlight" },
      { label: "活動時間", value: "6/11–7/21", color: "" }
    ],
    benefits: [
      { icon: "⚽", text: "每日可免費預測足球賽，猜對可拿基礎積分" },
      { icon: "📈", text: "合約交易量達標可抽積分加成，解鎖更高獎池" },
      { icon: "👥", text: "邀請好友報名活動，也可抽積分加成" },
      { icon: "⚠️", text: "合約任務風險高，新手不要為了獎勵硬刷交易量" }
    ],
    deadline: "截止：2026/07/21 15:00（UTC+8）",
    junNote: "這個是 MEXC 足球盛宴活動，免費競猜可以玩，但後面積分加成跟獎池解鎖會牽涉合約交易量。新手不要為了獎勵硬刷合約，想參加可以先報名、玩免費競猜，合約交易請自己評估風險。",
    link: "https://www.mexc.com/register?inviteCode=3uXZE",
    linkLabel: "🔗 前往 MEXC 足球盛宴",
    code: "3uXZE",
    codeLabel: "MEXC 邀請碼"
  },
  {
    platform: "mexc",
    platformLabel: "MEXC Card",
    status: "ongoing",
    statusLabel: "✅ 進行中",
    title: "MEXC Card｜最高 10% 返現 + 7% APR",
    desc: "支援 Apple Pay / Google Pay 的加密貨幣消費卡，0 USD 開卡，全球消費並可享返現與卡片理財收益",
    stats: [
      { label: "開卡費", value: "0 USD", color: "highlight" },
      { label: "最高返現", value: "10%", color: "highlight" },
      { label: "最高 APR", value: "7%", color: "highlight" }
    ],
    benefits: [
      { icon: "💳", text: "完成高級身分認證後可線上申請，支援 Apple Pay / Google Pay" },
      { icon: "🌍", text: "可用 USDT 充值到法幣帳戶，全球消費使用" },
      { icon: "🎁", text: "邀請好友開卡：邀請人 **20 USDT**，被邀請人 **10 USDT**" },
      { icon: "⚠️", text: "最高 10% 返現依等級計算，APR 會浮動，不代表人人都拿得到" }
    ],
    deadline: "",
    junNote: "MEXC Card 比較像加密貨幣簽帳卡，可以綁 Apple Pay / Google Pay，主打最高 10% 返現和最高 7% APR。重點是返現跟等級有關，不是每個人都一定拿 10%；申請前要先完成身分認證，並確認自己所在地區是否支援。",
    link: "https://www.mexc.com/register?inviteCode=3uXZE",
    linkLabel: "🔗 前往 MEXC Card",
    code: "3uXZE",
    codeLabel: "MEXC 邀請碼"
  },
  {
    platform: "bingx",
    platformLabel: "BingX · 世足競猜",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "⚽ 世足競猜開打！預測正確贏 50U 倉位券",
    desc: "免費報名預測足球賽事，單場預測正確可領 50 USDT 倉位券；任務能量可用來抽 USDT 獎勵",
    stats: [
      { label: "預測獎勵", value: "50 USDT 倉位券", color: "highlight" },
      { label: "抽獎門檻", value: "5 能量 / 次", color: "" },
      { label: "任務", value: "合約交易 / 事件合約", color: "" }
    ],
    benefits: [
      { icon: "⚽", text: "免費報名預測，預測正確隔日發放 **50 USDT 倉位券**" },
      { icon: "🎁", text: "每 5 個能量可抽獎 1 次，獎池含 USDT 獎勵" },
      { icon: "📌", text: "投票須完成 KYC；提交後不可更改預測方向" },
      { icon: "⚠️", text: "後續能量任務牽涉合約交易，新手不要為抽獎硬刷交易量" }
    ],
    deadline: "每場比賽開始前截止投票，逾時不接受預測",
    junNote: "這個比較像足球預測 + 合約任務活動。免費報名可以先玩預測，但要注意後面的能量任務會牽涉合約交易，新手不要為了抽獎硬刷交易量，預測玩玩可以，合約請自己評估風險。",
    link: "https://bingx.com/invite/22KLUM",
    linkLabel: "🔗 前往 BingX 活動",
    code: "22KLUM",
    codeLabel: "BingX 邀請碼"
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
