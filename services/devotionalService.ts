import Anthropic from '@anthropic-ai/sdk';
import { 
  HomeDashboardContent, 
  DevotionalContent,
  PrayerType 
} from '../types';

const anthropic = new Anthropic({
  apiKey: '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',
  dangerouslyAllowBrowser: true
});

// ============= HOME DASHBOARD =============

export const generateHomeDashboard = async (): Promise<HomeDashboardContent> => {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 8000,
      messages: [{
        role: 'user',
        content: `Generate a comprehensive daily spiritual dashboard for today.
        Must include ALL these sections with deep, meaningful content:
        
        1. verse: Daily verse with text, reference, context, crossReferences (array), gospelConnection, applicationQuestion
        2. passage: Bible passage with reference, full text (multi-paragraph), outline, author, historicalSetting, keyLessons
        3. devotional: Title, scriptureQuote, shortReflection, longReflection (500+ words), application, prayerGuide, personalChallenge
        4. questions: heartCheck, beliefCheck, obedienceCheck, relationshipCheck
        5. prayer: focusTheme, scripture, guidedPrayer, prayerPoints (array)
        6. theme: Biblical theme with keyVerse, supportingVerses (array), practicalApplication
        7. attribute: God's attribute with definition, scriptureProof, worshipResponse, reflection
        8. gospel: Gospel truth with reference, explanation, personalApplication
        9. history: Biblical event with reference, description, timeline (before/during/after), significance
        10. encouragement: Uplifting word for today
        11. challengeOfDay: Practical challenge
        
        Use ESV version. Evangelical theology. Return as JSON.
        Make it rich, deep, and personally applicable.`
      }],
      temperature: 0.7,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      const content = JSON.parse(jsonStr);
      return {
        ...content,
        date: new Date().toISOString()
      };
    }
    return getFallbackDashboard();
  } catch (error) {
    console.error('Error generating dashboard:', error);
    return getFallbackDashboard();
  }
};

// ============= DEVOTIONAL GENERATION =============

export const generateDailyDevotional = async (topic?: string): Promise<DevotionalContent> => {
  try {
    const topicPrompt = topic ? `focused on the topic: "${topic}"` : 'for general spiritual growth';
    
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 3000,
      messages: [{
        role: 'user',
        content: `Generate a deep, meaningful devotional ${topicPrompt}.
        Include: id, title, scripture (text & reference), reflection (500+ words), 
        prayer (personal and heartfelt), stepOfFaith (practical action), 
        tags (array), author ("Ayumi"), date, readTime (estimate in minutes), relatedTopics (array).
        
        Use ESV. Make it personal, convicting, and encouraging.
        Return as JSON.`
      }],
      temperature: 0.8,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    }
    return getFallbackDevotional();
  } catch (error) {
    console.error('Error generating devotional:', error);
    return getFallbackDevotional();
  }
};

export const generateTopicalDevotional = async (topic: string): Promise<DevotionalContent> => {
  return generateDailyDevotional(topic);
};

// ============= PRAYER GENERATION =============

export const generatePrayer = async (type: PrayerType, context?: string): Promise<string> => {
  try {
    const contextPrompt = context ? ` Context: ${context}` : '';
    
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 800,
      messages: [{
        role: 'user',
        content: `Generate a heartfelt ${type} prayer.${contextPrompt}
        Make it personal, biblical, and from the heart.
        Length: 150-250 words. Return just the prayer text.`
      }],
      temperature: 0.8,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      return textContent.text.trim();
    }
    return getFallbackPrayer(type);
  } catch (error) {
    console.error('Error generating prayer:', error);
    return getFallbackPrayer(type);
  }
};

export const generatePrayerPrompts = async (verse: string): Promise<string[]> => {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 800,
      messages: [{
        role: 'user',
        content: `Generate 5 personal prayer prompts based on: "${verse}".
        Make them specific, practical, and heart-focused.
        Return as JSON array of strings.`
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
    console.error('Error generating prayer prompts:', error);
    return [];
  }
};

// ============= REFLECTION QUESTIONS =============

export const generateReflectionQuestions = async (
  passage: string,
  category?: 'personal' | 'application' | 'theological' | 'relational'
): Promise<string[]> => {
  try {
    const categoryPrompt = category ? ` focusing on ${category} aspects` : '';
    
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content: `Generate 7-10 deep reflection questions for: ${passage}${categoryPrompt}.
        Mix easy and challenging questions. Make them personally convicting.
        Return as JSON array of strings.`
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
    console.error('Error generating questions:', error);
    return [];
  }
};

// ============= SCRIPTURE MEMORY =============

export const generateMemoryAid = async (verse: string): Promise<{
  verse: string;
  visualAid: string;
  acronym?: string;
  mnemonicDevice: string;
  practicalTips: string[];
}> => {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1500,
      messages: [{
        role: 'user',
        content: `Create memory aids for: "${verse}".
        Include: verse (the reference), visualAid (descriptive mental image), 
        acronym (if applicable), mnemonicDevice (creative memory technique), 
        practicalTips (array of memorization tips).
        Return as JSON.`
      }],
      temperature: 0.7,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    }
    return { verse, visualAid: '', mnemonicDevice: '', practicalTips: [] };
  } catch (error) {
    console.error('Error generating memory aid:', error);
    return { verse, visualAid: '', mnemonicDevice: '', practicalTips: [] };
  }
};

