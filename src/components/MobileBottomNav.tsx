import React, { useState } from 'react';
import { AppNavTab } from './Header';
import {
  BookOpen,
  FileCheck2,
  Calendar,
  Compass,
  Menu,
  X,
  Sparkles,
  Scale,
  GraduationCap,
  Palette,
  Bookmark,
  Headphones,
  Phone,
  User,
  Check,
  Copy,
  ExternalLink,
  Download,
  School,
} from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: AppNavTab;
  onTabChange: (tab: AppNavTab) => void;
  savedCount: number;
  showSavedOnly: boolean;
  onToggleSavedOnly: () => void;
  onOpenThemeModal?: () => void;
  onOpenProjectInfo?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onTabChange,
  savedCount,
  showSavedOnly,
  onToggleSavedOnly,
  onOpenThemeModal,
  onOpenProjectInfo,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('0326516500');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const navItems = [
    {
      id: 'works' as AppNavTab,
      label: 'Tác Phẩm',
      icon: BookOpen,
      badge: null,
    },
    {
      id: 'exams-bank' as AppNavTab,
      label: 'Đề Thi',
      icon: FileCheck2,
      badge: 'Hot',
    },
    {
      id: 'schedule' as AppNavTab,
      label: 'Bài 1–9',
      icon: Calendar,
      badge: null,
    },
    {
      id: 'spec' as AppNavTab,
      label: 'Chỉ Định',
      icon: Compass,
      badge: null,
    },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation Bar (Visible on mobile/tablet screens < 768px) */}
      <nav
        aria-label="Thanh điều hướng di động"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#121526]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.6)] pb-[env(safe-area-inset-bottom)]"
      >
        <div className="flex items-center justify-around px-2 py-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id && !isMenuOpen;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onTabChange(item.id);
                }}
                className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer min-w-[58px] active:scale-95 ${
                  isActive
                    ? 'text-[#e94560]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <div
                  className={`relative p-1 rounded-xl transition-colors ${
                    isActive ? 'bg-[#e94560]/15' : ''
                  }`}
                >
                  <Icon className="w-5 h-5 transition-transform" />
                  {item.badge && (
                    <span className="absolute -top-1 -right-2 px-1 py-0.2 rounded-full bg-[#f39c12] text-black font-extrabold text-[8px] leading-tight">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className={`text-[10px] font-medium mt-0.5 ${isActive ? 'font-bold text-white' : ''}`}>
                  {item.label}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e94560] mt-0.5" />
                )}
              </button>
            );
          })}

          {/* More Menu Drawer Trigger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer min-w-[58px] active:scale-95 ${
              isMenuOpen || ['exam', 'compare', 'quiz', 'ai'].includes(activeTab)
                ? 'text-[#f39c12]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <div
              className={`p-1 rounded-xl transition-colors ${
                isMenuOpen || ['exam', 'compare', 'quiz', 'ai'].includes(activeTab)
                  ? 'bg-[#f39c12]/15'
                  : ''
              }`}
            >
              <Menu className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-medium mt-0.5">Mở Rộng</span>
            {(isMenuOpen || ['exam', 'compare', 'quiz', 'ai'].includes(activeTab)) && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#f39c12] mt-0.5" />
            )}
          </button>
        </div>
      </nav>

      {/* Slide-over / Bottom Sheet for Extended Mobile Menu */}
      {isMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 md:hidden flex flex-col justify-end bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-h-[85vh] bg-[#16213e] rounded-t-3xl border-t-2 border-[#e94560]/60 p-5 pb-8 overflow-y-auto space-y-5 shadow-2xl animate-in slide-in-from-bottom duration-300"
          >
            {/* Sheet Handle & Close */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#e94560]/20 flex items-center justify-center text-[#e94560]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base font-display">
                    Menu Tính Năng Mở Rộng
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Ngữ văn 12 · Nguyễn Tùng Dương
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* School Project Info Card Banner (1-touch on Mobile) */}
            {onOpenProjectInfo && (
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenProjectInfo();
                }}
                className="w-full text-left p-3.5 rounded-2xl bg-gradient-to-br from-amber-500/20 via-[#e94560]/20 to-purple-500/20 border-2 border-amber-500/50 hover:border-amber-400 transition-all shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-bold text-[10px] uppercase tracking-wider border border-amber-500/40">
                    <GraduationCap className="w-3 h-3 text-amber-400" />
                    SẢN PHẨM HỌC TẬP SỐ
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">2026–2027</span>
                </div>
                <div className="font-bold text-white text-sm">
                  Trường THPT Yên Lãng <span className="text-amber-400 text-xs font-mono font-normal">(Khóa 2024–2027)</span>
                </div>
                <div className="text-xs text-slate-300 mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span>Giáo viên: <strong className="text-white">Võ Thị Mỹ Ngà</strong></span>
                  <span className="text-slate-500">·</span>
                  <span className="text-amber-300 font-semibold">Phát triển web: Nguyễn Tùng Dương</span>
                </div>
                <div className="mt-2 text-[11px] text-amber-400 font-semibold flex items-center gap-1">
                  <span>Xem chi tiết đề tài &amp; mục tiêu học tập →</span>
                </div>
              </button>
            )}

            {/* Quick Navigation Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onTabChange('exam');
                  setIsMenuOpen(false);
                }}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                  activeTab === 'exam'
                    ? 'bg-[#e94560]/20 border-[#e94560] text-white'
                    : 'bg-white/5 border-white/5 text-slate-200 hover:bg-white/10'
                }`}
              >
                <GraduationCap className="w-5 h-5 text-amber-400 mb-2" />
                <span className="font-bold text-xs text-white">Bí Quyết 8+ THPT</span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  Công thức NLXH, Đọc hiểu &amp; NLVH
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onTabChange('compare');
                  setIsMenuOpen(false);
                }}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                  activeTab === 'compare'
                    ? 'bg-[#e94560]/20 border-[#e94560] text-white'
                    : 'bg-white/5 border-white/5 text-slate-200 hover:bg-white/10'
                }`}
              >
                <Scale className="w-5 h-5 text-cyan-400 mb-2" />
                <span className="font-bold text-xs text-white">Bảng So Sánh</span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  Đối sánh hình tượng &amp; phong cách
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onTabChange('quiz');
                  setIsMenuOpen(false);
                }}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                  activeTab === 'quiz'
                    ? 'bg-[#e94560]/20 border-[#e94560] text-white'
                    : 'bg-white/5 border-white/5 text-slate-200 hover:bg-white/10'
                }`}
              >
                <Sparkles className="w-5 h-5 text-[#e94560] mb-2" />
                <span className="font-bold text-xs text-white">Trắc Nghiệm Nhanh</span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  Luyện phản xạ kiến thức văn học
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onTabChange('ai');
                  setIsMenuOpen(false);
                }}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                  activeTab === 'ai'
                    ? 'bg-[#f39c12]/20 border-[#f39c12] text-white'
                    : 'bg-white/5 border-white/5 text-slate-200 hover:bg-white/10'
                }`}
              >
                <Sparkles className="w-5 h-5 text-[#f39c12] mb-2" />
                <span className="font-bold text-xs text-white">Trợ Lý Dàn Ý AI</span>
                <span className="text-[10px] text-slate-400 mt-0.5">
                  Lập dàn ý chuyên sâu tức thì
                </span>
              </button>
            </div>

            {/* Quick Tools & Utilities */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Công cụ hỗ trợ
              </span>

              {/* Saved works toggle */}
              <button
                type="button"
                onClick={() => {
                  onToggleSavedOnly();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-slate-200 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Bookmark className={`w-4 h-4 ${showSavedOnly ? 'text-[#e94560] fill-current' : 'text-slate-400'}`} />
                  <span className="font-medium">Danh sách tác phẩm đã lưu</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-[#e94560]/20 text-[#e94560] font-bold text-[11px]">
                  {savedCount} bài
                </span>
              </button>

              {/* Theme customizer */}
              {onOpenThemeModal && (
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenThemeModal();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Palette className="w-4 h-4 text-[#f39c12]" />
                    <span className="font-medium">Đổi Màu Giao Diện (Sáng / Tối / Giấy cổ)</span>
                  </div>
                  <span className="text-[11px] text-amber-300 font-semibold">Tùy chỉnh</span>
                </button>
              )}

              {/* SoundCloud player */}
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.dispatchEvent(new CustomEvent('open-music-player'));
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#ff5500]/20 to-[#e94560]/20 border border-[#ff5500]/40 text-xs text-orange-200 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Headphones className="w-4 h-4 text-orange-400" />
                  <span className="font-medium">Nhạc Ôn Bài SoundCloud (51 bài)</span>
                </div>
                <span className="text-[11px] text-orange-400 font-bold">Mở nghe</span>
              </button>

              {/* Download Source Code Zip */}
              <a
                href="/on-thi-ngu-van-12.zip"
                download="on-thi-ngu-van-12.zip"
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-xs text-emerald-200 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium">Tải Trọn Bộ Mã Nguồn (.zip)</span>
                </div>
                <span className="text-[11px] text-emerald-400 font-bold">Tải về</span>
              </a>
            </div>

            {/* Developer Contact Card */}
            <div className="pt-2 border-t border-white/10">
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <User className="w-3.5 h-3.5 text-[#f39c12]" />
                    <span>Phát triển web:</span>
                  </span>
                  <strong className="text-[#f39c12] font-semibold">Nguyễn Tùng Dương</strong>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-white/5">
                  <span className="text-slate-400">Hotline hỗ trợ:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:0326516500"
                      className="text-[#e94560] font-bold flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>0326516500</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="p-1 text-slate-400 hover:text-white rounded bg-white/5"
                    >
                      {copiedPhone ? (
                        <Check className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
