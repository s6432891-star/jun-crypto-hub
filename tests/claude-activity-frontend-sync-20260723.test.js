const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const source = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox);

const cards = sandbox.window.ACTIVITIES;
assert(Array.isArray(cards), 'window.ACTIVITIES 應為陣列');
assert.strictEqual(cards.length, 18, '8/2 官方來源保守同步後應共有 18 張卡片');

const esports = cards.find((card) => card.title.includes('ESPORTS'));
assert(!esports, '7/28 16:00 到期的 Bitget PoolX ESPORTS 卡片不得保留');

const evaa = cards.find((card) => card.title.includes('EVAA'));
assert(evaa, '缺少 Bitget PoolX EVAA 卡片');
assert.strictEqual(evaa.platform, 'bitget');
assert(evaa.stats.some((item) => item.value.includes('65,000 EVAA')), 'EVAA 空投總量不正確');
assert(JSON.stringify(evaa).includes('0.001–300 XAUT'), 'EVAA 缺少官方每人鎖倉上下限');
assert(JSON.stringify(evaa).includes('流動性受限'), 'EVAA 缺少鎖倉風險提醒');
assert(evaa.link.includes('12560603890259'), 'EVAA 應連到 Bitget 官方規則');

const okxMemory = cards.find((card) => card.title.includes('記憶體股網格'));
assert(!okxMemory, '2026/07/31 到期的 OKX 記憶體股網格卡片不應再出現');

assert(!cards.some((card) => card.title.includes('OKX Flash Earn Lite')), '7/27 到期的 OKX SENT 卡片不得保留');
assert(cards.some((card) => card.title.includes('Launchpool + HODLer')), '不得刪除既有 Gate 長期卡片');
assert(!cards.some((card) => card.title.includes('現貨競技場：200,000 USDT')), '7/23 到期的 Bybit 現貨競技場不得保留');
assert.strictEqual(cards.filter((card) => card.title.includes('財報季')).length, 0, '2026/07/29 到期的 BingX 財報季不得保留');

console.log('Claude 7/28 小網頁安全同步測試通過');
