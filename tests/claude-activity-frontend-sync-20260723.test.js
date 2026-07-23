const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const source = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox);

const cards = sandbox.window.ACTIVITIES;
assert(Array.isArray(cards), 'window.ACTIVITIES 應為陣列');
assert.strictEqual(cards.length, 23, '加入兩張活動後應共有 23 張卡片');

const esports = cards.find((card) => card.title.includes('ESPORTS'));
assert(esports, '缺少 Bitget PoolX ESPORTS 卡片');
assert.strictEqual(esports.platform, 'bitget');
assert(esports.deadline.includes('2026/07/28 16:00'), 'ESPORTS 截止時間不正確');
assert(esports.stats.some((item) => item.value.includes('1,866,000 ESPORTS')), 'ESPORTS 空投總量不正確');
assert(esports.junNote.includes('鎖倉期間資金無法自由運用'), 'ESPORTS 缺少鎖倉風險提醒');
assert(esports.link.includes('V0K17SD8'), 'ESPORTS 應保留 Bitget 邀請碼連結');

const okxMemory = cards.find((card) => card.title.includes('記憶體股網格'));
assert(okxMemory, '缺少 OKX 記憶體股網格卡片');
assert.strictEqual(okxMemory.platform, 'general');
assert(okxMemory.deadline.includes('2026/07/31 23:59'), 'OKX 記憶體股活動截止時間不正確');
assert(okxMemory.benefits.some((item) => item.text.includes('不是現金')), 'OKX 卡片必須說明倉位不是現金');
assert(okxMemory.benefits.some((item) => item.text.includes('30%') && item.text.includes('停損')), 'OKX 卡片缺少 30% 停損提醒');
assert(okxMemory.junNote.includes('槓桿') && okxMemory.junNote.includes('資格'), 'OKX 卡片缺少槓桿與資格風險提醒');
assert.strictEqual(okxMemory.code, '', 'OKX 純資訊卡不應放邀請碼');

assert(cards.some((card) => card.title.includes('OKX Flash Earn Lite')), '不得刪除既有 OKX SENT 卡片');
assert(cards.some((card) => card.title.includes('Launchpool + HODLer')), '不得刪除既有 Gate 長期卡片');
assert(cards.some((card) => card.title.includes('現貨競技場：200,000 USDT')), '不得改成 Claude 日期錯誤的 Bybit 重複卡');
assert.strictEqual(cards.filter((card) => card.title.includes('財報季')).length, 1, 'BingX 財報季不得重複新增');

console.log('Claude 7/23 小網頁安全同步測試通過');
