const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "AI+ School";
pres.title = "CC-S1-V2: 「黒い画面」の基本操作と怖がらない心得";

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

// ===== SLIDE 1: Cover =====
{
  const slide = pres.addSlide();

  // Left side text
  slide.addText("AI+ School", {
    x: 0.8, y: 0.4, w: 3, h: 0.4,
    fontSize: 12, fontFace: FONTS.accent, color: COLORS.text, italic: true,
  });
  slide.addText("SECTION 1 — 環境構築と魔法体験", {
    x: 0.8, y: 1.2, w: 5.5, h: 0.4,
    fontSize: 11, fontFace: FONTS.body, color: COLORS.accentBlue,
    charSpacing: 1,
  });
  slide.addText([
    { text: "「黒い画面」の\n", options: { fontSize: 30, fontFace: FONTS.header, color: COLORS.text, bold: true, breakLine: true } },
    { text: "基本操作と\n", options: { fontSize: 30, fontFace: FONTS.header, color: COLORS.accentBlue, bold: true, breakLine: true } },
    { text: "怖がらない心得", options: { fontSize: 30, fontFace: FONTS.header, color: COLORS.text, bold: true } },
  ], { x: 0.8, y: 1.7, w: 5.5, h: 2.2, valign: "top" });

  slide.addText("ターミナルは「怖いもの」ではなく、\n文字で操作するファイルマネージャー。\nたった3コマンドで基本を習得しよう。", {
    x: 0.8, y: 3.9, w: 5.5, h: 0.8,
    fontSize: 12, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.5,
  });
  slide.addText("動画 2 / 5   |   8分   |   標準モード", {
    x: 0.8, y: 4.8, w: 5.5, h: 0.3,
    fontSize: 9, fontFace: FONTS.body, color: COLORS.textLight,
  });

  // Right colored panel
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 0, w: 3.5, h: 5.625,
    fill: { color: "1A1A2E" },
  });

  // Terminal window chrome (title bar)
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 0.6, w: 2.9, h: 4.5,
    fill: { color: "0D1117" },
    rectRadius: 0.12,
  });
  // Traffic light dots
  slide.addShape(pres.shapes.OVAL, { x: 6.98, y: 0.72, w: 0.15, h: 0.15, fill: { color: "FF5F57" } });
  slide.addShape(pres.shapes.OVAL, { x: 7.17, y: 0.72, w: 0.15, h: 0.15, fill: { color: "FFBD2E" } });
  slide.addShape(pres.shapes.OVAL, { x: 7.36, y: 0.72, w: 0.15, h: 0.15, fill: { color: "28C840" } });
  // Terminal title
  slide.addText("Terminal", {
    x: 6.8, y: 0.7, w: 2.9, h: 0.2,
    fontSize: 8, fontFace: FONTS.body, color: "888888", align: "center",
  });
  // Divider line under title bar
  slide.addShape(pres.shapes.LINE, {
    x: 6.8, y: 0.98, w: 2.9, h: 0,
    line: { color: "333333", width: 0.5 },
  });
  // Terminal content
  slide.addText([
    { text: "~ % ", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9.5, bold: true } },
    { text: "pwd\n", options: { color: "FFFFFF", fontFace: "Consolas", fontSize: 9.5 } },
    { text: "/Users/username\n\n", options: { color: "A0D2FF", fontFace: "Consolas", fontSize: 9.5 } },
    { text: "~ % ", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9.5, bold: true } },
    { text: "ls\n", options: { color: "FFFFFF", fontFace: "Consolas", fontSize: 9.5 } },
    { text: "Desktop  Documents\n", options: { color: "A0D2FF", fontFace: "Consolas", fontSize: 9.5 } },
    { text: "Downloads  Movies\n\n", options: { color: "A0D2FF", fontFace: "Consolas", fontSize: 9.5 } },
    { text: "~ % ", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9.5, bold: true } },
    { text: "cd Desktop\n", options: { color: "FFFFFF", fontFace: "Consolas", fontSize: 9.5 } },
    { text: "Desktop % ", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9.5, bold: true } },
    { text: "▌", options: { color: "FFFFFF", fontFace: "Consolas", fontSize: 9.5 } },
  ], { x: 7.0, y: 1.1, w: 2.5, h: 3.8, valign: "top", margin: 0 });
}

