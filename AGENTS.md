# AGENTS.md — Jun 幣圈活動 Hub 專案入口

## 開始前必讀

```text
C:\Users\s6432\OneDrive\附件\文件\hermes\AI_SHARED_CONTEXT.md
C:\Users\s6432\OneDrive\附件\文件\hermes\hermes.md
C:\Users\s6432\OneDrive\附件\文件\hermes\品牌\Jun\Jun品牌聲音與帳號方向_2026-07-08.md
```

## 專案定位

- Repo：`C:\Users\s6432\Downloads\jun-crypto-hub`
- 線上：`https://s6432891-star.github.io/jun-crypto-hub/`
- 純前端 GitHub Pages 小 App；主要活動資料在 `data.js`。
- 用途：替小資族、社會新人與怕詐騙的幣圈新手整理交易所活動、空投、邀請碼與風險提醒。

## 必守規則

- 使用 Jun 品牌聲音：白話、真誠、像朋友整理，不像老師喊單或硬廣告。
- 禁止保證獲利、暗示穩賺、炫富或鼓勵為活動硬刷交易量／硬入金／開高槓桿。
- 邀請碼、返佣或合作關係要透明揭露；獎勵上限不等於人人可得。
- 活動日期、資格、KYC、地區限制與獎勵規則，必須優先核對官方來源；資料不足就標示待確認。
- 不登入私人主帳號、不索取密碼、信用卡、交易所 API Key、錢包私鑰或助記詞。
- 不自動發布社群、不推送 GitHub、不部署，除非芮芮先確認。
- 重要改動前先提出簡短計畫，等芮芮確認後再編輯。

## 修改與驗證

1. 優先只改必要檔案，不順手改版面或其他活動。
2. 更新活動時檢查 `data.js` 語法、截止日、風險文案與連結。
3. 執行現有 `tests\*.test.js`、`node --check data.js`、`node --check app.js`、`git diff --check`。
4. 本機預覽並檢查手機版、篩選與連結後，才可提出部署。
5. 完成重要階段後更新 `hermes.md`，不要把進度塞進永久 Memory。