// ============= JOURNAL PROMPTS =============

export const generateJournalPrompts = async (theme?: string): Promise<string[]> => {
  try {
    const themePrompt = theme ? ` about ${theme}` : '';
    
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content: `Generate 8 deep journal prompts${themePrompt}.
        Make them introspective, faith-focused, and personally challenging.
        Return as JSON array of strings.`
      }],
      temperature: 0.8,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    }
    return [];
  } catch (error) {
    console.error('Error generating journal prompts:', error);
    return [];
  }
};

// ============= SERMON OUTLINE =============

export const generateSermonOutline = async (passage: string): Promise<{
  title: string;
  passage: string;
  mainPoints: { title: string; explanation: string; application: string }[];
  introduction: string;
  conclusion: string;
  questions: string[];
}> => {
  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 3000,
      messages: [{
        role: 'user',
        content: `Create a sermon outline for: ${passage}.
        Include: title, passage, mainPoints (3-4 points with title/explanation/application), 
        introduction, conclusion, questions (for small group discussion).
        Return as JSON.`
      }],
      temperature: 0.7,
    });

    const textContent = response.content[0];
    if (textContent.type === 'text') {
      const jsonStr = textContent.text.replace(/```json\n?|\n?```/g, '').trim();
      return JSON.parse(jsonStr);
    }
    return { title: '', passage, mainPoints: [], introduction: '', conclusion: '', questions: [] };
  } catch (error) {
    console.error('Error generating sermon outline:', error);
    return { title: '', passage, mainPoints: [], introduction: '', conclusion: '', questions: [] };
  }
};

// ============= FALLBACK CONTENT =============

