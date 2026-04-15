# 次セッション引き継ぎ：S3-V3 Slack MCP 自己PoC

## 今回のセッションで決まったこと

1. **画面収録の前に、題材を自分で手を動かして確信を得るフェーズ**を挟む
2. 音声合成（ElevenLabs）・ブラウザ以外のデモ自動化（Computer Use）は**実用外として却下**
   - 音声は川端さんの人間ナレーションで続投
   - ブラウザ内デモはPlaywright実用可、ネイティブアプリは無理せず土屋さん実演
3. 土屋さんが手を動かしていない4領域：
   - **#1 MCP実戦**（S3-V3〜V6）← ここから着手
   - #2 Windows環境構築（S1-V3）
   - #3 Cursor専業開発（VSCode封印してCursorだけで1本通す）
   - #4 教材動画制作そのもの（S1-V1を1本完成）
4. **Cursor戦略**：Tab補完とCmd+Kは使う、Composer/Chatは使わない（Claude Codeと役割分担）

## 次セッションの冒頭で読み直すファイル

```
/Users/tchytky/.claude/plans/replicated-frolicking-sparkle.md
/Users/tchytky/Desktop/claude-learning/tasks/todo.md
/Users/tchytky/Desktop/claude-learning/tasks/handover-next-session.md  ← これ
```

土屋さんは「**プランと todo を読み直してPoC再開**」と伝えればOK。

## 次セッションの最初にClaude側が確認すること

1. 土屋さんが Slack テストワークスペースを作成済みか
2. Bot Token（`xoxb-...`）と Team ID を取得済みか
3. 取得済み → **Step 3（MCP登録）から開始**
4. 未取得 → **Step 1（ワークスペース作成）から開始**

## 次セッションで Claude 側が事前に調べる項目（セッション頭で実施）

- `@modelcontextprotocol/server-slack` の最新状況（非推奨化されていないか、Web検索で要確認）
- Claude Code の `claude mcp add` コマンド書式の最新版
- 第2候補（公式が動かない場合のPython実装 or 代替MCPサーバー）
- Slack Bot Token Scopes の必要最小セット再確認

## 土屋さんが事前にやっておけると速いこと（任意）

- [ ] Slack テストワークスペース作成（15〜20分）
  - slack.com/create で新規作成
  - チャンネル：`#general` / `#営業` / `#企画` / `#事務` / `#random`
  - ダミー投稿3〜5件ずつ（「A社に提案書送付」等）
- [ ] Slack App作成＆Bot Token取得（10分）
  - api.slack.com/apps → Create New App → From scratch
  - スコープ：`channels:history/read`, `groups:history/read`, `users:read`, `chat:write`
  - Install to Workspace → `xoxb-...` と Team ID をメモ

ここまで済んでいれば、次セッションは**30〜45分で Step 3〜5 を完走**できる見込み。

## PoCで使う主要ファイル

| 用途 | パス |
|---|---|
| 台本本体 | `docs/scripts-data.js` の `"S3-V3"` |
| 構成7項目 | `docs/curriculum-review.html` の S3-V3 |
| PoC記録先 | `tasks/todo.md` の「PoC #1 実施ログ」 |
| プラン詳細 | `/Users/tchytky/.claude/plans/replicated-frolicking-sparkle.md` |

## やらないこと（再確認）

- S3-V3 の画面収録はしない（PoCのみ、収録は別タスク）
- S3-V4（Notion）以降の MCP には進まない
- 社内Slackには接続しない（テストワークスペース限定）
- PoC中の失敗を「動画ダメ出し」扱いしない（発見こそ PoC の目的）

## 記憶済みのメモリ

- `feedback_hands_on_before_recording.md` — 収録前に題材を自分で体験する原則（ElevenLabs・Computer Use 却下理由込み）
- `MEMORY.md` の索引にも追記済み

## Open Questions（次セッション冒頭で土屋さんに聞く可能性あり）

1. テストワークスペース、既に作った？ 未作成？
2. PoCの所要が想定を超えた場合（例：2時間超）、切り上げて別日にするか、そのまま続けるか
3. PoC結果でS3-V3の台本構成を大きく変える必要が出た場合、その場で修正するか別タスクにするか
