import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AppNavTab } from './Header';
import { FeatureCards } from './FeatureCards';
import { WORKS_DATA } from '../data/worksData';
import { AUTHOR_PORTRAITS_BY_WORK } from '../data/authorPortraitsData';
import exploreDeskImg from '../assets/images/explore_desk_exact_1794538636225.jpg';

interface ExploreSectionProps {
  onStartCatalog: () => void;
  onSelectTab: (tab: AppNavTab) => void;
}

export const ExploreSection: React.FC<ExploreSectionProps> = ({
  onStartCatalog,
  onSelectTab,
}) => {
  const uniqueAuthorsCount = new Set(
    Object.values(AUTHOR_PORTRAITS_BY_WORK).map((item) => item.authorName)
  ).size;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 max-w-6xl mx-auto items-stretch">
      {/* LEFT CARD: KHÁM PHÁ NGAY */}
      <div className="lg:col-span-6 relative rounded-3xl fantasy-glass fantasy-glass-hover overflow-hidden min-h-[218px] flex flex-col justify-between p-5 sm:p-7 text-left group">
        {/* Background Vintage Books, Feather Quill & Warm Lantern Illustration */}
        <img
          src={exploreDeskImg}
          alt="Bàn học cổ điển với chồng sách văn học, bút lông vũ trong lọ mực và đèn bão ấm áp"
          referrerPolicy="no-referrer"
          className="pointer-events-none absolute inset-0 w-full h-full object-cover object-right opacity-95 group-hover:scale-105 transition-transform duration-700"
        />
        {/* Gentle left-only contrast gradient so text pops while right-side books/inkwell/lantern shine brightly */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#080D1C]/92 via-[#090F22]/65 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080D1C]/55 via-transparent to-transparent" />

        {/* Ornate Corner Flourishes */}
        <span className="pointer-events-none absolute top-2 left-2.5 text-[10px] text-[#F5D58A]/50 z-10">╔</span>
        <span className="pointer-events-none absolute top-2 right-2.5 text-[10px] text-[#F5D58A]/50 z-10">╗</span>
        <span className="pointer-events-none absolute bottom-2 left-2.5 text-[10px] text-[#F5D58A]/50 z-10">╚</span>
        <span className="pointer-events-none absolute bottom-2 right-2.5 text-[10px] text-[#F5D58A]/50 z-10">╝</span>

        <div className="relative z-10 max-w-[17rem] sm:max-w-[19rem] space-y-2.5">
          <div className="flex items-center gap-3">
            {/* Golden Open Book SVG Icon Matching Reference */}
            <svg
              viewBox="0 0 56 44"
              fill="none"
              className="w-9 h-8 shrink-0 drop-shadow-[0_2px_10px_rgba(245,213,138,0.5)]"
            >
              <path
                d="M28 10C21.5 6 12 5 5 6.5V33C12 31.5 21.5 32.5 28 36.5C34.5 32.5 44 31.5 51 33V6.5C44 5 34.5 6 28 10Z"
                fill="#F5D58A"
              />
              <path
                d="M28 10V36.5M4 36.5C11.5 34.5 21 35.5 28 39.5C35 35.5 44.5 34.5 52 36.5"
                stroke="#FFF6D6"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#FFF8E1] tracking-tight font-display">
              Khám Phá Ngay
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#D5DFEE] leading-relaxed">
            Bước vào hành trình khám phá văn học qua những chuyên mục hấp dẫn: trọn bộ {WORKS_DATA.length} tác phẩm, {uniqueAuthorsCount} chân dung tác giả và dàn ý 9+.
          </p>
        </div>

        <div className="relative z-10 pt-4">
          <button
            type="button"
            onClick={onStartCatalog}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#2D2215]/95 via-[#43311A]/95 to-[#2D2215]/95 hover:from-[#D9A84E]/45 hover:to-[#8F6519]/45 border border-[#F5D58A]/75 text-xs sm:text-sm font-bold text-[#FFF8E1] shadow-[0_0_22px_rgba(217,168,78,0.35),inset_0_1px_0_rgba(255,248,225,0.35)] hover:shadow-[0_0_30px_rgba(245,213,138,0.55)] active:scale-95 transition-all cursor-pointer group/btn"
          >
            <span>Bắt Đầu Hành Trình</span>
            <ArrowRight className="w-4 h-4 text-[#F5D58A] group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* RIGHT CARD: 4 ORNATE FEATURE CARDS */}
      <div className="lg:col-span-6">
        <FeatureCards
          onStartCatalog={onStartCatalog}
          onSelectTab={onSelectTab}
        />
      </div>
    </div>
  );
};
