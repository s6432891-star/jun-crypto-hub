const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const source = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox);

const cards = sandbox.window.ACTIVITIES;
assert(Array.isArray(cards), 'window.ACTIVITIES 應為陣列');
assert.strictEqual(cards.length, 21, '7/28 安全更新後應共有 21 張卡片');

const esports = cards.find((card) => card.title.includes('ESPORTS'));
assert(!esports, '7/28 16:00 到期的 Bitget PoolX ESPORTS 卡片不得保留');

const evaa = cards.find((card) => card.title.includes('EVAA'));
assert(evaa, '缺少 Bitget PoolX EVAA 卡片');
assert.strictEqual(evaa.platform, 'bitget');
assert(evaa.stats.some((item) => item.value.includes('65,000 EVAA')), 'EVAA 空投總量不正確');
assert(evaa.benefits.some((item) => item.text.includes('額度有限')), 'EVAA 缺少額度有限提醒');
assert(evaa.junNote.includes('鎖倉期間資產會被鎖住'), 'EVAA 缺少鎖倉風險提醒');
assert(evaa.link.includes('V0K17SD8'), 'EVAA 應保留 Bitget 邀請碼連結');

const okxMemory = cards.find((card) => card.title.includes('記憶體股網格'));
assert(okxMemory, '缺少 OKX 記憶體股網格卡片');
assert.strictEqual(okxMemory.platform, 'general');
assert(okxMemory.deadline.includes('2026/07/31 23:59'), 'OKX 記憶體股活動截止時間不正確');
assert(okxMemory.benefits.some((item) => item.text.includes('不是現金')), 'OKX 卡片必須說明倉位不是現金');
assert(okxMemory.benefits.some((item) => item.text.includes('30%') && item.text.includes('停損')), 'OKX 卡片缺少 30% 停損提醒');
assert(okxMemory.junNote.includes('槓桿') && okxMemory.junNote.includes('資格'), 'OKX 卡片缺少槓桿與資格風險提醒');
assert.strictEqual(okxMemory.code, '', 'OKX 純資訊卡不應放邀請碼');

assert(!cards.some((card) => card.title.includes('OKX Flash Earn Lite')), '7/27 到期的 OKX SENT 卡片不得保留');
assert(cards.some((card) => card.title.includes('Launchpool + HODLer')), '不得刪除既有 Gate 長期卡片');
assert(!cards.some((card) => card.title.includes('現貨競技場：200,000 USDT')), '7/23 到期的 Bybit 現貨競技場不得保留');
assert.strictEqual(cards.filter((card) => card.title.includes('財報季')).length, 1, 'BingX 財報季不得重複新增');

console.log('Claude 7/28 小網頁安全同步測試通過');
