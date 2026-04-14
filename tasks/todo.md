# Claude Code講座 制作進捗

## S4構成完成度アッププロジェクト（2026-04-14〜進行中）

### 完了
- [x] S4-V1〜V7 並列ドラフト作成（Exploreサブエージェント7並列）→ `tasks/s4-drafts.md`
  - V1: eラーニング（9シーン、LocalStorage進捗、架空ビジネスカレッジ）
  - V2: 請求書・Excel（11シーン、架空○△建設、jsPDF＋openpyxl）
  - V3: オンボーディング（10シーン、部署別HTML3ファイル、架空5名）
  - V4: 週次サマリー（10シーン、S3 MCP応用編、架空スタートアップ.inc、LINE接続方式要確認）
  - V5: LINE Harness（11シーン、Cloudflareデプロイ、架空ライフシフトアカデミー）
  - V6: SEO記事5工程（10シーン、/clear思想＋Skill化、架空キーワード）
  - V7: アタックリスト（11シーン、Sansan事例公開情報、robots.txt配慮）

### 次：土屋と一括レビュー → HTML反映
- [ ] `tasks/s4-drafts.md` 冒頭の確認事項サマリを土屋と一括レビュー
  - V3・V5・V6・V7はタイトル新提案あり（採否判断必要）
  - V4のLINE接続方式（MCP公式／REST API／CSV迂回）確定必要
  - V5の大手SaaS伏字・Cloudflare事前セットアップの運用
- [ ] 合意内容で `docs/curriculum-review.html` S4-V1〜V7の該当箇所を一括書き換え
- [ ] 書き換え完了後、台本化（scripts-data.js）フェーズへ

### 次セッション開始時のプロンプト案
```
tasks/s4-drafts.md を開いて、冒頭の「土屋への確認事項サマリ」を上から順にレビューしていこう。
まずV1から始めて、各動画ごとに：
1. タイトル：現状維持 or 新提案どちら採用か
2. 題材・デモデータ：この架空データで進めてOKか
3. 各動画固有の要確認事項（V4のLINE接続方式、V5のCloudflare運用等）
を決める。全7本合意が取れたら、docs/curriculum-review.html の S4-V1〜V7
（693-811行目）を一括書き換え。完了後、S3-V2〜V6と合わせて台本化（scripts-data.js）へ。
```

### V4レビュー時の特記事項
- V4「週次サマリー」はS3 MCP応用編の位置付け。LINE MCP公式実装の現時点状況を要調査（撮影時に動くものの事前特定が必要）
- S3-V2（月次Skill）vs S4-V4（週次複合MCP）の使い分け説明が重要

### V5レビュー時の特記事項
- Cloudflare初期設定は撮影でどこから始めるか要決定：
  - 案A：アカウント作成〜Workers設定済み前提（撮影は `wrangler deploy` から）
  - 案B：ゼロからデモ（時間長いが受講者の「自分でできる」実感が強い）
- LINE Official Account Webhook実機テストの可否（配信テスト成功まで見せるか、結果画像で代替か）

---

## S3構成完成度アッププロジェクト（2026-04-14〜進行中）

### 完了
- [x] CLAUDE.mdに構成レビュー評価軸を追加（必須7項目＋設計引き出し3種＋お手本2本）
- [x] S3-V1再設計：shinkoku題材で6:00・11シーン構成
- [x] S3-V7削除（セクション7本→6本、35分→30分）
- [x] S3-V2〜V6 並列ドラフト作成（Exploreサブエージェント5並列）→ `tasks/s3-drafts.md`
  - [x] V2: Skills Creator（10シーン、PR毎朝レビュー題材で案）
  - [x] V3: Slack MCP（11シーン、USB-C比喩でMCP初登場）
  - [x] V4: Notion MCP（11シーン、「組織の記憶」へ再定義）
  - [x] V5: Figma MCP（11シーン、デザイン↔実装・公式版Dev Mode MCP推奨）
  - [x] V6: X MCP（10シーン、xmcp採用・S3全体の締めくくり）

