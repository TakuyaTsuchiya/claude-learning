const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "AI+ School";
pres.title = "CC-S1-V3: 環境の確実なインストール手順";

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

// ===== SLIDE 1: Cover =====
{
  const slide = pres.addSlide();
  // Logo
  slide.addText("AI+ School", {
    x: 0.8, y: 0.4, w: 3, h: 0.4,
    fontSize: 12, fontFace: FONTS.accent, color: COLORS.text, italic: true,
  });
  // Section label
  slide.addText("SECTION 1 — 環境構築と魔法体験", {
    x: 0.8, y: 1.1, w: 5.5, h: 0.4,
    fontSize: 11, fontFace: FONTS.body, color: COLORS.accentBlue, charSpacing: 1,
  });
  // Title
  slide.addText([
    { text: "環境の確実な\n", options: { fontSize: 30, fontFace: FONTS.header, color: COLORS.text, bold: true, breakLine: true } },
    { text: "インストール手順", options: { fontSize: 30, fontFace: FONTS.header, color: COLORS.accentBlue, bold: true } },
  ], { x: 0.8, y: 1.65, w: 5.5, h: 1.8, valign: "top" });
  // Subtitle
  slide.addText("Mac / Windows 両対応の確実なセットアップ方法を\nステップごとに丁寧に解説します。", {
    x: 0.8, y: 3.6, w: 5.5, h: 0.8,
    fontSize: 13, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.5,
  });
  // Meta info
  slide.addText("動画 3 / 5   |   10分   |   画面収録", {
    x: 0.8, y: 4.7, w: 5.5, h: 0.3,
    fontSize: 9, fontFace: FONTS.body, color: COLORS.textLight,
  });

  // Right panel — dark background
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 0, w: 3.5, h: 5.625,
    fill: { color: COLORS.darkBg },
  });

  // Panel title
  slide.addText("必要な3つのツール", {
    x: 6.7, y: 0.5, w: 3.1, h: 0.35,
    fontSize: 12, fontFace: FONTS.body, color: "AAAAAA", align: "center",
  });

  // Node.js card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 1.0, w: 2.9, h: 1.1,
    fill: { color: "1E3A2F" },
    rectRadius: 0.08,
  });
  slide.addText("Node.js", {
    x: 7.05, y: 1.1, w: 2.4, h: 0.35,
    fontSize: 14, fontFace: FONTS.body, color: "68D391", bold: true,
  });
  slide.addText("実行環境の土台", {
    x: 7.05, y: 1.48, w: 2.4, h: 0.25,
    fontSize: 10, fontFace: FONTS.body, color: "A0AEC0",
  });

  // npm card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 2.25, w: 2.9, h: 1.1,
    fill: { color: "1A2740" },
    rectRadius: 0.08,
  });
  slide.addText("npm", {
    x: 7.05, y: 2.35, w: 2.4, h: 0.35,
    fontSize: 14, fontFace: FONTS.body, color: "63B3ED", bold: true,
  });
  slide.addText("パッケージマネージャー", {
    x: 7.05, y: 2.73, w: 2.4, h: 0.25,
    fontSize: 10, fontFace: FONTS.body, color: "A0AEC0",
  });

  // Git card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.8, y: 3.5, w: 2.9, h: 1.1,
    fill: { color: "2D1F2D" },
    rectRadius: 0.08,
  });
  slide.addText("Git for Windows", {
    x: 7.05, y: 3.6, w: 2.4, h: 0.35,
    fontSize: 14, fontFace: FONTS.body, color: "FC8181", bold: true,
  });
  slide.addText("Windowsのみ必要", {
    x: 7.05, y: 3.98, w: 2.4, h: 0.25,
    fontSize: 10, fontFace: FONTS.body, color: "A0AEC0",
  });
}

