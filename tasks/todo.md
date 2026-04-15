# tasks/todo.md — 収録前の自己PoCフェーズ

## 現フェーズ：収録前に題材を自分で手を動かして確信を得る

壁打ちの結論：ElevenLabs音声合成・Computer Use自動デモは実用外。本質ボトルネックは講師の内的確信。収録前に以下を自己PoCで潰す。

プラン詳細：`/Users/tchytky/.claude/plans/replicated-frolicking-sparkle.md`

### 自己PoC リスト（怖い順は未決定、走りながら選ぶ）
- [x] **#1 MCP実戦**（S3-V3 Slack）— **完走**（2026-04-16）、台本フルリライト実施
- [ ] #2 Windows環境構築（S1-V3：Parallels or 実機）
- [ ] #3 Cursor専業開発（S5-V4を VSCode封印で通す）
- [ ] #4 教材動画制作そのもの（S1-V1 を1本完成）

---

## PoC #1：S3-V3 Slack MCP を実際に接続して日報生成まで通す

### Step 1：新規テストワークスペース作成＋ダミーデータ（15〜20分目安）
- [ ] slack.com/create で新規作成（例：`Claude-MCP-test`）
- [ ] チャンネル作成：`#general` / `#営業` / `#企画` / `#事務` / `#random`
- [ ] 各チャンネルに日報題材になる投稿を3〜5件（例：「A社に提案書送付」等）

### Step 2：Slack App 作成と Bot Token 取得（10分目安）
- [ ] api.slack.com/apps → Create New App → From scratch（名前は任意）
- [ ] Bot Token Scopes を追加：
  - `channels:history`, `channels:read`
  - `groups:history`, `groups:read`
  - `users:read`
  - `chat:write`（投稿させるなら）
- [ ] Install to Workspace → **Bot User OAuth Token（`xoxb-...`）** をコピー
- [ ] **Team ID** を控える（ワークスペース設定 or URL から）

### Step 3：Slack MCP を Claude Code に登録（15〜30分、詰まり可能性あり）
- [ ] `claude mcp add slack -- npx -y @modelcontextprotocol/server-slack`
- [ ] 環境変数：`SLACK_BOT_TOKEN=xoxb-...` と `SLACK_TEAM_ID=T...` を渡す
- [ ] Claude Code を再起動
- [ ] `/mcp` で `slack: connected` を確認

### Step 4：動作検証（軽い→重い、30分目安）
- [ ] 軽い：「#generalの直近投稿を5件要約して」
- [ ] 中：「全チャンネルの昨日の投稿をまとめて」
- [ ] 本番：「過去7日間の全チャンネル横断で、営業／企画／事務の活動を集約、経営層向け日報をHTML化」

### Step 5：記録と台本穴埋め
- [ ] 実コマンド／最小スコープ／config実パス／詰まりをこのファイルに追記
- [ ] 所要時間（Step 1〜4実測）を記録
- [ ] 必要なら `docs/scripts-data.js` の S3-V3 を更新

---

## PoC #1 実施ログ（2026-04-16 完走）

### 実測所要時間（概算）
- Step 1（ワークスペース作成＋チャンネル4つ）: 約15分
- Step 2（Slack App 作成＋Bot Token 取得）: 約10分
- Step 3（ダミー投稿スクリプト化・実行）: 約10分（当初手動想定→土屋さん発案で API 自動化に切替）
- Step 4（MCP 登録＝`claude plugin install slack`＋OAuth）: 約20分（うち10分はワークスペース取り違え復旧）
- Step 5（軽→中→本番テスト・HTML生成）: 約10分
- 合計: 約65分

