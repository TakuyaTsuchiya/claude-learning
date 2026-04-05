require("dotenv").config({ path: __dirname + "/../.env" });

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const PARENT_PAGE_ID = "33928d95-3b68-8016-84a2-fd5b80fed9a6";

const headers = {
  Authorization: `Bearer ${NOTION_API_KEY}`,
  "Content-Type": "application/json",
  "Notion-Version": "2022-06-28",
};

// WBS tasks from gantt-chart.md
const tasks = [
  // Phase 1: 準備・企画
  { num: "1.1", phase: "Phase 1: 準備・企画", name: "動画構成FIX（カリキュラム最終確認）", assignee: "土屋+川島", start: "2026-04-05", end: "2026-04-07", dep: "", status: "未着手" },
  { num: "1.2", phase: "Phase 1: 準備・企画", name: "制作ワークフロー確定・役割分担", assignee: "土屋", start: "2026-04-05", end: "2026-04-06", dep: "", status: "未着手" },
  { num: "1.3", phase: "Phase 1: 準備・企画", name: "川島さんGitHub招待・環境共有", assignee: "土屋", start: "2026-04-05", end: "2026-04-05", dep: "", status: "未着手" },
  { num: "1.4", phase: "Phase 1: 準備・企画", name: "川端さん収録スケジュール確保（3日間）", assignee: "土屋", start: "2026-04-05", end: "2026-04-07", dep: "", status: "未着手" },
  { num: "1.5", phase: "Phase 1: 準備・企画", name: "技術仕様確認（ネイティブインストーラー等）", assignee: "川島", start: "2026-04-05", end: "2026-04-07", dep: "", status: "未着手" },
  { num: "1.6", phase: "Phase 1: 準備・企画", name: "S1構成レビュー（パイロット）", assignee: "土屋+川島", start: "2026-04-07", end: "2026-04-09", dep: "1.1", status: "未着手" },

  // Phase 2: 台本FIX・スライド生成
  { num: "2.1", phase: "Phase 2: 台本FIX・スライド生成", name: "S1 台本レビュー＆FIX", assignee: "土屋+川島", start: "2026-04-08", end: "2026-04-10", dep: "1.6", status: "未着手" },
  { num: "2.2", phase: "Phase 2: 台本FIX・スライド生成", name: "S1 スライドpptx生成", assignee: "Claude Code", start: "2026-04-10", end: "2026-04-10", dep: "2.1", status: "未着手" },
  { num: "2.3", phase: "Phase 2: 台本FIX・スライド生成", name: "S2 台本レビュー＆FIX", assignee: "土屋+川島", start: "2026-04-09", end: "2026-04-11", dep: "1.1", status: "未着手" },
  { num: "2.4", phase: "Phase 2: 台本FIX・スライド生成", name: "S2 スライドpptx生成", assignee: "Claude Code", start: "2026-04-11", end: "2026-04-11", dep: "2.3", status: "未着手" },
  { num: "2.5", phase: "Phase 2: 台本FIX・スライド生成", name: "S3-S4 台本レビュー＆FIX", assignee: "土屋+川島", start: "2026-04-11", end: "2026-04-13", dep: "1.1", status: "未着手" },
  { num: "2.6", phase: "Phase 2: 台本FIX・スライド生成", name: "S3-S4 スライドpptx生成", assignee: "Claude Code", start: "2026-04-13", end: "2026-04-13", dep: "2.5", status: "未着手" },
  { num: "2.7", phase: "Phase 2: 台本FIX・スライド生成", name: "S5-S6 台本レビュー＆FIX", assignee: "土屋+川島", start: "2026-04-13", end: "2026-04-16", dep: "1.1", status: "未着手" },
  { num: "2.8", phase: "Phase 2: 台本FIX・スライド生成", name: "S5-S6 スライドpptx生成", assignee: "Claude Code", start: "2026-04-16", end: "2026-04-16", dep: "2.7", status: "未着手" },

  // Phase 3: 収録・生成
  { num: "3.1", phase: "Phase 3: 収録・生成", name: "S1-S2 音声収録（マイク）", assignee: "川端", start: "2026-04-14", end: "2026-04-15", dep: "2.2, 2.4", status: "未着手" },
  { num: "3.2", phase: "Phase 3: 収録・生成", name: "S1-S2 アバター映像生成", assignee: "川端", start: "2026-04-15", end: "2026-04-16", dep: "3.1", status: "未着手" },
  { num: "3.3", phase: "Phase 3: 収録・生成", name: "S3-S4 音声収録", assignee: "川端", start: "2026-04-16", end: "2026-04-17", dep: "2.6", status: "未着手" },
  { num: "3.4", phase: "Phase 3: 収録・生成", name: "S3-S4 アバター映像生成", assignee: "川端", start: "2026-04-17", end: "2026-04-17", dep: "3.3", status: "未着手" },
  { num: "3.5", phase: "Phase 3: 収録・生成", name: "S5-S6 音声収録", assignee: "川端", start: "2026-04-18", end: "2026-04-19", dep: "2.8", status: "未着手" },
  { num: "3.6", phase: "Phase 3: 収録・生成", name: "S5-S6 アバター映像生成", assignee: "川端", start: "2026-04-19", end: "2026-04-19", dep: "3.5", status: "未着手" },

  // Phase 4: 収録完了・編集開始
  { num: "4.1", phase: "Phase 4: 収録完了・編集", name: "クイズ・課題作成（全セクション）", assignee: "土屋", start: "2026-04-14", end: "2026-04-19", dep: "2.1", status: "未着手" },
  { num: "4.2", phase: "Phase 4: 収録完了・編集", name: "動画編集・最終チェック", assignee: "川端/土屋", start: "2026-04-16", end: "2026-04-21", dep: "3.2", status: "未着手" },
  { num: "4.3", phase: "Phase 4: 収録完了・編集", name: "動画パッケージ完成", assignee: "土屋", start: "2026-04-21", end: "2026-04-21", dep: "4.2", status: "未着手" },

  // Phase 5: 完成・アップロード
  { num: "5.1", phase: "Phase 5: 完成・アップロード", name: "動画をWisdomBase LMSへアップロード", assignee: "土屋", start: "2026-04-21", end: "2026-04-22", dep: "4.3", status: "未着手" },
  { num: "5.2", phase: "Phase 5: 完成・アップロード", name: "クイズ・課題をLMSへアップロード", assignee: "土屋", start: "2026-04-22", end: "2026-04-23", dep: "4.1, 5.1", status: "未着手" },

  // Phase 6: 提供開始
  { num: "6.1", phase: "Phase 6: 提供開始", name: "受講生への提供準備・最終確認", assignee: "土屋", start: "2026-04-24", end: "2026-04-24", dep: "5.2", status: "未着手" },
  { num: "6.2", phase: "Phase 6: 提供開始", name: "講座提供開始", assignee: "-", start: "2026-05-01", end: "2026-05-01", dep: "6.1", status: "未着手" },
];

