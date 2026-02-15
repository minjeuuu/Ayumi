import Anthropic from '@anthropic-ai/sdk';

// ============= CLAUDE API CONFIGURATION =============

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY || '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',
  dangerouslyAllowBrowser: true
});

const MODEL = 'claude-sonnet-4-20250514';

// ============= CORE AI FUNCTIONS (CLAUDE ONLY) =============

export const generateDevotional = async (topic?: string): Promise<string> => {
  try {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 2000,
      messages: [{
        role: 'user',
        content: topic 
          ? `Generate a powerful daily devotional about: ${topic}. Include scripture, reflection (500+ words), and prayer.`
          : 'Generate a powerful daily devotional with scripture, deep reflection (500+ words), and prayer.'
      }],
      temperature: 0.7,
    });

    const content = response.content[0];
    return content.type === 'text' ? content.text : '';
  } catch (error) {
    console.error('Claude API Error:', error);
    throw error;
  }
};

export const generatePrayer = async (topic: string, type: string = 'general'): Promise<string> => {
  try {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content: `Write a heartfelt ${type} prayer about: ${topic}. Make it personal, biblical, and powerful (200-300 words).`
      }],
      temperature: 0.8,
    });

    const content = response.content[0];
    return content.type === 'text' ? content.text : '';
  } catch (error) {
    console.error('Claude API Error:', error);
    throw error;
  }
};

export const getBibleVerse = async (reference: string, version: string = 'ESV'): Promise<string> => {
  try {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content: `Provide the exact text of ${reference} in ${version} translation. Only return the verse text.`
      }],
      temperature: 0.1,
    });

    const content = response.content[0];
    return content.type === 'text' ? content.text : '';
  } catch (error) {
    console.error('Claude API Error:', error);
    throw error;
  }
};

export const getVerseInsights = async (reference: string): Promise<string[]> => {
  try {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1500,
      messages: [{
        role: 'user',
        content: `Provide 5 practical application insights for ${reference}. Each insight should be 2-3 sentences. Return as JSON array of strings.`
      }],
      temperature: 0.6,
    });

    const content = response.content[0];
    if (content.type === 'text') {
      const cleaned = content.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(cleaned);
    }
    return [];
  } catch (error) {
    console.error('Claude API Error:', error);
    return [];
  }
};

export const getReflectionQuestions = async (passage: string): Promise<string[]> => {
  try {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 1500,
      messages: [{
        role: 'user',
        content: `Generate 7-10 deep reflection questions for ${passage}. Questions should cover personal application, theological understanding, and practical living. Return as JSON array.`
      }],
      temperature: 0.7,
    });

    const content = response.content[0];
    if (content.type === 'text') {
      const cleaned = content.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(cleaned);
    }
    return [];
  } catch (error) {
    console.error('Claude API Error:', error);
    return [];
  }
};

export const generateSermon = async (passage: string): Promise<any> => {
  try {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 3000,
      messages: [{
        role: 'user',
        content: `Create a complete sermon outline for ${passage}. Include: title, introduction, 3-4 main points with sub-points, conclusion, and discussion questions. Return as JSON.`
      }],
      temperature: 0.6,
    });

    const content = response.content[0];
    if (content.type === 'text') {
      const cleaned = content.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(cleaned);
    }
    return null;
  } catch (error) {
    console.error('Claude API Error:', error);
    return null;
  }
};

export const getWordStudy = async (word: string, reference?: string): Promise<any> => {
  try {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 2000,
      messages: [{
        role: 'user',
        content: `Provide comprehensive biblical word study for "${word}"${reference ? ` in ${reference}` : ''}. Include: original language (Hebrew/Greek), transliteration, meaning, usage, theological significance. Return as JSON.`
      }],
      temperature: 0.5,
    });

    const content = response.content[0];
    if (content.type === 'text') {
      const cleaned = content.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(cleaned);
    }
    return null;
  } catch (error) {
    console.error('Claude API Error:', error);
    return null;
  }
};

export const searchBible = async (query: string): Promise<any[]> => {
  try {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: 2000,
      messages: [{
        role: 'user',
        content: `Find top 10 Bible verses related to: "${query}". For each verse, provide reference, text (ESV), and relevance explanation. Return as JSON array.`
      }],
      temperature: 0.4,
    });

    const content = response.content[0];
    if (content.type === 'text') {
      const cleaned = content.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(cleaned);
    }
    return [];
  } catch (error) {
    console.error('Claude API Error:', error);
    return [];
  }
};

// ============= EXPORT =============

export const ClaudeAIService = {
  generateDevotional,
  generatePrayer,
  getBibleVerse,
  getVerseInsights,
  getReflectionQuestions,
  generateSermon,
  getWordStudy,
  searchBible
};

export default ClaudeAIService;
