const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "AI+ School";
pres.title = "CC-S1-V4: Claude Codeのインストールと初期認証";

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

const TOTAL = 6;

// ===== SLIDE 1: Cover =====
{
  const slide = pres.addSlide();

  // Left panel
  slide.addText("SECTION 1 — 環境構築と魔法体験", {
    x: 0.8, y: 1.1, w: 5.5, h: 0.35,
    fontSize: 11, fontFace: FONTS.body, color: COLORS.accentBlue, charSpacing: 1,
  });
  slide.addText("Claude Codeの\nインストールと初期認証", {
    x: 0.8, y: 1.55, w: 5.5, h: 1.8,
    fontSize: 30, fontFace: FONTS.header, color: COLORS.text, bold: true,
    lineSpacingMultiple: 1.2, valign: "top",
  });
  slide.addText("npmで1行インストール → ブラウザ認証だけで\nすぐに使い始められます。", {
    x: 0.8, y: 3.5, w: 5.5, h: 0.75,
    fontSize: 13, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.5,
  });
  slide.addText("動画 4 / 5   |   8分   |   画面収録", {
    x: 0.8, y: 4.75, w: 5.5, h: 0.3,
    fontSize: 9, fontFace: FONTS.body, color: COLORS.textLight,
  });
  slide.addText("AI+ School", {
    x: 0.8, y: 0.4, w: 3, h: 0.4,
    fontSize: 12, fontFace: FONTS.accent, color: COLORS.text, italic: true,
  });

  // Right blue panel
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.5, y: 0, w: 3.5, h: 5.625,
    fill: { color: COLORS.accentBlue },
  });

  // Terminal mock
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.75, y: 1.1, w: 3.0, h: 3.1,
    fill: { color: "0D1117" },
    rectRadius: 0.1,
  });
  // Terminal title bar dots
  slide.addShape(pres.shapes.OVAL, { x: 6.9, y: 1.22, w: 0.12, h: 0.12, fill: { color: "FF5F57" } });
  slide.addShape(pres.shapes.OVAL, { x: 7.08, y: 1.22, w: 0.12, h: 0.12, fill: { color: "FFBD2E" } });
  slide.addShape(pres.shapes.OVAL, { x: 7.26, y: 1.22, w: 0.12, h: 0.12, fill: { color: "28C840" } });

  slide.addText([
    { text: "$ ", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9 } },
    { text: "npm install -g @anthropic-ai/claude-code\n", options: { color: "FFFFFF", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "\nadded 1 package in 3s\n", options: { color: "888888", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "\n$ ", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9 } },
    { text: "claude --version\n", options: { color: "FFFFFF", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "1.x.x\n", options: { color: "A0D2FF", fontFace: "Consolas", fontSize: 9, breakLine: true } },
    { text: "\n$ ", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9 } },
    { text: "claude", options: { color: "FFFFFF", fontFace: "Consolas", fontSize: 9 } },
    { text: " _", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 9 } },
  ], { x: 6.9, y: 1.45, w: 2.7, h: 2.5, valign: "top", margin: 0 });
}

