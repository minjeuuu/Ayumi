import Anthropic from '@anthropic-ai/sdk';
import { BibleVerse, BibleContext, BibleVersion, BiblePassage } from '../types';

const anthropic = new Anthropic({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

// Bible API endpoints for different versions
const BIBLE_APIs: Record<BibleVersion, string> = {
  'ESV': 'https://api.esv.org/v3/passage/text/',
  'NIV': 'https://labs.bible.org/api/',
  'KJV': 'https://bible-api.com/',
  'NKJV': 'https://bible-api.com/',
  'NLT': 'https://labs.bible.org/api/',
  'NASB': 'https://labs.bible.org/api/',
  'CSB': 'https://labs.bible.org/api/',
  'AMP': 'https://labs.bible.org/api/',
  'MSG': 'https://labs.bible.org/api/',
  'NRSV': 'https://labs.bible.org/api/',
};

// ============= BIBLE TEXT FETCHING =============

export const getBibleChapter = async (
  book: string, 
  chapter: number, 
  version: BibleVersion = 'ESV'
): Promise<BibleVerse[]> => {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: `Provide the complete text of ${book} chapter ${chapter} in ${version} version. 
        Return as JSON array with each verse having: book, chapter, verse (number), text.
        Be accurate to the ${version} translation. Include all verses.`
      }],
      temperature: 0.3,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      const verses = JSON.parse(jsonStr);
      return verses.map((v: any) => ({ ...v, version }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching Bible chapter:', error);
    return getFallbackChapter(book, chapter, version);
  }
};

export const getBiblePassage = async (
  reference: string,
  version: BibleVersion = 'ESV'
): Promise<BiblePassage> => {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [{
        role: 'user',
        content: `Provide the text for ${reference} in ${version} version.
        Return JSON with: verses (array of {book, chapter, verse, text}), and optionally context.`
      }],
      temperature: 0.3,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    }
    return { verses: [] };
  } catch (error) {
    console.error('Error fetching passage:', error);
    return { verses: [] };
  }
};

// ============= BIBLE CONTEXT & STUDY =============

export const getChapterContext = async (
  book: string, 
  chapter: number
): Promise<BibleContext | null> => {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [{
        role: 'user',
        content: `Provide scholarly context for ${book} chapter ${chapter}.
        Include: reference, outline (array of main points), author, historicalSetting, 
        purpose, crossReferences (array), keyThemes (array), literaryGenre.
        Return as JSON. Evangelical perspective.`
      }],
      temperature: 0.5,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    }
    return null;
  } catch (error) {
    console.error('Error fetching context:', error);
    return null;
  }
};

export const getVerseInsights = async (reference: string): Promise<string[]> => {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      messages: [{
        role: 'user',
        content: `Provide 5 practical insights and applications for ${reference}.
        Return as JSON array of strings. Make them personal, actionable, and encouraging.`
      }],
      temperature: 0.7,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    }
    return [];
  } catch (error) {
    console.error('Error fetching insights:', error);
    return [];
  }
};

// ============= CROSS REFERENCES =============

export const getCrossReferences = async (reference: string): Promise<string[]> => {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content: `Provide 8-10 relevant cross-references for ${reference}.
        Return as JSON array of scripture references (e.g., ["John 3:16", "Romans 8:28"]).
        Include both OT and NT connections where applicable.`
      }],
      temperature: 0.3,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    }
    return [];
  } catch (error) {
    console.error('Error fetching cross-references:', error);
    return [];
  }
};

// ============= PARALLEL VERSIONS =============

export const getParallelVersions = async (
  reference: string,
  versions: BibleVersion[]
): Promise<Record<BibleVersion, string>> => {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 3000,
      messages: [{
        role: 'user',
        content: `Provide ${reference} in these versions: ${versions.join(', ')}.
        Return as JSON object with version keys and text values.
        Example: { "ESV": "text here", "NIV": "text here" }`
      }],
      temperature: 0.2,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    }
    return {} as Record<BibleVersion, string>;
  } catch (error) {
    console.error('Error fetching parallel versions:', error);
    return {} as Record<BibleVersion, string>;
  }
};

// ============= SEARCH =============

export const searchBible = async (
  query: string,
  version: BibleVersion = 'ESV',
  testament?: 'OT' | 'NT' | 'both'
): Promise<BibleVerse[]> => {
  try {
    const testamentFilter = testament && testament !== 'both' 
      ? ` Focus on ${testament === 'OT' ? 'Old Testament' : 'New Testament'} only.`
      : '';
    
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 3000,
      messages: [{
        role: 'user',
        content: `Search the Bible for verses related to: "${query}".${testamentFilter}
        Return up to 20 relevant verses from ${version} version.
        Format as JSON array: [{book, chapter, verse, text, version}].
        Prioritize most relevant and well-known verses.`
      }],
      temperature: 0.4,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    }
    return [];
  } catch (error) {
    console.error('Error searching Bible:', error);
    return [];
  }
};

// ============= TOPICAL STUDY =============

export const getTopicalVerses = async (topic: string): Promise<{
  topic: string;
  description: string;
  verses: BibleVerse[];
  categories: string[];
}> => {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 3000,
      messages: [{
        role: 'user',
        content: `Create a comprehensive topical study on: "${topic}".
        Return JSON with: topic, description (brief overview), 
        verses (array of 15-20 key verses with full text in ESV),
        categories (array of related subtopics).`
      }],
      temperature: 0.5,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    }
    return { topic, description: '', verses: [], categories: [] };
  } catch (error) {
    console.error('Error fetching topical verses:', error);
    return { topic, description: '', verses: [], categories: [] };
  }
};

// ============= FALLBACK DATA =============

const getFallbackChapter = (book: string, chapter: number, version: BibleVersion): BibleVerse[] => {
  return [
    {
      book,
      chapter,
      verse: 1,
      text: `For we walk by faith, not by sight. (${version})`,
      version
    }
  ];
};

// ============= STUDY TOOLS =============

export const getWordStudy = async (word: string, reference?: string): Promise<{
  word: string;
  definition: string;
  hebrewGreek?: { original: string; transliteration: string; meaning: string };
  usage: string[];
  relatedVerses: string[];
}> => {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 2000,
      messages: [{
        role: 'user',
        content: `Provide a biblical word study for: "${word}"${reference ? ` as used in ${reference}` : ''}.
        Include: word, definition, hebrewGreek (original, transliteration, meaning), 
        usage (array of how it's used), relatedVerses (array of key references).
        Return as JSON.`
      }],
      temperature: 0.5,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    }
    return { word, definition: '', usage: [], relatedVerses: [] };
  } catch (error) {
    console.error('Error fetching word study:', error);
    return { word, definition: '', usage: [], relatedVerses: [] };
  }
};
