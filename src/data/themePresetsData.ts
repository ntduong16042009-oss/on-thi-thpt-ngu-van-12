export interface ThemePreset {
  id: string;
  name: string;
  subtitle: string;
  mode: 'dark' | 'light';
  bgColor: string;
  surfaceColor: string;
  cardColor: string;
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  mutedTextColor: string;
  badge: string;
}

export interface UserThemePreferences {
  presetId: string;
  bgColor: string;
  surfaceColor: string;
  cardColor: string;
  primaryColor: string;
  secondaryColor: string;
  fontScale: 'sm' | 'md' | 'lg' | 'xl';
  fontFamily: 'sans' | 'serif' | 'display';
  ambientGlow: boolean;
  highContrastBorders: boolean;
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'crimson-night',
    name: 'Hồng Ngọc Đêm Sao',
    subtitle: 'Giao diện gốc ấm áp & nổi bật',
    mode: 'dark',
    bgColor: '#121526',
    surfaceColor: '#16213e',
    cardColor: '#1a1f36',
    primaryColor: '#e94560',
    secondaryColor: '#f39c12',
    textColor: '#eeeef2',
    mutedTextColor: '#94a3b8',
    badge: 'Mặc định',
  },
  {
    id: 'emerald-forest',
    name: 'Ngọc Lục Bảo Rừng Xanh',
    subtitle: 'Dịu mắt tối đa khi ôn bài ban đêm',
    mode: 'dark',
    bgColor: '#0b1917',
    surfaceColor: '#112622',
    cardColor: '#152e29',
    primaryColor: '#10b981',
    secondaryColor: '#f59e0b',
    textColor: '#ecfdf5',
    mutedTextColor: '#94a3b8',
    badge: 'Dịu mắt',
  },
  {
    id: 'ocean-sapphire',
    name: 'Đại Dương Xanh Thẳm',
    subtitle: 'Tăng cường sự tập trung & ghi nhớ sâu',
    mode: 'dark',
    bgColor: '#0a1526',
    surfaceColor: '#11223d',
    cardColor: '#162a4a',
    primaryColor: '#0ea5e9',
    secondaryColor: '#38bdf8',
    textColor: '#f0f9ff',
    mutedTextColor: '#94a3b8',
    badge: 'Tập trung',
  },
  {
    id: 'royal-amethyst',
    name: 'Tím Hoàng Gia Ngân Hà',
    subtitle: 'Cảm hứng thơ ca lãng mạn & bay bổng',
    mode: 'dark',
    bgColor: '#140f24',
    surfaceColor: '#1e1636',
    cardColor: '#251c42',
    primaryColor: '#a855f7',
    secondaryColor: '#f472b6',
    textColor: '#faf5ff',
    mutedTextColor: '#a1a1aa',
    badge: 'Thơ ca',
  },
  {
    id: 'vintage-espresso',
    name: 'Hổ Phách Cổ Điển',
    subtitle: 'Màu nâu trầm thư viện văn học cổ điển',
    mode: 'dark',
    bgColor: '#1a1310',
    surfaceColor: '#261c17',
    cardColor: '#30231d',
    primaryColor: '#f97316',
    secondaryColor: '#eab308',
    textColor: '#fef3c7',
    mutedTextColor: '#a8a29e',
    badge: 'Hoài cổ',
  },
  {
    id: 'sakura-night',
    name: 'Hoa Anh Đào Đêm',
    subtitle: 'Sắc hồng phấn hiện đại & trẻ trung',
    mode: 'dark',
    bgColor: '#191019',
    surfaceColor: '#261726',
    cardColor: '#301d30',
    primaryColor: '#f43f5e',
    secondaryColor: '#fbbf24',
    textColor: '#fff1f2',
    mutedTextColor: '#fda4af',
    badge: 'Cá tính',
  },
  {
    id: 'sepia-paper',
    name: 'Trang Sách Giấy Cổ (Sáng Ấm)',
    subtitle: 'Màu giấy kem chống mỏi mắt khi đọc lâu',
    mode: 'light',
    bgColor: '#f5efe2',
    surfaceColor: '#ebe1ce',
    cardColor: '#fcf9f2',
    primaryColor: '#b45309',
    secondaryColor: '#9a3412',
    textColor: '#271e17',
    mutedTextColor: '#574c41',
    badge: 'Trang sách',
  },
  {
    id: 'daylight-academic',
    name: 'Sáng Tinh Khôi Học Đường',
    subtitle: 'Nền trắng sáng chuẩn SGK ban ngày',
    mode: 'light',
    bgColor: '#f1f5f9',
    surfaceColor: '#e2e8f0',
    cardColor: '#ffffff',
    primaryColor: '#2563eb',
    secondaryColor: '#d97706',
    textColor: '#0f172a',
    mutedTextColor: '#475569',
    badge: 'Nền sáng',
  },
  {
    id: 'mint-daylight',
    name: 'Xanh Bạc Hà Ban Ngày',
    subtitle: 'Không gian xanh mát, thanh thoát & nhẹ nhàng',
    mode: 'light',
    bgColor: '#ecfdf5',
    surfaceColor: '#d1fae5',
    cardColor: '#ffffff',
    primaryColor: '#059669',
    secondaryColor: '#0284c7',
    textColor: '#064e3b',
    mutedTextColor: '#374151',
    badge: 'Tươi mát',
  },
];

export const DEFAULT_THEME_PREFS: UserThemePreferences = {
  presetId: 'crimson-night',
  bgColor: '#121526',
  surfaceColor: '#16213e',
  cardColor: '#1a1f36',
  primaryColor: '#e94560',
  secondaryColor: '#f39c12',
  fontScale: 'md',
  fontFamily: 'sans',
  ambientGlow: true,
  highContrastBorders: false,
};

/**
 * Helper to determine if a HEX color is light (luminance > 0.55)
 * so text colors automatically adapt for high readability.
 */
export function isLightHexColor(hex: string): boolean {
  const cleaned = hex.replace('#', '').trim();
  if (cleaned.length !== 6) return false;
  const r = parseInt(cleaned.substring(0, 2), 16) / 255;
  const g = parseInt(cleaned.substring(2, 4), 16) / 255;
  const b = parseInt(cleaned.substring(4, 6), 16) / 255;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 0.52;
}

/**
 * Converts a 6-digit hex color to "R, G, B" string for rgba() usage in CSS variables.
 */
export function hexToRgbString(hex: string, fallback = '233, 69, 96'): string {
  const cleaned = hex.replace('#', '').trim();
  if (cleaned.length !== 6) return fallback;
  const r = parseInt(cleaned.substring(0, 2), 16);
  const g = parseInt(cleaned.substring(2, 4), 16);
  const b = parseInt(cleaned.substring(4, 6), 16);
  if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return fallback;
  return `${r}, ${g}, ${b}`;
}
