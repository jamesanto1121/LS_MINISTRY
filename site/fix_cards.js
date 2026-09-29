const fs = require('fs');

const files = [
  'site/index.html',
  'site/our_church.html',
  'site/ministries.html',
  'site/sermons.html',
  'site/events.html',
  'site/index_ta.html',
  'site/our_church_ta.html',
  'site/ministries_ta.html',
  'site/sermons_ta.html',
  'site/events_ta.html',
  'site/contact.html',
  'site/ta/index.html'
];

const replacements = [
  [/shadow-soft hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-outline-variant\/20/g, 'border border-cyan-200 shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300 overflow-hidden'],
  [/shadow-soft hover:shadow-card-hover transition-all duration-300 border border-outline-variant\/20/g, 'border border-cyan-200 shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300'],
  [/border border-outline-variant\/20 shadow-soft hover:shadow-card-hover transition-all duration-300/g, 'border border-cyan-200 shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300'],
  [/border border-outline-variant\/20 rounded-2xl overflow-hidden bg-white shadow-soft/g, 'border border-cyan-200 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300'],
  [/shadow-soft border border-outline-variant\/20 hover:shadow-card-hover/g, 'border border-cyan-200 shadow-md hover:shadow-lg hover:border-cyan-400'],
  [/shadow-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant\/20/g, 'border border-cyan-200 shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300'],
  [/shadow-lg hover:shadow-xl transition-all duration-300 border border-outline-variant\/20/g, 'border border-cyan-200 shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300'],
  [/shadow-soft border border-outline-variant\/30/g, 'border border-cyan-200 shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300'],
  [/bg-surface-container-low p-6 rounded-xl border border-outline-variant\/20/g, 'bg-surface-container-low p-6 rounded-xl border border-cyan-200 shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300'],
  [/bg-surface-container-high rounded-2xl overflow-hidden border border-outline-variant\/30/g, 'bg-surface-container-high rounded-2xl overflow-hidden border border-cyan-200 shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300'],
  [/shadow-soft hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300/g, 'shadow-md hover:shadow-lg hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300']
];

let totalFixed = 0;

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  for (const [pattern, replacement] of replacements) {
    const newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('FIXED ' + file);
    totalFixed++;
  }
}

console.log('Total files fixed: ' + totalFixed);
console.log('DONE');

</parameter=description>
Write clean Node.js script for global card styling