// ===== SLIDE 2: 必要なもの一覧 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");

  slide.addText("必要なもの一覧", {
    x: 0.5, y: 0.65, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });

  const items = [
    {
      num: "01",
      title: "Node.js",
      desc: "土台となる実行環境。npmはNode.jsに同梱されているため別途インストール不要。",
      icon: "node.js",
      iconColor: "68D391",
      numColor: COLORS.accentBlue,
      bg: "EBF5FF",
      borderColor: COLORS.accentBlue,
      x: 0.5,
    },
    {
      num: "02",
      title: "npm",
      desc: "パッケージマネージャー。Node.jsと同時にインストールされるため、Node.jsを入れれば自動的に使えるようになる。",
      iconColor: "63B3ED",
      numColor: COLORS.accentPurple,
      bg: "F3EEFF",
      borderColor: COLORS.accentPurple,
      x: 3.6,
    },
    {
      num: "03",
      title: "Git for Windows",
      desc: "Windowsのみ必要。Macにはデフォルトで搭載済み。ターミナル（bash）環境も同時にセットアップされる。",
      iconColor: "FC8181",
      numColor: "E05252",
      bg: "FFF0F0",
      borderColor: "E05252",
      x: 6.7,
    },
  ];

  items.forEach((item) => {
    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: item.x, y: 1.5, w: 2.9, h: 0.07,
      fill: { color: item.borderColor },
    });
    // Card body
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: item.x, y: 1.57, w: 2.9, h: 3.3,
      fill: { color: item.bg },
      rectRadius: 0.08,
    });
    // Number badge
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: item.x + 0.2, y: 1.75, w: 0.55, h: 0.55,
      fill: { color: item.borderColor },
      rectRadius: 0.06,
    });
    slide.addText(item.num, {
      x: item.x + 0.2, y: 1.75, w: 0.55, h: 0.55,
      fontSize: 13, fontFace: FONTS.body, color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0,
    });
    // Title
    slide.addText(item.title, {
      x: item.x + 0.85, y: 1.82, w: 1.9, h: 0.4,
      fontSize: 16, fontFace: FONTS.body, color: item.borderColor, bold: true, margin: 0,
    });
    // Divider
    slide.addShape(pres.shapes.LINE, {
      x: item.x + 0.2, y: 2.45, w: 2.5, h: 0,
      line: { color: item.borderColor, width: 0.5 },
    });
    // Description
    slide.addText(item.desc, {
      x: item.x + 0.2, y: 2.6, w: 2.55, h: 2.1,
      fontSize: 11, fontFace: FONTS.body, color: COLORS.textSub,
      lineSpacingMultiple: 1.5, valign: "top", margin: 0,
    });
  });

  addFooter(slide, 2, 6);
}

