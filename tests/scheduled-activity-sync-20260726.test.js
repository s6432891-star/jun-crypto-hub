const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const source = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox);

const cards = sandbox.window.ACTIVITIES || [];
const titles = cards.map((card) => card.title);
const findTitle = (needle) => cards.find((card) => card.title.includes(needle));

assert(source.includes('最後更新：2026-08-05'), 'data.js 檔頭需更新為 2026-08-05');

const mexc = findTitle('Up/Down');
assert(mexc, '缺少 MEXC Up/Down 活動卡');
assert(mexc.deadline.includes('2026/08/09 23:59（UTC）'), 'MEXC Up/Down 截止時間需用絕對日期與 UTC');
assert(JSON.stringify(mexc).includes('總值 100 萬美元'), 'MEXC 卡需忠實標示官方總獎池價值');
assert(JSON.stringify(mexc).includes('體驗金') && JSON.stringify(mexc).includes('不等於可直接提領'), 'MEXC 卡需說明部分獎勵是體驗金／券');
assert(JSON.stringify(mexc).includes('短線預測') && JSON.stringify(mexc).includes('可能損失'), 'MEXC 卡需明確提醒短線預測與本金損失風險');
assert(!JSON.stringify(mexc).includes('小遊戲'), 'MEXC 高風險產品不可淡化成小遊戲');

assert(!findTitle('TOKYO GAMES TOKEN'), '找不到 2026 官方期限證據的 Gate TGT 舊活動不可新增');
assert(findTitle('Launchpool + HODLer'), '需保留尚未確認結束的 Gate 長期 Launchpool / HODLer 卡');

const bingxCards = cards.filter((card) => card.platform === 'bingx' && card.title.includes('財報季'));
assert.strictEqual(bingxCards.length, 0, '2026/07/29 到期的 BingX 財報季不得保留');

assert(!titles.includes('現貨競技場：200,000 USDT 獎池衝刺中'), '7/23 到期的 Bybit 現貨競技場應移除');
[
  '新用戶直接領 20U 股票，最高 200U',
  'PoolX 鎖 BTC 領 186.6 萬顆 ESPORTS',
  'OKX Flash Earn Lite：3,200 萬顆 SENT 空投'
].forEach((title) => assert(!titles.some((item) => item.includes(title)), `明確已過期的活動必須移除：${title}`));

[
  '躺著領空投：Launchpool + HODLer Airdrop',
  'Pre-IPO 期貨新標的，限時 0 手續費'
].forEach((title) => assert(titles.some((item) => item.includes(title)), `不可誤刪尚未到期或未確認結束的活動：${title}`));

assert(!findTitle('EVAA'), '2026/08/04 到期的 Bitget PoolX EVAA 卡不得保留');

assert.strictEqual(cards.length, 17, '2026-08-05 安全同步後應共有 17 張活動卡');
console.log('2026-08-05 排程活動安全同步檢查通過');
