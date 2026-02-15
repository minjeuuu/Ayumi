import { Theme } from '../types';

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  shadow: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface ThemeConfig {
  name: Theme;
  displayName: string;
  colors: ThemeColors;
  fontFamily?: string;
  borderRadius?: string;
  shadows?: boolean;
  backgroundImage?: string;
}

// ============= THEME DEFINITIONS =============

export const themes: Record<Theme, ThemeConfig> = {
  light: {
    name: 'light',
    displayName: 'Light',
    colors: {
      primary: '#1e40af',
      secondary: '#64748b',
      accent: '#f59e0b',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#64748b',
      border: '#e2e8f0',
      shadow: 'rgba(0, 0, 0, 0.1)',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
    shadows: true,
  },
  
  dark: {
    name: 'dark',
    displayName: 'Dark',
    colors: {
      primary: '#60a5fa',
      secondary: '#94a3b8',
      accent: '#fbbf24',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f1f5f9',
      textSecondary: '#cbd5e1',
      border: '#334155',
      shadow: 'rgba(0, 0, 0, 0.5)',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#60a5fa',
    },
    shadows: true,
  },
  
  sepia: {
    name: 'sepia',
    displayName: 'Sepia',
    colors: {
      primary: '#92400e',
      secondary: '#78716c',
      accent: '#d97706',
      background: '#fef3c7',
      surface: '#fef9e7',
      text: '#451a03',
      textSecondary: '#78350f',
      border: '#fde68a',
      shadow: 'rgba(146, 64, 14, 0.15)',
      success: '#15803d',
      warning: '#d97706',
      error: '#b91c1c',
      info: '#1e40af',
    },
    shadows: false,
  },
  
  forest: {
    name: 'forest',
    displayName: 'Forest',
    colors: {
      primary: '#15803d',
      secondary: '#4d7c0f',
      accent: '#84cc16',
      background: '#f0fdf4',
      surface: '#dcfce7',
      text: '#14532d',
      textSecondary: '#166534',
      border: '#bbf7d0',
      shadow: 'rgba(21, 128, 61, 0.15)',
      success: '#22c55e',
      warning: '#facc15',
      error: '#dc2626',
      info: '#0891b2',
    },
    shadows: true,
  },
  
  ocean: {
    name: 'ocean',
    displayName: 'Ocean',
    colors: {
      primary: '#0369a1',
      secondary: '#0e7490',
      accent: '#06b6d4',
      background: '#f0f9ff',
      surface: '#e0f2fe',
      text: '#0c4a6e',
      textSecondary: '#075985',
      border: '#bae6fd',
      shadow: 'rgba(3, 105, 161, 0.15)',
      success: '#14b8a6',
      warning: '#f59e0b',
      error: '#dc2626',
      info: '#3b82f6',
    },
    shadows: true,
  },
  
  lavender: {
    name: 'lavender',
    displayName: 'Lavender',
    colors: {
      primary: '#7c3aed',
      secondary: '#a78bfa',
      accent: '#c084fc',
      background: '#faf5ff',
      surface: '#f3e8ff',
      text: '#581c87',
      textSecondary: '#6b21a8',
      border: '#e9d5ff',
      shadow: 'rgba(124, 58, 237, 0.15)',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#e11d48',
      info: '#8b5cf6',
    },
    shadows: true,
  },
  
  sunset: {
    name: 'sunset',
    displayName: 'Sunset',
    colors: {
      primary: '#dc2626',
      secondary: '#ea580c',
      accent: '#fb923c',
      background: '#fff7ed',
      surface: '#ffedd5',
      text: '#7c2d12',
      textSecondary: '#9a3412',
      border: '#fed7aa',
      shadow: 'rgba(220, 38, 38, 0.15)',
      success: '#16a34a',
      warning: '#f59e0b',
      error: '#dc2626',
      info: '#3b82f6',
    },
    shadows: true,
  },
  
  midnight: {
    name: 'midnight',
    displayName: 'Midnight',
    colors: {
      primary: '#818cf8',
      secondary: '#a5b4fc',
      accent: '#c7d2fe',
      background: '#1e1b4b',
      surface: '#312e81',
      text: '#e0e7ff',
      textSecondary: '#c7d2fe',
      border: '#4c1d95',
      shadow: 'rgba(0, 0, 0, 0.4)',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#818cf8',
    },
    shadows: true,
  },
  
  rose: {
    name: 'rose',
    displayName: 'Rose',
    colors: {
      primary: '#be123c',
      secondary: '#e11d48',
      accent: '#fb7185',
      background: '#fff1f2',
      surface: '#ffe4e6',
      text: '#881337',
      textSecondary: '#9f1239',
      border: '#fecdd3',
      shadow: 'rgba(190, 18, 60, 0.15)',
      success: '#16a34a',
      warning: '#f59e0b',
      error: '#dc2626',
      info: '#3b82f6',
    },
    shadows: true,
  },
  
  sage: {
    name: 'sage',
    displayName: 'Sage',
    colors: {
      primary: '#65a30d',
      secondary: '#84cc16',
      accent: '#a3e635',
      background: '#f7fee7',
      surface: '#ecfccb',
      text: '#3f6212',
      textSecondary: '#4d7c0f',
      border: '#d9f99d',
      shadow: 'rgba(101, 163, 13, 0.15)',
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#dc2626',
      info: '#06b6d4',
    },
    shadows: true,
  },
  
  cream: {
    name: 'cream',
    displayName: 'Cream',
    colors: {
      primary: '#a16207',
      secondary: '#ca8a04',
      accent: '#eab308',
      background: '#fffbeb',
      surface: '#fef3c7',
      text: '#713f12',
      textSecondary: '#854d0e',
      border: '#fde68a',
      shadow: 'rgba(161, 98, 7, 0.12)',
      success: '#16a34a',
      warning: '#f59e0b',
      error: '#dc2626',
      info: '#3b82f6',
    },
    shadows: false,
  },
  
  slate: {
    name: 'slate',
    displayName: 'Slate',
    colors: {
      primary: '#475569',
      secondary: '#64748b',
      accent: '#94a3b8',
      background: '#f8fafc',
      surface: '#f1f5f9',
      text: '#1e293b',
      textSecondary: '#475569',
      border: '#e2e8f0',
      shadow: 'rgba(71, 85, 105, 0.15)',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
    shadows: true,
  },
};

// ============= THEME UTILITIES =============

export const getTheme = (themeName: Theme): ThemeConfig => {
  return themes[themeName] || themes.light;
};

export const applyTheme = (themeName: Theme): void => {
  const theme = getTheme(themeName);
  const root = document.documentElement;
  
  // Apply CSS variables
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  
  // Apply additional theme properties
  if (theme.fontFamily) {
    root.style.setProperty('--font-family', theme.fontFamily);
  }
  
  if (theme.borderRadius) {
    root.style.setProperty('--border-radius', theme.borderRadius);
  }
  
  // Store theme preference
  localStorage.setItem('ayumi_theme', themeName);
  
  // Update meta theme color for mobile browsers
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme.colors.primary);
  }
};