// ===== SLIDE 2: ターミナルの正体 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("ターミナルの正体", {
    x: 0.5, y: 0.65, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });
  slide.addText("ターミナル = 文字で操作するファイルマネージャー", {
    x: 0.5, y: 1.2, w: 9, h: 0.35,
    fontSize: 13, fontFace: FONTS.body, color: COLORS.accentBlue, bold: true, align: "center",
  });

  // Left card: マウス操作
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.7, w: 4.2, h: 3.1,
    fill: { color: COLORS.grayBg },
    rectRadius: 0.08,
    line: { color: COLORS.grayBorder, width: 0.5 },
  });
  // Top accent bar left
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 4.2, h: 0.07,
    fill: { color: COLORS.textLight },
  });
  slide.addText("マウス操作 (GUI)", {
    x: 0.7, y: 1.82, w: 3.8, h: 0.38,
    fontSize: 15, fontFace: FONTS.body, color: COLORS.text, bold: true, margin: 0,
  });
  const guiItems = [
    { icon: "🖱", label: "アイコンをダブルクリック" },
    { icon: "📂", label: "フォルダをドラッグ＆ドロップ" },
    { icon: "🔍", label: "ファインダーで検索" },
    { icon: "⌫", label: "ゴミ箱にドラッグして削除" },
  ];
  let gy = 2.3;
  guiItems.forEach((item) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.7, y: gy, w: 3.8, h: 0.42,
      fill: { color: "FFFFFF" },
      rectRadius: 0.04,
    });
    slide.addText(`${item.icon}  ${item.label}`, {
      x: 0.85, y: gy + 0.05, w: 3.5, h: 0.32,
      fontSize: 11, fontFace: FONTS.body, color: COLORS.textSub, margin: 0,
    });
    gy += 0.52;
  });

  // Center arrow
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 4.9, y: 2.85, w: 0.7, h: 0.5,
    fill: { color: COLORS.accentBlue },
    rectRadius: 0.06,
  });
  slide.addText("=", {
    x: 4.9, y: 2.85, w: 0.7, h: 0.5,
    fontSize: 20, fontFace: FONTS.body, color: "FFFFFF", align: "center", bold: true, margin: 0,
  });

  // Right card: 文字操作
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.8, y: 1.7, w: 4.2, h: 3.1,
    fill: { color: "0D1117" },
    rectRadius: 0.08,
    line: { color: COLORS.accentBlue, width: 0.8 },
  });
  // Top accent bar right
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.8, y: 1.7, w: 4.2, h: 0.07,
    fill: { color: COLORS.accentBlue },
  });
  slide.addText("文字操作 (CLI / ターミナル)", {
    x: 6.0, y: 1.82, w: 3.8, h: 0.38,
    fontSize: 15, fontFace: FONTS.body, color: "FFFFFF", bold: true, margin: 0,
  });
  const cliItems = [
    { cmd: "open .", label: "フォルダを開く" },
    { cmd: "mv folder ~/Desktop", label: "フォルダを移動" },
    { cmd: "find . -name '*.txt'", label: "ファイルを検索" },
    { cmd: "rm -r old_folder", label: "フォルダを削除" },
  ];
  let cy = 2.3;
  cliItems.forEach((item) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.0, y: cy, w: 3.8, h: 0.42,
      fill: { color: "1E2430" },
      rectRadius: 0.04,
    });
    slide.addText(item.cmd, {
      x: 6.1, y: cy + 0.04, w: 2.4, h: 0.18,
      fontSize: 9.5, fontFace: "Consolas", color: "7BF0B5", margin: 0,
    });
    slide.addText(item.label, {
      x: 6.1, y: cy + 0.22, w: 3.5, h: 0.16,
      fontSize: 8.5, fontFace: FONTS.body, color: "888888", margin: 0,
    });
    cy += 0.52;
  });

  addFooter(slide, 2, 6);
}

