/* =========================================================================
   Jun 幣圈活動整理 — 資料檔
   -------------------------------------------------------------------------
   這個檔案是「整個小App的內容來源」。
   你不用手改這裡，用 admin.html 後台填表 → 下載新的 data.js 蓋掉這個檔就好。
   （如果你想手動改也可以，每一個 { ... } 就是一張卡片。）

   小語法：
   - benefits 好處清單裡，想把金額/重點變粉紅色，用 **兩個星號** 包起來。
   - junNote（Jun 說）想換行，直接按 Enter 換行即可。
   最後更新：2026-07-23
   本次更新：
   - 更新 Bybit 現貨競技場與 BingX 財報季活動卡片
   - 新增 Bitget 網格機器人嘉年華卡片
   - 移除 1 張已過期卡片：MEXC 足球盛宴（7/21 截止）
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
    platform: "bybit",
    platformLabel: "Bybit · 現貨競技場",
    status: "hot",
    statusLabel: "🔥 限時",
    title: "現貨競技場：200,000 USDT 獎池衝刺中",
    desc: "完成報名與現貨交易量門檻後可參加排行榜，另有現貨網格抽獎機會；請先確認資格與截止時間",
    stats: [
      { label: "總獎池", value: "200,000 USDT", color: "highlight" },
      { label: "排行榜獎池", value: "100,000 USDT", color: "highlight" },
      { label: "活動時間", value: "7/9–7/23 10:00 UTC", color: "" }
    ],
    benefits: [
      { icon: "📈", text: "現貨交易量累積達 **5,000 USDT** 才符合排行榜資格，前 **100 名**依規則瓜分 100,000 USDT" },
      { icon: "🪙", text: "適用幣對包含 **BTC / ETH / XRP / SOL / HYPE / XAUT** 對 USDT" },
      { icon: "🎰", text: "現貨網格單日交易量 ≥1,000 USDT 可拿 1 次抽獎機會，累積 ≥5,000 USDT 可拿 2 次" },
      { icon: "✅", text: "需先報名並完成 1 級身分認證；機器人交易量與 0 手續費幣對是否計入，請以活動頁規則為準" }
    ],
    deadline: "截止：2026/07/23 10:00（UTC）；台北時間 18:00",
    junNote: "這場比較適合本來就有在 Bybit 做現貨交易的人順手研究，排行榜資格仍要達到交易量門檻。不要為了衝榜硬刷超出自己風險承受度的量，也不要只看到總獎池就忽略實際排名與分配規則。\n\n⚠️ 投資有風險，只投閒置資金；部分連結可能含邀請碼 / 分潤。",
    link: "https://partner.bybit.com/b/BYJUN",
    linkLabel: "🔗 前往 Bybit 現貨競技場",
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
    platformLabel: "Bitget · 網格機器人嘉年華",
    status: "ongoing",
    statusLabel: "✅ 進行中",
    title: "網格新手禮：首單最高 200 USDT，再分 10 萬獎池",
    desc: "首次完成符合條件的網格機器人交易，可依活動規則領取迎新禮，另有 100,000 USDT 加碼獎池",
    stats: [
      { label: "新手迎新禮", value: "最高 200 USDT", color: "highlight" },
      { label: "加碼獎池", value: "100,000 USDT", color: "highlight" }
    ],
    benefits: [
      { icon: "🤖", text: "第一次開現貨或合約網格單，仍須完成官方指定的交易額與資格條件" },
      { icon: "🎁", text: "另有 **100,000 USDT** 加碼獎池，實際分配與名額依活動規則為準" },
      { icon: "📊", text: "網格會依設定自動分批買賣，但行情單邊波動時仍可能產生虧損" },
      { icon: "⚠️", text: "最高獎勵不代表人人拿得到；網格交易仍有市場與參數風險，**非保證獲利**" }
    ],
    deadline: "活動期限與剩餘名額請以 Bitget 活動頁為準",
    junNote: "這類活動比較適合本來就想研究網格的人，不要只為了迎新禮就直接開單。先看懂現貨網格和合約網格的差別，再用小額測試；參數設得不合適或遇到單邊行情，一樣可能虧損。\n\n⚠️ 純分享，不構成投資建議；部分連結可能含邀請碼 / 分潤。",
    link: "https://www.bitget.com/zh-TW/referral/register?from=referral&clacCode=V0K17SD8",
    linkLabel: "🔗 前往 Bitget 查看網格活動",
    code: "V0K17SD8",
    codeLabel: "Bitget 邀請碼"
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
    platformLabel: "Bitget · PoolX 質押空投",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "🔒 PoolX 鎖 ETH 領 62 萬顆 NES",
    desc: "Bitget PoolX 新上架 Nesa(NES)，鎖 ETH 進去就能瓜分 62 萬顆 NES 空投，操作簡單",
    stats: [
      { label: "空投總量", value: "620,000 NES", color: "highlight" },
      { label: "質押幣種", value: "ETH", color: "" },
      { label: "額度", value: "先到先得", color: "" }
    ],
    benefits: [
      { icon: "🔒", text: "App → 理財 → PoolX → 找到 NES → 鎖倉 ETH，即可參加瓜分 **620,000 NES**" },
      { icon: "⏳", text: "官方未公告明確截止日期，屬於**額度制**，額度發完就結束" },
      { icon: "💡", text: "不用手動操作交易，鎖倉期間躺著等發放" },
      { icon: "⚠️", text: "鎖倉期間資金無法動用，參加前建議進 App 確認目前倒數與規則細節" }
    ],
    deadline: "",
    junNote: "這種鎖倉領空投的活動我一直很愛，操作單純。因為官方沒寫死截止日，我會建議想參加的人自己進 App 確認一下目前額度和倒數，不要拖太久 🌸\n\n⚠️ 純分享，投資請自行評估風險，鎖倉期間資金無法動用。",
    link: "https://www.bitget.com/zh-TW/referral/register?from=referral&clacCode=V0K17SD8",
    linkLabel: "🔗 前往 Bitget PoolX",
    code: "V0K17SD8",
    codeLabel: "Bitget 邀請碼"
  },
  {
    platform: "bitget",
    platformLabel: "Bitget · PoolX 質押空投",
    status: "hot",
    statusLabel: "🔥 限時",
    title: "🎮 PoolX 鎖 BTC 領 186.6 萬顆 ESPORTS",
    desc: "Bitget PoolX 上線 ESPORTS 質押池，依活動規則鎖倉 BTC 分享空投；全站額度有限，額滿可能提前結束",
    stats: [
      { label: "空投總量", value: "1,866,000 ESPORTS", color: "highlight" },
      { label: "質押幣種", value: "BTC", color: "" },
      { label: "全站上限", value: "20 BTC", color: "" }
    ],
    benefits: [
      { icon: "🔒", text: "依 PoolX 活動規則鎖倉 **BTC**，分享 **1,866,000 ESPORTS** 空投池" },
      { icon: "⏳", text: "活動時間為 **7/21 16:00–7/28 16:00（UTC+8）**；全站上限 20 BTC，額滿可能提前結束" },
      { icon: "📍", text: "操作前請在 Bitget App → 理財 → PoolX 確認目前額度、倒數、個人上限與發放規則" },
      { icon: "⚠️", text: "ESPORTS 上市後價格可能波動；鎖倉期間資金無法自由運用，空投數量與價值都不是保證收益" }
    ],
    deadline: "截止：2026/07/28 16:00（UTC+8；額滿可能提前結束）",
    junNote: "這張適合本來就持有 BTC、也看得懂 PoolX 規則的人順手研究。不要只看到空投總量就重倉；實際分到多少會受總質押量與官方規則影響。\n\n⚠️ ESPORTS 價格會波動，鎖倉期間資金無法自由運用；請先確認活動仍有額度，只用自己能承受的資金。部分連結含邀請碼 / 分潤。",
    link: "https://www.bitget.com/zh-TW/referral/register?from=referral&clacCode=V0K17SD8",
    linkLabel: "🔗 前往 Bitget PoolX 查看",
    code: "V0K17SD8",
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
    platform: "gate",
    platformLabel: "Gate · Launchpool + HODLer",
    status: "ongoing",
    statusLabel: "✅ 長期",
    title: "🎁 躺著領空投：Launchpool + HODLer Airdrop",
    desc: "帳戶持有 GT 就自動有資格參加 HODLer Airdrop，Launchpool 質押主流幣也能拿新項目代幣",
    stats: [
      { label: "7月 Launchpool", value: "約 280 萬美元空投", color: "highlight" },
      { label: "7月 HODLer", value: "約 52 萬美元空投", color: "highlight" },
      { label: "參與門檻", value: "持有 ≥ 1 GT", color: "" }
    ],
    benefits: [
      { icon: "💎", text: "只要帳戶持有 **1 顆 GT** 以上，就自動有資格參加 HODLer Airdrop，不用鎖倉、不用手動申購" },
      { icon: "🌊", text: "Launchpool 則是質押主流幣（如 USDT、GT）快速挖新項目代幣，隨存隨取" },
      { icon: "📊", text: "光是 7 月，Launchpool 加 HODLer 兩者合計已發出將近 **330 萬美元**空投" },
      { icon: "⚠️", text: "這是長期機制、沒有明確截止日，但新項目代幣本身漲跌波動大" }
    ],
    deadline: "",
    junNote: "這個真的很適合不想每天盯盤的人，設定好放著就好，不用急著今天做 🌸\n\n⚠️ 純分享，投資有風險，GT 與新項目代幣都有價格波動，自行評估。",
    link: "https://www.gate.io",
    linkLabel: "🔗 前往 Gate Launchpool / HODLer",
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
    platform: "mexc",
    platformLabel: "MEXC · Pre-IPO 期貨",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "🚀 Pre-IPO 期貨新標的，限時 0 手續費",
    desc: "MEXC 陸續上架多檔 Pre-IPO 永續期貨新標的，上架初期通常限時 0 手續費，SpaceX 系列已破 71 億 USDT 成交量",
    stats: [
      { label: "SpaceX 系列累積量", value: "71 億 USDT", color: "highlight" },
      { label: "商品類型", value: "Pre-IPO 永續期貨", color: "" },
      { label: "手續費", value: "新標的限時 0 手續費", color: "highlight" }
    ],
    benefits: [
      { icon: "📈", text: "在公司真的 IPO 前，先用合約方式交易其價格預期，波動通常不小" },
      { icon: "💸", text: "新標的上架初期常見**限時 0 手續費**，等於少一筆交易成本" },
      { icon: "📊", text: "SpaceX 系列已累積超過 **71 億 USDT** 成交量，熱度持續" },
      { icon: "⚠️", text: "屬於合約商品、有槓桿風險，跟現貨不同，新手先搞懂規則再進場" }
    ],
    deadline: "",
    junNote: "這類商品波動通常不小，玩之前一定要先搞懂它跟現貨的差異，不是穩賺不賠的東西 🌸\n\n⚠️ 合約槓桿風險高，新手不要為了活動硬碰，只拿閒置資金，自行評估。",
    link: "https://www.mexc.com/register?inviteCode=3uXZE",
    linkLabel: "🔗 前往 MEXC Pre-IPO 期貨",
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
  },
  {
    platform: "bingx",
    platformLabel: "BingX · 財報季交易嘉年華",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "財報季來了：100萬 USDT 獎池陪你追財報",
    desc: "全球資本盛典第四彈，圍繞多家國際公司財報日安排股票交易任務，活動頁會持續新增標的",
    stats: [
      { label: "總獎池", value: "1,000,000 USDT", color: "highlight" },
      { label: "活動時間", value: "7/9–7/29", color: "" },
      { label: "系列", value: "全球資本盛典第 4 彈", color: "" }
    ],
    benefits: [
      { icon: "📊", text: "活動串聯多家國際公司財報公布日，交易對應標的後才可能符合指定任務" },
      { icon: "🆕", text: "新用戶首次下單可能另有加碼，實際資格、門檻與名額以活動頁為準" },
      { icon: "📅", text: "活動期間會持續新增財報標的，參加前要重新確認當週清單" },
      { icon: "⚠️", text: "股票與股票代幣都有市場波動風險；**實際任務門檻與獎勵請以 BingX 活動頁為準**" }
    ],
    deadline: "截止：2026/07/29",
    junNote: "這張比較適合本來就在關注美股財報、也看得懂股票代幣風險的人順手研究。不要只看到 100 萬獎池就急著下單，先確認自己能不能參加、當週標的是什麼，以及交易成本是否划算。\n\n⚠️ 純分享，投資請自行評估風險；部分連結可能含邀請碼 / 分潤。",
    link: "https://bingx.com/invite/22KLUM",
    linkLabel: "🔗 前往 BingX 財報季活動",
    code: "22KLUM",
    codeLabel: "BingX 邀請碼"
  },
  {
    platform: "general",
    platformLabel: "OKX · 純資訊分享",
    status: "hot",
    statusLabel: "🔥 新戶限定",
    title: "🧠 記憶體股網格新戶活動：最高 1,000 USDT 等值倉位",
    desc: "符合資格且尚未完成首筆交易的新用戶，依淨入金與持有條件，可能取得 Micron／SanDisk 合約網格倉位",
    stats: [
      { label: "最高標示", value: "1,000 USDT 等值倉位", color: "highlight" },
      { label: "活動時間", value: "7/2–7/31 23:59", color: "" },
      { label: "商品類型", value: "合約網格（含槓桿）", color: "" }
    ],
    benefits: [
      { icon: "1️⃣", text: "活動資料標示：符合資格的新戶淨入金滿 **100 USDT 並維持 1 天**，可能取得 500 USDT 等值倉位" },
      { icon: "2️⃣", text: "淨入金滿 **500 USDT 並維持 3 天**，可能再加碼 500 USDT；實際資格、名額與發放以登入後官方活動頁為準" },
      { icon: "⚠️", text: "這是合約網格的**倉位價值，不是現金**；倉位價值通常是保證金乘上槓桿" },
      { icon: "🛑", text: "活動資料標示含 **30% 停損機制**，且倉位若逾期未使用可能被收回；請先閱讀官方完整規則" },
      { icon: "📌", text: "需完成 KYC，且僅限符合活動資格的新用戶；不同地區或帳號可能看不到活動" }
    ],
    deadline: "截止：2026/07/31 23:59（UTC+8；資格與名額以官方活動頁為準）",
    junNote: "這張是純情報整理，我在 OKX 沒有邀請碼。重點不是『免費拿 1,000U 現金』，而是符合條件後取得含槓桿的合約網格倉位；有停損、期限與資格限制。\n\n⚠️ 合約與槓桿商品風險高，可能虧損；先登入確認自己是否有活動資格，再讀完官方規則，不要為了倉位獎勵硬入金。",
    link: "https://www.okx.com/zh-hant/learn/crypto/how-to-buy-us-stocks-with-crypto",
    linkLabel: "🔗 查看 OKX 合約網格說明",
    code: "",
    codeLabel: ""
  },
  {
    platform: "general",
    platformLabel: "OKX · 純資訊分享",
    status: "soon",
    statusLabel: "⏳ 即將截止",
    title: "✨ OKX Flash Earn Lite：3,200 萬顆 SENT 空投",
    desc: "OKX 上架 Flash Earn Lite，標的為 Sentient(SENT)，總計釋出 3,200 萬顆 SENT 作為空投獎勵",
    stats: [
      { label: "空投總量", value: "32,000,000 SENT", color: "highlight" },
      { label: "活動時間", value: "7/17–7/27", color: "" }
    ],
    benefits: [
      { icon: "🎁", text: "活動期間參與門檻不高，玩法相對簡單" },
      { icon: "⏳", text: "還剩不到一週，有在用 OKX 的人可以自己進去看活動頁面" },
      { icon: "📌", text: "Jun 在 OKX 沒有邀請碼，這則純粹是情報分享" }
    ],
    deadline: "截止：2026/07/27",
    junNote: "單純分享一個看到的活動，我自己在 OKX 沒有邀請碼可以給大家，就當作情報同步 🌸\n\n⚠️ 純資訊分享，非投資建議，自行評估風險。",
    link: "https://www.okx.com",
    linkLabel: "🔗 前往 OKX 查看活動",
    code: "",
    codeLabel: ""
  }
];
