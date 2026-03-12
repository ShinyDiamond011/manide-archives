/*
  ═══════════════════════════════════════════════════════
  ABIYAN ARCHIVES — words.js
  Complete Manide vocabulary database.
  Structure: { english, filipino, manide, phonetic, audio, category }

  Sources:
  - Field interviews with Manide community members
    (Marilyn, Lionesa, Lanie, Lelia, Cheryl, Carmelita)
  - ManideWeb PDF research document

  NOTE: Some phonetics are approximated from spelling.
  Have a native speaker verify all entries before launch.

  IMPORTANT: "abiyan" and "bihog" are considered
  degrading terms by the community (they mean "alipin"/slave).
  Always refer to the people as "Manide" and the language
  as the "Manide language".
  ═══════════════════════════════════════════════════════
*/

const dictionary = [

  // ── NUMBERS ──────────────────────────────────────────
  { english: "one",     filipino: "isa",    manide: "Supeg", phonetic: "SU-peg",  audio: "audio/Numbers/Isa.mp3",    category: "numbers" },
  { english: "two",     filipino: "dalawa", manide: "Dawha", phonetic: "DAW-ha",  audio: "audio/Numbers/Dalawa.mp3", category: "numbers" },
  { english: "three",   filipino: "tatlo",  manide: "Tatlo", phonetic: "TAT-lo",  audio: "audio/Numbers/3.mp3",      category: "numbers" },
  { english: "four",    filipino: "apat",   manide: "Apat",  phonetic: "A-pat",   audio: "audio/Numbers/4.mp3",      category: "numbers" },
  { english: "five",    filipino: "lima",   manide: "Lima",  phonetic: "LI-ma",   audio: "audio/Numbers/5.mp3",      category: "numbers" },
  { english: "six",     filipino: "anim",   manide: "Anum",  phonetic: "A-num",   audio: "audio/Numbers/6.mp3",      category: "numbers" },
  { english: "seven",   filipino: "pito",   manide: "Pito",  phonetic: "PI-to",   audio: "audio/Numbers/7.mp3",      category: "numbers" },
  { english: "eight",   filipino: "walo",   manide: "Walo",  phonetic: "WA-lo",   audio: "audio/Numbers/8.mp3",      category: "numbers" },
  { english: "nine",    filipino: "siyam",  manide: "Siyam", phonetic: "SI-yam",  audio: "audio/Numbers/9.mp3",      category: "numbers" },
  { english: "ten",     filipino: "sampu",  manide: "Sampo", phonetic: "SAM-po",  audio: "audio/Numbers/10.mp3",     category: "numbers" },

  // ── GREETINGS & BASIC DAILY USE ──────────────────────
  { english: "hello",             filipino: "kumusta",         manide: "Kumusta ka de",     phonetic: "ku-MUS-ta ka de",      audio: "audio/BasicDaily/Hello.mp3",         category: "greetings" },
  { english: "goodbye",           filipino: "paalam",          manide: "Adi Kami de",       phonetic: "A-di KA-mi de",        audio: "audio/BasicDaily/Goodbye.mp3",       category: "greetings" },
  { english: "thank you",         filipino: "salamat",         manide: "Salamat de ka",     phonetic: "sa-LA-mat de ka",      audio: "audio/BasicDaily/ThankYou.mp3",     category: "greetings" },
  { english: "sorry",             filipino: "paumanhin",       manide: "Pasensya de ka",    phonetic: "pa-SEN-sya de ka",     audio: "audio/BasicDaily/Sorry.mp3",         category: "greetings" },
  { english: "excuse me",         filipino: "makikiraan",      manide: "Palakade ne ki an", phonetic: "pa-la-KA-de ne ki an", audio: "audio/BasicDaily/Excuseme.mp3",     category: "greetings" },
  { english: "good morning",      filipino: "magandang umaga", manide: "Abi abi",           phonetic: "A-bi A-bi",            audio: "audio/BasicDaily/Morning.mp3",       category: "greetings" },
  { english: "good night",        filipino: "magandang gabi",  manide: "Ipigisikdi",        phonetic: "i-pi-gi-SIK-di",       audio: "audio/BasicDaily/Night.mp3",         category: "greetings" },
  { english: "are you happy",     filipino: "masaya ka ba",    manide: "Nauumok ka",        phonetic: "na-u-U-mok ka",        audio: "audio/SimpleSentences/masayakaba.mp3",       category: "greetings" },
  { english: "i love you",        filipino: "mahal kita",      manide: "Mahal ki ka",       phonetic: "MA-hal ki ka",         audio: "audio/SimpleSentences/Mahalkita.mp3",         category: "greetings" },
  { english: "you are beautiful", filipino: "maganda ka",      manide: "Magayaon ka",       phonetic: "ma-ga-YA-on ka",       audio: "audio/SimpleSentences/magandaka.mp3",          category: "greetings" },

  // ── PEOPLE & FAMILY ──────────────────────────────────
  { english: "friend", filipino: "kaibigan", manide: "Kaiba",         phonetic: "ka-I-ba",         audio: "audio/BasicDaily/Friend.mp3", category: "family" },
  { english: "family", filipino: "pamilya",  manide: "Kamag anak ko", phonetic: "ka-mag A-nak ko", audio: "audio/BasicDaily/Family.mp3", category: "family" },
  // { english: "together",  filipino: "sama-sama", manide: "Magkakaateb", phonetic: "mag-ka-ka-A-teb", audio: "audio/together.mp3",  category: "family" },
  // { english: "companion", filipino: "kasama",    manide: "Magkakaateb", phonetic: "mag-ka-ka-A-teb", audio: "audio/companion.mp3", category: "family" },

  // ── ACTION WORDS ─────────────────────────────────────
  { english: "eat",      filipino: "kumain",     manide: "Kaon",              phonetic: "KA-on",                audio: "audio/BasicDaily/Eat.mp3",    category: "actions" },
  { english: "drink",    filipino: "uminom",     manide: "Inomin de",         phonetic: "i-NO-min de",          audio: "audio/BasicDaily/ToDrink.mp3",  category: "actions" },
  { english: "food",     filipino: "pagkain",    manide: "Pagkaon",           phonetic: "pag-KA-on",            audio: "audio/BasicDaily/Food.mp3",   category: "actions" },
  { english: "come",     filipino: "halika",     manide: "Pumahay ka de",     phonetic: "pu-MA-hay ka de",      audio: "audio/BasicDaily/Come.mp3",   category: "actions" },
  { english: "go",       filipino: "umalis",     manide: "Iglakad",           phonetic: "ig-LA-kad",            audio: "audio/BasicDaily/Go.mp3",     category: "actions" },
  { english: "walk",     filipino: "lumakad",    manide: "Kuldit",            phonetic: "KUL-dit",              audio: "audio/BasicDaily/Walk.mp3",   category: "actions" },
  { english: "run",      filipino: "tumakbo",    manide: "Igkoldis",          phonetic: "ig-KOL-dis",           audio: "audio/BasicDaily/Run.mp3",    category: "actions" },
  { english: "open",     filipino: "buksan",     manide: "Sadaan",            phonetic: "sa-DA-an",             audio: "audio/BasicDaily/Open.mp3",   category: "actions" },
  { english: "close",    filipino: "isara",      manide: "Sarado",            phonetic: "sa-RA-do",             audio: "audio/BasicDaily/Close.mp3",  category: "actions" },
  { english: "read",     filipino: "bumasa",     manide: "Basa",              phonetic: "BA-sa",                audio: "audio/BasicDaily/Read.mp3",   category: "actions" },
  { english: "write",    filipino: "sumulat",    manide: "Sulat",             phonetic: "SU-lat",               audio: "audio/BasicDaily/Write.mp3",  category: "actions" },
  { english: "see",      filipino: "tingnan",    manide: "Talo",              phonetic: "TA-lo",                audio: "audio/BasicDaily/See.mp3",    category: "actions" },
  { english: "hear",     filipino: "marinig",    manide: "Kalkal",            phonetic: "KAL-kal",              audio: "audio/BasicDaily/Hear.mp3",   category: "actions" },
  { english: "speak",    filipino: "magsalita",  manide: "Kado",              phonetic: "KA-do",                audio: "audio/BasicDaily/Speak.mp3",  category: "actions" },
  { english: "listen",   filipino: "makinig",    manide: "Magkalkal",         phonetic: "mag-KAL-kal",          audio: "audio/BasicDaily/Listen.mp3", category: "actions" },
  { english: "talk",     filipino: "kausap",     manide: "Kaduan",            phonetic: "ka-DU-an",             audio: "audio/ActionWords/Talk.mp3",            category: "actions" },
  { english: "laugh",    filipino: "tumawa",     manide: "Sagak",             phonetic: "SA-gak",               audio: "audio/ActionWords/laugh.mp3",           category: "actions" },
  { english: "cry",      filipino: "umiyak",     manide: "Ibil",              phonetic: "I-bil",                audio: "audio/ActionWords/cry.mp3",             category: "actions" },
  { english: "smile",    filipino: "ngumiti",    manide: "Okum",              phonetic: "O-kum",                audio: "audio/ActionWords/smile.mp3",           category: "actions" },
  { english: "shout",    filipino: "sumigaw",    manide: "Ulaw",              phonetic: "U-law",                audio: "audio/ActionWords/shout.mp3",           category: "actions" },
  { english: "whisper",  filipino: "bumubulong", manide: "Dengdeng",          phonetic: "deng-DENG",            audio: "audio/SimpleSentences/bumubulong.mp3",  category: "actions" },
  { english: "sing",     filipino: "umawit",     manide: "Awit",              phonetic: "A-wit",                audio: "audio/ActionWords/sing.mp3",            category: "actions" },
  { english: "dance",    filipino: "sumayaw",    manide: "Sayaw",             phonetic: "SA-yaw",               audio: "audio/ActionWords/dance.mp3",           category: "actions" },
  { english: "jump",     filipino: "tumalon",    manide: "Lukso",             phonetic: "LUK-so",               audio: "audio/ActionWords/jump.mp3",            category: "actions" },
  { english: "climb",    filipino: "umakyat",    manide: "Aknit",             phonetic: "AK-nit",               audio: "audio/ActionWords/climb.mp3",           category: "actions" },
  { english: "sleep",    filipino: "matulog",    manide: "Piges",             phonetic: "PI-ges",               audio: "audio/ActionWords/sleep.mp3",           category: "actions" },
  { english: "wake up",  filipino: "gumising",   manide: "Begkat",            phonetic: "BEG-kat",              audio: "audio/ActionWords/wake.mp3",            category: "actions" },
  { english: "teach",    filipino: "magturo",    manide: "Tudtudi",           phonetic: "tud-TU-di",            audio: "audio/ActionWords/teach.mp3",           category: "actions" },
  { english: "learn",    filipino: "matuto",     manide: "Aadal",             phonetic: "a-A-dal",              audio: "audio/ActionWords/learn.mp3",           category: "actions" },
  { english: "forget",   filipino: "malimutan",  manide: "Nalingawan",        phonetic: "na-li-NGA-wan",        audio: "audio/ActionWords/nakalimutanko.mp3",          category: "actions" },
  { english: "remember", filipino: "Naalala ko", manide: "Naintuman ko",      phonetic: "na-in-TU-man ko",      audio: "audio/SimpleSentences/naalalako.mp3",     category: "actions" },
  { english: "arrive",   filipino: "dumating",   manide: "Kakadetung payang", phonetic: "ka-ka-de-TUNG pa-yang", audio: "audio/ActionWords/arrive.mp3",         category: "actions" },
  { english: "leave",    filipino: "umalis",     manide: "Palakade",          phonetic: "pa-la-KA-de",          audio: "audio/ActionWords/leave.mp3",           category: "actions" },
  { english: "borrow",   filipino: "humiram",    manide: "Subli",             phonetic: "SUB-li",               audio: "audio/ActionWords/borrow.mp3",          category: "actions" },
  { english: "return",   filipino: "ibalik",     manide: "Pagsuni",           phonetic: "pag-SU-ni",            audio: "audio/SimpleSentences/ibalikkona.mp3", category: "actions" },
  { english: "improve",  filipino: "pagbutihin", manide: "Beley",             phonetic: "BE-ley",               audio: "audio/ActionWords/improve.mp3",         category: "actions" },
  { english: "ruin",     filipino: "sirain",     manide: "Isira",             phonetic: "i-SI-ra",              audio: "audio/ActionWords/ruin.mp3",            category: "actions" },
  { english: "choose",   filipino: "pumili",     manide: "Piliin",            phonetic: "pi-LI-in",             audio: "audio/ActionWords/choose.mp3",          category: "actions" },
  { english: "refuse",   filipino: "tumanggi",   manide: "Guseek",            phonetic: "GU-seek",              audio: "audio/ActionWords/refuse.mp3",          category: "actions" },
  { english: "share",    filipino: "magbahagi",  manide: "Pagiidinu",         phonetic: "pag-i-i-DI-nu",        audio: "audio/ActionWords/share.mp3",           category: "actions" },
  { english: "keep",     filipino: "itago",      manide: "Pag iimpis",        phonetic: "pag i-IM-pis",         audio: "audio/ActionWords/keep.mp3",            category: "actions" },

  // ── NATURE ───────────────────────────────────────────
  { english: "is it raining tomorrow", filipino: "maulan bukas", manide: "Magimes dumaak", phonetic: "ma-GI-mes du-MA-ak", audio: "audio/SimpleSentences/maulanbukas.mp3", category: "nature" },
  { english: "windy",                  filipino: "mahangin",     manide: "Mahitnew",       phonetic: "ma-HIT-new",         audio: "audio/SimpleSentences/Mahangin.mp3",    category: "nature" },

  // ── DESCRIPTIVE WORDS ────────────────────────────────
  { english: "fast",        filipino: "mabilis",     manide: "Makusog",       phonetic: "ma-KU-sog",         audio: "audio/BasicDaily/Fast.mp3",      category: "descriptive" },
  { english: "slow",        filipino: "mabagal",     manide: "Mabagal",       phonetic: "ma-BA-gal",         audio: "audio/BasicDaily/Slow.mp3",      category: "descriptive" },
  { english: "good",        filipino: "mabuti",      manide: "Magayun ugali", phonetic: "ma-GA-yun u-GA-li", audio: "audio/BasicDaily/Good.mp3",      category: "descriptive" },
  { english: "bad",         filipino: "masama",      manide: "Malaot",        phonetic: "ma-LA-ot",          audio: "audio/BasicDaily/Bad.mp3",       category: "descriptive" },
  { english: "safe",        filipino: "ligtas",      manide: "Ligtas",        phonetic: "LIG-tas",           audio: "audio/BasicDaily/Safe.mp3",      category: "descriptive" },
  { english: "dangerous",   filipino: "mapanganib",  manide: "Kakikipot",     phonetic: "ka-ki-KI-pot",      audio: "audio/BasicDaily/Dangerous.mp3", category: "descriptive" },
  { english: "annoying",    filipino: "nakakainis",  manide: "Magkaiinis ka", phonetic: "mag-ka-i-I-nis ka", audio: "audio/SimpleSentences/nakakainiska.mp3",  category: "descriptive" },
  { english: "you're ugly", filipino: "mapangit ka", manide: "Malaot ka",     phonetic: "ma-LA-ot ka",       audio: "audio/SimpleSentences/mapangitka.mp3",    category: "descriptive" },

  // ── DAILY LIFE ───────────────────────────────────────
  { english: "here",     filipino: "dito",     manide: "Dii",             phonetic: "DI-i",                audio: "audio/BasicDaily/Here.mp3",               category: "daily" },
  { english: "there",    filipino: "doon",     manide: "Daayu",           phonetic: "da-A-yu",             audio: "audio/BasicDaily/There.mp3",              category: "daily" },
  // { english: "far",   filipino: "malayo",   manide: "Daayu kamudan",   phonetic: "da-A-yu ka-MU-dan",   audio: "audio/far.mp3",                                      category: "daily" },
  { english: "today",    filipino: "ngayon",   manide: "Kumena",          phonetic: "ku-ME-na",            audio: "audio/BasicDaily/Today.mp3",              category: "daily" },
  { english: "tomorrow", filipino: "bukas",    manide: "Gumaak",          phonetic: "gu-MA-ak",            audio: "audio/BasicDaily/Tomorrow.mp3",           category: "daily" },
  { english: "noon",     filipino: "tanghali", manide: "Magayon admudto", phonetic: "ma-GA-yon ad-MUD-to", audio: "audio/SimpleSentences/magandangtanghali.mp3",      category: "daily" },

  // ── PHRASES ──────────────────────────────────────────
  { english: "what are you doing",               filipino: "anong ginagawa mo",        manide: "Wa ano gawa-gawa mo",       phonetic: "wa A-no GA-wa-GA-wa mo",        audio: "audio/SimpleSentences/Anongginagawamo.mp3",          category: "phrases" },
  { english: "what do you want to eat",          filipino: "anong gusto mong kainin",  manide: "Wa ano ibog mo ikaon",      phonetic: "wa A-no I-bog mo i-KA-on",      audio: "audio/SimpleSentences/Anonggustomongpagkain.mp3",   category: "phrases" },
  { english: "can you come with me", filipino: "pwede mo akong samahan", manide: "Atebanikmo", phonetic: "a-te-BA-nik-mo", audio: "audio/SimpleSentences/pwedemobaakongsamahan.mp3", category: "phrases" },
  { english: "is there anything you want to say", filipino: "may gusto ka bang sabihin", manide: "Igakang ibog a igkado", phonetic: "i-GA-kang I-bog a ig-KA-do",   audio: "audio/SimpleSentences/maygustokabangsabihin.mp3", category: "phrases" },
  { english: "listen to me",                     filipino: "makinig ka sa akin",       manide: "Magkalkal ka da-ko",        phonetic: "mag-KAL-kal ka da-KO",          audio: "audio/SimpleSentences/makinigkasakin.mp3",         category: "phrases" },
  { english: "lend me your things",              filipino: "pahiram ng gamit mo",      manide: "Pasubliin ako ng gamit mo", phonetic: "pa-sub-LI-in A-ko ng GA-mit mo", audio: "audio/SimpleSentences/pahiramakonggamitmo.mp3", category: "phrases" },
  // { english: "i will return it", filipino: "ibabalik ko na", manide: "Ipagsuhi ko di ka", phonetic: "i-pag-SU-hi ko di ka", audio: "audio/iwillreturn.mp3", category: "phrases" },

  // ── NATURE & HEALTH ──────────────────────────────────
  // { english: "herbal medicine", filipino: "halamang gamot", manide: "Magtatabako", phonetic: "mag-ta-ta-BA-ko", audio: "audio/magtatabako.mp3", category: "nature" },
  // { english: "fruit",           filipino: "prutas",         manide: "Mahuhos",     phonetic: "ma-HU-hos",       audio: "audio/mahuhos.mp3",     category: "nature" },
  // { english: "pili nut",        filipino: "pili",           manide: "Pudikit",     phonetic: "pu-DI-kit",       audio: "audio/pudikit.mp3",     category: "nature" },

];

// dictionary is used directly since this file is loaded before script.js
