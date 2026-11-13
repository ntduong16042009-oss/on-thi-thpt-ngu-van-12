import React, { useState } from 'react';
import {
  Search,
  Code2,
  Palette,
} from 'lucide-react';
import { AppNavTab } from './Header';
import { SchoolInfoCards } from './SchoolInfoCards';
import { ExploreSection } from './ExploreSection';
import { THEME_PRESETS } from '../data/themePresetsData';
import { WORKS_DATA } from '../data/worksData';
import { AUTHOR_PORTRAITS_BY_WORK } from '../data/authorPortraitsData';
import fantasyHeroBg from '../assets/images/hero_fantasy_castle_exact_1794538637090.jpg';

export interface HeroSectionProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  onSelectSuggestion: (val: string) => void;
  onStartCatalog: () => void;
  onSelectTab: (tab: AppNavTab) => void;
  onOpenSpecTab?: () => void;
  onOpenScheduleTab?: () => void;
  onOpenExamsBankTab?: () => void;
  onOpenThemeModal?: () => void;
  activeThemeId?: string;
  onQuickSelectTheme?: (presetId: string) => void;
  onOpenProjectInfo?: () => void;
  topHeader?: React.ReactNode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchTerm,
  onSearchChange,
  onSelectSuggestion,
  onStartCatalog,
  onSelectTab,
  onOpenThemeModal,
  activeThemeId,
  onQuickSelectTheme,
  onOpenProjectInfo,
  topHeader,
}) => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const totalWorksCount = WORKS_DATA.length;
  const uniqueAuthorsCount = new Set(
    Object.values(AUTHOR_PORTRAITS_BY_WORK).map((item) => item.authorName)
  ).size;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({
      x: Math.round(relX * -10),
      y: Math.round(relY * -8),
    });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  const popularKeywords = [
    'Xuân Tóc Đỏ cứu quốc',
    'Mùa lá rụng trong vườn',
    'Cảm hoài',
    'Tây Tiến',
    'Đàn ghi ta của Lor-ca',
    'Muối của rừng',
    'Nhân vật quan trọng',
    'Giấu của',
    'Vội vàng',
    'Vợ chồng A Phủ',
    'Vợ nhặt',
    'Người lái đò Sông Đà',
  ];

  const expressionShortcuts = [
    { label: 'Bài 1–2: Tiểu thuyết & Thơ', value: '(Xuân Tóc Đỏ|Mùa lá rụng|Cảm hoài|Tây Tiến|Lor-ca)' },
    { label: 'Bài 4–5: Truyện kì ảo & Hài kịch', value: '(Hải khẩu linh từ|Muối của rừng|Nhân vật quan trọng|Giấu của)' },
    { label: 'Bài 6: Tác gia Hồ Chí Minh', value: '(Hồ Chí Minh|Nguyên tiêu|Va-ren|Tuyên ngôn)' },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Kho Tàng Văn Học 12 - Học Viện Văn Học Huyền Ảo"
      className="relative overflow-hidden pb-8 sm:pb-12 text-center"
    >
      {/* =====================================================================
          EXACT FULL-BLEED FANTASY LIBRARY CASTLE BACKDROP (Covers Header + Hero)
         ===================================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div
          className="w-full h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0) scale(1.03)`,
          }}
        >
          <img
            src={fantasyHeroBg}
            alt="Lâu đài thư viện văn học huyền ảo với hoa anh đào, học trò đọc sách và thác nước dưới ánh trăng"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top opacity-85"
          />
        </div>

        {/* Measured Scrims: keep top-left blossoms & right moon-castle vivid while ensuring crisp text contrast in center & seamless bottom transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080D1C]/35 via-[#080D1C]/20 to-[#080D1C]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,13,28,0.42)_0%,rgba(8,13,28,0.68)_85%)]" />

        {/* Floating Golden Stardust Particles */}
        <span className="absolute top-[13%] left-[25%] text-[#F5D58A] text-xs animate-twinkle">✦</span>
        <span className="absolute top-[18%] right-[28%] text-[#FFF6D6] text-sm animate-twinkle" style={{ animationDelay: '1.1s' }}>✦</span>
        <span className="absolute top-[33%] left-[19%] text-[#D9A84E] text-[10px] animate-twinkle" style={{ animationDelay: '2.2s' }}>✦</span>
        <span className="absolute top-[25%] right-[19%] text-[#F5D58A] text-xs animate-twinkle" style={{ animationDelay: '0.6s' }}>✦</span>
      </div>

      {/* Top Glassmorphic Header inside Hero Backdrop so blossoms & moon frame it just like reference */}
      {topHeader && <div className="relative z-20">{topHeader}</div>}

      {/* =====================================================================
          HERO CENTERPIECE: KHO TÀNG VĂN HỌC 12
         ===================================================================== */}
      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 pt-2 sm:pt-4 space-y-5 sm:space-y-6">
        <div className="flex flex-col items-center">
          {/* Top Kicker: "— Kho Tàng —" */}
          <div className="flex items-center justify-center gap-3 mb-0.5">
            <div className="w-14 sm:w-28 h-[1px] bg-gradient-to-r from-transparent to-[#F5D58A]/85" />
            <span className="font-fantasy italic text-2xl sm:text-4xl font-semibold text-[#FFF4CC] tracking-wide drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
              Kho Tàng
            </span>
            <div className="w-14 sm:w-28 h-[1px] bg-gradient-to-l from-transparent to-[#F5D58A]/85" />
          </div>

          {/* Main Emblem Title: "Văn Học 12" with Feather Quill & Glowing Open Book */}
          <div className="relative inline-flex items-center justify-center px-4 sm:px-10">
            <div className="pointer-events-none absolute inset-0 bg-[#D9A84E]/15 blur-3xl rounded-full" />

            <h1 className="relative font-fantasy font-bold italic text-5xl sm:text-7xl lg:text-[86px] leading-[1.02] tracking-tight fantasy-gold-text select-none">
              Văn Học 12
            </h1>

            {/* Golden Feather Quill Accent at Top-Right of Title */}
            <svg
              viewBox="0 0 72 72"
              fill="none"
              aria-hidden="true"
              className="hidden sm:block w-14 h-14 lg:w-16 lg:h-16 -ml-3 -mt-10 drop-shadow-[0_4px_16px_rgba(245,213,138,0.65)] animate-float-slow"
            >
              <defs>
                <linearGradient id="quillGoldExact" x1="0" y1="0" x2="72" y2="72" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFDF5" />
                  <stop offset="45%" stopColor="#F5D58A" />
                  <stop offset="100%" stopColor="#B87E22" />
                </linearGradient>
              </defs>
              <path
                d="M60 8C42 10 26 24 19 42L10 62L15 62L24 46C38 44 52 32 60 8Z"
                fill="url(#quillGoldExact)"
              />
              <path
                d="M12 60L52 17"
                stroke="#FFFDF5"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Glowing Open Book Flourish Under "Văn Học 12" */}
          <div className="relative -mt-1.5 mb-2 flex items-center justify-center w-full max-w-lg">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D9A84E]/80 to-[#F5D58A]" />
            <svg
              viewBox="0 0 80 34"
              fill="none"
              aria-hidden="true"
              className="w-16 h-7 mx-2 drop-shadow-[0_0_14px_rgba(245,213,138,0.75)]"
            >
              <path
                d="M40 10C30 4.5 16 3.5 4 6.5V26C16 23 30 24 40 29.5C50 24 64 23 76 26V6.5C64 3.5 50 4.5 40 10Z"
                fill="#F5D58A"
              />
              <path d="M40 10V29.5" stroke="#080D1C" strokeWidth="2" />
            </svg>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D9A84E]/80 to-[#F5D58A]" />
          </div>

          {/* Slogan: “Khám phá thế giới văn học vô tận” */}
          <div className="flex items-center justify-center gap-3 w-full max-w-xl">
            <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#F5D58A]/50" />
            <p className="font-display text-base sm:text-xl lg:text-2xl text-[#FFF6D6] tracking-wide font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] whitespace-nowrap">
              “Khám phá thế giới văn học vô tận”
            </p>
            <div className="hidden sm:block h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#F5D58A]/50" />
          </div>

          {/* Ornamental Diamond Divider */}
          <div className="my-2 flex items-center justify-center gap-2 w-64 sm:w-96">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D9A84E]/80" />
            <span className="text-[#F5D58A] text-xs drop-shadow-[0_0_8px_rgba(245,213,138,0.95)]">✦</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D9A84E]/80" />
          </div>

          {/* Real Statistics Description Preserved 100% */}
          <p className="text-xs sm:text-[15px] text-[#EDF2F9] max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.98)] px-2">
            Đầy đủ <strong className="text-[#F5D58A] font-bold">{totalWorksCount}</strong> tác phẩm văn học chuẩn chương trình Ngữ văn 12 (từ Bài 1 đến Bài 9) — Kèm chân dung chuẩn của{' '}
            <strong className="text-[#F5D58A] font-bold">{uniqueAuthorsCount}</strong> tác giả,{' '}
            <strong className="text-white font-semibold">Đề văn hay ra &amp; Đề tham khảo chuẩn form hiện nay</strong> và dàn ý{' '}
            <strong className="text-[#F5D58A] font-bold">9+</strong>.
          </p>
        </div>

        {/* =====================================================================
            SECTION D: 3 HORIZONTAL SCHOOL / TEACHER / DEVELOPER INFO CARDS
           ===================================================================== */}
        <SchoolInfoCards onOpenProjectInfo={onOpenProjectInfo} />

        {/* =====================================================================
            SECTION E: KHÁM PHÁ NGAY & 4 ORNATE FEATURE CARDS
           ===================================================================== */}
        <ExploreSection
          onStartCatalog={onStartCatalog}
          onSelectTab={onSelectTab}
        />

        {/* =====================================================================
            SEARCH BAR, POPULAR WORKS & LESSON REGEX SHORTCUTS (PRESERVED 100%)
           ===================================================================== */}
        <div className="pt-1 max-w-5xl mx-auto space-y-3">
          {/* Search Input */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="relative flex items-center rounded-full fantasy-glass overflow-hidden focus-within:border-[#F5D58A] transition-all">
              <Search className="w-5 h-5 text-[#F5D58A] absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={`Tìm nhanh trong ${totalWorksCount} tác phẩm, ${uniqueAuthorsCount} tác giả, câu thơ (Xuân Tóc Đỏ, Tây Tiến, Vợ nhặt)...`}
                className="w-full pl-12 pr-11 py-3 bg-transparent text-white placeholder-[#A3B1C6] outline-none text-xs sm:text-sm"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-4 text-[#F5D58A] hover:text-white p-1 rounded-full cursor-pointer"
                  title="Xóa tìm kiếm"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Popular Works Quick Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-[#C8D2E3]">
            <span className="mr-1 text-[#F5D58A] font-semibold">Tác phẩm tiêu biểu:</span>
            {popularKeywords.map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => onSelectSuggestion(kw)}
                className="px-2.5 py-1 rounded-full bg-[#0E152B]/80 hover:bg-[#D9A84E]/25 text-[#E2E8F0] hover:text-[#FFF8E1] border border-[#D9A84E]/30 hover:border-[#F5D58A]/70 transition-all cursor-pointer active:scale-95 text-[11px]"
              >
                {kw}
              </button>
            ))}
          </div>

          {/* Regex Lesson Shortcuts & Quick Theme Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-[#F5D58A] font-semibold inline-flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5" />
              <span>Lọc nhanh theo Bài học:</span>
            </span>
            {expressionShortcuts.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => onSelectSuggestion(item.value)}
                className="px-3 py-1 rounded-full bg-[#7954A6]/20 hover:bg-[#7954A6]/35 text-[#E9D5FF] border border-[#B892FF]/40 transition-all font-mono text-[11px] cursor-pointer active:scale-95"
              >
                {item.label}
              </button>
            ))}

            {onQuickSelectTheme && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0E152B]/80 border border-[#D9A84E]/30 text-[11px]">
                <Palette className="w-3.5 h-3.5 text-[#F5D58A]" />
                <span className="text-[#C8D2E3] hidden sm:inline">Chủ đề:</span>
                {THEME_PRESETS.slice(0, 5).map((preset) => {
                  const isSelected = activeThemeId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => onQuickSelectTheme(preset.id)}
                      title={`${preset.name} — ${preset.subtitle}`}
                      className={`w-4 h-4 rounded-full border transition-transform cursor-pointer ${
                        isSelected ? 'scale-125 border-white shadow-[0_0_8px_rgba(245,213,138,0.8)]' : 'border-white/40 opacity-80 hover:opacity-100'
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${preset.bgColor} 45%, ${preset.primaryColor} 55%)`,
                      }}
                    />
                  );
                })}
                {onOpenThemeModal && (
                  <button
                    type="button"
                    onClick={onOpenThemeModal}
                    className="text-[#F5D58A] hover:underline font-semibold ml-1 cursor-pointer"
                  >
                    Tùy chỉnh
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
