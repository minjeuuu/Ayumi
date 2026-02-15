import {
  JournalEntry,
  PrayerRequest,
  PrayerSession,
  ReadingPlan,
  StudyNote,
  StudyTopic,
  DevotionalContent,
  AppSettings,
  UserProfile,
} from '../types';

// ============= STORAGE KEYS =============

const STORAGE_KEYS = {
  // Dashboard
  DASHBOARD_CONTENT: 'ayumi_dashboard_v2',
  DASHBOARD_DATE: 'ayumi_dashboard_date',
  
  // Journal
  JOURNAL_ENTRIES: 'ayumi_journal_v2',
  JOURNAL_TAGS: 'ayumi_journal_tags',
  
  // Prayer
  PRAYER_REQUESTS: 'ayumi_prayers_v2',
  PRAYER_SESSIONS: 'ayumi_prayer_sessions',
  PRAYER_CIRCLES: 'ayumi_prayer_circles',
  
  // Reading Plans
  READING_PLANS: 'ayumi_reading_plans',
  ACTIVE_PLAN: 'ayumi_active_plan',
  
  // Study
  STUDY_NOTES: 'ayumi_study_notes_v2',
  STUDY_TOPICS: 'ayumi_study_topics',
  HIGHLIGHTS: 'ayumi_highlights',
  
  // Devotionals
  DEVOTIONALS: 'ayumi_devotionals',
  FAVORITE_DEVOTIONALS: 'ayumi_fav_devotionals',
  
  // Settings & Profile
  USER_PROFILE: 'ayumi_profile_v2',
  APP_SETTINGS: 'ayumi_settings_v2',
  
  // Bookmarks & Favorites
  FAVORITE_VERSES: 'ayumi_fav_verses',
  BOOKMARKS: 'ayumi_bookmarks',
  
  // Streaks & Stats
  READING_STREAK: 'ayumi_reading_streak',
  PRAYER_STREAK: 'ayumi_prayer_streak',
  JOURNAL_STREAK: 'ayumi_journal_streak',
  STATS: 'ayumi_stats_v2',
  
  // Cache
  BIBLE_CACHE: 'ayumi_bible_cache',
  IMAGE_CACHE: 'ayumi_image_cache',
} as const;

// ============= GENERIC STORAGE FUNCTIONS =============

export const saveToStorage = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Error saving to storage (${key}):`, error);
  }
};

export const loadFromStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error loading from storage (${key}):`, error);
    return defaultValue;
  }
};

