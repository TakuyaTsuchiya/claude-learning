# Claude Code講座 制作進捗

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