// ===== SLIDE 2: インストール手順 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("インストール手順", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });
  slide.addText("たった3ステップで使い始められます", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONTS.body, color: COLORS.textLight, margin: 0,
  });

  const steps = [
    {
      num: "1",
      label: "インストール",
      cmd: "npm install -g\n@anthropic-ai/claude-code",
      note: "Node.js 18以上が必要",
      x: 0.5,
    },
    {
      num: "2",
      label: "初回起動",
      cmd: "claude",
      note: "ターミナルで実行するだけ",
      x: 3.55,
    },
    {
      num: "3",
      label: "認証完了",
      cmd: "Anthropicアカウント\nでログイン",
      note: "ブラウザが自動で開きます",
      x: 6.6,
    },
  ];

  steps.forEach((s, i) => {
    // Card background
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: s.x, y: 1.65, w: 2.9, h: 3.2,
      fill: { color: i === 0 ? "EBF5FF" : COLORS.grayBg },
      rectRadius: 0.1,
      line: { color: i === 0 ? COLORS.accentBlue : COLORS.grayBorder, width: i === 0 ? 1.2 : 0.5 },
    });

    // Step circle
    slide.addShape(pres.shapes.OVAL, {
      x: s.x + 1.05, y: 1.75, w: 0.8, h: 0.8,
      fill: { color: COLORS.accentBlue },
    });
    slide.addText(s.num, {
      x: s.x + 1.05, y: 1.75, w: 0.8, h: 0.8,
      fontSize: 22, fontFace: FONTS.header, color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0,
    });

    // Label
    slide.addText(s.label, {
      x: s.x + 0.15, y: 2.65, w: 2.6, h: 0.4,
      fontSize: 16, fontFace: FONTS.body, color: COLORS.text, bold: true, align: "center", margin: 0,
    });

    // Command box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: s.x + 0.2, y: 3.12, w: 2.5, h: 0.85,
      fill: { color: "0D1117" },
      rectRadius: 0.06,
    });
    slide.addText(s.cmd, {
      x: s.x + 0.2, y: 3.12, w: 2.5, h: 0.85,
      fontSize: 10, fontFace: "Consolas", color: "7BF0B5", align: "center", valign: "middle", lineSpacingMultiple: 1.4, margin: 0,
    });

    // Note
    slide.addText(s.note, {
      x: s.x + 0.1, y: 4.1, w: 2.7, h: 0.4,
      fontSize: 10, fontFace: FONTS.body, color: COLORS.textLight, align: "center", margin: 0,
    });

    // Arrow between steps
    if (i < steps.length - 1) {
      slide.addText("→", {
        x: s.x + 2.92, y: 3.0, w: 0.6, h: 0.5,
        fontSize: 22, fontFace: FONTS.body, color: COLORS.accentBlue, bold: true, align: "center", valign: "middle",
      });
    }
  });

  addFooter(slide, 2, TOTAL);
}

// ===== SLIDE 3: 認証フロー図 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("認証フロー", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });
  slide.addText("初回起動後に5つのステップで認証が完了します", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONTS.body, color: COLORS.textLight, margin: 0,
  });

  const flowSteps = [
    { num: "1", label: "利用規約同意", detail: "Terms of Serviceを確認してEnter" },
    { num: "2", label: "認証方法選択", detail: "Anthropicアカウント or APIキー" },
    { num: "3", label: "ブラウザログイン", detail: "自動でブラウザが開きOAuthフロー" },
    { num: "4", label: "認証コード入力", detail: "ブラウザに表示されたコードを貼り付け" },
    { num: "5", label: "認証完了", detail: "✓ 認証情報はローカルに保存される" },
  ];

  const startX = 0.65;
  const stepW = 1.6;
  const stepH = 0.72;
  const startY = 1.65;
  const gapY = 0.6;

  flowSteps.forEach((s, i) => {
    const y = startY + i * (stepH + gapY);
    const isLast = i === flowSteps.length - 1;

    // Circle
    slide.addShape(pres.shapes.OVAL, {
      x: startX, y: y + 0.06, w: 0.6, h: 0.6,
      fill: { color: isLast ? "2ECC71" : COLORS.accentBlue },
    });
    slide.addText(s.num, {
      x: startX, y: y + 0.06, w: 0.6, h: 0.6,
      fontSize: 16, fontFace: FONTS.header, color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0,
    });

    // Label box
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: startX + 0.75, y: y, w: stepW, h: stepH,
      fill: { color: isLast ? "E8FBF0" : "EBF5FF" },
      rectRadius: 0.06,
      line: { color: isLast ? "2ECC71" : COLORS.accentBlue, width: 0.6 },
    });
    slide.addText(s.label, {
      x: startX + 0.85, y: y + 0.06, w: stepW - 0.2, h: 0.32,
      fontSize: 13, fontFace: FONTS.body, color: COLORS.text, bold: true, margin: 0,
    });
    slide.addText(s.detail, {
      x: startX + 0.85, y: y + 0.38, w: stepW - 0.2, h: 0.28,
      fontSize: 9.5, fontFace: FONTS.body, color: COLORS.textSub, margin: 0,
    });

    // Arrow down
    if (!isLast) {
      slide.addText("▼", {
        x: startX + 0.05, y: y + stepH + 0.08, w: 0.5, h: 0.35,
        fontSize: 9, color: COLORS.textLight, align: "center", margin: 0,
      });
    }
  });

  // Right side info panel
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 4.2, y: 1.65, w: 5.3, h: 3.2,
    fill: { color: COLORS.grayBg },
    rectRadius: 0.1,
    line: { color: COLORS.grayBorder, width: 0.5 },
  });
  slide.addText("ポイント", {
    x: 4.45, y: 1.8, w: 4.8, h: 0.35,
    fontSize: 13, fontFace: FONTS.body, color: COLORS.accentBlue, bold: true, margin: 0,
  });
  const tips = [
    "無料プランでもすぐに認証できる",
    "認証はブラウザ経由のOAuth — APIキー不要",
    "認証情報は ~/.claude に保存される",
    "次回起動からはそのままclaude で使える",
    "複数マシンでも同じアカウントでOK",
  ];
  tips.forEach((tip, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 4.45, y: 2.28 + i * 0.44, w: 0.18, h: 0.18,
      fill: { color: COLORS.accentBlue },
    });
    slide.addText(tip, {
      x: 4.72, y: 2.22 + i * 0.44, w: 4.6, h: 0.3,
      fontSize: 11, fontFace: FONTS.body, color: COLORS.textSub, margin: 0,
    });
  });

  addFooter(slide, 3, TOTAL);
}

