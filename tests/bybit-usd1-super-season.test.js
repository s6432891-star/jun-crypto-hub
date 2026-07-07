const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const code = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const activities = sandbox.window.ACTIVITIES || [];
const card = activities.find((a) => a.title === 'USD1 超級賽季：最高抽 1,000,000 WLFI');

assert(card, '找不到 Bybit USD1 超級賽季卡片');
const allText = JSON.stringify(card);

assert(allText.includes('25 / 50 / 200 / 1000 WLFI'), '需要補上轉盤獎勵 25/50/200/1000 WLFI');
assert(allText.includes('US$10,000'), '需要補上 1 次抽獎任務門檻 US$10,000');
assert(allText.includes('US$100,000'), '需要補上 200 WLFI 任務門檻 US$100,000');
assert(allText.includes('US$500,000'), '需要補上 400 WLFI 任務門檻 US$500,000');
assert(allText.includes('US$2,500,000'), '需要補上 800 WLFI 任務門檻 US$2,500,000');
assert(allText.includes('30 個工作日'), '需要補上獎勵發放時間');
assert(allText.includes('限制國家'), '需要補上限制國家/地區提醒');
assert(allText.includes('不要為了抽獎硬刷交易量'), '需要補上 Jun 風險提醒');

console.log('Bybit USD1 超級賽季卡片檢查通過');