export const getSavedTheme = (): Theme => {
  const saved = localStorage.getItem('ayumi_theme');
  return (saved as Theme) || 'light';
};

export const isDarkTheme = (themeName: Theme): boolean => {
  return ['dark', 'midnight'].includes(themeName);
};

export const getContrastColor = (themeName: Theme): string => {
  return isDarkTheme(themeName) ? '#ffffff' : '#000000';
};

// ============= THEME PRESETS FOR SPECIFIC CONTEXTS =============

export const getReadingTheme = (themeName: Theme): Partial<ThemeColors> => {
  const theme = getTheme(themeName);
  
  // Optimize colors for extended reading
  return {
    background: theme.name === 'sepia' ? '#fef9e7' : theme.colors.background,
    text: theme.colors.text,
    surface: theme.colors.surface,
  };
};

export const getPrayerTheme = (themeName: Theme): Partial<ThemeColors> => {
  const theme = getTheme(themeName);
  
  // Calming colors for prayer
  return {
    background: theme.colors.surface,
    text: theme.colors.text,
    primary: theme.colors.primary,
  };
};

export const getJournalTheme = (themeName: Theme): Partial<ThemeColors> => {
  const theme = getTheme(themeName);
  
  // Comfortable colors for writing
  return {
    background: theme.colors.background,
    surface: theme.colors.surface,
    text: theme.colors.text,
  };
};

// ============= ACCESSIBILITY =============

export const getAccessibleTheme = (themeName: Theme, highContrast: boolean = false): ThemeConfig => {
  const theme = getTheme(themeName);
  
  if (!highContrast) return theme;
  
  // Increase contrast for accessibility
  return {
    ...theme,
    colors: {
      ...theme.colors,
      text: isDarkTheme(themeName) ? '#ffffff' : '#000000',
      background: isDarkTheme(themeName) ? '#000000' : '#ffffff',
      border: isDarkTheme(themeName) ? '#ffffff' : '#000000',
    }
  };
};

// ============= THEME ANIMATIONS =============

export const transitionTheme = (fromTheme: Theme, toTheme: Theme, duration: number = 300): void => {
  document.documentElement.style.transition = `all ${duration}ms ease-in-out`;
  applyTheme(toTheme);
  
  setTimeout(() => {
    document.documentElement.style.transition = '';
  }, duration);
};
