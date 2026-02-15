import { BibleBookDef, BibleBookCategory } from '../types';

// ============= BIBLE BOOKS COMPLETE LIST =============

export const BIBLE_BOOKS: BibleBookDef[] = [
  // OLD TESTAMENT - LAW (Torah/Pentateuch)
  { name: 'Genesis', abbreviation: 'Gen', category: 'Law', chapters: 50, testament: 'OT', author: 'Moses', keyTheme: 'Beginnings' },
  { name: 'Exodus', abbreviation: 'Ex', category: 'Law', chapters: 40, testament: 'OT', author: 'Moses', keyTheme: 'Deliverance' },
  { name: 'Leviticus', abbreviation: 'Lev', category: 'Law', chapters: 27, testament: 'OT', author: 'Moses', keyTheme: 'Holiness' },
  { name: 'Numbers', abbreviation: 'Num', category: 'Law', chapters: 36, testament: 'OT', author: 'Moses', keyTheme: 'Wilderness Journey' },
  { name: 'Deuteronomy', abbreviation: 'Deut', category: 'Law', chapters: 34, testament: 'OT', author: 'Moses', keyTheme: 'Covenant Renewal' },
  
  // OLD TESTAMENT - HISTORY
  { name: 'Joshua', abbreviation: 'Josh', category: 'History', chapters: 24, testament: 'OT', author: 'Joshua', keyTheme: 'Conquest' },
  { name: 'Judges', abbreviation: 'Judg', category: 'History', chapters: 21, testament: 'OT', author: 'Samuel', keyTheme: 'Cycles of Sin' },
  { name: 'Ruth', abbreviation: 'Ruth', category: 'History', chapters: 4, testament: 'OT', author: 'Unknown', keyTheme: 'Redemption' },
  { name: '1 Samuel', abbreviation: '1Sam', category: 'History', chapters: 31, testament: 'OT', author: 'Samuel', keyTheme: 'Transition to Monarchy' },
  { name: '2 Samuel', abbreviation: '2Sam', category: 'History', chapters: 24, testament: 'OT', author: 'Nathan/Gad', keyTheme: 'David\'s Reign' },
  { name: '1 Kings', abbreviation: '1Kgs', category: 'History', chapters: 22, testament: 'OT', author: 'Jeremiah', keyTheme: 'Kingdom United & Divided' },
  { name: '2 Kings', abbreviation: '2Kgs', category: 'History', chapters: 25, testament: 'OT', author: 'Jeremiah', keyTheme: 'Fall of Israel & Judah' },
  { name: '1 Chronicles', abbreviation: '1Chr', category: 'History', chapters: 29, testament: 'OT', author: 'Ezra', keyTheme: 'David\'s Line' },
  { name: '2 Chronicles', abbreviation: '2Chr', category: 'History', chapters: 36, testament: 'OT', author: 'Ezra', keyTheme: 'Judah\'s Kings' },
  { name: 'Ezra', abbreviation: 'Ezra', category: 'History', chapters: 10, testament: 'OT', author: 'Ezra', keyTheme: 'Return & Rebuilding' },
  { name: 'Nehemiah', abbreviation: 'Neh', category: 'History', chapters: 13, testament: 'OT', author: 'Nehemiah', keyTheme: 'Walls Rebuilt' },
  { name: 'Esther', abbreviation: 'Est', category: 'History', chapters: 10, testament: 'OT', author: 'Unknown', keyTheme: 'Divine Providence' },
  
  // OLD TESTAMENT - WISDOM/POETRY
  { name: 'Job', abbreviation: 'Job', category: 'Wisdom', chapters: 42, testament: 'OT', author: 'Unknown', keyTheme: 'Suffering & Sovereignty' },
  { name: 'Psalms', abbreviation: 'Ps', category: 'Wisdom', chapters: 150, testament: 'OT', author: 'Various', keyTheme: 'Worship & Prayer' },
  { name: 'Proverbs', abbreviation: 'Prov', category: 'Wisdom', chapters: 31, testament: 'OT', author: 'Solomon', keyTheme: 'Wisdom for Living' },
  { name: 'Ecclesiastes', abbreviation: 'Eccl', category: 'Wisdom', chapters: 12, testament: 'OT', author: 'Solomon', keyTheme: 'Meaning of Life' },
  { name: 'Song of Solomon', abbreviation: 'Song', category: 'Wisdom', chapters: 8, testament: 'OT', author: 'Solomon', keyTheme: 'Love & Devotion' },
  
  // OLD TESTAMENT - MAJOR PROPHETS
  { name: 'Isaiah', abbreviation: 'Isa', category: 'Major Prophets', chapters: 66, testament: 'OT', author: 'Isaiah', keyTheme: 'Salvation & Messiah' },
  { name: 'Jeremiah', abbreviation: 'Jer', category: 'Major Prophets', chapters: 52, testament: 'OT', author: 'Jeremiah', keyTheme: 'Judgment & Hope' },
  { name: 'Lamentations', abbreviation: 'Lam', category: 'Major Prophets', chapters: 5, testament: 'OT', author: 'Jeremiah', keyTheme: 'Grief over Jerusalem' },
  { name: 'Ezekiel', abbreviation: 'Ezek', category: 'Major Prophets', chapters: 48, testament: 'OT', author: 'Ezekiel', keyTheme: 'God\'s Glory' },
  { name: 'Daniel', abbreviation: 'Dan', category: 'Major Prophets', chapters: 12, testament: 'OT', author: 'Daniel', keyTheme: 'God\'s Sovereignty' },
  
  // OLD TESTAMENT - MINOR PROPHETS
  { name: 'Hosea', abbreviation: 'Hos', category: 'Minor Prophets', chapters: 14, testament: 'OT', author: 'Hosea', keyTheme: 'Unfailing Love' },
  { name: 'Joel', abbreviation: 'Joel', category: 'Minor Prophets', chapters: 3, testament: 'OT', author: 'Joel', keyTheme: 'Day of the Lord' },
  { name: 'Amos', abbreviation: 'Amos', category: 'Minor Prophets', chapters: 9, testament: 'OT', author: 'Amos', keyTheme: 'Justice & Judgment' },
  { name: 'Obadiah', abbreviation: 'Obad', category: 'Minor Prophets', chapters: 1, testament: 'OT', author: 'Obadiah', keyTheme: 'Edom\'s Destruction' },
  { name: 'Jonah', abbreviation: 'Jon', category: 'Minor Prophets', chapters: 4, testament: 'OT', author: 'Jonah', keyTheme: 'God\'s Mercy' },
  { name: 'Micah', abbreviation: 'Mic', category: 'Minor Prophets', chapters: 7, testament: 'OT', author: 'Micah', keyTheme: 'Justice & Compassion' },
  { name: 'Nahum', abbreviation: 'Nah', category: 'Minor Prophets', chapters: 3, testament: 'OT', author: 'Nahum', keyTheme: 'Nineveh\'s Fall' },
  { name: 'Habakkuk', abbreviation: 'Hab', category: 'Minor Prophets', chapters: 3, testament: 'OT', author: 'Habakkuk', keyTheme: 'Faith in Trials' },
  { name: 'Zephaniah', abbreviation: 'Zeph', category: 'Minor Prophets', chapters: 3, testament: 'OT', author: 'Zephaniah', keyTheme: 'Judgment & Restoration' },
  { name: 'Haggai', abbreviation: 'Hag', category: 'Minor Prophets', chapters: 2, testament: 'OT', author: 'Haggai', keyTheme: 'Rebuild the Temple' },
  { name: 'Zechariah', abbreviation: 'Zech', category: 'Minor Prophets', chapters: 14, testament: 'OT', author: 'Zechariah', keyTheme: 'Messiah\'s Coming' },
  { name: 'Malachi', abbreviation: 'Mal', category: 'Minor Prophets', chapters: 4, testament: 'OT', author: 'Malachi', keyTheme: 'Return to God' },
  
  // NEW TESTAMENT - GOSPELS
  { name: 'Matthew', abbreviation: 'Matt', category: 'Gospels', chapters: 28, testament: 'NT', author: 'Matthew', keyTheme: 'King & Kingdom' },
  { name: 'Mark', abbreviation: 'Mark', category: 'Gospels', chapters: 16, testament: 'NT', author: 'Mark', keyTheme: 'Servant & Sacrifice' },
  { name: 'Luke', abbreviation: 'Luke', category: 'Gospels', chapters: 24, testament: 'NT', author: 'Luke', keyTheme: 'Son of Man' },
  { name: 'John', abbreviation: 'John', category: 'Gospels', chapters: 21, testament: 'NT', author: 'John', keyTheme: 'Son of God' },
  
  // NEW TESTAMENT - ACTS
  { name: 'Acts', abbreviation: 'Acts', category: 'Acts', chapters: 28, testament: 'NT', author: 'Luke', keyTheme: 'Church Birth & Growth' },
  
  // NEW TESTAMENT - PAULINE EPISTLES
  { name: 'Romans', abbreviation: 'Rom', category: 'Pauline Epistles', chapters: 16, testament: 'NT', author: 'Paul', keyTheme: 'Righteousness by Faith' },
  { name: '1 Corinthians', abbreviation: '1Cor', category: 'Pauline Epistles', chapters: 16, testament: 'NT', author: 'Paul', keyTheme: 'Church Unity & Purity' },
  { name: '2 Corinthians', abbreviation: '2Cor', category: 'Pauline Epistles', chapters: 13, testament: 'NT', author: 'Paul', keyTheme: 'Ministry & Suffering' },
  { name: 'Galatians', abbreviation: 'Gal', category: 'Pauline Epistles', chapters: 6, testament: 'NT', author: 'Paul', keyTheme: 'Freedom in Christ' },
  { name: 'Ephesians', abbreviation: 'Eph', category: 'Pauline Epistles', chapters: 6, testament: 'NT', author: 'Paul', keyTheme: 'Church as Body' },
  { name: 'Philippians', abbreviation: 'Phil', category: 'Pauline Epistles', chapters: 4, testament: 'NT', author: 'Paul', keyTheme: 'Joy in Christ' },
  { name: 'Colossians', abbreviation: 'Col', category: 'Pauline Epistles', chapters: 4, testament: 'NT', author: 'Paul', keyTheme: 'Christ\'s Supremacy' },
  { name: '1 Thessalonians', abbreviation: '1Thess', category: 'Pauline Epistles', chapters: 5, testament: 'NT', author: 'Paul', keyTheme: 'Christ\'s Return' },
  { name: '2 Thessalonians', abbreviation: '2Thess', category: 'Pauline Epistles', chapters: 3, testament: 'NT', author: 'Paul', keyTheme: 'Perseverance' },
  { name: '1 Timothy', abbreviation: '1Tim', category: 'Pauline Epistles', chapters: 6, testament: 'NT', author: 'Paul', keyTheme: 'Church Leadership' },
  { name: '2 Timothy', abbreviation: '2Tim', category: 'Pauline Epistles', chapters: 4, testament: 'NT', author: 'Paul', keyTheme: 'Faithful Ministry' },
  { name: 'Titus', abbreviation: 'Titus', category: 'Pauline Epistles', chapters: 3, testament: 'NT', author: 'Paul', keyTheme: 'Sound Doctrine' },
  { name: 'Philemon', abbreviation: 'Phlm', category: 'Pauline Epistles', chapters: 1, testament: 'NT', author: 'Paul', keyTheme: 'Forgiveness' },
  
  // NEW TESTAMENT - GENERAL EPISTLES
  { name: 'Hebrews', abbreviation: 'Heb', category: 'General Epistles', chapters: 13, testament: 'NT', author: 'Unknown', keyTheme: 'Christ\'s Superiority' },
  { name: 'James', abbreviation: 'Jas', category: 'General Epistles', chapters: 5, testament: 'NT', author: 'James', keyTheme: 'Faith & Works' },
  { name: '1 Peter', abbreviation: '1Pet', category: 'General Epistles', chapters: 5, testament: 'NT', author: 'Peter', keyTheme: 'Hope in Suffering' },
  { name: '2 Peter', abbreviation: '2Pet', category: 'General Epistles', chapters: 3, testament: 'NT', author: 'Peter', keyTheme: 'Truth & Error' },
  { name: '1 John', abbreviation: '1John', category: 'General Epistles', chapters: 5, testament: 'NT', author: 'John', keyTheme: 'Love & Truth' },
  { name: '2 John', abbreviation: '2John', category: 'General Epistles', chapters: 1, testament: 'NT', author: 'John', keyTheme: 'Walk in Truth' },
  { name: '3 John', abbreviation: '3John', category: 'General Epistles', chapters: 1, testament: 'NT', author: 'John', keyTheme: 'Hospitality' },
  { name: 'Jude', abbreviation: 'Jude', category: 'General Epistles', chapters: 1, testament: 'NT', author: 'Jude', keyTheme: 'Contend for Faith' },
  
  // NEW TESTAMENT - REVELATION
  { name: 'Revelation', abbreviation: 'Rev', category: 'Revelation', chapters: 22, testament: 'NT', author: 'John', keyTheme: 'Christ\'s Victory' },
];