// ===== SLIDE 4: 料金プラン説明 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("料金プラン", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });
  slide.addText("用途と予算に合わせて3つから選べます", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONTS.body, color: COLORS.textLight, margin: 0,
  });

  const plans = [
    {
      name: "無料プラン",
      price: "¥0",
      badge: "初心者にはこれでOK",
      badgeColor: "2ECC71",
      features: ["基本機能すべて利用可", "回数制限あり（1日数十回程度）", "claude.ai アカウントで認証", "まず試すのに最適"],
      x: 0.5,
      accentColor: "2ECC71",
      bgColor: "F0FBF4",
      borderColor: "2ECC71",
      highlight: true,
    },
    {
      name: "Claude Pro",
      price: "$20/月",
      badge: null,
      badgeColor: null,
      features: ["無料プランの5倍以上の制限", "優先アクセス（混雑時も安定）", "claude.ai で課金", "本格的に使いたい方向け"],
      x: 3.55,
      accentColor: COLORS.accentBlue,
      bgColor: "EBF5FF",
      borderColor: COLORS.accentBlue,
      highlight: false,
    },
    {
      name: "APIキー方式",
      price: "従量課金",
      badge: null,
      badgeColor: null,
      features: ["使った分だけ課金", "制限なし・商用利用OK", "Anthropic Console で取得", "プロ・エンジニア向け"],
      x: 6.6,
      accentColor: COLORS.accentPurple,
      bgColor: "F3EEFF",
      borderColor: COLORS.accentPurple,
      highlight: false,
    },
  ];

  plans.forEach((plan) => {
    // Card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: plan.x, y: 1.6, w: 2.9, h: 3.25,
      fill: { color: plan.bgColor },
      rectRadius: 0.1,
      line: { color: plan.borderColor, width: plan.highlight ? 2 : 0.6 },
    });

    // Top accent bar
    slide.addShape(pres.shapes.RECTANGLE, {
      x: plan.x, y: 1.6, w: 2.9, h: 0.07,
      fill: { color: plan.accentColor },
    });

    // Plan name
    slide.addText(plan.name, {
      x: plan.x + 0.15, y: 1.72, w: 2.6, h: 0.38,
      fontSize: 16, fontFace: FONTS.body, color: plan.accentColor, bold: true, align: "center", margin: 0,
    });

    // Price
    slide.addText(plan.price, {
      x: plan.x + 0.15, y: 2.1, w: 2.6, h: 0.48,
      fontSize: 22, fontFace: FONTS.header, color: COLORS.text, bold: true, align: "center", margin: 0,
    });

    // Badge
    if (plan.badge) {
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: plan.x + 0.4, y: 2.62, w: 2.1, h: 0.3,
        fill: { color: plan.badgeColor },
        rectRadius: 0.12,
      });
      slide.addText(plan.badge, {
        x: plan.x + 0.4, y: 2.62, w: 2.1, h: 0.3,
        fontSize: 9, fontFace: FONTS.body, color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0,
      });
    }

    // Features
    const featY = plan.badge ? 3.02 : 2.68;
    plan.features.forEach((f, i) => {
      slide.addText("• " + f, {
        x: plan.x + 0.2, y: featY + i * 0.36, w: 2.55, h: 0.32,
        fontSize: 10, fontFace: FONTS.body, color: COLORS.textSub, margin: 0,
      });
    });
  });

  addFooter(slide, 4, TOTAL);
}

