const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "AI+ School";
pres.title = "CC-S1-V5: 5分間で「動くアプリ」を自動で作らせてみよう！";

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

function addFooter(slide, pageNum, totalPages) {
  slide.addShape(pres.shapes.LINE, {
    x: 0.5, y: 5.1, w: 9, h: 0,
    line: { color: COLORS.grayBorder, width: 0.5 },
  });
  slide.addText("© WEIN / BACKSTAGE Group", {
    x: 0.5, y: 5.15, w: 5, h: 0.3,
    fontSize: 8, fontFace: FONTS.body, color: COLORS.textLight,
  });
  slide.addText(`${pageNum} / ${totalPages}`, {
    x: 7.5, y: 5.15, w: 2, h: 0.3,
    fontSize: 8, fontFace: FONTS.body, color: COLORS.textLight,
    align: "right",
  });
}

const TOTAL = 5;

// ===== SLIDE 1: Cover =====
{
  const slide = pres.addSlide();

  // Left side
  slide.addText("AI+ School", {
    x: 0.8, y: 0.4, w: 3, h: 0.4,
    fontSize: 12, fontFace: FONTS.accent, color: COLORS.text, italic: true,
  });
  slide.addText("SECTION 1 — 環境構築と魔法体験", {
    x: 0.8, y: 1.05, w: 5.5, h: 0.35,
    fontSize: 11, fontFace: FONTS.body, color: COLORS.accentBlue, charSpacing: 1,
  });

  // Excitement tag
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 1.5, w: 2.2, h: 0.32,
    fill: { color: "FFF3CD" },
    line: { color: "F0C040", width: 0.8 },
    rectRadius: 0.06,
  });
  slide.addText("今すぐ体験できる！", {
    x: 0.8, y: 1.5, w: 2.2, h: 0.32,
    fontSize: 10, fontFace: FONTS.body, color: "B8860B", bold: true, align: "center", margin: 0,
  });

  // Main title
  slide.addText([
    { text: "5分間で\n", options: { fontSize: 30, fontFace: FONTS.header, color: COLORS.text, bold: true, breakLine: true } },
    { text: "「動くアプリ」\n", options: { fontSize: 34, fontFace: FONTS.header, color: COLORS.accentBlue, bold: true, breakLine: true } },
    { text: "を自動で作らせてみよう！", options: { fontSize: 24, fontFace: FONTS.header, color: COLORS.text, bold: true } },
  ], { x: 0.8, y: 1.95, w: 5.4, h: 2.4, valign: "top" });

  slide.addText("日本語の指示一文だけで、AIが\nHTMLアプリを完全自動生成する体験", {
    x: 0.8, y: 4.35, w: 5.4, h: 0.7,
    fontSize: 12, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.5,
  });
  slide.addText("動画 5 / 5   |   10分   |   画面収録", {
    x: 0.8, y: 4.85, w: 5.4, h: 0.25,
    fontSize: 9, fontFace: FONTS.body, color: COLORS.textLight,
  });

  // Right blue panel
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 0, w: 3.5, h: 5.625,
    fill: { color: COLORS.accentBlue },
  });

  // Terminal mock: header bar
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.75, y: 0.55, w: 3.0, h: 4.65,
    fill: { color: "0D1117" },
    rectRadius: 0.12,
  });
  // Traffic lights
  slide.addShape(pres.shapes.OVAL, { x: 6.92, y: 0.72, w: 0.16, h: 0.13, fill: { color: "FF5F57" } });
  slide.addShape(pres.shapes.OVAL, { x: 7.12, y: 0.72, w: 0.16, h: 0.13, fill: { color: "FFBD2E" } });
  slide.addShape(pres.shapes.OVAL, { x: 7.32, y: 0.72, w: 0.16, h: 0.13, fill: { color: "28C840" } });

  // Terminal content
  slide.addText([
    { text: "$ claude\n", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9.5, breakLine: true } },
    { text: "> TODOアプリを作ってください\n\n", options: { color: "A0D2FF", fontFace: "Consolas", fontSize: 9.5, breakLine: true } },
    { text: "Creating files...\n", options: { color: "CCCCCC", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "✓ index.html\n", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "✓ style.css\n", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "✓ script.js\n\n", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "App ready! Open index.html\n", options: { color: "FFBD2E", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "in your browser.", options: { color: "FFBD2E", fontFace: "Consolas", fontSize: 9 } },
  ], { x: 6.9, y: 1.0, w: 2.7, h: 4.0, valign: "top", margin: 0 });
}

