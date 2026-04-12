#!/usr/bin/env node
/**
 * giscus用Discussion一括作成スクリプト（冪等）
 *
 * 前提:
 *   - gh CLI認証済み (gh auth login)
 *   - リポジトリがpublicでDiscussions有効化済み
 *   - giscus App (https://github.com/apps/giscus) がリポジトリにインストール済み
 *   - "Video Reviews" カテゴリが作成済み
 *     https://github.com/TakuyaTsuchiya/claude-learning/discussions/categories
 *
 * やること:
 *   1. "Video Reviews"カテゴリIDを取得
 *   2. HTMLのcategoryId placeholder (__CATEGORY_ID__) を置換（必要時のみ）
 *   3. curriculum-review.htmlから動画リスト(S1-V1 ~)を抽出
 *   4. 既存Discussionを取得して、未作成の動画ぶんだけ新規Discussion作成
 *
 * 使い方:
 *   node tasks/setup-giscus.js
 *
 * 動画を追加した後に再実行しても、既存Discussionはスキップして新規分だけ作成する。
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const REPO_OWNER = 'TakuyaTsuchiya';
const REPO_NAME = 'claude-learning';
const REPO_ID = 'R_kgDOR3AOBw';
const CATEGORY_NAME = 'Video Reviews';
const SITE_URL = 'https://takuyatsuchiya.github.io/claude-learning/curriculum-review.html';
const HTML_FILE = path.join(__dirname, '..', 'docs', 'curriculum-review.html');

function gh(args) {
  return execFileSync('gh', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
}

function fetchCategoryId() {
  const query = `query { repository(owner: "${REPO_OWNER}", name: "${REPO_NAME}") { discussionCategories(first: 30) { nodes { id name } } } }`;
  const data = JSON.parse(gh(['api', 'graphql', '-f', `query=${query}`]));
  const cat = data.data.repository.discussionCategories.nodes.find(n => n.name === CATEGORY_NAME);
  if (!cat) {
    throw new Error(`カテゴリ "${CATEGORY_NAME}" が見つかりません。先に https://github.com/${REPO_OWNER}/${REPO_NAME}/discussions/categories/new で作成してください。`);
  }
  return cat.id;
}

function patchHtmlCategoryId(categoryId) {
  const html = fs.readFileSync(HTML_FILE, 'utf8');
  if (!html.includes('__CATEGORY_ID__')) return false;
  fs.writeFileSync(HTML_FILE, html.replace(/__CATEGORY_ID__/g, categoryId));
  return true;
}

function extractVideos() {
  const html = fs.readFileSync(HTML_FILE, 'utf8');
  const sectionRegex = /<div class="section [^"]*" id="s(\d+)">[\s\S]*?(?=<div class="section |<div class="footnote|<!--\s*END|<script|$)/g;
  const titleRegex = /<div class="video-title">([^<]+)<\/div>/g;
  const results = [];
  let m;
  while ((m = sectionRegex.exec(html)) !== null) {
    const secNum = m[1];
    const secContent = m[0];
    titleRegex.lastIndex = 0;
    let vNum = 0, t;
    while ((t = titleRegex.exec(secContent)) !== null) {
      vNum++;
      results.push({ key: `S${secNum}-V${vNum}`, title: t[1].trim() });
    }
  }
  return results;
}

function fetchExistingDiscussions(categoryId) {
  const titles = new Set();
  let cursor = null;
  // ページネーション（100件超える将来対応）
  while (true) {
    const after = cursor ? `, after: "${cursor}"` : '';
    const query = `query { repository(owner: "${REPO_OWNER}", name: "${REPO_NAME}") { discussions(first: 100, categoryId: "${categoryId}"${after}) { pageInfo { hasNextPage endCursor } nodes { title } } } }`;
    const data = JSON.parse(gh(['api', 'graphql', '-f', `query=${query}`]));
    for (const n of data.data.repository.discussions.nodes) titles.add(n.title);
    const pi = data.data.repository.discussions.pageInfo;
    if (!pi.hasNextPage) break;
    cursor = pi.endCursor;
  }
  return titles;
}

function createDiscussion(categoryId, video) {
  const body = `動画 **${video.key}: ${video.title}** のレビューコメント用Discussionです。\n\nレビューサイト: ${SITE_URL}`;
  const query = `mutation($repoId: ID!, $catId: ID!, $title: String!, $body: String!) { createDiscussion(input: { repositoryId: $repoId, categoryId: $catId, title: $title, body: $body }) { discussion { number url } } }`;
  const out = gh([
    'api', 'graphql',
    '-f', `query=${query}`,
    '-f', `repoId=${REPO_ID}`,
    '-f', `catId=${categoryId}`,
    '-f', `title=${video.key}`,
    '-f', `body=${body}`,
  ]);
  return JSON.parse(out).data.createDiscussion.discussion;
}

function main() {
  console.log(`==> Step 1: "${CATEGORY_NAME}" カテゴリID取得`);
  const categoryId = fetchCategoryId();
  console.log(`    Category ID: ${categoryId}`);

  console.log(`\n==> Step 2: HTMLのcategoryId placeholder置換`);
  console.log(`    ${patchHtmlCategoryId(categoryId) ? '置換完了' : '置換不要（すでに設定済み）'}`);

  console.log(`\n==> Step 3: 動画リスト抽出`);
  const videos = extractVideos();
  console.log(`    ${videos.length}本の動画を検出`);

  console.log(`\n==> Step 4: 既存Discussion取得`);
  const existing = fetchExistingDiscussions(categoryId);
  console.log(`    既存 ${existing.size}件`);

  console.log(`\n==> Step 5: 不足分のDiscussionを作成`);
  let created = 0, skipped = 0, failed = 0;
  for (const v of videos) {
    if (existing.has(v.key)) {
      console.log(`    [SKIP] ${v.key}`);
      skipped++;
      continue;
    }
    try {
      const d = createDiscussion(categoryId, v);
      console.log(`    [OK]   ${v.key} → #${d.number}`);
      created++;
    } catch (e) {
      const msg = (e.stderr || e.message || '').toString().split('\n')[0];
      console.log(`    [ERR]  ${v.key}: ${msg}`);
      failed++;
    }
  }

  console.log(`\n==> 完了: 作成=${created}, スキップ=${skipped}, 失敗=${failed}`);
}

main();
