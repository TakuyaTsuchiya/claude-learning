var SCRIPTS = {
  "S1-V1": {
    meta: {
      duration: "約5分",
      mode: "スライド（表紙＋3トラック構成図）",
      goal: "講座の全体像を理解し「自分の仕事でもClaude Codeが使える」と確信する"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "講座タイトル表示", timing: "冒頭" },
      { type: "スライド", name: "3トラック構成図", purpose: "業務効率化・アプリ開発・実務フローの3本柱を図示", timing: "講座全体構成の紹介パート" }
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
      { type: "画面収録", name: "Cursorエディター操作", purpose: "Claude Codeにお題を投げる〜完成まで", timing: "序盤〜中盤" },
      { type: "画面収録", name: "ブラウザ表示", purpose: "完成したHTMLを確認", timing: "後半の動作確認" }
    ],
    script: [
      { start: "0:00", end: "0:15", topic: "オープニング", direction: "スライド：表紙", content: "それでは、この動画ではClaude Codeで魔法体験をしていきます。", reference: "" },
      { start: "0:15", end: "0:30", topic: "何もインストールしない宣言", direction: "画面収録：Cursorエディターを映す", content: "<strong>まず何もインストールせずに</strong>、Cursorというエディター上でClaude Codeがどのように動くのかを見ていただきます。", reference: "" },
      { start: "0:30", end: "0:45", topic: "Cursor紹介", direction: "画面収録：Cursorの画面全体を見せる", content: "これがCursorというエディターです。この中でClaude Codeを動かしていきます。早速やってみましょう。", reference: "" },
      { start: "0:45", end: "1:15", topic: "プロンプト入力", direction: "画面収録：Claude Codeのチャット欄にお題を入力", content: "いきなりこんなことを言ってみます。「<strong>回転寿司大手3社の最新のIR情報を比較分析して、見やすいHTMLのウェブサイトにまとめてください。</strong>」", reference: "" },
      { start: "1:15", end: "1:45", topic: "AIはリサーチが得意", direction: "画面収録：送信後の画面", content: "<strong>AIはリサーチがとても得意</strong>ですので、こういったことをサクッとやってくれます。フォルダもファイルも何も用意していませんが、それも全部Claude Codeが勝手に作ってくれます。ちなみに、ステータスラインについては後ほど説明します。", reference: "" },
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
      duration: "約8分15秒",
      mode: "画面収録（Mac・Windows両方のインストール手順＋Claude Code内での/statusline設定）",
      goal: "Claude CodeとCursorをインストールし、mkdir→cd→claude起動＋ステータスライン設定まで完了できる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "画面収録", name: "Mac向けインストール手順", purpose: "Claude Code本体ダウンロード→インストール→バージョン確認", timing: "序盤のMac手順パート" },
      { type: "画面収録", name: "Windows向けインストール手順", purpose: "Git for Windows→Claude Code本体→Git Bashで動作確認", timing: "序盤のWindows手順パート" },
      { type: "画面収録", name: "Cursorインストール", purpose: "Mac・Windows両方、無料プランで起動まで", timing: "中盤" },
      { type: "画面収録", name: "Claude Code Proプラン契約", purpose: "pricingページから契約までの流れ", timing: "中盤〜後半" },
      { type: "画面収録", name: "プロジェクトフォルダ作成とclaude起動", purpose: "mkdir→cd→claudeの流れ", timing: "後半" },
      { type: "画面収録", name: "/statusline設定", purpose: "ステータスラインの2行表示設定", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:20", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではClaude Codeを使い始める皆さんに向けて、<strong>Claude CodeとCursorのインストール、そして初回のステータスライン設定</strong>までをお伝えします。Mac・Windows両方の手順を押さえていきます。", reference: "" },
      { start: "0:20", end: "1:00", topic: "なぜ扱うか", direction: "表紙のまま", content: "環境構築は、多くの方が挫折するポイントと言われています。特に<strong>PATHを通す作業と、WindowsユーザーのGit for Windowsインストール</strong>の2つでつまずく方が多いです。ここを丁寧に整えておけば、<strong>この先の全動画が皆さんのPC上で再現できる</strong>状態になります。手順はやや多めですが、一度だけの作業ですので、このタイミングでしっかり終わらせてしまいましょう。", reference: "" },
      { start: "1:00", end: "1:30", topic: "ネイティブインストーラー推奨", direction: "画面収録：公式セットアップページを開く", content: "Claude Code本体のインストール方法は複数ありますが、<strong>公式のネイティブインストーラー</strong>を使う方法をおすすめします。npm経由のインストールも可能ですが、Node.jsの環境整備が別途必要になります。ネイティブインストーラーならダブルクリックで完結しますので、非エンジニアの方はこちらが確実になります。", reference: "https://docs.claude.com/en/docs/claude-code/setup" },
      { start: "1:30", end: "2:30", topic: "Mac：Claude Codeインストール", direction: "画面収録：公式サイトからmacOS用インストーラーをダウンロード→実行→ターミナルで確認", content: "まずMac向けの手順です。公式サイトから<strong>macOS用インストーラー</strong>をダウンロードします。ダブルクリックで実行すると、自動で必要な場所にインストールされます。インストール後、ターミナルを開いて<code>claude --version</code>と打ちます。バージョン番号が表示されればインストール成功です。もし<code>command not found</code>と出る場合は、<strong>PATHがまだ通っていない</strong>状態ですので、ターミナルを一度閉じて開き直してください。", reference: "https://docs.claude.com/en/docs/claude-code/setup" },
      { start: "2:30", end: "3:15", topic: "Windows前提：Git for Windows", direction: "画面収録：gitforwindows.orgを開く→インストーラーをダウンロード→実行", content: "次にWindows向けの手順です。Windowsユーザーの方には、<strong>前提条件としてGit for Windowsを先にインストールしていただく必要があります</strong>。理由は、Claude Codeが<strong>Git Bashという環境で動く</strong>ためです。<code>gitforwindows.org</code>からインストーラーをダウンロードして、<strong>すべてデフォルト設定のまま</strong>進めて構いません。インストール完了後、スタートメニューに「Git Bash」が表示されていれば準備完了です。", reference: "https://gitforwindows.org/" },
      { start: "3:15", end: "4:30", topic: "Windows：Claude Codeインストール", direction: "画面収録：公式サイトからWindows用インストーラーをダウンロード→実行→Git Bashで確認", content: "Git Bashが用意できたら、Claude Code本体に進みます。公式サイトから<strong>Windows用インストーラー</strong>をダウンロードして実行します。インストール完了後、<strong>Git Bashを開いて</strong><code>claude --version</code>と打ちます。バージョン番号が表示されれば成功です。Windowsの場合は<strong>PowerShellやコマンドプロンプトではなく、必ずGit Bashを使う</strong>点にご注意ください。この講座でも全てGit Bashで進めていきます。", reference: "https://docs.claude.com/en/docs/claude-code/setup" },
      { start: "4:30", end: "5:15", topic: "Cursorインストール", direction: "画面収録：cursor.comを開く→Mac/Win用インストーラーをダウンロード→実行", content: "続いてCursorをインストールします。Cursorは、Claude Codeと組み合わせて使うエディターです。<code>cursor.com</code>から<strong>Mac用・Windows用それぞれのインストーラー</strong>をダウンロードして、ダブルクリックで実行します。<strong>無料プランで十分</strong>ですので、そのまま起動までお進めください。起動後、初回セットアップで日本語化の選択画面が出ますので、お好みで選んでいただければと思います。", reference: "https://cursor.com/" },
      { start: "5:15", end: "5:45", topic: "Claude Code Proプラン契約", direction: "画面収録：claude.com/pricingを開く→プラン選択→契約", content: "Claude Codeを業務で本格的に使う場合は、<strong>Claude Code Proプランの契約を強く推奨します</strong>。<code>claude.com/pricing</code>からプランを選んで契約できます。無料枠だとレート制限にすぐ引っかかって、1日の途中で作業が止まってしまいます。月額の固定費で済みますので、業務利用ならProプラン一択です。", reference: "https://www.claude.com/pricing" },
      { start: "5:45", end: "6:30", topic: "プロジェクトフォルダ作成とclaude起動", direction: "画面収録：ターミナル（MacはTerminal／WindowsはGit Bash）でmkdir→cd→claude", content: "インストールが完了したら、<strong>最初のプロジェクトフォルダを作ってClaude Codeを起動する</strong>流れを確認していきます。ターミナルを開いて、<code>mkdir my-project</code>でフォルダを作成し、<code>cd my-project</code>でそのフォルダに移動します。そして<code>claude</code>と打つとClaude Codeが起動します。これでClaude Codeが<strong>このフォルダ内で作業する状態</strong>になりました。", reference: "" },
      { start: "6:30", end: "7:45", topic: "/statusline設定", direction: "画面収録：Claude Code内で /statusline 実行→2行表示の設定を依頼→ステータスライン反映", content: "最後に<strong>ステータスラインの設定</strong>をしておきます。Claude Codeを起動した状態で<code>/statusline</code>と打ちます。Claude Codeが設定ファイルを自動生成してくれますので、<strong>gitブランチ・コンテキスト使用率・レート制限リセット時間の2行表示</strong>の設定をお願いすると、その内容でファイルを書いてくれます。設定が反映されると、ターミナル下部にこうした情報がリアルタイムで表示されるようになります。<strong>今後の全動画で参考にしていく情報</strong>ですので、必ず設定しておいてください。", reference: "https://code.claude.com/docs/ja/statusline" },
      { start: "7:45", end: "8:15", topic: "クロージング", direction: "スライド：表紙に戻す", content: "これで環境構築は完了です。<strong>Claude Code本体・Cursor・Proプラン・ステータスライン</strong>の4点が揃いました。次の動画からは、この環境の上で実際に業務ツールを作っていきます。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S2-V3": {
    meta: {
      duration: "約6分30秒",
      mode: "画面収録（ステータスライン＋ブラウザ＋ターミナル）",
      goal: "トークン消費を体感し、コンテキストウィンドウ管理の重要性を理解する"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "コンテキストウィンドウ概念図", purpose: "作業机の比喩＋200Kトークンの図示", timing: "種明かしパート" },
      { type: "画面収録", name: "ステータスライン拡大", purpose: "使用率・レート制限リセット時刻を見せる", timing: "序盤と終盤" },
      { type: "ブラウザ", name: "OpenAI Tokenizer", purpose: "トークン分解の可視化（日英コード比較）", timing: "体感パート" },
      { type: "画面収録", name: "/context 実演", purpose: "カテゴリ別トークン使用量の可視化", timing: "中盤" },
      { type: "画面収録", name: "/cost 実演", purpose: "現在のコスト表示", timing: "中盤" },
      { type: "画面収録", name: "/clear 実演", purpose: "コンテキストリセット", timing: "中盤〜後半" },
      { type: "画面収録", name: "/compact focus 実演", purpose: "フォーカス要約の実行", timing: "中盤〜後半" }
    ],
    script: [
      { start: "0:00", end: "0:30", topic: "オープニング＋核心予告", direction: "スライド：表紙", content: "この動画では<strong>Claude Codeの真髄</strong>に迫ります。いきなり結論からお伝えします。<strong>「Claude Codeを業務で使いこなすとは、コンテキストウィンドウとトークンをマネジメントすることだ」</strong>——これが今日のメッセージです。ただ、いきなりこの話をしてもピンと来づらいと思いますので、まず<strong>体感から</strong>入っていきましょう。", reference: "" },
      { start: "0:30", end: "1:15", topic: "前動画の残骸", direction: "画面収録：ターミナルのステータスラインをズームアップ", content: "前の動画でも登場した<strong>ステータスライン</strong>です。ターミナルの下に数字が並んでおり、コンテキスト使用率や、レート制限のリセット時刻が表示されています。<strong>前回の回転寿司分析の動画では、ここで3%を使っていました</strong>。「3%って何？」「コンテキスト使用率って何？」と感じる方も多いと思いますので、答えは後半でお見せすることにして、先に<strong>トークンそのものを触って体感</strong>してみましょう。", reference: "" },
      { start: "1:15", end: "2:15", topic: "OpenAI Tokenizerで体感", direction: "ブラウザ：OpenAI Tokenizerを開く", content: "OpenAIが公開している<strong>Tokenizer</strong>というページを開きます。ここに文章を貼り付けると、<strong>AIがその文章を何トークンとして読むかを可視化</strong>してくれます。英語で「Hello, how are you?」と入れると6トークン。同じ内容を日本語で「こんにちは、元気ですか？」と入れると、<strong>ひらがなや漢字は1文字ごとに1〜3トークン</strong>に分かれるため、英語よりも多くのトークンを消費します。さらにコードを貼り付けると、記号や改行まで1つずつトークンになっていますね。<strong>これがトークンの正体</strong>です。文章もファイルの中身も、すべてこの単位に分解されてAIに渡されています。", reference: "https://platform.openai.com/tokenizer" },
      { start: "2:15", end: "3:00", topic: "種明かし①コンテキストウィンドウ", direction: "スライド：コンテキストウィンドウ概念図", content: "ここで種明かしです。<strong>コンテキストウィンドウ</strong>というのは、Claudeが一度に保持できるトークンの総量——つまり<strong>AIの「作業机の広さ」</strong>です。Claude Opusは20万トークンまで入ります。ここに会話履歴、ファイル、コマンド出力、CLAUDE.md、読み込まれたスキル、すべてが乗ってきます。<strong>公式ドキュメントでもこのトピックだけで1ページ割かれている</strong>ほど、Claude Code習熟の最大の分岐点です。満杯になるとClaudeは自動で圧縮（コンパクト化）に入りますが、<strong>会話の早い段階の指示が失われる</strong>ことがあります。だからこれを管理できる方が、Claude Codeを使いこなせる方になります。", reference: "https://code.claude.com/docs/ja/context-management" },
      { start: "3:00", end: "4:00", topic: "/context と /cost 実演", direction: "画面収録：ターミナルで /context コマンドを実行", content: "次に、今自分が何トークン使っているか・何にスペースを取られているかを見るコマンドをご紹介します。<strong>/context</strong>を打つと、<strong>システム指示・CLAUDE.md・ツール定義・メッセージ履歴・スキルなど、カテゴリ別にどれくらいトークンを消費しているかが可視化</strong>されます。「スキルだけで5千トークン使っている」といった内訳が一目で把握できますね。もうひとつが<strong>/cost</strong>です。こちらは<strong>現在のトークン使用量とコスト</strong>を表示します。ステータスラインを設定していないときもこれで確認できます。<strong>ステータスライン常時表示＋節目で /context</strong>、この2本立てが基本になります。", reference: "" },
      { start: "4:00", end: "5:15", topic: "/clear と /compact focus", direction: "画面収録：/clear 実行→ステータスラインがリセットされる様子", content: "コンテキスト管理の<strong>一番重要な所作</strong>がこちらです。違う仕事に切り替えるときは<strong>/clear</strong>を打ちます。過去の会話を全部消して、真っさらな状態からスタートします。前のタスクの情報が残っていると、その後のやり取り全部でトークンを無駄に消費し続けてしまいます。<strong>「タスクが変わる＝必ず /clear」</strong>を習慣にしてください。一方、<strong>同じタスクを続けたいものの会話が長くなってきた</strong>場合は<strong>/compact focus on ○○</strong>を使います。たとえば「/compact focus on API changes」と打つと、<strong>「APIの変更点だけ残して他は要約する」</strong>という形で圧縮してくれます。闇雲に要約されるのではなく、<strong>残したい内容を自分で指定できる</strong>のがポイントになります。", reference: "" },
      { start: "5:15", end: "5:45", topic: "auto-compactの落とし穴", direction: "画面収録：auto-compactが走った時の表示例", content: "放っておくと、コンテキストが満杯になったタイミングで<strong>auto-compact（自動要約）</strong>が走ります。便利ですが、<strong>会話の早い段階で出した指示が消えてしまう</strong>ことがあります。「以前こう依頼したはずなのに、また同じ間違いをしている」という現象は、これが原因です。対策は<strong>永続的なルールをCLAUDE.mdに書いておく</strong>こと。CLAUDE.mdは毎回コンテキストに読み込まれますので、auto-compactでも消えません。CLAUDE.mdの書き方は<strong>前回の動画でじっくり扱いました</strong>ので、併せてご確認ください。", reference: "" },
      { start: "5:45", end: "6:15", topic: "Proプラン推奨", direction: "画面収録：ステータスラインのレート制限表示部分", content: "もう一点、現実的な話をお伝えします。<strong>Claude Code Proプラン</strong>の契約を強く推奨します。無料枠だとレート制限にすぐ引っかかり、1日の途中で作業が止まってしまいます。ステータスラインの右側に<strong>「あと何時間でレート制限がリセットされるか」</strong>が表示されていますので、ここを見ながら使っていきます。業務で本格的に使うなら<strong>Proプラン一択</strong>です。", reference: "" },
      { start: "6:15", end: "6:45", topic: "核心メッセージ再掲＋クロージング", direction: "スライド：表紙に戻す", content: "最後にもう一度お伝えします。<strong>「Claude Codeを業務で使いこなすとは、コンテキストウィンドウとトークンをマネジメントすることだ」</strong>——これが使いこなしの核になります。<strong>/context</strong>で状況を見て、<strong>/clear</strong>で切り替えて、<strong>/compact focus</strong>で残したい情報を指定する。この3つを押さえるだけで、Claude Codeの<strong>精度と安定感が一段上がります</strong>。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S1-V4": {
    meta: {
      duration: "約7分",
      mode: "画面収録（エディタ＋Claude Codeターミナル＋ブラウザ）",
      goal: "自社のカタログと過去の見積書を渡すだけで、環境構築の段階でも明日から使える実務ツールが作れることを体験する（ホテル営業向け自動見積りHTMLツール）"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "サンプルデータ", name: "demo/s1v4/product_catalog.csv", purpose: "ホテル営業向け製品カタログ（TV 5メーカー・Wi-Fi機器・配線部材・工事費 全33品目／原価＋単価）", timing: "サンプルデータ紹介" },
      { type: "サンプルデータ", name: "demo/s1v4/meeting_memo.md", purpose: "商談メモ（ザ・パークビューホテル東京／82室／2026年秋リニューアル／予算1200万円）", timing: "サンプルデータ紹介" },
      { type: "サンプルデータ", name: "demo/s1v4/past_quote.xlsx", purpose: "過去の成約見積書（フォーマットのお手本）", timing: "サンプルデータ紹介" },
      { type: "画面収録", name: "Claude Codeでツール生成", purpose: "要件を依頼→Planモード→実装→完成", timing: "中盤" },
      { type: "画面収録", name: "自動見積りツール操作", purpose: "商談メモ貼付→自動生成→商品変更→備考チェック→利益率アラート→値引き調整→Excelエクスポート", timing: "後半の動作確認" },
      { type: "出力成果物", name: "index.html（シングルHTMLツール）", purpose: "ブラウザで開くだけで動作する自動見積りツール", timing: "後半の動作確認" },
      { type: "出力成果物", name: "見積書.xlsx（エクスポート結果）", purpose: "ツールから出力される見積書Excel", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:20", topic: "オープニング", direction: "スライド：表紙", content: "この動画では営業職の方に向けて、自動見積り作成ツールをClaude Codeで作っていきます。題材はホテルに備品を納入するBtoB営業、お客様への見積書をぱっと出せる実務ツールを一緒に組み立てます。", reference: "" },
      { start: "0:20", end: "1:00", topic: "なぜ扱うか", direction: "表紙のまま", content: "見積作成は、多くの営業担当の方が時間を取られている業務だと思います。ここで大事なのは、<strong>皆さん自身の会社のカタログや過去の見積書を渡すだけで、明日から使える実務ツールが手に入る</strong>ということです。まだ環境構築のセクションですが、<strong>もうこの段階で実用的なものが作れる</strong>——その体験をしていただきたい回になります。", reference: "" },
      { start: "1:00", end: "2:00", topic: "サンプルデータ紹介", direction: "画面収録：demo/s1v4/ の3ファイルを順にエディタで開いて見せる", content: "まず用意したサンプルデータ3点を見ていきます。<strong>製品カタログCSV</strong>は、テレビ5メーカー・Wi-Fi機器・配線部材・工事費まで全33品目、原価と単価の両方が入っています。<strong>商談メモ</strong>は、ザ・パークビューホテル東京との打ち合わせ記録で、客室82室・2026年秋リニューアル・予算1200万円といった条件が書かれています。<strong>過去の成約見積書</strong>は、出力したい形式のお手本としてClaude Codeに参考にしてもらいます。", reference: "demo/s1v4/product_catalog.csv／demo/s1v4/meeting_memo.md／demo/s1v4/past_quote.xlsx" },
      { start: "2:00", end: "2:45", topic: "要件依頼", direction: "画面収録：ターミナルでClaude Code起動→要件入力", content: "この3点をClaude Codeに渡して依頼します。「<strong>この3つのファイルをもとに、商談メモから見積書を自動生成するHTMLツールを作ってください。商品はプルダウンで差し替え可能、備考は定型文のチェックボックス形式、利益率を常時表示して20%を下回ったらアラート、値引き機能、Excelエクスポートまでお願いします</strong>」と、自然な日本語でそのまま伝えます。", reference: "" },
      { start: "2:45", end: "4:00", topic: "Planモード→実装", direction: "画面収録：Planモードの設計出力→コード生成（タイムラプス）", content: "Claude CodeはPlanモードで、いきなり実装せず設計を先に出してくれます。今回の構成はシングルHTMLファイル一本、JavaScriptで動くのでサーバーもデータベースも要らない形ですね。承認して実装に入ります。ここは少し時間がかかりますので、実際の業務では他の作業をしながら待っていただく形になります。", reference: "" },
      { start: "4:00", end: "4:45", topic: "完成→自動生成", direction: "画面収録：index.htmlをブラウザで開き、商談メモを貼り付け→生成ボタン", content: "完成しました。<strong>index.htmlをダブルクリックするだけ</strong>で立ち上がります。商談メモをそのまま貼り付けて「見積書を生成」を押すと、ザ・パークビューホテルの要望に合わせてテレビ・Wi-Fi機器・配線・工事費まで、<strong>商談内容に合った製品が自動で選ばれて見積書ができあがります</strong>。過去見積書のフォーマットに沿ったレイアウトですね。", reference: "" },
      { start: "4:45", end: "5:10", topic: "商品差し替え・数量調整", direction: "画面収録：プルダウンで商品差し替え・数量入力", content: "次に商品はプルダウンで差し替えられます。「スイート用は有機ELに変えたい」と思ったらポチポチ変更できますし、数量も自由に調整できます。", reference: "" },
      { start: "5:10", end: "5:35", topic: "備考チェックボックス", direction: "画面収録：チェックボックスを順に選択", content: "備考欄は定型文から選ぶチェックボックス形式です。「配送費は弊社負担」「1年保証」「支払いは翌月末」といったパターンが用意されているので、<strong>選ぶだけで見積書に反映されます</strong>。", reference: "" },
      { start: "5:35", end: "6:10", topic: "利益率アラート・値引き調整", direction: "画面収録：利益率表示の拡大・値引き入力", content: "ここがポイントです。<strong>利益率が常に表示されていて、20%を下回ると赤いアラートが出る</strong>ようになっています。営業現場でやりがちな値引き過ぎを、ツール側で気づかせてくれる仕組みですね。値引き額を調整して、ちょうどいいバランスに追い込めます。", reference: "" },
      { start: "6:10", end: "6:35", topic: "Excelエクスポート", direction: "画面収録：エクスポートボタン→Excelで開く", content: "最後に「Excelエクスポート」ボタンを押すと、<strong>見積書がExcelファイルとして出力されます</strong>。そのままお客様にお送りできる状態です。", reference: "" },
      { start: "6:35", end: "7:00", topic: "クロージング", direction: "スライド：表紙に戻す", content: "環境構築のセクションにもかかわらず、実務で使える自動見積りツールがこれで完成しました。<strong>皆さんの会社のデータを使えば、明日からこれと同じことができます</strong>。ドメイン知識こそが価値の源泉、この講座のコアメッセージをまず体感していただきました。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S1-V5": {
    meta: {
      duration: "約7分10秒",
      mode: "画面収録（エディタ＋Claude Code＋ブラウザ）",
      goal: "アジェンダMarkdown1枚から、URL1本で配布できる会議用HTMLサイトを生成できるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "サンプルデータ", name: "demo/s1v5/agenda.md", purpose: "架空ディスカウントストア『驚安堂』の2026年夏新商品リリース説明会アジェンダ（PB『マジ価格NEO』10商品・販路・SNS施策・KPI・スケジュール）", timing: "サンプルデータ紹介" },
      { type: "画面収録", name: "Claude CodeでHTML生成", purpose: "アジェンダを依頼→frontend-designスキル自動読込→コード生成", timing: "中盤" },
      { type: "画面収録", name: "完成HTMLをブラウザで確認", purpose: "1ページに整理された会議資料サイトを上から下まで見せる", timing: "後半の動作確認" },
      { type: "出力成果物", name: "index.html（社内会議用ワンページサイト）", purpose: "ブラウザで開くだけ／URL1本で配布できる会議資料", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:20", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではオフィスワーカーの方に向けて、<strong>社内会議用の資料をHTMLサイトでつくる方法</strong>をお伝えします。アジェンダのMarkdown1枚をClaude Codeに渡すだけで、URLで配布できる会議資料が仕上がる、そんな作り方です。", reference: "" },
      { start: "0:20", end: "1:00", topic: "なぜ扱うか", direction: "表紙のまま", content: "会議資料をスライドで作ると、<strong>テキストボックスのレイアウト調整・表のセル幅合わせ・画像の位置決め</strong>に時間を取られて、気づけば中身より体裁に手がかかっている、ということが起こりがちです。一方でHTMLサイトなら、レイアウトはClaude Codeが整えてくれますし、<strong>URLを1本送るだけで配布も完了</strong>します。HTML自体の知識は要らない前提で進めますので、アジェンダさえ用意すれば明日の会議にそのまま出せる資料が手に入る——その体験をしていただく回になります。", reference: "" },
      { start: "1:00", end: "1:40", topic: "題材紹介", direction: "画面収録：エディタでdemo/s1v5/agenda.mdを開く", content: "まず今回の題材です。架空のディスカウントストア<strong>『驚安堂』の夏新商品リリース説明会</strong>を例に進めていきます。マーケティング本部から全営業部・店舗運営部・海外事業部に向けた、PB新商品10品目のお披露目会、というシナリオになります。", reference: "demo/s1v5/agenda.md" },
      { start: "1:40", end: "2:30", topic: "アジェンダの中身を見せる", direction: "画面収録：agenda.mdをゆっくりスクロール", content: "アジェンダのMarkdownがこちらです。日時・参加者・市場背景、そして<strong>新商品10品目の表、販売チャネル、SNS施策、KPI、スケジュール、各部へのアクションアイテム</strong>——情報量はかなり多いですね。これをスライドで作ると20枚以上になりますし、レイアウト調整だけで半日仕事になってしまいます。", reference: "demo/s1v5/agenda.md" },
      { start: "2:30", end: "3:10", topic: "Claude Codeに依頼", direction: "画面収録：Claude Codeのプロンプト入力欄に入力", content: "次にClaude Codeに依頼します。<strong>「demo/s1v5/agenda.md をもとに、社内会議用のHTMLサイトを作ってください。frontend-designスキルを使って、見やすく整理してください」</strong>——これだけです。アジェンダのファイルパスと、見やすく作ってほしいという意図を自然な日本語で伝えます。", reference: "" },
      { start: "3:10", end: "4:20", topic: "frontend-designスキル＋生成", direction: "画面収録：frontend-designスキル読み込み→コード生成（タイムラプス）", content: "<strong>frontend-designスキルが自動で読み込まれます</strong>。これはAnthropic公式のスキルで、見やすいウェブページを設計するためのノウハウが詰まっています。商品10品目の表・販売チャネル・KPIの数字・スケジュール、それぞれを読みやすいセクションに分けてレイアウトしてくれます。生成には少し時間がかかりますので、実際の業務では他の作業をしながら待っていただく形になります。", reference: "" },
      { start: "4:20", end: "5:15", topic: "完成HTMLをブラウザで確認", direction: "画面収録：ブラウザでindex.htmlを開く", content: "できあがりました。<strong>index.htmlをダブルクリックするだけ</strong>で立ち上がります。トップに会議名と日時、そして目次が並びます。スクロールしていくと、市場背景のサマリー、新商品10品目は見やすい表形式、販売チャネルはカード型のレイアウト、KPIは数字を大きく見せるダッシュボード風——<strong>スライドなら20枚以上必要だった内容が、1ページに収まっています</strong>。", reference: "" },
      { start: "5:15", end: "5:50", topic: "スケジュール・アクションアイテム", direction: "画面収録：ページ下部までスクロール", content: "さらにスクロールすると、スケジュールはタイムライン表示、各部へのアクションアイテムは部署ごとに整理された形で並びます。<strong>スライドでは表現しにくかった時系列や担当分けが、HTMLだと素直に見せられる</strong>のがポイントですね。", reference: "" },
      { start: "5:50", end: "6:30", topic: "URL共有で配布完了", direction: "画面収録：URLバーをハイライト／Slackに貼り付ける想定", content: "あとはこのindex.htmlを社内サーバーや共有ストレージに置いてURLを発行すれば、<strong>Slackやメールに貼るだけで配布が完了</strong>します。ファイル添付、バージョン違いの管理、印刷して配る手間は発生しません。", reference: "" },
      { start: "6:30", end: "7:10", topic: "クロージング", direction: "スライド：表紙に戻す", content: "最後にまとめます。<strong>アジェンダのMarkdownをClaude Codeに渡してURLを共有する</strong>、これだけで会議資料の準備が済むようになります。スライド作成にかけていた時間を、本来やりたい仕事に取り戻していただければと思います。それでは次の動画でお会いしましょう。", reference: "" }
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
      { type: "画面収録", name: "ターミナル操作", purpose: "exit→mkdir→cd→claude起動→/init", timing: "序盤" },
      { type: "画面収録", name: "/clear・/compact・--resume", purpose: "各コマンドの実行と効果、auto-compactの説明", timing: "中盤" },
      { type: "画面収録", name: "Planモード実演", purpose: "Shift+Tab×2で切替→plan mode on→計画表示→承認で実装", timing: "後半" }
    ],
    script: [
      { start: "0:00", end: "0:20", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、Claude Codeの<strong>基本コマンドとPlanモードの使い方</strong>をお伝えします。", reference: "" },
      { start: "0:20", end: "0:50", topic: "フォルダ作りはClaude Codeの外でやる", direction: "画面収録：Claude Codeから exit して抜ける", content: "まずはプロジェクト用のフォルダを作って、そこに移動します。<strong>これが一番大事です</strong>。ちなみにこの作業は<strong>Claude Codeの外で行います</strong>。もしClaude Codeが起動していたら、一旦 <strong>exit</strong> で抜けてください。", reference: "" },
      { start: "0:50", end: "1:35", topic: "mkdir / cd でプロジェクト作成・移動", direction: "画面収録：Documents配下でmkdir→cd", content: "Documentsの配下で <strong>mkdir my-project</strong>。これで「my-project」というフォルダが作れました。そこに移動しましょう。<strong>cd my-project</strong> で、今このプロジェクトフォルダの中に入った状態です。", reference: "" },
      { start: "1:35", end: "1:55", topic: "claudeコマンドで起動", direction: "画面収録：ターミナルで claude 実行", content: "ここで <strong>claude</strong> というコマンドを打つと、このディレクトリの中で作業ができるようになります。Claude Codeは<strong>今いるフォルダの中で働く道具</strong>なので、新しい仕事を始めるときは最初にフォルダを作る、と覚えてください。", reference: "" },
      { start: "1:55", end: "2:15", topic: "/init でプロジェクト初期化", direction: "画面収録：Claude Code内で /init 実行", content: "起動したClaude Codeの中で、<strong>/init</strong> を打ちます。これで何が起きるかというと、<strong>CLAUDE.md というマークダウンファイルが自動で作られる</strong>んです。", reference: "" },
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
      duration: "約6分30秒",
      mode: "画面収録（エディタ＋Claude Code。スライドは表紙のみ）",
      goal: "非エンジニアでも書けるCLAUDE.mdを自分仕様に育てて、Claude Codeを『取扱説明書付き』で動かせるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "画面収録", name: "CLAUDE.md編集", purpose: "3行テンプレから育てた版まで実編集", timing: "中盤〜後半" },
      { type: "画面収録", name: "Claude Codeで効果確認", purpose: "CLAUDE.md反映後に振る舞いが変わるのを見せる", timing: "中盤" },
      { type: "サンプルファイル", name: "demo/s2v2/CLAUDE_lv1.md", purpose: "3行テンプレ版（書き始めの見本）", timing: "Lv.1 3行テンプレ紹介" },
      { type: "サンプルファイル", name: "demo/s2v2/CLAUDE_lv2.md", purpose: "業務に馴染ませた育てた版（参照・リンク集・禁止事項）", timing: "Lv.2 育てた版紹介" }
    ],
    script: [
      { start: "0:00", end: "0:20", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではClaude Codeを使う皆さんに向けて、<strong>Claude Codeが毎回読み込む取扱説明書『CLAUDE.md』の書き方</strong>をお伝えします。非エンジニアの方でも書ける、入門レベルで進めていきます。", reference: "" },
      { start: "0:20", end: "1:00", topic: "なぜ扱うか", direction: "表紙のまま／または画面収録でCLAUDE.mdを開く", content: "CLAUDE.mdを書いておくと、<strong>会社の業務ルール・ファイル配置・出力の好みを、Claude Codeに毎回説明し直さずに済む</strong>ようになります。新しいアシスタントを迎えるたびに業務をゼロから教える手間、と言えば近いでしょうか。前回 <strong>/init</strong> を打って自動生成されたこのファイルを、今回は<strong>自分の仕事仕様に育てていく</strong>、そのための書き方を扱っていきます。", reference: "" },
      { start: "1:00", end: "1:40", topic: "CLAUDE.mdは毎ターン送信される", direction: "画面収録：CLAUDE.md→会話欄のイメージ図", content: "まず仕組みのポイントです。CLAUDE.mdは<strong>セッションの最初に一度読み込まれて、そのあと毎ターンの会話と一緒にAIへ送信され続ける</strong>ファイルです。前動画で「Claude Codeは毎ターン会話全文を送り直している」とお話ししましたが、<strong>CLAUDE.mdはその先頭に毎回乗っかる</strong>イメージになります。だからClaude Codeは、毎セッションで一貫した振る舞いをしてくれるわけです。", reference: "" },
      { start: "1:40", end: "2:00", topic: "書きすぎ注意の伏線", direction: "同上", content: "裏を返すと、CLAUDE.mdに書きすぎると<strong>毎ターンの入力コストがずっと大きくなる</strong>ということになります。これは後ほど効いてくる話ですので、頭の片隅に置いておいてください。", reference: "" },
      { start: "2:00", end: "2:15", topic: "最初は3行から", direction: "画面収録：CLAUDE.mdを空にして書き始める", content: "では書いていきます。<strong>最初は3行から始めれば十分</strong>です。", reference: "" },
      { start: "2:15", end: "3:00", topic: "Lv.1 3行テンプレを書く", direction: "画面収録：3行を実際に打ち込む", content: "この3行を打ち込んでみましょう。<br><br><code>- あなたは経営コンサルタントの業務アシスタントです。<br>- 出力は常に日本語、敬体（です・ます）で。<br>- よく使うファイル置き場：docs/clients/（クライアント資料）、docs/templates/（提案書・議事録の雛形）</code><br><br>書いたら保存します。<strong>役割・出力スタイル・ファイルの地図</strong>、この3つが入っていればClaude Codeの振る舞いは明確に変わります。", reference: "demo/s2v2/CLAUDE_lv1.md" },
      { start: "3:00", end: "3:35", topic: "効果を体感する", direction: "画面収録：Claude Codeに「議事録テンプレを見せて」と頼む→docs/templates/を自分で見に行く挙動", content: "試しに「議事録のテンプレを開いてください」と依頼してみます。CLAUDE.mdに<strong>ファイルの地図を書いておいた</strong>ので、Claude Codeは迷わず <strong>docs/templates/</strong> を見に行ってくれます。書いていなければ「どこにありますか？」と聞き返されるところですね。", reference: "" },
      { start: "3:35", end: "4:15", topic: "CLAUDE.mdは『リンク集』として使うのが最適", direction: "画面収録：CLAUDE.mdに『参照リンク集』セクションを追加", content: "次に大事な発想をお伝えします。<strong>CLAUDE.mdは長文マニュアルではなく、『インデックス＝資料への地図』として使うのが最もフィットします</strong>。「この案件のルールは docs/client-rules.md に書いてあります」と<strong>リンクを貼って、詳細は別ファイルに切り出す</strong>。こうすると本文は軽いまま、必要なときだけ詳細が読み込まれる構成になります。", reference: "Boris氏（Claude Code開発者）の運用" },
      { start: "4:15", end: "5:25", topic: "Lv.2 業務に馴染ませた版を見せる", direction: "画面収録：完成版を上からスクロールして見せる", content: "1〜2週間使っていくと、こんな感じに育っていきます。<br><br><code># CLAUDE.md<br><br>## 私について<br>- 役割：中堅製造業向けの業務改善コンサルタント<br>- よく扱うデータ：クライアントの売上CSV、業務フロー図、議事録、請求書<br>- 出力は日本語・敬体。箇条書きは「・」ではなく「-」。<br><br>## よく使うファイルの場所<br>- クライアント一覧：docs/clients.csv<br>- 議事録テンプレ：docs/templates/meeting.md（命名は YYYY-MM-DD_クライアント名.md）<br>- 提案書テンプレ：docs/templates/proposal.pptx<br>- 過去の請求書：docs/invoices/<br><br>## 出力の好み<br>- Markdownは見出し ## から始める（# は使わない）。<br>- 外部に出す文書ではクライアント名は「A社」「B社」と伏字に。<br><br>## 参照リンク集<br>- 社内ナレッジ（NotionはMCPで接続済み）：運用ルールは docs/notion-rules.md<br>- よく使う統計：e-Stat（https://www.e-stat.go.jp/）<br>- 開発者向けのCLAUDE.md事例：別セクションで詳しく扱います<br><br>## やらないでほしいこと<br>- クライアント固有名詞入りデータを外部APIに勝手に送らない。<br>- Excelは上書きせず別名保存（_v2.xlsx など）で。<br>- git push --force や rm -rf は必ず確認してから。</code><br><br>ポイントは<strong>「役割／ファイルの地図／出力ルール／リンク集／やらないこと」の5ブロック</strong>です。これ以上は書き足さないのがコツになります。", reference: "demo/s2v2/CLAUDE_lv2.md" },
      { start: "5:25", end: "5:55", topic: "書きすぎない（毎ターン入力コストに乗る）", direction: "画面収録：書きすぎた悪い例をチラ見", content: "冒頭の伏線に戻ります。CLAUDE.mdは<strong>毎ターン先頭に乗っかる</strong>ので、書きすぎると<strong>毎ターンのコストと精度の両方が悪化</strong>します。細かいルールは本体に書かず、<strong>外部ファイルにリンクを貼る</strong>——これが長く運用していくコツになります。", reference: "" },
      { start: "5:55", end: "6:30", topic: "まとめ→次回『トークン管理』", direction: "スライド：表紙", content: "最後にまとめます。<strong>役割・ファイルの地図・リンク集、この3本柱で書く</strong>。書きすぎず、育てながら整える——この進め方でClaude Codeに仕事を覚えさせていきましょう。次の動画では、いまお話しした<strong>『毎ターンの入力コスト＝トークン』をどう管理するか</strong>を扱います。", reference: "" }
    ]
  },
  "S2-V5": {
    meta: {
      duration: "約7分40秒",
      mode: "画面収録（エディタ＋Claude Code＋ブラウザ。スライドは表紙のみ）",
      goal: "回転寿司大手3社のIR比較HTMLをスペック駆動開発で作り直し、スペック駆動の理解を深める"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "画面収録", name: "以前のIR比較HTML振り返り", purpose: "既に本講座の前のセクションで作成した回転寿司3社のIR比較サイトを再表示し「あれを作り直す」と宣言", timing: "序盤の題材紹介" },
      { type: "画面収録", name: "docs/spec.md作成", purpose: "Claude Codeと対話しながらスペックを書き上げる実演", timing: "中盤のspec執筆パート" },
      { type: "画面収録", name: "Claude Codeによる再実装", purpose: "「docs/spec.md通りに作って」で一発生成", timing: "後半の実装パート" },
      { type: "ブラウザ", name: "完成版IR比較HTML（白基調の投資レポート）", purpose: "Vibe版と並べて比較", timing: "後半の比較パート" }
    ],
    script: [
      { start: "0:00", end: "0:50", topic: "オープニング：スペック駆動開発の重要性", direction: "スライド：表紙", content: "この動画では<strong>スペック駆動開発</strong>を扱います。<strong>Claude Codeで何かを生成するときに、とても重要な考え方</strong>です。<br><br>Claude Codeはそのままでも十分に賢く、思いつきやノリで依頼したものでも、及第点の成果物は出てきます。ただし、業務で使ったり、より正確に何かを生成したい場面では話が変わります。<strong>作る前に仕様＝スペックをきっちり固め、曖昧さのない状態で依頼する</strong>――ここが大事になってきます。<br><br>そうすることで、<strong>人間とAIの間で「何を、どう作るのか」の目線合わせ＝合意形成</strong>ができます。合意があるからAIは迷わず実装でき、目当てのものが生成される。だからスペック駆動開発は、非常に重要な考え方なのです。", reference: "" },
      { start: "0:50", end: "1:10", topic: "題材紹介：以前のIR比較HTMLを作り直す", direction: "画面収録：以前のIR比較HTMLを表示", content: "そこで今日は、この考え方を体感していただくために、<strong>以前に作成した回転寿司大手3社のIR比較サイトを、スペック駆動で作り直してみます</strong>。同じゴールを別のアプローチで辿り直すことで、スペック駆動が何を守ってくれているのかが明確に見えてきます。", reference: "demos/sushi-ir-comparison.html" },
      { start: "1:10", end: "2:05", topic: "Vibe Codingの位置付け", direction: "画面収録：前回のIR比較HTMLを表示しながら振り返り", content: "まず、<strong>前回のやり方＝Vibe Coding</strong>から振り返ります。思いついた指示をそのまま投げ、返ってきたものを採用する――これがVibe Codingです。手早くて便利ですが、<strong>行き当たりばったりで実装するので、修正がうまくいかなかったり、おもいどおりの成果物が生成されないことがあります</strong>。前回のIR比較はたまたま小規模だったため成立しました。規模が大きくなった途端、狙い通りの成果物が出にくくなります。<br><br>ただし誤解のないように言うと、<strong>Vibe Codingが悪いわけではありません</strong>。違いは<strong>AIに渡すコンテキストの量</strong>です。Vibe Codingは思いつきだけを渡す、Spec-Drivingは仕様というコンテキストを事前に渡す――だから狙い通りのものが出やすくなる。<strong>優劣の話ではなく、用途で使い分ける</strong>話です。スケッチや試し打ちならVibeが手軽、業務や正確さが要るならSpec-Drivingが向く、という整理になります。", reference: "" },
      { start: "2:05", end: "2:40", topic: "スペックとは／日常スペックとの接続／Boris継承", direction: "スライド：表紙", content: "では<strong>スペックとは何か</strong>。specは英語のspecification、日本語でいう<strong>「仕様書」</strong>です。<br><br>イメージしやすいのは<strong>「パソコンのスペック」</strong>。メーカーは発売前に目標スペックを決めて、そこに向かって製造ラインが動きます。<strong>スペック駆動開発もこれと同じ発想</strong>で、ソフトウェアも<strong>先に仕様を定めて、そこに向かって作る</strong>。いわば<strong>人間とAIの合意書であり、AIへの設計指示書</strong>です。<br><br><strong>開発者ボリスの「まずPlanしてから実装」</strong>という考え方を、継承しているものです。", reference: "Boris氏（Claude Code開発者）の運用" },
      { start: "2:40", end: "3:10", topic: "ドキュメント＝AIの記憶", direction: "画面収録：docs/spec.mdを開いて見せる", content: "もう一つ、スペックを書くことの大きな効能があります。スペック駆動開発ではドキュメントに仕様を記載していきます。<strong>これがClaude Codeの『記憶』になる</strong>という点です。<br><br>チャット履歴は <code>/clear</code> で消えますし、トークンが膨らめば古い会話は押し流されます。一方で<strong><code>docs/spec.md</code> に書いておけば、次のセッションでもClaude Codeがそこを読みに来てくれる</strong>。結果として、AIの挙動を<strong>予測可能な範囲にコントロール</strong>できるようになります。", reference: "" },
      { start: "3:10", end: "4:00", topic: "まずスペックを書きます（投資家向けに方向付け）", direction: "画面収録：docs/spec.mdを新規作成してClaude Codeに問い返させる", content: "では進めていきます。<strong>まず、スペックを書きます</strong>。<code>docs/spec.md</code> を新規作成しましょう。<br><br>ここがポイントです。<strong>前回と意図的に違う切り口で作ります</strong>。前回は「3社のIRを比較してHTMLに」とざっくり投げた結果、ダークトーンの素朴な比較ページになりました。今回は<strong>投資家・経営者が投資判断に使えるレポート</strong>という位置付けでspecを組みます。<br><br>Claude Codeにはこう依頼します。「<strong>回転寿司3社のIR比較レポートを作成したい。読者は投資家と経営者。抜けている観点を問い返してください</strong>」。AIが問い返してくる項目が、そのままspecのヌケモレ潰しになります。", reference: "" },
      { start: "4:00", end: "4:55", topic: "スペックの中身を見せる（投資家向け仕様）", direction: "画面収録：書き上がったdocs/spec.mdをスクロール", content: "対話を通して書き上がったspecがこちらです。<br><br><code># IR比較レポート 仕様<br><br>## 対象読者<br>投資家・経営者<br><br>## 比較指標<br>- 売上高・営業利益率<br>- PER・PBR・ROE・配当利回り・時価総額<br>- 既存店売上前年比<br><br>## 事業リスク<br>各社の有報「事業等のリスク」から3項目抜粋<br><br>## 直近ニュース・株価変動要因<br>価格改定・決算サプライズ・経営陣交代・M&amp;Aなど、出典と日付付き<br><br>## デザイン<br>白基調・黒文字・グレー罫線・ブルーアクセント（投資レポート風）<br><br>## 構成<br>ヘッダー→サマリー3行→財務テーブル→各社個別（財務＋リスク＋ニュース）→比較インサイト→免責</code><br><br><strong>前回のダークトーン・3指標だけの比較とは、もう別物</strong>です。<strong>ヌケモレと曖昧さは、このフェーズで全て潰しておく</strong>。これがスペック駆動の肝心な部分です。", reference: "" },
      { start: "4:55", end: "5:50", topic: "次にスペックに沿って実装を依頼します", direction: "画面収録：Claude Codeに「この docs/spec.md の通りに作って」と投げる→生成完了まで", content: "<strong>次に、スペックに沿って実装を依頼します</strong>。specが書けたら、あとは<strong>「この <code>docs/spec.md</code> の通りに作ってください」</strong>と依頼する。これだけです。<br><br>前回のVibe Coding版はダークトーンで3指標のみの比較でした。今回は<strong>specを物差しにしている</strong>ため、<strong>解釈のブレがありません</strong>。出来上がった成果物をご覧ください。<strong>白基調の投資レポート風</strong>で、財務指標は<strong>PER・PBR・ROE</strong>まで網羅、事業リスク3項目、直近ニュースの出典と日付、免責事項まで、<strong>specで指定した通り</strong>に仕上がっています。同じ3社・同じIRでも、<strong>作り方を変えるだけで全く別物が出来上がる</strong>。これがspecの力です。", reference: "" },
      { start: "5:50", end: "6:20", topic: "Vibe版との比較（コンテキスト量の差）", direction: "画面収録：Vibe版とSpec版を左右に並べる", content: "Vibe版と並べて比較してみます。スペックを書いておくと、<br><br>①<strong>チームで事前にレビューできる</strong>（作る前に合意が取れる）<br>②<strong>AIの記憶として残る</strong>（セッションを跨いでも再現できる）<br>③<strong>やり直しが一発</strong>（specを修正して再依頼するだけで済む）<br><br>同じ成果物でも、<strong>AIに渡すコンテキスト量の差が、再現性・レビュー容易性・やり直しのしやすさに効いてきます</strong>。", reference: "" },
      { start: "6:20", end: "6:45", topic: "小さく始めるコツ", direction: "画面収録：ざっくりspec→実装→追記の往復イメージ", content: "一つ注意点です。<strong>最初から完璧なspecを書こうとしないでください</strong>。現実には不可能ですし、書き始めた瞬間に手が止まります。<br><br>現実的なのは、<strong>AIと対話しながらspecを育てていく</strong>やり方です。ざっくり書いて、実装してみて、足りない箇所をspecに追記する。この往復で育てていきます。", reference: "" },
      { start: "6:45", end: "7:10", topic: "S5への布石", direction: "同上", content: "スペック駆動は、<strong>S5のアプリ開発編で本領を発揮</strong>します。データベースを持つSaaS風アプリを作る際、specなしで着手すると確実に迷子になります。<br><br>だからこそ今のうちに、<strong>今回のような既視の小さな成果物で習慣化</strong>しておきましょう。IR比較程度のスケールが、ちょうど良い練習台になります。", reference: "" },
      { start: "7:10", end: "7:40", topic: "クロージング", direction: "スライド：表紙", content: "まとめます。<strong>spec＝人間とAIの合意書であり、AIの記憶</strong>です。ヌケモレを先に潰し、作る前に目線合わせを済ませておく――それだけで、Claude Codeとの対話の精度は一段上がります。<br><br><strong>思いつきで依頼するVibeも、スペックを固めて依頼するSpec-Drivingも、ともに大事な道具</strong>。用途に応じて使い分けられるようになってください。それでは、次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S2-V6": {
    meta: {
      duration: "約8分20秒",
      mode: "画面収録（ターミナル＋Claude Code＋ブラウザ。スライドは表紙＋権限3段階比較図のみ）",
      goal: "権限3段階を使い分け、承認画面でCtrl+Eを押して解説を確認し、rm -rf等の破壊的コマンドを回避して、安全にClaude Codeを使えるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "権限3段階比較図", purpose: "デフォルト／Auto-accept edits／フルオートの違いを1枚で見せる", timing: "序盤" },
      { type: "画面収録", name: "権限モード切替", purpose: "Shift+Tabでデフォルト→Auto-accept edits→フルオートを巡回", timing: "序盤〜中盤" },
      { type: "画面収録", name: "承認画面でCtrl+E実演", purpose: "ファイル編集承認画面でCtrl+Eを押して解説を表示", timing: "中盤" },
      { type: "画面収録", name: "ダミーディレクトリでrm -rf挙動", purpose: "demo/sandbox-test/配下で破壊的コマンドが提案される様子を安全に再現", timing: "中盤〜後半" },
      { type: "画面収録", name: "fetch経由プロンプトインジェクションの再現", purpose: "外部URL取得時の悪意ある指示混入デモ", timing: "後半の動作確認" },
      { type: "画面収録", name: "利用金額上限設定", purpose: "Anthropicコンソールで月次予算上限を設定", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:20", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではClaude Codeをこれから本格的に使い始める方に向けて、<strong>安全に使うための基本</strong>を扱います。S2の締めくくりとして、応用に進む前にここで土台を固めていきます。", reference: "" },
      { start: "0:20", end: "1:00", topic: "なぜ扱うか", direction: "表紙のまま", content: "Claude Codeは強力な道具です。<strong>一方でその強さは、使い方次第でファイル消失や情報漏洩に直結します</strong>。Returnキーを連打して全部承認してしまえば、知らないうちに大事なファイルが消えていた、ということも起こりえます。S3以降では権限や承認の判断を皆さん自身が下せる前提で話が進みますので、ここでその基本をしっかり押さえていきましょう。", reference: "" },
      { start: "1:00", end: "1:50", topic: "権限3段階の全体像", direction: "スライド：権限3段階比較図", content: "Claude Codeには権限のモードが3段階あります。<strong>デフォルト、Auto-accept edits、そしてフルオート</strong>です。これは皆さんが普段スマホアプリを入れたときに「カメラへのアクセスを許可しますか？」と聞かれるのと同じ仕組みと思っていただいて構いません。<strong>何をどこまで自動で許すかを、自分で選べる</strong>作りになっています。", reference: "" },
      { start: "1:50", end: "2:30", topic: "デフォルトモード", direction: "画面収録：Shift+Tabで切り替え→デフォルト動作確認", content: "まずデフォルトモードです。これは<strong>Claude Codeが何かを実行するたびに、毎回承認を求めてくる慎重なモード</strong>になります。ファイルを編集する、コマンドを実行する、外部から情報を取りに行く、そのつど画面に確認が出ます。最初はこのモードから入っていただくのが安心です。", reference: "" },
      { start: "2:30", end: "3:10", topic: "Auto-accept edits", direction: "画面収録：Shift+TabでAuto-accept editsへ", content: "次にAuto-accept editsです。<strong>ファイルの編集だけは自動で進める、一方で破壊的な操作やコマンド実行は引き続き聞いてくる</strong>、というバランス型のモードになります。コードを書きながら細かい編集承認を毎回押すのが手間に感じてきたら、ここに上げるという運用が現実的です。", reference: "" },
      { start: "3:10", end: "3:55", topic: "フルオートとサンドボックス", direction: "画面収録：Shift+Tabでフルオートへ", content: "最後がフルオートです。これは<strong>承認なしで全てを自動で進めるモード</strong>です。一見便利ですが、本番のフォルダでこれを使うと、Claude Codeが意図せず破壊的な操作を提案した瞬間に、止める手立てがなくなります。ですので<strong>フルオートはサンドボックス環境、つまり消えても困らない使い捨てのフォルダで使う</strong>のが鉄則になります。これは本講座のポリシー13「サンドボックス＝安全」として、これまでも繰り返しお伝えしてきた考え方です。", reference: "ポリシー13「サンドボックス＝安全」" },
      { start: "3:55", end: "4:50", topic: "承認画面の読み方とCtrl+E", direction: "画面収録：承認画面でCtrl+Eを押下→解説表示", content: "ここで一番身につけていただきたい癖をお伝えします。<strong>承認画面が出たら、必ず一度Ctrl+Eを押してください</strong>。Ctrl+Eを押すと、Claude Codeが「なぜこの操作をしようとしているのか」「何が変わるのか」を解説してくれます。Returnを連打して全承認してしまうのは、利用規約を読まずに「同意する」を押す癖と同じと思っていただきたいです。一手間ですが、<strong>この癖が事故を防ぎます</strong>。", reference: "" },
      { start: "4:50", end: "5:50", topic: "rm -rf等の破壊的コマンド", direction: "画面収録：demo/sandbox-test/配下で実演", content: "次に、AIが意図せず破壊的コマンドを提案するケースを実演します。<strong>本番のフォルダではなく、消えても困らないダミーフォルダで再現</strong>します。たとえば「不要なログを掃除して」という何気ない依頼に対し、Claude Codeが<code>rm -rf logs/</code>のような提案をしてくる場面があります。多くの場合は問題ないのですが、フォルダの指定を間違えると関係ないファイルまで消えます。<strong>「自分は注意しているから大丈夫」と思いがちですが、AIが提案する破壊的操作は、本人の注意深さとは別次元で発生します</strong>。だからこそ承認画面でCtrl+Eを押し、何が消えるのかを一度確認する癖が要ります。", reference: "" },
      { start: "5:50", end: "6:40", topic: "fetch経由プロンプトインジェクション", direction: "画面収録：外部URLを取得→悪意ある指示が混入する例", content: "もう一つ知っておいていただきたいのが、外部URLを取得する場面です。Claude Codeに<strong>「このURLの内容を読んで要約して」と依頼すると、そのページに仕込まれた指示文をAIが命令と勘違いして実行してしまう</strong>ことがあります。これを<strong>プロンプトインジェクション</strong>と呼びます。信頼できないサイトの内容をそのまま読ませる場合は、後続の操作にAuto-acceptやフルオートを使わない、という運用で防げます。", reference: "" },
      { start: "6:40", end: "7:20", topic: "利用金額上限設定", direction: "画面収録：Anthropicコンソール→利用上限設定", content: "最後に利用金額の上限設定です。Claude Codeは便利な一方で、長時間の自動実行で意図せぬ多額課金が発生することもありえます。<strong>Anthropicの管理画面で月次の上限を設定しておけば、その額を超えた瞬間に自動で止まります</strong>。心配せずに使うための保険として、最初に必ず設定しておきましょう。", reference: "Anthropic公式「Permissions」 https://docs.claude.com/en/docs/claude-code/iam" },
      { start: "7:20", end: "7:50", topic: "S6への布石", direction: "スライド：表紙", content: "なお、<strong>環境変数やAPIキーの実体験は、S6でSupabaseに接続する場面で実際に扱います</strong>。今日はその手前の、権限・承認・破壊的操作・利用上限という土台を押さえる回でした。", reference: "" },
      { start: "7:50", end: "8:20", topic: "クロージング", direction: "スライド：表紙", content: "まとめます。<strong>権限は3段階で使い分ける、承認画面ではCtrl+Eで意図を確認する、フルオートはサンドボックスでだけ使う、利用上限を最初に設定する</strong>——この4点を守れば、Claude Codeは安心して応用に持ち込めます。S2はここまで、次のS3からはSkillsとMCPを扱っていきます。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S2-V4": {
    meta: {
      duration: "約8分10秒",
      mode: "画面収録（ターミナル＋Claude Code＋ブラウザ。スライドは表紙のみ）",
      goal: "回転寿司大手3社の公開IR資料をClaude CodeのWebFetch機能で取得し、3指標の比較マトリクスHTMLを1回の依頼で生成できるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "ブラウザ", name: "3社IR情報ページ", purpose: "スシロー（FOOD & LIFE COMPANIES）／くら寿司／はま寿司（ゼンショーHD）の公開IRページ", timing: "序盤" },
      { type: "画面収録", name: "Claude CodeへのWebFetch依頼", purpose: "3社の決算短信URLを渡して比較マトリクスHTMLを依頼", timing: "中盤" },
      { type: "画面収録", name: "WebFetch機能で各社IR取得", purpose: "Claude Codeが順に決算短信を取りに行く様子", timing: "中盤〜後半" },
      { type: "出力成果物", name: "demos/sushi-ir-comparison.html（比較マトリクスHTML）", purpose: "売上高・営業利益率・既存店売上前年比の3指標で3社を比較", timing: "後半の動作確認" }
    ],
    script: [
      { start: "0:00", end: "0:20", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではマーケター・経営企画・営業の方に向けて、<strong>Claude Codeをリサーチ業務に応用する方法</strong>をお伝えします。題材は誰もが知っている回転寿司大手3社、公開IR資料を一発で比較マトリクスHTMLにまとめる体験です。", reference: "" },
      { start: "0:20", end: "1:10", topic: "なぜ扱うか", direction: "表紙のまま", content: "他社の動向を掴むためのリサーチは、多くの職種で時間を取られている業務だと思います。<strong>決算短信のPDFを開いて、売上や利益率の数字を拾って、Excelに転記して比較表を作る</strong>——一社あたり30分、3社で1時間半、5社なら半日仕事になります。一方で<strong>Claude CodeにWebFetchで各社IRのURLを渡せば、数分で比較マトリクスが手元に届きます</strong>。今日はその体験をしていただく回です。", reference: "" },
      { start: "1:10", end: "1:50", topic: "題材紹介", direction: "画面収録：エディタを開く", content: "題材は<strong>回転寿司大手3社、スシロー・くら寿司・はま寿司</strong>を使います。誰でも知っている業界で、3社とも上場企業として公開IRが揃っているという、入門には最適な題材になります。皆さんが実務で使う際は、<strong>この3社を任意の業界の競合企業に置き換えていただければ、そのまま今日のやり方が使えます</strong>。", reference: "" },
      { start: "1:50", end: "2:30", topic: "公開IR資料の場所確認", direction: "ブラウザ：3社のIR情報ページを順に開く", content: "まず3社の公開IRページを実際に開いて見ます。<strong>スシローはFOOD & LIFE COMPANIES、くら寿司は単独上場、はま寿司はゼンショーホールディングス傘下</strong>になります。各社のIR情報ページに、最新の決算短信PDFが必ず公開されています。<strong>これらは投資家向けに公開されている情報なので、誰でもアクセスできます</strong>。", reference: "スシロー: https://www.food-and-life.co.jp/ir/ ／ くら寿司: https://www.kurasushi.co.jp/ir/ ／ はま寿司: https://www.zensho.co.jp/jp/ir/" },
      { start: "2:30", end: "3:10", topic: "WebFetch機能の説明", direction: "画面収録：Claude Codeの起動", content: "Claude Codeには<strong>WebFetch機能</strong>があります。これは<strong>URLを渡すと、Claude Codeがそのページの内容を読み取って解釈してくれる機能</strong>です。皆さんがブラウザでPDFを開いて目で読んでいた作業を、Claude Codeに代行してもらうイメージと思っていただいて構いません。<strong>公開情報なので、社外秘や個人情報を扱う場面とは性質が別物</strong>と整理いただければ、心理的な抵抗なく使えます。", reference: "" },
      { start: "3:10", end: "4:00", topic: "Claude Codeに依頼", direction: "画面収録：Claude Codeのプロンプト入力欄", content: "ではClaude Codeに依頼します。「<strong>この3社の最新決算短信を取得して、売上高・営業利益率・既存店売上前年比の3指標で比較マトリクスHTMLにしてください</strong>」と、3社のIR情報ページのURLを並べて自然な日本語で依頼します。<strong>これは典型的なVibe Codingです</strong>。仕様書を書かずに、ざっくりと依頼して素早く形にする、という進め方になります。", reference: "" },
      { start: "4:00", end: "5:30", topic: "WebFetchで各社IR取得", direction: "画面収録：Claude CodeがWebFetchで決算短信を順に取得（タイムラプス）", content: "Claude CodeがWebFetch機能で<strong>3社の決算短信PDFを順に取りに行きます</strong>。スシロー、くら寿司、はま寿司、それぞれの最新決算から売上高・営業利益率・既存店売上前年比の数字を抽出してくれます。生成には少し時間がかかりますので、実際の業務では他の作業をしながら待っていただく形になります。", reference: "" },
      { start: "5:30", end: "6:20", topic: "比較マトリクスHTML確認", direction: "画面収録：demos/sushi-ir-comparison.htmlをブラウザで開く", content: "完成しました。<strong>demos/sushi-ir-comparison.htmlをブラウザで開く</strong>と、3社×3指標のマトリクスが表示されます。売上高はスシローが最大、営業利益率はくら寿司が最も高い、既存店売上前年比は3社とも前年超え——といった<strong>差が一目で分かる仕上がり</strong>になります。これを一から手作業でやれば一時間以上かかる作業が、依頼から数分で形になりました。", reference: "demos/sushi-ir-comparison.html" },
      { start: "6:20", end: "7:00", topic: "Vibe Codingの特徴を中立に整理", direction: "画面収録：生成されたHTMLを表示しながら", content: "ここで一つ整理させてください。今日の進め方は<strong>Vibe Codingの典型例</strong>です。仕様書を書かずに、ざっくり依頼して素早く形にする——<strong>コンテキスト量が少なく、入門として最適なアプローチ</strong>になります。一方で精度や再現性、デザインの統一性を求める場面では別のアプローチが向きます。<strong>優劣の話ではなく、用途で使い分けるという整理</strong>になります。次の動画では、まさにこの対比を体感していただきます。", reference: "" },
      { start: "7:00", end: "7:30", topic: "応用可能性", direction: "画面収録：HTMLを表示しながら", content: "今日の進め方は、<strong>題材の3社を任意の業界の競合企業に置き換えれば、どの職種でも今日から使えます</strong>。マーケターなら自社カテゴリの上位3社、経営企画なら同業界の上場企業、営業なら担当業界のキープレイヤー——皆さんのドメイン知識と組み合わせれば、競合分析の初手として強い武器になります。", reference: "" },
      { start: "7:30", end: "8:10", topic: "クロージング・次回への布石", direction: "スライド：表紙", content: "まとめます。<strong>Claude CodeのWebFetch機能で公開IR資料を取得し、1回の依頼で比較マトリクスHTMLが手元に届く</strong>——リサーチ業務にClaude Codeを応用する第一歩を体験していただきました。<strong>次の動画では、同じ3社IRを題材に、今度は投資家向けレポートとしてスペック駆動で作り直します</strong>。同じ題材でコンテキスト量を増やすと成果物がどう変わるか、その対比をぜひ体感してください。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  }
};