const getFallbackDashboard = (): HomeDashboardContent => {
  return {
    date: new Date().toISOString(),
    verse: {
      text: "For we walk by faith, not by sight.",
      reference: "2 Corinthians 5:7 (ESV)",
      context: "Paul is encouraging believers about eternal perspective.",
      crossReferences: ["Hebrews 11:1", "Romans 8:24-25", "John 20:29"],
      gospelConnection: "Our faith rests in Christ's finished work, not our sight.",
      applicationQuestion: "Where am I trusting my sight over God's promises today?"
    },
    passage: {
      reference: "Psalm 23",
      text: "The LORD is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul...",
      outline: ["The Shepherd's Provision (v1-3)", "The Shepherd's Protection (v4)", "The Shepherd's Presence (v5-6)"],
      author: "David",
      historicalSetting: "Written likely in David's later years, reflecting on God's faithfulness.",
      keyLessons: ["God provides for all our needs", "We can trust Him in dark valleys", "His presence brings peace"]
    },
    devotional: {
      title: "Walking by Faith",
      scriptureQuote: "For we walk by faith, not by sight. (2 Corinthians 5:7)",
      shortReflection: "Faith sees what eyes cannot. Today, choose to trust God's promises over your circumstances.",
      longReflection: "In a world that demands evidence, faith feels countercultural. Yet Paul reminds us that the Christian life is fundamentally a walk of faith, not sight. This doesn't mean we ignore reality or live in denial. Rather, it means we interpret reality through the lens of God's promises and character. Faith sees beyond present circumstances to eternal truths. It trusts God's Word more than our worries. When finances are tight, faith remembers Jehovah Jireh. When relationships are strained, faith clings to His faithfulness. When the future feels uncertain, faith rests in His sovereignty. Walking by faith is a daily choice to believe that God is who He says He is and will do what He has promised. It's choosing His voice over our doubts, His truth over our fears, His timing over our urgency.",
      application: "Identify one area where you're walking by sight today. Surrender it to God and choose to walk by faith instead.",
      prayerGuide: "Father, I confess I often trust what I see more than what You say. Help me walk by faith today. Open the eyes of my heart to see Your hand at work, even when my physical eyes see obstacles. Strengthen my faith. In Jesus' name, Amen.",
      personalChallenge: "Write down one specific promise from God's Word and speak it over your biggest concern today."
    },
    questions: {
      heartCheck: "Is my heart anchored in God's truth or my circumstances?",
      beliefCheck: "Do I truly believe God is faithful, even when I can't see His plan?",
      obedienceCheck: "What step of faith is God calling me to take today?",
      relationshipCheck: "How am I demonstrating faith to those around me?"
    },
    prayer: {
      focusTheme: "Trusting God's Faithfulness",
      scripture: "Psalm 56:3",
      guidedPrayer: "When I am afraid, I put my trust in You. Lord, You know every anxious thought, every fearful scenario playing in my mind. Today I choose to trust You. You have never failed me. You never will.",
      prayerPoints: [
        "Thank God for His proven faithfulness in your past",
        "Confess areas where you're trusting yourself instead of Him",
        "Ask for increased faith to trust Him with your future",
        "Pray for others who need faith for their circumstances"
      ]
    },
    theme: {
      theme: "God's Faithfulness",
      keyVerse: "Great is Your faithfulness. (Lamentations 3:23)",
      supportingVerses: [
        "Psalm 89:1-2",
        "1 Thessalonians 5:24",
        "2 Timothy 2:13",
        "Deuteronomy 7:9"
      ],
      practicalApplication: "Keep a 'faithfulness journal' noting daily evidences of God's care."
    },
    attribute: {
      attribute: "Immutable (Unchanging)",
      definition: "God is eternally the same in His nature, character, and purposes.",
      scriptureProof: "For I the LORD do not change. (Malachi 3:6)",
      worshipResponse: "I praise You, Lord, for being my solid rock in a changing world. You are the same yesterday, today, and forever.",
      reflection: "In a world of constant change, God's unchanging nature is our anchor and hope."
    },
    gospel: {
      truth: "Christ died for the ungodly",
      reference: "Romans 5:6-8",
      explanation: "Salvation wasn't earned by our righteousness but given while we were still sinners. Christ's death demonstrates God's love and secures our redemption.",
      personalApplication: "Today, remember that your standing with God isn't based on your performance but on Christ's finished work."
    },
    history: {
      event: "David Anointed as King",
      reference: "1 Samuel 16",
      description: "God rejects Saul and sends Samuel to anoint David, the youngest son of Jesse, as the next king of Israel.",
      timeline: {
        before: "Saul has been rejected by God for disobedience",
        during: "Samuel anoints David; the Spirit of the Lord comes upon him",
        after: "David enters Saul's service; years pass before he actually becomes king"
      },
      significance: "God chooses based on the heart, not external appearance. He prepares His chosen through faithful service in small things before big assignments."
    },
    encouragement: "You are deeply loved by God today. Nothing can separate you from His love. Walk in that truth.",
    challengeOfDay: "Speak a word of encouragement to someone who needs to hear about God's faithfulness."
  };
};

const getFallbackDevotional = (): DevotionalContent => {
  return {
    id: `dev_${Date.now()}`,
    title: "Walking in Faith",
    scripture: {
      text: "For we walk by faith, not by sight.",
      reference: "2 Corinthians 5:7 (ESV)"
    },
    reflection: "Faith is the foundation of our Christian walk. It's not blind belief but confident trust in a God who has proven Himself faithful. Today, as you face challenges, remember that faith doesn't demand to see the entire staircase—it just takes the next step, knowing God is there.",
    prayer: "Father, increase my faith. Help me trust You when I cannot see the way forward. Give me courage to walk by faith, not by sight. In Jesus' name, Amen.",
    stepOfFaith: "Choose one area where you're struggling to trust God. Write it down and commit to pray about it daily this week.",
    tags: ["Faith", "Trust", "Daily Walk"],
    author: "Ayumi",
    date: new Date().toISOString(),
    readTime: 5,
    relatedTopics: ["Trust", "Obedience", "God's Faithfulness"]
  };
};

const getFallbackPrayer = (type: PrayerType): string => {
  const prayers: Record<PrayerType, string> = {
    'Adoration': "Holy Father, I praise You for who You are. You are mighty, loving, faithful, and just. Your glory fills the heavens and earth. I worship You today and always.",
    'Confession': "Father, I come before You acknowledging my sin. I have fallen short. I have trusted myself more than You. Forgive me, cleanse me, and restore me by Your grace.",
    'Thanksgiving': "Lord, thank You for Your countless blessings. Thank You for Your love, Your provision, Your presence. Every good gift comes from You. I am grateful today and always.",
    'Supplication': "Father, I bring my needs before You. You know what I need before I ask. Help me trust Your timing and Your ways. Provide according to Your will and for Your glory.",
    'Intercession': "Lord, I lift up others to You. Those who are hurting, lost, struggling. Be near to them. Show them Your love. Use me to be Your hands and feet. Work in their hearts."
  };
  return prayers[type];
};
