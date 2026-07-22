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

assert(!card, '7/13 到期的 Bitget 盛夏打卡週不應再出現');
assert(!site.tagline.includes('護理師'), '網站 tagline 不應再用護理師作推廣標籤');
assert(site.tagline.includes('小資族'), '網站 tagline 需符合新版 Jun 品牌聲音');

console.log('Bitget 盛夏打卡週到期清理與品牌文案檢查通過');