// ===== SLIDE 3: Mac インストール手順 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");

  slide.addText("Mac インストール手順", {
    x: 0.5, y: 0.65, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });

  // OS badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.3, y: 0.65, w: 1.9, h: 0.45,
    fill: { color: "E8F8F0" },
    rectRadius: 0.06,
  });
  slide.addText("macOS", {
    x: 7.3, y: 0.65, w: 1.9, h: 0.45,
    fontSize: 12, fontFace: FONTS.body, color: "2D9B65", bold: true, align: "center", valign: "middle",
  });

  const steps = [
    { num: "1", label: "nodejs.org にアクセス", detail: "ブラウザで https://nodejs.org を開く", cmd: null },
    { num: "2", label: "LTS版をダウンロード", detail: "「LTS (推奨版)」ボタンをクリック — .pkgファイルを保存", cmd: null },
    { num: "3", label: "pkgインストーラーを実行", detail: "ダウンロードした .pkg をダブルクリックして指示に従う", cmd: null },
    { num: "4", label: "バージョン確認", detail: "ターミナルを開いて下記コマンドを実行", cmd: "node --version   # v20.x.x と表示されればOK\nnpm --version    # v10.x.x と表示されればOK" },
    { num: "5", label: "Claude Code インストール", detail: "npmでグローバルインストールする", cmd: "npm install -g @anthropic-ai/claude-code" },
  ];

  const startY = 1.4;
  const stepH = 0.62;
  const gap = 0.05;

  steps.forEach((step, i) => {
    const hasCmd = !!step.cmd;
    const cardH = hasCmd ? 1.05 : 0.58;
    const y = startY + i * (stepH + gap + (i > 2 ? 0.48 : 0));
    const adjustedY = (() => {
      let acc = startY;
      for (let j = 0; j < i; j++) {
        acc += steps[j].cmd ? 1.1 : 0.63;
        acc += 0.05;
      }
      return acc;
    })();

    // Step number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: adjustedY + 0.05, w: 0.42, h: 0.42,
      fill: { color: COLORS.accentBlue },
    });
    slide.addText(step.num, {
      x: 0.5, y: adjustedY + 0.05, w: 0.42, h: 0.42,
      fontSize: 13, fontFace: FONTS.body, color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0,
    });

    // Connector line (except last)
    if (i < steps.length - 1) {
      const lineY = adjustedY + 0.52;
      const lineH = hasCmd ? 0.72 : 0.25;
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.705, y: lineY, w: 0.01, h: lineH,
        fill: { color: COLORS.grayBorder },
        line: { color: COLORS.grayBorder, width: 0 },
      });
    }

    // Step card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.1, y: adjustedY, w: 8.3, h: hasCmd ? 1.0 : 0.52,
      fill: { color: hasCmd ? "EBF5FF" : COLORS.grayBg },
      rectRadius: 0.06,
      line: { color: hasCmd ? COLORS.accentBlue : COLORS.grayBorder, width: 0.5 },
    });
    slide.addText(step.label, {
      x: 1.25, y: adjustedY + 0.07, w: 7.9, h: 0.28,
      fontSize: 12, fontFace: FONTS.body, color: COLORS.text, bold: true, margin: 0,
    });
    slide.addText(step.detail, {
      x: 1.25, y: adjustedY + 0.33, w: 7.9, h: 0.22,
      fontSize: 10, fontFace: FONTS.body, color: COLORS.textSub, margin: 0,
    });

    if (step.cmd) {
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 1.25, y: adjustedY + 0.57, w: 8.1, h: 0.38,
        fill: { color: "0D1117" },
        rectRadius: 0.04,
      });
      slide.addText(step.cmd, {
        x: 1.4, y: adjustedY + 0.59, w: 7.8, h: 0.34,
        fontSize: 9, fontFace: "Consolas", color: "7BF0B5", margin: 0, valign: "middle",
      });
    }
  });

  addFooter(slide, 3, 6);
}

