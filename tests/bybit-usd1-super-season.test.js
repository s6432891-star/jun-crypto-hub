const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const code = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const activities = sandbox.window.ACTIVITIES || [];
const superSeasonCard = activities.find((a) => a.title === 'USD1 超級賽季：最高抽 1,000,000 WLFI');
const earnCard = activities.find((a) => a.platform === 'bybit' && a.title.startsWith('持有 USD1，賺 WLFI 收益'));

assert(!superSeasonCard, '2026/07/31 到期的 Bybit USD1 超級賽季卡片不應再出現');
assert(earnCard, 'Bybit USD1 持有收益卡片必須保留（2026/11/12 起為加碼月）');
const earnText = JSON.stringify(earnCard);

// 2026/11/12：加碼月 10/17–11/15；舊的 7.29% 預估年化與 ≥1 USD1 門檻查不到 11 月官方來源，已移除
assert(!earnText.includes('7.29%'), '無法核實的舊 7.29% 年化不應再出現');
assert(earnCard.deadline.includes('2026/11/15'), 'USD1 加碼月需標示 11/15 截止');
assert(earnText.includes('不是保證收益'), 'USD1 理財卡片需保留收益風險提醒');

console.log('Bybit USD1 超級賽季到期清理與理財卡保留檢查通過');
