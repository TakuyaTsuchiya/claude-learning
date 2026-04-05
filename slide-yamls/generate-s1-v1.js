const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "AI+ School";
pres.title = "CC-S1-V1: 講座の全体像";

// Design spec: Modern_Clean_Tech_Trust
const COLORS = {
  bg: "FFFFFF",
  text: "000000",
  textSub: "555555",
  textLight: "888888",
  accentBlue: "4A90D9",
  accentPurple: "7B61FF",
  grayBg: "F2F2F2",
  grayBorder: "E0E0E0",
  darkBg: "1A1A2E",
};

const FONTS = {
  header: "Arial Black",
  body: "Arial",
  accent: "Georgia",
};

// Common header for inner slides
function addHeader(slide, category) {
  slide.addText(category, {
    x: 0.5, y: 0.2, w: 5, h: 0.3,
    fontSize: 10, fontFace: FONTS.body, color: COLORS.textLight,
  });
  slide.addText("AI+ School", {
    x: 7.5, y: 0.2, w: 2, h: 0.3,
    fontSize: 10, fontFace: FONTS.accent, color: COLORS.text,
    align: "right", italic: true,
  });
}

// Common footer for inner slides
function addFooter(slide, pageNum) {
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y: 5.1, w: 9, h: 0,
    line: { color: COLORS.grayBorder, width: 0.5 },
  });
  slide.addText("© WEIN / BACKSTAGE Group", {
    x: 0.5, y: 5.15, w: 5, h: 0.3,
    fontSize: 8, fontFace: FONTS.body, color: COLORS.textLight,
  });
  slide.addText(`${pageNum} / 6`, {
    x: 7.5, y: 5.15, w: 2, h: 0.3,
    fontSize: 8, fontFace: FONTS.body, color: COLORS.textLight,
    align: "right",
  });
}

// ===== SLIDE 1: Cover =====
{
  const slide = pres.addSlide();
  // Left side
  slide.addText("SECTION 1 — 環境構築と魔法体験", {
    x: 0.8, y: 1.2, w: 5.5, h: 0.4,
    fontSize: 11, fontFace: FONTS.body, color: COLORS.accentBlue,
    charSpacing: 1,
  });
  slide.addText([
    { text: "Claude Codeがもたらす\n", options: { fontSize: 32, fontFace: FONTS.header, color: COLORS.text, bold: true, breakLine: true } },
    { text: "「AI駆動開発」", options: { fontSize: 32, fontFace: FONTS.header, color: COLORS.accentBlue, bold: true, breakLine: true } },
    { text: "とは", options: { fontSize: 32, fontFace: FONTS.header, color: COLORS.text, bold: true } },
  ], { x: 0.8, y: 1.7, w: 5.5, h: 2.2, valign: "top" });
  slide.addText("日本語で指示を出すだけで、AIが自律的にコードを書き、\nアプリを組み立てる。新しい開発体験の全体像をお伝えします。", {
    x: 0.8, y: 3.9, w: 5.5, h: 0.8,
    fontSize: 13, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.5,
  });
  slide.addText("動画 1 / 5   |   5分   |   標準モード", {
    x: 0.8, y: 4.8, w: 5.5, h: 0.3,
    fontSize: 9, fontFace: FONTS.body, color: COLORS.textLight,
  });
  // Right gradient panel
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 0, w: 3.5, h: 5.625,
    fill: { color: COLORS.accentBlue },
  });
  // Terminal mock on right panel
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 2.8, w: 2.9, h: 2.2,
    fill: { color: "0D1117" },
    rectRadius: 0.1,
  });
  slide.addText([
    { text: "$ ", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 10, breakLine: true } },
    { text: "claude\n", options: { color: "FFFFFF", fontFace: "Consolas", fontSize: 10, breakLine: true } },
    { text: "> TODOアプリを作って\n", options: { color: "A0D2FF", fontFace: "Consolas", fontSize: 10, breakLine: true } },
    { text: "... ファイルを作成しています\n", options: { color: "A0D2FF", fontFace: "Consolas", fontSize: 10, breakLine: true } },
    { text: "... index.html を生成しました\n", options: { color: "A0D2FF", fontFace: "Consolas", fontSize: 10, breakLine: true } },
    { text: "✓ 完成しました", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 10 } },
  ], { x: 7.0, y: 3.0, w: 2.5, h: 1.8, valign: "top", margin: 0 });
  // Logo on cover
  slide.addText("AI+ School", {
    x: 0.8, y: 0.4, w: 3, h: 0.4,
    fontSize: 12, fontFace: FONTS.accent, color: COLORS.text, italic: true,
  });
}

