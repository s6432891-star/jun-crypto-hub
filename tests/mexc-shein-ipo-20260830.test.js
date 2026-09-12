const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const source = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox);

const cards = sandbox.window.ACTIVITIES || [];
const findTitle = (needle) => cards.find((c) => c.title.includes(needle));
const cardText = (needle) => JSON.stringify(findTitle(needle) || {});

// 確認卡片存在
const shein = findTitle('MEXC IPO Express');
assert(shein, '缺少 MEXC SHEIN IPO Express 卡片');

// 保留歷史卡與原有風險斷言；新增 KCGI 後共 22 張
assert.strictEqual(cards.length, 22, '2026-09-12 新增官方 KCGI 後應共有 22 張活動卡');
assert.strictEqual(shein.status, 'ended', '8/31 截止 SHEIN 應已結束');

// 總額度與限額
assert(cardText('SHEIN').includes('$1,000,000'), '總額度應為 $1,000,000');
assert(cardText('SHEIN').includes('100 - 10,000 USDT'), '個人限額應為 100-10,000 USDT');

// 截止日與上市日（UTC + 台北時間 + 香港上市）
assert(shein.deadline.includes('2026/08/31'), '截止日應含 2026/08/31');
assert(shein.deadline.includes('18:00') || cardText('SHEIN').includes('8/31 18:00'), '應標註台北時間 8/31 18:00');
assert(cardText('SHEIN').includes('9/1') || cardText('SHEIN').includes('香港'), '應標示 SHEIN 香港上市日 9/1');

// 認購價範圍（港股 + 約美元）
assert(cardText('SHEIN').includes('HKD 47.60-49.50') || cardText('SHEIN').includes('47.60-49.50'), '應標示港股認購價範圍 HKD 47.60-49.50');
assert(cardText('SHEIN').includes('$6.07-$6.32') || cardText('SHEIN').includes('6.07-6.32'), '應標示約美元認購價範圍 $6.07-$6.32');

// 配額與認購方式
assert(cardText('SHEIN').includes('三個檔位') || cardText('SHEIN').includes('三檔位') || cardText('SHEIN').includes('先搶先贏'), '應說明額度分檔位、先搶先贏');

// 鏡像積分說明（非直接持股）
assert(cardText('SHEIN').includes('鏡像積分') || cardText('SHEIN').includes('Mirror Points'), '應說明取得鏡像積分');
assert(cardText('SHEIN').includes('非直接持股') || cardText('SHEIN').includes('非直接持有'), '應說明非直接持股／非直接持有股票');

// 風險提醒
assert(cardText('SHEIN').includes('投資有風險') || cardText('SHEIN').includes('非投資建議'), '應包含風險提醒');
assert(cardText('SHEIN').includes('請以 MEXC 官方活動頁為準') || cardText('SHEIN').includes('官方活動頁為準'), '應提醒以官方活動頁為準');

// 邀請碼與連結
assert(cardText('SHEIN').includes('3uXZE'), '應包含 MEXC 邀請碼 3uXZE');
assert(shein.link.includes('mexc.com'), 'CTA 連結應指向 MEXC');

console.log('MEXC SHEIN IPO Express 卡片回歸檢查通過');
