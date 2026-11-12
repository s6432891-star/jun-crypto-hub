/* =========================================================================
   Jun 幣圈活動整理 — 資料檔
   -------------------------------------------------------------------------
   這個檔案是「整個小App的內容來源」。
   你不用手改這裡，用 admin.html 後台填表 → 下載新的 data.js 蓋掉這個檔就好。
   （如果你想手動改也可以，每一個 { ... } 就是一張卡片。）

   小語法：
   - benefits 好處清單裡，想把金額/重點變粉紅色，用 **兩個星號** 包起來。
   - junNote（Jun 說）想換行，直接按 Enter 換行即可。
   最後更新：2026-11-12（台北時間）
   本次更新：
   - 11/12 晚間排程：新增 MEXC RealStocks 財報季（至 11/21 12:00 UTC）
   - 新增：Bitget 雙 11 嘉年華（至 11/23）、Bitget 理財嘉年華（至 12/9）、Bitget IPO Prime 申購活動、Bybit WSOT 2026（至 12/2）、Bybit P2P 超級優惠（至 2027/3/30）、Gate 股票事件合約挑戰賽（至 11/18）
   - 更新：Bybit USD1 持有收益（加碼月只到 11/15，移除舊的 7.29% 年化數字）；Gate Launchpool/HODLer 移除過時的 7 月數據
   - 標「待確認」（查不到 11 月官方資料，不代表已結束）：Bybit 新人禮、Bitget 新用戶 BTC 空投、Bitget 網格、Gate USD1 15%、MEXC 邀請 $120、MEXC Pre-IPO 期貨
   - 保留 MEXC Canton 嘉年華（至 11/30，已核對）
   =========================================================================== */

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
    platform: "mexc",
    platformLabel: "MEXC · RealStocks 財報季",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "RealStocks 財報季：比報酬率不比本金，第一名 $10,000",
    desc: "美股代幣 RealStocks 報酬率排行榜，交易滿 $100 就能上榜；新用戶首次入金滿 $100 另送 $10 股票獎勵（前 2,000 名）",
    stats: [
      { label: "第一名", value: "$10,000 股票", color: "highlight" },
      { label: "活動期間", value: "11/4 12:00 – 11/21 12:00 UTC", color: "" },
      { label: "新手禮", value: "$10 股票（前 2,000 名）", color: "highlight" }
    ],
    benefits: [
      { icon: "1️⃣", text: "新用戶（從未入金過）活動期間首次入金滿 **$100**，送 **$10 股票獎勵**，限前 2,000 名" },
      { icon: "2️⃣", text: "報名後 RealStocks 交易滿 **$100** 即可上榜，依 PNL 報酬率排名：第 1 名 **$10,000**、第 2 名 $5,000、第 3 名 $3,000，前 50 名有獎" },
      { icon: "3️⃣", text: "邀請好友（報名且交易滿 $100）可分 **$2,000** 邀請獎池" },
      { icon: "⚠️", text: "歷史報酬率也會計入排名；地區限制與完整規則以官方活動頁為準" }
    ],
    deadline: "2026/11/21 12:00 UTC",
    junNote: "這個我喜歡的點是比「報酬率」不是比誰錢多，小資金也有機會 🌸 但要注意它會把你之前的歷史報酬率一起算，不是歸零重比，別為了衝排名硬加碼。\n\n⚠️ 美股代幣一樣有波動，只拿閒置資金，自行評估；純分享不構成投資建議。",
    link: "https://www.mexc.com/register?inviteCode=3uXZE",
    linkLabel: "🔗 前往 MEXC RealStocks 財報季",
    code: "3uXZE",
    codeLabel: "MEXC 邀請碼"
  },
  {
    platform: "bitget",
    platformLabel: "Bitget · 雙 11 嘉年華",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "雙 11 嘉年華：做任務累積積分抽獎",
    desc: "11/9 – 11/23 期間，完成淨入金、合約交易、邀請好友等任務累積積分或抽獎次數；獎項有 USDT 空投與體驗型獎勵，數量有限、先搶先得",
    stats: [
      { label: "活動期間", value: "11/9 – 11/23", color: "highlight" },
      { label: "任務", value: "淨入金／合約交易／邀請好友", color: "" }
    ],
    benefits: [
      { icon: "🎁", text: "獎池包含 **USDT 空投**，以及遊艇一日遊、飛行體驗、Faker 見面會等體驗型獎項，**數量有限、先搶先得**" },
      { icon: "🏆", text: "合約交易額前 10 名有排名獎：第 1 名 **24K 純金「金手指」**，第 2–10 名 **1,000–4,000 USDT**" },
      { icon: "⚠️", text: "排名獎要靠大量合約交易量，**不建議新手為了排名硬衝**；詳細任務門檻與地區限制以 Bitget 活動頁為準" }
    ],
    deadline: "2026/11/23",
    junNote: "這次是雙 11 主題活動，任務很多但大獎幾乎都要靠合約交易量，小資族看看有沒有剛好順手能做的任務就好，不用為了抽獎硬開高槓桿 🌸\n\nBitget 9 月曾發生熱錢包事故，提款已分階段恢復，實際狀態請以官方公告為準。\n\n⚠️ 純分享，不構成投資建議；連結含邀請碼 / 分潤。",
    link: "https://www.bitget.com/zh-TW/referral/register?from=referral&clacCode=V0K17SD8",
    linkLabel: "🔗 前往 Bitget 雙 11 活動",
    code: "V0K17SD8",
    codeLabel: "Bitget 邀請碼"
  },
  {
    platform: "bitget",
    platformLabel: "Bitget · 理財嘉年華",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "理財嘉年華：USDT 活期最高加碼至 10% 年化",
    desc: "11/9 – 12/9 期間，淨入金指定幣種並申購對應活期理財，可在即時年化上再享固定加息，不需另外報名",
    stats: [
      { label: "USDT 最高年化", value: "10%", color: "highlight" },
      { label: "ETH／XAUT 最高", value: "5%", color: "highlight" },
      { label: "BTC 最高", value: "3%", color: "highlight" },
      { label: "活動期間", value: "11/9 – 12/9", color: "" }
    ],
    benefits: [
      { icon: "💰", text: "淨入金指定幣種（USDT、ETH、XAUT、BTC）並申購對應活期理財，即享加息" },
      { icon: "📊", text: "**淨入金越多，加息上限越高**；實際加息幅度與額度以活動頁為準" },
      { icon: "📝", text: "不需要另外報名" },
      { icon: "⚠️", text: "「最高」不是人人都拿得到，年化會浮動，也不是保證收益" }
    ],
    deadline: "2026/12/09",
    junNote: "這個是比較偏理財、不用盯盤的活動，但最高年化需要比較大的淨入金額，小額的話加息會比較少，先看清楚自己落在哪一檔再決定 🌸\n\nBitget 9 月曾發生熱錢包事故，提款已分階段恢復，實際狀態請以官方公告為準，入金前先確認提款功能正常。\n\n⚠️ 純分享，不構成投資建議；連結含邀請碼 / 分潤。",
    link: "https://www.bitget.com/zh-TW/referral/register?from=referral&clacCode=V0K17SD8",
    linkLabel: "🔗 前往 Bitget 理財活動",
    code: "V0K17SD8",
    codeLabel: "Bitget 邀請碼"
  },
  {
    platform: "bitget",
    platformLabel: "Bitget · IPO Prime",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "Anthropic IPO Prime 申購，新用戶 10 萬 USDT 獎池",
    desc: "新用戶註冊並完成驗證後，可參與 Anthropic 的 IPO Prime 申購活動，並有 rToken 獎勵；分 VIP 輪與公開輪",
    stats: [
      { label: "獎池", value: "100,000 USDT", color: "highlight" },
      { label: "公開輪", value: "11/10 – 11/17", color: "" }
    ],
    benefits: [
      { icon: "🗓️", text: "VIP 輪原訂 11/5–11/9，申購期限已延到 **11/11**；公開輪 **11/10–11/17**（日期可能調整）" },
      { icon: "🎁", text: "獎勵以 Anthropic rToken 發放，依入金與申購狀況計算" },
      { icon: "📌", text: "rToken 是代幣化的對應憑證，**不等於持有公司股權**，申購規則、額度與入金門檻請以活動頁為準" },
      { icon: "⚠️", text: "Pre-IPO 類商品波動可能很大，也可能分配不到，先搞懂規則再決定要不要參與" }
    ],
    deadline: "公開輪 2026/11/17（日期可能調整）",
    junNote: "這類 IPO 申購活動我會建議先看懂它是怎麼分配、rToken 到底代表什麼，再決定要不要碰，不要因為名字響亮就直接投入 🌸\n\nBitget 9 月曾發生熱錢包事故，提款已分階段恢復，實際狀態請以官方公告為準。\n\n⚠️ 純分享，不構成投資建議；連結含邀請碼 / 分潤。",
    link: "https://www.bitget.com/zh-TW/referral/register?from=referral&clacCode=V0K17SD8",
    linkLabel: "🔗 前往 Bitget IPO Prime",
    code: "V0K17SD8",
    codeLabel: "Bitget 邀請碼"
  },
  {
    platform: "bybit",
    platformLabel: "Bybit · WSOT 2026",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "WSOT 2026 世界交易系列賽，獎池最高 1,000 萬 USDT",
    desc: "Bybit 年度交易大賽，今年新增全球資產賽道（股票、黃金、原油、指數）與 AI 盈虧對決賽道；註冊沒有最低資產門檻",
    stats: [
      { label: "獎池上限", value: "10,000,000 USDT", color: "highlight" },
      { label: "活動期間", value: "10/29 – 12/2 10:00 UTC", color: "" },
      { label: "報名", value: "免最低資產", color: "highlight" }
    ],
    benefits: [
      { icon: "📝", text: "到 bybit.com/wsot2026 註冊，可個人參賽，也可組隊或加入戰隊" },
      { icon: "🎯", text: "預熱任務從參賽首日起，完成交易任務即可解鎖對應獎勵" },
      { icon: "📈", text: "排行榜資格：統一交易帳戶持有至少 **100 USDT 滿 5 分鐘**；現貨成交量榜 11/5–11/26，最多 400 人分最高 **100 萬 USDT**" },
      { icon: "⚠️", text: "獎池是**上限**，不保證全部發出；排名要靠累積交易量，不建議新手為了排名硬衝" }
    ],
    deadline: "2026/12/02 10:00 UTC",
    junNote: "WSOT 是 Bybit 每年的大型賽事，獎池很大但門檻和規則也多，排行榜基本上是看交易量，不是人人都拿得到。想參加的話先看預熱任務有沒有剛好順手能做的就好 🌸\n\n⚠️ 純分享，不構成投資建議；合約與槓桿有風險，只拿閒置資金。",
    link: "https://partner.bybit.com/b/BYJUN",
    linkLabel: "🔗 前往 Bybit 註冊",
    code: "BYJUN",
    codeLabel: "Bybit 邀請碼"
  },
  {
    platform: "gate",
    platformLabel: "Gate · 股票事件合約",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "股票事件合約新增 NVDA 等 10 檔，5 萬 USDT 挑戰賽",
    desc: "Gate 事件合約新增 NVDA、AAPL 等 10 檔股票標的，11/11–11/18 限時 5 萬 USDT 交易活動；新用戶首單可領體驗券",
    stats: [
      { label: "獎池", value: "50,000 USDT", color: "highlight" },
      { label: "活動期間", value: "11/11 18:00 – 11/18 18:00", color: "" },
      { label: "新用戶首單", value: "5.5 USDT 體驗券", color: "highlight" }
    ],
    benefits: [
      { icon: "🆕", text: "新用戶首單淨買入 **≥ 20 USDT**，前 **1,000 名**可領 5.5 USDT **體驗券**（不是現金）" },
      { icon: "📊", text: "交易量 ≥ 30,000 USDT 可共分 **10,000 USDT**；交易量 ≥ 150,000 USDT 且排前 10，最高固定獎 **3,000 USDT**" },
      { icon: "⚠️", text: "事件合約風險很高、可能全部虧損；排名獎要大量交易量，**不建議新手為了活動硬衝**" }
    ],
    deadline: "2026/11/18 18:00（UTC+8）",
    junNote: "這個我自己的看法是：新用戶就把它當成「先領 5.5U 體驗券，感受一下事件合約怎麼運作」就好，其他需要大量交易量的獎項不用跟 🌸\n\n⚠️ 純分享，不構成投資建議；事件合約與槓桿有高風險，只拿閒置資金。",
    link: "https://www.gate.io",
    linkLabel: "🔗 前往 Gate 事件合約",
    code: "VFVFVW9AVG",
    codeLabel: "Gate 邀請碼"
  },
  {
    platform: "mexc",
    platformLabel: "MEXC · Canton 嘉年華",
    status: "hot",
    statusLabel: "🔥 進行中",
    title: "Canton (CC) 0 手續費嘉年華，獎池 $100 萬",
    desc: "CC/USDT、CC/USDC 現貨與 CCUSDT 合約免手續費，另有新手持倉空投、交易排行、持有獎勵與學習獎勵；多項獎勵先搶先得且有每人上限",
    stats: [
      { label: "總獎池", value: "$1,000,000", color: "highlight" },
      { label: "活動期間", value: "10/30 10:00 – 11/30 10:00 UTC", color: "" },
      { label: "手續費", value: "指定交易對 0 手續費", color: "highlight" }
    ],
    benefits: [
      { icon: "1️⃣", text: "新手禮：淨入金滿 **100 美元**並持有 24 小時，可領 **$200 CC 持倉空投**＋$5 CC（先搶先得）" },
      { icon: "2️⃣", text: "交易衝刺：現貨池 **150 萬 CC**、合約池 **350 萬 CC**，需累積現貨 $5,000／合約 $100,000 交易量，個人有上限" },
      { icon: "3️⃣", text: "持有賺幣：**100 萬 CC** 依平均持倉分，至少持有 1,000 CC；學習賺幣讀文章答題每人 **50 CC**" },
      { icon: "⚠️", text: "地區限制與完整規則請以官方活動頁為準；合約有槓桿風險" }
    ],
    deadline: "2026/11/30 10:00 UTC",
    junNote: "這次是 Canton 主題的 0 手續費活動，獎項很多但很多是先搶先得、而且有交易量門檻，別為了拿獎勵去硬衝合約 🌸\n\n⚠️ 投資有風險，只拿閒置資金，自行評估；純分享不構成投資建議。",
    link: "https://www.mexc.com/register?inviteCode=3uXZE",
    linkLabel: "🔗 前往 MEXC Canton 活動",
    code: "3uXZE",
    codeLabel: "MEXC 邀請碼"
  },
  {
    platform: "bybit",
    platformLabel: "Bybit · 新用戶專屬",
    status: "soon",
    statusLabel: "⚠️ 待確認",
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
    junNote: "⚠️ 這張的期限／內容我這次沒有查到 11 月的官方資料，先標「待確認」（不代表已結束），實際請以官方活動頁為準。\n\nBybit 新人禮蠻實在的，身分驗證就先給 10U，一步一步做任務就有，適合剛進來的新人 🌸",
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
    platformLabel: "Bybit · USD1 理財",
    status: "soon",
    statusLabel: "⏳ 11/15 截止",
    title: "持有 USD1，賺 WLFI 收益（加碼月）",
    desc: "持有 USD1 穩定幣可每日累積 WLFI 獎勵，無需質押、無需鎖倉；這次是延長的加碼月，只到 11/15",
    stats: [
      { label: "加碼月獎池", value: "2,700 萬 WLFI", color: "highlight" },
      { label: "活動期間", value: "10/17 – 11/15", color: "" },
      { label: "結算", value: "每日累積", color: "" }
    ],
    benefits: [
      { icon: "1️⃣", text: "在 Bybit 帳戶持有 USD1 並符合活動資格，**不用質押、不用鎖倉**" },
      { icon: "2️⃣", text: "系統每小時快照餘額，每天累積 WLFI 獎勵" },
      { icon: "3️⃣", text: "另有 USD1 持有榜，每日更新前 50 名" },
      { icon: "⚠️", text: "年化會隨總參與量與 WLFI 價格浮動，**不是保證收益**；詳細資格以官方活動頁為準" }
    ],
    deadline: "2026/11/15",
    junNote: "這個 USD1 持有活動原本預告 9 月那期是最後一期，後來官方又加碼延長了一個月，現在到 11 月 15 日。過了之後有沒有再延，請以 Bybit 官方公告為準。\n\n⚠️ 穩定幣和 WLFI 都有市場與平台風險，先小額研究，不要為了收益重倉。",
    link: "https://partner.bybit.com/b/BYJUN",
    linkLabel: "🔗 前往 Bybit 查看 USD1 理財",
    code: "BYJUN",
    codeLabel: "Bybit 邀請碼"
  },
  {
    platform: "bybit",
    platformLabel: "Bybit · P2P 超級優惠",
    status: "ongoing",
    statusLabel: "✅ 進行中",
    title: "新用戶 P2P 首單，保證領 10–99 USDT 優惠券",
    desc: "新用戶透過 Bybit P2P 完成首次充值或交易（10 USDT 起），可領面額 10–99 USDT 的優惠券，用在下一筆符合條件的 P2P 訂單",
    stats: [
      { label: "優惠券面額", value: "10 – 99 USDT", color: "highlight" },
      { label: "首單門檻", value: "10 USDT 起", color: "" },
      { label: "活動至", value: "2027/3/30", color: "" }
    ],
    benefits: [
      { icon: "🆕", text: "新用戶限定，首次 P2P 充值或交易 **10 USDT 起**即可解鎖優惠券" },
      { icon: "🎟️", text: "優惠券用於**下一筆**符合條件的 P2P 訂單，最高可省 **99%**" },
      { icon: "⚠️", text: "優惠券是折抵用，不是現金；P2P 在你所在地區是否開放、支援哪些付款方式，請先在 Bybit 確認" }
    ],
    deadline: "2027/03/30",
    junNote: "這個是 Bybit 官方 11/3 公布的新一輪 P2P 活動，比較適合本來就想用 P2P 買幣的新手。台灣是否開放與資格我這邊沒辦法確認，註冊前先看一下 App 裡的活動頁 🌸\n\n⚠️ 純分享，不構成投資建議；P2P 交易請注意對手風險，只在平台內完成交易。",
    link: "https://partner.bybit.com/b/BYJUN",
    linkLabel: "🔗 前往 Bybit 註冊",
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
    junNote: "Bitget 9 月曾發生熱錢包事故，提款已依官方時程分階段恢復（BTC 9/28 起），實際開放狀態請以 Bitget 官方公告為準；這張卡是實體卡申請，跟熱錢包關聯較低，但申請前建議先看一下最新公告。\n\n我的實體卡已經到手了！0 手續費刷卡真的很香 💳🌸",
    link: "https://web3.bitget.com",
    linkLabel: "🔗 申請 Bitget Wallet 卡",
    code: "Cqeue9",
    codeLabel: "邀請碼（綁定領 5 USDT）"
  },
  {
    platform: "bitget",
    platformLabel: "Bitget · 網格機器人嘉年華",
    status: "soon",
    statusLabel: "⚠️ 待確認",
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
    junNote: "⚠️ 這張的期限／內容我這次沒有查到 11 月的官方資料，先標「待確認」（不代表已結束），實際請以官方活動頁為準。\n\nBitget 9 月曾發生熱錢包事故，提款已分階段恢復，實際狀態請以官方公告為準，投入新資金前先確認提款功能正常。\n\n這類活動比較適合本來就想研究網格的人，不要只為了迎新禮就直接開單。先看懂現貨網格和合約網格的差別，再用小額測試；參數設得不合適或遇到單邊行情，一樣可能虧損。\n\n⚠️ 純分享，不構成投資建議；部分連結可能含邀請碼 / 分潤。",
    link: "https://www.bitget.com/zh-TW/referral/register?from=referral&clacCode=V0K17SD8",
    linkLabel: "🔗 前往 Bitget 查看網格活動",
    code: "V0K17SD8",
    codeLabel: "Bitget 邀請碼"
  },
  {
    platform: "bitget",
    platformLabel: "Bitget",
    status: "soon",
    statusLabel: "⚠️ 待確認",
    title: "新用戶可贏取 $80 BTC 空投 + 1,500 USDT 盲盒",
    desc: "用我的邀請碼掃碼加入 Bitget，開啟 2026 財富之路，受邀新用戶享豐厚新人禮",
    stats: [],
    benefits: [
      { icon: "₿", text: "受邀用戶可贏取 **$80 BTC 空投**" },
      { icon: "🎁", text: "+ **1,500 USDT 盲盒**驚喜獎勵" }
    ],
    deadline: "",
    junNote: "⚠️ 這張的期限／內容我這次沒有查到 11 月的官方資料，先標「待確認」（不代表已結束），實際請以官方活動頁為準。\n\nBitget 9 月曾發生熱錢包事故，提款已分階段恢復，實際狀態請以官方公告為準；新戶開戶前先看一下最新公告，資金先小額、別一次投入 😌",
    link: "https://www.bitget.com/zh-TW/referral/register?from=referral&clacCode=MHEQPVWR",
    linkLabel: "🔗 前往 Bitget 註冊",
    code: "MHEQPVWR",
    codeLabel: "Bitget 邀請碼"
  },
  {
    platform: "gate",
    platformLabel: "Gate · USD1 理財",
    status: "soon",
    statusLabel: "⚠️ 待確認",
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
    junNote: "⚠️ 這張的期限／內容我這次沒有查到 11 月的官方資料，先標「待確認」（不代表已結束），實際請以官方活動頁為準。\n\n這個比較像懶人型穩定幣收益，只要在 Gate 帳戶持有 USD1 就會計算，不用鎖倉。但 15% 是預估年化，不是保證收益，USD1 本身也有穩定幣、監管和市場波動風險，適合先小額研究。",
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
      { label: "HODLer 門檻", value: "持有 ≥ 1 GT", color: "highlight" },
      { label: "Launchpool", value: "質押賺新幣", color: "" }
    ],
    benefits: [
      { icon: "💎", text: "只要帳戶持有 **1 顆 GT** 以上，就自動有資格參加 HODLer Airdrop，不用鎖倉、不用手動申購" },
      { icon: "🌊", text: "Launchpool 則是質押主流幣（如 USDT、GT）快速挖新項目代幣，隨存隨取" },
      { icon: "📊", text: "每一期的項目、獎池與質押年化都不同，以 Gate 公告與活動頁為準" },
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
    status: "soon",
    statusLabel: "⚠️ 待確認",
    title: "立即邀請，你與好友各得 $120",
    desc: "邀請新用戶完成任務，你和好友各拿 $120，總獎池 $100,000 限時爭奪！",
    stats: [
      { label: "每人獎勵", value: "$120", color: "highlight" },
      { label: "獎池", value: "$100,000", color: "highlight" }
    ],
    benefits: [],
    deadline: "",
    junNote: "⚠️ 這張的期限／內容我這次沒有查到 11 月的官方資料，先標「待確認」（不代表已結束），實際請以官方活動頁為準。\n\nMEXC 的 Pre-IPO 活動頻率很高，SPAX(PRE) 我自己有跟過 🌸",
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
    status: "soon",
    statusLabel: "⚠️ 待確認",
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
    junNote: "⚠️ 這張的期限／內容我這次沒有查到 11 月的官方資料，先標「待確認」（不代表已結束），實際請以官方活動頁為準。\n\n這類商品波動通常不小，玩之前一定要先搞懂它跟現貨的差異，不是穩賺不賠的東西 🌸\n\n⚠️ 合約槓桿風險高，新手不要為了活動硬碰，只拿閒置資金，自行評估。",
    link: "https://www.mexc.com/register?inviteCode=3uXZE",
    linkLabel: "🔗 前往 MEXC Pre-IPO 期貨",
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