// ===== SLIDE 4: Windows インストール手順 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");

  slide.addText("Windows インストール手順", {
    x: 0.5, y: 0.65, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });

  // OS badge
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 7.0, y: 0.65, w: 2.2, h: 0.45,
    fill: { color: "EAF0FF" },
    rectRadius: 0.06,
  });
  slide.addText("Windows", {
    x: 7.0, y: 0.65, w: 2.2, h: 0.45,
    fontSize: 12, fontFace: FONTS.body, color: "3B5ECC", bold: true, align: "center", valign: "middle",
  });

  const steps = [
    { num: "1", label: "Git for Windows をインストール", detail: "https://gitforwindows.org からインストーラーをダウンロードして実行", cmd: null, highlight: true },
    { num: "2", label: "nodejs.org にアクセス", detail: "ブラウザで https://nodejs.org を開く", cmd: null, highlight: false },
    { num: "3", label: "LTS版をダウンロード", detail: "「LTS (推奨版)」ボタンをクリック — .msiファイルを保存", cmd: null, highlight: false },
    { num: "4", label: "msiインストーラーを実行", detail: "ダウンロードした .msi をダブルクリックして指示に従う", cmd: null, highlight: false },
    { num: "5", label: "バージョン確認（Git Bash使用）", detail: "Git Bashを開いて下記コマンドを実行", cmd: "node --version   # v20.x.x と表示されればOK\nnpm --version    # v10.x.x と表示されればOK" },
    { num: "6", label: "Claude Code インストール", detail: "npmでグローバルインストールする", cmd: "npm install -g @anthropic-ai/claude-code" },
  ];

  steps.forEach((step, i) => {
    const hasCmd = !!step.cmd;
    const adjustedY = (() => {
      let acc = 1.35;
      for (let j = 0; j < i; j++) {
        acc += steps[j].cmd ? 1.0 : 0.57;
        acc += 0.04;
      }
      return acc;
    })();

    // Step circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.5, y: adjustedY + 0.05, w: 0.38, h: 0.38,
      fill: { color: step.highlight ? "E05252" : COLORS.accentBlue },
    });
    slide.addText(step.num, {
      x: 0.5, y: adjustedY + 0.05, w: 0.38, h: 0.38,
      fontSize: 12, fontFace: FONTS.body, color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0,
    });

    // Connector
    if (i < steps.length - 1) {
      const lineH = hasCmd ? 0.68 : 0.23;
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.685, y: adjustedY + 0.48, w: 0.01, h: lineH,
        fill: { color: COLORS.grayBorder },
        line: { color: COLORS.grayBorder, width: 0 },
      });
    }

    // Card
    const cardBg = step.highlight ? "FFF0F0" : (hasCmd ? "EBF5FF" : COLORS.grayBg);
    const cardBorder = step.highlight ? "E05252" : (hasCmd ? COLORS.accentBlue : COLORS.grayBorder);
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.05, y: adjustedY, w: 8.35, h: hasCmd ? 0.95 : 0.5,
      fill: { color: cardBg },
      rectRadius: 0.06,
      line: { color: cardBorder, width: 0.5 },
    });
    slide.addText(step.label, {
      x: 1.2, y: adjustedY + 0.06, w: 8.0, h: 0.25,
      fontSize: 11, fontFace: FONTS.body, color: COLORS.text, bold: true, margin: 0,
    });
    slide.addText(step.detail, {
      x: 1.2, y: adjustedY + 0.29, w: 8.0, h: 0.2,
      fontSize: 9, fontFace: FONTS.body, color: COLORS.textSub, margin: 0,
    });

    if (step.cmd) {
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 1.2, y: adjustedY + 0.52, w: 8.1, h: 0.38,
        fill: { color: "0D1117" },
        rectRadius: 0.04,
      });
      slide.addText(step.cmd, {
        x: 1.35, y: adjustedY + 0.54, w: 7.8, h: 0.34,
        fontSize: 9, fontFace: "Consolas", color: "7BF0B5", margin: 0, valign: "middle",
      });
    }
  });

  addFooter(slide, 4, 6);
}

