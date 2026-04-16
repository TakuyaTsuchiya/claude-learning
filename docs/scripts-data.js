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
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではClaude Codeを使い始める皆さんに向けて、<strong>Claude CodeとCursorのインストール、そして初回のステータスライン設定</strong>までをお伝えします。Mac・Windows両方の手順を押さえていきます。", reference: "" },
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
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では営業職の方に向けて、自動見積り作成ツールをClaude Codeで作っていきます。題材はホテルに備品を納入するBtoB営業、お客様への見積書をぱっと出せる実務ツールを一緒に組み立てます。", reference: "" },
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
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではオフィスワーカーの方に向けて、<strong>社内会議用の資料をHTMLサイトでつくる方法</strong>をお伝えします。アジェンダのMarkdown1枚をClaude Codeに渡すだけで、URLで配布できる会議資料が仕上がる、そんな作り方です。", reference: "" },
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
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、Claude Codeの<strong>基本コマンドとPlanモードの使い方</strong>をお伝えします。", reference: "" },
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
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではClaude Codeを使う皆さんに向けて、<strong>Claude Codeが毎回読み込む取扱説明書『CLAUDE.md』の書き方</strong>をお伝えします。非エンジニアの方でも書ける、入門レベルで進めていきます。", reference: "" },
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
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではClaude Codeをこれから本格的に使い始める方に向けて、<strong>安全に使うための基本</strong>を扱います。S2の締めくくりとして、応用に進む前にここで土台を固めていきます。", reference: "" },
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
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではマーケター・経営企画・営業の方に向けて、<strong>Claude Codeをリサーチ業務に応用する方法</strong>をお伝えします。題材は誰もが知っている回転寿司大手3社、公開IR資料を一発で比較マトリクスHTMLにまとめる体験です。", reference: "" },
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
  },
  "S3-V1": {
    meta: {
      duration: "約8分",
      mode: "画面収録（ターミナル＋Claude Code＋ブラウザ。スライドは表紙のみ）",
      goal: "shinkokuをインストールして確定申告の一連の流れを実演し、Skills＝専門家の手順がパッケージ化されたものという概念を理解する。自分の業務をSkill化する発想を得る"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "画面収録", name: "shinkokuインストール", purpose: "/plugin marketplace add → /plugin install の流れ", timing: "序盤" },
      { type: "画面収録", name: "/assess 申告要否判定", purpose: "数問の対話で申告必要を判定", timing: "中盤" },
      { type: "画面収録", name: "/journal 仕訳登録", purpose: "レシート1枚OCR→勘定科目自動判定", timing: "中盤" },
      { type: "画面収録", name: "/settlement → /income-tax", purpose: "決算整理から還付額表示まで", timing: "中盤〜後半" },
      { type: "画面収録", name: "/e-tax ブラウザ自動入力", purpose: "Claudeがブラウザを操作して作成コーナーに入力", timing: "後半の動作確認" },
      { type: "出力成果物", name: "PL/BSと還付額レポート", purpose: "決算書と所得税の還付額表示", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では業務効率化に取り組みたい全職種の方に向けて、<strong>Skills</strong>という機能をお伝えします。題材は確定申告、税理士の専門手順を丸ごとパッケージ化した<strong>shinkoku</strong>を実際にインストールして動かしていきます。", reference: "" },
      { start: "0:20", end: "1:10", topic: "なぜ扱うか", direction: "表紙のまま", content: "皆さんは普段、Claude Codeに何かを依頼するとき<strong>毎回プロンプトを書き直して</strong>いないでしょうか。同じような依頼でも品質がブレる、チームのメンバーに同じ仕事を頼んでも自分のようには進まない、自分の頭の中の手順を共有できない——こうした課題はSkillsを使うことでまとめて解決できます。<strong>Skills＝職人の手順をパッケージ化したもの</strong>、これがS3で扱う最初のキーワードです。", reference: "" },
      { start: "1:10", end: "1:50", topic: "題材紹介：shinkoku", direction: "画面収録：shinkokuのGitHubリポジトリを表示", content: "題材は<strong>確定申告</strong>です。確定申告は税理士が長年の経験で身につけた判断手順、<strong>帳簿の付け方・決算整理・税額計算・電子申告までの一連の判断</strong>がぎっしり詰まった業務になります。この税理士の手順を丸ごとパッケージ化したのが、今日扱う<strong>shinkoku</strong>です。", reference: "shinkoku: https://github.com/kazukinagata/shinkoku" },
      { start: "1:50", end: "2:30", topic: "Skillsの定義", direction: "スライド：表紙", content: "ここで<strong>Skillsとは何か</strong>を整理します。日常の例で言えば<strong>「資格」や「免許」</strong>と同じ発想です。資格を持っている人が職場に来れば、その瞬間から即戦力として動ける——Skillsもそれと同じで、<strong>インストールするだけで専門家の手順が動き出す</strong>仕組みになります。さらにSkillsは<strong>SKILL.mdというオープン標準</strong>で書かれているので、Claude Codeだけでなく40以上のAIエージェントで共通して動く——そういう普遍性を持っています。", reference: "Anthropic公式Skills: https://github.com/anthropics/skills" },
      { start: "2:30", end: "3:30", topic: "shinkokuインストール実演", direction: "画面収録：ターミナルでコマンド実行", content: "では実際にshinkokuをインストールします。Claude Code内で<strong>/plugin marketplace add</strong>でshinkokuのリポジトリを登録、続けて<strong>/plugin install</strong>でshinkokuを取り込みます。これだけで税理士の判断手順が皆さんのClaude Codeに常駐する状態になります。<strong>一点補足</strong>：初回はまず<strong>/setup</strong>で初期設定が必要になります。マイナンバーなど個人情報を扱いますので、ここでは事前に済ませた状態で進めます。<strong>/setup</strong>から<strong>/e-tax</strong>まで、<strong>一連のパイプライン</strong>として順番につながっています。", reference: "" },
      { start: "3:30", end: "4:10", topic: "申告要否判定", direction: "画面収録：/assess 実行", content: "まず<strong>/assess</strong>を実行します。これは申告要否を判定するスキルで、<strong>数問の対話に答えるだけで「申告が必要かどうか」を判定</strong>してくれます。会社員で副業がある方、フリーランスの方、年金受給者の方、それぞれのケースで「申告必要」「不要」の判定が出ます。<strong>これだけで税理士に相談する一歩目が済む</strong>形になります。", reference: "" },
      { start: "4:10", end: "4:55", topic: "仕訳登録", direction: "画面収録：レシート画像を渡して/journal実行", content: "次に<strong>/journal</strong>で仕訳登録を実演します。レシート1枚を渡すだけで、<strong>Claude CodeがOCRで内容を読み取り、勘定科目を自動判定して仕訳を作ってくれます</strong>。コンビニで買った文房具なら「消耗品費」、駅で買った切符なら「旅費交通費」、こうした判断を税理士の手順に沿って自動でやってくれる、というわけです。", reference: "" },
      { start: "4:55", end: "5:35", topic: "決算整理と所得税計算", direction: "画面収録：/settlement → /income-tax 実行", content: "仕訳が一通り登録されたら<strong>/settlement</strong>で決算整理、続いて<strong>/income-tax</strong>で所得税計算に進みます。決算整理を実行するとPL（損益計算書）とBS（貸借対照表）が一発で表示され、所得税計算に進めば<strong>還付額がいくらになるか</strong>がその場で表示されます。手作業なら半日かかる工程が、コマンド一つで終わります。", reference: "" },
      { start: "5:35", end: "6:30", topic: "e-Tax自動入力と個人情報の扱い", direction: "画面収録：/e-tax を実行→ブラウザ自動入力", content: "最後に<strong>/e-tax</strong>を実行します。これはClaude Codeが<strong>ブラウザを実際に操作して、e-Taxの確定申告書等作成コーナーに自動で入力していく</strong>機能になります。これまで手で打ち込んでいた数字がClaudeの手で順に入力されていく様子は、初めて見ると衝撃かもしれません。<strong>一方でマイナンバーや源泉徴収票の内容など、個人情報に関わる項目は手動入力を推奨します</strong>。自動化と手動のバランス、ここがSkillの設計の肝になります。", reference: "" },
      { start: "6:30", end: "7:05", topic: "Skillの本質", direction: "スライド：表紙", content: "今日体験していただいたshinkokuは、<strong>作者の税理士的な判断手順が、インストールした全員に配布される</strong>仕組みです。これがSkillの本質になります。専門家1人の知識が、Skillという形で組織や世界中の使い手に配られる——<strong>「個人のノウハウが組織の資産になる」</strong>、これが業務効率化の文脈でSkillsが革命的だと言われる理由です。", reference: "" },
      { start: "7:05", end: "7:30", topic: "クロージング", direction: "スライド：表紙", content: "今日は他者が作ったSkillを使う体験でしたが、<strong>次の動画では皆さん自身が自分の業務をSkill化する側に回ります</strong>。受け取る側から作り手に回る、その入口がSkills Creatorです。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S3-V2": {
    meta: {
      duration: "約7分10秒",
      mode: "画面収録（エディタ＋Claude Code＋ブラウザ。スライドは表紙のみ）",
      goal: "Skills Creatorで月次経営報告レポートをSkill化し、同じ品質のレポートをチーム誰もが生成できる状態にする。架空ドレミファエア社の3月度月次レポートをHTMLインフォグラフィックで一気通貫生成する"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "サンプルデータ", name: "demos/doremifa-air/financials.csv", purpose: "架空ドレミファエア社（7路線中堅キャリア）の3月度業績データ", timing: "サンプルデータ紹介" },
      { type: "サンプルデータ", name: "demos/doremifa-air/board-notes.md", purpose: "経営会議メモ（関心事抽出のソース）", timing: "サンプルデータ紹介" },
      { type: "サンプルデータ", name: "demos/doremifa-air/business-notes.md", purpose: "事業背景メモ（定性情報のソース）", timing: "サンプルデータ紹介" },
      { type: "画面収録", name: "/skill-creator 起動と対話", purpose: "経理手順を口頭説明→SKILL.md自動生成", timing: "中盤" },
      { type: "画面収録", name: "テスト実行→HTMLレポート確認", purpose: "3ファイルを渡してHTMLレポート生成→ブラウザで読まれるレポートを確認", timing: "後半の動作確認" },
      { type: "画面収録", name: "対話で微調整", purpose: "「グラフが弱い」「示唆をもう1段」をSkillに反映", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では経理・管理部門の方に向けて、<strong>毎月の月次レポート作成をSkill化する方法</strong>をお伝えします。Skills Creatorという機能を使い、自分の業務を組織誰もが再現できる仕組みに変えていきます。", reference: "" },
      { start: "0:25", end: "1:25", topic: "なぜ扱うか", direction: "表紙のまま", content: "月末の業績集計、議事録の読み直し、パワポへの転記——多くの経理担当の方が<strong>毎月10〜30時間を月次レポート作成</strong>に費やしています。一方で経営会議に出すと「数字の羅列」で読まれずに終わる、というケースも少なくないと思います。これをSkill化すれば、<strong>同じ手順を毎月Claude Codeが回してくれる、しかも背景・ストーリー・示唆まで含めた読まれるレポート</strong>に進化させられます。今日はその体験をしていただく回になります。", reference: "" },
      { start: "1:20", end: "1:50", topic: "前回からの転換（受動→能動）", direction: "表紙のまま", content: "前回の動画では、他者が作ったshinkokuを使う「受動的な体験」をしていただきました。<strong>今日は皆さん自身が作り手に回ります</strong>。受け取る側から能動的に設計する側へ、その転換を可能にするのがSkills Creatorです。", reference: "" },
      { start: "1:50", end: "2:30", topic: "題材紹介：ドレミファエア社", direction: "画面収録：demos/doremifa-air/ の3ファイルを順に開く", content: "題材は架空の<strong>ドレミファエア社</strong>です。ドレミファソラシドの7路線を持つ中堅キャリア、その3月度の月次経営レポートを作成します。インプットは3つ——<strong>業績CSV・経営会議メモ・事業背景メモ</strong>。これらから経営者向けHTMLレポートを出力する、というシナリオで進めます。", reference: "demos/doremifa-air/financials.csv／board-notes.md／business-notes.md" },
      { start: "2:30", end: "3:10", topic: "Skills Creatorの正体", direction: "スライド：表紙", content: "ここで<strong>Skills Creatorとは何か</strong>を整理します。これは<strong>「あなたの業務手順をClaudeに口頭で説明するだけで、SKILL.md仕様に変換してくれる対話型ツール」</strong>です。プロンプトエンジニアリングの知識は要りません。普段の業務をそのまま言葉で伝える——それだけでSkillが組み上がる、という設計になっています。", reference: "公式Skills Creator: https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md" },
      { start: "3:10", end: "4:00", topic: "/skill-creator 起動と業務説明", direction: "画面収録：Claude Codeで/skill-creator 実行→対話", content: "<strong>/skill-creator</strong>を起動すると、インタビュー形式で「<strong>このSkillに何をさせたいか</strong>」「<strong>どんな場面でトリガーするか</strong>」「<strong>出力形式は何か</strong>」「<strong>テストケースも作るか</strong>」と順番に聞いてきます。ここで経理手順を説明していきます——<strong>前年比計算・議事録からの関心事抽出・事業メモからの定性情報の取り込み・数字の背景ストーリーの組み立て・最終的なHTML出力</strong>、こうした手順を伝えると、普段の作業がそのままSkillに変換されていきます。", reference: "" },
      { start: "4:00", end: "4:40", topic: "SKILL.md自動生成と中身確認", direction: "画面収録：生成されたSKILL.mdを開く", content: "皆さんの説明が<strong>SKILL.mdというファイルに自動変換されていきます</strong>。中身を開いてみると——<strong>ロール・インプット条件・アウトプット条件</strong>が構造化されて並んでいる状態になります。Claudeが手順を理解できる形に整理された設計図、と思っていただいて構いません。", reference: "" },
      { start: "4:40", end: "5:30", topic: "テスト実行→HTMLレポート", direction: "画面収録：3ファイルを渡してテスト実行→ブラウザでHTMLレポート確認", content: "では生成されたSkillをテストします。<strong>demos/doremifa-air/ の3ファイルを渡して実行</strong>すると、HTMLレポートが生成されます。ブラウザで開くと——「LCC参入で価格競争懸念」「新路線就航で四国需要の取り込み」といった<strong>背景付きの読まれるレポート</strong>が仕上がっています。数字だけではなく、その裏にある事業ストーリーまで含まれた経営者向けの一枚です。", reference: "" },
      { start: "5:30", end: "6:10", topic: "対話で微調整・小さく始める", direction: "画面収録：「グラフが弱い」「示唆をもう1段」を対話で反映", content: "<strong>最初から完璧なSkillを作ろうとしないでください</strong>。現実には不可能ですし、書き始めた瞬間に手が止まります。「グラフが弱い」「示唆をもう1段踏み込みたい」と気づいたら、対話でSkillに反映していきます。<strong>1ヶ月分でまず回して、足りない箇所を追記する</strong>——この往復でSkillを育てていく形になります。", reference: "" },
      { start: "6:10", end: "6:40", topic: "チーム共有と属人化解消", direction: "画面収録：SKILL.mdをチームに共有する想定", content: "ここがSkillの真骨頂です。<strong>このSkillをチームに共有すれば、他の経理メンバーも同じ品質でレポートを出せます</strong>。ベテラン経理の頭の中にしかなかった手順が、組織の資産に変わります。これは個人の業務効率化を超えて、<strong>組織全体の生産性が一段上がる</strong>変化になります。", reference: "" },
      { start: "6:40", end: "7:10", topic: "クロージング", direction: "スライド：表紙", content: "今日はSkill化の作り手体験をしていただきました。<strong>次の動画からは、Skillとは別の角度で組織に入っていく仕組み——MCPを扱います</strong>。Slack・Notion・Figma・Xといった日常ツールにClaudeが手を伸ばす世界です。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S3-V3": {
    meta: {
      duration: "約5分",
      mode: "画面収録（ターミナル＋Claude Code＋ブラウザ。スライドは表紙＋MCP概念図のみ）",
      goal: "Slack公式MCPプラグインを1コマンドで接続し、全チャンネル横断で日報・週報をHTML形式で自動生成できるようになる。MCPの本質と、公式プラグインによるセットアップの簡潔さを理解する"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "MCP概念図（USB-C例示）", purpose: "MCPを共通規格として説明", timing: "序盤" },
      { type: "ブラウザ", name: "Slack公式MCPプラグインリポジトリ（slackapi/slack-mcp-plugin）", purpose: "現行パスが公式提供であることを確認", timing: "中盤" },
      { type: "画面収録", name: "claude plugin install slack", purpose: "1コマンドで導入完了を実演", timing: "中盤" },
      { type: "画面収録", name: "/mcp でOAuth認証", purpose: "ブラウザでワークスペース選択→許可までの流れを実演", timing: "中盤" },
      { type: "画面収録", name: "日報生成プロンプト→HTML出力", purpose: "全チャンネルクロール→経営層向けHTML日報の生成", timing: "後半の動作確認" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではチームリーダー・マネージャーの方に向けて、<strong>Slack MCPで日報・週報をHTML形式で自動生成する方法</strong>をお伝えします。", reference: "" },
      { start: "0:20", end: "1:10", topic: "なぜ扱うか", direction: "表紙のまま", content: "チームリーダーとして、<strong>日報を書かせたり、自分で情報を集めて整理したりする作業</strong>に負担を感じることはないでしょうか。Slackには雑多な情報が流れるので、そこから日報を作るのは意外と手間がかかります。<strong>Slack MCPを繋ぐと、AIがSlackを巡回して自動で整理してくれます</strong>。その結果、<strong>現状の把握や問題の発見が格段に効率的になります</strong>。", reference: "" },
      { start: "1:10", end: "1:40", topic: "MCPの定義（USB-Cアナロジー）", direction: "スライド：MCP概念図", content: "MCPは<strong>モデル・コンテキスト・プロトコル</strong>の略で、AIとSlackやNotionなどの外部ツールを繋ぐ<strong>共通規格</strong>です。深く考えず、<strong>AIが使うUSB-Cポート</strong>みたいなものだと思ってください。", reference: "" },
      { start: "1:40", end: "1:50", topic: "Slack公式プラグインの確認", direction: "ブラウザ：slackapi/slack-mcp-pluginを開く", content: "では実演に入ります。まず<strong>Slack公式が提供するMCPプラグイン</strong>を確認します。", reference: "https://github.com/slackapi/slack-mcp-plugin" },
      { start: "1:50", end: "2:20", topic: "1コマンドでインストール", direction: "画面収録：claude plugin install slack を実行", content: "接続は<strong>1コマンドだけ</strong>です。<code>claude plugin install slack</code>を実行すると、プラグインがインストールされ、MCP設定も自動で配置されます。Claude Codeを再起動、または<code>/reload-plugins</code>で再読み込みすればプラグインが有効化されます。", reference: "" },
      { start: "2:20", end: "3:10", topic: "OAuth認証で接続", direction: "画面収録：/mcp → Authenticate → ブラウザでOAuth許可", content: "再起動後、<code>/mcp</code>コマンドでSlackの状態を確認します。「認証が必要」と表示されるので、<strong>Authenticateを選ぶとブラウザが自動で開きます</strong>。Slackのログイン画面が表示されるので、<strong>対象のワークスペースを選んで「許可する」</strong>をクリックしてください。Claude Codeに戻ると<strong>connectedと表示され、Slackの13種類のツールが有効になります</strong>。", reference: "" },
      { start: "3:10", end: "4:00", topic: "日報生成プロンプト→HTML出力", direction: "画面収録：プロンプト送信→HTMLダッシュボード表示", content: "では実際に日報を生成していきます。「<strong>Slackの営業・企画・事務チャンネルの直近投稿を読んで、経営層向けの日報をHTMLで出してください</strong>」と依頼します。Claudeが全チャンネルを巡回し、<strong>KPIバッジ・顧客別フェーズ表・失注の赤字アラート・経営サマリーまで含むHTML日報</strong>を出力してくれます。スタイリングまで自動で整えてくれるので、そのまま共有できる品質になります。", reference: "" },
      { start: "4:00", end: "4:30", topic: "週報・応用展開", direction: "画面収録：期間指定を変えて週報生成", content: "同じプロンプトで「直近投稿」を「過去30日間」に変えれば<strong>週報・月報も同じ仕組みで生成可能</strong>です。HTMLファイルとして保存すれば、経営層への共有もURLを送るだけで済みます。<strong>一度繋いでしまえば、応用範囲は使う側のアイデア次第</strong>になります。", reference: "" },
      { start: "4:30", end: "5:00", topic: "クロージング", direction: "スライド：表紙", content: "<strong>同じ仕組みでNotionの議事録・Figmaのデザイン・Xの投稿まで、すべてMCP経由でClaudeに操作させられます</strong>。次の動画ではNotion MCPで組織の記憶を横断する体験をしていただきます。", reference: "" }
    ]
  },
  "S3-V4": {
    meta: {
      duration: "約5分",
      mode: "画面収録（ターミナル＋Claude Code＋Notion＋ブラウザ。スライドは表紙のみ）",
      goal: "Notion公式Claude Codeプラグインを1〜2コマンドで接続し、議事録とプロジェクト情報を横断して経営課題を抽出、HTMLダッシュボードに再構成できるようになる。組織に蓄積された記憶をClaudeが司書として横断する力学を体感する"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "ブラウザ", name: "Notion公式Claude Codeプラグインリポジトリ（makenotion/claude-code-notion-plugin）", purpose: "現行パスが公式提供であることを確認", timing: "中盤" },
      { type: "画面収録", name: "/plugin marketplace add → /plugin install", purpose: "公式プラグインを2コマンドで導入する実演", timing: "中盤" },
      { type: "画面収録", name: "/mcp でOAuth認証", purpose: "ブラウザでワークスペース選択→許可までの流れを実演", timing: "中盤" },
      { type: "Notion画面", name: "ダミー組織の議事録DB＋プロジェクト管理DB", purpose: "横断対象のNotion構造を提示", timing: "中盤" },
      { type: "画面収録", name: "経営課題抽出プロンプト→HTML出力", purpose: "過去3ヶ月議事録の横断検索→HTMLダッシュボード生成", timing: "後半の動作確認" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では経営層・組織開発・人事の方に向けて、<strong>Notion MCPで組織の記憶を横断する方法</strong>をお伝えします。MCP第2弾です。", reference: "" },
      { start: "0:20", end: "1:10", topic: "なぜ扱うか", direction: "表紙のまま", content: "人の脳は<strong>個人の経験しか記憶できません</strong>。一方でNotionには<strong>組織全体の議事録・プロジェクト情報・ナレッジが蓄積</strong>されているのに、検索しても断片しか出てこず、結局人手で集めて回った経験はないでしょうか。<strong>Notion MCPを繋ぐと、Claudeが司書として複数の情報源を一度に巡回してくれます</strong>。その結果、<strong>過去の議論から経営課題を拾い直す作業が格段に効率的になります</strong>。", reference: "" },
      { start: "1:10", end: "1:30", topic: "Slackとの対比", direction: "スライド：表紙", content: "位置付けを対比させてください。<strong>Slackは「流れる情報」</strong>、<strong>Notionは「蓄積された記憶」</strong>です。両方が揃って、組織の意思決定の速度と質が同時に上がります。", reference: "" },
      { start: "1:30", end: "1:50", topic: "Notion公式プラグインの確認", direction: "ブラウザ：makenotion/claude-code-notion-pluginを開く", content: "では実演に入ります。まず<strong>Notion公式のClaude Codeプラグイン</strong>を確認します。<strong>MCPサーバーに加えて、Skillsやスラッシュコマンドまでバンドル</strong>されています。", reference: "https://github.com/makenotion/claude-code-notion-plugin" },
      { start: "1:50", end: "2:25", topic: "2コマンドでインストール", direction: "画面収録：/plugin marketplace add → /plugin install を実行", content: "接続は<strong>2コマンドだけ</strong>です。まず<code>/plugin marketplace add</code>でマーケットプレイスを登録し、続けて<code>/plugin install</code>でインストールします。Claude Codeを再起動、または<code>/reload-plugins</code>で再読み込みすればプラグインが有効化されます。", reference: "" },
      { start: "2:25", end: "3:10", topic: "OAuth認証で接続", direction: "画面収録：/mcp → Authenticate → ブラウザでOAuth許可", content: "再起動後、<code>/mcp</code>でNotionの状態を確認します。「認証が必要」と表示されるので、<strong>Authenticateを選ぶとブラウザが自動で開きます</strong>。<strong>対象のワークスペースを選び、「アクセスを許可」</strong>をクリックしてください。Claude Codeに戻ると<strong>Authentication Successfulと表示され、検索・ページ取得・DB作成など15種のツールが一斉に有効になります</strong>。", reference: "" },
      { start: "3:10", end: "4:00", topic: "経営課題抽出プロンプト", direction: "画面収録：ダミー組織のNotionを開いて構造を見せ、プロンプト送信", content: "題材は<strong>架空組織の議事録DBとプロジェクト管理DB</strong>です。ここに<strong>過去3ヶ月分の経営会議・事業部会議・顧客面談の議事録</strong>が並んでいます。Claudeに依頼します。「<strong>過去3ヶ月の議事録を横断して経営課題に該当するトピックを抽出し、関連プロジェクトと紐付けてください</strong>」。<strong>Claudeが議事録DBとプロジェクト管理DBを一度に巡回し、課題を集約してきます</strong>。", reference: "" },
      { start: "4:00", end: "4:30", topic: "HTMLダッシュボード生成", direction: "画面収録：HTMLダッシュボード表示", content: "抽出した課題を<strong>HTMLダッシュボード</strong>に成形してもらいます。<strong>課題別の議事録リンク・関連プロジェクト・優先度スコア</strong>が並んだ一枚が出来上がります。「この課題は3つの会議で繰り返し議論されている」といった<strong>パターンが視覚的に掴める経営課題マップ</strong>になります。<strong>課題間の連鎖関係</strong>——たとえば燃油費上昇が機材更新を促し、機材更新がWi-Fi搭載も解決するといった繋がりも一目で分かります。", reference: "" },
      { start: "4:30", end: "5:00", topic: "クロージング", direction: "スライド：表紙", content: "同じ仕組みで<strong>社内FAQの更新や週報作成</strong>など、Notionに蓄積された情報の再構成に広く応用できます。Slack＋Notionが揃えば<strong>「流れ」と「記憶」の両方</strong>にClaudeが手を伸ばせます。次の動画ではFigma MCPを扱います。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S3-V5": {
    meta: {
      duration: "約7分20秒",
      mode: "画面収録（Figma＋Claude Code＋ブラウザ。スライドは表紙のみ）",
      goal: "Figma公式プラグインをOAuth認証で接続し、架空LP「ミゾリーチ」をClaudeがFigmaに新規作成→デザインデータからコードを自動生成しブラウザで動作確認できる。Figmaの価値を最大化する双方向MCP連携を体験する"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "画面収録", name: "プラグインインストール＋OAuth認証", purpose: "claude plugin install → /reload-plugins → authenticate → ブラウザOAuth承認", timing: "序盤" },
      { type: "画面収録", name: "whoami実行", purpose: "認証確認（アカウント名・Starter・View seat表示）", timing: "序盤" },
      { type: "画面収録", name: "create_new_file実行", purpose: "Figmaに新規デザインファイル作成", timing: "中盤" },
      { type: "画面収録", name: "use_figma実行", purpose: "ミゾリーチLP（6セクション）をPlugin APIで構築", timing: "中盤" },
      { type: "画面収録", name: "get_design_context実行", purpose: "デザインデータからReact+Tailwindコード＋スクリーンショット自動生成", timing: "中盤〜後半" },
      { type: "画面収録", name: "ブラウザ動作確認", purpose: "生成HTMLをブラウザで開きダーク×ゴールド配色・レスポンシブ確認", timing: "後半の動作確認" },
      { type: "Figmaファイル", name: "ミゾリーチLP", purpose: "PoC生成済みデザイン（ダーク×ゴールド配色・6セクション）", timing: "中盤" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではデザイナー・フロントエンドエンジニア・PMの方に向けて、<strong>Figma MCPでデザインとコードを双方向につなぐ方法</strong>をお伝えします。S3最終回です。", reference: "" },
      { start: "0:20", end: "1:10", topic: "なぜ扱うか", direction: "スライド：表紙", content: "デザインをコードに落とし込むとき、スクショを渡して「これっぽく作って」と頼む方法があります。スクショ経由だとAIは見た目を推測するしかなく、精度に限界があります。<strong>Figma MCPは、ノード構造・色・フォント・Auto Layoutの構造化データをClaudeが直接読み取ります</strong>。精度が段違いです。Figmaをなくすのではなく、<strong>Figmaの価値を最大化する道具</strong>——デザイン資産がそのままコードに変わり、設計と実装の往復コストが格段に減ります。", reference: "" },
      { start: "1:10", end: "2:10", topic: "プラグインインストール＋OAuth認証", direction: "画面収録：ターミナルでプラグインインストール→ブラウザOAuth", content: "Figma MCPの接続から始めます。<code>claude plugin install figma@claude-plugins-official</code>でClaude公式プラグインをインストールし、<code>/reload-plugins</code>でプラグインを読み込みます。続けて<code>authenticate</code>を実行するとブラウザが開き、FigmaのOAuth認証画面が表示されます。「許可」を押せば接続完了です。<code>whoami</code>で確認すると、アカウント名・プラン（Starter）・seat種別（View）が返ってきます。<strong>Starter無料プラン</strong>でこのまま進めます。", reference: "" },
      { start: "2:10", end: "2:50", topic: "create_new_file＋双方向性", direction: "画面収録：create_new_file実行→Figmaで空ファイル確認", content: "ここからが驚きのポイントです。<code>create_new_file</code>を実行すると、<strong>ClaudeがFigmaに空のデザインファイルを新規作成しました</strong>。Figma MCPは読み取り専用ではなく、Claudeからデザインを書き込める双方向の接続です。ここからミゾリーチLP——ビズリーチ風の架空ハイクラス転職サービスを、Claudeに作ってもらいます。", reference: "" },
      { start: "2:50", end: "4:00", topic: "use_figmaでデザイン構築", direction: "画面収録：use_figma実行→Figmaでデザイン構築の進行を追う", content: "<code>use_figma</code>でPlugin APIのJavaScriptをClaudeが実行し、デザインを組み上げていきます。題材はミゾリーチ、<strong>ダーク×ゴールドのプレミアム配色</strong>です。Header、Heroセクション、Stats Bar、Features 3カード、Bottom CTA、Footer——<strong>6セクションが自動で構築</strong>されていく様子を追います。Auto Layout・フォント・色・ドロップシャドウまで、Claudeが1つずつ指定しながらFigma上にレイアウトを組んでいます。完全に白紙の状態から、LPのデザインが数分で出来上がりました。", reference: "" },
      { start: "4:00", end: "4:40", topic: "get_design_contextでコード生成", direction: "画面収録：get_design_context実行→React+Tailwindコード生成", content: "デザインが完成したら、読み取り側です。<code>get_design_context</code>にファイルキーとノードIDを渡すと、<strong>デザインデータからReact+Tailwindのコードとスクリーンショットが自動生成</strong>されます。Claudeが書いて、読んで、コードにする——この<strong>双方向の流れがFigma MCPの核心</strong>です。", reference: "" },
      { start: "4:40", end: "5:20", topic: "ブラウザ動作確認", direction: "画面収録：生成HTMLをブラウザで開く", content: "生成されたコードをブラウザで開きます。<strong>ダーク×ゴールドの配色、Heroセクションのレイアウト、Features 3カードの並び</strong>——Figmaで構築したデザインがそのままHTMLに再現されています。構造化データから生成しているので、スクショベースの推測とは仕上がりの精度が違うことが見て取れます。", reference: "" },
      { start: "5:20", end: "6:00", topic: "Starter制限と本格運用", direction: "画面収録：スライド表紙に戻す", content: "実用面を補足します。<strong>今回はStarter無料プランで完走しました</strong>が、ツールコールは月6回の制限があります。日常的にデザインワークフローに組み込むなら<strong>Proプランを推奨します</strong>。デザインシステムが整っていればMCPの精度はさらに上がりますが、今回のようにゼロからでも完走できる、という事実も押さえておいてください。", reference: "" },
      { start: "6:00", end: "6:40", topic: "人間の判断が必要な場面", direction: "スライド：表紙", content: "Figma MCPが入っても、<strong>人間の判断が必要な場面はなくなりません</strong>。デザインガイドラインの解釈、例外的レイアウトの扱い、ブランド判断——こうした構造データに載らない判断は人間の領域です。MCPは<strong>機械的な変換を肩代わりすることで、本来の判断に時間を使えるようにする</strong>道具、という位置付けです。", reference: "" },
      { start: "6:40", end: "7:20", topic: "クロージング", direction: "スライド：表紙", content: "Skills、Slack、Notion、そしてFigma——<strong>S3で扱ったMCPの世界が、手順パッケージから社内コミュニケーション、組織の記憶、設計・実装の領域まで広がりました</strong>。AIが組織のあらゆる場所に入る世界観がここに完成しました。次のセクションでは業務効率化の実践に進みます。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S4-V1": {
    meta: {
      duration: "約8分",
      mode: "画面収録（エディタ＋Claude Codeターミナル＋ブラウザ）",
      goal: "人事・研修担当者が現場職向けeラーニングシステムのガワ（階層メニュー＋受講ダッシュボード）を最低限のスペック駆動開発で10分で組み上げられるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "課題設定", purpose: "ホテル業界の新人教育課題を1枚で示す", timing: "序盤" },
      { type: "サンプルデータ", name: "demos/hotel-cleaning-lms/spec.md", purpose: "対話で書き起こす仕様書（3カテゴリ×3教材・4画面・ダミー進捗フラグ）", timing: "中盤" },
      { type: "画面収録", name: "Claude Codeとの対話", purpose: "spec.md書き起こし→実装依頼", timing: "中盤" },
      { type: "出力成果物", name: "demos/hotel-cleaning-lms/index.html", purpose: "受講者ポータル＋受講ダッシュボード", timing: "後半の動作確認" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では人事・研修担当の方に向けて、<strong>現場職向けの社内eラーニングシステム</strong>をClaude Codeで自作していきます。題材は架空ホテル『シーサイドホテル』の清掃スタッフ育成LMS、10分で動くガワを一緒に組み上げます。", reference: "" },
      { start: "0:25", end: "1:25", topic: "なぜ扱うか", direction: "スライド：課題設定", content: "宿泊業やサービス業の現場は、<strong>外国人スタッフの増加・OJT負担の集中・高い離職率</strong>といった課題を抱えているケースが多いと思います。「せっかく教えた人が辞めて、また一から教え直し」という循環も珍しくありません。一方でeラーニングというと専用SaaSの契約が前提、というイメージをお持ちかもしれません。この動画では、<strong>最低限のスペック駆動開発でHTML1枚の受講者ポータルを自作する</strong>方法をお伝えします。自社の教材タイトルと受講者名を入れ替えるだけで自部署に持ち込める、そんな作り方です。", reference: "" },
      { start: "1:20", end: "1:50", topic: "アウトプット像", direction: "画面収録：完成index.htmlを30秒早送りで試写", content: "まず今日のゴールを先にお見せします。完成した<code>index.html</code>はこのような形です。<strong>3カテゴリ×3教材、受講ダッシュボードまで含めて1枚のHTMLに収まっている</strong>のがポイントです。このガワを10分で作る、という目標で進めていきます。", reference: "demos/hotel-cleaning-lms/index.html" },
      { start: "1:50", end: "2:25", topic: "コンテンツ構造の図解", direction: "画面収録：コンテンツ構造を図示", content: "題材の中身を整理します。カテゴリは<strong>客室清掃・浴場清掃・共用部清掃の3つ</strong>、各カテゴリに教材が3本、合計9教材という構造です。受講者は田中さん・山田さん・グエンさんの架空3名で、<strong>実在ホテル名・実在スタッフ名は一切使わない</strong>方針で進めます。", reference: "" },
      { start: "2:25", end: "3:05", topic: "最低限のスペック駆動の導入", direction: "画面収録：エディタに切り替え", content: "ここでのスペック駆動は、前のセクションで扱った仕様書作りを<strong>最小構成で適用する</strong>形で進めます。書き込むのは<strong>階層構造・画面数・ダミーデータの3点だけ</strong>、他は思い切って載せません。仕様書は数行で済みます。", reference: "" },
      { start: "3:05", end: "4:10", topic: "spec.mdの書き起こし", direction: "画面収録：ターミナルでディレクトリ作成→Claude Codeと対話", content: "<code>mkdir demos/hotel-cleaning-lms && cd demos/hotel-cleaning-lms</code>で作業ディレクトリを用意します。ここでClaude Codeと対話しながら<code>spec.md</code>を書き起こします。<strong>3カテゴリ×3教材の階層、トップ・カテゴリ・教材詳細・ダッシュボードの4画面、進捗フラグはダミーでハードコード</strong>——動画再生・ログイン認証・永続化は<strong>今回のスコープから外す</strong>ことも明記します。", reference: "demos/hotel-cleaning-lms/spec.md" },
      { start: "4:10", end: "5:00", topic: "実装→HTML操作", direction: "画面収録：spec.mdを渡して実装依頼→index.htmlをブラウザで開く", content: "<code>spec.md</code>をClaude Codeに渡して実装を依頼します。生成された<code>index.html</code>をブラウザで開き、<strong>トップの3カテゴリカード→カテゴリ画面の教材カード→教材詳細</strong>の順に操作します。YouTube風のサムネも並んで、階層メニューが仕様書通りに出ていることが見て取れます。", reference: "demos/hotel-cleaning-lms/index.html" },
      { start: "5:00", end: "5:40", topic: "受講ダッシュボード", direction: "画面収録：ダッシュボード画面に切り替え", content: "ダッシュボードでは<strong>田中・山田・グエンの3名×9教材のマトリクス</strong>が1画面で出ます。受講済みと未受講が配色で区別され、<strong>誰がどこで止まっているかが一目で分かる</strong>、という人事側の価値がここに現れます。", reference: "" },
      { start: "5:40", end: "6:10", topic: "スコープの割り切り", direction: "画面収録：サムネをクリックして動かないことを見せる", content: "ここで<strong>スコープの割り切りを正直に伝えておきます</strong>。動画再生はサムネ表示のみ、ログイン認証はなし、進捗フラグはハードコード、の3点です。これは<strong>仕様書に書いた通り、載せないと決めた</strong>部分、という位置付けです。", reference: "" },
      { start: "6:10", end: "6:40", topic: "Vibe Codingとの対比", direction: "画面収録：スライド表紙に戻す", content: "仕様書を書かずにVibe Codingで進めた場合と短く比較しておきます。<strong>階層もダミーデータも狙い通りが出にくくなる</strong>、というのが実際です。コンテキスト量の差、と整理しておくのが中立的で、優劣の話ではありません。", reference: "" },
      { start: "6:40", end: "8:00", topic: "クロージング・次セクションへの布石", direction: "スライド：表紙", content: "この動画では、<strong>最低限のスペック駆動で10分のガワ</strong>が手に入る体験をしていただきました。自社の教材タイトルと受講者名を入れ替えるだけで自部署に持ち込める状態です。一方で<strong>多拠点展開や複数人同時更新まで進めたくなった段階では、バックエンドとデータベースが必要</strong>になります。これはアプリ開発のセクションで扱います。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S4-V2": {
    meta: {
      duration: "約8分10秒",
      mode: "画面収録（エディタ＋Claude Codeターミナル＋ブラウザ。スライドは表紙・データポリシー・クロージングの3枚）",
      goal: "バックオフィス担当者が、タイムカードExcelと勤怠申請Excelの突合をClaude Codeで自動化し、HTMLチェックレポートを数分で受け取れるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "Anthropicデータポリシー要約", purpose: "個人情報配慮の冒頭シーンで使用（約60秒の軽量版）", timing: "序盤" },
      { type: "サンプルデータ", name: "demos/kintai-check/timecard.xlsx", purpose: "タイムカード10名×1ヶ月分、架空データ", timing: "中盤" },
      { type: "サンプルデータ", name: "demos/kintai-check/applications.xlsx", purpose: "勤怠申請10件（有給5・残業3・休日出勤2）", timing: "中盤" },
      { type: "画面収録", name: "Claude Codeでの突合", purpose: "対話依頼→両Excel読み取り→HTMLレポート生成", timing: "中盤〜後半" },
      { type: "出力成果物", name: "demos/kintai-check/output/check-report.html", purpose: "承認可8件・要確認2件＋申請漏れ疑い1件の仕分けと差分根拠を載せたレポート（PoC実走済）", timing: "後半の動作確認" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では経理・人事・総務のバックオフィス担当の方に向けて、<strong>勤怠申請の突合チェックをClaude Codeで自動化する</strong>方法をお伝えします。題材は月100件超の勤怠突合、AI一次チェックと人間最終判定のハイブリッド運用です。", reference: "" },
      { start: "0:25", end: "1:25", topic: "なぜ扱うか", direction: "スライド：表紙", content: "バックオフィスの現場は、<strong>有給・残業・休日出勤の申請処理が毎月100件超</strong>、というケースも珍しくありません。1件5分の目視突合で合計500分、月次で丸1日以上が消えていきます。一方で100%自動化は現実的ではなく、<strong>80%をAIで自動仕分け、残り20%を人間が最終判定する</strong>ハイブリッドが現実解です。500分を30分に圧縮する感覚を、この動画で体得していただきます。", reference: "" },
      { start: "1:25", end: "2:25", topic: "個人情報配慮（軽量版）", direction: "スライド：Anthropicデータポリシー", content: "実演に入る前に、<strong>個人情報の扱い</strong>を先に固めます。まず<strong>Anthropicのデータポリシー</strong>：API経由のデータは学習に使われない、という前提を押さえます。次に<strong>利用目的を社内ポリシーと整合させて通知</strong>、勤怠突合目的に限定する形です。今回の題材は氏名と時刻のみで、<strong>マイナンバー・住所・生年月日は題材から除外</strong>しています。入口条件を軽く揃えて、すぐ実演に入ります。", reference: "" },
      { start: "2:25", end: "3:10", topic: "題材フォルダ", direction: "画面収録：demos/kintai-check/をエディタで開く", content: "題材フォルダを開きます。<code>demos/kintai-check/</code>配下に2つのExcelがあります。<code>timecard.xlsx</code>が<strong>タイムカード10名分・1ヶ月分の出退勤記録</strong>、<code>applications.xlsx</code>が<strong>勤怠申請10件、有給5件・残業3件・休日出勤2件</strong>の内訳です。登場人物は<strong>田中太郎さん・山田花子さん・グエン・ティ・ハンさん</strong>を含む架空10名、前の動画と揃えた架空データです。", reference: "demos/kintai-check/" },
      { start: "3:10", end: "3:40", topic: "対話依頼", direction: "画面収録：Claude Codeのプロンプト欄", content: "Claude Codeに依頼します。<strong>「このフォルダのタイムカードと勤怠申請を突合し、不整合があれば時間差・日付差・重複を具体的に挙げてHTMLレポートにまとめてください」</strong>——自然な日本語でそのまま伝える形です。", reference: "" },
      { start: "3:40", end: "4:10", topic: "読み取り進捗", direction: "画面収録：Claude Codeの処理ログ", content: "Claude Codeが両Excelを読み、<strong>日付・時刻・申請種別</strong>を抽出していく進捗をログで追います。<strong>構造化されたExcelなので読み取りは安定</strong>していて、数秒で突合判定に進みます。", reference: "" },
      { start: "4:10", end: "5:20", topic: "HTMLレポート確認", direction: "画面収録：生成HTMLをブラウザで開く", content: "生成されたHTMLレポートをブラウザで開きます。<strong>✅承認可が8件、⚠️要確認が2件</strong>で仕分けされ、<strong>別枠で申請漏れ疑いが1件</strong>、打刻側からも自動で拾われています。要確認の行には差分根拠が並んでいて、<strong>「有給申請日に出勤打刻あり（田中太郎さん3/10、9:00-18:00の実打刻）」「残業2時間申請 vs 実打刻30分超過（山田花子さん3/12、差90分）」</strong>、申請漏れは<strong>「土曜日に申請なしで9:00-14:00の打刻あり（渡辺さくらさん3/14）」</strong>のように、時間・日付・有無がセットで示されます。<strong>差分の出し方が具体的だから、人間側の最終判定が短時間で済む</strong>、という設計です。", reference: "demos/kintai-check/output/check-report.html" },
      { start: "5:20", end: "5:50", topic: "バックオフィス2大柱", direction: "画面収録：スライド表紙に戻す", content: "前のセクションで扱った<strong>Skills Creatorによる月次レポート自動化</strong>と、この動画の<strong>日次の申請処理自動化</strong>を組み合わせると、バックオフィスの業務が<strong>月次集約と日次申請処理の両側から挟み撃ち</strong>になります。属人化と目視地獄の両方が、AIで解けていく絵です。", reference: "" },
      { start: "5:50", end: "6:30", topic: "100%自動化は幻想", direction: "画面収録：スライド表紙のまま", content: "中立化のメッセージを1つ置いておきます。<strong>100%自動化は幻想、80%自動化が現実解</strong>です。AIが担うのは<strong>除外とフラグ立て、最終承認印は人が押す</strong>——迷惑メールフィルタと同じ発想で運用するのがしっくりきます。月100件×5分の500分が、<strong>要確認数件×6分で30分</strong>に圧縮される、という時間の姿に変わります。", reference: "" },
      { start: "6:30", end: "8:10", topic: "アプリ化との棲み分け・クロージング", direction: "スライド：クロージング", content: "最後に対話ツール完結型と業務アプリ化の<strong>棲み分け</strong>を明示して閉じます。<strong>月100件までなら対話ツール一人完結で十分に回せる規模感</strong>です。一方で<strong>ワークフロー承認・監査ログ・複数ユーザーの同時運用</strong>まで踏み込む段階からはWebアプリ化の番、という境界があります。勤怠突合も規模が大きくなるほど社内システム化の方が自然、というのが順当な発展です。アプリ化はこのあとのセクションで扱います。今日の感覚をまとめておくと、<strong>AIは除外とフラグ立てを引き受け、最終承認印は人が押す</strong>——役割分担を崩さない運用こそが、現場で長く使える自動化の基本形です。個人情報配慮を軽く保ったまま、現実的なところから着実に進めていきましょう。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S4-V3": {
    meta: {
      duration: "約8分30秒",
      mode: "画面収録（Claude Codeターミナル＋ブラウザ。スライドは表紙のみ）",
      goal: "架空スタートアップ『スタートアップ.inc』の1週間分のSlack全チャネルとNotion経営会議議事録DBを複合MCPで横断集約し、CEO向け週次サマリーHTMLを自動生成できるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "画面収録", name: "mcp.json設定", purpose: "Slack MCPとNotion MCPの同時登録", timing: "中盤" },
      { type: "画面収録", name: "/mcp確認", purpose: "両サーバーが緑色であることを確認", timing: "中盤" },
      { type: "画面収録", name: "複合プロンプト実行", purpose: "Slack全チャネル＋Notion経営会議議事録DBを統合する依頼", timing: "中盤" },
      { type: "画面収録", name: "ツール自律呼び分け", purpose: "slack_search_messagesとnotion_query_databaseが順次呼ばれる様子", timing: "中盤〜後半" },
      { type: "出力成果物", name: "週次サマリーHTML（4層構造）", purpose: "顧客対応動向→社内進捗→経営方針→示唆の構造で出力", timing: "後半の動作確認" },
      { type: "画面収録", name: "比較デモ", purpose: "明示指示なしで走らせた場合の偏りを短く提示", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では経営者・事業部長・中間管理層の方に向けて、<strong>Slack MCPとNotion MCPを同時に動かし、CEO向け週次サマリーを自動生成する</strong>方法をお伝えします。個別MCPから複合MCPへ、点から線・面への質的転換を実演で体感していただきます。", reference: "" },
      { start: "0:20", end: "1:20", topic: "月曜朝7時の描写", direction: "スライド：表紙", content: "経営層や事業責任者の方は、<strong>月曜朝にコーヒーを片手に「先週は何が起きたのか」を掴みたい</strong>場面が多いと思います。一方でSlackをチャネル横断でスクロールし、Notionの議事録を探し、頭の中で時系列に並べ直す作業は現実には厳しいものです。この動画でお伝えする価値は2軸です。経営層にとっては<strong>有能な秘書が先週の全体像を月曜朝に用意してくれる</strong>、中間管理層やメンバーにとっては<strong>週次報告資料作成の繰り返しから解放される</strong>——経営者と現場の両方が得する構図で整理していきます。", reference: "" },
      { start: "1:20", end: "2:00", topic: "点→線・面への対比", direction: "スライド：表紙", content: "前のセクションでは、Slack単体とNotion単体の扱い方を別々にお伝えしました。この動画では、<strong>Slack MCPとNotion MCPを同時に起動し、LLMが自律的にツールを呼び分ける</strong>複合MCPの世界に踏み込みます。1つの情報源から複数の情報源へ、点から線・面への質的転換、という位置付けです。", reference: "" },
      { start: "2:00", end: "2:30", topic: "Skills vs 複合MCPの棲み分け", direction: "スライド：表紙", content: "前のセクションで扱った<strong>月次レポートのSkill化</strong>との棲み分けも整理しておきます。<strong>固定フローで月次を集約する場面はSkills、動的に週次リアルタイムで束ねる場面は複合MCP</strong>——扱う時間軸の違いで選ぶ、というのが使い分けの指針になります。", reference: "" },
      { start: "2:30", end: "3:00", topic: "題材紹介", direction: "画面収録：Slackチャネル一覧とNotion議事録DBを俯瞰", content: "題材は架空スタートアップ『<strong>スタートアップ.inc</strong>』、B2B SaaS・40名規模の設定です。Slackは<strong>#general・#sales・#cs-support・#sales-voice・#product-dev・#board-updates</strong>の6チャネル、Notionには経営会議議事録DBが1本。<strong>#cs-supportと#sales-voiceから顧客の声を拾う</strong>のが情報密度を決めるポイントです。", reference: "demos/startup-inc/" },
      { start: "3:00", end: "3:40", topic: "MCP同時登録", direction: "画面収録：~/.claude/mcp.jsonを編集", content: "事前準備として<code>~/.claude/mcp.json</code>にSlack MCPとNotion MCPの2本を同時登録します。<strong>Slack Bot Tokenはxoxbで始まるトークン、NotionはInternal Integration Token</strong>、いずれも前のセクションで通したトークンをそのまま流用します。", reference: "https://github.com/modelcontextprotocol/servers/tree/main/src/slack ／ https://github.com/makenotion/notion-mcp-server" },
      { start: "3:40", end: "4:10", topic: "/mcp確認", direction: "画面収録：/mcpで両サーバー緑色", content: "<code>/mcp</code>で確認すると、<strong>SlackとNotionの両サーバーが緑色</strong>で並びます。<strong>複数の秘書が同時に待機している</strong>状態、というのがここでの絵です。", reference: "" },
      { start: "4:10", end: "4:40", topic: "複合プロンプトの4要素", direction: "画面収録：プロンプト欄に入力開始", content: "複合プロンプトには勘所があります。<strong>情報源の指定・集約軸・出力構造・優先度</strong>の4要素を入れる、というテンプレートです。ここが抜けると指示が散って、出力が偏ります。", reference: "" },
      { start: "4:40", end: "5:40", topic: "プロンプト投下と自律呼び分け", direction: "画面収録：プロンプト送信→ツール呼び分けのログ", content: "プロンプトを投下します。<strong>「過去1週間のSlack全チャネルとNotion経営会議議事録DBを統合し、CEO向け週次サマリーHTMLを4層構造で、#cs-supportと#sales-voiceの顧客声を優先抽出してください」</strong>——これだけです。LLMは<code>slack_search_messages</code>と<code>notion_query_database</code>を<strong>自律的に呼び分けながら</strong>集約を進めていきます。", reference: "" },
      { start: "5:40", end: "6:40", topic: "4層構造HTML確認", direction: "画面収録：生成HTMLをブラウザで開く", content: "生成されたHTMLを開きます。<strong>顧客対応動向→社内進捗→経営方針→示唆</strong>の4層構造です。具体的には<strong>「『決済機能ほしい』5件」→「決済API連携提案準備」→「Q1新施策として承認」→「次週の焦点はQ1ロードマップ」</strong>——顧客の声から経営判断まで、1枚で連鎖が見える状態に整います。", reference: "" },
      { start: "6:40", end: "7:20", topic: "明示指示なしの比較デモ", direction: "画面収録：指示をぼかした同プロンプトを実行", content: "補助デモとして、<strong>優先度指定を抜いた同じプロンプト</strong>を短く走らせてみます。するとSlackだけに偏る、あるいはNotionだけを読む、といった挙動が出やすくなります。<strong>複合プロンプトの粒度設計が結果を決める</strong>、という感触をここで掴んでおきます。", reference: "" },
      { start: "7:20", end: "8:30", topic: "クロージング・次セクションへの布石", direction: "スライド：表紙", content: "この動画では、<strong>組織の意思決定スピードと現場の資料作成負担を同時に変える</strong>体験をしていただきました。今回束ねたのはSlackとNotionの2本ですが、<strong>営業ツール・財務データ・顧客DBも同じやり方で束ねれば、組織のあらゆる判断が高速化</strong>していきます。「複数入力を束ねて統合出力」という思考パターンは、次のアプリ開発セクションで扱うデータベース設計・非同期処理の基盤になります。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S4-V4": {
    meta: {
      duration: "約9分30秒",
      mode: "画面収録（Claude Codeターミナル＋エディタ＋ブラウザ。スライドは表紙と5工程フロー図の2枚）",
      goal: "SEO記事制作フローを5工程に分割し、工程間をMarkdownファイルで疎結合につなぐ設計で、YMYL高額商材でも再現性高く高品質記事を生成できるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "5工程フロー図", purpose: "競合分析→ユーザーニーズ→構成→本文→メタの流れを1枚で示す", timing: "中盤" },
      { type: "画面収録", name: "競合分析工程", purpose: "WebSearchで上位10記事を取得→比較表に整理", timing: "中盤" },
      { type: "画面収録", name: "ユーザーニーズ分析工程", purpose: "比較表からギャップとターゲットニーズを深掘り", timing: "中盤" },
      { type: "画面収録", name: "構成案作成工程", purpose: "H2/H3の見出し体系を設計", timing: "中盤" },
      { type: "画面収録", name: "本文執筆工程", purpose: "セクション別に深掘り、2026年4月時点の前提付き", timing: "中盤" },
      { type: "画面収録", name: "メタ生成工程", purpose: "タイトル・ディスクリプション・OGPを生成", timing: "後半" },
      { type: "出力成果物", name: "demos/s4-v5/01〜05.md", purpose: "各工程の出力Markdown（疎結合の受け渡し物）", timing: "中盤〜後半" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画ではマーケ担当・オウンドメディア運営の方に向けて、<strong>SEO記事制作を5工程に分割してClaude Codeで高品質に生成する</strong>方法をお伝えします。題材はYMYL高額商材『屋上防水工事 費用相場』です。", reference: "" },
      { start: "0:20", end: "1:30", topic: "なぜ扱うか・コアメッセージ", direction: "スライド：表紙", content: "マーケ担当の方は、<strong>毎月「高品質なSEO記事」に追われている</strong>場面が多いと思います。テーマを決めてAIに一発依頼する手軽さは魅力ですが、<strong>YMYL領域では浅い記事では絶対に上位が取れない</strong>のが現実です。競合も豊富で、SEO投資も大きい。ここでコアメッセージを一度打っておきます。<strong>工程分割で80%の再現性を確保し、残り20%の監修・一次情報・現場写真は人間の役割</strong>——この20%こそGoogleが評価するE-E-A-Tの核です。", reference: "" },
      { start: "1:30", end: "2:00", topic: "E-E-A-T解説", direction: "スライド：表紙", content: "E-E-A-Tは<strong>Experience・Expertise・Authoritativeness・Trustworthiness＝経験・専門性・権威性・信頼性</strong>の略です。<strong>AI下書きと人間監修の組み合わせがこの要件を満たす現実解</strong>、と断言して通過します。「AI記事はペナルティ」という話への長い反論はしません。", reference: "" },
      { start: "2:00", end: "2:30", topic: "題材提示", direction: "画面収録：エディタで作業ディレクトリ準備", content: "題材は架空建設会社『<strong>○△建設</strong>』のオウンドメディア記事、キーワードは<strong>「屋上防水工事 費用相場」</strong>です。V2（申請書類チェック校閲）と同じ架空会社のマーケ部門、という連続設定で進めます。", reference: "demos/s4-v5/" },
      { start: "2:30", end: "3:30", topic: "第1工程：競合分析", direction: "画面収録：WebSearchで上位10記事取得→01.md保存", content: "最初の工程は<strong>競合分析</strong>です。Claude CodeのWebSearchで上位10記事を取得し、<strong>見出し構成・含まれるトピック・各記事の強み</strong>をMarkdown比較表に整理します。動画内の表示は<strong>「競合A社」「競合B社」</strong>で伏字、実在サービス名は出しません。結果を<code>01-competitor-analysis.md</code>に保存します。", reference: "demos/s4-v5/01-competitor-analysis.md" },
      { start: "3:30", end: "4:15", topic: "第2工程：ユーザーニーズ分析", direction: "画面収録：02.md生成", content: "次の工程は<strong>ユーザーニーズ分析</strong>です。比較表を読み込み、<strong>競合が見落としているギャップと、マンション・ビルオーナー・小規模リフォーム会社が本当に知りたいこと</strong>を深掘りします。<code>02-user-needs.md</code>に保存、という流れです。", reference: "demos/s4-v5/02-user-needs.md" },
      { start: "4:15", end: "5:00", topic: "第3工程：構成案作成", direction: "画面収録：03.md生成", content: "次は<strong>構成案作成</strong>、H2/H3の見出し体系を設計します。<strong>ウレタン・シート・FRP・アスファルトの4工法比較、費用内訳、業者選びチェックリスト</strong>を差別化見出しとして組み込む、という作り方です。<code>03-outline.md</code>に保存します。", reference: "demos/s4-v5/03-outline.md" },
      { start: "5:00", end: "6:00", topic: "第4工程：本文執筆", direction: "画面収録：04.md生成", content: "<strong>本文執筆</strong>の工程です。構成に沿ってセクション別に深掘りし、<code>04-body.md</code>に保存します。ここでの前提表記は<strong>「2026年4月時点の全国平均」「地域差あり」</strong>と撮影時点と対象範囲を明記しておきます。<strong>WebSearch・Claude・人間監修の三位一体</strong>で、一次情報の精度を担保する、というスタンスです。", reference: "demos/s4-v5/04-body.md" },
      { start: "6:00", end: "6:30", topic: "第5工程：メタ生成", direction: "画面収録：05.md生成", content: "最後は<strong>メタ生成</strong>です。タイトルタグ・メタディスクリプション・OGP設定を<code>05-meta.md</code>に保存します。これで5工程が出揃いました。", reference: "demos/s4-v5/05-meta.md" },
      { start: "6:30", end: "7:30", topic: "Markdownプレビュー・品質差確認", direction: "画面収録：最終記事をMarkdownプレビュー", content: "最終記事をMarkdownプレビューで確認します。<strong>5工程のファイル受け渡しで毎回同品質が再現される</strong>、という感触をここで言葉にしておきます。一発執筆のアウトプットとは、粒度と構造で明確な差が出ます。", reference: "" },
      { start: "7:30", end: "9:30", topic: "Skill化接続・コアメッセージ再打ち・クロージング", direction: "スライド：表紙", content: "最後にSkill化への接続です。<strong>前のセクションで扱ったSkills Creatorを使えば、この5工程を<code>/seo [キーワード]</code>という一発Skillに変換</strong>できます。別キーワードでも同じパイプラインが動く、という状態です。冒頭のコアメッセージをもう一度打っておきます——<strong>80%の再現性＋20%の人間監修</strong>、この20%こそE-E-A-Tの核で、AIと人間の役割分担の原則です。工程全体をパイプライン化する発想は、次のアプリ開発セクションでさらに深まります。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S5-V1": {
    meta: {
      duration: "約6分30秒",
      mode: "画面収録（ブラウザ＋Claude Codeターミナル）",
      goal: "GitHubアカウントを作成し、Claude Codeからリポジトリを作成・コミット・pushできるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "コミット／プッシュ／プル概念図", purpose: "GitHub三大操作の全体像を1枚で提示", timing: "序盤" },
      { type: "画面収録", name: "GitHubアカウント作成", purpose: "ブラウザでサインアップ→メール認証→初期設定", timing: "中盤" },
      { type: "画面収録", name: "gh auth login連携", purpose: "ターミナルからブラウザ認証フローを一気通貫で見せる", timing: "中盤" },
      { type: "画面収録", name: "Claude Codeでリポジトリ作成＆push", purpose: "gh repo createとcommit/pushをClaude Codeに依頼して自動実行", timing: "後半の動作確認" },
      { type: "出力成果物", name: "GitHubリポジトリ（my-first-repo）", purpose: "ブラウザから反映確認できるクラウド保管庫", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、これからClaude Codeでアプリ開発を始めたい方に向けて、<strong>GitHubのアカウント作成と初めてのリポジトリ作成</strong>をお伝えします。セクション全体の出発点となる回です。", reference: "" },
      { start: "0:20", end: "1:10", topic: "なぜ扱うか", direction: "スライド：表紙", content: "いきなり結論をお伝えします。<strong>SansanやSalesforceに月額何万円も払っているツール、実は自分で作れるとしたら</strong>——そんな体験をするのがこのセクションです。ただしいきなりアプリ作りには入らず、<strong>まずV1〜V3の3本で道具箱を整えます</strong>。V1がGitHub、V2がVercel、V3がSupabase、この3つのアカウントと使い方を先に押さえてしまえば、V4以降は実装に集中できます。今日はその1本目、<strong>コードを置いておく場所としてのGitHub</strong>を作ります。", reference: "" },
      { start: "1:10", end: "1:50", topic: "GitHubとは", direction: "スライド：表紙", content: "GitHubという名前は聞いたことがある方が多いと思います。一言で言うと<strong>「コードのクラウド保管庫」</strong>です。身近な例で言えば、<strong>Google Driveのコード版</strong>と考えていただくと近いです。自分のパソコンの中だけにコードを置いておくと、消えたら終わり、他の端末から見られない、という状態になります。クラウドに置けば<strong>どこからでもアクセスできて、履歴も残り、消えない</strong>——これがGitHubの価値です。", reference: "" },
      { start: "1:50", end: "2:30", topic: "コミット／プッシュ／プル", direction: "スライド：コミット／プッシュ／プル概念図", content: "GitHubで覚えてほしい操作は3つだけです。<strong>コミットは「保存ポイントを作る」</strong>、ゲームのセーブポイントのイメージです。<strong>プッシュは「クラウドに送る」</strong>、コミットしたものをGitHubにアップロードする動きです。<strong>プルは「クラウドから持ってくる」</strong>、逆方向の動きです。「Gitは難しい」という先入観をお持ちの方もいらっしゃると思いますが、<strong>Claude Codeが操作してくれるので、手元で覚えるコマンドはほぼ不要</strong>です。", reference: "" },
      { start: "2:30", end: "3:10", topic: "GitHubアカウント作成", direction: "画面収録：github.com/signup をブラウザで開く", content: "それでは実際に進めます。ブラウザで<code>github.com/signup</code>にアクセスして、メールアドレスとパスワードを入れていきます。無料プランで十分です。ユーザー名はあとから使うので、分かりやすい名前にしておきましょう。メール認証まで済ませると、アカウント作成完了です。", reference: "https://github.com/signup" },
      { start: "3:10", end: "3:50", topic: "gh auth loginでClaude Codeと連携", direction: "画面収録：ターミナルで gh auth login 実行", content: "次に、<strong>Claude CodeからGitHubを操作できるように連携します</strong>。ターミナルで<code>gh auth login</code>と打つと、ブラウザが立ち上がって認証画面が出ます。<strong>ブラウザ上で「Authorize」を押すだけ</strong>で、Claude Codeが今作ったGitHubアカウントを操作できる状態になります。この認証は1回やれば以降ずっと使えます。", reference: "https://cli.github.com/" },
      { start: "3:50", end: "4:40", topic: "Claude Codeでリポジトリ作成", direction: "画面収録：Claude Codeに依頼", content: "ここからはClaude Codeに依頼します。<strong>「<code>my-first-repo</code>という名前で、GitHubにプライベートリポジトリを作ってください」</strong>と自然な日本語で伝えるだけです。Claude Codeが<code>gh repo create</code>コマンドを実行して、リポジトリを作ってくれます。<strong>プライベートとパブリックの2種類</strong>がありますが、最初はプライベートで作っておけば、自分と招待した人しか見られないので安心です。", reference: "" },
      { start: "4:40", end: "5:20", topic: "ファイル作成＋コミット＆プッシュ", direction: "画面収録：Claude Codeにファイル作成と初コミットを依頼", content: "続けて依頼します。<strong>「<code>README.md</code>を作って、『はじめてのリポジトリです』と書いて、コミットしてプッシュしてください」</strong>——これだけです。Claude Codeが<code>git add</code>、<code>git commit</code>、<code>git push</code>まで自動で実行してくれます。手元で覚えるコマンドはほぼ不要、と最初にお伝えした通りです。実際の業務では、<strong>作業の区切りで毎回コミット</strong>するイメージで進めてください。", reference: "" },
      { start: "5:20", end: "5:55", topic: "GitHub画面で反映確認", direction: "画面収録：ブラウザでGitHubのリポジトリページを開く", content: "GitHubのサイトに戻って、今作ったリポジトリを開きます。<strong>README.mdが表示されて、コミット履歴も残っています</strong>。「クラウドに保存できた」という体感がここで得られます。スマホのブラウザからも同じURLで見られますので、あとで試してみてください。", reference: "" },
      { start: "5:55", end: "6:30", topic: "クロージング", direction: "スライド：表紙に戻す", content: "これで<strong>コードのクラウド保管庫</strong>が手に入りました。ただし、今の状態ではまだ<strong>Webで公開されているわけではありません</strong>。次のV2ではVercelというサービスを使って、このリポジトリを<strong>世界からアクセスできるWebサイト</strong>に変えていきます。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S5-V2": {
    meta: {
      duration: "約6分",
      mode: "画面収録（ブラウザ＋スマホ）",
      goal: "Vercelアカウントを作成し、GitHubリポジトリと連携して、Webページを世界に公開できるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "GitHub→Vercel連携図", purpose: "コード保管庫と公開サービスの役割分担を1枚で提示", timing: "序盤" },
      { type: "画面収録", name: "Vercelアカウント作成＋GitHub連携", purpose: "サインアップからGitHub連携承認まで", timing: "中盤" },
      { type: "画面収録", name: "リポジトリ選択＆デプロイ", purpose: "V1で作ったmy-first-repoを選んでデプロイ実行", timing: "中盤〜後半" },
      { type: "画面収録", name: "発行URLにスマホからアクセス", purpose: "公開URLをスマホで開いて世界公開の体感を得る", timing: "後半の動作確認" },
      { type: "出力成果物", name: "Vercel発行URL（xxx.vercel.app）", purpose: "誰でもアクセスできる公開Webページ", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、これからClaude Codeでアプリ開発を始めたい方に向けて、<strong>Vercelのアカウント作成と初めてのデプロイ</strong>をお伝えします。V1で作ったリポジトリを、世界に公開するところまで一気通貫で扱います。", reference: "" },
      { start: "0:20", end: "1:00", topic: "なぜ扱うか", direction: "スライド：表紙", content: "V1でGitHubにコードを置くことができました。一方で、<strong>今の状態では誰もWebブラウザで見られません</strong>。コードが保管庫に置かれているだけの状態です。ここから<strong>コードをWebサイトに変えて世界に公開する仕組み</strong>が必要になります。それを担ってくれるのが<strong>Vercel</strong>というサービスです。今日はこのVercelをGitHubと連携して、URLを1本発行するところまで進めます。", reference: "" },
      { start: "1:00", end: "1:45", topic: "Vercelとは", direction: "スライド：GitHub→Vercel連携図", content: "Vercelを一言で言うと<strong>「GitHubのコードを自動でWebサイトにしてくれるサービス」</strong>です。身近な例で言えば、<strong>noteやTumblrに記事を書くと公開URLができる</strong>、あの感覚に近いです。記事ではなくコードを置いておくと、その瞬間にWebサイトとして公開してくれる、という役割分担です。GitHubが<strong>コードの保管庫</strong>、Vercelが<strong>世界に公開する窓口</strong>、この2つがセットで動くイメージで進めてください。", reference: "" },
      { start: "1:45", end: "2:30", topic: "Vercelアカウント作成", direction: "画面収録：vercel.com でサインアップ", content: "それでは実際に進めます。ブラウザで<code>vercel.com</code>にアクセスして、<strong>「Sign Up」から「Continue with GitHub」</strong>を選びます。V1で作ったGitHubアカウントでそのままログインできるので、メールアドレスを別途入れる手間はありません。無料プランで、個人利用なら十分な容量があります。", reference: "https://vercel.com/" },
      { start: "2:30", end: "3:10", topic: "GitHub連携", direction: "画面収録：GitHub連携の承認画面", content: "サインアップの途中で、<strong>「Vercelにリポジトリへのアクセスを許可するか」</strong>という承認画面が出ます。ここで許可することで、GitHubに置いたコードをVercelが自動で取ってきてWebサイトにしてくれます。全リポジトリを許可するか、特定のリポジトリだけ許可するか選べますが、<strong>まずは特定のリポジトリだけ許可</strong>しておくと安心です。", reference: "" },
      { start: "3:10", end: "4:00", topic: "リポジトリ選択＆デプロイ", direction: "画面収録：Vercelダッシュボードで my-first-repo をImport", content: "Vercelの画面で<strong>「Import Project」</strong>を押します。連携したリポジトリの一覧が出てくるので、V1で作った<code>my-first-repo</code>を選びます。設定はそのまま、<strong>「Deploy」ボタン</strong>を押すだけです。ビルドとデプロイが走って、1〜2分後に完了画面が出ます。", reference: "" },
      { start: "4:00", end: "4:45", topic: "発行URLにアクセス", direction: "画面収録：xxx.vercel.app をブラウザで開く", content: "完了画面に<strong>発行されたURL</strong>が表示されます。<code>xxx.vercel.app</code>という形式のURLです。クリックするとブラウザで開いて、V1で作ったREADMEの内容がWebページとして表示されます。<strong>これでもう世界中どこからでもアクセスできる状態</strong>です。", reference: "" },
      { start: "4:45", end: "5:15", topic: "スマホからもアクセス確認", direction: "画面収録：スマホでURLを開く", content: "スマホのブラウザで同じURLを開いてみます。<strong>スマホからも同じページが開ける</strong>——ここで「世界に公開する」という感覚が本当に体感できると思います。友人や同僚にURLを送れば、その人もすぐに見られます。", reference: "" },
      { start: "5:15", end: "5:40", topic: "公開の不安を中立化", direction: "スライド：表紙", content: "「全世界に公開されるのが不安」と感じる方もいらっしゃると思います。ただ<strong>URLを教えなければ事実上誰もアクセスしません</strong>。検索エンジンにも基本的には拾われません。心配な場合は<strong>プライベート公開</strong>の設定もできます。いつでも非公開に戻せるので、まずは触ってみる姿勢で進めてください。", reference: "" },
      { start: "5:40", end: "6:00", topic: "クロージング", direction: "スライド：表紙に戻す", content: "これで<strong>道具が2つ揃いました</strong>。<strong>GitHub（保管庫）＋Vercel（公開窓口）</strong>、この組み合わせでコードを世界に出せるようになりました。次のV3ではデータベースの<strong>Supabase</strong>を先にセットアップしておき、V4から実際のアプリ作りに入ります。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S5-V3": {
    meta: {
      duration: "約6分",
      mode: "画面収録（ブラウザ）",
      goal: "Supabaseアカウントを作成し、プロジェクトを作ってAPIキーと管理画面の場所を把握できるようになる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "S5フロント／S6バックエンド全体像図", purpose: "今セクションのスコープとS6への接続を1枚で提示", timing: "序盤" },
      { type: "画面収録", name: "Supabaseアカウント作成", purpose: "サインアップからダッシュボード到達まで", timing: "中盤" },
      { type: "画面収録", name: "プロジェクト作成", purpose: "リージョン選択・パスワード設定の実演", timing: "中盤" },
      { type: "画面収録", name: "管理画面ツアー", purpose: "Table Editor／Authentication／API Docs／APIキー場所の把握", timing: "中盤〜後半" },
      { type: "出力成果物", name: "Supabaseプロジェクト（my-first-project）", purpose: "S6で接続して使う空のプロジェクト", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、これからClaude Codeでアプリ開発を始めたい方に向けて、<strong>Supabaseのアカウント作成とプロジェクト作成</strong>をお伝えします。V1・V2に続く、セットアップ3本目の締めくくりです。", reference: "" },
      { start: "0:20", end: "1:00", topic: "なぜ扱うか", direction: "スライド：表紙", content: "V1でGitHub、V2でVercelを揃えました。3つ目の道具、<strong>データベース（Supabase）</strong>もここで揃えておきます。S6で実際に接続して使いますので、そのときに慌てないよう<strong>今のうちにアカウントとプロジェクトだけ作っておく</strong>、というのが今日のゴールです。触ってみるだけの回ではありますが、<strong>データベースという概念に最初に触れる回</strong>でもあるので、全体像を押さえながら進めていきます。", reference: "" },
      { start: "1:00", end: "1:45", topic: "Supabaseとは", direction: "スライド：S5フロント／S6バックエンド全体像図", content: "Supabaseを一言で言うと<strong>「クラウドにあるExcelの表＋認証機能」</strong>です。身近な例で言えば、<strong>Googleスプレッドシートをアプリから読み書きできるようにしたイメージ</strong>が近いです。表にデータを貯めておいて、ログイン機能も付けられる——この2つがセットで手に入ります。本格的なデータベースサービスは触ったことがない方が多いと思いますが、<strong>概念はExcelとほぼ同じ</strong>なので、恐れる必要はありません。", reference: "" },
      { start: "1:45", end: "2:30", topic: "Supabaseアカウント作成", direction: "画面収録：supabase.com でサインアップ", content: "それでは進めます。ブラウザで<code>supabase.com</code>にアクセスして、<strong>「Start your project」からGitHubアカウントでサインアップ</strong>します。V1で作ったGitHubアカウントをそのまま使えるので、メールアドレスは別途いりません。ダッシュボード画面に到達すれば、ここからが本番です。", reference: "https://supabase.com/" },
      { start: "2:30", end: "3:20", topic: "プロジェクト作成", direction: "画面収録：New Projectで作成", content: "ダッシュボードで<strong>「New Project」</strong>を押します。プロジェクト名は<code>my-first-project</code>のような分かりやすい名前にしましょう。<strong>リージョンは「Tokyo（ap-northeast-1）」</strong>を選びます。日本から使うなら東京リージョンが一番早いです。データベース用のパスワードは<strong>自動生成で強いものを作って、パスワードマネージャーに保存</strong>しておきます。作成には1〜2分かかります。", reference: "" },
      { start: "3:20", end: "4:00", topic: "Table Editor", direction: "画面収録：左メニューのTable Editorを開く", content: "管理画面のツアーをしていきます。まず<strong>Table Editor</strong>、ここが「Excelの表」に相当する場所です。テーブル（表）を作って、列を定義して、データを入れる——このすべてがブラウザ上でできます。今日はまだ何も作りませんが、<strong>「ここに表が並ぶ」というイメージ</strong>だけ押さえておいてください。", reference: "" },
      { start: "4:00", end: "4:30", topic: "Authentication", direction: "画面収録：左メニューのAuthenticationを開く", content: "次に<strong>Authentication</strong>、ログイン機能を司る場所です。メールアドレス＋パスワード、Google、GitHubなど、<strong>あらゆるログイン方式がボタン1つで有効化</strong>できます。アプリの「ログイン画面」を作るのが、ここに来るだけで済むようになる、ということです。", reference: "" },
      { start: "4:30", end: "5:00", topic: "API Docs＋APIキーの場所", direction: "画面収録：API Docs画面とSettings→APIを順に開く", content: "<strong>API Docs</strong>は、作った表にアクセスするための使い方が自動生成されている場所です。そして<strong>Settings→API</strong>にある<strong>APIキー</strong>、これが重要です。<strong>アプリからSupabaseにアクセスするときの合言葉</strong>のようなものと考えてください。", reference: "" },
      { start: "5:00", end: "5:30", topic: "APIキーの扱いは今日ここまで", direction: "画面収録：APIキー画面のまま", content: "APIキーについて今日覚えてほしいことは1つだけ、<strong>「このキーは外に出してはいけない」</strong>ということです。GitHubに間違えてpushしてしまうと、誰でも自分のデータベースにアクセスできてしまいます。<strong>実際の扱い方は<code>.env</code>ファイルと環境変数を使う</strong>のですが、そこはS6で実際に接続するときに学びます。今日は「キーの存在と場所だけ確認」で十分です。", reference: "" },
      { start: "5:30", end: "6:00", topic: "クロージング", direction: "スライド：表紙に戻す", content: "これで<strong>道具3つ揃いました</strong>。<strong>GitHub（保管庫）＋Vercel（公開窓口）＋Supabase（データベース）</strong>、これでSaaSを作る準備が完全に整いました。次のV4から実際のアプリ作りに入ります。最初は<strong>名刺管理アプリ</strong>、Sansan風のツールをClaude Codeで作っていきます。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S5-V4": {
    meta: {
      duration: "約8分",
      mode: "画面収録（エディタ＋Claude Codeターミナル＋ブラウザ＋スマホ）",
      goal: "アプリ開発用CLAUDE.mdを整備し、スペック駆動で名刺管理アプリを実装、GitHubにpushしてVercelで公開するまでの全フローを1本で体験する"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "完成画面キャプチャ", purpose: "Sansan風の一覧＋詳細＋検索UIを提示", timing: "冒頭・クロージング" },
      { type: "サンプルデータ", name: "demo/s5v4/CLAUDE.md（アプリ開発用テンプレ）", purpose: "技術スタック・ディレクトリ構造・コーディング規約のテンプレ", timing: "序盤" },
      { type: "サンプルデータ", name: "demo/s5v4/spec.md", purpose: "名刺管理アプリの要件定義（CRUD・検索・ローカルストレージ）", timing: "中盤" },
      { type: "画面収録", name: "Claude Codeで実装＋ローカル動作確認", purpose: "CLAUDE.md→spec.md→実装→ブラウザ動作確認の一気通貫", timing: "中盤〜後半" },
      { type: "画面収録", name: "GitHub push＋Vercel自動デプロイ", purpose: "pushから本番URL発行までの自動化の確認", timing: "後半の動作確認" },
      { type: "出力成果物", name: "名刺管理アプリ（Vercel発行URL）", purpose: "スマホからもアクセスできるSaaS風Webアプリ", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、これからClaude Codeでアプリ開発を始めたい方に向けて、<strong>名刺管理アプリをSansan風に自作する</strong>方法をお伝えします。S5の核となる回、実際にSaaSを自分で作る体験の1本目です。", reference: "" },
      { start: "0:20", end: "1:10", topic: "なぜ扱うか", direction: "スライド：表紙", content: "今日のメッセージから先にお伝えします。<strong>「Sansanのような名刺管理SaaSに月額数千円払っている会社は多いです。一方で、Claude Codeとスペック駆動があれば、同等の機能を短時間で作れます」</strong>——これを今日体感していただきます。V1〜V3で道具は揃いましたので、今日は<strong>CLAUDE.md→スペック駆動→実装→push→デプロイ</strong>という一気通貫のフローを、ひとつ実際に回してみる回になります。この流れがV5・V6でも繰り返されるので、ここで手を動かして覚えることが、このあとの学びを楽にします。", reference: "" },
      { start: "1:10", end: "2:10", topic: "アプリ開発用CLAUDE.md", direction: "画面収録：demo/s5v4/CLAUDE.mdを開く", content: "まずは<strong>アプリ開発用のCLAUDE.md</strong>から整備します。CLAUDE.mdの書き方は以前の動画で<strong>基礎編</strong>をお伝えしましたが、アプリ開発はもう一段スケールが大きくなります。具体的には、<strong>技術スタック（HTML／CSS／JavaScript）・ディレクトリ構造（index.html、js/、css/）・コーディング規約（命名ルール・コメントの書き方）</strong>、この3つをCLAUDE.mdに書いておきます。こう書いておけば、Claude Codeが毎回同じルールで書いてくれます。", reference: "demo/s5v4/CLAUDE.md" },
      { start: "2:10", end: "3:00", topic: "スペック駆動をアプリ開発スケールへ", direction: "画面収録：demo/s5v4/spec.mdを開く", content: "次に<strong>スペック駆動開発</strong>、これも以前の動画で単一HTMLで体験していただいた内容ですが、<strong>アプリ開発スケールに拡張</strong>します。複数画面があるアプリは、要件を先にまとめておかないとClaude Codeが迷子になります。<code>spec.md</code>に<strong>名刺管理アプリの要件——一覧／詳細／検索／新規登録／編集／削除</strong>、いわゆるCRUD（クラッド）と呼ばれる4機能を書いておきます。ここで<strong>ローカルストレージ保存</strong>という前提も入れておきます。", reference: "demo/s5v4/spec.md" },
      { start: "3:00", end: "3:40", topic: "ローカルストレージの日常比喩", direction: "スライド：表紙", content: "<strong>ローカルストレージ</strong>という言葉を日常の感覚に変換しておきます。これは<strong>自分のブラウザの中だけに残るメモ</strong>、<strong>冷蔵庫に貼った付箋</strong>のようなイメージです。その家でしか見えません。一方、V3で作ったSupabaseのようなクラウドDBは、<strong>端末を超えて共有できる</strong>ので、会社全体で使えます。今日はまだSupabaseに繋がず、<strong>ローカルストレージだけで動くアプリ</strong>を作ります。S6でSupabaseに繋ぎ直して、本物のSaaSに昇格させます。", reference: "" },
      { start: "3:40", end: "4:50", topic: "Claude Codeに実装依頼", direction: "画面収録：Claude Codeで依頼→Planモード→実装", content: "ここからClaude Codeに依頼します。<strong>「CLAUDE.mdとspec.mdを読んで、名刺管理アプリを実装してください。データはローカルストレージに保存してください」</strong>——これだけです。Claude CodeはまずPlanモードで設計を出してくれます。ディレクトリ構造、画面構成、データの持ち方を承認して、実装に入ります。ここは少し時間がかかりますので、実際の業務では他の作業をしながら待っていただく形になります。", reference: "" },
      { start: "4:50", end: "5:40", topic: "ローカル動作確認", direction: "画面収録：ブラウザでindex.htmlを開く", content: "完成しました。ブラウザで<code>index.html</code>を開きます。<strong>名刺一覧画面、新規登録フォーム、詳細画面、検索バー</strong>——すべて揃っています。試しに名刺を数件登録してみます。<strong>登録した名刺が一覧に並び、検索バーで絞り込める</strong>ところまで動いています。見た目はSansan、機能もほぼ同等です。", reference: "" },
      { start: "5:40", end: "6:20", topic: "GitHub push", direction: "画面収録：Claude Codeにpushを依頼", content: "次にGitHubにpushします。Claude Codeに<strong>「新しいリポジトリを作って、このプロジェクトをpushしてください」</strong>と依頼するだけです。V1でお伝えした<code>gh repo create</code>、<code>git add</code>、<code>git commit</code>、<code>git push</code>を全部自動でやってくれます。", reference: "" },
      { start: "6:20", end: "7:00", topic: "Vercel自動デプロイ", direction: "画面収録：Vercelダッシュボードで自動デプロイ確認", content: "ここでVercelの画面を見てみます。V2でGitHubと連携しておいたので、<strong>pushした瞬間にVercelが自動でビルドとデプロイを開始</strong>します。1〜2分で完了画面が出て、<strong>発行URL</strong>が表示されます。これで名刺管理アプリが世界に公開されました。", reference: "" },
      { start: "7:00", end: "7:30", topic: "スマホからもアクセス確認", direction: "画面収録：スマホで発行URLを開く", content: "発行URLをスマホで開いてみます。<strong>スマホのブラウザからも名刺管理アプリが動きます</strong>。レスポンシブな見た目で、タッチ操作で新規登録も検索もできます。Sansanのスマホ版と見比べても、機能としてはかなり近い水準になっています。", reference: "" },
      { start: "7:30", end: "8:00", topic: "クロージング", direction: "スライド：表紙に戻す", content: "これで<strong>初めてのSaaS自作体験</strong>が完了しました。CLAUDE.md→スペック駆動→実装→push→デプロイ、この5ステップのフローを体で覚えていただけたと思います。<strong>違いはデータがローカル保存だけ、これはS6でSupabaseに繋いで解決します</strong>。次のV5は経費アプリ、同じフローを別ドメインで反復します。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S5-V5": {
    meta: {
      duration: "約6分30秒",
      mode: "画面収録（エディタ＋Claude Codeターミナル＋ブラウザ）",
      goal: "freee風の経費管理アプリを実装し、V4で学んだフロー（CLAUDE.md→スペック駆動→push→デプロイ）を別業務ドメインで反復して定着させる"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "完成画面（月次集計グラフ含む）", purpose: "freee風の経費入力＋グラフダッシュボードを提示", timing: "冒頭・クロージング" },
      { type: "サンプルデータ", name: "demo/s5v5/CLAUDE.md", purpose: "V4のCLAUDE.mdを経費アプリ用にカスタマイズしたもの", timing: "序盤" },
      { type: "サンプルデータ", name: "demo/s5v5/spec.md", purpose: "経費アプリ要件（入力・カテゴリ・月次集計・画像アップロード）", timing: "序盤" },
      { type: "画面収録", name: "Claude Codeで実装＋動作確認", purpose: "グラフ描画＋画像アップロードの挙動確認", timing: "中盤〜後半" },
      { type: "画面収録", name: "GitHub push＋Vercel自動デプロイ", purpose: "反復により迷いなく回る様子", timing: "後半の動作確認" },
      { type: "出力成果物", name: "経費管理アプリ（Vercel発行URL）", purpose: "月次集計グラフ付きのSaaS風Webアプリ", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、これからClaude Codeでアプリ開発を始めたい方に向けて、<strong>freee風の経費管理アプリを自作する</strong>方法をお伝えします。V4で学んだフローを別ドメインで反復する、S5の2本目です。", reference: "" },
      { start: "0:20", end: "1:00", topic: "なぜ扱うか", direction: "スライド：表紙", content: "V4で名刺管理アプリを作りました。今日はfreee風の経費アプリを作ります。同じ題材を繰り返すのではなく、<strong>同じフロー（CLAUDE.md→スペック駆動→push→デプロイ）でまったく違うアプリが作れる</strong>、この再現性を体感するのが今日の目的です。さらに今日は、V4にはなかった<strong>グラフ描画と画像アップロード</strong>という要素も自然に組み込みます。「2回目だから楽になる」を体で感じていただく回です。", reference: "" },
      { start: "1:00", end: "1:40", topic: "経費アプリ用のCLAUDE.mdとspec.md", direction: "画面収録：demo/s5v5/のCLAUDE.mdとspec.mdを開く", content: "V4で作ったCLAUDE.mdをコピーして、経費アプリ用にカスタマイズします。技術スタックとディレクトリ構造はV4とほぼ同じ、<strong>コーディング規約の部分だけ経費データ用に少し書き換える</strong>、という程度で済みます。<code>spec.md</code>には経費アプリの要件を書いておきます。<strong>経費入力・カテゴリ分類・月次集計グラフ・レシート画像アップロード</strong>、この4つがメイン要件です。", reference: "demo/s5v5/CLAUDE.md／demo/s5v5/spec.md" },
      { start: "1:40", end: "2:20", topic: "新要素の予告", direction: "画面収録：spec.mdの該当箇所を強調", content: "V4になかった要素を先に整理しておきます。1つ目は<strong>カテゴリ分類</strong>、ドロップダウンで複数選択できる形です。2つ目は<strong>月次集計グラフ</strong>、Chart.jsのようなグラフライブラリで棒グラフを描きます。3つ目は<strong>レシート画像のアップロード</strong>、ブラウザのローカルストレージに画像を保存します。どれも難しそうに聞こえますが、<strong>Claude Codeが適切なライブラリを選んで組み込んでくれる</strong>ので、こちらからの指示は一言で済みます。", reference: "" },
      { start: "2:20", end: "3:20", topic: "Claude Codeに実装依頼", direction: "画面収録：Claude Codeで依頼→Planモード→実装", content: "Claude Codeに依頼します。<strong>「CLAUDE.mdとspec.mdを読んで、経費管理アプリを実装してください。月次集計は棒グラフで見せてください」</strong>——これだけです。<strong>グラフの実装方法は細かく指示しません</strong>、「棒グラフで」と伝えるだけで、Claude Codeが<strong>Chart.js</strong>のような適切なライブラリを選んで組み込みます。これが「2回目の楽さ」の正体です。", reference: "" },
      { start: "3:20", end: "4:10", topic: "グラフ描画＋画像アップロード確認", direction: "画面収録：ブラウザで経費を数件入力→グラフ描画→レシート画像アップロード", content: "完成しました。経費を数件入力してみます。<strong>入力画面からカテゴリをドロップダウンで選び、金額を入力、レシート画像を添付</strong>します。ダッシュボードに移ると<strong>月次集計の棒グラフ</strong>がきれいに描画されています。レシート画像も一覧から開いて確認できます。画像はローカルストレージに保存されているので、<strong>ブラウザを閉じても残っています</strong>。", reference: "" },
      { start: "4:10", end: "4:40", topic: "ローカルストレージの限界予告", direction: "画面収録：開発者ツールのApplication→Local Storageを開く", content: "ただし、<strong>画像をローカルストレージに貯めすぎると容量制限に引っかかります</strong>。ブラウザのローカルストレージは5MB〜10MB程度が上限です。レシート画像が数十枚になると厳しくなる、という限界があります。これを根本的に解決するのが<strong>S6で接続するSupabaseのストレージ機能</strong>です。今日はまだこの上限の中で動かしています。", reference: "" },
      { start: "4:40", end: "5:20", topic: "GitHub push＋Vercel自動デプロイ", direction: "画面収録：Claude Codeにpush依頼→Vercelダッシュボード", content: "GitHubにpushします。<strong>「新しいリポジトリを作ってpushしてください」</strong>、依頼は1行です。Vercelが自動でビルドを開始して、1〜2分で発行URLが出ます。V4で1回経験したフローなので、<strong>もう迷うことなく回る</strong>感覚があると思います。", reference: "" },
      { start: "5:20", end: "5:55", topic: "発行URLで動作確認", direction: "画面収録：発行URLをブラウザで開く", content: "発行URLを開きます。<strong>経費管理アプリがWebで動いています</strong>。ダッシュボードのグラフも、レシート画像のアップロードも、本番環境で同じように動きます。スマホからも開けます。これで2つ目のSaaS風アプリが世界に公開できました。", reference: "" },
      { start: "5:55", end: "6:30", topic: "クロージング", direction: "スライド：表紙に戻す", content: "V4・V5と同じフローで<strong>2つのアプリが作れました</strong>。CLAUDE.md→スペック駆動→push→デプロイ、この5ステップが体に馴染んできたと思います。<strong>次のV6は3つ目のSalesforce風CRM</strong>、ここまで作れれば、もう一人で好きなSaaSが作れる状態になります。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S5-V6": {
    meta: {
      duration: "約7分",
      mode: "画面収録（エディタ＋Claude Codeターミナル＋ブラウザ）",
      goal: "Salesforce風CRMを実装してV4・V5で学んだフローを3回目の反復で定着させ、『もう自分で好きなSaaSを作れる』という独り立ち感覚を得る"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "完成画面（パイプラインのカード形式）", purpose: "Salesforce風の商談ステータス管理UIを提示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "S5完成3アプリのサムネイル一覧", purpose: "名刺・経費・CRMの3アプリを1枚で俯瞰", timing: "クロージング直前" },
      { type: "サンプルデータ", name: "demo/s5v6/CLAUDE.md", purpose: "V4・V5のCLAUDE.mdをCRM用に調整したもの", timing: "序盤" },
      { type: "サンプルデータ", name: "demo/s5v6/spec.md", purpose: "CRM要件（顧客／商談／パイプライン／メモ）", timing: "序盤" },
      { type: "画面収録", name: "Claude Codeで実装＋パイプライン動作確認", purpose: "ドラッグで商談ステータスを動かす実演", timing: "中盤〜後半" },
      { type: "画面収録", name: "GitHub push＋Vercel自動デプロイ＋3アプリのブラウザツアー", purpose: "S5完成の達成感とS6への橋渡し", timing: "クロージング直前" },
      { type: "出力成果物", name: "CRM（Vercel発行URL）", purpose: "顧客・商談・パイプラインを管理できるSaaS風Webアプリ", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、これからClaude Codeでアプリ開発を始めたい方に向けて、<strong>Salesforce風のCRMを自作する</strong>方法をお伝えします。S5の総まとめの回です。", reference: "" },
      { start: "0:20", end: "1:10", topic: "なぜ扱うか", direction: "スライド：表紙", content: "V4で名刺、V5で経費を作りました。今日は3つ目の<strong>Salesforce風CRM</strong>を作ります。同じフローを3回繰り返すことで、<strong>「もう自分で好きなSaaSが作れる」という独り立ちの感覚</strong>を今日持ち帰っていただきます。今日はもうフローの説明はしません。「3回目、手が慣れている」という状態で、そのまま実装に入ります。3つのSaaS風アプリが完成した状態でS5を閉じる、というのが今日のマイルストーンです。", reference: "" },
      { start: "1:10", end: "2:00", topic: "CRM要件とCLAUDE.mdの準備", direction: "画面収録：demo/s5v6/のCLAUDE.mdとspec.mdを開く", content: "CLAUDE.mdはV5のものをコピーしてCRM用に書き換えます。<code>spec.md</code>のCRM要件はこうです。<strong>顧客一覧・商談管理・パイプラインステータス（見込み→提案→成約）・フォローアップメモ</strong>。CRM特有の要素として、<strong>顧客と商談の紐付け</strong>（1人の顧客に対して複数の商談がぶら下がる構造）、そして<strong>パイプラインのステータス遷移</strong>（カードを見込みから提案へ、提案から成約へと動かす操作）、この2つが入ります。", reference: "demo/s5v6/CLAUDE.md／demo/s5v6/spec.md" },
      { start: "2:00", end: "2:40", topic: "ドラッグ操作の予告", direction: "画面収録：spec.mdの該当箇所を強調", content: "一番の新要素は<strong>ドラッグでステータスを動かす操作</strong>です。Trelloのようなカード形式のボード画面で、商談カードを<strong>「見込み」から「提案」へ、「提案」から「成約」へ</strong>と動かせるようにします。難しそうに聞こえますが、<strong>「ドラッグで動かせるようにして」と一言伝えるだけ</strong>で、Claude Codeが適切な仕組みを選んで実装します。", reference: "" },
      { start: "2:40", end: "3:40", topic: "Claude Codeに実装依頼", direction: "画面収録：Claude Codeで依頼→Planモード→実装", content: "Claude Codeに依頼します。<strong>「CLAUDE.mdとspec.mdを読んで、CRMを実装してください。商談カードはドラッグでステータスを動かせるようにしてください」</strong>——これだけです。3回目なので、ここはもう<strong>お馴染みの待ち時間</strong>になっていると思います。", reference: "" },
      { start: "3:40", end: "4:30", topic: "パイプライン動作確認", direction: "画面収録：ブラウザでCRMを開く→商談カードをドラッグ", content: "完成しました。ブラウザで開きます。<strong>顧客一覧、商談のカード形式ボード、メモ機能</strong>、すべて揃っています。商談カードをクリックして<strong>ドラッグすると、「見込み」から「提案」へ動きます</strong>。「提案」から「成約」へもスムーズに動きます。顧客と商談の紐付けも、商談詳細から該当顧客に飛べます。", reference: "" },
      { start: "4:30", end: "5:00", topic: "GitHub push＋Vercel自動デプロイ", direction: "画面収録：push→Vercelダッシュボード→発行URL", content: "GitHubにpushします。Vercelが自動でビルド、発行URLが出ます。もう3回目なので、待っている間に次のスライドへ進めましょう。", reference: "" },
      { start: "5:00", end: "5:40", topic: "3アプリのブラウザツアー", direction: "画面収録：ブラウザの3タブでV4・V5・V6の完成品を並べる", content: "ここでS5の<strong>3つの完成品</strong>を並べてみます。<strong>V4の名刺管理アプリ、V5の経費管理アプリ、V6のCRM</strong>——ブラウザのタブに3つ並んでいます。<strong>これだけのSaaS風アプリをこの短時間で作りました</strong>。同じフロー（CLAUDE.md→スペック駆動→実装→push→デプロイ）が、3つの異なる業務ドメインでそれぞれ動いている、この再現性が今日のお土産です。", reference: "" },
      { start: "5:40", end: "6:20", topic: "ローカル完結の限界とS6への展望", direction: "スライド：S5完成3アプリのサムネイル一覧", content: "ただし、3つのアプリには<strong>1つ共通する制約</strong>があります。<strong>データが全部自分のブラウザの中だけに保存されている</strong>、ということです。他の端末からは見られませんし、チームメンバーと共有もできません。これを解決するのが<strong>S6で接続するSupabase</strong>です。S6でDBと認証を繋げば、<strong>3つのアプリがチームで使える実用レベルに昇格</strong>します。", reference: "" },
      { start: "6:20", end: "6:40", topic: "独り立ちメッセージ", direction: "スライド：表紙", content: "今日持ち帰ってほしい感覚は1つだけ、<strong>「もう自分で好きなSaaSを作れる」</strong>ということです。CLAUDE.mdとspec.mdを書いて、Claude Codeに依頼して、pushしてデプロイする——このフローさえ身につけば、<strong>どんなアプリでも同じ手順で作れます</strong>。これがS5のゴールです。", reference: "" },
      { start: "6:40", end: "7:00", topic: "クロージング", direction: "スライド：表紙に戻す", content: "次のS6では、今日の名刺管理アプリにデータベースを繋ぐところから始めます。<strong>ローカル完結のツールから、チームで使える本物のSaaSへ</strong>、質的な転換を一緒に体験しましょう。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S6-V1": {
    meta: {
      duration: "約7分",
      mode: "画面収録（Supabase管理画面＋エディタ＋Claude Codeターミナル＋ブラウザ＋スマホ＋Vercelダッシュボード）",
      goal: "前のセクションで作った名刺管理アプリのローカルストレージ保存をSupabase接続に置き換え、「ブラウザを閉じても別端末からも同じデータが見える」永続化を実装する。APIキーと.envの扱いもここで初めて実体験する"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "ローカル保存 vs クラウドDB 対比図", purpose: "冷蔵庫の付箋 vs 自宅ファイルのクラウド、用途の使い分けを1枚で整理", timing: "序盤" },
      { type: "スライド", name: "contactsテーブル設計図", purpose: "id/name/company/email/phone/created_at の6列を1枚で提示", timing: "序盤" },
      { type: "サンプルデータ", name: "demo/s6v1/schema.sql", purpose: "contactsテーブル定義（6列）", timing: "中盤" },
      { type: "サンプルデータ", name: "demo/s6v1/.env.example", purpose: "SUPABASE_URL/SUPABASE_ANON_KEY の2行テンプレ", timing: "中盤" },
      { type: "画面収録", name: "Supabase Table Editorでテーブル作成", purpose: "contactsテーブル作成→APIキー取得の実演", timing: "中盤" },
      { type: "画面収録", name: "Claude Codeにローカルストレージ置き換え依頼", purpose: "CRUD4操作が一度に置き換わる様子", timing: "中盤〜後半" },
      { type: "画面収録", name: "Vercel環境変数登録＋自動デプロイ＋スマホ確認", purpose: ".envとは別経路で本番に鍵を渡す流れ", timing: "後半の動作確認" },
      { type: "出力成果物", name: "名刺管理アプリ永続化版（Vercel発行URL）", purpose: "スマホからも同じデータが見える本物のSaaS", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、前のセクションで自作したSaaS風アプリを本物にしていきたい方に向けて、<strong>名刺管理アプリをクラウドDBに接続して永続化する</strong>方法をお伝えします。S6の起点、3つのアプリを順に永続化していく1本目です。", reference: "" },
      { start: "0:20", end: "1:15", topic: "なぜ扱うか", direction: "スライド：表紙", content: "前のセクションで3つのアプリを作りました。見た目は本物のSaaSでも、<strong>データは自分のブラウザの中だけ</strong>です。ブラウザを閉じるとスマホでは何も見えませんし、同僚とも共有できません。今日はその最後の壁を取り払います。<strong>名刺管理アプリにクラウドのデータベースを繋いで、「ブラウザを閉じても、別の端末でも、同じデータが見える」</strong>状態にします。前のセクションで「APIキーは環境変数で扱う」と布石を置いた話題も、今日実際のファイル操作として回収していきます。", reference: "" },
      { start: "1:15", end: "1:55", topic: "ローカル保存とクラウドDBの対比", direction: "スライド：ローカル保存 vs クラウドDB 対比図", content: "まずローカル保存とクラウドDBを1枚で整理しておきます。<strong>ローカルストレージは冷蔵庫に貼った付箋</strong>、その家でしか見えません。<strong>クラウドDBは自宅のファイルをクラウドに上げる感覚</strong>、どの端末からでも同じ中身が見えます。優劣ではなく用途の使い分けで、試作は付箋で十分、本物として使うならクラウド、という分け方になります。", reference: "" },
      { start: "1:55", end: "2:35", topic: "テーブル設計はExcelの列を決める感覚", direction: "スライド：contactsテーブル設計図", content: "次にテーブル設計です。ここは<strong>Excelの列を決める感覚</strong>で進められます。名刺アプリで既に入力している項目をそのまま列にするだけで、今回は<code>contacts</code>という1つのテーブルに<strong>id・name・company・email・phone・created_atの6列</strong>を用意します。アプリで扱っている項目を移すだけなので、設計で悩む必要はありません。", reference: "" },
      { start: "2:35", end: "3:15", topic: "Supabaseでテーブル作成", direction: "画面収録：Supabase管理画面のTable Editorでcontactsテーブル作成", content: "Supabaseの管理画面に入って、Table Editorで<code>contacts</code>テーブルを作ります。列を1つずつ追加しながら、<strong>name・company・email・phoneはテキスト型、created_atは日付型</strong>、idはデフォルトで自動採番が効く設定にしておきます。この画面操作は1〜2分で終わります。", reference: "demo/s6v1/schema.sql" },
      { start: "3:15", end: "4:05", topic: "APIキーと.envを用意する", direction: "画面収録：Settings→APIでURL/ANON KEYコピー→ローカルに.env新規作成→.gitignore確認", content: "続いてプロジェクトのSettings→APIから<strong>URL</strong>と<strong>ANON KEY</strong>をコピーします。ここで一言、この画面を動画で映しているのは説明のためで、<strong>撮影後にこのANON KEYは無効化します</strong>。ローカルに戻って<code>.env</code>というファイルを新規作成し、<code>SUPABASE_URL=</code>と<code>SUPABASE_ANON_KEY=</code>の2行を書きます。前のセクションでお伝えしたとおり、<strong>この1ファイルがすべての鍵</strong>ですので、<code>.gitignore</code>に<code>.env</code>が入っていることを必ず確認します。家の鍵をSNSに載せない感覚ですね。", reference: "demo/s6v1/.env.example" },
      { start: "4:05", end: "4:55", topic: "Claude Codeに置き換えを依頼", direction: "画面収録：npm install @supabase/supabase-js→Claude Codeに依頼→差分確認", content: "<code>npm install @supabase/supabase-js</code>でSDKを追加して、Claude Codeに依頼します。<strong>「ローカルストレージの読み書きをSupabaseに置き換えて」</strong>——これだけです。Claude CodeはCRUDの4操作（登録・一覧・編集・削除）を一度に書き換えてくれて、<strong>画面側のコードはほぼ触らない</strong>まま、データの取得先だけが入れ替わります。", reference: "" },
      { start: "4:55", end: "5:30", topic: "ローカル動作確認＋Table Editor確認", direction: "画面収録：ブラウザで名刺1件登録→Supabase Table Editorで行増加を確認", content: "ローカルで架空の名刺を1件登録してみます。画面に追加された直後に、Supabase管理画面のTable Editorを開くと、<strong>同じ行がクラウド側にも増えています</strong>。「ブラウザの外側にデータが出た」瞬間です。ここまで来れば、永続化の骨格は通ったと言えます。", reference: "" },
      { start: "5:30", end: "6:10", topic: "GitHub push＋Vercel環境変数登録", direction: "画面収録：git push→Vercelダッシュボードの環境変数画面でURL/KEY登録→自動デプロイ", content: "GitHubにpushします。ここで<strong>1つだけ追加の作業</strong>が必要です。<code>.env</code>はGitには上がらない設定ですので、<strong>本番環境には別経路で鍵を渡します</strong>。Vercelのダッシュボード→Settings→Environment Variablesで<strong>URLとANON KEYを同じように登録</strong>します。登録したらpushをトリガーに自動デプロイが走って、1〜2分で完了します。", reference: "" },
      { start: "6:10", end: "6:40", topic: "スマホから同じデータを確認", direction: "画面収録：発行URLをスマホで開く→PCで登録した名刺がそのまま見える", content: "発行URLをスマホで開きます。<strong>さっきPCで登録した名刺が、そのままスマホでも見えます</strong>。別の端末からも同じデータが見える——つまり「ブラウザを閉じても消えない、他の人とも共有できる」状態にたどり着きました。", reference: "" },
      { start: "6:40", end: "7:00", topic: "クロージング", direction: "スライド：表紙に戻す", content: "これで名刺アプリは<strong>ローカル試作からクラウド本物に昇格</strong>しました。同じ流れを次の経費アプリ、その次のCRMでも反復します。認証や権限管理はこの3本では扱わず、後半の回でまとめて整理します。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S6-V2": {
    meta: {
      duration: "約6分",
      mode: "画面収録（Supabase管理画面＋エディタ＋Claude Codeターミナル＋ブラウザ＋Vercelダッシュボード）",
      goal: "フロント完結の経費アプリにSupabaseを接続し、経費データを端末を超えて残せるようにする。2回目の反復で「APIキー取得→テーブル作成→CRUD実装」の永続化の型を体得する"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "本講座の永続化の型 整理図", purpose: "集計クエリ・画像ストレージとの位置関係を1枚で整理", timing: "中盤〜後半" },
      { type: "サンプルデータ", name: "demo/s6v2/schema.sql", purpose: "expensesテーブル定義（id/date/amount/category/memo/created_at）", timing: "序盤" },
      { type: "サンプルデータ", name: "demo/s6v2/.env.example", purpose: "SUPABASE_URL/SUPABASE_ANON_KEY のテンプレ", timing: "序盤" },
      { type: "画面収録", name: "Supabase管理画面でexpensesテーブル作成", purpose: "列ごとに型を選ぶ実演（数値型・日付型・文字列型）", timing: "序盤" },
      { type: "画面収録", name: "Claude Codeに置き換え依頼", purpose: "グラフ描画を残したままデータ取得先だけDBに差し替わる様子", timing: "中盤" },
      { type: "画面収録", name: "ブラウザで登録→閉じて開き直しで永続化体感", purpose: "「端末を超えて残る」の腹落ち", timing: "中盤〜後半" },
      { type: "画面収録", name: "Vercel環境変数登録＋自動デプロイ", purpose: "前の動画と同じ流儀で本番反映", timing: "後半の動作確認" },
      { type: "出力成果物", name: "経費管理アプリ永続化版（Vercel発行URL）", purpose: "端末を超えて経費が残る本物のアプリ", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、前のセクションで自作した経費アプリを本物にしていきたい方に向けて、<strong>経費アプリをクラウドDBに接続して永続化する</strong>方法をお伝えします。永続化シリーズの2本目、前の動画と同じ型を別ドメインで辿り直す回です。", reference: "" },
      { start: "0:20", end: "1:10", topic: "なぜ扱うか", direction: "スライド：表紙", content: "前の動画で名刺管理アプリを永続化しました。<strong>今日は同じ手順を経費アプリで辿り直します</strong>。2回目なので<strong>手が覚えにいくフェーズ</strong>、リズムを少し上げて進めます。メッセージは1つ、<strong>「1回目で型を学び、2回目で型を定着させる」</strong>。見終わる頃には、別ドメインのアプリでも同じ手順で接続できる自信を持ち帰っていただきます。", reference: "" },
      { start: "1:10", end: "1:40", topic: "今日の完成形プレビュー", direction: "画面収録：経費を登録→ブラウザを閉じる→開き直しても残っている", content: "先に今日の完成形を30秒で見せます。経費を登録して、<strong>ブラウザを閉じて開き直しても経費が残っている</strong>、別タブで同じURLを開いても同じデータが見える——この状態に今日到達します。", reference: "" },
      { start: "1:40", end: "2:30", topic: "expensesテーブル作成と型の選び方", direction: "画面収録：Supabase管理画面でexpensesテーブル作成", content: "Supabase側で<code>expenses</code>テーブルを作ります。列は<strong>id・date・amount・category・memo・created_at</strong>の6つ。ここで<strong>型の選び方</strong>を1行だけ添えます。<strong>金額は計算したくなるから数値型</strong>、<strong>日付は並び替えたくなるから日付型</strong>、カテゴリは文字列型、という基準で列ごとに型を選びます。この判断基準が身につくと、別のアプリでも迷わなくなります。", reference: "demo/s6v2/schema.sql" },
      { start: "2:30", end: "3:00", topic: ".envにAPIキーを貼る", direction: "画面収録：Settings→APIからURL/キーをコピー→.env更新", content: "APIキーを<code>.env</code>に貼ります。ここは前の動画と同じ流儀ですので<strong>手早く通します</strong>。URLとANON KEYの2行、これだけです。<code>.gitignore</code>に入っていることも同じくチェックします。", reference: "demo/s6v2/.env.example" },
      { start: "3:00", end: "3:50", topic: "Claude Codeに置き換え依頼", direction: "画面収録：Claude Codeに依頼→生成差分を確認", content: "Claude Codeに依頼します。<strong>「ローカルストレージ保存をSupabaseの<code>expenses</code>テーブルに置き換えて」</strong>——これだけです。生成された差分を見ると、前の動画と同じ箇所が同じ形で書き換わっています。<strong>フロント側のグラフ描画はそのまま残り、データ取得先だけDBに差し替わる</strong>構成です。", reference: "" },
      { start: "3:50", end: "4:40", topic: "永続化の体感", direction: "画面収録：ブラウザで架空の経費登録→Table Editor確認→ブラウザ閉じる→開き直し", content: "ブラウザで架空の経費を数件登録します。会議費・交通費・消耗品費、それぞれ日付と金額を入れていきます。Supabase管理画面で<strong>行が増えたことを確認</strong>して、<strong>ブラウザを一度閉じます</strong>。開き直すと、<strong>経費がそのまま残っています</strong>。別タブで同じURLを開いても同じデータが見えます。ここで「型が定着した」と言える状態です。", reference: "" },
      { start: "4:40", end: "5:15", topic: "集計クエリと画像ストレージの位置付け", direction: "スライド：本講座の永続化の型 整理図", content: "もう少し踏み込みたい方向けに、<strong>本講座ではどこまで扱うか</strong>を整理しておきます。Supabaseは集計クエリも組み合わせて実装できますが、<strong>本講座では永続化の骨格を揺るぎないものにする方を優先</strong>して、集計クエリには踏み込みません。レシート画像のクラウド保存も、Supabase Storageで実現できる選択肢ですが、同じ理由で次の機会に回します。<strong>今回は「データが端末を超えて残る」骨格を3回反復して完成させる</strong>、ここに集中します。", reference: "" },
      { start: "5:15", end: "5:45", topic: "Vercelデプロイ＋本番確認", direction: "画面収録：git push→Vercel環境変数登録→自動デプロイ→発行URLで確認", content: "GitHubにpushします。前の動画でVercel側にもURLとANON KEYを登録する流れをお伝えしましたので、<strong>このプロジェクトでも同じように環境変数を登録</strong>してから自動デプロイを待ちます。1〜2分で発行URLが出て、本番でも同じように経費が端末を超えて残ります。", reference: "" },
      { start: "5:45", end: "6:00", topic: "クロージング", direction: "スライド：表紙に戻す", content: "これで<strong>2つのアプリが端末を超えて残る</strong>ようになりました。次の動画では同じ型をCRMで3回目に辿ります。そこまで来れば永続化の型は自分の型になっています。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  },
  "S6-V3": {
    meta: {
      duration: "約7分",
      mode: "画面収録（Supabase管理画面＋エディタ＋Claude Codeターミナル＋ブラウザ＋スマホ＋Vercelダッシュボード）",
      goal: "前のセクションで作ったCRMにSupabaseを接続し、顧客データと商談ステータスをクラウドで永続化する。DB接続3回目の反復で「もう自分で好きなSaaSのDB接続ができる」という独り立ち感覚を確立する"
    },
    materials: [
      { type: "スライド", name: "表紙", purpose: "動画タイトル表示", timing: "冒頭・クロージング" },
      { type: "スライド", name: "S6前半3アプリ完成後の全体像図", purpose: "名刺・経費・CRMが永続化された状態を1枚で俯瞰", timing: "クロージング直前" },
      { type: "サンプルデータ", name: "demo/s6v3/schema.sql", purpose: "customersテーブル定義（7列）", timing: "序盤" },
      { type: "サンプルデータ", name: "demo/s6v3/.env.example", purpose: "SUPABASE_URL/SUPABASE_ANON_KEY のテンプレ", timing: "序盤" },
      { type: "画面収録", name: "Supabase管理画面でcustomersテーブル作成", purpose: "7カラム設計と「分けない」判断の言語化", timing: "序盤" },
      { type: "画面収録", name: "Claude Codeに置き換え依頼", purpose: "3回目で依頼文が要点だけで通じる様子", timing: "中盤" },
      { type: "画面収録", name: "顧客追加・パイプラインドラッグ・削除でCRUDを1周", purpose: "画面の見た目とDBの中身が同じことの2つの表現であることを実演", timing: "中盤〜後半" },
      { type: "画面収録", name: "名刺・経費・CRMの3タブ並べて永続化ツアー", purpose: "S6前半到達点の言語化", timing: "クロージング直前" },
      { type: "出力成果物", name: "CRM永続化版（Vercel発行URL）", purpose: "顧客・商談・パイプラインが端末を超えて残るSaaS風アプリ", timing: "クロージング直前" }
    ],
    script: [
      { start: "0:00", end: "0:25", topic: "オープニング", direction: "スライド：表紙", content: "この動画では、前のセクションで自作したCRMを本物にしていきたい方に向けて、<strong>CRMをクラウドDBに接続して永続化する</strong>方法をお伝えします。永続化シリーズの3本目、S6前半の総まとめです。", reference: "" },
      { start: "0:20", end: "1:15", topic: "なぜ扱うか", direction: "スライド：表紙", content: "前の2本で名刺と経費をクラウドに保存できるようにしました。残るは前のセクションの最後に作ったSalesforce風CRMです。<strong>3回目の今回はサクッと進めて、見終わる頃には「自分の普段使いのSaaSにもDB接続できる」</strong>という手応えを持ち帰っていただきます。自転車の乗り始めは補助輪付き、2回目で補助輪を外し、<strong>3回目でスイスイ走れる</strong>——この感覚を今日確立します。", reference: "" },
      { start: "1:15", end: "2:00", topic: "customersテーブル作成と設計判断", direction: "画面収録：Supabase管理画面でcustomersテーブル作成", content: "Supabase側で<code>customers</code>テーブルを作ります。列は<strong>id・name・company・status・last_contact・memo・created_at</strong>の7つ。ここで設計判断を1文で言い切ります。<strong>顧客と商談は分けません。パイプラインのステータスも<code>status</code>カラム1つで表現します</strong>。複数テーブルと外部キーを使う設計は実務では登場しますが、<strong>今回はシンプルにデータが残ることを優先</strong>します。必要になった段階で分ければいい、という判断です。", reference: "demo/s6v3/schema.sql" },
      { start: "2:00", end: "2:45", topic: "Claude Codeに依頼", direction: "画面収録：.env更新→Claude Codeに依頼→差分確認", content: "<code>.env</code>は前の2本と同じ流儀でAPIキーを貼ります。Claude Codeに依頼します。<strong>「ローカルストレージの読み書きを<code>customers</code>テーブルへのCRUDに置き換えて」</strong>——3回目なので<strong>依頼文も要点だけで通じる</strong>状態になっていると思います。差分が生成されるのを待ちます。", reference: "demo/s6v3/.env.example" },
      { start: "2:45", end: "3:20", topic: "顧客追加→Table Editor確認", direction: "画面収録：ブラウザで顧客1件追加→Supabase Table Editorにレコードが届く", content: "ブラウザでCRMを開いて、架空の顧客を1件追加します。株式会社サンプル商事の担当者を見込み客として登録します。Supabaseの<strong>Table Editorにレコードが届いていることを確認</strong>します。", reference: "" },
      { start: "3:20", end: "4:05", topic: "パイプラインドラッグ→UPDATE確認", direction: "画面収録：商談カードを「見込み」→「提案」へドラッグ→Supabaseでstatusカラム変化", content: "次にパイプラインのカードをドラッグします。<strong>「見込み」から「提案」へ</strong>動かして、Supabaseの画面に戻ると、<strong><code>status</code>カラムの値が<code>見込み</code>から<code>提案</code>にUPDATEされています</strong>。画面の見た目とDBの中身は<strong>同じことの2つの表現</strong>、ここが腹落ちする瞬間です。", reference: "" },
      { start: "4:05", end: "4:35", topic: "削除でCRUDが1周する", direction: "画面収録：顧客削除→画面とTable Editor両方から消える", content: "顧客を1件削除してみます。<strong>画面から消えると同時にTable Editorからも消えます</strong>。他のデータは残り続けています。CRUDの4操作が揃って、<strong>画面とDBがピタッと一致する</strong>状態になりました。", reference: "" },
      { start: "4:35", end: "5:10", topic: "GitHub push→Vercel→スマホ確認", direction: "画面収録：git push→Vercel環境変数登録→自動デプロイ→発行URLをスマホで開く", content: "GitHubにpushして、Vercel側に環境変数を登録し、自動デプロイを待ちます。発行URLをスマホで開くと、<strong>PCで登録した顧客がそのままスマホでも見えます</strong>。端末を超えて同じデータが見える状態に、今日もしっかり到達しました。", reference: "" },
      { start: "5:10", end: "5:55", topic: "3アプリのブラウザツアー", direction: "画面収録：ブラウザのタブに名刺・経費・CRMの3つを並べて順に切り替え", content: "ここでS6前半の<strong>3つのアプリを並べて</strong>みます。ブラウザのタブに<strong>名刺管理アプリ、経費管理アプリ、CRM</strong>、それぞれ永続化版がタブで並んでいます。どのアプリも<strong>ブラウザを閉じても消えません</strong>し、スマホからも同じデータが見えます。<strong>前のセクションで作った3つのSaaS風アプリが、全て端末を超えて共有できる本物のアプリに昇格</strong>しました。", reference: "" },
      { start: "5:55", end: "6:35", topic: "次セクションへの展望", direction: "スライド：S6前半3アプリ完成後の全体像図", content: "ここまで来たら、<strong>自分の普段使いのSaaSにも同じ手順でDB接続できます</strong>。次の2本では、プロの開発組織で実際にClaude Codeがどう活用されているか、BACKSTAGE社のリアルな開発フローを見ていきます。<strong>認証・権限管理・本番運用のような「プロダクトとして公開するときの別の層」</strong>も、そこでまとめて整理します。今日たどり着いた到達点が、プロの現場とどう地続きになっているかを比較する展望です。", reference: "" },
      { start: "6:35", end: "7:00", topic: "クロージング", direction: "スライド：表紙に戻す", content: "今日のお土産は1つだけ、<strong>「もう自分で好きなSaaSを作ってDBに繋げる」</strong>という独り立ち感覚です。名刺・経費・CRMと3回反復して身についた永続化の型、これが持ち帰る技能です。それでは次の動画でお会いしましょう。", reference: "" }
    ]
  }
};