### 土屋と1本ずつレビュー → HTML反映
- [x] **V2: Skills Creator ✅確定**（経理マン×ドレミファエア月次レポート題材）
  - デモデータ `demos/doremifa-air/` 作成済（financials.csv／board-notes.md／business-notes.md）
  - 書籍「経理AI実践ガイド ケース08」は発想の参照のみ、プロンプト直接引用なし
  - 出力はHTMLインフォグラフィック、チーム共有は口頭で一言、S3-V3予告なし
- [x] V3: Slack MCP（USB-C比喩／公式`modelcontextprotocol/servers`前提でドラフトそのまま採用）
- [x] V4: Notion MCP（「組織の記憶」再定義／経営課題抽出HTMLダッシュボード）
- [x] V5: Figma MCP（マネーフォワードから差し替え／公式Dev Mode MCP Server推奨）
- [x] V6: X MCP（X APIから差し替え／xdevplatform/xmcp採用、S3全体の締めくくり）
- [x] **2026-04-14：ドラフトを `docs/curriculum-review.html` に一括転記完了**（V2〜V6、タイトルも更新）

### 次フェーズ：台本化（scripts-data.js）
- [ ] V1と同様に S3-V2〜V6 を `docs/scripts-data.js` の `SCRIPTS` に追加
- [ ] 各動画の `meta`（duration/mode/goal）／`materials[]`／`script[]`（start/end/topic/direction/content/reference）を記述
- [ ] 台本執筆スタイル（CLAUDE.md記載）を厳守：中級者向けの落ち着いた口語体／Step番号不使用／中立化／専門用語の日常語橋渡し／冒頭50〜60秒で「なぜ重要か」


### 参考：S3全体構成の最終形（V7削除後）
| # | 題材 | 役割 |
|---|---|---|
| V1 | Skills（shinkoku） | ✅完成：Skillsの力を体験 |
| V2 | Skills Creator | Skillsを作る |
| V3 | Slack MCP | MCP第1弾（コミュニケーション） |
| V4 | Notion MCP | MCP第2弾（組織の記憶） |
| V5 | Figma MCP | MCP第3弾（デザイン↔実装） |
| V6 | X MCP | MCP第4弾（SNS） |

---

## 完了
- [x] カリキュラム設計書作成（docs/curriculum-design.md）
- [x] 6セクション構成・全32動画テーマ確定
- [x] 制作パイプライン文書化（Gems/Nanobanana/Figmaワークフロー）
- [x] 台本作成Gemsプロンプト保存（docs/script-gems-prompt.yaml）
- [x] スライド生成Gemsプロンプト保存（docs/nanobanana-gems-prompt.yaml）
- [x] WEINデザインスペック保存（docs/wein-design-spec.yaml）
- [x] モジュール作成ルール保存（docs/module-creation-rules.md）
- [x] ソースガイド × 6セクション作成（source-guides/）
- [x] 準備物リスト × 6セクション作成（source-guides/）
- [x] Gems入力テキスト × 32動画作成（gems-inputs/）
- [x] 開始コマンド一覧作成（docs/gems-start-commands.md）
- [x] 本番台本xlsx × 6セクション32動画生成（gems-outputs/CC_セクション1〜6.xlsx）
- [x] S1-V1スライドpptx生成検証（slide-yamls/CC_S1_V1.pptx）— NotebookLMバイパス成功

## 次にやること
- [ ] 残り31動画分のpptxスライド生成
- [ ] 土屋さん・川島さんによる台本レビュー
- [ ] Figmaでスライドデザイン微調整
- [ ] Notion WBSにタスク登録
- [ ] クイズ・課題・ルーブリック作成
- [ ] WisdomBase LMSへ登録（/wb-*スキル群）

## 制作パイプライン（確定）
```
台本xlsx → Claude Code（pptxgenjs）→ pptx → Figma → 撮影 → LMS登録
```
NotebookLMはバイパス。台本生成もClaude Code（Haiku/Sonnet）で直接実行。

## 技術メモ
- 台本生成: S1=Haiku、S2-S6=Sonnet。Haiku品質で十分
- pptx生成: pptxgenjs（グローバルインストール済み）、NODE_PATH=$(npm root -g) で実行
- リポジトリ: https://github.com/TakuyaTsuchiya/claude-learning (private)
