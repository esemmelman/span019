// Preterite forms: yo, tú, él/ella/usted, nosotros, vosotros, ellos/ustedes.
const conjugationVerbs = [
  {
    "verb": "Traer",
    "meaning": "to bring",
    "forms": [
      "traje",
      "trajiste",
      "trajo",
      "trajimos",
      "trajisteis",
      "trajeron"
    ],
    "object": " una brújula",
    "english": "brought a compass"
  },
  {
    "verb": "Andar",
    "meaning": "to walk",
    "forms": [
      "anduve",
      "anduviste",
      "anduvo",
      "anduvimos",
      "anduvisteis",
      "anduvieron"
    ],
    "object": " por los senderos",
    "english": "walked along the trails"
  },
  {
    "verb": "Saber",
    "meaning": "to know",
    "forms": [
      "supe",
      "supiste",
      "supo",
      "supimos",
      "supisteis",
      "supieron"
    ],
    "object": " la noticia",
    "english": "found out the news"
  },
  {
    "verb": "Venir",
    "meaning": "to come",
    "forms": [
      "vine",
      "viniste",
      "vino",
      "vinimos",
      "vinisteis",
      "vinieron"
    ],
    "object": " a la escuela",
    "english": "came to school"
  },
  {
    "verb": "Decir",
    "meaning": "to say / to tell",
    "forms": [
      "dije",
      "dijiste",
      "dijo",
      "dijimos",
      "dijisteis",
      "dijeron"
    ],
    "object": " la verdad",
    "english": "told the truth"
  },
  {
    "verb": "Poner",
    "meaning": "to put / to place",
    "forms": [
      "puse",
      "pusiste",
      "puso",
      "pusimos",
      "pusisteis",
      "pusieron"
    ],
    "object": " la linterna en la mesa",
    "english": "put the flashlight on the table"
  },
  {
    "verb": "Estar",
    "meaning": "to be (state or location)",
    "forms": [
      "estuve",
      "estuviste",
      "estuvo",
      "estuvimos",
      "estuvisteis",
      "estuvieron"
    ],
    "object": " en el desierto",
    "english": "was in the desert",
    "plural": "were in the desert"
  },
  {
    "verb": "Tener",
    "meaning": "to have",
    "forms": [
      "tuve",
      "tuviste",
      "tuvo",
      "tuvimos",
      "tuvisteis",
      "tuvieron"
    ],
    "object": " que estudiar",
    "english": "had to study"
  },
  {
    "verb": "Querer",
    "meaning": "to want",
    "forms": [
      "quise",
      "quisiste",
      "quiso",
      "quisimos",
      "quisisteis",
      "quisieron"
    ],
    "object": " ir al baile",
    "english": "wanted to go to the dance"
  },
  {
    "verb": "Ser",
    "meaning": "to be (identity or characteristics)",
    "forms": [
      "fui",
      "fuiste",
      "fue",
      "fuimos",
      "fuisteis",
      "fueron"
    ],
    "object": " parte del equipo",
    "english": "was part of the team",
    "plural": "were part of the team"
  },
  {
    "verb": "Ir",
    "meaning": "to go",
    "forms": [
      "fui",
      "fuiste",
      "fue",
      "fuimos",
      "fuisteis",
      "fueron"
    ],
    "object": " a Costa Rica",
    "english": "went to Costa Rica"
  },
  {
    "verb": "Hacer",
    "meaning": "to do / to make",
    "forms": [
      "hice",
      "hiciste",
      "hizo",
      "hicimos",
      "hicisteis",
      "hicieron"
    ],
    "object": " la tarea",
    "english": "did the homework"
  },
  {
    "verb": "Dar",
    "meaning": "to give",
    "forms": [
      "di",
      "diste",
      "dio",
      "dimos",
      "disteis",
      "dieron"
    ],
    "object": " mi número de teléfono",
    "english": "gave my phone number"
  },
  {
    "verb": "Ver",
    "meaning": "to see",
    "forms": [
      "vi",
      "viste",
      "vio",
      "vimos",
      "visteis",
      "vieron"
    ],
    "object": " la inundación",
    "english": "saw the flood"
  }
];
const conjugationPeople = [
  { spanish: 'Yo', form: 0, english: 'I', be: 'am' },
  { spanish: 'Tú', form: 1, english: 'You', be: 'are' },
  { spanish: 'Él', form: 2, english: 'He', be: 'is', third: true },
  { spanish: 'Ella', form: 2, english: 'She', be: 'is', third: true },
  { spanish: 'Usted', form: 2, english: 'You', be: 'are' },
  { spanish: 'Nosotros', form: 3, english: 'We', be: 'are' },
  { spanish: 'Nosotras', form: 3, english: 'We', be: 'are' },
  { spanish: 'Vosotros', form: 4, english: 'You all' },
  { spanish: 'Vosotras', form: 4, english: 'You all' },
  { spanish: 'Ellos', form: 5, english: 'They', be: 'are' },
  { spanish: 'Ellas', form: 5, english: 'They', be: 'are' },
  { spanish: 'Ustedes', form: 5, english: 'You all', be: 'are' },
];

function conjugationSentence(verb, person) {
  const singular = person.form === 0 || person.spanish === 'Él' || person.spanish === 'Ella';
  const englishVerb = verb.plural && !singular ? verb.plural : verb.english;
  return {
    spanish: `${person.spanish} ${verb.forms[person.form]}${verb.object || ''}.`,
    english: `${person.english} ${englishVerb}.`,
  };
}

const conjugationContainer = document.getElementById('conjugation-examples');
for (const verb of conjugationVerbs) {
  const article = document.createElement('article');
  article.className = 'conjugation-verb';
  const heading = document.createElement('h3');
  const spanishHeading = document.createElement('span');
  spanishHeading.lang = 'es';
  spanishHeading.textContent = verb.verb;
  heading.append(spanishHeading, ` — ${verb.meaning}`);
  article.append(heading);
  const list = document.createElement('dl');
  for (const person of conjugationPeople) {
    const sentence = conjugationSentence(verb, person);
    const pair = document.createElement('div');
    pair.className = 'conjugation-pair';
    const spanish = document.createElement('dt');
    spanish.lang = 'es';
    spanish.textContent = sentence.spanish;
    const english = document.createElement('dd');
    english.textContent = sentence.english;
    pair.append(spanish, english);
    list.append(pair);
  }
  article.append(list);
  conjugationContainer.append(article);
}
