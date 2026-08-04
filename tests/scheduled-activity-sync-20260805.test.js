const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const source = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox);

const cards = sandbox.window.ACTIVITIES || [];
const findTitle = (needle) => cards.find((card) => card.title.includes(needle));
const countTitle = (needle) => cards.filter((card) => card.title.includes(needle)).length;
const titles = cards.map((card) => card.title);

assert(source.includes('最後更新：2026-08-05'), 'data.js 檔頭應為 2026-08-05');
assert.strictEqual(cards.length, 17, '8/5 最小差異同步後應共有 17 張卡');
assert.strictEqual(new Set(titles).size, titles.length, '活動標題不可重複');

assert(!findTitle('星艦啟航'), '過期的 Bybit 星艦啟航活動必須移除');
assert(!findTitle('65,000 顆 EVAA'), '8/4 到期的 Bitget EVAA 活動必須移除');

const realStocks = findTitle('RealStocks 財報季交易賽');
assert(realStocks, '缺少 MEXC RealStocks 財報季交易賽');
assert.strictEqual(countTitle('RealStocks 財報季交易賽'), 1, 'RealStocks 不可重複');
assert.strictEqual(realStocks.platform, 'mexc', 'RealStocks 平台應為 MEXC');
assert(realStocks.deadline.includes('2026/08/24 10:00') && realStocks.deadline.includes('台北時間 18:00'), 'RealStocks 截止時間需用絕對 UTC 與台北時間');
assert(realStocks.link === 'https://www.mexc.com/campaigns/earningsrealstocksrally', 'RealStocks CTA 應指向官方活動網址');
const realStocksText = JSON.stringify(realStocks);
assert(realStocksText.includes('1,000,000 美元'), 'RealStocks 需標示總獎池');
assert(realStocksText.includes('總獎池不等於個人可得'), 'RealStocks 需避免把總池誤認成個人獎勵');
assert(realStocksText.includes('KYC') && realStocksText.includes('地區資格'), 'RealStocks 需提醒資格限制');
assert(realStocksText.includes('資產性質') && realStocksText.includes('平台風險'), 'RealStocks 需提醒產品與平台風險');

assert.strictEqual(countTitle('GRVT Airdrop+'), 1, '既有 GRVT 只能保留一張');
assert(!findTitle('新人開戶最高拿 8,250U'), 'BingX 8,250U 只有第三方資料，未取得官方活動頁前不得上線');

[
  'CandyBomb x XAUT',
  'GRVT Airdrop+',
  '持有 USD1，賺 WLFI 收益',
  '網格新手禮',
  'PoolX 鎖 ETH 領 62 萬顆 NES',
  'Launchpool + HODLer',
  'Pre-IPO 期貨新標的',
  'Up/Down 猜漲跌'
].forEach((title) => assert(findTitle(title), `最小差異同步不可誤刪既有卡：${title}`));

console.log('2026-08-05 Claude 活動檔最小差異安全同步檢查通過');
