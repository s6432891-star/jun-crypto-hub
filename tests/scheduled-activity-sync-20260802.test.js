const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const source = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox);

const cards = sandbox.window.ACTIVITIES || [];
const findTitle = (needle) => cards.find((card) => card.title.includes(needle));
const cardText = (needle) => JSON.stringify(findTitle(needle) || {});

assert(source.includes('最後更新：2026-08-02'), 'data.js 檔頭需更新為台北時間 2026-08-02');
assert.strictEqual(cards.length, 18, '官方來源保守同步後應共有 18 張活動卡');

const candy = findTitle('CandyBomb x XAUT');
assert(candy, '缺少 Bitget CandyBomb x XAUT 官方活動');
assert(cardText('CandyBomb x XAUT').includes('3 XAUT'), 'CandyBomb 總池應為 3 XAUT');
assert(cardText('CandyBomb x XAUT').includes('沒有合約交易紀錄'), 'CandyBomb 應標示報名前無合約交易紀錄的新戶資格');
assert(cardText('CandyBomb x XAUT').includes('Join'), 'CandyBomb 應提醒先點 Join');
assert(cardText('CandyBomb x XAUT').includes('槓桿') && cardText('CandyBomb x XAUT').includes('不要為了獎勵硬刷交易量'), 'CandyBomb 需明確標示合約風險');
assert(candy.link.includes('/events/candy-bomb'), 'CandyBomb CTA 應指向 Bitget 官方活動頁');
assert(!cardText('CandyBomb x XAUT').includes('貴金屬／大宗商品'), '官方未列指定交易對，不可自行限定貴金屬／大宗商品');

const evaa = findTitle('65,000 顆 EVAA');
assert(evaa, '需保留並修正既有 EVAA 卡');
assert(cardText('65,000 顆 EVAA').includes('0.001–300 XAUT'), 'EVAA 需標示每人鎖倉上下限');
assert(evaa.deadline.includes('2026/07/28 10:00') && evaa.deadline.includes('08/04 10:00'), 'EVAA 需標示官方 PoolX 期間');
assert(cardText('65,000 顆 EVAA').includes('子帳戶') && cardText('65,000 顆 EVAA').includes('機構用戶'), 'EVAA 需標示排除資格');
assert(evaa.link.includes('12560603890259'), 'EVAA CTA 應指向官方規則');
assert(!cardText('65,000 顆 EVAA').includes('2026/07/27（額度有限'), 'EVAA 不可再誤寫 7/27 上線');

const grvt = findTitle('GRVT Airdrop+');
assert(grvt, '缺少 MEXC GRVT Airdrop+');
assert(cardText('GRVT Airdrop+').includes('60,000 美元等值') && cardText('GRVT Airdrop+').includes('10,000 USDT'), 'GRVT 需分清兩種獎勵');
assert(cardText('GRVT Airdrop+').includes('不等於可直接提領現金'), 'GRVT 需說明期貨獎勵性質');
assert(grvt.link.includes('blog.mexc.com/press-release/'), 'GRVT CTA 應指向 MEXC 官方公告');

[
  'DCA 自動投資挑戰',
  '1,400 萬枚 IKA',
  'Launchpool ANTFUN',
  'AI Trading Showdown'
].forEach((title) => assert(!findTitle(title), `未取得官方直連完整核實，不得上線：${title}`));

[
  'USD1 超級賽季',
  '入金 TradFi，必得獎勵',
  '財報季：100 萬 USDT 活動池',
  '記憶體股網格新戶活動',
  '世足競猜開打'
].forEach((title) => assert(!findTitle(title), `明確過期活動必須移除：${title}`));

[
  '持有 USD1，賺 WLFI 收益',
  '網格新手禮',
  'PoolX 鎖 ETH 領 62 萬顆 NES',
  'Launchpool + HODLer',
  'Pre-IPO 期貨新標的'
].forEach((title) => assert(findTitle(title), `不可誤刪未確認到期的活動：${title}`));

assert(!source.includes('小遊戲'), '高風險產品不可淡化成小遊戲');
assert(!source.includes('不用算槓桿也不用設停損'), '不可宣稱高風險產品不需風控');

console.log('2026-08-02 官方來源保守同步檢查通過');
