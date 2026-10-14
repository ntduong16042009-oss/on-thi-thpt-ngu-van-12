import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Phone,
  User,
  Bookmark,
  Sparkles,
  BookOpen,
  GraduationCap,
  Scale,
  Check,
  Copy,
  Compass,
  Palette,
  Calendar,
  FileCheck2,
  X,
  ChevronRight,
  Download,
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
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const handleCopyPhone = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigator.clipboard.writeText('0326516500');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  // Scroll active nav tab into center on mobile touch
  useEffect(() => {
    if (!navContainerRef.current) return;
    const activeEl = navContainerRef.current.querySelector<HTMLElement>(`[data-nav-active="true"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeTab]);

  return (
    <header className="sticky top-0 z-40 bg-[#121526]/90 backdrop-blur-md border-b-2 border-[#e94560]/60 shadow-[0_4px_25px_rgba(233,69,96,0.25)] transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3">
        {/* Top bar with branding and quick actions */}
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {/* Logo & Subtitle */}
          <div
            onClick={() => onTabChange('works')}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group shrink-0 active:scale-95 transition-transform"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#e94560] to-[#f39c12] p-0.5 shadow-md flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#16213e] rounded-[10px] flex items-center justify-center">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#f39c12]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#e94560] via-[#f39c12] to-[#e94560] bg-clip-text text-transparent tracking-tight">
                  Văn Học 12
                </span>
                <span className="hidden xs:inline-block px-1.5 py-0.2 text-[9px] font-bold rounded-md bg-[#e94560]/20 text-[#e94560] border border-[#e94560]/40">
                  THPT
                </span>
              </div>
              <span className="hidden md:inline-block text-xs text-slate-400 font-normal">
                Hệ Thống Ôn Thi &amp; Chỉ Định Nội Dung THPT Quốc Gia
              </span>
            </div>
          </div>

          {/* Contact badge & School Project Info (Desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenProjectInfo}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-[#e94560]/20 to-[#f39c12]/20 border border-amber-500/40 text-xs text-slate-200 shadow-sm backdrop-blur-sm hover:border-amber-400 transition-all cursor-pointer"
              title="Sản phẩm học tập số môn Ngữ Văn - THPT Yên Lãng"
            >
              <span className="flex items-center gap-1.5 font-bold text-amber-300">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                <span>THPT Yên Lãng</span>
              </span>
              <span className="text-slate-500" aria-hidden="true">|</span>
              <span className="text-slate-300">
                GV: <strong className="text-white">Võ Thị Mỹ Ngà</strong>
              </span>
              <span className="text-slate-500" aria-hidden="true">|</span>
              <span className="text-[#f39c12] font-semibold">Phát triển web: 12A4 Nguyễn Tùng Dương</span>
            </button>

            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
              <a
                href="tel:0326516500"
                className="flex items-center gap-1 text-[#e94560] hover:text-[#ff6b81] font-bold transition-colors"
                title="Gọi ngay 0326516500"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0326516500</span>
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/10 transition-colors cursor-pointer"
                title="Sao chép số điện thoại"
              >
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Quick Action Buttons (Responsive for both Mobile & Desktop) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Mobile Search Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className={`p-2 rounded-xl border transition-all md:hidden cursor-pointer active:scale-95 ${
                isMobileSearchOpen || searchTerm
                  ? 'bg-[#e94560] text-white border-[#e94560]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:text-white'
              }`}
              title="Tìm kiếm tác phẩm"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Project Credits Modal Trigger (High prominence on both Mobile & Desktop) */}
            {onOpenProjectInfo && (
              <button
                type="button"
                onClick={onOpenProjectInfo}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/15 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 hover:text-white transition-all shadow-sm cursor-pointer active:scale-95"
                title="Thông tin Sản phẩm học tập số: THPT Yên Lãng - GV: Võ Thị Mỹ Ngà - Phát triển web: Nguyễn Tùng Dương"
              >
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Giới Thiệu Đề Tài</span>
                <span className="text-[11px] sm:hidden font-bold">12A4</span>
              </button>
            )}

            {/* Saved items quick button */}
            <button
              type="button"
              onClick={onToggleSavedOnly}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer active:scale-95 ${
                showSavedOnly
                  ? 'bg-[#e94560] text-white border-[#e94560] shadow-[0_0_15px_rgba(233,69,96,0.5)]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:border-[#e94560]/50 hover:text-white'
              }`}
              title={showSavedOnly ? 'Hiển thị tất cả' : 'Chỉ xem bài đã lưu'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${showSavedOnly ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">Đã lưu</span>
              {savedCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#e94560] text-white font-bold">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Mobile Author / Contact button */}
            <button
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className="lg:hidden flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-[#e94560]/15 to-[#f39c12]/15 border border-[#e94560]/30 text-xs text-white active:scale-95 cursor-pointer"
              title="Thông tin người phát triển web: Nguyễn Tùng Dương"
            >
              <User className="w-3.5 h-3.5 text-[#f39c12]" />
              <span className="hidden sm:inline font-semibold">Tùng Dương</span>
            </button>

            {/* Theme Customizer Trigger (Tablets & Desktop) */}
            {onOpenThemeModal && (
              <button
                type="button"
                onClick={onOpenThemeModal}
                className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#e94560]/15 hover:bg-[#e94560]/30 border border-[#e94560]/50 text-white transition-all shadow-sm cursor-pointer"
                title="Đổi màu trang web, chế độ Sáng/Tối/Giấy cổ & cỡ chữ theo sở thích"
              >
                <Palette className="w-3.5 h-3.5 text-[#f39c12]" />
                <span>Đổi Màu</span>
              </button>
            )}

            {/* SoundCloud Music Player Trigger Button (Tablets & Desktop) */}
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-music-player'))}
              className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#ff5500]/25 to-[#e94560]/25 hover:from-[#ff5500]/40 hover:to-[#e94560]/40 border border-[#ff5500]/40 text-orange-200 hover:text-white transition-all shadow-sm cursor-pointer"
              title="Mở trình phát nhạc ôn bài SoundCloud (51 bài - Không dừng khi đọc bài)"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Nhạc Ôn Bài</span>
            </button>

            {/* Download Source Code Zip Button (Tablets & Desktop) */}
            <a
              href="/on-thi-ngu-van-12.zip"
              download="on-thi-ngu-van-12.zip"
              className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-500/20 hover:bg-emerald-500/35 border border-emerald-500/50 text-emerald-200 hover:text-white transition-all shadow-sm cursor-pointer"
              title="Tải trọn bộ mã nguồn dự án (.zip)"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tải Mã Nguồn (.zip)</span>
            </a>
          </div>
        </div>

        {/* Mobile Expandable Search Bar */}
        {isMobileSearchOpen && (
          <div className="mt-2.5 md:hidden animate-in slide-in-from-top-2 duration-150">
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Tìm tác phẩm, tác giả, câu thơ..."
                autoFocus
                className="w-full pl-9 pr-9 py-2 text-xs bg-black/40 text-white placeholder-slate-400 rounded-xl border border-[#e94560] outline-none"
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
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Navigation Tabs Bar */}
        <div className="mt-2 sm:mt-3 relative">
          <div
            ref={navContainerRef}
            className="flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-none scroll-smooth touch-pan-x"
          >
            <nav className="flex items-center gap-1 sm:gap-2">
              <button
                data-nav-active={activeTab === 'works'}
                onClick={() => onTabChange('works')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'works'
                    ? 'bg-gradient-to-r from-[#e94560] to-[#c73659] text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Kho Tác Phẩm (35)</span>
              </button>

              <button
                data-nav-active={activeTab === 'exams-bank'}
                onClick={() => onTabChange('exams-bank')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'exams-bank'
                    ? 'bg-gradient-to-r from-[#e94560] to-[#c73659] text-white shadow-md'
                    : 'text-amber-300 hover:text-white bg-[#f39c12]/10 hover:bg-[#f39c12]/20 border border-[#f39c12]/40'
                }`}
              >
                <FileCheck2 className="w-4 h-4 text-[#f39c12]" />
                <span>Đề Văn Hay Ra &amp; Tham Khảo</span>
              </button>

              <button
                data-nav-active={activeTab === 'schedule'}
                onClick={() => onTabChange('schedule')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'schedule'
                    ? 'bg-gradient-to-r from-[#e94560] to-[#c73659] text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-[#e94560]/30'
                }`}
              >
                <Calendar className="w-4 h-4 text-[#f39c12]" />
                <span>Tác Phẩm Theo Bài (1–9)</span>
              </button>

              <button
                data-nav-active={activeTab === 'spec'}
                onClick={() => onTabChange('spec')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'spec'
                    ? 'bg-gradient-to-r from-[#e94560] to-[#c73659] text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-[#f5a623]/30'
                }`}
              >
                <Compass className="w-4 h-4 text-[#f5a623]" />
                <span>Chỉ Định &amp; Biểu Thức</span>
              </button>

              <button
                data-nav-active={activeTab === 'exam'}
                onClick={() => onTabChange('exam')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'exam'
                    ? 'bg-gradient-to-r from-[#e94560] to-[#c73659] text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Bí Quyết 8+ THPT</span>
              </button>

              <button
                data-nav-active={activeTab === 'compare'}
                onClick={() => onTabChange('compare')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'compare'
                    ? 'bg-gradient-to-r from-[#e94560] to-[#c73659] text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Scale className="w-4 h-4" />
                <span>Bảng So Sánh</span>
              </button>

              <button
                data-nav-active={activeTab === 'quiz'}
                onClick={() => onTabChange('quiz')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === 'quiz'
                    ? 'bg-gradient-to-r from-[#e94560] to-[#c73659] text-white shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#f39c12]" />
                <span>Trắc Nghiệm Nhanh</span>
              </button>

              <button
                data-nav-active={activeTab === 'ai'}
                onClick={() => onTabChange('ai')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === 'ai'
                    ? 'bg-gradient-to-r from-[#f39c12] to-[#e67e22] text-white shadow-md'
                    : 'text-slate-300 hover:text-amber-300 hover:bg-white/5'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#f39c12]" />
                <span>Trợ Lý Dàn Ý AI</span>
              </button>
            </nav>

            {/* Desktop Quick Search input when in works tab */}
            {activeTab === 'works' && (
              <div className="relative min-w-[220px] max-w-[280px] hidden md:block shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Tìm tác phẩm, tác giả..."
                  className="w-full pl-9 pr-7 py-1.5 text-xs sm:text-sm bg-white/10 hover:bg-white/15 focus:bg-white/20 text-white placeholder-slate-400 rounded-full border border-[#e94560]/40 focus:border-[#e94560] outline-none transition-all focus:ring-2 focus:ring-[#e94560]/30"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Contact Modal */}
      {isContactModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm lg:hidden animate-in fade-in"
          onClick={() => setIsContactModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl bg-[#16213e] border border-[#e94560]/60 p-5 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#e94560] to-[#f39c12] p-0.5">
                  <div className="w-full h-full bg-[#16213e] rounded-[9px] flex items-center justify-center">
                    <User className="w-5 h-5 text-[#f39c12]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Nguyễn Tùng Dương</h3>
                  <p className="text-xs text-slate-400">Phát triển web · Học sinh lớp 12A4 (2024–2027)</p>
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

            <div className="space-y-3">
              <p className="text-xs text-slate-300 leading-relaxed">
                Hệ thống ôn thi Ngữ văn 12 chuẩn THPT Quốc Gia với 35 tác phẩm trọng tâm, 32 chân dung tác giả, phương thức biểu đạt và đề văn mẫu.
              </p>

              <div className="p-3 rounded-xl bg-black/30 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#e94560]" />
                  <span className="font-mono text-sm font-bold text-white">0326516500</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopyPhone()}
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 flex items-center gap-1 font-medium"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Đã chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Chép</span>
                      </>
                    )}
                  </button>
                  <a
                    href="tel:0326516500"
                    className="px-3 py-1 rounded-lg bg-[#e94560] hover:bg-[#c73659] text-xs font-bold text-white shadow-md"
                  >
                    Gọi ngay
                  </a>
                </div>
              </div>

              {onOpenProjectInfo && (
                <button
                  type="button"
                  onClick={() => {
                    setIsContactModalOpen(false);
                    onOpenProjectInfo();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500/20 to-[#e94560]/20 hover:from-amber-500/30 hover:to-[#e94560]/30 border border-amber-500/40 text-amber-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span>Xem Đề Tài &amp; Sản Phẩm Số (THPT Yên Lãng)</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
