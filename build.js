// Generate the study sheet using span018's layout and this lesson's verb bank.
const fs = require('node:fs');
const path = require('node:path');
const verbs = JSON.parse(fs.readFileSync(path.join(__dirname, 'verbs.json'), 'utf8'));
const subjects = ['yo', 'tú', 'él / ella / usted', 'nosotros / nosotras', 'vosotros / vosotras', 'ellos / ellas / ustedes'];
const escape = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
const cards = verbs.map((verb, number) => {
  const columns = ['present', 'preterite'].map(tense => {
    if (verb[tense].length !== subjects.length) throw new Error(`Missing forms: ${verb.verb} ${tense}`);
    const label = tense === 'present' ? 'Present' : 'Preterite';
    const rows = subjects.map((subject, i) => `<li><span class="subject">${subject}</span><strong>${escape(verb[tense][i])}</strong></li>`).join('');
    return `<section class="tense ${tense}" aria-label="${escape(verb.verb)}: ${label}"><h3>${label}<small>${tense === 'present' ? 'Presente' : 'Pretérito'}</small></h3><ul lang="es">${rows}</ul></section>`;
  }).join('');
  return `<article class="verb" data-search="${escape(verb.verb + ' ' + verb.meaning)}"><header><span class="number">${String(number + 1).padStart(2, '0')}</span><h2><span lang="es">${escape(verb.verb)}</span><span lang="en">— ${escape(verb.meaning)}</span></h2></header><div class="columns">${columns}</div></article>`;
}).join('');
const template = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
fs.writeFileSync(path.join(__dirname, 'index.html'), template.replace('CARDS', cards));
console.log(`Generated ${verbs.length} verb cards with ${verbs.length * 12} conjugations.`);