export const removeFromStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from storage (${key}):`, error);
  }
};

export const clearAllStorage = (): void => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error('Error clearing storage:', error);
  }
};

// ============= JOURNAL STORAGE =============

export const saveJournalEntries = (entries: JournalEntry[]): void => {
  saveToStorage(STORAGE_KEYS.JOURNAL_ENTRIES, entries);
};

export const loadJournalEntries = (): JournalEntry[] => {
  return loadFromStorage<JournalEntry[]>(STORAGE_KEYS.JOURNAL_ENTRIES, []);
};

export const addJournalEntry = (entry: JournalEntry): void => {
  const entries = loadJournalEntries();
  entries.unshift(entry); // Add to beginning
  saveJournalEntries(entries);
};

export const updateJournalEntry = (id: string, updates: Partial<JournalEntry>): void => {
  const entries = loadJournalEntries();
  const index = entries.findIndex(e => e.id === id);
  if (index !== -1) {
    entries[index] = { ...entries[index], ...updates };
    saveJournalEntries(entries);
  }
};

export const deleteJournalEntry = (id: string): void => {
  const entries = loadJournalEntries();
  saveJournalEntries(entries.filter(e => e.id !== id));
};

// ============= PRAYER STORAGE =============

export const savePrayerRequests = (requests: PrayerRequest[]): void => {
  saveToStorage(STORAGE_KEYS.PRAYER_REQUESTS, requests);
};

export const loadPrayerRequests = (): PrayerRequest[] => {
  return loadFromStorage<PrayerRequest[]>(STORAGE_KEYS.PRAYER_REQUESTS, []);
};

export const addPrayerRequest = (request: PrayerRequest): void => {
  const requests = loadPrayerRequests();
  requests.unshift(request);
  savePrayerRequests(requests);
};

export const updatePrayerRequest = (id: string, updates: Partial<PrayerRequest>): void => {
  const requests = loadPrayerRequests();
  const index = requests.findIndex(r => r.id === id);
  if (index !== -1) {
    requests[index] = { ...requests[index], ...updates };
    savePrayerRequests(requests);
  }
};

export const deletePrayerRequest = (id: string): void => {
  const requests = loadPrayerRequests();
  savePrayerRequests(requests.filter(r => r.id !== id));
};

export const savePrayerSessions = (sessions: PrayerSession[]): void => {
  saveToStorage(STORAGE_KEYS.PRAYER_SESSIONS, sessions);
};

export const loadPrayerSessions = (): PrayerSession[] => {
  return loadFromStorage<PrayerSession[]>(STORAGE_KEYS.PRAYER_SESSIONS, []);
};

export const addPrayerSession = (session: PrayerSession): void => {
  const sessions = loadPrayerSessions();
  sessions.unshift(session);
  savePrayerSessions(sessions);
};

// ============= READING PLAN STORAGE =============

export const saveReadingPlans = (plans: ReadingPlan[]): void => {
  saveToStorage(STORAGE_KEYS.READING_PLANS, plans);
};

export const loadReadingPlans = (): ReadingPlan[] => {
  return loadFromStorage<ReadingPlan[]>(STORAGE_KEYS.READING_PLANS, []);
};

export const addReadingPlan = (plan: ReadingPlan): void => {
  const plans = loadReadingPlans();
  plans.push(plan);
  saveReadingPlans(plans);
};

export const updateReadingPlan = (id: string, updates: Partial<ReadingPlan>): void => {
  const plans = loadReadingPlans();
  const index = plans.findIndex(p => p.id === id);
  if (index !== -1) {
    plans[index] = { ...plans[index], ...updates };
    saveReadingPlans(plans);
  }
};

export const deleteReadingPlan = (id: string): void => {
  const plans = loadReadingPlans();
  saveReadingPlans(plans.filter(p => p.id !== id));
};

export const setActivePlan = (planId: string | null): void => {
  saveToStorage(STORAGE_KEYS.ACTIVE_PLAN, planId);
};

export const getActivePlan = (): string | null => {
  return loadFromStorage<string | null>(STORAGE_KEYS.ACTIVE_PLAN, null);
};

// ============= STUDY NOTES STORAGE =============

export const saveStudyNotes = (notes: StudyNote[]): void => {
  saveToStorage(STORAGE_KEYS.STUDY_NOTES, notes);
};

export const loadStudyNotes = (): StudyNote[] => {
  return loadFromStorage<StudyNote[]>(STORAGE_KEYS.STUDY_NOTES, []);
};

export const addStudyNote = (note: StudyNote): void => {
  const notes = loadStudyNotes();
  notes.unshift(note);
  saveStudyNotes(notes);
};

export const updateStudyNote = (id: string, updates: Partial<StudyNote>): void => {
  const notes = loadStudyNotes();
  const index = notes.findIndex(n => n.id === id);
  if (index !== -1) {
    notes[index] = { ...notes[index], ...updates };
    saveStudyNotes(notes);
  }
};

export const deleteStudyNote = (id: string): void => {
  const notes = loadStudyNotes();
  saveStudyNotes(notes.filter(n => n.id !== id));
};

// ============= STUDY TOPICS STORAGE =============

export const saveStudyTopics = (topics: StudyTopic[]): void => {
  saveToStorage(STORAGE_KEYS.STUDY_TOPICS, topics);
};

export const loadStudyTopics = (): StudyTopic[] => {
  return loadFromStorage<StudyTopic[]>(STORAGE_KEYS.STUDY_TOPICS, []);
};

export const addStudyTopic = (topic: StudyTopic): void => {
  const topics = loadStudyTopics();
  topics.push(topic);
  saveStudyTopics(topics);
};

export const updateStudyTopic = (id: string, updates: Partial<StudyTopic>): void => {
  const topics = loadStudyTopics();
  const index = topics.findIndex(t => t.id === id);
  if (index !== -1) {
    topics[index] = { ...topics[index], ...updates };
    saveStudyTopics(topics);
  }
};

export const deleteStudyTopic = (id: string): void => {
  const topics = loadStudyTopics();
  saveStudyTopics(topics.filter(t => t.id !== id));
};

// ============= DEVOTIONALS STORAGE =============

export const saveDevotionals = (devotionals: DevotionalContent[]): void => {
  saveToStorage(STORAGE_KEYS.DEVOTIONALS, devotionals);
};

export const loadDevotionals = (): DevotionalContent[] => {
  return loadFromStorage<DevotionalContent[]>(STORAGE_KEYS.DEVOTIONALS, []);
};

export const addDevotional = (devotional: DevotionalContent): void => {
  const devotionals = loadDevotionals();
  devotionals.unshift(devotional);
  saveDevotionals(devotionals);
};

// ============= FAVORITES & BOOKMARKS =============

export const saveFavoriteVerses = (verses: string[]): void => {
  saveToStorage(STORAGE_KEYS.FAVORITE_VERSES, verses);
};

export const loadFavoriteVerses = (): string[] => {
  return loadFromStorage<string[]>(STORAGE_KEYS.FAVORITE_VERSES, []);
};

export const addFavoriteVerse = (verse: string): void => {
  const favorites = loadFavoriteVerses();
  if (!favorites.includes(verse)) {
    favorites.push(verse);
    saveFavoriteVerses(favorites);
  }
};

export const removeFavoriteVerse = (verse: string): void => {
  const favorites = loadFavoriteVerses();
  saveFavoriteVerses(favorites.filter(v => v !== verse));
};

// ============= SETTINGS & PROFILE =============

export const saveAppSettings = (settings: AppSettings): void => {
  saveToStorage(STORAGE_KEYS.APP_SETTINGS, settings);
};

export const loadAppSettings = (): AppSettings => {
  return loadFromStorage<AppSettings>(STORAGE_KEYS.APP_SETTINGS, {
    theme: 'light',
    fontSize: 'medium',
    defaultBibleVersion: 'ESV',
    enableNotifications: true,
    prayerReminderEnabled: false,
    readingPlanReminder: false,
    autoPlayAudio: false,
    offlineMode: false,
    dataSync: true,
  });
};

export const saveUserProfile = (profile: UserProfile): void => {
  saveToStorage(STORAGE_KEYS.USER_PROFILE, profile);
};

export const loadUserProfile = (): UserProfile | null => {
  return loadFromStorage<UserProfile | null>(STORAGE_KEYS.USER_PROFILE, null);
};

// ============= STREAKS & STATISTICS =============

export const updateReadingStreak = (): void => {
  const today = new Date().toISOString().split('T')[0];
  const lastDate = localStorage.getItem('ayumi_last_reading_date');
  
  if (lastDate === today) return; // Already updated today
  
  let streak = loadFromStorage<number>('ayumi_reading_streak', 0);
  
  if (lastDate) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    if (lastDate === yesterdayStr) {
      streak++; // Continue streak
    } else {
      streak = 1; // Reset streak
    }
  } else {
    streak = 1; // First time
  }
  
  saveToStorage('ayumi_reading_streak', streak);
  localStorage.setItem('ayumi_last_reading_date', today);
};

export const updatePrayerStreak = (): void => {
  const today = new Date().toISOString().split('T')[0];
  const lastDate = localStorage.getItem('ayumi_last_prayer_date');
  
  if (lastDate === today) return;
  
  let streak = loadFromStorage<number>('ayumi_prayer_streak', 0);
  
  if (lastDate) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    if (lastDate === yesterdayStr) {
      streak++;
    } else {
      streak = 1;
    }
  } else {
    streak = 1;
  }
  
  saveToStorage('ayumi_prayer_streak', streak);
  localStorage.setItem('ayumi_last_prayer_date', today);
};

export const updateJournalStreak = (): void => {
  const today = new Date().toISOString().split('T')[0];
  const lastDate = localStorage.getItem('ayumi_last_journal_date');
  
  if (lastDate === today) return;
  
  let streak = loadFromStorage<number>('ayumi_journal_streak', 0);
  
  if (lastDate) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    if (lastDate === yesterdayStr) {
      streak++;
    } else {
      streak = 1;
    }
  } else {
    streak = 1;
  }
  
  saveToStorage('ayumi_journal_streak', streak);
  localStorage.setItem('ayumi_last_journal_date', today);
};

export const getStreaks = () => {
  return {
    reading: loadFromStorage<number>('ayumi_reading_streak', 0),
    prayer: loadFromStorage<number>('ayumi_prayer_streak', 0),
    journal: loadFromStorage<number>('ayumi_journal_streak', 0),
  };
};

// ============= EXPORT/IMPORT DATA =============

export const exportAllData = (): string => {
  const data = {
    journal: loadJournalEntries(),
    prayers: loadPrayerRequests(),
    prayerSessions: loadPrayerSessions(),
    plans: loadReadingPlans(),
    notes: loadStudyNotes(),
    topics: loadStudyTopics(),
    devotionals: loadDevotionals(),
    favorites: loadFavoriteVerses(),
    settings: loadAppSettings(),
    profile: loadUserProfile(),
    streaks: getStreaks(),
    exportDate: new Date().toISOString(),
  };
  
  return JSON.stringify(data, null, 2);
};

export const importAllData = (jsonString: string): boolean => {
  try {
    const data = JSON.parse(jsonString);
    
    if (data.journal) saveJournalEntries(data.journal);
    if (data.prayers) savePrayerRequests(data.prayers);
    if (data.prayerSessions) savePrayerSessions(data.prayerSessions);
    if (data.plans) saveReadingPlans(data.plans);
    if (data.notes) saveStudyNotes(data.notes);
    if (data.topics) saveStudyTopics(data.topics);
    if (data.devotionals) saveDevotionals(data.devotionals);
    if (data.favorites) saveFavoriteVerses(data.favorites);
    if (data.settings) saveAppSettings(data.settings);
    if (data.profile) saveUserProfile(data.profile);
    
    return true;
  } catch (error) {
    console.error('Error importing data:', error);
    return false;
  }
};
