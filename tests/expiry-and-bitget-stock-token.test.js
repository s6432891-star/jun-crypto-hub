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

// 7/13–7/27 新版股票活動已到期，不應再保留。
const stockCards = activities.filter((a) => a.title === '新用戶直接領 20U 股票，最高 200U');
assert.strictEqual(stockCards.length, 0, '7/27 到期的 Bitget 股票活動不應再出現');

// 7/13 已截止的盛夏打卡週應移除。
assert(!titles.includes('盛夏打卡週：七日全勤最高 200 USDT'), '過期的 Bitget 盛夏打卡週仍存在');

console.log('到期清理與 Bitget 股票代幣移除檢查通過');