// ============= HELPER FUNCTIONS =============

export const getBibleBook = (name: string): BibleBookDef | undefined => {
  return BIBLE_BOOKS.find(
    book => book.name.toLowerCase() === name.toLowerCase() || 
            book.abbreviation.toLowerCase() === name.toLowerCase()
  );
};

export const getBooksByCategory = (category: BibleBookCategory): BibleBookDef[] => {
  return BIBLE_BOOKS.filter(book => book.category === category);
};

export const getBooksByTestament = (testament: 'OT' | 'NT'): BibleBookDef[] => {
  return BIBLE_BOOKS.filter(book => book.testament === testament);
};

export const getTotalChapters = (testament?: 'OT' | 'NT'): number => {
  const books = testament ? getBooksByTestament(testament) : BIBLE_BOOKS;
  return books.reduce((total, book) => total + book.chapters, 0);
};

export const getBookNumber = (bookName: string): number => {
  return BIBLE_BOOKS.findIndex(
    book => book.name.toLowerCase() === bookName.toLowerCase() || 
            book.abbreviation.toLowerCase() === bookName.toLowerCase()
  ) + 1;
};

export const searchBooks = (query: string): BibleBookDef[] => {
  const lowerQuery = query.toLowerCase();
  return BIBLE_BOOKS.filter(
    book => book.name.toLowerCase().includes(lowerQuery) ||
            book.abbreviation.toLowerCase().includes(lowerQuery) ||
            book.keyTheme?.toLowerCase().includes(lowerQuery)
  );
};