### 判明した事実（重要：当初計画と大きく乖離）
- **`@modelcontextprotocol/server-slack` は 2025-04 にアーカイブ／deprecated**（2026 年時点で教えるべきではない）
- **現行の正解パスは Slack 公式プラグイン** `slackapi/slack-mcp-plugin`
- MCP 登録コマンド: `claude plugin install slack` — **1コマンドで完了**
- 認証方式: **OAuth**（HTTP transport、URL: `https://mcp.slack.com/mcp`）。Bot Token 手動発行は不要
- admin 承認の独立 UI は見当たらず → OAuth 画面で admin として承認すれば兼ねる
- プラグインの `.mcp.json` 実パス: `~/.claude/plugins/cache/claude-plugins-official/slack/1.0.0/.mcp.json`（自動配置）
- MCP 登録後の Slack 側ツール数: 13（search / messaging / canvas / user 系）
- **Bot Token の出番はダミー投稿 seed スクリプトのみ**（台本本編では不要）

### 詰まりポイント
- **OAuth 時のワークスペース選択ミス**：ブラウザで Ript（実会社）と Claude-MCP-demo の両方にログインしていたため、OAuth 画面の Workspace ドロップダウンが Ript 初期選択 → そのまま許可してしまい実会社ワークスペースに繋がった。`/mcp` → `Clear authentication` → 再認証時にドロップダウンを手動切替で復旧
- **Bash 内の Python インライン展開が全角クォートと衝突**：`slack-poc-seed.sh` の Python インラインが壊れたため、最初から `.py` で書き直した
- **Anthropic API の一過性 500 エラー**：Slack チャンネル作成中に 1 度発生、待つと復旧（無視して OK）
- `.env.slack-poc` の初回 auth.test が `invalid_auth` を返す瞬間があったが、リトライで OK に。原因特定できず（一過性と判断）

### 7分動画で語れるか判断
- [x] **語れるが修正要** — 台本を「1コマンド＋OAuth」前提にフルリライト済み
  - `docs/scripts-data.js` の `S3-V3` 書き換え完了
  - `docs/curriculum-review.html` の S3-V3 構成7項目 書き換え完了

### 収録前の追加準備メモ
- OAuth 画面のワークスペース選択ミスは受講者も踏む可能性大 → 動画内で必ず実演する（書き換え済み）
- 生成された HTML 日報サンプル: `tasks/daily-report-20260416.html`（PoC成果物、収録素材にそのまま使える）
- ダミー投稿 seed スクリプト: `scripts/slack-poc-seed.py`（S3-V3 本編では使わないが、他講座で「Slack APIを直接叩く」題材として再利用可）

---

## 後続タスク（PoC #1 完了後）

### PoC #2〜#4
- Windows環境構築、Cursor専業開発、S1-V1収録 — PoC #1が終わったら着手判断

---

## S1-V1：超実践的なClaude Code講座の全体像（約5分）

### 収録前チェックリスト
- [ ] スライド①「表紙」（タイトル・講師名）を作成
- [ ] スライド②「3トラック構成図」（Skills / MCP / API）を作成
- [ ] Screen Studio のセットアップ確認（マイク・画面解像度）
- [ ] 台本を手元または別モニタに表示

### 収録
- [ ] 5分前後で一発通し録画（噛みは気にしない）

### 収録後の4観点検証
- [ ] **時間配分**：実測◯分◯秒 → 目標5分との差分
- [ ] **画面操作の実現性**：スライド遷移だけで成立したか
- [ ] **デモ素材の抜け**：スライド2枚以外に欲しかったビジュアルは？
- [ ] **説明の粒度**：
  - `1:30-2:00` MCP例4つ列挙が重くないか
  - `2:30-3:00` API例5つ列挙が重くないか
  - 情報過多シーンは代表2個＋「など」に絞る判断

### 台本修正（必要なら）
- [ ] `docs/scripts-data.js` の S1-V1 エントリ更新
- [ ] 構成変更が入るなら `docs/curriculum-review.html` も更新

### 次への展開判断
- [ ] 台本方針の大幅修正が必要か？
  - Yes → S1-V2に進む前に他の既存台本へ横展開レビュー
  - No → S1-V2（初めてのClaude Code）の収録準備へ

---

## レビュー（収録後に記入）

（S1-V1の収録・検証が完了したら、ここに学びをまとめる。
 同じ観点がS1-V2以降の収録でも使えるようテンプレ化する）
