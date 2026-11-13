import React from 'react';
import { AppNavTab } from './Header';
import { WORKS_DATA } from '../data/worksData';
import sidebarLibraryBg from '../assets/images/sidebar_library_exact_1794538639074.jpg';
import {
  Home,
  BookOpen,
  FileCheck2,
  Feather,
  Compass,
  GraduationCap,
  Scale,
  Sparkles,
  Landmark,
  Settings,
  Music,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

interface SidebarProps {
  activeTab: AppNavTab;
  isCatalogFocused?: boolean;
  onSelectHome: () => void;
  onSelectCatalog: () => void;
  onTabChange: (tab: AppNavTab) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileDrawerOpen: boolean;
  onCloseMobileDrawer: () => void;
  onOpenThemeModal: () => void;
  onOpenProjectInfo: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  isCatalogFocused = false,
  onSelectHome,
  onSelectCatalog,
  onTabChange,
  isCollapsed,
  onToggleCollapse,
  isMobileDrawerOpen,
  onCloseMobileDrawer,
  onOpenThemeModal,
}) => {
  const mainNavItems = [
    {
      id: 'home',
      label: 'Trang Chủ',
      icon: Home,
      isActive: activeTab === 'works' && !isCatalogFocused,
      onClick: () => {
        onSelectHome();
        onCloseMobileDrawer();
      },
    },
    {
      id: 'catalog',
      label: 'Kho Tác Phẩm',
      icon: BookOpen,
      badge: String(WORKS_DATA.length),
      isActive: activeTab === 'works' && isCatalogFocused,
      onClick: () => {
        onSelectCatalog();
        onCloseMobileDrawer();
      },
    },
    {
      id: 'exams-bank',
      label: 'Đề Văn Hay',
      icon: FileCheck2,
      isActive: activeTab === 'exams-bank',
      onClick: () => {
        onTabChange('exams-bank');
        onCloseMobileDrawer();
      },
    },
    {
      id: 'quiz',
      label: 'Thử Thách',
      icon: Sparkles,
      isActive: activeTab === 'quiz',
      onClick: () => {
        onTabChange('quiz');
        onCloseMobileDrawer();
      },
    },
    {
      id: 'schedule',
      label: 'Tác Phẩm Bài 1–9',
      icon: Landmark,
      isActive: activeTab === 'schedule',
      onClick: () => {
        onTabChange('schedule');
        onCloseMobileDrawer();
      },
    },
    {
      id: 'spec',
      label: 'Chỉ Định & Biểu Thức',
      icon: Compass,
      isActive: activeTab === 'spec',
      onClick: () => {
        onTabChange('spec');
        onCloseMobileDrawer();
      },
    },
    {
      id: 'exam',
      label: 'Bí Quyết 8+ THPT',
      icon: GraduationCap,
      isActive: activeTab === 'exam',
      onClick: () => {
        onTabChange('exam');
        onCloseMobileDrawer();
      },
    },
    {
      id: 'compare',
      label: 'Bảng So Sánh',
      icon: Scale,
      isActive: activeTab === 'compare',
      onClick: () => {
        onTabChange('compare');
        onCloseMobileDrawer();
      },
    },
    {
      id: 'ai',
      label: 'Trợ Lý Dàn Ý AI',
      icon: Feather,
      isActive: activeTab === 'ai',
      onClick: () => {
        onTabChange('ai');
        onCloseMobileDrawer();
      },
    },
    {
      id: 'settings',
      label: 'Cài Đặt',
      icon: Settings,
      isActive: false,
      onClick: () => {
        onOpenThemeModal();
        onCloseMobileDrawer();
      },
    },
  ];

  const renderSidebarContent = (mobileMode = false) => {
    const collapsed = mobileMode ? false : isCollapsed;

    return (
      <div className="relative h-full flex flex-col justify-between bg-[#080D1C] border-r border-[#D9A84E]/35 text-[#f8fafc] select-none overflow-hidden shadow-[6px_0_32px_rgba(0,0,0,0.75)]">
        {/* Atmospheric Dark Library Bookshelf & Glowing Open Book Backdrop Matching Reference */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <img
            src={sidebarLibraryBg}
            alt=""
            aria-hidden="true"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-bottom opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080D1C]/96 via-[#080D1C]/82 to-[#060913]/65" />
        </div>

        {/* Ambient golden vertical edge gleam */}
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-[1px] z-20 bg-gradient-to-b from-transparent via-[#F5D58A]/50 to-transparent" />

        {/* Top Brand Section */}
        <div className="relative z-10 pt-5 pb-3 px-3 flex flex-col items-center">
          {mobileMode && (
            <button
              type="button"
              onClick={onCloseMobileDrawer}
              className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#F5D58A] border border-[#D9A84E]/30 cursor-pointer"
              aria-label="Đóng menu"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Collapse Toggle Button (Desktop) */}
          {!mobileMode && (
            <button
              type="button"
              onClick={onToggleCollapse}
              title={collapsed ? 'Mở rộng thanh điều hướng' : 'Thu gọn thanh điều hướng'}
              className="absolute top-3 right-2 w-6 h-6 rounded-full bg-[#131C36]/90 hover:bg-[#D9A84E]/25 border border-[#D9A84E]/40 text-[#F5D58A] flex items-center justify-center transition-colors cursor-pointer z-20"
            >
              {collapsed ? (
                <ChevronRight className="w-3.5 h-3.5" />
              ) : (
                <ChevronLeft className="w-3.5 h-3.5" />
              )}
            </button>
          )}

          {/* Golden Open Book Logo */}
          <button
            type="button"
            onClick={() => {
              onSelectHome();
              onCloseMobileDrawer();
            }}
            className="group flex flex-col items-center focus:outline-none cursor-pointer"
          >
            <div className="relative w-12 h-11 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#D9A84E]/25 blur-md group-hover:bg-[#F5D58A]/40 transition-all" />
              <svg
                viewBox="0 0 64 52"
                fill="none"
                className="w-11 h-10 relative z-10 drop-shadow-[0_2px_12px_rgba(217,168,78,0.55)] group-hover:scale-105 transition-transform"
              >
                <defs>
                  <linearGradient id="goldBookGrad" x1="0" y1="0" x2="64" y2="52" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFF4CC" />
                    <stop offset="50%" stopColor="#F5D58A" />
                    <stop offset="100%" stopColor="#C58B2B" />
                  </linearGradient>
                </defs>
                <path
                  d="M32 12C25 7.5 14 6.5 6 8V38C14 36.5 25 37.5 32 42C39 37.5 50 36.5 58 38V8C50 6.5 39 7.5 32 12Z"
                  fill="url(#goldBookGrad)"
                  fillOpacity="0.95"
                />
                <path
                  d="M32 12V42M4 42C13 40 24 41 32 45.5C40 41 51 40 60 42"
                  stroke="#FFF4CC"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {!collapsed && (
              <span className="mt-1.5 text-xl font-bold tracking-wide font-fantasy fantasy-gold-text whitespace-nowrap">
                Văn Học 12
              </span>
            )}
          </button>

          {/* Decorative Gold Divider with Central Star */}
          <div className="w-full mt-3 flex items-center justify-center gap-1.5 px-2">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D9A84E]/55 to-[#F5D58A]/85" />
            <span className="text-[#F5D58A] text-[9px] leading-none">✦</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D9A84E]/55 to-[#F5D58A]/85" />
          </div>
        </div>

        {/* Navigation Items List */}
        <nav
          aria-label="Điều hướng chính"
          className="relative z-10 flex-1 overflow-y-auto scrollbar-none px-2.5 py-2 space-y-1"
        >
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const active = item.isActive;

            return (
              <button
                key={item.id}
                type="button"
                onClick={item.onClick}
                title={collapsed ? item.label : undefined}
                className={`group relative w-full flex items-center ${
                  collapsed ? 'justify-center px-2 py-2.5' : 'justify-between px-3.5 py-2'
                } rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  active
                    ? 'bg-gradient-to-r from-[#8E6722]/70 via-[#573F18]/65 to-[#1E1914]/65 text-[#FFF8E1] border border-[#F5D58A]/65 shadow-[0_0_20px_rgba(217,168,78,0.32),inset_0_1px_0_rgba(255,248,225,0.3)] font-semibold'
                    : 'text-[#DCE3F0] hover:text-[#FFF8E1] hover:bg-white/[0.06] border border-transparent hover:border-[#D9A84E]/25'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                      active ? 'text-[#FFF4CC] drop-shadow-[0_0_6px_rgba(245,213,138,0.8)]' : 'text-[#D9A84E]/85 group-hover:text-[#F5D58A]'
                    }`}
                  />
                  {!collapsed && (
                    <span className="truncate whitespace-nowrap tracking-wide">
                      {item.label}
                    </span>
                  )}
                </div>

                {!collapsed && active && (
                  <span className="text-[#F5D58A] text-[10px] ml-1 drop-shadow-[0_0_6px_rgba(245,213,138,0.9)]">
                    ✦
                  </span>
                )}

                {!collapsed && !active && item.badge && (
                  <span className="text-[10px] font-mono text-[#F5D58A]/80 tabular-nums">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Floating Music Widget (Matching Reference Bottom-Left Pill Over Glowing Book) */}
        <div className="relative z-10 p-2.5 pt-8 mt-auto bg-gradient-to-t from-[#05070F]/95 via-[#070B16]/55 to-transparent">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-music-player'))}
            title="Mở trình phát Nhạc Ôn Bài SoundCloud (51 bài)"
            className={`group w-full flex items-center ${
              collapsed ? 'justify-center p-2' : 'gap-2.5 px-3 py-2'
            } rounded-full bg-gradient-to-r from-[#111629]/95 via-[#0B0F1E]/95 to-[#171226]/95 border border-[#D9A84E]/55 hover:border-[#F5D58A] shadow-[0_8px_24px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(245,213,138,0.2)] transition-all cursor-pointer`}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D9A84E]/35 to-[#7954A6]/35 border border-[#F5D58A]/65 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-[0_0_12px_rgba(217,168,78,0.35)]">
              <Music className="w-3.5 h-3.5 text-[#F5D58A]" />
            </div>

            {!collapsed && (
              <div className="flex flex-col items-start min-w-0 flex-1">
                <span className="text-[11px] font-semibold text-[#FFF6D6] truncate">
                  Nhạc: Ôn Bài
                </span>
                {/* Animated Equalizer Bars Matching Reference */}
                <div className="flex items-center gap-[2px] h-3 mt-0.5">
                  {[0.4, 0.85, 0.55, 1, 0.65, 0.9, 0.45, 0.75, 0.95, 0.5, 0.7].map((h, i) => (
                    <span
                      key={i}
                      className="w-[2px] rounded-full bg-gradient-to-t from-[#D9A84E] to-[#FFF6D6]"
                      style={{
                        height: `${Math.round(h * 11)}px`,
                        animation: `soundWave ${1.1 + (i % 4) * 0.2}s ease-in-out infinite`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Desktop & Tablet Fixed Left Sidebar */}
      <aside
        aria-label="Sidebar điều hướng Văn Học 12"
        className={`hidden md:block fixed top-0 left-0 bottom-0 z-40 transition-all duration-300 ${
          isCollapsed ? 'w-[72px]' : 'w-[198px]'
        }`}
      >
        {renderSidebarContent(false)}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileDrawerOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 md:hidden flex bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={onCloseMobileDrawer}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[240px] max-w-[80vw] h-full animate-in slide-in-from-left duration-250"
          >
            {renderSidebarContent(true)}
          </div>
        </div>
      )}
    </>
  );
};