// ============= POPULAR READING PLANS =============

export const POPULAR_PLANS = [
  {
    id: 'bible-year',
    name: 'Bible in a Year',
    description: 'Read through the entire Bible in 365 days',
    totalDays: 365,
    category: 'Bible' as const,
  },
  {
    id: 'gospels-30',
    name: 'Gospels in 30 Days',
    description: 'Read all four Gospels in one month',
    totalDays: 30,
    category: 'Bible' as const,
  },
  {
    id: 'psalms-month',
    name: 'Psalms in a Month',
    description: 'Read 5 Psalms per day for 30 days',
    totalDays: 30,
    category: 'Bible' as const,
  },
  {
    id: 'proverbs-month',
    name: 'Proverbs in a Month',
    description: 'Read one chapter of Proverbs per day',
    totalDays: 31,
    category: 'Bible' as const,
  },
  {
    id: 'nt-90',
    name: 'New Testament in 90 Days',
    description: 'Read the entire New Testament in 3 months',
    totalDays: 90,
    category: 'Bible' as const,
  },
];

// ============= TOPICAL STUDIES =============

export const POPULAR_TOPICS = [
  'Faith', 'Hope', 'Love', 'Prayer', 'Worship', 
  'Salvation', 'Grace', 'Forgiveness', 'Peace', 'Joy',
  'Patience', 'Courage', 'Wisdom', 'Trust', 'Obedience',
  'Holiness', 'Righteousness', 'Kingdom of God', 'Holy Spirit',
  'Discipleship', 'Service', 'Humility', 'Perseverance',
  'Suffering', 'Trials', 'Victory', 'Promise', 'Covenant'
];

