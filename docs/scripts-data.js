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
  }
};
