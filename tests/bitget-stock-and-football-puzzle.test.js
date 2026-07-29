const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const code = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const activities = sandbox.window.ACTIVITIES || [];

const stockCards = activities.filter((a) => a.title === '新用戶直接領 20U 股票，最高 200U');
assert.strictEqual(stockCards.length, 0, '7/27 到期的 Bitget 新用戶股票活動不應再出現');

const puzzleCards = activities.filter((a) => a.title === '⚽ 九宮格射門：集拼圖拿 2,026 USDT');
assert.strictEqual(puzzleCards.length, 0, '7/20 到期的 Bitget 足球拼圖活動不應再出現');

console.log('Bitget 股票與足球拼圖到期清理檢查通過');
