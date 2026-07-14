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
assert.strictEqual(puzzleCards.length, 1, 'Bitget 足球拼圖活動應只有一張卡');
const puzzle = puzzleCards[0];
const puzzleText = JSON.stringify(puzzle).replace(/\*\*/g, '');
assert.strictEqual(puzzle.platform, 'bitget', '足球拼圖活動平台必須是 bitget');
assert(puzzleText.includes('2026/07/13 11:00'), '足球拼圖活動需包含開始時間');
assert(puzzleText.includes('2026/07/20 11:00'), '足球拼圖活動需包含截止時間');
assert(puzzleText.includes('13 個拼圖碎片'), '需包含拼圖碎片上限');
assert(puzzleText.includes('重複'), '需提醒碎片可能重複');
assert(puzzleText.includes('2,026 USDT'), '需包含完整拼圖大獎');
assert(puzzleText.includes('1 / 5 / 10 / 20 / 66 / 99 / 168 / 666 USDT'), '需包含抽獎獎池');
assert(puzzleText.includes('20 次'), '需包含贈送與接收碎片次數上限');
assert(puzzleText.includes('完成 KYC'), '需包含 KYC 資格');
assert(puzzleText.includes('新手不要為了獎勵硬刷合約交易量'), '需包含合約風險提醒');
assert(puzzle.link.includes('d476af1609c9567a9eb6c1a70a448c3f'), '需使用足球拼圖官方活動連結');
assert(puzzle.link.includes('clacCode=MHEQPVWR'), '足球拼圖活動連結需帶入邀請碼');

console.log('Bitget 新版股票與足球拼圖活動檢查通過');