// ===== SLIDE 3: 基本コマンド一覧 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("基本コマンド一覧", {
    x: 0.5, y: 0.65, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });
  slide.addText("この3つを覚えれば「どこにいるか」「何があるか」「どこへ行くか」がわかる", {
    x: 0.5, y: 1.2, w: 9, h: 0.32,
    fontSize: 11, fontFace: FONTS.body, color: COLORS.textSub, align: "center",
  });

  const commands = [
    {
      cmd: "pwd",
      title: "現在地を表示",
      desc: "Print Working Directory\n今いるフォルダのパスを表示する",
      example: "$ pwd\n/Users/username/Desktop",
      color: COLORS.accentBlue,
      bg: "EBF5FF",
      x: 0.5,
    },
    {
      cmd: "cd",
      title: "フォルダを移動",
      desc: "Change Directory\n指定したフォルダに移動する",
      example: "$ cd Desktop\n$ cd ..  # 一階層上へ",
      color: COLORS.accentPurple,
      bg: "F3EEFF",
      x: 3.55,
    },
    {
      cmd: "ls / dir",
      title: "中身を一覧表示",
      desc: "List / Directory\nフォルダ内のファイルを一覧表示",
      example: "$ ls\napp.js  index.html\nREADME.md",
      color: "2D9B6E",
      bg: "E6F7F1",
      x: 6.6,
    },
  ];

  commands.forEach((c) => {
    // Top accent line
    slide.addShape(pres.shapes.RECTANGLE, {
      x: c.x, y: 1.6, w: 2.9, h: 0.07,
      fill: { color: c.color },
    });
    // Card body
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: c.x, y: 1.67, w: 2.9, h: 3.25,
      fill: { color: c.bg },
      rectRadius: 0.08,
    });
    // Command badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: c.x + 0.2, y: 1.85, w: 1.4, h: 0.45,
      fill: { color: c.color },
      rectRadius: 0.06,
    });
    slide.addText(c.cmd, {
      x: c.x + 0.2, y: 1.85, w: 1.4, h: 0.45,
      fontSize: 14, fontFace: "Consolas", color: "FFFFFF", bold: true, align: "center", margin: 0,
    });
    // Title
    slide.addText(c.title, {
      x: c.x + 0.2, y: 2.45, w: 2.5, h: 0.35,
      fontSize: 14, fontFace: FONTS.body, color: COLORS.text, bold: true, margin: 0,
    });
    // Description
    slide.addText(c.desc, {
      x: c.x + 0.2, y: 2.85, w: 2.5, h: 0.65,
      fontSize: 10.5, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.5, margin: 0,
    });
    // Example terminal box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: c.x + 0.15, y: 3.6, w: 2.6, h: 1.1,
      fill: { color: "0D1117" },
      rectRadius: 0.06,
    });
    slide.addText(c.example, {
      x: c.x + 0.3, y: 3.7, w: 2.3, h: 0.9,
      fontSize: 9, fontFace: "Consolas", color: "7BF0B5", lineSpacingMultiple: 1.6, margin: 0,
    });
  });

  addFooter(slide, 3, 6);
}

