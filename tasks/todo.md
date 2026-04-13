# Claude Code講座 制作進捗

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

### 土屋と1本ずつレビュー → HTML反映（進行中）
- [x] **V2: Skills Creator ✅確定**（経理マン×ドレミファエア月次レポート題材）
  - デモデータ `demos/doremifa-air/` 作成済（financials.csv／board-notes.md／business-notes.md）
  - 書籍「経理AI実践ガイド ケース08」は発想の参照のみ、プロンプト直接引用なし
  - 出力はHTMLインフォグラフィック、チーム共有は口頭で一言、S3-V3予告なし
- [ ] **V3: Slack MCP ← 次セッション開始地点**
- [ ] V4: Notion MCP
- [ ] V5: Figma MCP
- [ ] V6: X MCP
- [ ] 合意した内容で `docs/curriculum-review.html` S3-V2〜V6の該当箇所を書き換え
- [ ] 書き換え完了後、V1と同様に台本化（scripts-data.js）フェーズへ

### 次セッション開始時のプロンプト案
```
tasks/s3-drafts.md を読んで、V3（Slack MCP）のレビューから始めよう。
冒頭の確認事項サマリの通りで、下記3点を決める：
1. ターゲット：経営層向けサマリーか、個人向け（自分の議論要約）か
2. MCP実装の選定：modelcontextprotocol/servers公式 or npaka実装 or 他（2026-04時点で動くもの調査必要）
3. 出力形式：Markdownで止める or HTML完成品（V2でHTMLやるので差別化でMarkdownもアリ）
V2確定の経緯は tasks/s3-drafts.md 冒頭と s3-drafts.md#S3-V2 参照。
```

### V3レビュー用の土屋向け問いかけメモ
- V3はMCP初登場動画。MCPの定義説明（USB-C比喩）に尺を割く設計
- 題材デモは「日報・週報自動生成」ドラフト済み、ターゲット次第で微調整
- S3全体の主人公は経営層・マネージャー層で一貫してきた（V1経営者／V2経理マン）
- 実装はSlack MCPが複数ある状態。撮影時に動くものを事前特定する必要あり

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
