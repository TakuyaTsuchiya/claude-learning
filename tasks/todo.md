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

### 次のセッション：土屋と1本ずつレビュー → HTML反映
- [ ] `tasks/s3-drafts.md` 冒頭の「土屋への確認事項サマリ」を1本ずつ対話で決着
  - [ ] V2: デモ題材確定／テスト実行の現実性／チーム共有シーン
  - [ ] V3: MCP実装選定（公式 vs npaka実装）／HTMLレポート範囲／ワークスペース準備
  - [ ] V4: デモ題材優先順位／Notionデモデータ準備／権限設定の深さ
  - [ ] V5: Figmaファイル準備（LP／ダッシュボード）／公式 vs コミュニティ版／Canvas書き込み実演の要否
  - [ ] V6: テスト用Xアカウント／投稿テーマ／反応分析タイムラグ対応
- [ ] 合意した内容で `docs/curriculum-review.html` S3-V2〜V6の該当箇所を書き換え
- [ ] 書き換え完了後、V1と同様に台本化（scripts-data.js）フェーズへ

### 次セッション開始時のプロンプト案
```
tasks/todo.md と CLAUDE.md の構成レビュー評価軸を読んで、S3のV2〜V6を並列ドラフト作成して。
Exploreサブエージェント5並列で、各担当動画の現状確認→題材調査→構成案ドラフトを出す形で。
お手本はS2-V5（570行目〜）とS3-V1（593行目〜、docs/curriculum-review.html）。
```

### 並列ドラフトの手順（次セッション参考）
1. CLAUDE.mdの構成レビュー評価軸を再読
2. お手本としてS2-V5とS3-V1を `docs/curriculum-review.html` で確認
3. Exploreサブエージェント5並列起動：各エージェントが担当動画の
   - 現状構成を `docs/curriculum-review.html` から読む
   - 題材の公式ドキュメント・リポジトリを調査
   - 評価軸を適用した構成案ドラフト（7項目＋シーンの流れ散文）を出す
4. 5本揃ったら、土屋と1本ずつ対話で微調整→HTML書き換え

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