// ===== SLIDE 2: Claude Codeとは =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("Claude Code とは", {
    x: 0.5, y: 0.7, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });

  const cards = [
    { title: "CLIベースのAIエージェント", desc: "ターミナル上で動作し、日本語の指示だけでコード生成・ファイル操作・エラー修正まで自律的に実行", x: 0.5, y: 1.5 },
    { title: "コピペ不要の直接操作", desc: "チャット型AIと違い、PCのファイルを直接操作。指示を出したら見ているだけで成果物が完成", x: 5.1, y: 1.5 },
    { title: "Anthropic社の公式ツール", desc: "Claude AIの開発元が提供する公式CLI。高い安全性とパフォーマンスを両立", x: 0.5, y: 3.2 },
    { title: "プログラミング経験不問", desc: "「こういうものを作って」と日本語で伝えるだけ。コードが書けなくてもアプリが作れる", x: 5.1, y: 3.2 },
  ];
  cards.forEach((c) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: c.x, y: c.y, w: 4.4, h: 1.5,
      fill: { color: COLORS.grayBg },
      rectRadius: 0.08,
    });
    slide.addText(c.title, {
      x: c.x + 0.25, y: c.y + 0.2, w: 3.9, h: 0.4,
      fontSize: 14, fontFace: FONTS.body, color: COLORS.accentBlue, bold: true, margin: 0,
    });
    slide.addText(c.desc, {
      x: c.x + 0.25, y: c.y + 0.65, w: 3.9, h: 0.7,
      fontSize: 11, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.4, margin: 0,
    });
  });
  addFooter(slide, 2);
}

// ===== SLIDE 3: AI駆動開発の概念 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("AI駆動開発の概念", {
    x: 0.5, y: 0.7, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });

  // Left box: 従来の開発
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.5, w: 4.0, h: 3.2,
    fill: { color: COLORS.grayBg },
    rectRadius: 0.08,
    line: { color: COLORS.grayBorder, width: 0.5 },
  });
  slide.addText("従来の開発", {
    x: 0.7, y: 1.6, w: 3.6, h: 0.35,
    fontSize: 9, fontFace: FONTS.body, color: COLORS.textLight, charSpacing: 2,
  });
  slide.addText("人間がすべて書く", {
    x: 0.7, y: 2.0, w: 3.6, h: 0.4,
    fontSize: 16, fontFace: FONTS.body, color: COLORS.text, bold: true, margin: 0,
  });
  slide.addText([
    { text: "・コードを一行ずつ手書き", options: { breakLine: true } },
    { text: "・エラーを自分で探して修正", options: { breakLine: true } },
    { text: "・テストも手動で繰り返す", options: { breakLine: true } },
    { text: "・完成まで数日〜数週間", options: {} },
  ], { x: 0.7, y: 2.5, w: 3.6, h: 2.0, fontSize: 12, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.6, margin: 0 });

  // Arrow
  slide.addText("→", {
    x: 4.5, y: 2.8, w: 1, h: 0.6,
    fontSize: 28, fontFace: FONTS.body, color: COLORS.accentBlue, align: "center", bold: true,
  });

  // Right box: AI駆動開発
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.5, y: 1.5, w: 4.0, h: 3.2,
    fill: { color: "EEF2FF" },
    rectRadius: 0.08,
    line: { color: COLORS.accentBlue, width: 0.8 },
  });
  slide.addText("AI駆動開発", {
    x: 5.7, y: 1.6, w: 3.6, h: 0.35,
    fontSize: 9, fontFace: FONTS.body, color: COLORS.accentBlue, charSpacing: 2,
  });
  slide.addText("人間は「何を作るか」を伝える", {
    x: 5.7, y: 2.0, w: 3.6, h: 0.4,
    fontSize: 16, fontFace: FONTS.body, color: COLORS.text, bold: true, margin: 0,
  });
  slide.addText([
    { text: "→ AIがコードを自動生成", options: { color: COLORS.accentBlue, breakLine: true } },
    { text: "→ エラーもAIが自律的に修正", options: { color: COLORS.accentBlue, breakLine: true } },
    { text: "→ ファイル配置まで自動", options: { color: COLORS.accentBlue, breakLine: true } },
    { text: "→ 数分で動くものが完成", options: { color: COLORS.accentBlue } },
  ], { x: 5.7, y: 2.5, w: 3.6, h: 2.0, fontSize: 12, fontFace: FONTS.body, lineSpacingMultiple: 1.6, margin: 0 });

  addFooter(slide, 3);
}

