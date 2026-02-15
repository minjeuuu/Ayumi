// ============= COMPREHENSIVE IMAGE SERVICE - 10+ SOURCES =============

export interface ImageSource {
  name: string;
  baseUrl: string;
  needsAuth: boolean;
  categories: string[];
}

export const IMAGE_SOURCES: ImageSource[] = [
  {
    name: 'Unsplash',
    baseUrl: 'https://source.unsplash.com',
    needsAuth: false,
    categories: ['nature', 'worship', 'spiritual', 'landscape', 'people']
  },
  {
    name: 'Pixabay',
    baseUrl: 'https://pixabay.com/get',
    needsAuth: false,
    categories: ['prayer', 'bible', 'church', 'cross', 'faith']
  },
  {
    name: 'Pexels',
    baseUrl: 'https://images.pexels.com/photos',
    needsAuth: false,
    categories: ['worship', 'hands', 'light', 'peace', 'hope']
  },
  {
    name: 'Lorem Picsum',
    baseUrl: 'https://picsum.photos',
    needsAuth: false,
    categories: ['random', 'general', 'background']
  },
  {
    name: 'PlaceIMG',
    baseUrl: 'https://placeimg.com',
    needsAuth: false,
    categories: ['nature', 'arch', 'people', 'tech']
  },
  {
    name: 'Placeholder',
    baseUrl: 'https://via.placeholder.com',
    needsAuth: false,
    categories: ['placeholder', 'solid']
  },
  {
    name: 'Picsum Photos',
    baseUrl: 'https://picsum.photos',
    needsAuth: false,
    categories: ['random', 'curated']
  },
  {
    name: 'DummyImage',
    baseUrl: 'https://dummyimage.com',
    needsAuth: false,
    categories: ['custom', 'text', 'color']
  },
  {
    name: 'FakeIMG',
    baseUrl: 'https://fakeimg.pl',
    needsAuth: false,
    categories: ['custom', 'simple']
  },
  {
    name: 'PlaceBear',
    baseUrl: 'https://placebear.com',
    needsAuth: false,
    categories: ['nature', 'animals']
  }
];

// ============= COMPREHENSIVE IMAGE GENERATION =============

export const getDailyImage = (width: number = 1920, height: number = 1080, category: string = 'spiritual'): string => {
  const seed = new Date().toISOString().split('T')[0];
  const sources = [
    `https://source.unsplash.com/${width}x${height}/?${category},worship,peace&sig=${seed}`,
    `https://picsum.photos/${width}/${height}?random=${seed}`,
    `https://placeimg.com/${width}/${height}/nature/${seed}`,
  ];
  return sources[Math.floor(Math.random() * sources.length)];
};

export const getThemedBackground = (theme: string, width: number = 1920, height: number = 1080): string => {
  const themeKeywords: Record<string, string> = {
    light: 'light,bright,white,pure',
    dark: 'dark,night,stars,deep',
    sepia: 'vintage,old,warm,classic',
    forest: 'forest,nature,green,trees',
    ocean: 'ocean,sea,water,blue',
    lavender: 'purple,lavender,flowers,soft',
    sunset: 'sunset,orange,warm,evening',
    midnight: 'night,sky,stars,dark',
    rose: 'pink,rose,flowers,gentle',
    sage: 'green,sage,plants,calm',
    cream: 'beige,cream,warm,soft',
    slate: 'gray,stone,minimal,clean'
  };
  
  const keyword = themeKeywords[theme] || 'spiritual,peace';
  return `https://source.unsplash.com/${width}x${height}/?${keyword}`;
};

export const getVerseCardImage = (mood: string, width: number = 1080, height: number = 1080): string => {
  const moodCategories: Record<string, string> = {
    joyful: 'joy,happy,light,celebration',
    peaceful: 'peace,calm,serene,tranquil',
    grateful: 'gratitude,thankful,blessed',
    anxious: 'comfort,hope,strength',
    sad: 'hope,light,comfort,peace',
    hopeful: 'hope,future,light,promise',
    struggling: 'strength,endurance,perseverance',
    blessed: 'blessing,grace,abundance'
  };
  
  const category = moodCategories[mood] || 'spiritual';
  return `https://source.unsplash.com/${width}x${height}/?${category}`;
};

export const getPrayerBackground = (prayerType: string): string => {
  const types: Record<string, string> = {
    adoration: 'https://source.unsplash.com/1920x1080/?worship,praise,glory',
    confession: 'https://source.unsplash.com/1920x1080/?light,hope,redemption',
    thanksgiving: 'https://source.unsplash.com/1920x1080/?gratitude,joy,celebration',
    supplication: 'https://source.unsplash.com/1920x1080/?hands,prayer,faith',
    intercession: 'https://source.unsplash.com/1920x1080/?community,together,support'
  };
  
  return types[prayerType] || 'https://source.unsplash.com/1920x1080/?prayer,spiritual';
};

