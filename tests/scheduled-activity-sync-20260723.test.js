const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const code = fs.readFileSync('data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const activities = sandbox.window.ACTIVITIES || [];
const titles = activities.map((a) => a.title);
const get = (title) => activities.find((a) => a.title === title);

// 2026-07-23 安全更新：只新增／改寫指定活動，不整份覆蓋 Claude 輸出。
const bybit = get('現貨競技場：200,000 USDT 獎池衝刺中');
assert(bybit, '缺少更新後的 Bybit 現貨競技場卡片');
assert(JSON.stringify(bybit).includes('200,000 USDT'), 'Bybit 卡片需保留 200,000 USDT 獎池');
assert(bybit.deadline.includes('2026/07/23 10:00（UTC）'), 'Bybit 截止時間需使用絕對日期');
assert(!JSON.stringify(bybit).includes('明天'), 'Bybit 卡片不得保留會過期的「明天」文案');
assert(JSON.stringify(bybit).includes('不要為了衝榜硬刷'), 'Bybit 卡片需保留交易量風險提醒');

const grid = get('網格新手禮：首單最高 200 USDT，再分 10 萬獎池');
assert(grid, '缺少 Bitget 網格機器人嘉年華卡片');
assert(JSON.stringify(grid).includes('100,000 USDT'), 'Bitget 網格卡需含 100,000 USDT 加碼獎池');
assert(JSON.stringify(grid).includes('非保證獲利'), 'Bitget 網格卡需明確提醒非保證獲利');

const bingx = get('財報季來了：100萬 USDT 獎池陪你追財報');
assert(bingx, '缺少更新後的 BingX 財報季卡片');
assert(bingx.deadline.includes('2026/07/29'), 'BingX 財報季需保留 7/29 截止日');
assert(JSON.stringify(bingx).includes('實際任務門檻與獎勵請以 BingX 活動頁為準'), 'BingX 資料不足處需標示以官方規則為準');

// 明確過期項目應移除。
assert(!titles.includes('⚽ 足球盛宴 8,000,000 USDT 獎池'), '7/21 到期的 MEXC 足球盛宴仍存在');

// Claude 輸出曾誤刪的活動必須保留，除非另有官方到期證據。
[
  '🚀 星艦啟航：太空邀約戰',
  '🔒 PoolX 鎖 ETH 領 62 萬顆 NES',
  '🎁 躺著領空投：Launchpool + HODLer Airdrop',
  '🚀 Pre-IPO 期貨新標的，限時 0 手續費',
  '⚽ 世足競猜開打！預測正確贏 50U 倉位券',
  '✨ OKX Flash Earn Lite：3,200 萬顆 SENT 空投'
].forEach((title) => assert(titles.includes(title), `安全更新不可誤刪：${title}`));

console.log('2026-07-23 Claude 排程安全同步檢查通過');