// ===== SLIDE 4: 3トラック構成 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("3トラック構成", {
    x: 0.5, y: 0.7, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });

  const tracks = [
    { title: "入門トラック", sub: "全員必須", content: "S1: 環境構築と魔法体験\nS2: AIの記憶とセキュリティ", color: COLORS.accentBlue, bg: "EBF5FF", x: 0.5 },
    { title: "営業・事務系", sub: "業務自動化したい方", content: "S3: 業務自動化の武器\nS4: ユースケースとマネタイズ", color: COLORS.accentPurple, bg: "F3EEFF", x: 3.6 },
    { title: "開発系", sub: "アプリを作りたい方", content: "S5: GitHub＆スペック駆動開発\nS6: デプロイとプロの開発フロー", color: "2D7DD2", bg: "E8F4FD", x: 6.7 },
  ];
  tracks.forEach((t) => {
    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: t.x, y: 1.5, w: 2.9, h: 0.06,
      fill: { color: t.color },
    });
    // Card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: t.x, y: 1.56, w: 2.9, h: 3.4,
      fill: { color: t.bg },
      rectRadius: 0.08,
    });
    slide.addText(t.title, {
      x: t.x + 0.2, y: 1.75, w: 2.5, h: 0.45,
      fontSize: 16, fontFace: FONTS.body, color: t.color, bold: true, align: "center", margin: 0,
    });
    slide.addText(t.sub, {
      x: t.x + 0.2, y: 2.2, w: 2.5, h: 0.3,
      fontSize: 10, fontFace: FONTS.body, color: COLORS.textLight, align: "center", margin: 0,
    });
    // Content box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: t.x + 0.2, y: 2.7, w: 2.5, h: 1.8,
      fill: { color: "FFFFFF", transparency: 50 },
      rectRadius: 0.06,
    });
    slide.addText(t.content, {
      x: t.x + 0.35, y: 2.85, w: 2.2, h: 1.5,
      fontSize: 11, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.6, margin: 0,
    });
  });
  addFooter(slide, 4);
}