export const getJournalCoverImage = (mood: string): string => {
  return `https://source.unsplash.com/800x1200/?journal,${mood},writing`;
};

export const getTopicImage = (topic: string): string => {
  const topicImages: Record<string, string> = {
    faith: 'https://source.unsplash.com/1200x800/?faith,cross,believe',
    hope: 'https://source.unsplash.com/1200x800/?hope,light,sunrise',
    love: 'https://source.unsplash.com/1200x800/?love,heart,compassion',
    prayer: 'https://source.unsplash.com/1200x800/?prayer,hands,worship',
    worship: 'https://source.unsplash.com/1200x800/?worship,church,praise',
    grace: 'https://source.unsplash.com/1200x800/?grace,mercy,forgiveness',
    peace: 'https://source.unsplash.com/1200x800/?peace,calm,serene',
    joy: 'https://source.unsplash.com/1200x800/?joy,happiness,celebration',
    strength: 'https://source.unsplash.com/1200x800/?strength,power,endurance',
    wisdom: 'https://source.unsplash.com/1200x800/?wisdom,knowledge,understanding'
  };
  
  return topicImages[topic.toLowerCase()] || `https://source.unsplash.com/1200x800/?${topic},spiritual`;
};

export const getSeasonalImage = (month: number): string => {
  const seasons: Record<number, string> = {
    12: 'winter,christmas,snow,holiday',
    1: 'winter,new year,fresh start',
    2: 'love,valentine,hearts',
    3: 'spring,renewal,flowers',
    4: 'easter,resurrection,spring',
    5: 'spring,growth,nature',
    6: 'summer,sunshine,bright',
    7: 'summer,vacation,joy',
    8: 'summer,abundance,harvest',
    9: 'autumn,fall,thanksgiving',
    10: 'autumn,harvest,gratitude',
    11: 'autumn,thanksgiving,family'
  };
  
  const seasonKeyword = seasons[month] || 'nature,peace';
  return `https://source.unsplash.com/1920x1080/?${seasonKeyword}`;
};

export const getBibleBookImage = (book: string): string => {
  const bookCategories: Record<string, string> = {
    Genesis: 'creation,beginning,earth',
    Exodus: 'freedom,liberation,journey',
    Psalms: 'worship,music,praise',
    Proverbs: 'wisdom,knowledge,understanding',
    Isaiah: 'prophecy,messianic,hope',
    Matthew: 'gospel,jesus,kingdom',
    John: 'light,life,truth',
    Romans: 'grace,faith,righteousness',
    Ephesians: 'church,unity,christ',
    Revelation: 'victory,glory,eternity'
  };
  
  const category = bookCategories[book] || 'bible,scripture,holy';
  return `https://source.unsplash.com/1200x800/?${category}`;
};

export const getWorshipImage = (artist: string): string => {
  return `https://source.unsplash.com/1200x800/?worship,concert,music,praise`;
};

export const getChurchImage = (churchName: string): string => {
  return `https://source.unsplash.com/1200x800/?church,worship,gathering,community`;
};

// ============= FALLBACK IMAGES =============

export const getFallbackImage = (width: number, height: number, text: string = 'Image'): string => {
  return `https://via.placeholder.com/${width}x${height}/4B5563/FFFFFF?text=${encodeURIComponent(text)}`;
};

export const getGradientBackground = (color1: string, color2: string): string => {
  return `https://dummyimage.com/1920x1080/${color1}/${color2}`;
};

// ============= RANDOM IMAGE FROM MULTIPLE SOURCES =============

export const getRandomSpirit ualImage = (width: number = 1920, height: number = 1080): string => {
  const sources = [
    `https://source.unsplash.com/${width}x${height}/?spiritual,worship,peace`,
    `https://source.unsplash.com/${width}x${height}/?faith,hope,love`,
    `https://source.unsplash.com/${width}x${height}/?prayer,devotion,grace`,
    `https://source.unsplash.com/${width}x${height}/?church,cross,light`,
    `https://source.unsplash.com/${width}x${height}/?bible,scripture,holy`,
    `https://picsum.photos/${width}/${height}?random=${Date.now()}`,
    `https://placeimg.com/${width}/${height}/nature/${Date.now()}`,
  ];
  
  return sources[Math.floor(Math.random() * sources.length)];
};

// ============= IMAGE UTILITIES =============

export const preloadImage = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = url;
  });
};

export const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
    img.src = url;
  });
};

// ============= EXPORT =============

export const ImageService = {
  sources: IMAGE_SOURCES,
  getDailyImage,
  getThemedBackground,
  getVerseCardImage,
  getPrayerBackground,
  getJournalCoverImage,
  getTopicImage,
  getSeasonalImage,
  getBibleBookImage,
  getWorshipImage,
  getChurchImage,
  getFallbackImage,
  getGradientBackground,
  getRandomSpiritualImage,
  preloadImage,
  getImageDimensions
};

export default ImageService;
