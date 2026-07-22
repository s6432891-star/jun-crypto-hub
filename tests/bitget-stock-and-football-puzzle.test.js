const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const code = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const activities = sandbox.window.ACTIVITIES || [];

const stockCards = activities.filter((a) => a.title === '新用戶直接領 20U 股票，最高 200U');
assert.strictEqual(stockCards.length, 1, '新版 Bitget 新用戶股票活動應只有一張卡');
const stock = stockCards[0];
const stockText = JSON.stringify(stock).replace(/\*\*/g, '');
assert(stockText.includes('2026/07/13 11:00'), '股票活動需包含新版開始時間');
assert(stockText.includes('2026/07/27 11:00'), '股票活動需包含新版截止時間');
assert(stockText.includes('7/6 後註冊'), '股票活動需包含新版新戶資格');
assert(stockText.includes('累計入金 ≥ 200 USDT'), '股票活動需包含入金門檻');
assert(stockText.includes('最高 180 積分'), '股票活動需包含進階積分上限');
assert(stockText.includes('rSPY'), '股票活動需包含新版股票代幣標的');
assert(stockText.includes('MHEQPVWR'), '股票活動需沿用 Bitget 邀請碼');
assert(stock.link.includes('e4bfb459098a5dde94a9ad70ec9e06f5'), '股票活動需使用新版官方活動連結');
assert(stock.link.includes('clacCode=MHEQPVWR'), '股票活動連結需帶入邀請碼');
assert(stockText.includes('硬刷合約交易量'), '股票活動需保留合約風險提醒');

const puzzleCards = activities.filter((a) => a.title === '⚽ 九宮格射門：集拼圖拿 2,026 USDT');
assert.strictEqual(puzzleCards.length, 0, '7/20 到期的 Bitget 足球拼圖活動不應再出現');

console.log('Bitget 新版股票保留與足球拼圖到期清理檢查通過');