// ===== SLIDE 5: ペルソナ別受講フロー =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("ペルソナ別 受講フロー", {
    x: 0.5, y: 0.7, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });

  const personas = [
    { name: "Aさん：全部やりたい", desc: "やる気も理解度も高い", steps: ["S1 入門", "S2 入門", "S3 営業事務系", "S4 営業事務系", "S5 開発系", "S6 開発系"], x: 0.5 },
    { name: "Bさん：業務自動化", desc: "事務効率化に集中したい", steps: ["S1 入門", "S2 入門", "S3 営業事務系", "S4 営業事務系"], x: 3.6 },
    { name: "Cさん：開発に興味", desc: "アプリを作ってみたい", steps: ["S1 入門", "S2 入門", "S5 開発系", "S6 開発系"], x: 6.7 },
  ];

  function stepColor(label) {
    if (label.includes("入門")) return { bg: "EBF5FF", text: COLORS.accentBlue };
    if (label.includes("営業")) return { bg: "F3EEFF", text: COLORS.accentPurple };
    return { bg: "E8F4FD", text: "2D7DD2" };
  }

  personas.forEach((p) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: p.x, y: 1.5, w: 2.9, h: 3.5,
      fill: { color: COLORS.grayBg },
      rectRadius: 0.08,
    });
    slide.addText(p.name, {
      x: p.x + 0.15, y: 1.6, w: 2.6, h: 0.35,
      fontSize: 13, fontFace: FONTS.body, color: COLORS.text, bold: true, margin: 0,
    });
    slide.addText(p.desc, {
      x: p.x + 0.15, y: 1.95, w: 2.6, h: 0.25,
      fontSize: 9, fontFace: FONTS.body, color: COLORS.textLight, margin: 0,
    });
    let sy = 2.35;
    p.steps.forEach((step, i) => {
      const sc = stepColor(step);
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: p.x + 0.3, y: sy, w: 2.3, h: 0.32,
        fill: { color: sc.bg },
        rectRadius: 0.04,
      });
      slide.addText(step, {
        x: p.x + 0.3, y: sy, w: 2.3, h: 0.32,
        fontSize: 10, fontFace: FONTS.body, color: sc.text, bold: true, align: "center", margin: 0,
      });
      sy += 0.38;
      if (i < p.steps.length - 1) {
        slide.addText("▼", {
          x: p.x + 0.3, y: sy - 0.08, w: 2.3, h: 0.15,
          fontSize: 7, color: COLORS.textLight, align: "center", margin: 0,
        });
        sy += 0.12;
      }
    });
  });
  addFooter(slide, 5);
}

// ===== SLIDE 6: まとめ =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("まとめ", {
    x: 0.5, y: 0.7, w: 9, h: 0.6,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, align: "center", margin: 0,
  });

  const points = [
    { num: "1", text: "Claude Code はターミナルから使うAIエージェント。日本語で指示を出すだけで、コード生成からファイル操作まで自律的に実行。" },
    { num: "2", text: "AI駆動開発 では、人間は「何を作るか」を伝える役割。AIが実装を担当し、開発スピードが大きく向上。" },
    { num: "3", text: "講座は 3トラック構成。入門は全員共通で、その後は目的に合わせて営業事務系または開発系を選択可能。" },
  ];
  let py = 1.6;
  points.forEach((p) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.0, y: py, w: 8.0, h: 0.85,
      fill: { color: COLORS.grayBg },
      rectRadius: 0.06,
    });
    slide.addText(p.num, {
      x: 1.2, y: py + 0.1, w: 0.5, h: 0.65,
      fontSize: 24, fontFace: FONTS.accent, color: COLORS.accentBlue, bold: true, margin: 0,
    });
    slide.addText(p.text, {
      x: 1.8, y: py + 0.15, w: 6.8, h: 0.6,
      fontSize: 12, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.4, margin: 0,
    });
    py += 1.0;
  });

  // Next hint
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 2.0, y: 4.5, w: 6.0, h: 0.45,
    fill: { color: "FFFFFF" },
    line: { color: COLORS.grayBorder, width: 0.5 },
    rectRadius: 0.04,
  });
  slide.addText([
    { text: "次の動画 → ", options: { color: COLORS.textLight } },
    { text: "「黒い画面」の基本操作と怖がらない心得", options: { color: COLORS.accentBlue, bold: true } },
  ], { x: 2.0, y: 4.5, w: 6.0, h: 0.45, fontSize: 11, fontFace: FONTS.body, align: "center", margin: 0 });

  addFooter(slide, 6);
}

pres.writeFile({ fileName: "/Users/tchytky/Desktop/claude-learning/slide-yamls/CC_S1_V1.pptx" })
  .then(() => console.log("Done: CC_S1_V1.pptx"))
  .catch((err) => console.error(err));