// ===== SLIDE 2: 今日やること宣言 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");

  slide.addText("今日やること宣言", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });
  slide.addText("3つの体験を通じて「AIが自律的に動く」感覚をつかもう", {
    x: 0.5, y: 1.18, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONTS.body, color: COLORS.textSub,
  });

  const experiences = [
    {
      num: "体験1",
      title: "プロンプトを書いてみる",
      desc: "「TODOアプリを作って」と日本語で入力するだけ。\n特別なコマンドは一切不要。",
      color: COLORS.accentBlue,
      bg: "EBF5FF",
    },
    {
      num: "体験2",
      title: "AIが自律的に動く様子を観察する",
      desc: "ファイルが次々と生成される画面をただ見ているだけ。\nAIが考え、判断し、実装する。",
      color: COLORS.accentPurple,
      bg: "F3EEFF",
    },
    {
      num: "体験3",
      title: "実際に動くアプリを確認する",
      desc: "ブラウザで index.html を開くと、完全に機能する\nTODOアプリが立ち上がる。",
      color: "27AE60",
      bg: "E9F7EF",
    },
  ];

  const cardY = [1.65, 2.85, 4.05];
  experiences.forEach((exp, i) => {
    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.2, y: cardY[i], w: 7.6, h: 0.92,
      fill: { color: exp.bg },
      line: { color: exp.color, width: 1.0 },
      rectRadius: 0.08,
    });
    // Number badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.35, y: cardY[i] + 0.18, w: 1.0, h: 0.32,
      fill: { color: exp.color },
      rectRadius: 0.06,
    });
    slide.addText(exp.num, {
      x: 1.35, y: cardY[i] + 0.18, w: 1.0, h: 0.32,
      fontSize: 10, fontFace: FONTS.body, color: "FFFFFF", bold: true, align: "center", margin: 0,
    });
    // Title
    slide.addText(exp.title, {
      x: 2.55, y: cardY[i] + 0.12, w: 5.9, h: 0.32,
      fontSize: 14, fontFace: FONTS.body, color: exp.color, bold: true, margin: 0,
    });
    // Description
    slide.addText(exp.desc, {
      x: 2.55, y: cardY[i] + 0.48, w: 6.0, h: 0.4,
      fontSize: 10, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.3, margin: 0,
    });
    // Arrow between cards
    if (i < 2) {
      slide.addText("▼", {
        x: 4.8, y: cardY[i] + 0.95, w: 0.4, h: 0.22,
        fontSize: 11, color: COLORS.textLight, align: "center", margin: 0,
      });
    }
  });

  addFooter(slide, 2, TOTAL);
}

// ===== SLIDE 3: プロンプトのコツ =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");

  slide.addText("プロンプトのコツ", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });

  // Key message banner
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.22, w: 9, h: 0.52,
    fill: { color: "FFF8E1" },
    line: { color: "F9A825", width: 1.2 },
    rectRadius: 0.07,
  });
  slide.addText("完璧な指示を目指す必要なし", {
    x: 0.5, y: 1.22, w: 9, h: 0.52,
    fontSize: 18, fontFace: FONTS.header, color: "B8860B", bold: true, align: "center", margin: 0,
  });

  // Section label
  slide.addText("実際に使ったプロンプト", {
    x: 0.5, y: 1.9, w: 4, h: 0.3,
    fontSize: 10, fontFace: FONTS.body, color: COLORS.textLight, charSpacing: 1,
  });

  // Terminal-like prompt box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 2.25, w: 9, h: 1.65,
    fill: { color: "0D1117" },
    rectRadius: 0.1,
  });
  // Traffic lights
  slide.addShape(pres.shapes.OVAL, { x: 0.7, y: 2.43, w: 0.16, h: 0.13, fill: { color: "FF5F57" } });
  slide.addShape(pres.shapes.OVAL, { x: 0.92, y: 2.43, w: 0.16, h: 0.13, fill: { color: "FFBD2E" } });
  slide.addShape(pres.shapes.OVAL, { x: 1.14, y: 2.43, w: 0.16, h: 0.13, fill: { color: "28C840" } });

  slide.addText([
    { text: "> ", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 12, bold: true } },
    { text: "HTMLとCSSとJavaScriptを使ったシンプルなTODOアプリを作ってください。\nやることを入力できて、完了チェックできて、削除できる機能を持つものにしてください。", options: { color: "E0E0E0", fontFace: "Consolas", fontSize: 12 } },
  ], { x: 0.7, y: 2.62, w: 8.6, h: 1.2, valign: "top", margin: 0, lineSpacingMultiple: 1.5 });

  // Callout box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.08, w: 9, h: 0.75,
    fill: { color: "EBF5FF" },
    line: { color: COLORS.accentBlue, width: 1.0 },
    rectRadius: 0.08,
  });
  slide.addText("💡  ", {
    x: 0.7, y: 4.18, w: 0.5, h: 0.5,
    fontSize: 18, align: "center", margin: 0,
  });
  slide.addText("自然な日本語で「やりたいこと」を伝えるだけ。\n箇条書きや難しい英語は一切不要！", {
    x: 1.25, y: 4.15, w: 7.9, h: 0.6,
    fontSize: 12, fontFace: FONTS.body, color: COLORS.accentBlue, bold: true, lineSpacingMultiple: 1.4, margin: 0,
  });

  addFooter(slide, 3, TOTAL);
}