// ============= FALLBACK DEVOTIONAL CONTENT =============

export const FALLBACK_DEVOTIONAL = {
  title: 'Walking by Faith',
  scripture: {
    text: 'For we walk by faith, not by sight.',
    reference: '2 Corinthians 5:7 (ESV)',
  },
  reflection: 'Faith is the substance of things hoped for, the evidence of things not seen. As believers, we are called to trust God even when we cannot see the full picture. Today, choose to walk by faith, trusting that God is working all things together for your good.',
  prayer: 'Father, help me walk by faith today. When I cannot see the way forward, remind me that You are faithful and true. Increase my faith and help me trust You more. In Jesus\' name, Amen.',
  stepOfFaith: 'Identify one area of your life where you need to trust God more. Write it down and commit to praying about it daily this week.',
  tags: ['Faith', 'Trust', 'Daily Walk'],
};

// ============= BIBLE VERSION INFO =============

export const BIBLE_VERSIONS = {
  ESV: { name: 'English Standard Version', year: 2001, notes: 'Formal equivalence, evangelical' },
  NIV: { name: 'New International Version', year: 2011, notes: 'Balance between formal and dynamic' },
  KJV: { name: 'King James Version', year: 1611, notes: 'Traditional, formal' },
  NKJV: { name: 'New King James Version', year: 1982, notes: 'Modern language, KJV tradition' },
  NLT: { name: 'New Living Translation', year: 2015, notes: 'Dynamic equivalence, readable' },
  NASB: { name: 'New American Standard Bible', year: 2020, notes: 'Highly literal' },
  CSB: { name: 'Christian Standard Bible', year: 2017, notes: 'Optimal equivalence' },
  AMP: { name: 'Amplified Bible', year: 2015, notes: 'Expands meanings' },
  MSG: { name: 'The Message', year: 2002, notes: 'Contemporary paraphrase' },
  NRSV: { name: 'New Revised Standard Version', year: 1989, notes: 'Ecumenical, formal' },
};