// ===== SLIDE 4: ディレクトリ構造図 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("ディレクトリ構造", {
    x: 0.5, y: 0.65, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });
  slide.addText("パソコンのフォルダは「木の根」のように階層構造になっている", {
    x: 0.5, y: 1.22, w: 9, h: 0.32,
    fontSize: 11, fontFace: FONTS.body, color: COLORS.textSub, align: "center",
  });

  // Helper to draw a folder node
  function addNode(slide, label, x, y, w, color, bg, isRoot) {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y, w, h: 0.44,
      fill: { color: bg },
      rectRadius: 0.07,
      line: { color: color, width: 0.8 },
    });
    if (isRoot) {
      slide.addText("💾  " + label, {
        x: x + 0.08, y: y + 0.04, w: w - 0.16, h: 0.36,
        fontSize: 12, fontFace: FONTS.body, color: color, bold: true, align: "center", margin: 0,
      });
    } else {
      slide.addText("📁  " + label, {
        x: x + 0.08, y: y + 0.04, w: w - 0.16, h: 0.36,
        fontSize: 11, fontFace: FONTS.body, color: color, bold: false, align: "center", margin: 0,
      });
    }
  }

  // Vertical line helper (connector)
  function vLine(slide, x, y1, y2, color) {
    slide.addShape(pres.shapes.LINE, {
      x, y: y1, w: 0, h: y2 - y1,
      line: { color: color || COLORS.grayBorder, width: 1 },
    });
  }
  function hLine(slide, x1, x2, y, color) {
    slide.addShape(pres.shapes.LINE, {
      x: x1, y, w: x2 - x1, h: 0,
      line: { color: color || COLORS.grayBorder, width: 1 },
    });
  }

  // Root node: / (ルート)
  addNode(slide, "/ (ルート)", 3.55, 1.7, 2.9, COLORS.accentBlue, "EBF5FF", true);

  // Connector root -> Users
  vLine(slide, 5.0, 2.14, 2.44, COLORS.accentBlue);

  // Users node
  addNode(slide, "Users", 3.55, 2.44, 2.9, "2D7DD2", "E8F4FD", false);

  // Connector Users -> username
  vLine(slide, 5.0, 2.88, 3.18, "2D7DD2");

  // username node
  addNode(slide, "username (あなた)", 3.55, 3.18, 2.9, COLORS.accentPurple, "F3EEFF", false);

  // Connector username -> 3 children
  vLine(slide, 5.0, 3.62, 3.82, COLORS.accentPurple);
  hLine(slide, 1.55, 8.45, 3.82, COLORS.grayBorder);
  vLine(slide, 2.0, 3.82, 4.0, COLORS.grayBorder);
  vLine(slide, 5.0, 3.82, 4.0, COLORS.grayBorder);
  vLine(slide, 8.0, 3.82, 4.0, COLORS.grayBorder);

  // Leaf nodes: Desktop, Documents, Downloads
  const leaves = [
    { label: "Desktop", x: 0.65, color: "2D9B6E", bg: "E6F7F1" },
    { label: "Documents", x: 3.55, color: "E8924A", bg: "FEF3EA" },
    { label: "Downloads", x: 6.45, color: "888888", bg: COLORS.grayBg },
  ];
  leaves.forEach((lf) => {
    addNode(slide, lf.label, lf.x, 4.0, 2.9, lf.color, lf.bg, false);
  });

  // Highlight Desktop with special indicator (current working directory example)
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.65, y: 4.52, w: 2.9, h: 0.26,
    fill: { color: "2D9B6E" },
    rectRadius: 0.04,
  });
  slide.addText("← cdコマンドで移動できる", {
    x: 0.65, y: 4.52, w: 2.9, h: 0.26,
    fontSize: 8.5, fontFace: FONTS.body, color: "FFFFFF", align: "center", margin: 0,
  });

  addFooter(slide, 4, 6);
}

