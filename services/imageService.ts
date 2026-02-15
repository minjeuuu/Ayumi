import { DailyImage, ImageSource } from '../types';

// Multiple image sources for devotional imagery
const IMAGE_SOURCES = {
  unsplash: 'https://source.unsplash.com',
  picsum: 'https://picsum.photos',
  pexels: 'https://images.pexels.com/photos',
};

// Themed image collections
const THEME_KEYWORDS: Record<string, string[]> = {
  nature: ['landscape', 'mountains', 'forest', 'sunset', 'ocean', 'sky', 'flowers', 'nature', 'waterfall'],
  peaceful: ['calm', 'serene', 'peaceful', 'tranquil', 'quiet', 'meditation', 'zen'],
  inspiring: ['light', 'sunrise', 'hope', 'freedom', 'journey', 'path', 'victory'],
  worship: ['church', 'hands', 'prayer', 'worship', 'cross', 'spiritual', 'faith'],
  creation: ['universe', 'stars', 'galaxy', 'cosmos', 'creation', 'earth', 'world'],
  seasons: ['spring', 'summer', 'autumn', 'winter', 'seasonal', 'weather'],
  biblical: ['desert', 'middle-east', 'jerusalem', 'israel', 'ancient', 'historical'],
  reflective: ['lake', 'reflection', 'mirror', 'water', 'still', 'contemplation'],
  strength: ['rock', 'fortress', 'mountain', 'stronghold', 'solid', 'foundation'],
  growth: ['tree', 'growth', 'plant', 'seed', 'garden', 'bloom', 'flourish']
};

// ============= DAILY IMAGE GENERATION =============

export const getDailyImage = (theme: string = 'nature'): DailyImage => {
  const keywords = THEME_KEYWORDS[theme] || THEME_KEYWORDS.nature;
  const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
  const seed = new Date().toISOString().split('T')[0].replace(/-/g, '');
  
  return {
    landscape: {
      url: `${IMAGE_SOURCES.unsplash}/1920x1080/?${randomKeyword},biblical,inspiring&${seed}`,
      attribution: 'Unsplash',
      description: `Beautiful ${randomKeyword} imagery for daily inspiration`
    },
    portrait: {
      url: `${IMAGE_SOURCES.unsplash}/1080x1920/?${randomKeyword},biblical,vertical&${seed}`,
      attribution: 'Unsplash', 
      description: `Vertical ${randomKeyword} image for devotional reading`
    },
    theme: randomKeyword
  };
};

// ============= THEMED BACKGROUNDS =============

export const getThemedBackground = (
  theme: 'light' | 'dark' | 'sepia' | 'forest' | 'ocean' | 'lavender' | 'sunset' | 'midnight' | 'rose' | 'sage' | 'cream' | 'slate',
  size: 'small' | 'medium' | 'large' = 'medium'
): ImageSource => {
  const dimensions = {
    small: '800x600',
    medium: '1920x1080',
    large: '3840x2160'
  };

  const themeKeywords: Record<string, string> = {
    light: 'light,bright,white,clean',
    dark: 'dark,night,minimal',
    sepia: 'vintage,sepia,warm',
    forest: 'forest,green,nature,trees',
    ocean: 'ocean,blue,water,peaceful',
    lavender: 'lavender,purple,soft,flowers',
    sunset: 'sunset,orange,warm,sky',
    midnight: 'midnight,stars,dark,night',
    rose: 'rose,pink,soft,floral',
    sage: 'sage,green,calm,natural',
    cream: 'cream,beige,neutral,soft',
    slate: 'grey,stone,minimal,calm'
  };

  const keyword = themeKeywords[theme] || 'nature';
  
  return {
    url: `${IMAGE_SOURCES.unsplash}/${dimensions[size]}/?${keyword}`,
    attribution: 'Unsplash',
    description: `${theme} themed background`
  };
};

// ============= VERSE CARD IMAGES =============

export const getVerseCardImage = (verseTheme?: string): ImageSource => {
  const themes = ['faith', 'hope', 'love', 'peace', 'joy', 'strength', 'grace', 'mercy'];
  const theme = verseTheme || themes[Math.floor(Math.random() * themes.length)];
  
  return {
    url: `${IMAGE_SOURCES.unsplash}/1200x630/?${theme},scripture,spiritual`,
    attribution: 'Unsplash',
    description: `Image for ${theme} verse card`
  };
};

// ============= PRAYER BACKGROUNDS =============

export const getPrayerBackground = (prayerType?: string): ImageSource => {
  const typeImages: Record<string, string> = {
    'Adoration': 'worship,hands,sky,praise',
    'Confession': 'reflection,water,contemplation',
    'Thanksgiving': 'gratitude,harvest,abundance',
    'Supplication': 'hope,light,path,journey',
    'Intercession': 'community,together,support'
  };

  const keyword = prayerType && typeImages[prayerType] 
    ? typeImages[prayerType] 
    : 'prayer,peaceful,spiritual';

  return {
    url: `${IMAGE_SOURCES.unsplash}/1920x1080/?${keyword}`,
    attribution: 'Unsplash',
    description: 'Prayer background image'
  };
};

// ============= JOURNAL COVERS =============

