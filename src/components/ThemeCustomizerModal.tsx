import React from 'react';
import {
  THEME_PRESETS,
  UserThemePreferences,
  DEFAULT_THEME_PREFS,
  isLightHexColor,
} from '../data/themePresetsData';
import {
  Palette,
  X,
  RotateCcw,
  Check,
  Sun,
  Moon,
  Type,
  Sliders,
  Eye,
  Sparkles,
} from 'lucide-react';

interface ThemeCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefs: UserThemePreferences;
  onChangePrefs: (newPrefs: UserThemePreferences) => void;
}

const QUICK_PRIMARY_SWATCHES = [
  '#e94560',
  '#10b981',
  '#0ea5e9',
  '#a855f7',
  '#f97316',
  '#f43f5e',
  '#2563eb',
  '#b45309',
  '#059669',
  '#eab308',
];

const QUICK_BG_SWATCHES = [
  '#121526',
  '#0b1917',
  '#0a1526',
  '#140f24',
  '#1a1310',
  '#090d16',
  '#f5efe2',
  '#f1f5f9',
  '#ecfdf5',
  '#fffbeb',
];

export const ThemeCustomizerModal: React.FC<ThemeCustomizerModalProps> = ({
  isOpen,
  onClose,
  prefs,
  onChangePrefs,
}) => {
  if (!isOpen) return null;

  const isLightMode = isLightHexColor(prefs.bgColor);

  const handleSelectPreset = (presetId: string) => {
    const preset = THEME_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    onChangePrefs({
      ...prefs,
      presetId: preset.id,
      bgColor: preset.bgColor,
      surfaceColor: preset.surfaceColor,
      cardColor: preset.cardColor,
      primaryColor: preset.primaryColor,
      secondaryColor: preset.secondaryColor,
    });
  };

  const handleCustomColorChange = (
    key: 'bgColor' | 'surfaceColor' | 'cardColor' | 'primaryColor' | 'secondaryColor',
    value: string
  ) => {
    const updated: UserThemePreferences = {
      ...prefs,
      presetId: 'custom',
      [key]: value,
    };
    // If user changes bgColor, also gently harmonize surfaceColor/cardColor if they want seamless cards
    if (key === 'bgColor') {
      const light = isLightHexColor(value);
      if (light && !isLightHexColor(prefs.cardColor)) {
        updated.surfaceColor = '#e2e8f0';
        updated.cardColor = '#ffffff';
      } else if (!light && isLightHexColor(prefs.cardColor)) {
        updated.surfaceColor = '#16213e';
        updated.cardColor = '#1a1f36';
      }
    }
    onChangePrefs(updated);
  };

  const handleReset = () => {
    onChangePrefs(DEFAULT_THEME_PREFS);
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-[#16213e] border-2 border-[#e94560]/60 shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden text-[#eeeef2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-4 py-3 sm:px-5 sm:py-4 bg-[#121526] border-b border-white/10 flex items-center justify-between gap-2.5 sm:gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-white shadow-md shrink-0"
              style={{
                background: `linear-gradient(135deg, ${prefs.primaryColor}, ${prefs.secondaryColor})`,
              }}
            >
              <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm sm:text-lg font-bold text-white truncate">
                Tối Ưu Giao Diện &amp; Đổi Màu
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate">
                Chủ đề có sẵn hoặc tự pha màu nền, thẻ &amp; cỡ chữ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs font-medium text-slate-200 border border-white/10 transition-colors cursor-pointer"
              title="Khôi phục giao diện gốc"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mặc định</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-lg bg-white/5 hover:bg-[#e94560] text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Đóng bảng tùy chỉnh"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 text-xs sm:text-sm">
          {/* SECTION 1: 9 BẢNG MÀU CHỦ ĐỀ CÓ SẴN */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-white flex items-center gap-2 text-sm sm:text-base">
                <Sparkles className="w-4 h-4 text-[#f39c12]" />
                <span>1. Bảng Màu Giao Diện Tối Ưu (9 Chủ Đề)</span>
              </h3>
              <span className="text-xs text-slate-400">
                Đang dùng:{' '}
                <strong className="text-[#f39c12]">
                  {THEME_PRESETS.find((p) => p.id === prefs.presetId)?.name || 'Màu Tự Pha Cá Nhân'}
                </strong>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {THEME_PRESETS.map((preset) => {
                const isSelected = prefs.presetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleSelectPreset(preset.id)}
                    className={`group text-left p-3.5 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between gap-2.5 ${
                      isSelected
                        ? 'border-[#e94560] bg-white/10 shadow-lg'
                        : 'border-white/10 bg-black/25 hover:border-white/30 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
                          {preset.mode === 'light' ? (
                            <Sun className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          ) : (
                            <Moon className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          )}
                          <span>{preset.name}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                          {preset.subtitle}
                        </p>
                      </div>
                      {isSelected && (
                        <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                      )}
                    </div>

                    {/* Color Palette Preview Strip */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-6 h-6 rounded-lg border border-white/25 shadow-sm"
                          style={{ backgroundColor: preset.bgColor }}
                          title={`Nền: ${preset.bgColor}`}
                        />
                        <span
                          className="w-6 h-6 rounded-lg border border-white/25 shadow-sm"
                          style={{ backgroundColor: preset.cardColor }}
                          title={`Thẻ: ${preset.cardColor}`}
                        />
                        <span
                          className="w-6 h-6 rounded-lg border border-white/25 shadow-sm"
                          style={{ backgroundColor: preset.primaryColor }}
                          title={`Điểm nhấn chính: ${preset.primaryColor}`}
                        />
                        <span
                          className="w-6 h-6 rounded-lg border border-white/25 shadow-sm"
                          style={{ backgroundColor: preset.secondaryColor }}
                          title={`Điểm nhấn phụ: ${preset.secondaryColor}`}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {preset.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SECTION 2: TỰ PHA MÀU THEO SỞ THÍCH CÁ NHÂN */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/30 border border-white/10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-bold text-white flex items-center gap-2 text-sm sm:text-base">
                <Sliders className="w-4 h-4 text-[#e94560]" />
                <span>2. Tự Chọn Màu Theo Sở Thích Cá Nhân (Live Color Picker)</span>
              </h3>
              <span className="text-xs text-slate-400">
                Chế độ chữ tự động:{' '}
                <strong className="text-amber-300">
                  {isLightMode ? 'Nền Sáng (Chữ tối rõ nét)' : 'Nền Tối (Chữ sáng dịu mắt)'}
                </strong>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Picker 1: Background Color */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Màu Nền Trang Web
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={prefs.bgColor}
                    onChange={(e) => handleCustomColorChange('bgColor', e.target.value)}
                    className="w-10 h-9 rounded-lg cursor-pointer bg-transparent border border-white/20 shrink-0"
                  />
                  <input
                    type="text"
                    value={prefs.bgColor}
                    onChange={(e) => {
                      if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) {
                        handleCustomColorChange('bgColor', e.target.value);
                      }
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/15 font-mono text-xs text-white uppercase"
                  />
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {QUICK_BG_SWATCHES.map((hex) => (
                    <button
                      key={hex}
                      type="button"
                      onClick={() => handleCustomColorChange('bgColor', hex)}
                      className="w-4 h-4 rounded border border-white/30 cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: hex }}
                      title={hex}
                    />
                  ))}
                </div>
              </div>

              {/* Picker 2: Card Surface Color */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Màu Thẻ Tác Phẩm
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={prefs.cardColor}
                    onChange={(e) => {
                      onChangePrefs({
                        ...prefs,
                        presetId: 'custom',
                        cardColor: e.target.value,
                        surfaceColor: e.target.value,
                      });
                    }}
                    className="w-10 h-9 rounded-lg cursor-pointer bg-transparent border border-white/20 shrink-0"
                  />
                  <input
                    type="text"
                    value={prefs.cardColor}
                    onChange={(e) => {
                      if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) {
                        onChangePrefs({
                          ...prefs,
                          presetId: 'custom',
                          cardColor: e.target.value,
                          surfaceColor: e.target.value,
                        });
                      }
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/15 font-mono text-xs text-white uppercase"
                  />
                </div>
                <p className="text-[10px] text-slate-400">
                  Màu nền của các hộp thẻ bài học &amp; bảng phân tích
                </p>
              </div>

              {/* Picker 3: Primary Accent Color */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Màu Chủ Đạo (Nút &amp; Viền)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={prefs.primaryColor}
                    onChange={(e) => handleCustomColorChange('primaryColor', e.target.value)}
                    className="w-10 h-9 rounded-lg cursor-pointer bg-transparent border border-white/20 shrink-0"
                  />
                  <input
                    type="text"
                    value={prefs.primaryColor}
                    onChange={(e) => {
                      if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) {
                        handleCustomColorChange('primaryColor', e.target.value);
                      }
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/15 font-mono text-xs text-white uppercase"
                  />
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {QUICK_PRIMARY_SWATCHES.map((hex) => (
                    <button
                      key={hex}
                      type="button"
                      onClick={() => handleCustomColorChange('primaryColor', hex)}
                      className="w-4 h-4 rounded border border-white/30 cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: hex }}
                      title={hex}
                    />
                  ))}
                </div>
              </div>

              {/* Picker 4: Secondary Accent Color */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Màu Nhấn Phụ (Tiêu Đề)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={prefs.secondaryColor}
                    onChange={(e) => handleCustomColorChange('secondaryColor', e.target.value)}
                    className="w-10 h-9 rounded-lg cursor-pointer bg-transparent border border-white/20 shrink-0"
                  />
                  <input
                    type="text"
                    value={prefs.secondaryColor}
                    onChange={(e) => {
                      if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) {
                        handleCustomColorChange('secondaryColor', e.target.value);
                      }
                    }}
                    className="w-full px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/15 font-mono text-xs text-white uppercase"
                  />
                </div>
                <p className="text-[10px] text-slate-400">
                  Màu nhấn cho tên tác giả, trích dẫn &amp; tiêu đề mục
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 3: TỐI ƯU HÓA HIỂN THỊ, PHÔNG CHỮ & CỠ CHỮ TOÀN TRANG */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/30 border border-white/10 space-y-4">
            <h3 className="font-bold text-white flex items-center gap-2 text-sm sm:text-base">
              <Type className="w-4 h-4 text-[#f39c12]" />
              <span>3. Tối Ưu Hóa Đọc Bài, Cỡ Chữ &amp; Hiệu Năng Hiển Thị</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Font Scale */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Cỡ chữ toàn trang web:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(
                    [
                      { id: 'sm', label: 'Nhỏ (95%)' },
                      { id: 'md', label: 'Chuẩn (100%)' },
                      { id: 'lg', label: 'Lớn (106%)' },
                      { id: 'xl', label: 'Rất lớn (112%)' },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onChangePrefs({ ...prefs, fontScale: item.id })}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        prefs.fontScale === item.id
                          ? 'bg-[#e94560] text-white border-[#e94560] shadow-md'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Family */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">
                  Kiểu phông chữ toàn trang:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'sans', label: 'Hiện đại (Sans)' },
                      { id: 'serif', label: 'Văn chương (Serif)' },
                      { id: 'display', label: 'Nghệ thuật' },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => onChangePrefs({ ...prefs, fontFamily: item.id })}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        prefs.fontFamily === item.id
                          ? 'bg-[#e94560] text-white border-[#e94560] shadow-md'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Comfort Toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => onChangePrefs({ ...prefs, ambientGlow: !prefs.ambientGlow })}
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 flex items-center justify-between gap-3 cursor-pointer text-left"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#f39c12] shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-xs">Hiệu ứng ánh sáng nền (Ambient Glow)</div>
                    <div className="text-[11px] text-slate-400">Tắt để tối ưu tốc độ &amp; tiết kiệm pin</div>
                  </div>
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                    prefs.ambientGlow ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {prefs.ambientGlow ? 'Đang bật' : 'Đã tắt'}
                </span>
              </button>

              <button
                type="button"
                onClick={() =>
                  onChangePrefs({ ...prefs, highContrastBorders: !prefs.highContrastBorders })
                }
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 flex items-center justify-between gap-3 cursor-pointer text-left"
              >
                <div className="flex items-center gap-2.5">
                  <Eye className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-white text-xs">Viền thẻ tương phản cao (Rõ nét)</div>
                    <div className="text-[11px] text-slate-400">Giúp phân tách rõ các khung kiến thức</div>
                  </div>
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                    prefs.highContrastBorders
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {prefs.highContrastBorders ? 'Đang bật' : 'Tiêu chuẩn'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3.5 bg-[#121526] border-t border-white/10 flex items-center justify-between gap-3 text-xs">
          <span className="text-slate-400">
            Màu sắc và cỡ chữ được tự động lưu cho những lần truy cập sau.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl font-bold text-white shadow-lg transition-transform hover:scale-105 cursor-pointer"
            style={{
              background: `linear-gradient(135deg, ${prefs.primaryColor}, ${prefs.secondaryColor})`,
            }}
          >
            Hoàn tất &amp; Áp dụng
          </button>
        </div>
      </div>
    </div>
  );
};
