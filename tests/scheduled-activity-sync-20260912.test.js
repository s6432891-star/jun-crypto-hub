const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const sandbox = {window:{}};
vm.runInNewContext(fs.readFileSync('data.js','utf8'), sandbox);
const cards = sandbox.window.ACTIVITIES;
assert.strictEqual(cards.length, 22);
const k = cards.find(c => c.title.includes('KCGI'));
assert(k && k.status === 'hot');
assert.strictEqual(k.link, 'https://www.bitget.com/support/articles/12560603893290');
for(const s of ['2026/09/22','23:59','台北','3,000,000','100 USDT','30,000 USDT','KYC','子帳號','PRO','地區','非現金','槓桿','爆倉','不要為了','分潤']) assert(JSON.stringify(k).includes(s),`KCGI 缺少 ${s}`);
assert(cards.find(c => c.title.includes('SHEIN')).status === 'ended');
const d = cards.find(c => c.title.includes('DAPPOS'));
assert(d && !JSON.stringify(d).includes('最後一天'));
assert.strictEqual(d.status, 'unverified', '未核實 DAPPOS 不得出現在進行中篩選');
for (const c of cards) {
  if (/2026\/08\/\d\d/.test(c.deadline)) assert.strictEqual(c.status,'ended',c.title);
}
for (const s of ['MOVE Carnival','Catizen','Welcome to Bybit','SuperX','8,250','Red Bull Trading Tour','USDGO']) assert(!cards.some(c => c.title.includes(s)),`未通過官方閘門：${s}`);
for (const s of ['網格新手禮','PoolX 鎖 ETH','Launchpool + HODLer','Pre-IPO','0808 股票季','全球資本嘉年華']) assert(cards.some(c => c.title.includes(s)),`不可誤刪舊卡：${s}`);
console.log('2026-09-12 官方 KCGI、過期與舊卡保留安全檢查通過');
