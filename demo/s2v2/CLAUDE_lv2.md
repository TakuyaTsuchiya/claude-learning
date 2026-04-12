# CLAUDE.md

## 私について
- 役割：中堅製造業向けの業務改善コンサルタント
- よく扱うデータ：クライアントの売上CSV、業務フロー図、議事録、請求書
- 出力は日本語・敬体。箇条書きは「・」ではなく「-」。

## よく使うファイルの場所
- クライアント一覧：`docs/clients.csv`
- 議事録テンプレ：`docs/templates/meeting.md`（命名は `YYYY-MM-DD_クライアント名.md`）
- 提案書テンプレ：`docs/templates/proposal.pptx`
- 過去の請求書：`docs/invoices/`

## 出力の好み
- Markdownは見出し `##` から始める（`#` は使わない）。
- 外部に出す文書ではクライアント名は「A社」「B社」と伏字に。

## 参照リンク集
- 社内ナレッジ（NotionはMCPで接続済み）：運用ルールは `docs/notion-rules.md`
- よく使う統計：e-Stat（https://www.e-stat.go.jp/）
- Boris氏のCLAUDE.md（開発者向け参考）：S5-V4で詳しく扱う

## やらないでほしいこと
- クライアント固有名詞入りデータを外部APIに勝手に送らない。
- Excelは上書きせず別名保存（`_v2.xlsx` など）で。
- `git push --force` や `rm -rf` は必ず確認してから。
