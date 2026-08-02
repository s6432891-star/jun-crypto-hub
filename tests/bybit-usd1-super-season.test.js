const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const code = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const activities = sandbox.window.ACTIVITIES || [];
const superSeasonCard = activities.find((a) => a.title === 'USD1 超級賽季：最高抽 1,000,000 WLFI');
const earnCard = activities.find((a) => a.title === '持有 USD1，賺 WLFI 收益');

assert(!superSeasonCard, '2026/07/31 到期的 Bybit USD1 超級賽季卡片不應再出現');
assert(earnCard, '原本的 Bybit USD1 理財活動必須保留');
const earnText = JSON.stringify(earnCard);

assert(earnText.includes('7.29%'), '原本 USD1 理財卡片需保留預估年化');
assert(earnText.includes('≥ 1 USD1'), '原本 USD1 理財卡片需保留最低持有門檻');
assert(earnText.includes('APR 為預估值且可能浮動'), '原本 USD1 理財卡片需保留 APR 風險提醒');

console.log('Bybit USD1 超級賽季到期清理與理財卡保留檢查通過');