// ===== SLIDE 5: エラーは怖くない =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("エラーは怖くない", {
    x: 0.5, y: 0.65, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });
  slide.addText("エラー = パソコンからのお知らせ。原因はほぼ「タイプミス」", {
    x: 0.5, y: 1.22, w: 9, h: 0.32,
    fontSize: 11, fontFace: FONTS.body, color: COLORS.textSub, align: "center",
  });

  const errors = [
    {
      title: "command not found",
      tagline: "コマンド名のスペルが違う",
      terminal: "$ cld Desktop\nzsh: command not found: cld",
      cause: "原因",
      causeDetail: "タイプミスが原因",
      fix: "修正方法",
      fixDetail: "正しいコマンド名に直して再実行\n例）cld → cd",
      badLine: "cld",
      correctLine: "cd",
      x: 0.5,
    },
    {
      title: "No such file or directory",
      tagline: "フォルダ・ファイル名が違う",
      terminal: "$ cd Desktpp\ncd: no such file or directory: Desktpp",
      cause: "原因",
      causeDetail: "フォルダ名の打ち間違い",
      fix: "修正方法",
      fixDetail: "lsで正しい名前を確認してから\n再入力する",
      badLine: "Desktpp",
      correctLine: "Desktop",
      x: 5.0,
    },
  ];

  errors.forEach((e) => {
    // Outer card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: e.x, y: 1.65, w: 4.4, h: 3.3,
      fill: { color: COLORS.grayBg },
      rectRadius: 0.08,
    });

    // Error title badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: e.x + 0.2, y: 1.82, w: 4.0, h: 0.4,
      fill: { color: "FF4444" },
      rectRadius: 0.06,
    });
    slide.addText(e.title, {
      x: e.x + 0.2, y: 1.82, w: 4.0, h: 0.4,
      fontSize: 13, fontFace: "Consolas", color: "FFFFFF", bold: true, align: "center", margin: 0,
    });
    slide.addText(e.tagline, {
      x: e.x + 0.2, y: 2.27, w: 4.0, h: 0.28,
      fontSize: 10.5, fontFace: FONTS.body, color: COLORS.textSub, align: "center", margin: 0,
    });

    // Terminal output box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: e.x + 0.2, y: 2.62, w: 4.0, h: 0.85,
      fill: { color: "0D1117" },
      rectRadius: 0.06,
    });
    slide.addText(e.terminal, {
      x: e.x + 0.32, y: 2.72, w: 3.76, h: 0.65,
      fontSize: 8.5, fontFace: "Consolas", color: "FF8888", lineSpacingMultiple: 1.5, margin: 0,
    });

    // Cause row
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: e.x + 0.2, y: 3.58, w: 4.0, h: 0.56,
      fill: { color: "FFF3E0" },
      rectRadius: 0.05,
      line: { color: "E8924A", width: 0.5 },
    });
    slide.addText("⚠  " + e.causeDetail, {
      x: e.x + 0.35, y: 3.62, w: 3.7, h: 0.48,
      fontSize: 10.5, fontFace: FONTS.body, color: "B05A00", bold: false, margin: 0,
    });

    // Fix row
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: e.x + 0.2, y: 4.22, w: 4.0, h: 0.56,
      fill: { color: "E6F7F1" },
      rectRadius: 0.05,
      line: { color: "2D9B6E", width: 0.5 },
    });
    slide.addText("✓  " + e.fixDetail, {
      x: e.x + 0.35, y: 4.22, w: 3.7, h: 0.56,
      fontSize: 10, fontFace: FONTS.body, color: "1A6644", lineSpacingMultiple: 1.4, margin: 0,
    });
  });

  addFooter(slide, 5, 6);
}

// ===== SLIDE 6: まとめ =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("まとめ", {
    x: 0.5, y: 0.65, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, align: "center", margin: 0,
  });

  const points = [
    {
      num: "1",
      text: "ターミナルは「怖い画面」ではなく、文字で操作するファイルマネージャー。慣れれば最強の作業ツール。",
    },
    {
      num: "2",
      text: "pwd・cd・ls の3つで基本パターン成立。「今どこ？」「移動」「確認」を繰り返すだけ。",
    },
    {
      num: "3",
      text: "エラーはパソコンからのお知らせ。ほぼタイプミスが原因。焦らず読んで修正すればOK。",
    },
  ];

  let py = 1.55;
  points.forEach((p) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.0, y: py, w: 8.0, h: 0.88,
      fill: { color: COLORS.grayBg },
      rectRadius: 0.07,
    });
    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 1.2, y: py + 0.19, w: 0.5, h: 0.5,
      fill: { color: COLORS.accentBlue },
    });
    slide.addText(p.num, {
      x: 1.2, y: py + 0.19, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: FONTS.accent, color: "FFFFFF", bold: true, align: "center", margin: 0,
    });
    slide.addText(p.text, {
      x: 1.85, y: py + 0.16, w: 6.9, h: 0.6,
      fontSize: 12, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.4, margin: 0,
    });
    py += 1.03;
  });

  // Next hint box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.5, y: 4.55, w: 7.0, h: 0.42,
    fill: { color: "FFFFFF" },
    line: { color: COLORS.grayBorder, width: 0.5 },
    rectRadius: 0.04,
  });
  slide.addText([
    { text: "次の動画 → ", options: { color: COLORS.textLight } },
    { text: "「Mac/Windows別」環境の確実なインストール手順", options: { color: COLORS.accentBlue, bold: true } },
  ], { x: 1.5, y: 4.55, w: 7.0, h: 0.42, fontSize: 11, fontFace: FONTS.body, align: "center", margin: 0 });

  addFooter(slide, 6, 6);
}

pres.writeFile({ fileName: "/Users/tchytky/Desktop/claude-learning/slide-yamls/CC_S1_V2.pptx" })
  .then(() => console.log("Done: CC_S1_V2.pptx"))
  .catch((err) => console.error(err));