// ===== SLIDE 5: 起動と終了 =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("起動と終了", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, margin: 0,
  });
  slide.addText("覚えるコマンドはたった2つだけ", {
    x: 0.5, y: 1.2, w: 9, h: 0.3,
    fontSize: 12, fontFace: FONTS.body, color: COLORS.textLight, margin: 0,
  });

  // Start command box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 1.65, w: 4.5, h: 2.2,
    fill: { color: "0D1117" },
    rectRadius: 0.1,
  });
  // Window dots
  slide.addShape(pres.shapes.OVAL, { x: 0.72, y: 1.82, w: 0.14, h: 0.14, fill: { color: "FF5F57" } });
  slide.addShape(pres.shapes.OVAL, { x: 0.93, y: 1.82, w: 0.14, h: 0.14, fill: { color: "FFBD2E" } });
  slide.addShape(pres.shapes.OVAL, { x: 1.14, y: 1.82, w: 0.14, h: 0.14, fill: { color: "28C840" } });
  slide.addText("起動", {
    x: 0.5, y: 1.65, w: 4.5, h: 0.4,
    fontSize: 10, fontFace: FONTS.body, color: "888888", align: "center", valign: "middle", margin: 0,
  });
  slide.addText([
    { text: "$ ", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 16 } },
    { text: "claude", options: { color: "FFFFFF", fontFace: "Consolas", fontSize: 16, bold: true } },
  ], { x: 0.7, y: 2.2, w: 4.1, h: 0.5, valign: "middle", margin: 0 });
  slide.addText("→ 認証済みの場合はそのまま起動\n→ プロンプト入力待ち状態になる", {
    x: 0.7, y: 2.85, w: 4.1, h: 0.6,
    fontSize: 10, fontFace: "Consolas", color: "A0D2FF", lineSpacingMultiple: 1.5, margin: 0,
  });

  // End command box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 1.65, w: 4.5, h: 2.2,
    fill: { color: "0D1117" },
    rectRadius: 0.1,
  });
  slide.addShape(pres.shapes.OVAL, { x: 5.42, y: 1.82, w: 0.14, h: 0.14, fill: { color: "FF5F57" } });
  slide.addShape(pres.shapes.OVAL, { x: 5.63, y: 1.82, w: 0.14, h: 0.14, fill: { color: "FFBD2E" } });
  slide.addShape(pres.shapes.OVAL, { x: 5.84, y: 1.82, w: 0.14, h: 0.14, fill: { color: "28C840" } });
  slide.addText("終了", {
    x: 5.2, y: 1.65, w: 4.5, h: 0.4,
    fontSize: 10, fontFace: FONTS.body, color: "888888", align: "center", valign: "middle", margin: 0,
  });
  slide.addText([
    { text: "Ctrl+C", options: { color: "FFBD2E", fontFace: "Consolas", fontSize: 16, bold: true } },
    { text: "  または  ", options: { color: "888888", fontFace: "Consolas", fontSize: 14 } },
    { text: "/exit", options: { color: "7BF0B5", fontFace: "Consolas", fontSize: 16, bold: true } },
  ], { x: 5.4, y: 2.2, w: 4.1, h: 0.5, valign: "middle", margin: 0 });
  slide.addText("→ Ctrl+C : 割り込みで強制終了\n→ /exit : 正常終了コマンド", {
    x: 5.4, y: 2.85, w: 4.1, h: 0.6,
    fontSize: 10, fontFace: "Consolas", color: "A0D2FF", lineSpacingMultiple: 1.5, margin: 0,
  });

  // Note banner
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 4.1, w: 9, h: 0.7,
    fill: { color: "EBF5FF" },
    rectRadius: 0.06,
    line: { color: COLORS.accentBlue, width: 0.8 },
  });
  slide.addText([
    { text: "覚えておこう：", options: { color: COLORS.accentBlue, bold: true, fontFace: FONTS.body, fontSize: 12 } },
    { text: "認証情報は", options: { color: COLORS.textSub, fontFace: FONTS.body, fontSize: 12 } },
    { text: " ~/.claude ", options: { color: COLORS.accentBlue, fontFace: "Consolas", fontSize: 12, bold: true } },
    { text: "に保存されるため、次回起動時から", options: { color: COLORS.textSub, fontFace: FONTS.body, fontSize: 12 } },
    { text: "再認証は不要", options: { color: COLORS.text, fontFace: FONTS.body, fontSize: 12, bold: true } },
    { text: "です。", options: { color: COLORS.textSub, fontFace: FONTS.body, fontSize: 12 } },
  ], { x: 0.7, y: 4.1, w: 8.6, h: 0.7, valign: "middle", margin: 0 });

  addFooter(slide, 5, TOTAL);
}