// ===== SLIDE 4: エラーが出たら =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");

  slide.addText("エラーが出たら", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });

  // Left panel: error terminal
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.4, y: 1.3, w: 4.0, h: 3.1,
    fill: { color: "0D1117" },
    rectRadius: 0.1,
  });
  // Traffic lights
  slide.addShape(pres.shapes.OVAL, { x: 0.6, y: 1.48, w: 0.16, h: 0.13, fill: { color: "FF5F57" } });
  slide.addShape(pres.shapes.OVAL, { x: 0.82, y: 1.48, w: 0.16, h: 0.13, fill: { color: "FFBD2E" } });
  slide.addShape(pres.shapes.OVAL, { x: 1.04, y: 1.48, w: 0.16, h: 0.13, fill: { color: "28C840" } });

  slide.addText("Error Output", {
    x: 0.6, y: 1.48, w: 3.6, h: 0.25,
    fontSize: 8, fontFace: "Consolas", color: "888888", align: "right", margin: 0,
  });
  slide.addText([
    { text: "$ node app.js\n", options: { color: "CCCCCC", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "TypeError: Cannot read\n", options: { color: "FF6B6B", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "properties of undefined\n", options: { color: "FF6B6B", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "(reading 'length')\n\n", options: { color: "FF6B6B", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "at script.js:14:22\n", options: { color: "888888", fontFace: "Consolas", fontSize: 8, breakLine: true } },
    { text: "at Array.forEach\n", options: { color: "888888", fontFace: "Consolas", fontSize: 8, breakLine: true } },
    { text: "(<anonymous>)\n", options: { color: "888888", fontFace: "Consolas", fontSize: 8 } },
  ], { x: 0.6, y: 1.75, w: 3.6, h: 2.5, valign: "top", margin: 0 });

  // Label below left terminal
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 4.48, w: 3.2, h: 0.3,
    fill: { color: "FFEBEE" },
    line: { color: "FF6B6B", width: 0.5 },
    rectRadius: 0.04,
  });
  slide.addText("エラーが出ました。修正してください", {
    x: 0.8, y: 4.48, w: 3.2, h: 0.3,
    fontSize: 9, fontFace: FONTS.body, color: "C62828", align: "center", margin: 0, italic: true,
  });

  // Arrow in the middle
  slide.addText("→", {
    x: 4.45, y: 2.6, w: 1.1, h: 0.6,
    fontSize: 36, fontFace: FONTS.body, color: COLORS.accentBlue, align: "center", bold: true,
  });
  slide.addText("AIが\n自動修正", {
    x: 4.45, y: 3.2, w: 1.1, h: 0.5,
    fontSize: 9, fontFace: FONTS.body, color: COLORS.accentBlue, align: "center", margin: 0,
  });

  // Right panel: fixed terminal
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.6, y: 1.3, w: 4.0, h: 3.1,
    fill: { color: "0D1117" },
    rectRadius: 0.1,
    line: { color: "28C840", width: 1.0 },
  });
  // Traffic lights
  slide.addShape(pres.shapes.OVAL, { x: 5.8, y: 1.48, w: 0.16, h: 0.13, fill: { color: "FF5F57" } });
  slide.addShape(pres.shapes.OVAL, { x: 6.02, y: 1.48, w: 0.16, h: 0.13, fill: { color: "FFBD2E" } });
  slide.addShape(pres.shapes.OVAL, { x: 6.24, y: 1.48, w: 0.16, h: 0.13, fill: { color: "28C840" } });

  slide.addText("Fixed Output", {
    x: 5.8, y: 1.48, w: 3.6, h: 0.25,
    fontSize: 8, fontFace: "Consolas", color: "28C840", align: "right", margin: 0,
  });
  slide.addText([
    { text: "Fixing TypeError at line 14...\n", options: { color: "FFBD2E", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "Checking todos array init...\n\n", options: { color: "CCCCCC", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "✓ Added null check\n", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "✓ Initialized todos = []\n", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "✓ All tests passed\n\n", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "App running successfully!", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9, bold: true } },
  ], { x: 5.8, y: 1.75, w: 3.6, h: 2.5, valign: "top", margin: 0 });

  // Label below right terminal
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.0, y: 4.48, w: 3.2, h: 0.3,
    fill: { color: "E9F7EF" },
    line: { color: "28C840", width: 0.5 },
    rectRadius: 0.04,
  });
  slide.addText("修正完了・正常動作", {
    x: 6.0, y: 4.48, w: 3.2, h: 0.3,
    fontSize: 9, fontFace: FONTS.body, color: "1B7A3E", align: "center", margin: 0, bold: true,
  });

  // Key message below
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.5, y: 4.82, w: 7.0, h: 0.28,
    fill: { color: COLORS.grayBg },
    rectRadius: 0.04,
  });
  slide.addText("エラーすら含めて、AIが面倒を見てくれる", {
    x: 1.5, y: 4.82, w: 7.0, h: 0.28,
    fontSize: 11, fontFace: FONTS.body, color: COLORS.text, bold: true, align: "center", margin: 0,
  });

  addFooter(slide, 4, TOTAL);
}

