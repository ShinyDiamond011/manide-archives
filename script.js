/* ══════════════════════════════════════════
   ABIYAN ARCHIVES — script.js
   Requires: words.js loaded before this file
   All dictionary entries use the key "manide"
══════════════════════════════════════════ */

// ── ELEMENT REFS ─────────────────────────
const inputEl        = document.getElementById('inputWord');
const outputEl       = document.getElementById('outputWord');
const phoneticEl     = document.getElementById('phoneticGuide');
const langSel        = document.getElementById('sourceLang');
const transBtn       = document.getElementById('translateBtn');
const audioBtn       = document.getElementById('audioPlayBtn');
const navInput       = document.getElementById('navSearchInput');
const navBtn         = document.getElementById('navSearchBtn');
const wordTableBody  = document.getElementById('wordTableBody');
const wordListSearch = document.getElementById('wordListSearch');
const filterChips    = document.getElementById('filterChips');

let currentWord    = null;  // full matched dictionary entry
let activeCategory = 'all';

// ══════════════════════════════════════════
// AUDIO PLAYBACK
// ── Plays the Manide MP3 if it exists.
// ── Falls back silently if the file is
//    missing — no alert, just a console note.
// ══════════════════════════════════════════
function playAudio(audioFile) {
  if (!audioFile) return;
  const audio = new Audio(audioFile);
  audio.play().catch(() => {
    console.warn('Audio file not found:', audioFile);
    // Uncomment the line below if you want a visible warning while testing:
    // alert('Audio not found: ' + audioFile);
  });
}

// ══════════════════════════════════════════
// TRANSLATOR
// ══════════════════════════════════════════
function doTranslate(query) {
  if (!query) return;

  const lang = langSel.value;
  const q    = query.trim().toLowerCase();

  const result = dictionary.find(w =>
    lang === 'filipino'
      ? w.filipino.toLowerCase() === q
      : w.english.toLowerCase()  === q
  );

  if (result) {
    outputEl.textContent = result.manide;
    outputEl.classList.remove('empty');
    phoneticEl.textContent = result.phonetic + '   ·   ' + result.category;
    currentWord = result;
  } else {
    outputEl.textContent = 'Word not yet in the archive.';
    outputEl.classList.add('empty');
    phoneticEl.textContent = '— This word has not been documented yet —';
    currentWord = null;
  }
}

// Translate button
transBtn.addEventListener('click', () => doTranslate(inputEl.value.trim()));

// Enter key in textarea
inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); doTranslate(inputEl.value.trim()); }
});

// Swap language button
document.getElementById('swapBtn').addEventListener('click', () => {
  langSel.value = langSel.value === 'filipino' ? 'english' : 'filipino';
  inputEl.placeholder = langSel.value === 'filipino'
    ? 'Type here… (e.g. salamat, kumain, maganda)'
    : 'Type here… (e.g. thank you, eat, beautiful)';
});

// ── Translator audio button ───────────────
audioBtn.addEventListener('click', () => {
  if (currentWord) playAudio(currentWord.audio);
});

// ══════════════════════════════════════════
// WORD TABLE
// ══════════════════════════════════════════
function buildWordTable(data) {
  wordTableBody.innerHTML = '';

  if (data.length === 0) {
    wordTableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center;color:var(--text-mid);padding:32px;font-style:italic;">
          No words found.
        </td>
      </tr>`;
    return;
  }

  data.forEach(w => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${w.english}</td>
      <td>${w.filipino}</td>
      <td>${w.manide}</td>
      <td>${w.phonetic}</td>
      <td>
        <button class="table-play-btn" data-audio="${w.audio}">▶ Listen</button>
      </td>
    `;
    wordTableBody.appendChild(tr);
  });

  // Manide MP3 play buttons
  wordTableBody.querySelectorAll('.table-play-btn').forEach(btn => {
    btn.addEventListener('click', () => playAudio(btn.getAttribute('data-audio')));
  });
}

function getFilteredWords() {
  const searchVal = wordListSearch ? wordListSearch.value.trim().toLowerCase() : '';
  return dictionary.filter(w => {
    const catMatch    = activeCategory === 'all' || w.category === activeCategory;
    const searchMatch = !searchVal ||
      w.english.toLowerCase().includes(searchVal)  ||
      w.filipino.toLowerCase().includes(searchVal) ||
      w.manide.toLowerCase().includes(searchVal);
    return catMatch && searchMatch;
  });
}

function refreshTable() {
  buildWordTable(getFilteredWords());
}

// ── Category filter chips ─────────────────
if (filterChips) {
  filterChips.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.getAttribute('data-cat');
      refreshTable();
    });
  });
}

// ── Word list search box ──────────────────
if (wordListSearch) {
  wordListSearch.addEventListener('input', refreshTable);
}

// ── Category cards → filter + scroll ─────
document.querySelectorAll('.cat-card[data-filter]').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const cat = card.getAttribute('data-filter');
    activeCategory = cat;
    if (filterChips) {
      filterChips.querySelectorAll('.chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-cat') === cat);
      });
    }
    refreshTable();
    document.getElementById('translator').scrollIntoView({ behavior: 'smooth' });
  });
});

// ══════════════════════════════════════════
// ORTHOGRAPHY LISTEN BUTTONS
// ══════════════════════════════════════════
document.querySelectorAll('.play-small').forEach(btn => {
  btn.addEventListener('click', () => {
    playAudio(btn.getAttribute('data-audio'));
  });
});

// ══════════════════════════════════════════
// DESKTOP NAVBAR SEARCH
// navInput / navBtn may be null on mobile
// since nav.nav-desktop is hidden via CSS,
// but the elements still exist in the DOM.
// ══════════════════════════════════════════
function navSearch() {
  if (!navInput) return;
  const q = navInput.value.trim();
  if (!q) return;
  langSel.value = 'english';
  document.getElementById('translator').scrollIntoView({ behavior: 'smooth' });
  inputEl.value = q;
  setTimeout(() => doTranslate(q), 500);
}

if (navBtn)   navBtn.addEventListener('click', navSearch);
if (navInput) navInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') navSearch(); });

// ══════════════════════════════════════════
// NAVBAR ACTIVE LINK HIGHLIGHT (desktop)
// ══════════════════════════════════════════
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + entry.target.id
          ? 'var(--gold)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
buildWordTable(dictionary);