// ===== SLIDE 6: まとめ =====
{
  const slide = pres.addSlide();
  addHeader(slide, "Claude Code講座 — セクション1");
  slide.addText("まとめ", {
    x: 0.5, y: 0.6, w: 9, h: 0.55,
    fontSize: 28, fontFace: FONTS.header, color: COLORS.text, bold: true, align: "center", margin: 0,
  });

  const points = [
    { num: "1", text: "npm install -g @anthropic-ai/claude-code でインストール完了。Node.js 18以上が必要。" },
    { num: "2", text: "claude --version で正しくインストールされたか確認できる。" },
    { num: "3", text: "claude で起動 → 利用規約同意 → ブラウザ認証 → 認証フロー完了。" },
    { num: "4", text: "まずは無料プランで十分。制限に当たったら Claude Pro（$20/月）を検討。" },
    { num: "5", text: "次回からは claude を打つだけで即起動。終了は Ctrl+C または /exit。" },
  ];

  let py = 1.25;
  points.forEach((p) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.0, y: py, w: 8.0, h: 0.62,
      fill: { color: COLORS.grayBg },
      rectRadius: 0.06,
    });
    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 1.15, y: py + 0.1, w: 0.42, h: 0.42,
      fill: { color: COLORS.accentBlue },
    });
    slide.addText(p.num, {
      x: 1.15, y: py + 0.1, w: 0.42, h: 0.42,
      fontSize: 13, fontFace: FONTS.accent, color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0,
    });
    slide.addText(p.text, {
      x: 1.7, y: py + 0.1, w: 7.0, h: 0.42,
      fontSize: 11.5, fontFace: FONTS.body, color: COLORS.textSub, lineSpacingMultiple: 1.3, valign: "middle", margin: 0,
    });
    py += 0.72;
  });

  // Next hint
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.5, y: py + 0.1, w: 7.0, h: 0.52,
    fill: { color: "FFFFFF" },
    line: { color: COLORS.grayBorder, width: 0.5 },
    rectRadius: 0.04,
  });
  slide.addText([
    { text: "次の動画 → ", options: { color: COLORS.textLight } },
    { text: "5分間で「動くアプリ」を自動で作らせてみよう！", options: { color: COLORS.accentBlue, bold: true } },
  ], { x: 1.5, y: py + 0.1, w: 7.0, h: 0.52, fontSize: 11, fontFace: FONTS.body, align: "center", valign: "middle", margin: 0 });

  addFooter(slide, 6, TOTAL);
}

pres.writeFile({ fileName: "/Users/tchytky/Desktop/claude-learning/slide-yamls/CC_S1_V4.pptx" })
  .then(() => console.log("Done: CC_S1_V4.pptx"))
  .catch((err) => console.error(err));
