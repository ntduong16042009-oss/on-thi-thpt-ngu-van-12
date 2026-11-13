import React from 'react';

interface SchoolInfoCardsProps {
  onOpenProjectInfo?: () => void;
}

export const SchoolInfoCards: React.FC<SchoolInfoCardsProps> = ({ onOpenProjectInfo }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 sm:gap-5 max-w-6xl mx-auto">
      {/* CARD 1 – NHÀ TRƯỜNG */}
      <div
        onClick={onOpenProjectInfo}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onOpenProjectInfo?.();
        }}
        title="Nhấn để xem chi tiết Sản phẩm học tập số - Trường THPT Yên Lãng"
        className="group relative rounded-2xl fantasy-glass fantasy-glass-hover px-4 sm:px-5 py-3.5 flex items-center gap-3.5 text-left cursor-pointer overflow-hidden"
      >
        <span className="pointer-events-none absolute top-1.5 left-2 text-[9px] text-[#F5D58A]/45">╔</span>
        <span className="pointer-events-none absolute top-1.5 right-2 text-[9px] text-[#F5D58A]/45">╗</span>
        <span className="pointer-events-none absolute bottom-1.5 left-2 text-[9px] text-[#F5D58A]/45">╚</span>
        <span className="pointer-events-none absolute bottom-1.5 right-2 text-[9px] text-[#F5D58A]/45">╝</span>

        {/* 3D-Styled Golden School Emblem */}
        <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-[#2A2218] to-[#121016] border border-[#D9A84E]/65 flex items-center justify-center shrink-0 shadow-[0_0_22px_rgba(217,168,78,0.28),inset_0_1px_2px_rgba(245,213,138,0.4)] group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 drop-shadow-[0_2px_6px_rgba(217,168,78,0.5)]">
            <defs>
              <linearGradient id="schoolGold" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFF6D6" />
                <stop offset="50%" stopColor="#F5D58A" />
                <stop offset="100%" stopColor="#B87E22" />
              </linearGradient>
            </defs>
            <path
              d="M24 6L8 15V18H40V15L24 6ZM24 10.5L33 15.5H15L24 10.5Z"
              fill="url(#schoolGold)"
            />
            <path
              d="M12 20V35H17V25H21V35H27V25H31V35H36V20H12Z"
              fill="url(#schoolGold)"
              fillOpacity="0.9"
            />
            <path
              d="M6 37H42V41H6V37Z"
              fill="url(#schoolGold)"
            />
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#F5D58A]">
            SẢN PHẨM HỌC TẬP SỐ
          </div>
          <div className="text-base sm:text-[17px] font-extrabold text-white tracking-tight truncate mt-0.5">
            Trường THPT Yên Lãng
          </div>
          <div className="text-xs text-[#C8D2E3] mt-0.5">
            (Khóa: 2024 - 2027)
          </div>
        </div>
      </div>

      {/* CARD 2 – GIÁO VIÊN */}
      <div
        onClick={onOpenProjectInfo}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onOpenProjectInfo?.();
        }}
        title="Giáo viên hướng dẫn: Cô Võ Thị Mỹ Ngà - Tổ Ngữ Văn"
        className="group relative rounded-2xl fantasy-glass fantasy-glass-hover px-4 sm:px-5 py-3.5 flex items-center gap-3.5 text-left cursor-pointer overflow-hidden"
      >
        <span className="pointer-events-none absolute top-1.5 left-2 text-[9px] text-[#B892FF]/45">╔</span>
        <span className="pointer-events-none absolute top-1.5 right-2 text-[9px] text-[#B892FF]/45">╗</span>
        <span className="pointer-events-none absolute bottom-1.5 left-2 text-[9px] text-[#B892FF]/45">╚</span>
        <span className="pointer-events-none absolute bottom-1.5 right-2 text-[9px] text-[#B892FF]/45">╝</span>

        {/* Royal Purple Glowing Teacher Emblem Matching Reference */}
        <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-[#2E1B4B] to-[#130D24] border-2 border-[#9B6PE2] flex items-center justify-center shrink-0 shadow-[0_0_24px_rgba(121,84,166,0.55),inset_0_1px_2px_rgba(216,180,254,0.45)] group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7 drop-shadow-[0_0_8px_rgba(192,132,252,0.75)]">
            <circle cx="24" cy="17" r="7" fill="#E9D5FF" />
            <path
              d="M11 37C11 30.3726 16.8203 25 24 25C31.1797 25 37 30.3726 37 37V39H11V37Z"
              fill="#C084FC"
            />
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#D8B4FE]">
            GIÁO VIÊN:
          </div>
          <div className="mt-1 flex flex-wrap items-center justify-between gap-1.5">
            <span className="text-base sm:text-[17px] font-extrabold text-white tracking-tight">
              Võ Thị Mỹ Ngà
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#7954A6]/40 border border-[#B892FF]/50 text-[11px] font-semibold text-[#F3E8FF] shadow-[0_0_12px_rgba(121,84,166,0.35)] whitespace-nowrap">
              Tổ Ngữ Văn
            </span>
          </div>
        </div>
      </div>

      {/* CARD 3 – PHÁT TRIỂN WEB */}
      <div
        onClick={onOpenProjectInfo}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onOpenProjectInfo?.();
        }}
        title="Học sinh thực hiện & Phát triển web: Nguyễn Tùng Dương (12A4 - Khóa 2024–2027)"
        className="group relative rounded-2xl fantasy-glass fantasy-glass-hover px-4 sm:px-5 py-3.5 flex items-center gap-3.5 text-left cursor-pointer overflow-hidden"
      >
        <span className="pointer-events-none absolute top-1.5 left-2 text-[9px] text-[#F5D58A]/45">╔</span>
        <span className="pointer-events-none absolute top-1.5 right-2 text-[9px] text-[#F5D58A]/45">╗</span>
        <span className="pointer-events-none absolute bottom-1.5 left-2 text-[9px] text-[#F5D58A]/45">╚</span>
        <span className="pointer-events-none absolute bottom-1.5 right-2 text-[9px] text-[#F5D58A]/45">╝</span>

        {/* Golden Globe Web Emblem Matching Reference */}
        <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-[#2A2218] to-[#121016] border border-[#D9A84E]/70 flex items-center justify-center shrink-0 shadow-[0_0_22px_rgba(217,168,78,0.3),inset_0_1px_2px_rgba(245,213,138,0.4)] group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 drop-shadow-[0_2px_8px_rgba(217,168,78,0.5)]">
            <circle cx="24" cy="24" r="15" stroke="#F5D58A" strokeWidth="2.2" />
            <ellipse cx="24" cy="24" rx="7.5" ry="15" stroke="#F5D58A" strokeWidth="2" />
            <path d="M9.5 24H38.5M11.5 17H36.5M11.5 31H36.5" stroke="#D9A84E" strokeWidth="1.8" />
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#F5D58A]">
            PHÁT TRIỂN WEB:
          </div>
          <div className="mt-1 flex flex-wrap items-center justify-between gap-1.5">
            <span className="text-base sm:text-[17px] font-extrabold text-white tracking-tight">
              Nguyễn Tùng Dương
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#D9A84E]/25 border border-[#F5D58A]/50 text-[10px] sm:text-[11px] font-bold text-[#FFF6D6] shadow-[0_0_12px_rgba(217,168,78,0.25)] whitespace-nowrap">
              12A4 - Khóa 2024-2027
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
