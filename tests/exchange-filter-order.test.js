const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const source = fs.readFileSync('app.js', 'utf8');
const sandbox = { window: {}, navigator: {}, document: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox);
sandbox.PLATFORM_META = sandbox.window.PLATFORM_META;

function makeWrap() {
  let html = '';
  let buttons = [];
  return {
    set innerHTML(value) {
      html = value;
      buttons = [...value.matchAll(/data-filter="([^"]+)"/g)].map((match) => ({
        type: match[1],
        addEventListener() {},
        getAttribute(name) { return name === 'data-filter' ? this.type : null; },
        classList: { add() {}, remove() {} }
      }));
    },
    get innerHTML() { return html; },
    querySelectorAll(selector) { return selector === '.filter-btn' ? buttons : []; },
    get filters() { return buttons.map((button) => button.type); }
  };
}

const wrap = makeWrap();
const activities = [
  { platform: 'mexc' },
  { platform: 'bitget' },
  { platform: 'bingx' },
  { platform: 'bybit' },
  { platform: 'gate' },
  { platform: 'bitget-wallet' },
  { platform: 'future-exchange' }
];

sandbox.buildFilters(wrap, activities, () => {});

assert.deepStrictEqual(
  wrap.filters,
  ['all', 'hot', 'bybit', 'bitget', 'mexc', 'bitget-wallet', 'gate', 'bingx', 'future-exchange'],
  '固定按鈕順序應為「全部、進行中、Bybit」開頭；其他既有交易所維持目前順序，新平台排最後'
);

console.log('交易所直達按鈕固定順序檢查通過');
