var SCRIPTS = {
  "S1-V1": {
    meta: {
      duration: "約5分",
      mode: "スライド（表紙＋3トラック構成図）",
      goal: "講座の全体像を理解し「自分の仕事でもClaude Codeが使える」と確信する"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "講座タイトル表示", timing: "冒頭" },
      { type: "スライド", name: "3トラック構成図", purpose: "業務効率化・アプリ開発・実務フローの3本柱を図示", timing: "Step 5 講座の進め方" }
    ],
    script: [
      { start: "0:00", end: "0:15", topic: "オープニング", direction: "スライド：表紙", content: "Claude Code超実践講座へようこそ。この講座では、Claude Codeの超実践的な使い方をお伝えしていきます。", reference: "" },
      { start: "0:15", end: "0:40", topic: "実務宣言", direction: "表紙のまま", content: "まず最初にお伝えしたいことがあります。<strong>この講座で作るものは、全部そのまま実務で使えるものを作ります。</strong>練習用のサンプルではありません。確定申告、請求書処理、名刺管理――どれも皆さんが明日から業務で使えるものです。", reference: "" },
      { start: "0:40", end: "1:10", topic: "Skills", direction: "表紙のまま", content: "たとえばセクション3では、Skillsという機能を使って確定申告を行います。人間がやると何時間もかかる作業を、Claude Codeが手順どおりに進めてくれます。さらにSkills Creatorという機能を使えば、皆さん自身の業務もスキルにすることができます。", reference: "" },
      { start: "1:10", end: "1:30", topic: "Skillsの組織インパクト", direction: "同上", content: "スキルにするということは、自分だけでなく組織の他のメンバーも同じように使えるようになるということです。一人が作ったスキルが、チーム全体の生産性を上げる。これは非常に大きなインパクトです。", reference: "" },
      { start: "1:30", end: "2:00", topic: "MCP", direction: "同上", content: "セクション3ではMCPという機能も扱います。これを使うと、SlackやNotion、Googleドライブ、Figmaといった普段のツールをClaude Code経由で操作できるようになります。たとえば「Slackのあの情報どうなってる？」と日本語で聞くだけで、Claude Codeが探しに行って答えてくれます。", reference: "" },
      { start: "2:00", end: "2:30", topic: "API・業務自動化", direction: "同上", content: "APIを使った自動化にも取り組みます。Xへの投稿を自動化してSNSマーケティングを効率化したり、LINEの送信を自動化したり。セクション4では、人事向けのeラーニングシステム、経理向けの請求書処理の自動化、オンボーディングチェックリストの自動生成、営業向けの決裁者アタックリスト自動生成など、部署ごとに役立つツールをハンズオンで一緒に作っていきます。", reference: "" },
      { start: "2:30", end: "3:00", topic: "核心メッセージ①", direction: "表紙のまま", content: "この講座で一番大事にしていることをお伝えします。それは<strong>「目の前の問題を、目の前で解決する」</strong>ということです。難しい理論を学ぶのではなく、今まさに困っていることをClaude Codeで片付ける。その体験を積み重ねていく講座です。", reference: "" },
      { start: "3:00", end: "3:25", topic: "核心メッセージ②", direction: "表紙のまま", content: "そしてもう一つ。<strong>皆さんが持っているドメイン知識、つまり業務の専門知識こそが価値の源泉です。</strong>Claude Codeはその知識をプロダクト化するための道具です。エンジニアでなくても、自分の業務を知っている人が一番強い。", reference: "" },
      { start: "3:25", end: "3:50", topic: "人事担当者の実例", direction: "同上", content: "たとえば人事担当の方が、自分の面談ノウハウをSkillにまとめて「面談対策アシスタント」を作る。新人向けのオンボーディング支援ツールを自作する。プログラミングの知識はゼロでも、業務を一番知っている人が作るから実用的なものが出来上がる。これが、ドメイン知識をプロダクト化するということです。", reference: "" },
      { start: "3:50", end: "4:10", topic: "3トラック紹介", direction: "スライド：3トラック構成図に切り替え", content: "講座の全体構成をお見せします。この講座は大きく3つのトラックで構成されています。", reference: "" },
      { start: "4:10", end: "4:25", topic: "トラック①入門", direction: "構成図のまま", content: "まずセクション1とセクション2が入門編。環境構築からClaude Codeの基本操作までをカバーします。", reference: "" },
      { start: "4:25", end: "4:40", topic: "トラック②業務効率化", direction: "同上", content: "セクション3とセクション4が業務効率化編。Skills、MCP、APIといった機能を使って、実際の業務課題を解決していきます。", reference: "" },
      { start: "4:40", end: "4:55", topic: "トラック③アプリ開発", direction: "同上", content: "セクション5とセクション6がアプリケーション開発編。名刺管理アプリ、freee風の会計アプリ、SalesforceのCRMをゼロから作り、データベースの実装やセキュリティまで扱います。最後にバックステージ社のリアルな開発フロー、スペック駆動開発もお伝えします。", reference: "" },
      { start: "4:55", end: "5:10", topic: "Opus推奨＋クロージング", direction: "同上", content: "なお、この講座ではモデルはOpus 4.6の使用を推奨しています。いずれもハンズオンで一緒に手を動かしていく講座です。ぜひ皆さんの業務や私生活で、目の前の問題を解決するために使えるようになってください。それでは、次のビデオでお会いしましょう。", reference: "" }
    ]
  },
  "S1-V2": {
    meta: {
      duration: "約12分",
      mode: "画面収録（Cursorエディター＋ブラウザ）",
      goal: "まず何もインストールせずにCursorで動くClaude Codeを見てもらう"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭" },
      { type: "画面収録", name: "Cursorエディター操作", purpose: "Claude Codeにお題を投げる〜完成まで", timing: "Step 1〜Step 4" },
      { type: "画面収録", name: "ブラウザ表示", purpose: "完成したHTMLを確認", timing: "Step 5" }
    ],
    script: [
      { start: "0:00", end: "0:15", topic: "オープニング", direction: "スライド：表紙", content: "それでは、この動画ではClaude Codeで魔法体験をしていきます。", reference: "" },
      { start: "0:15", end: "0:30", topic: "何もインストールしない宣言", direction: "画面収録：Cursorエディターを映す", content: "<strong>まず何もインストールせずに</strong>、Cursorというエディター上でClaude Codeがどのように動くのかを見ていただきます。", reference: "" },
      { start: "0:30", end: "0:45", topic: "Cursor紹介", direction: "画面収録：Cursorの画面全体を見せる", content: "これがCursorというエディターです。この中でClaude Codeを動かしていきます。早速やってみましょう。", reference: "" },
      { start: "0:45", end: "1:15", topic: "プロンプト入力", direction: "画面収録：Claude Codeのチャット欄にお題を入力", content: "いきなりこんなことを言ってみます。「<strong>回転寿司大手3社の最新のIR情報を比較分析して、見やすいHTMLのウェブサイトにまとめてください。</strong>」", reference: "" },
      { start: "1:15", end: "1:45", topic: "AIはリサーチが得意", direction: "画面収録：送信後の画面", content: "<strong>AIはリサーチがとても得意</strong>ですので、こういったことをサクッとやってくれます。フォルダもファイルも何も用意していませんが、それも全部Claude Codeが勝手に作ってくれます。ちなみに、ステータスバーについては後ほど説明しますね。", reference: "" },
      { start: "1:45", end: "2:15", topic: "リサーチ開始", direction: "画面収録：Claude Codeが応答を返す", content: "「回転寿司大手3社のIR情報を分析し、HTMLサイトにまとめます」と返ってきました。まずリサーチを始めてくれています。大手3社――スシロー、くら寿司、はま寿司ですね。", reference: "" },
      { start: "2:15", end: "3:00", topic: "許可ダイアログの説明", direction: "画面収録：Webサイトへのアクセス許可を求めるダイアログ", content: "ここで「このウェブサイトを見に行っていいですか？」と聞かれます。株探、みん株、くら寿司の公式サイトなどですね。Claude Codeは勝手にアクセスせず、<strong>必ずユーザーに許可を求めてくれます</strong>。もちろん許可を出しましょう。", reference: "" },
      { start: "3:00", end: "4:00", topic: "情報収集の様子", direction: "画面収録：各サイトへアクセスしている表示（タイムラプス）", content: "Yahoo!ファイナンス、流通ニュースサイト、フード&ライフカンパニーズの公式サイトなど、さまざまなウェブサイトを見に行って情報を集めてくれています。こちらは何もする必要がありません。", reference: "" },
      { start: "4:00", end: "5:00", topic: "待ち時間の過ごし方", direction: "画面収録：リサーチ継続中（タイムラプス）", content: "このように情報収集には少し時間がかかります。この間に他の仕事をしていても大丈夫です。Claude Codeが黙々と作業を続けてくれます。", reference: "" },
      { start: "5:00", end: "5:30", topic: "収集完了", direction: "画面収録：「3社分の詳細なIR情報が集まりました」の表示", content: "約4分で、3社分の詳細なIR情報が集まりました。ここからHTMLサイトにまとめていきます。", reference: "" },
      { start: "5:30", end: "6:15", topic: "スキルの自動選択", direction: "画面収録：frontend-designスキルのロード表示", content: "注目してほしいのがここです。「frontend-design」というスキルを自動で読み込んでいます。これはAnthropic公式のスキルで、<strong>見やすいウェブページを作るための専門知識が詰まっています</strong>。特に指示しなくても、Claude Codeが自分で判断して最適なスキルを使ってくれます。", reference: "" },
      { start: "6:15", end: "8:00", topic: "HTML生成中", direction: "画面収録：コード生成の様子（タイムラプス）", content: "資料を作るところも、デザインの指定をしなくてもお任せで作ってくれます。ここも待っている間に他の仕事ができますね。", reference: "" },
      { start: "8:00", end: "8:30", topic: "完成報告", direction: "画面収録：「HTMLファイルを作成しました」の表示", content: "他の仕事をしている間に出来上がりました。約10分で完成です。トークンもまだ3%程度しか使っていません。ブラウザで見てみましょう。", reference: "" },
      { start: "8:30", end: "9:15", topic: "デザイン概要", direction: "画面収録：ブラウザに切り替え、HTMLページ全体を映す", content: "これがClaude Codeが作ってくれた比較分析サイトです。デザインの指定をしなかったので、ダークトーンのデザインになっていますが、このように<strong>指示ひとつで比較分析ができるウェブサイトを作ってくれます</strong>。", reference: "" },
      { start: "9:15", end: "10:00", topic: "データ分析の確認", direction: "画面収録：チャートや数値部分をスクロールして見せる", content: "ビジュアルでも比較できるようになっています。売上も利益もスシローがトップ、くら寿司は利益がやや低い。店舗数もスシローがナンバーワン。こういった分析結果がひと目でわかるようにまとまっています。", reference: "" },
      { start: "10:00", end: "11:00", topic: "便利さの強調", direction: "画面収録：ページ全体を俯瞰", content: "調べるだけでなく、<strong>資料まで一気に落とし込んでくれる</strong>のがClaude Codeの強みです。通常なら何時間もかかるリサーチと資料作成が、10分で完了しました。", reference: "" },
      { start: "11:00", end: "11:30", topic: "習うより慣れる", direction: "画面収録：Cursorエディターに戻す", content: "細かいスキルや設定についてはこのあとの動画で説明していきますが、まず大事なことは<strong>「習うより慣れる」</strong>です。どんどん手を動かして覚えていきましょう。", reference: "" },
      { start: "11:30", end: "12:00", topic: "核心メッセージ＋クロージング", direction: "同上", content: "いろいろな設定や便利なツールが出てきますが、<strong>本質は、皆さんの生活や仕事の中で目の前の問題をどんどん解決していくこと</strong>です。それを繰り返すうちに、Claude Codeの使い方はどんどん上手くなっていきます。それでは、実践的に手を動かしていきましょう。今回の動画はこれでおしまいです。", reference: "" }
    ]
  },
  "S1-V3": {
    meta: {
      duration: "約6分30秒",
      mode: "画面収録（ステータスライン＋ブラウザ＋ターミナル）",
      goal: "トークン消費を体感し、コンテキストウィンドウ管理の重要性を理解する"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "コンテキストウィンドウ概念図", purpose: "作業机の比喩＋200Kトークンの図示", timing: "Step 4 種明かし①" },
      { type: "画面収録", name: "ステータスライン拡大", purpose: "使用率・レート制限リセット時刻を見せる", timing: "Step 2・Step 8" },
      { type: "ブラウザ", name: "OpenAI Tokenizer", purpose: "トークン分解の可視化（日英コード比較）", timing: "Step 3" },
      { type: "画面収録", name: "/context 実演", purpose: "カテゴリ別トークン使用量の可視化", timing: "Step 5" },
      { type: "画面収録", name: "/cost 実演", purpose: "現在のコスト表示", timing: "Step 5" },
      { type: "画面収録", name: "/clear 実演", purpose: "コンテキストリセット", timing: "Step 6" },
      { type: "画面収録", name: "/compact focus 実演", purpose: "フォーカス要約の実行", timing: "Step 6" }
    ],
    script: [
      { start: "0:00", end: "0:30", topic: "オープニング＋核心予告", direction: "スライド：表紙", content: "この動画では<strong>Claude Codeの真髄</strong>に迫ります。いきなり結論から言います。<strong>「Claude Codeで業務するってのは、コンテキストウィンドウとトークンのマネジメントだ」</strong>。これが今日のメッセージです。ただ、いきなりこの話をしてもピンと来ないと思うので、まず<strong>体感から</strong>入りましょう。", reference: "" },
      { start: "0:30", end: "1:15", topic: "前動画の残骸", direction: "画面収録：ターミナルのステータスラインをズームアップ", content: "まずはこれ、前の動画でも出てきた<strong>ステータスライン</strong>。ターミナルの下に、こんな感じで数字が並んでいますよね。コンテキスト使用率とか、レート制限のリセット時刻とか。<strong>前の回転寿司分析の動画だと、ここで3%使っていました</strong>。「3%って何？」「コンテキスト使用率って何？」という感じだと思います。答えは後半でお見せするので、まずは<strong>トークンそのものを触って体感</strong>してみましょう。", reference: "" },
      { start: "1:15", end: "2:15", topic: "OpenAI Tokenizerで体感", direction: "ブラウザ：OpenAI Tokenizerを開く", content: "OpenAIが公開している<strong>Tokenizer</strong>というページを開きます。ここに文章を貼り付けると、<strong>AIがその文章を何トークンとして読むか可視化</strong>してくれます。英語で「Hello, how are you?」と入れると6トークン。同じ内容を日本語で「こんにちは、元気ですか？」と入れると、<strong>ひらがな・漢字は1文字ごとに1〜3トークン</strong>に分かれるので、英語より圧倒的にトークンを食います。さらにコードを貼り付けると、記号や改行まで1つずつトークンになっている。<strong>これがトークンの正体</strong>です。文章もファイルの中身も、全部この単位に分解されてAIに渡されています。", reference: "https://platform.openai.com/tokenizer" },
      { start: "2:15", end: "3:00", topic: "種明かし①コンテキストウィンドウ", direction: "スライド：コンテキストウィンドウ概念図", content: "ここで種明かしです。<strong>コンテキストウィンドウ</strong>というのは、Claudeが一度に保持できるトークンの総量――つまり<strong>AIの「作業机の広さ」</strong>です。Claude Opusは20万トークンまで入ります。ここに会話履歴、ファイル、コマンド出力、CLAUDE.md、読み込まれたスキル、全部が乗ってきます。<strong>公式ドキュメントでもこのトピックだけで1ページ丸々割かれている</strong>くらい、Claude Code習熟の最大の分岐点です。満杯になるとClaudeは自動で圧縮（コンパクト化）しますが、<strong>会話の早い段階の指示が失われる</strong>ことがある。だからこれをちゃんと管理できる人が、Claude Codeを使いこなせる人です。", reference: "https://code.claude.com/docs/ja/context-management" },
      { start: "3:00", end: "4:00", topic: "/context と /cost 実演", direction: "画面収録：ターミナルで /context コマンドを実行", content: "で、今自分が何トークン使っているか・何にスペースを食われているかは、コマンドで見えます。まず<strong>/context</strong>。これを打つと、<strong>システム指示・CLAUDE.md・ツール定義・メッセージ履歴・スキルなど、カテゴリ別にどれくらいトークンを食っているかが可視化</strong>されます。「あ、スキルだけで5千トークン行ってるんだ」というのが一目で分かります。もうひとつが<strong>/cost</strong>。こちらは<strong>現在のトークン使用量とコスト</strong>を表示します。ステータスラインを設定していない時でもこれで確認できる。<strong>ステータスライン常時表示＋節目で /context</strong>、この2本立てが基本です。", reference: "" },
      { start: "4:00", end: "5:15", topic: "/clear と /compact focus", direction: "画面収録：/clear 実行→ステータスラインがリセットされる様子", content: "コンテキスト管理の<strong>一番大事な所作</strong>がこれです。違う仕事に切り替える時は<strong>/clear</strong>。過去の会話を全部消して真っさらからスタートします。前のタスクの情報が残っていると、その後のやり取り全部でトークンを無駄に食い続ける。<strong>「タスクが変わる＝必ず /clear」</strong>を習慣にしてください。一方、<strong>同じタスクを続けたいけど会話が長くなってきた時</strong>は<strong>/compact focus on ○○</strong>。たとえば「/compact focus on API changes」と打つと、<strong>「APIの変更点だけ残して他は要約」</strong>という形で圧縮してくれます。闇雲に要約されるんじゃなく、<strong>残したい内容を自分で指定できる</strong>のがポイントです。", reference: "" },
      { start: "5:15", end: "5:45", topic: "auto-compactの落とし穴", direction: "画面収録：auto-compactが走った時の表示例", content: "放っておくと、コンテキストが満杯になった時に<strong>auto-compact（自動要約）</strong>が走ります。便利ですが、<strong>会話の早い段階で出した指示が消えることがある</strong>。「さっき『こういう書き方はダメ』って言ったのに、またやってる……」みたいな現象はこれが原因です。対策は<strong>永続的なルールをCLAUDE.mdに書いておく</strong>こと。CLAUDE.mdは毎回コンテキストに読み込まれるので、auto-compactで消えません。CLAUDE.mdの書き方は<strong>セクション2でじっくり扱います</strong>。", reference: "" },
      { start: "5:45", end: "6:15", topic: "Proプラン推奨", direction: "画面収録：ステータスラインのレート制限表示部分", content: "もう一点、現実的な話。<strong>Claude Code Proプラン</strong>を強く推奨します。無料枠だとレート制限にすぐ引っかかって、1日の途中で「はい終わり」になります。ステータスラインの右側に<strong>「あと何時間でレート制限がリセットされるか」</strong>が出ているので、ここを見ながら使う。業務で本気で使うなら<strong>Proプラン一択</strong>です。", reference: "" },
      { start: "6:15", end: "6:45", topic: "核心メッセージ再掲＋クロージング", direction: "スライド：表紙に戻す", content: "というわけで、最後にもう一度。<strong>「Claude Codeで業務するってのは、コンテキストウィンドウとトークンのマネジメントだ」</strong>。これが使いこなしの核です。<strong>/context</strong>で状況を見て、<strong>/clear</strong>で切り替えて、<strong>/compact focus</strong>で残したい情報を指定する。この3つを押さえるだけで、Claude Codeの<strong>精度と安定感が一段階上がります</strong>。次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S1-V4": {
    meta: {
      duration: "約11分",
      mode: "画面収録（Finder＋ターミナル＋エディタ＋ブラウザ）",
      goal: "自社データを使った実務ツールをClaude Codeで作れることを体験する（ホテル営業向け自動見積りHTMLツール）"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "サンプルデータ", name: "demo/s1v4/product_catalog.csv", purpose: "ホテル営業向け製品カタログ（TV 5メーカー・Wi-Fi機器・配線部材・工事費 全33品目／原価＋単価）", timing: "Step 2" },
      { type: "サンプルデータ", name: "demo/s1v4/meeting_memo.md", purpose: "商談メモ（ザ・パークビューホテル東京／82室／2026年秋リニューアル／予算1200万円）", timing: "Step 2" },
      { type: "サンプルデータ", name: "demo/s1v4/past_quote.xlsx", purpose: "過去の成約見積書（フォーマットのお手本）", timing: "Step 2" },
      { type: "画面収録", name: "Claude Codeでツール生成", purpose: "要件を投げる→Planモード→実装→完成", timing: "Step 3〜4" },
      { type: "画面収録", name: "自動見積りツール操作", purpose: "商談メモ貼付→自動生成→商品変更→備考チェック→利益率アラート→値引き調整→Excelエクスポート", timing: "Step 5" },
      { type: "出力成果物", name: "index.html（シングルHTMLツール）", purpose: "ブラウザで開くだけで動作する自動見積りツール", timing: "Step 4〜5" },
      { type: "出力成果物", name: "見積書.xlsx（エクスポート結果）", purpose: "ツールから出力される見積書Excel", timing: "Step 5末" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング・意外性フック", direction: "スライド：表紙", content: "この動画では「営業マン向けの自動見積り作成ツール」を作っていきます。", reference: "" },
      { start: "0:25", end: "1:15", topic: "課題設定", direction: "画面収録：Finderでdemo/s1v4/を開く", content: "今回は<strong>ホテルに備品を提供しているBtoB営業マン</strong>の業務を想定しています。テレビ、Wi-Fi機器、工事費など品目が多く、商談のたびに製品カタログを見ながら見積書を作るのは大変ですよね。これを自動化するツールをClaude Codeで作ります。", reference: "" },
      { start: "1:15", end: "2:45", topic: "サンプルデータ紹介", direction: "画面収録：3ファイルを順番にエディタで開いて見せる", content: "まず用意したのは2つのファイルです。①<strong>製品カタログCSV</strong>：テレビ5メーカー、Wi-Fi機器、配線部材、工事費まで全33品目。<strong>原価と単価の両方</strong>が入っています。②<strong>過去の成約見積書Excel</strong>：フォーマットのお手本として使います。", reference: "demo/s1v4/product_catalog.csv / meeting_memo.md / past_quote.xlsx" },
      { start: "2:45", end: "3:45", topic: "要件をClaude Codeに投げる", direction: "画面収録：ターミナルでClaude Code起動→要件入力", content: "Claude Codeに要件を伝えます。「この2ファイルをもとに、商談メモから見積書を自動生成するアプリを作って。HTMLで使いたいです。商品はプルダウン変更可能、備考欄は定型文のチェックボックスで選べるように、利益率を常時表示して<strong>20%を下回ったらアラート</strong>する機能も欲しいです。値引きする機能も欲しい。最終的にExcelエクスポートできるように」と伝えます。", reference: "" },
      { start: "3:45", end: "7:00", topic: "Claude Code実装", direction: "画面収録：Planモード→コード生成（タイムラプス）", content: "Claude Codeが要件を理解して、まずPlanモードで設計を立ててから実装に入ります。待っている間に他の仕事ができますね。", reference: "" },
      { start: "7:00", end: "7:45", topic: "実装完了・ブラウザで起動", direction: "画面収録：index.htmlをダブルクリック", content: "出来上がりました。<strong>index.htmlをダブルクリックするだけ</strong>、サーバーも何も起動しません。ブラウザで開きます。", reference: "" },
      { start: "7:45", end: "8:30", topic: "商談メモから自動生成", direction: "ブラウザ操作：商談メモ貼付→生成ボタン", content: "商談メモを貼り付けて「見積書を生成」をクリック。ザ・パークビューホテルの要望に合わせて、テレビ、Wi-Fi機器、配線、工事費まで、<strong>商談内容に合った製品が自動で選ばれて見積書ができあがります。</strong>", reference: "" },
      { start: "8:30", end: "9:00", topic: "商品変更・数量調整", direction: "ブラウザ操作：プルダウンで商品差し替え", content: "商品はプルダウンで変更できます。「スイート用は有機ELに変えたいな」と思ったらポチポチ変更。数量も自由に調整できます。", reference: "" },
      { start: "9:00", end: "9:30", topic: "備考チェックボックス", direction: "ブラウザ操作：チェックボックスを順に選択", content: "備考欄は定型文から選ぶチェックボックス形式。「配送費は弊社負担」「1年保証」「支払いは翌月末」といったパターンが用意されているので、<strong>選ぶだけで見積書に反映されます。</strong>", reference: "" },
      { start: "9:30", end: "10:15", topic: "利益率アラート・値引き調整", direction: "ブラウザ操作：利益率表示の拡大・値引き入力", content: "ここがポイント。<strong>利益率が常に表示されていて、20%を下回ると赤いアラートが出ます。</strong>値引きしすぎたらすぐにわかる。値引き額を調整して、ちょうどいいバランスに追い込めます。", reference: "" },
      { start: "10:15", end: "10:35", topic: "Excelエクスポート", direction: "ブラウザ操作：エクスポートボタン→Excelで開く", content: "最後に「Excelエクスポート」ボタンを押すと、<strong>見積書がExcelファイルとして出力されます。</strong>これでお客様にすぐ提出できますね。", reference: "" },
      { start: "10:35", end: "11:10", topic: "まとめ・核心メッセージ", direction: "スライド：表紙に戻す", content: "環境構築セクションなのに、実務で使える自動見積もりツールが完成しました。<strong>皆さんの会社のデータを使えば、明日からこれと同じことができます。</strong>ドメイン知識＝価値の源泉、この講座のコアメッセージをまず体感していただきました。次のビデオでお会いしましょう。", reference: "" }
    ]
  },
  "S1-V5": {
    meta: {
      duration: "約7分45秒",
      mode: "画面収録（エディタ＋Claude Code＋ブラウザ）",
      goal: "アジェンダMarkdown1枚からHTML静的サイトを一発生成できるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "サンプルデータ", name: "demo/s1v5/agenda.md", purpose: "架空企業『驚安堂』の2026年夏新商品リリース説明会アジェンダ（PB『マジ価格NEO』10商品・販路・SNS施策・KPI・スケジュール）", timing: "Step 2〜3" },
      { type: "画面収録", name: "Claude CodeでHTML生成", purpose: "アジェンダを投げる→frontend-designスキル自動選択→コード生成", timing: "Step 4" },
      { type: "画面収録", name: "完成HTMLをブラウザで確認", purpose: "1ページに整理された会議資料サイトを上から下まで見せる", timing: "Step 5" },
      { type: "出力成果物", name: "index.html（社内会議用ワンページサイト）", purpose: "ブラウザで開くだけ／URL1本で配布できる会議資料", timing: "Step 5〜6" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、<strong>社内会議用の資料を、HTMLサイトでサクッと作る方法</strong>をお伝えします。スライド作成からの解放、と言ってもいいかもしれません。", reference: "" },
      { start: "0:25", end: "1:15", topic: "スライドの問題提起", direction: "表紙のまま", content: "会議資料って、皆さんスライドで作ること多いですよね。でも、けっこう大変じゃないですか？<strong>テキストボックスのレイアウト調整、表のセル幅合わせ、画像の位置決め、色の統一</strong>――気がつくと内容より体裁に時間を使っている。しかも1スライドに入る情報量って、すごく限られているんですよ。", reference: "" },
      { start: "1:15", end: "1:45", topic: "HTMLサイトという選択肢", direction: "表紙のまま", content: "そこで提案したいのが、<strong>HTMLサイトで作るという選択肢</strong>です。「HTMLは難しそう…」と思うかもしれませんが、大丈夫。Claude Codeが全部書きます。皆さんは、会議のアジェンダさえ用意すればOKです。", reference: "" },
      { start: "1:45", end: "2:30", topic: "題材紹介", direction: "画面収録：エディタでdemo/s1v5/agenda.mdを開く", content: "今回は架空のディスカウントストア<strong>『驚安堂』の夏の新商品リリース説明会</strong>、これを題材にしてみます。マーケ部から営業・店舗運営・海外事業部に向けた、PB新商品10品目のお披露目会、というシナリオです。", reference: "demo/s1v5/agenda.md" },
      { start: "2:30", end: "3:30", topic: "アジェンダの中身を見せる", direction: "画面収録：agenda.mdをゆっくりスクロール", content: "これがアジェンダのMarkdownです。日時、参加者、市場背景、<strong>新商品10品目の表、販路、SNS施策、KPI、スケジュール、各部へのお願い</strong>――けっこう情報量ありますよね。これをスライドで作ったら、20枚は超えちゃう。レイアウト調整だけで半日仕事です。", reference: "demo/s1v5/agenda.md" },
      { start: "3:30", end: "4:15", topic: "Claude Codeに投げる", direction: "画面収録：Claude Codeのチャット欄に入力", content: "Claude Codeにこう投げます。「<strong>demo/s1v5/agenda.md をもとに、社内会議用のHTMLサイトを作って。frontend-designスキルを使って、見やすく整理して。</strong>」これだけです。アジェンダのファイルパスとお願いを伝えるだけ。", reference: "" },
      { start: "4:15", end: "5:30", topic: "frontend-designスキル＋生成", direction: "画面収録：frontend-designスキル読み込み→コード生成（タイムラプス）", content: "<strong>frontend-designスキルが自動で読み込まれます。</strong>これはAnthropic公式のスキルで、見やすいウェブページを作るための専門知識が詰まっています。商品10品目の表、販路、KPIの数字、スケジュール――それぞれを見やすいセクションに分けてレイアウトしてくれます。この間、他の仕事をしていてOKです。", reference: "" },
      { start: "5:30", end: "6:30", topic: "完成HTMLをブラウザで確認", direction: "画面収録：ブラウザでindex.htmlを開く→上から下までスクロール", content: "出来上がりました。ブラウザで開きます。トップに会議名と日時、目次。スクロールすると、市場背景、商品ラインアップは見やすい表、販路はカード型、KPIは数字を大きく見せる、スケジュールはタイムライン――<strong>スライドだったら20枚以上必要だった内容が、1ページにまとまっています。</strong>", reference: "" },
      { start: "6:30", end: "7:00", topic: "URL共有で配布完了", direction: "画面収録：URLバーをハイライト／Slackに貼り付ける想定", content: "あとはこのHTMLをどこかに置いてURLを発行するだけ。Slackやメールで「これ見ておいてください」とURLを貼れば、<strong>配布完了です。</strong>ファイル添付・バージョン違い・印刷配布、そういう手間はもうゼロ。", reference: "" },
      { start: "7:00", end: "7:45", topic: "まとめ・クロージング", direction: "スライド：表紙に戻す", content: "スライド作成にかけていた時間を、本来やりたい仕事に取り戻しましょう。<strong>アジェンダをClaude Codeに投げて、URLを共有する。</strong>今日から皆さんの会議資料の作り方を変えるのに、追加スキルは何も要りません。それでは、次のビデオでお会いしましょう。", reference: "" }
    ]
  },
  "S2-V1": {
    meta: {
      duration: "約8分20秒",
      mode: "画面収録（ターミナル＋Claude Code）",
      goal: "mkdir/cd, /init, /clear, /compact, --resume, Planモードを使い分けられるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "画面収録", name: "ターミナル操作", purpose: "exit→mkdir→cd→claude起動→/init", timing: "Step 1〜2" },
      { type: "画面収録", name: "/clear・/compact・--resume", purpose: "各コマンドの実行と効果、auto-compactの説明", timing: "Step 3〜5" },
      { type: "画面収録", name: "Planモード実演", purpose: "Shift+Tab×2で切替→plan mode on→計画表示→承認で実装", timing: "Step 6" }
    ],
    script: [
      { start: "0:00", end: "0:20", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、Claude Codeの<strong>基本コマンドとPlanモードの使い方</strong>をお伝えします。", reference: "" },
      { start: "0:20", end: "0:50", topic: "フォルダ作りはClaude Codeの外でやる", direction: "画面収録：Claude Codeから exit して抜ける", content: "まずはプロジェクト用のフォルダを作って、そこに移動します。<strong>これが一番大事です</strong>。ちなみにこの作業は<strong>Claude Codeの外で行います</strong>。もしClaude Codeが起動していたら、一旦 <strong>exit</strong> で抜けてください。", reference: "" },
      { start: "0:50", end: "1:35", topic: "mkdir / cd でプロジェクト作成・移動", direction: "画面収録：Documents配下でmkdir→cd", content: "Documentsの配下で <strong>mkdir my-project</strong>。これで「my-project」というフォルダが作れました。そこに移動しましょう。<strong>cd my-project</strong> で、今このプロジェクトフォルダの中に入った状態です。", reference: "" },
      { start: "1:35", end: "1:55", topic: "claudeコマンドで起動", direction: "画面収録：ターミナルで claude 実行", content: "ここで <strong>claude</strong> というコマンドを打つと、このディレクトリの中で作業ができるようになります。Claude Codeは<strong>今いるフォルダの中で働く道具</strong>なので、新しい仕事を始めるときはまずフォルダを作る、と覚えてください。", reference: "" },
      { start: "1:55", end: "2:15", topic: "/init でプロジェクト初期化", direction: "画面収録：Claude Code内で /init 実行", content: "起動したClaude Codeの中で、まず <strong>/init</strong> を打ちます。これで何が起きるかというと、<strong>CLAUDE.md というマークダウンファイルが自動で作られる</strong>んです。", reference: "" },
      { start: "2:15", end: "2:40", topic: "CLAUDE.mdはプロジェクトの取扱説明書", direction: "画面収録：生成されたCLAUDE.mdを開く", content: "このファイルはとても重要で、Claude Codeが<strong>毎回読み込む「このプロジェクトの取扱説明書」</strong>です。プロジェクトのルール・構成・注意点を書いておくと、以降ずっと守ってくれます。書き方の詳細は、次の動画で扱います。", reference: "" },
      { start: "2:40", end: "3:20", topic: "/clear はこの講座で一番大事", direction: "画面収録：/clear 実行", content: "さて、次が<strong>今日いちばん大事な話</strong>です。<strong>/clear</strong> というコマンドがあります。/clearを押すと、これまでの内容が全部消えます。<strong>1つの作業が終わったら、すぐに/clear</strong>することを推奨しています。", reference: "" },
      { start: "3:20", end: "3:50", topic: "文脈を貯めると精度が落ちる", direction: "画面収録：/clear 実行後の画面", content: "これで会話の履歴が全部リセットされます。「せっかく話した文脈が消えちゃうのもったいない」と思うかもしれませんが、<strong>実は逆</strong>で、文脈を貯めたままだとClaude Codeの精度がどんどん落ちます。なので、<strong>この講座では/clearを強く推奨します</strong>。", reference: "" },
      { start: "3:50", end: "4:17", topic: "なぜ/clearが効くか①毎回全履歴を送り直している", direction: "画面収録：会話履歴のイメージ図", content: "なぜ/clearが効くのか、仕組みをお話しします。実はClaude Codeは、皆さんがメッセージを送るたびに<strong>これまでの会話全文を毎回丸ごと送り直している</strong>んです。Claude Code自身は過去のやり取りを覚えていないので、過去のやり取り全部＋今回の入力、を一緒にまとめて投げている。だから<strong>履歴が長くなるほど、1ターンごとに読む量が累積して重くなっていく</strong>わけです。", reference: "" },
      { start: "4:17", end: "4:45", topic: "なぜ/clearが効くか②上限固定・空きを取り戻す", direction: "画面収録：コンテキストウィンドウのゲージ", content: "ここで大事なのが、<strong>コンテキストウィンドウには上限がある</strong>ということ。/clearは、その<strong>コンテキストウィンドウの空きを取り戻す</strong>動作です。", reference: "" },
      { start: "4:45", end: "5:05", topic: "精度と速度も戻る", direction: "同上", content: "空きを取り戻すことによって、<strong>精度も元に戻ります</strong>。Claude Codeは長い会話履歴を抱えると、注意力が薄まって関係ない昔の話に引っ張られるんですね。そして<strong>スピードも戻ります</strong>。毎ターン送り直す量が減るから応答も早い。この3つが一気に戻るのが/clearです。", reference: "" },
      { start: "5:05", end: "5:40", topic: "/compact と auto-compact の前に/clear", direction: "画面収録：auto-compactが走るイメージ", content: "Claude Codeには他に <strong>/compact</strong> という機能もあります。コンテキストが埋まってくると、実はClaude Codeが自動でこの/compactをしてくれて、これまでの内容を要約してくれます。ただ、<strong>要約するときに情報がかなりぼやける</strong>ので、<strong>auto-compactが入る前に自分で/clearする</strong>――これが上級者の使い方です。", reference: "" },
      { start: "5:40", end: "6:35", topic: "--resume で前回のセッションを復元", direction: "画面収録：claude --resume 実行→セッション選択", content: "/clearした後で「やっぱりさっきの続きをやりたい」というときは、<strong>--resume</strong> を使うと前のセッションを復元できます。過去のセッションから戻れるので、<strong>安心して/clearできます</strong>。", reference: "" },
      { start: "6:35", end: "6:57", topic: "Planモードの入り方（Shift+Tab×2）", direction: "画面収録：Shift+Tabを2回押す→「plan mode on」表示", content: "さて、ここからがもう一つの主役、<strong>Planモード</strong>です。入り方は簡単、<strong>Shift+Tabを2回</strong>押すだけ。すると「plan mode on」という状態になります。Shift+Tabを押すとモードがくるくる切り替わるので、2回でPlanモードに入ります。", reference: "" },
      { start: "6:57", end: "7:10", topic: "Planモードは計画だけを返す", direction: "画面収録：お願い→計画だけが返る", content: "この状態でClaudeにお願いをすると、<strong>Claude Codeはまず実装せずに、計画だけ立てて返してきます</strong>。", reference: "" },
      { start: "7:10", end: "7:30", topic: "Boris氏（Claude Code開発者）の推奨", direction: "画面収録：計画が表示される画面", content: "なぜこれが効くのか。<strong>Claude Codeの開発者であるBoris氏も「まずPlanしてから実装すると手戻りが少ない」</strong>と言っています。世界のトップ開発者、しかもClaude Code自身を作った人の推奨ですから、これは素直に真似した方が得です。", reference: "Boris氏（Claude Code開発者）の発言" },
      { start: "7:30", end: "7:50", topic: "Planモードの安心感（読み取り専用・再計画・承認）", direction: "同上", content: "Planモードのいいところは、<strong>この間ファイルは一切変更されない</strong>こと。読み取りだけなので気軽に試せます。出てきた計画を見て「Step 3はこうして」と直せば再計画してくれますし、OKならその計画を承認することで実装に進みます。", reference: "" },
      { start: "7:50", end: "8:00", topic: "使い分け（3ステップ以上は必ずPlan）", direction: "同上", content: "軽微な修正には要りませんが、<strong>3ステップ以上の作業は必ずPlanモードから</strong>、と決めておくのがおすすめです。", reference: "" },
      { start: "8:00", end: "8:20", topic: "まとめ・スペック駆動開発への布石", direction: "スライド：表紙", content: "/initで始めて、作業ごとに/clear、大きな仕事はPlanモードから。この基本動作が<strong>セクション2全体の土台</strong>になります。後ほど学ぶ<strong>スペック駆動開発</strong>も、この「先に考える、先にプランする」の延長線にあります。次の動画は、CLAUDE.mdの書き方です。", reference: "" }
    ]
  },
  "S2-V2": {
    meta: {
      duration: "約6:30",
      mode: "画面収録（エディタ＋Claude Code。スライドは表紙のみ）",
      goal: "非エンジニアでも書けるCLAUDE.mdを自分仕様に育てて、Claude Codeを『取扱説明書付き』で動かせるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "画面収録", name: "CLAUDE.md編集", purpose: "3行テンプレから育てた版まで実編集", timing: "Step 2〜5" },
      { type: "画面収録", name: "Claude Codeで効果確認", purpose: "CLAUDE.md反映後に振る舞いが変わるのを見せる", timing: "Step 3" },
      { type: "サンプルファイル", name: "demo/s2v2/CLAUDE_lv1.md", purpose: "3行テンプレ版（書き始めの見本）", timing: "Step 3" },
      { type: "サンプルファイル", name: "demo/s2v2/CLAUDE_lv2.md", purpose: "業務に馴染ませた育てた版（参照・リンク集・禁止事項）", timing: "Step 5" }
    ],
    script: [
      { start: "0:00", end: "0:20", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、<strong>Claude Codeに毎回読み込ませる取扱説明書『CLAUDE.md』の書き方</strong>をお伝えします。", reference: "" },
      { start: "0:20", end: "0:50", topic: "前動画の復習と位置付け", direction: "画面収録：エディタでCLAUDE.mdを開く", content: "前回 <strong>/init</strong> を打ったら自動で生成された、このCLAUDE.mdというファイル。今回はこれを<strong>自分の仕事用に育てていく</strong>話です。", reference: "" },
      { start: "0:50", end: "1:30", topic: "CLAUDE.mdは毎ターン送信される", direction: "画面収録：CLAUDE.md→会話欄のイメージ図", content: "まず大事なポイント。CLAUDE.mdは<strong>セッションの最初に一度読み込まれて、そのあと毎ターンの会話と一緒にAIへ送信され続ける</strong>ファイルです。前動画で「Claude Codeは毎ターン会話全文を送り直してる」と話しましたが、<strong>CLAUDE.mdもその先頭に毎回乗っかる</strong>イメージ。だからClaude Codeは毎回ちゃんと覚えてる風に動いてくれるんです。", reference: "" },
      { start: "1:30", end: "1:55", topic: "書きすぎ注意の伏線", direction: "同上", content: "裏を返すと、CLAUDE.mdに書きすぎると<strong>毎ターンの入力コストがずっと大きくなる</strong>ということ。これはあとで効いてくるので、頭の片隅に入れておいてください。", reference: "" },
      { start: "1:55", end: "2:10", topic: "まずは3行から", direction: "画面収録：CLAUDE.mdを空にして書き始める", content: "では書いていきます。<strong>結論、最初は3行でOK</strong>です。", reference: "" },
      { start: "2:10", end: "3:00", topic: "Lv.1 3行テンプレを書く", direction: "画面収録：3行を実際に打ち込む", content: "この3行をまず書いてみましょう。<br><br><code>- あなたは経営コンサルタントの業務アシスタントです。<br>- 出力は常に日本語、敬体（です・ます）で。<br>- よく使うファイル置き場：docs/clients/（クライアント資料）、docs/templates/（提案書・議事録の雛形）</code><br><br>書いたら保存。<strong>役割・出力スタイル・ファイルの地図</strong>、この3つが入ってればClaude Codeの振る舞いは明確に変わります。", reference: "demo/s2v2/CLAUDE_lv1.md" },
      { start: "3:00", end: "3:40", topic: "効果を体感する", direction: "画面収録：Claude Codeに「議事録テンプレを見せて」と頼む→docs/templates/を自分で見に行く挙動", content: "試しに「議事録のテンプレを開いて」と頼んでみます。CLAUDE.mdに<strong>ファイルの地図を書いておいた</strong>ので、Claude Codeは迷わず <strong>docs/templates/</strong> を見に行ってくれる。書いてなかったら「どこにありますか？」と聞き返される所ですね。", reference: "" },
      { start: "3:40", end: "4:20", topic: "CLAUDE.mdは『リンク集』として使うのが最適", direction: "画面収録：CLAUDE.mdに『参照リンク集』セクションを追加", content: "ここがBoris氏（Claude Code開発者）の発想で大事な所。<strong>CLAUDE.mdは長文マニュアルではなく『インデックス＝資料への地図』として使うのが一番効く</strong>。「この案件のルールは docs/client-rules.md に書いてあります」と<strong>リンクを貼って中身は別ファイル</strong>に逃がす。こうすると本文は軽いまま、必要なときだけ詳細が読み込まれます。", reference: "Boris氏（Claude Code開発者）の運用" },
      { start: "4:20", end: "5:30", topic: "Lv.2 業務に馴染ませた版を見せる", direction: "画面収録：完成版を上からスクロールして見せる", content: "1〜2週間使うと、こんな感じに育ちます。<br><br><code># CLAUDE.md<br><br>## 私について<br>- 役割：中堅製造業向けの業務改善コンサルタント<br>- よく扱うデータ：クライアントの売上CSV、業務フロー図、議事録、請求書<br>- 出力は日本語・敬体。箇条書きは「・」ではなく「-」。<br><br>## よく使うファイルの場所<br>- クライアント一覧：docs/clients.csv<br>- 議事録テンプレ：docs/templates/meeting.md（命名は YYYY-MM-DD_クライアント名.md）<br>- 提案書テンプレ：docs/templates/proposal.pptx<br>- 過去の請求書：docs/invoices/<br><br>## 出力の好み<br>- Markdownは見出し ## から始める（# は使わない）。<br>- 外部に出す文書ではクライアント名は「A社」「B社」と伏字に。<br><br>## 参照リンク集<br>- 社内ナレッジ（NotionはMCPで接続済み）：運用ルールは docs/notion-rules.md<br>- よく使う統計：e-Stat（https://www.e-stat.go.jp/）<br>- Boris氏のCLAUDE.md（開発者向け参考）：S5-V4で詳しく扱う<br><br>## やらないでほしいこと<br>- クライアント固有名詞入りデータを外部APIに勝手に送らない。<br>- Excelは上書きせず別名保存（_v2.xlsx など）で。<br>- git push --force や rm -rf は必ず確認してから。</code><br><br>ポイントは<strong>「役割／ファイルの地図／出力ルール／リンク集／やらないこと」の5ブロック</strong>。これ以上は書かない。", reference: "demo/s2v2/CLAUDE_lv2.md" },
      { start: "5:30", end: "6:00", topic: "書きすぎない（毎ターン入力コストに乗る）", direction: "画面収録：書きすぎた悪い例をチラ見", content: "冒頭の伏線に戻ります。CLAUDE.mdは<strong>毎ターン先頭に乗っかる</strong>ので、書きすぎると<strong>毎ターンのコストと精度の両方が悪化</strong>します。細かいルールは本体に書かず<strong>外部ファイルにリンクを貼る</strong>。これが長く運用するコツです。", reference: "" },
      { start: "6:00", end: "6:30", topic: "まとめ→次回『トークン管理』", direction: "スライド：表紙", content: "まとめます。<strong>役割・ファイルの地図・リンク集、の3本柱で書く</strong>。書きすぎない、育てながら整える。次の動画では、今話した<strong>『毎ターンの入力コスト＝トークン』をどう管理するか</strong>を扱います。", reference: "" }
    ]
  }
};