export const getJournalCoverImage = (mood?: string): ImageSource => {
  const moodImages: Record<string, string> = {
    joyful: 'joy,celebration,bright,happy',
    peaceful: 'peace,calm,serene,tranquil',
    grateful: 'gratitude,thankful,blessing',
    anxious: 'storm,overcome,strength',
    sad: 'comfort,hope,healing',
    hopeful: 'sunrise,new,beginning,hope',
    struggling: 'perseverance,endurance,climb',
    blessed: 'abundance,blessing,gift'
  };

  const keyword = mood && moodImages[mood] 
    ? moodImages[mood] 
    : 'journal,writing,reflection';

  return {
    url: `${IMAGE_SOURCES.unsplash}/800x1000/?${keyword}`,
    attribution: 'Unsplash',
    description: 'Journal cover image'
  };
};

// ============= TOPICAL STUDY IMAGES =============

export const getTopicImage = (topic: string): ImageSource => {
  const topicKeywords: Record<string, string> = {
    'Faith': 'faith,trust,belief,cross',
    'Love': 'love,heart,care,compassion',
    'Hope': 'hope,light,dawn,new',
    'Prayer': 'prayer,hands,worship,devotion',
    'Wisdom': 'wisdom,knowledge,book,study',
    'Salvation': 'salvation,cross,redemption,grace',
    'Grace': 'grace,mercy,forgiveness,love',
    'Peace': 'peace,calm,dove,tranquil',
    'Joy': 'joy,celebration,praise,happiness',
    'Forgiveness': 'forgiveness,restoration,renewal',
    'Patience': 'patience,wait,endurance,perseverance',
    'Courage': 'courage,brave,strength,warrior'
  };

  const keyword = topicKeywords[topic] || `${topic.toLowerCase()},biblical,spiritual`;

  return {
    url: `${IMAGE_SOURCES.unsplash}/1600x900/?${keyword}`,
    attribution: 'Unsplash',
    description: `Image for ${topic} study`
  };
};

// ============= SEASONAL IMAGES =============

export const getSeasonalImage = (): ImageSource => {
  const month = new Date().getMonth();
  
  const seasonalThemes: Record<number, string> = {
    0: 'winter,snow,new-year,fresh-start',
    1: 'valentine,love,hearts,red',
    2: 'spring,renewal,resurrection,easter',
    3: 'spring,flowers,bloom,growth',
    4: 'spring,garden,new-life,green',
    5: 'summer,light,sunshine,bright',
    6: 'summer,freedom,independence,celebration',
    7: 'summer,abundance,harvest,blessing',
    8: 'autumn,fall,change,transformation',
    9: 'autumn,harvest,gratitude,thanksgiving',
    10: 'autumn,preparation,reflection,contemplation',
    11: 'christmas,advent,star,hope,celebration'
  };

  const theme = seasonalThemes[month] || 'nature,seasonal,beauty';

  return {
    url: `${IMAGE_SOURCES.unsplash}/1920x1080/?${theme}`,
    attribution: 'Unsplash',
    description: 'Seasonal devotional image'
  };
};

// ============= ALTERNATIVE IMAGE SOURCES =============

export const getAlternativeImage = (keyword: string, source: 'unsplash' | 'picsum' = 'unsplash'): ImageSource => {
  if (source === 'picsum') {
    const id = Math.floor(Math.random() * 1000);
    return {
      url: `${IMAGE_SOURCES.picsum}/1920/1080?random=${id}`,
      attribution: 'Lorem Picsum',
      description: 'Random devotional imagery'
    };
  }

  return {
    url: `${IMAGE_SOURCES.unsplash}/1920x1080/?${keyword},spiritual,faith`,
    attribution: 'Unsplash',
    description: `${keyword} themed image`
  };
};

// ============= RANDOM INSPIRATIONAL =============

export const getRandomInspirationalImage = (): ImageSource => {
  const inspirationalKeywords = [
    'mountains,peak,achievement',
    'sunrise,dawn,new-beginning',
    'ocean,vast,infinite',
    'sky,clouds,heaven',
    'forest,path,journey',
    'light,beam,hope',
    'cross,faith,salvation',
    'hands,prayer,worship',
    'nature,creation,beauty',
    'stars,night,wonder'
  ];

  const keyword = inspirationalKeywords[Math.floor(Math.random() * inspirationalKeywords.length)];

  return {
    url: `${IMAGE_SOURCES.unsplash}/1920x1080/?${keyword}`,
    attribution: 'Unsplash',
    description: 'Inspirational daily image'
  };
};

// ============= BIBLE BOOK IMAGES =============

export const getBibleBookImage = (book: string): ImageSource => {
  const bookThemes: Record<string, string> = {
    'Genesis': 'creation,beginning,universe,stars',
    'Exodus': 'freedom,deliverance,journey,desert',
    'Psalms': 'worship,praise,music,heart',
    'Proverbs': 'wisdom,knowledge,understanding',
    'Isaiah': 'prophecy,messiah,light,hope',
    'Matthew': 'gospel,sermon,mountain,teaching',
    'John': 'light,life,love,truth',
    'Acts': 'fire,spirit,church,mission',
    'Romans': 'righteousness,faith,cross,salvation',
    'Revelation': 'throne,victory,heaven,glory'
  };

  const theme = bookThemes[book] || 'bible,scripture,ancient,book';

  return {
    url: `${IMAGE_SOURCES.unsplash}/1600x900/?${theme}`,
    attribution: 'Unsplash',
    description: `Image for the book of ${book}`
  };
};

// ============= PLACEHOLDER/FALLBACK =============

export const getPlaceholderImage = (width: number = 1920, height: number = 1080): ImageSource => {
  return {
    url: `${IMAGE_SOURCES.picsum}/${width}/${height}?blur=2`,
    attribution: 'Lorem Picsum',
    description: 'Placeholder image'
  };
};
