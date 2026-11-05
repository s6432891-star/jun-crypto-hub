/* =========================================================================
   Jun 幣圈活動整理 — 資料檔
   -------------------------------------------------------------------------
   這個檔案是「整個小App的內容來源」。
   你不用手改這裡，用 admin.html 後台填表 → 下載新的 data.js 蓋掉這個檔就好。
   （如果你想手動改也可以，每一個 { ... } 就是一張卡片。）

   小語法：
   - benefits 好處清單裡，想把金額/重點變粉紅色，用 **兩個星號** 包起來。
   - junNote（Jun 說）想換行，直接按 Enter 換行即可。
   最後更新：2026-11-05（台北時間）
   本次更新：
   - 移除過期／已過時：MEXC OURA IPO Express（OURA 上市已延後）、Bitget PoolX NES、MEXC 0808 股票季、MEXC DAPPOS、BingX 200 萬美元多資產競賽
   - 更新 Bitget 熱錢包事故說明（提款已分階段恢復，以官方公告為準）
   - 保留 MEXC Canton 嘉年華（至 11/30）；長期卡未逐張重新核實
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
    junNote: "Bitget 9 月曾發生熱錢包事故，提款已分階段恢復，實際狀態請以官方公告為準，投入新資金前先確認提款功能正常。\n\n這類活動比較適合本來就想研究網格的人，不要只為了迎新禮就直接開單。先看懂現貨網格和合約網格的差別，再用小額測試；參數設得不合適或遇到單邊行情，一樣可能虧損。\n\n⚠️ 純分享，不構成投資建議；部分連結可能含邀請碼 / 分潤。",
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
    junNote: "Bitget 9 月曾發生熱錢包事故，提款已分階段恢復，實際狀態請以官方公告為準；新戶開戶前先看一下最新公告，資金先小額、別一次投入 😌",
    link: "https://www.bitget.com/zh-TW/referral/register?from=referral&clacCode=MHEQPVWR",
    linkLabel: "🔗 前往 Bitget 註冊",
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
