import React, { useState } from 'react';
import {
  Search,
  Phone,
  User,
  Bookmark,
  Palette,
  GraduationCap,
  Check,
  Copy,
  Menu,
  Music,
  X,
} from 'lucide-react';

export type AppNavTab = 'works' | 'schedule' | 'exams-bank' | 'spec' | 'exam' | 'quiz' | 'compare' | 'ai';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  activeTab: AppNavTab;
  onTabChange: (tab: AppNavTab) => void;
  savedCount: number;
  showSavedOnly: boolean;
  onToggleSavedOnly: () => void;
  onOpenThemeModal?: () => void;
  onOpenProjectInfo?: () => void;
  onOpenMobileSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  activeTab,
  onTabChange,
  savedCount,
  showSavedOnly,
  onToggleSavedOnly,
  onOpenThemeModal,
  onOpenProjectInfo,
  onOpenMobileSidebar,
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleCopyPhone = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigator.clipboard.writeText('0326516500');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <header className="relative z-30 w-full px-3 sm:px-6 lg:px-8 pt-3.5 pb-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2.5 sm:gap-4">
        {/* Left Zone: Mobile Hamburger + Subtitle Banner Pill */}
        <div className="flex items-center gap-2.5 min-w-0 flex-1 max-w-2xl">
          {/* Mobile Hamburger Menu Button */}
          {onOpenMobileSidebar && (
            <button
              type="button"
              onClick={onOpenMobileSidebar}
              className="md:hidden p-2.5 rounded-xl bg-[#0E152B]/85 hover:bg-[#131C36] text-[#F5D58A] border border-[#D9A84E]/45 shadow-lg active:scale-95 transition-all cursor-pointer shrink-0"
              aria-label="Mở menu điều hướng"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          {/* Glassmorphic Tagline Banner Matching Reference Top-Left */}
          <div
            onClick={() => onTabChange('works')}
            className="relative group flex-1 flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0B1021]/80 via-[#121932]/75 to-[#0B1021]/45 backdrop-blur-md border border-[#D9A84E]/35 hover:border-[#F5D58A]/70 shadow-[0_8px_28px_rgba(0,0,0,0.45)] cursor-pointer transition-all min-w-0"
          >
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5D58A] shrink-0 drop-shadow-[0_0_8px_rgba(245,213,138,0.6)]" />
            <span className="text-xs sm:text-sm font-medium text-[#F8FAFC] tracking-wide truncate">
              Hệ Thống Ôn Thi &amp; Chinh Phục Đỉnh THPT Quốc Gia
            </span>
            {/* Decorative golden bottom sparkle line matching reference */}
            <div className="pointer-events-none absolute -bottom-[1px] left-6 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#F5D58A]/85 to-transparent" />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1.5 right-10 text-[11px] text-[#F5D58A] drop-shadow-[0_0_8px_rgba(245,213,138,0.95)] hidden sm:inline"
            >
              ✦
            </span>
          </div>
        </div>

        {/* Right Zone: Phone Pill + Saved + Theme + Music + User Profile Avatar */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Mobile Quick Search Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            className={`p-2.5 rounded-2xl border transition-all sm:hidden cursor-pointer active:scale-95 ${
              isMobileSearchOpen || searchTerm
                ? 'bg-[#D9A84E]/30 text-[#FFF6D6] border-[#F5D58A]'
                : 'bg-[#0E152B]/85 text-[#F5D58A] border-[#D9A84E]/35'
            }`}
            title="Tìm kiếm tác phẩm"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Phone Number Pill Matching Reference (Emerald Green #27B98B) */}
          <div className="hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#091922]/85 backdrop-blur-md border border-[#27B98B]/50 hover:border-[#27B98B] shadow-[0_4px_20px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(39,185,139,0.2)] transition-all group">
            <a
              href="tel:0326516500"
              className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#34D399] hover:text-emerald-200 tracking-wider transition-colors whitespace-nowrap"
              title="Gọi ngay 0326516500"
            >
              <Phone className="w-4 h-4 fill-[#34D399]/25 text-[#34D399]" />
              <span>0326516500</span>
            </a>
            <button
              type="button"
              onClick={handleCopyPhone}
              className="p-0.5 rounded-full text-[#34D399]/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Sao chép số điện thoại 0326516500"
            >
              {copiedPhone ? (
                <Check className="w-3.5 h-3.5 text-[#34D399]" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </button>
          </div>

          {/* Nút Đã Lưu */}
          <button
            type="button"
            onClick={onToggleSavedOnly}
            title={showSavedOnly ? 'Hiển thị tất cả tác phẩm' : 'Chỉ xem tác phẩm đã lưu'}
            className={`relative flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl border backdrop-blur-md transition-all cursor-pointer active:scale-95 ${
              showSavedOnly
                ? 'bg-gradient-to-b from-[#D9A84E]/40 to-[#8F6519]/40 border-[#F5D58A] text-[#FFF8E1] shadow-[0_0_18px_rgba(217,168,78,0.45)]'
                : 'bg-[#0C1224]/80 hover:bg-[#162040]/90 border-[#D9A84E]/40 hover:border-[#F5D58A]/75 text-[#F8FAFC]'
            }`}
          >
            <Bookmark className={`w-4 h-4 text-[#F5D58A] ${showSavedOnly ? 'fill-current' : ''}`} />
            <div className="hidden sm:flex flex-col items-start leading-[1.1] text-left">
              <span className="text-[11px] font-bold">Đã</span>
              <span className="text-[11px] font-bold">Lưu</span>
            </div>
            {savedCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#D9A84E] text-[#080D1C] font-extrabold">
                {savedCount}
              </span>
            )}
          </button>

          {/* Nút Đổi Màu */}
          {onOpenThemeModal && (
            <button
              type="button"
              onClick={onOpenThemeModal}
              title="Đổi màu trang web, chế độ Sáng/Tối/Giấy cổ & cỡ chữ"
              className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl bg-[#0C1224]/80 hover:bg-[#162040]/90 border border-[#D9A84E]/40 hover:border-[#F5D58A]/75 text-[#F8FAFC] backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all cursor-pointer active:scale-95"
            >
              <Palette className="w-4 h-4 text-[#F5D58A]" />
              <div className="hidden sm:flex flex-col items-start leading-[1.1] text-left">
                <span className="text-[11px] font-bold">Đổi</span>
                <span className="text-[11px] font-bold">Màu</span>
              </div>
            </button>
          )}

          {/* Nút Nhạc Ôn Bài */}
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-music-player'))}
            title="Mở trình phát Nhạc Ôn Bài SoundCloud (51 bài - Không dừng khi đọc bài)"
            className="hidden sm:flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-gradient-to-r from-[#4A1C34]/85 via-[#5B2139]/85 to-[#331325]/85 hover:from-[#5E2238] hover:to-[#4A1C34] border border-[#D9A84E]/45 hover:border-[#F5D58A] text-[#FFF6D6] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.45)] transition-all cursor-pointer active:scale-95"
          >
            <Music className="w-4 h-4 text-[#F5D58A]" />
            <div className="flex flex-col items-start leading-[1.1] text-left">
              <span className="text-[11px] font-bold">Nhạc</span>
              <span className="text-[11px] font-bold">Ôn Bài</span>
            </div>
          </button>

          {/* Avatar / Project & Author Profile Trigger Matching Reference Top-Right */}
          <button
            type="button"
            onClick={() => {
              if (onOpenProjectInfo) {
                onOpenProjectInfo();
              } else {
                setIsContactModalOpen(true);
              }
            }}
            title="Thông tin Sản phẩm học tập số: THPT Yên Lãng - GV: Võ Thị Mỹ Ngà - HS: Nguyễn Tùng Dương 12A4"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-b from-[#1A233D]/90 to-[#0B1021]/90 border border-[#D9A84E]/60 hover:border-[#F5D58A] flex items-center justify-center text-[#F5D58A] shadow-[0_0_15px_rgba(217,168,78,0.25)] hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#D9A84E]/15 border border-[#F5D58A]/45 flex items-center justify-center">
              <User className="w-4 h-4 text-[#F5D58A]" />
            </div>
          </button>
        </div>
      </div>

      {/* Expandable Mobile Search Input */}
      {isMobileSearchOpen && (
        <div className="mt-2.5 sm:hidden animate-in slide-in-from-top-2 duration-150">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-[#F5D58A] absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                if (activeTab !== 'works') onTabChange('works');
                onSearchChange(e.target.value);
              }}
              placeholder="Tìm tác phẩm, tác giả, câu thơ..."
              autoFocus
              className="w-full pl-10 pr-9 py-2.5 text-xs bg-[#090D1A]/95 text-white placeholder-slate-400 rounded-xl border border-[#D9A84E]/60 outline-none shadow-xl"
            />
            {searchTerm ? (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3 text-slate-400 hover:text-white text-xs"
              >
                ✕
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsMobileSearchOpen(false)}
                className="absolute right-3 text-slate-400 hover:text-white text-xs"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Contact / Author Fallback Modal */}
      {isContactModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl fantasy-glass p-5 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#D9A84E]/25">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-[#D9A84E]/20 border border-[#F5D58A]/50 flex items-center justify-center">
                  <User className="w-5 h-5 text-[#F5D58A]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Nguyễn Tùng Dương</h3>
                  <p className="text-xs text-slate-300">Phát triển web · Lớp 12A4 (2024–2027)</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsContactModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-[#27B98B]/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#27B98B]" />
                <span className="font-mono text-sm font-bold text-[#27B98B]">0326516500</span>
              </div>
              <a
                href="tel:0326516500"
                className="px-3 py-1 rounded-lg bg-[#27B98B] text-[#080D1C] text-xs font-bold"
              >
                Gọi ngay
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
