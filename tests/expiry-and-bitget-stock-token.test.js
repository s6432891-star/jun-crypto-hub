const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const code = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const activities = sandbox.window.ACTIVITIES || [];
const titles = activities.map((a) => a.title);

// 過期活動：以台北時間 2026-07-09 檢查，7/7、7/5、7/3 都應移除。
assert(!titles.includes('✨ 奧德賽之旅 × XLM 大獎'), '過期的 Bitget Wallet Stellar 活動仍存在');
assert(!titles.includes('SK海力士・美光・閃迪 合約空投'), '過期的 Gate 合約空投仍存在');
assert(!titles.includes('🎮 瘋狂星期三玩家派對：報名抽 PS5 Pro / GTA6 / XPIN'), '過期的 Gate 瘋狂星期三活動仍存在');

// 舊版 6/29–7/13 股票活動已由 7/13–7/27 新版接替，仍只保留一張股票活動卡。
const stockCards = activities.filter((a) => a.title === '新用戶直接領 20U 股票，最高 200U');
assert.strictEqual(stockCards.length, 1, 'Bitget 新版股票活動應只有一張卡，不能與舊版重複');
const stock = stockCards[0];
const text = JSON.stringify(stock).replace(/\*\*/g, '');
assert(text.includes('2026/07/13 11:00'), 'Bitget 股票代幣卡需含新版開始時間');
assert(text.includes('2026/07/27 11:00'), 'Bitget 股票代幣卡需含新版截止時間');
assert(text.includes('7/6 後註冊'), '需保留新版新戶資格：7/6 後註冊');
assert(text.includes('完成 KYC'), '需保留 KYC 條件');
assert(text.includes('50,000'), '需保留階梯交易量 50,000 USDT');
assert(text.includes('3,000,000'), '需保留階梯交易量 3,000,000 USDT');
assert(text.includes('0 手續費'), '需保留不統計 0 手續費交易量');
assert(text.includes('子帳號'), '需保留子帳號限制');
assert(text.includes('IP'), '需保留 IP 限制');
assert(text.includes('硬刷合約交易量'), '需保留 Jun 風險提醒');

// 仍進行中的同日截止活動應保留。
assert(titles.includes('盛夏打卡週：七日全勤最高 200 USDT'), 'Bitget 盛夏打卡週仍未到期，應保留');

console.log('到期清理與 Bitget 股票代幣重疊檢查通過');
