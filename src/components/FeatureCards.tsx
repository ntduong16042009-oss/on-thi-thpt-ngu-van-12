import React from 'react';
import { AppNavTab } from './Header';
import { WORKS_DATA } from '../data/worksData';
import { Compass, GraduationCap, Scale, Sparkles } from 'lucide-react';

interface FeatureCardsProps {
  onStartCatalog: () => void;
  onSelectTab: (tab: AppNavTab) => void;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({
  onStartCatalog,
  onSelectTab,
}) => {
  const fourMainFeatures = [
    {
      id: 'works',
      line1: 'Kho',
      line2: 'Tác Phẩm',
      subtitle: `${WORKS_DATA.length} tác phẩm`,
      onClick: onStartCatalog,
      svg: (
        <svg viewBox="0 0 64 56" fill="none" className="w-12 h-11 drop-shadow-[0_4px_12px_rgba(217,168,78,0.45)]">
          <defs>
            <linearGradient id="featBookGrad" x1="0" y1="0" x2="64" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF6D6" />
              <stop offset="50%" stopColor="#F5D58A" />
              <stop offset="100%" stopColor="#B87E22" />
            </linearGradient>
          </defs>
          <path
            d="M32 14C24.5 9 13 8 5 10V40C13 38 24.5 39 32 44C39.5 39 51 38 59 40V10C51 8 39.5 9 32 14Z"
            fill="url(#featBookGrad)"
          />
          <path
            d="M32 14V44M4 44C12.5 41.5 24 42.5 32 47.5C40 42.5 51.5 41.5 60 44"
            stroke="#FFF6D6"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 'quiz',
      line1: 'Thử Thách',
      line2: 'Văn Học',
      subtitle: 'Trắc nghiệm',
      onClick: () => onSelectTab('quiz'),
      svg: (
        <svg viewBox="0 0 64 56" fill="none" className="w-12 h-11 drop-shadow-[0_4px_12px_rgba(217,168,78,0.45)]">
          <defs>
            <linearGradient id="featTrophyGrad" x1="0" y1="0" x2="64" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF6D6" />
              <stop offset="50%" stopColor="#F5D58A" />
              <stop offset="100%" stopColor="#B87E22" />
            </linearGradient>
          </defs>
          <path
            d="M19 10H45V22C45 29.1797 39.1797 35 32 35C24.8203 35 19 29.1797 19 22V10Z"
            fill="url(#featTrophyGrad)"
          />
          <path
            d="M19 14H12V20C12 24.5 15 27.5 19.5 28M45 14H52V20C52 24.5 49 27.5 44.5 28"
            stroke="#F5D58A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path d="M29 35H35V43H29V35Z" fill="url(#featTrophyGrad)" />
          <path d="M21 43H43V47H21V43Z" fill="url(#featTrophyGrad)" />
        </svg>
      ),
    },
    {
      id: 'schedule',
      line1: 'Bảo Tàng',
      line2: 'Văn Học',
      subtitle: 'Bài 1–9 & Tác giả',
      onClick: () => onSelectTab('schedule'),
      svg: (
        <svg viewBox="0 0 64 56" fill="none" className="w-12 h-11 drop-shadow-[0_4px_12px_rgba(217,168,78,0.45)]">
          <defs>
            <linearGradient id="featMuseumGrad" x1="0" y1="0" x2="64" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF6D6" />
              <stop offset="50%" stopColor="#F5D58A" />
              <stop offset="100%" stopColor="#B87E22" />
            </linearGradient>
          </defs>
          <path d="M32 8L10 19V22H54V19L32 8Z" fill="url(#featMuseumGrad)" />
          <path
            d="M15 24H20V40H15V24ZM26 24H31V40H26V24ZM33 24H38V40H33V24ZM44 24H49V40H44V24Z"
            fill="url(#featMuseumGrad)"
          />
          <path d="M10 42H54V46H10V42Z" fill="url(#featMuseumGrad)" />
        </svg>
      ),
    },
    {
      id: 'exams-bank',
      line1: 'Đề Văn',
      line2: 'Hay',
      subtitle: 'Đề chuẩn Bộ GD',
      onClick: () => onSelectTab('exams-bank'),
      svg: (
        <svg viewBox="0 0 64 56" fill="none" className="w-12 h-11 drop-shadow-[0_4px_12px_rgba(217,168,78,0.45)]">
          <defs>
            <linearGradient id="featStarGrad" x1="0" y1="0" x2="64" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF6D6" />
              <stop offset="50%" stopColor="#F5D58A" />
              <stop offset="100%" stopColor="#B87E22" />
            </linearGradient>
          </defs>
          <path
            d="M32 6L36.5 22.5L53 27L36.5 31.5L32 48L27.5 31.5L11 27L27.5 22.5L32 6Z"
            fill="url(#featStarGrad)"
          />
          <path
            d="M20 15L44 39M44 15L20 39"
            stroke="#FFF6D6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative rounded-3xl fantasy-glass p-4 sm:p-5 flex flex-col justify-between h-full overflow-hidden">
      {/* Ornate Corner Flourishes */}
      <span className="pointer-events-none absolute top-2 left-2.5 text-[10px] text-[#F5D58A]/50">╔</span>
      <span className="pointer-events-none absolute top-2 right-2.5 text-[10px] text-[#F5D58A]/50">╗</span>
      <span className="pointer-events-none absolute bottom-2 left-2.5 text-[10px] text-[#F5D58A]/50">╚</span>
      <span className="pointer-events-none absolute bottom-2 right-2.5 text-[10px] text-[#F5D58A]/50">╝</span>

      {/* 4 Ornate Arch Feature Cards Matching Reference */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1">
        {fourMainFeatures.map((feat) => (
          <button
            key={feat.id}
            type="button"
            onClick={feat.onClick}
            className="group relative rounded-2xl bg-gradient-to-b from-[#17203B]/90 via-[#10162B]/95 to-[#0A0E1C]/95 border border-[#D9A84E]/45 hover:border-[#F5D58A] px-2.5 py-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(217,168,78,0.28)] cursor-pointer overflow-hidden"
          >
            {/* Inner Arch Decorative Border */}
            <div className="pointer-events-none absolute inset-1.5 rounded-xl border border-[#F5D58A]/15 group-hover:border-[#F5D58A]/40 transition-colors" />
            <span className="pointer-events-none absolute top-2 text-[8px] text-[#F5D58A]/60">✦</span>

            <div className="relative z-10 mb-2.5 transform group-hover:scale-110 transition-transform duration-300">
              <div className="absolute inset-0 bg-[#D9A84E]/20 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
              {feat.svg}
            </div>

            <div className="relative z-10 text-xs sm:text-sm font-bold text-[#FFF8E1] leading-snug group-hover:text-[#F5D58A] transition-colors">
              <div>{feat.line1}</div>
              <div>{feat.line2}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Secondary Quick Access Strip for the remaining specialized modules */}
      <div className="mt-3 pt-2.5 border-t border-[#D9A84E]/20 flex flex-wrap items-center justify-between gap-1.5">
        <button
          type="button"
          onClick={() => onSelectTab('spec')}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-[#D9A84E]/20 border border-[#D9A84E]/25 text-[11px] font-medium text-[#F5D58A] transition-colors cursor-pointer"
        >
          <Compass className="w-3 h-3" />
          <span>Chỉ Định &amp; Biểu Thức</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('exam')}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-[#D9A84E]/20 border border-[#D9A84E]/25 text-[11px] font-medium text-[#F5D58A] transition-colors cursor-pointer"
        >
          <GraduationCap className="w-3 h-3" />
          <span>Bí Quyết 8+ THPT</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('compare')}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-[#D9A84E]/20 border border-[#D9A84E]/25 text-[11px] font-medium text-[#F5D58A] transition-colors cursor-pointer"
        >
          <Scale className="w-3 h-3" />
          <span>Bảng So Sánh</span>
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('ai')}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-[#D9A84E]/20 border border-[#D9A84E]/25 text-[11px] font-medium text-[#F5D58A] transition-colors cursor-pointer"
        >
          <Sparkles className="w-3 h-3" />
          <span>Trợ Lý Dàn Ý AI</span>
        </button>
      </div>
    </div>
  );
};