async function notionFetch(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(`Notion API error: ${res.status} ${JSON.stringify(err)}`);
  }
  return res.json();
}

async function createDatabase() {
  console.log("Creating database...");
  const db = await notionFetch("https://api.notion.com/v1/databases", {
    parent: { type: "page_id", page_id: PARENT_PAGE_ID },
    title: [{ type: "text", text: { content: "Claude Code講座 開発WBS" } }],
    properties: {
      "タスク名": { title: {} },
      "#": { rich_text: {} },
      "フェーズ": {
        select: {
          options: [
            { name: "Phase 1: 準備・企画", color: "blue" },
            { name: "Phase 2: 台本FIX・スライド生成", color: "purple" },
            { name: "Phase 3: 収録・生成", color: "green" },
            { name: "Phase 4: 収録完了・編集", color: "yellow" },
            { name: "Phase 5: 完成・アップロード", color: "orange" },
            { name: "Phase 6: 提供開始", color: "red" },
          ],
        },
      },
      "ステータス": {
        select: {
          options: [
            { name: "未着手", color: "default" },
            { name: "進行中", color: "blue" },
            { name: "完了", color: "green" },
            { name: "ブロック", color: "red" },
          ],
        },
      },
      "担当": { rich_text: {} },
      "期間": { date: {} },
      "依存": { rich_text: {} },
    },
  });
  console.log(`Database created: ${db.id}`);
  return db.id;
}

async function addTask(dbId, task) {
  await notionFetch("https://api.notion.com/v1/pages", {
    parent: { database_id: dbId },
    properties: {
      "タスク名": { title: [{ text: { content: task.name } }] },
      "#": { rich_text: [{ text: { content: task.num } }] },
      "フェーズ": { select: { name: task.phase } },
      "ステータス": { select: { name: task.status } },
      "担当": { rich_text: [{ text: { content: task.assignee } }] },
      "期間": { date: { start: task.start, end: task.end !== task.start ? task.end : null } },
      "依存": { rich_text: [{ text: { content: task.dep } }] },
    },
  });
  console.log(`  Added: ${task.num} ${task.name}`);
}

async function main() {
  try {
    const dbId = await createDatabase();

    console.log(`\nAdding ${tasks.length} tasks...`);
    for (const task of tasks) {
      await addTask(dbId, task);
      // Rate limit対策
      await new Promise((r) => setTimeout(r, 350));
    }

    console.log(`\nDone! ${tasks.length} tasks added to Notion.`);
    console.log(`Database ID: ${dbId}`);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
