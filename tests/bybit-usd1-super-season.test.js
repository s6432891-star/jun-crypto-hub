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

assert(superSeasonCard, '找不到 Bybit USD1 超級賽季卡片');
assert(earnCard, '原本的 Bybit USD1 理財活動必須保留');
assert(
  activities.indexOf(superSeasonCard) !== activities.indexOf(earnCard),
  'USD1 超級賽季與 USD1 理財活動必須是兩張不同卡片'
);

const superSeasonText = JSON.stringify(superSeasonCard);
const earnText = JSON.stringify(earnCard);

assert(superSeasonText.includes('25 / 50 / 200 / 1000 WLFI'), '需要補上轉盤獎勵 25/50/200/1000 WLFI');
assert(superSeasonText.includes('US$10,000'), '需要補上 1 次抽獎任務門檻 US$10,000');
assert(superSeasonText.includes('US$100,000'), '需要補上 200 WLFI 任務門檻 US$100,000');
assert(superSeasonText.includes('US$500,000'), '需要補上 400 WLFI 任務門檻 US$500,000');
assert(superSeasonText.includes('US$2,500,000'), '需要補上 800 WLFI 任務門檻 US$2,500,000');
assert(superSeasonText.includes('30 個工作日'), '需要補上獎勵發放時間');
assert(superSeasonText.includes('限制國家'), '需要補上限制國家/地區提醒');
assert(superSeasonText.includes('不要為了抽獎硬刷交易量'), '需要補上 Jun 風險提醒');

assert(earnText.includes('7.29%'), '原本 USD1 理財卡片需保留預估年化');
assert(earnText.includes('≥ 1 USD1'), '原本 USD1 理財卡片需保留最低持有門檻');
assert(earnText.includes('APR 為預估值且可能浮動'), '原本 USD1 理財卡片需保留 APR 風險提醒');

console.log('Bybit USD1 兩張活動卡片檢查通過');
