const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const code = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const activities = sandbox.window.ACTIVITIES || [];
const site = sandbox.window.SITE || {};
const card = activities.find((a) => a.title === '盛夏打卡週：七日全勤最高 200 USDT');

assert(card, '找不到 Bitget 盛夏打卡週卡片');
assert.strictEqual(card.platform, 'bitget', '平台必須是 bitget');
assert.strictEqual(card.code, 'V0K17SD8', '邀請碼需使用 V0K17SD8');

const text = JSON.stringify(card);
assert(text.includes('2026/07/06'), '需要包含活動開始日期');
assert(text.includes('2026/07/13'), '需要包含活動截止日期');
assert(text.includes('1 USDT'), '需要包含每日輕鬆打卡 1 USDT');
assert(text.includes('10,000 USDT'), '需要包含每日 10,000 USDT 交易量門檻');
assert(text.includes('3 USDT'), '需要包含每日進階打卡 3 USDT');
assert(text.includes('100,000 USDT'), '需要包含每日 100,000 USDT 交易量門檻');
assert(text.includes('七日全勤最高 200 USDT'), '需要包含最高 200 USDT');
assert(text.includes('10,000,000 USDT'), '需要包含第 7 階條件 1,000 萬 USDT');
assert(text.includes('0 手續費'), '需要包含不統計 0 手續費交易');
assert(text.includes('子帳號交易量不計入'), '需要包含子帳號不計入');
assert(text.includes('異常交易'), '需要包含異常交易風險提醒');
assert(!site.tagline.includes('護理師'), '網站 tagline 不應再用護理師作推廣標籤');
assert(site.tagline.includes('小資族'), '網站 tagline 需符合新版 Jun 品牌聲音');

console.log('Bitget 盛夏打卡週卡片檢查通過');