// ===== SLIDE 5: まとめ・感想促し =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");

  slide.addText("まとめ", {
    x: 0.5, y: 0.6, w: 6.5, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });

  // Section 1 complete badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.1, y: 0.55, w: 2.3, h: 0.6,
    fill: { color: COLORS.accentBlue },
    rectRadius: 0.1,
  });
  slide.addText("セクション1 完了！", {
    x: 7.1, y: 0.55, w: 2.3, h: 0.6,
    fontSize: 13, fontFace: FONTS.body, color: "FFFFFF", bold: true, align: "center", margin: 0,
  });

  // 3 key takeaways
  const points = [
    {
      num: "1",
      text: "プロンプトは完璧でなくていい",
      sub: "自然な日本語で「やりたいこと」を伝えるだけで、AIが意図を読み取って実装する。",
      color: COLORS.accentBlue,
      bg: "EBF5FF",
    },
    {
      num: "2",
      text: "AIが自律的に考え、自律的に実装する",
      sub: "コードを手書きしなくていい。エラーも自分で直さなくていい。AIがすべて引き受ける。",
      color: COLORS.accentPurple,
      bg: "F3EEFF",
    },
    {
      num: "3",
      text: "箱から出したままで、すぐに使える",
      sub: "特別な設定も難しい知識も不要。インストールしたその日から「動くアプリ」が作れる。",
      color: "27AE60",
      bg: "E9F7EF",
    },
  ];

  const cardY = [1.3, 2.42, 3.54];
  points.forEach((p, i) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y: cardY[i], w: 8.0, h: 0.88,
      fill: { color: p.bg },
      line: { color: p.color, width: 0.8 },
      rectRadius: 0.08,
    });
    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.75, y: cardY[i] + 0.22, w: 0.42, h: 0.42,
      fill: { color: p.color },
    });
    slide.addText(p.num, {
      x: 0.75, y: cardY[i] + 0.22, w: 0.42, h: 0.42,
      fontSize: 16, fontFace: FONTS.accent, color: "FFFFFF", bold: true, align: "center", margin: 0,
    });
    // Title
    slide.addText(p.text, {
      x: 1.35, y: cardY[i] + 0.1, w: 6.9, h: 0.35,
      fontSize: 14, fontFace: FONTS.body, color: p.color, bold: true, margin: 0,
    });
    // Sub
    slide.addText(p.sub, {
      x: 1.35, y: cardY[i] + 0.48, w: 6.9, h: 0.35,
      fontSize: 10, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.3, margin: 0,
    });
  });

  // Next hint
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.6, w: 9.0, h: 0.42,
    fill: { color: COLORS.grayBg },
    line: { color: COLORS.grayBorder, width: 0.5 },
    rectRadius: 0.05,
  });
  slide.addText([
    { text: "次のセクション → ", options: { color: COLORS.textLight } },
    { text: "AIの記憶とセキュリティ", options: { color: COLORS.accentBlue, bold: true } },
    { text: "   |   Claude Codeをもっと安全・賢く使うために", options: { color: COLORS.textLight } },
  ], {
    x: 0.5, y: 4.6, w: 9.0, h: 0.42,
    fontSize: 11, fontFace: FONTS.body, align: "center", margin: 0,
  });

  addFooter(slide, 5, TOTAL);
}

pres.writeFile({ fileName: "/Users/tchytky/Desktop/claude-learning/slide-yamls/CC_S1_V5.pptx" })
  .then(() => console.log("Done: CC_S1_V5.pptx"))
  .catch((err) => console.error(err));