// ===== SLIDE 5: トラブルシューティング =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");

  slide.addText("トラブルシューティング", {
    x: 0.5, y: 0.65, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });

  const issues = [
    {
      problem: '"command not found" エラー',
      cause: "ターミナルがインストールを認識していない",
      solution: "ターミナルを完全に閉じて再起動する。それでも解決しない場合はPCを再起動。",
      icon: "!",
      color: "E05252",
      bg: "FFF5F5",
      solutionBg: "FFE8E8",
    },
    {
      problem: "ダウンロードが完了しない・遅い",
      cause: "ネットワーク制限またはファイアウォールが原因",
      solution: "別のWiFiやモバイル回線に切り替えて再試行。企業ネットワークの場合はIT部門に相談。",
      icon: "~",
      color: "D97B20",
      bg: "FFF9F0",
      solutionBg: "FFEBD0",
    },
    {
      problem: "バージョン競合（古いNode.jsが残っている）",
      cause: "以前のインストールが残っており干渉している",
      solution: "コントロールパネル（Win）または /usr/local/bin の古いNode.jsをアンインストール後、新たにインストール。",
      icon: "x",
      color: COLORS.accentPurple,
      bg: "F5F0FF",
      solutionBg: "EAE0FF",
    },
  ];

  const startY = 1.4;
  const cardH = 1.35;
  const gap = 0.18;

  issues.forEach((issue, i) => {
    const y = startY + i * (cardH + gap);

    // Card outer
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.5, y, w: 9.2, h: cardH,
      fill: { color: issue.bg },
      rectRadius: 0.08,
      line: { color: issue.color, width: 0.5 },
    });

    // Icon badge
    slide.addShape(pres.shapes.OVAL, {
      x: 0.65, y: y + 0.35, w: 0.5, h: 0.5,
      fill: { color: issue.color },
    });
    slide.addText(issue.icon, {
      x: 0.65, y: y + 0.35, w: 0.5, h: 0.5,
      fontSize: 14, fontFace: FONTS.body, color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0,
    });

    // Problem label + cause
    slide.addText("問題", {
      x: 1.3, y: y + 0.14, w: 0.6, h: 0.24,
      fontSize: 8, fontFace: FONTS.body, color: issue.color, bold: true, margin: 0,
    });
    slide.addText(issue.problem, {
      x: 1.3, y: y + 0.35, w: 4.5, h: 0.32,
      fontSize: 13, fontFace: FONTS.body, color: COLORS.text, bold: true, margin: 0,
    });
    slide.addText(issue.cause, {
      x: 1.3, y: y + 0.68, w: 4.5, h: 0.24,
      fontSize: 10, fontFace: FONTS.body, color: COLORS.textSub, margin: 0,
    });

    // Divider between problem/solution
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 5.89, y: y + 0.2, w: 0.01, h: 0.95,
      fill: { color: issue.color },
      line: { color: issue.color, width: 0 },
    });

    // Solution
    slide.addText("解決策", {
      x: 6.05, y: y + 0.14, w: 0.75, h: 0.24,
      fontSize: 8, fontFace: FONTS.body, color: issue.color, bold: true, margin: 0,
    });
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.05, y: y + 0.38, w: 3.4, h: 0.7,
      fill: { color: issue.solutionBg },
      rectRadius: 0.05,
    });
    slide.addText(issue.solution, {
      x: 6.15, y: y + 0.4, w: 3.2, h: 0.66,
      fontSize: 10, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.4, valign: "middle", margin: 0,
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
      text: "Mac / Windows 両方のインストール手順をマスターした。OSに合わせて nodejs.org からLTS版をダウンロードするだけ。",
    },
    {
      num: "2",
      text: "Node.js + npm + Claude Code の3点セットが揃えば環境構築は完了。Windowsは追加でGit for Windowsが必要。",
    },
    {
      num: "3",
      text: "トラブル時はまず「ターミナル再起動」→「ネットワーク確認」→「アンインストール＆再インストール」の順でチェック。",
    },
  ];

  let py = 1.55;
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
      x: 1.82, y: py + 0.15, w: 6.8, h: 0.6,
      fontSize: 12, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.4, margin: 0,
    });
    py += 1.0;
  });

  // Next hint box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 2.0, y: 4.55, w: 6.0, h: 0.45,
    fill: { color: "FFFFFF" },
    line: { color: COLORS.grayBorder, width: 0.5 },
    rectRadius: 0.04,
  });
  slide.addText([
    { text: "次の動画 → ", options: { color: COLORS.textLight } },
    { text: "Claude Codeのインストールと初期認証", options: { color: COLORS.accentBlue, bold: true } },
  ], {
    x: 2.0, y: 4.55, w: 6.0, h: 0.45,
    fontSize: 11, fontFace: FONTS.body, align: "center", margin: 0,
  });

  addFooter(slide, 6, 6);
}

pres.writeFile({ fileName: "/Users/tchytky/Desktop/claude-learning/slide-yamls/CC_S1_V3.pptx" })
  .then(() => console.log("Done: CC_S1_V3.pptx"))
  .catch((err) => console.error(err));
