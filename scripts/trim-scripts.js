const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'scripts-data.js');
let js = fs.readFileSync(filePath, 'utf8');
let match = js.match(/var SCRIPTS = ({[\s\S]*});?\s*$/);
let data = JSON.parse(match[1]);

function getTargetChars(duration) {
  let mins = parseInt(duration);
  return mins * 60 * 4; // 4字/秒
}

function trimContent(text, ratio) {
  // Split into sentences (Japanese period or newline)
  let sentences = text.split(/(?<=[。])\s*|\n+/).filter(s => s.trim());
  if (sentences.length <= 2) return text;

  // Remove filler patterns
  let cleaned = sentences.map(s => {
    return s
      // Remove over-polite filler
      .replace(/皆さん[、は]/g, '')
      .replace(/ぜひ[、。]/g, '')
      .replace(/実は[、]/g, '')
      .replace(/つまり[、]/g, '')
      .replace(/いわゆる/g, '')
      .replace(/もちろん[、]/g, '')
      .replace(/それでは[、]/g, '')
      .replace(/というわけで[、]/g, '')
      .replace(/ということで[、]/g, '')
      .replace(/と思います/g, 'です')
      .replace(/していきましょう/g, 'します')
      .replace(/していきます/g, 'します')
      .replace(/してみましょう/g, 'します')
      .replace(/してみてください/g, 'してください')
      .replace(/やってみましょう/g, 'やります')
      .replace(/見ていきましょう/g, '見ます')
      .replace(/確認していきます/g, '確認します')
      .replace(/ではさっそく/g, '')
      .replace(/さっそく/g, '')
      .replace(/それでは、/g, '')
      .replace(/、いかがでしょうか。/g, '。')
      .replace(/ぜひ活用してください。/g, '')
      .replace(/ぜひ試してみてください。/g, '')
      .trim();
  }).filter(s => s.length > 0);

  // If still over ratio, remove sentences that are:
  // - Repetitive summaries ("つまり〜", "要するに〜")
  // - Encouragement fillers ("安心してください", "心配ありません")
  // - Redundant transitions
  let result = cleaned.filter(s => {
    if (/^(要するに|つまり|言い換えると|簡単に言うと)/.test(s)) return false;
    if (/^(安心して|心配[はし]|大丈夫|ご安心)/.test(s)) return false;
    if (/^(では次|次に|続いて|それでは次)/.test(s) && s.length < 20) return false;
    return true;
  });

  return result.join('\n');
}

let trimmed = 0;
for (let key of Object.keys(data)) {
  let target = getTargetChars(data[key].meta.duration);
  let totalChars = 0;

  if (data[key].script) {
    data[key].script.forEach(s => {
      totalChars += (s.content || '').replace(/\n/g, '').length;
    });
  }

  // Skip if already within target
  if (totalChars <= target * 1.2) continue;

  let ratio = target / totalChars;

  if (data[key].script) {
    data[key].script.forEach(s => {
      if (!s.content || s.content.length < 10) return;

      let original = s.content;
      let cleaned = trimContent(original, ratio);

      // If still too long, do aggressive sentence removal
      // Keep first and last sentence, remove middle ones proportionally
      let sentences = cleaned.split(/\n+/).filter(x => x.trim());
      if (sentences.length > 3) {
        let keepCount = Math.max(2, Math.ceil(sentences.length * ratio));
        // Always keep first and last
        let middle = sentences.slice(1, -1);
        let keepMiddle = Math.max(0, keepCount - 2);
        // Keep evenly spaced middle sentences
        let step = middle.length / (keepMiddle + 1);
        let kept = [sentences[0]];
        for (let i = 0; i < keepMiddle; i++) {
          kept.push(middle[Math.floor(step * (i + 0.5))]);
        }
        kept.push(sentences[sentences.length - 1]);
        cleaned = kept.join('\n');
      }

      s.content = cleaned;
    });
    trimmed++;
  }
}

fs.writeFileSync(filePath, 'var SCRIPTS = ' + JSON.stringify(data, null, 2) + ';');
console.log('Trimmed ' + trimmed + ' videos');

// Verify
let js2 = fs.readFileSync(filePath, 'utf8');
let match2 = js2.match(/var SCRIPTS = ({[\s\S]*});?\s*$/);
let data2 = JSON.parse(match2[1]);

for (let key of Object.keys(data2)) {
  let totalChars = 0;
  let totalSecs = 0;
  if (data2[key].script) {
    data2[key].script.forEach(s => {
      totalChars += (s.content || '').replace(/\n/g, '').length;
      let sp = s.start.split(':').map(Number);
      let ep = s.end.split(':').map(Number);
      totalSecs += (ep[0]*60 + ep[1]) - (sp[0]*60 + sp[1]);
    });
  }
  let cps = totalSecs > 0 ? (totalChars / totalSecs).toFixed(1) : '?';
  let target = totalSecs * 4;
  let status = totalChars <= target * 1.2 ? 'OK' : 'OVER';
  console.log(key + ' | ' + totalChars + '字 | ' + cps + '字/秒 | ' + status);
}
