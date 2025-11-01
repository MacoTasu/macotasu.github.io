#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// コマンドライン引数からタイトルを取得
const title = process.argv[2];

if (!title) {
  console.error('❌ タイトルを指定してください');
  console.log('使い方: npm run new-post "記事のタイトル"');
  process.exit(1);
}

// 現在の日付を取得
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const dateString = `${year}-${month}-${day}`;

// URLに使用できる形式のslugを生成
// 日本語の場合は空文字列になる可能性があるので、その場合はランダムな文字列を使用
let slug = title
  .toLowerCase()
  .replace(/[^\w\s-]/g, '') // 特殊文字を削除
  .replace(/\s+/g, '-')     // スペースをハイフンに変換
  .replace(/-+/g, '-')      // 連続するハイフンを1つに
  .trim();

// slugが空の場合（日本語タイトルなど）、ランダムな文字列を生成
if (!slug) {
  slug = Math.random().toString(36).substring(2, 10);
}

const filename = `${dateString}-${slug}.md`;
const filepath = path.join(__dirname, '..', 'src', 'content', 'blog', filename);

// フロントマターを含むテンプレート
const template = `---
title: "${title}"
description: ""
date: ${dateString}
tags: []
draft: false
---

# ${title}

ここに本文を書いてください。
`;

// ファイルが既に存在する場合はエラー
if (fs.existsSync(filepath)) {
  console.error(`❌ ファイルが既に存在します: ${filename}`);
  process.exit(1);
}

// ファイルを作成
fs.writeFileSync(filepath, template, 'utf-8');

console.log('✅ 新しい記事を作成しました:');
console.log(`   📝 ${filename}`);
console.log(`   📂 ${filepath}`);
console.log('');
console.log('次のステップ:');
console.log('1. エディタでファイルを開いて編集');
console.log('2. description と tags を設定');
console.log('3. 本文を Markdown で記述');
console.log('4. npm run dev でプレビュー確認');
