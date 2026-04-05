# Boris Cherny 語録（Claude Code作者）

Claude Code講座の台本・構成で引用可能な発言集

---

## 「箱から出したまま」系

> "Claude Code works great out of the box, so I personally don't customize it much."
> （Claude Codeは箱から出したままでも十分使える。僕自身もあまりカスタマイズしてない）

> "My setup might be surprisingly vanilla!"
> （僕のセットアップは驚くほどバニラかもしれない！）

> "There is no one correct way to use Claude Code: we intentionally build it in a way that you can use it, customize it, and hack it however you like. Each person on the Claude Code team uses it very differently."
> （使い方に正解はない。好きなように使えるよう意図的に作ってる。Claude Codeチームのメンバーもみんな使い方が全然違う）

**講座での活用:** S1の「魔法体験」のコンセプトを裏付ける。作者本人が「箱から出したままでOK」と言ってる。

---

## CLAUDE.md 系

> "Claudeが何か間違ったことをしたら、次はそうならないようにCLAUDE.mdに追加する"
> （反復的改善のアプローチ）

- チームで単一のCLAUDE.mdをリポジトリで管理し、週に複数回更新
- 「複合エンジニアリング」= 制度的知識をコードベースに直接組み込み、すべてのセッションをより賢くする

**講座での活用:** S2「AIの記憶を司るCLAUDE.md」で引用。作者のチームも実践してるベストプラクティス。

---

## Plan Mode / 計画系

> Plan mode（Shift+Tab×2）で設計段階を重視

**講座での活用:** S5「スペック駆動開発」で引用。

---

## 検証ループ系

> "Claudeに自分の作業を検証する方法を与えることで、品質が2～3倍向上する"

- Claude Chrome拡張機能でブラウザテストを自動実行
- フィードバック機構が品質を大幅に向上させる

**講座での活用:** S5-S6の開発フロー、セルフコードレビューで引用。

---

## 並列実行系

- ターミナルで5つのClaudeセッションを並行実行
- claude.ai/codeでさらに5〜10セッション並行実行
- ローカルとWeb間でセッションを行き来（teleport）
- iPhoneからもセッション開始

**講座での活用:** S6「サブエージェントの活用法」で引用。

---

## セキュリティ系

> "`--dangerously-skip-permissions`を使わず、`/permissions`で安全なコマンドを事前許可する"

- 設定は`.claude/settings.json`に記録、チーム間で共有

**講座での活用:** S2「セキュリティの基本」で引用。

---

## モデル選択

- Opus 4.5 with Thinkingを全てのコーディングで使用

---

## ソース

- [Boris Cherny (Threads)](https://www.threads.com/@boris_cherny/post/DTBVlMIkpcm/)
- [Boris Cherny (X/Twitter)](https://x.com/bcherny/status/2007179832300581177)
- [How the Creator of Claude Code Actually Uses Claude Code (Substack)](https://getpushtoprod.substack.com/p/how-the-creator-of-claude-code-actually)
- [Thread Reader](https://twitter-thread.com/t/2007179832300581177)

---

*収集日: 2026-04-05*
*用途: Claude Code講座の台本で引用・参照*
