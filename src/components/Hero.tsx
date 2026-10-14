import React from 'react';
import {
  Search,
  Sparkles,
  BookOpen,
  Compass,
  Code2,
  Palette,
  Calendar,
  FileCheck2,
  GraduationCap,
  School,
  Award,
  UserCheck,
  Info,
} from 'lucide-react';
import { THEME_PRESETS } from '../data/themePresetsData';

interface HeroProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  onSelectSuggestion: (val: string) => void;
  onOpenSpecTab?: () => void;
  onOpenScheduleTab?: () => void;
  onOpenExamsBankTab?: () => void;
  onOpenThemeModal?: () => void;
  activeThemeId?: string;
  onQuickSelectTheme?: (presetId: string) => void;
  onOpenProjectInfo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchTerm,
  onSearchChange,
  onSelectSuggestion,
  onOpenSpecTab,
  onOpenScheduleTab,
  onOpenExamsBankTab,
  onOpenThemeModal,
  activeThemeId,
  onQuickSelectTheme,
  onOpenProjectInfo,
}) => {
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
      className="relative overflow-hidden py-7 sm:py-14 px-3 sm:px-4 text-center"
      aria-label="Giới thiệu Kho Tàng Văn Học Lớp 12 và Chỉ Định Nội Dung"
    >
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[200px] sm:h-[300px] bg-gradient-to-tr from-[#e94560]/20 to-[#f39c12]/15 blur-[90px] sm:blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-4xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs text-amber-300 mb-3 sm:mb-4 backdrop-blur-sm flex-wrap justify-center shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#f39c12]" />
          <span>Trọn bộ 35 Tác phẩm Văn học Lớp 12 (Bài 1 – Bài 9)</span>
          <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-music-player'))}
            className="text-orange-400 hover:text-orange-300 underline font-medium inline-flex items-center gap-1 cursor-pointer"
          >
            <span>🎧 Nhạc ôn bài SoundCloud (51 bài)</span>
          </button>
        </div>

        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4 font-display">
          Kho Tàng{' '}
          <span className="bg-gradient-to-r from-[#e94560] via-[#f39c12] to-[#e94560] bg-clip-text text-transparent">
            Văn Học Lớp 12
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4 sm:mb-6">
          Đầy đủ <strong>35 tác phẩm văn học</strong> chuẩn chương trình Ngữ văn 12 (từ Bài 1 đến Bài 9) — Kèm{' '}
          <strong>chân dung chuẩn của 32 tác giả</strong>, <strong>Đề văn hay ra &amp; Đề tham khảo chuẩn form hiện nay</strong> và dàn ý 9+.
        </p>

        {/* SẢN PHẨM HỌC TẬP SỐ - MÔN NGỮ VĂN SHOWCASE CARD */}
        <div className="mb-6 sm:mb-8 mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-[#16213e]/95 via-slate-900/90 to-[#1a1c2e]/95 border-2 border-amber-500/50 p-3.5 sm:p-5 shadow-[0_10px_35px_rgba(243,156,18,0.2)] backdrop-blur-md text-left transition-all hover:border-amber-400">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-[#e94560] p-0.5 shadow-md flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-[#121526] rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider border border-amber-500/40">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    SẢN PHẨM HỌC TẬP SỐ
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#e94560]/20 text-[#ff7991] font-bold text-[10px] sm:text-[11px] uppercase tracking-wider border border-[#e94560]/40">
                    MÔN NGỮ VĂN
                  </span>
                </div>
                <h2 className="text-sm sm:text-base font-bold text-white tracking-tight mt-1 flex items-center gap-2 flex-wrap">
                  <span>Trường THPT Yên Lãng</span>
                  <span className="text-amber-400/90 font-medium text-xs font-mono">
                    (Khóa: 2024–2027)
                  </span>
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] sm:text-xs text-slate-300 font-medium">
                Năm học: <strong className="text-amber-300 font-bold">2026–2027</strong>
              </span>
              {onOpenProjectInfo && (
                <button
                  type="button"
                  onClick={onOpenProjectInfo}
                  className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] sm:text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
                  title="Xem chi tiết mục tiêu học tập số"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Chi tiết</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-3">
            {/* Giáo viên */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-pink-500/20 hover:border-pink-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                <Award className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-[11px] text-pink-300 block font-medium uppercase tracking-wider">
                  Giáo viên:
                </span>
                <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 flex-wrap">
                  <span>Võ Thị Mỹ Ngà</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30 font-medium">
                    Tổ Ngữ Văn
                  </span>
                </span>
              </div>
            </div>

            {/* Phát triển web */}
            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-amber-500/20 hover:border-amber-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <UserCheck className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] sm:text-[11px] text-amber-300 block font-medium uppercase tracking-wider">
                  Phát triển web:
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-1.5 flex-wrap">
                  <span>Nguyễn Tùng Dương</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-200 border border-amber-500/30 font-bold">
                    12A4 · Khóa 2024–2027
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Big Search Bar supporting both Keywords & Regular Expressions */}
        <div className="max-w-2xl mx-auto mb-3.5 sm:mb-4 relative group">
          <div className="relative flex items-center shadow-[0_8px_30px_rgba(233,69,96,0.25)] rounded-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none group-focus-within:text-[#e94560] transition-colors" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Tìm tác phẩm (Xuân Tóc Đỏ, Muối của rừng, Tây Tiến)..."
              className="w-full pl-11 sm:pl-12 pr-11 sm:pr-12 py-3 sm:py-3.5 rounded-full bg-slate-900/80 backdrop-blur-md text-white placeholder-slate-400 border-2 border-[#e94560]/50 focus:border-[#e94560] focus:ring-4 focus:ring-[#e94560]/20 outline-none text-base transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-4 text-slate-400 hover:text-white p-1 rounded-full cursor-pointer active:scale-95"
                title="Xóa tìm kiếm"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Quick Suggestions with touch-friendly pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs text-slate-400 mb-3">
          <span className="mr-1 text-slate-400 font-medium">Tác phẩm tiêu biểu:</span>
          {popularKeywords.map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => onSelectSuggestion(kw)}
              className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 hover:border-[#e94560]/40 transition-all text-slate-300 cursor-pointer active:scale-95"
            >
              {kw}
            </button>
          ))}
        </div>

        {/* Expression / Regex Quick Filters & Spec + Schedule + Exams Bank CTA */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs mb-4">
          <span className="text-amber-300/90 font-medium inline-flex items-center gap-1">
            <Code2 className="w-3.5 h-3.5" />
            <span>Lọc nhanh theo Bài học:</span>
          </span>
          {expressionShortcuts.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => onSelectSuggestion(item.value)}
              className="px-3 py-1.5 rounded-xl bg-[#f5a623]/10 hover:bg-[#f5a623]/20 text-amber-200 border border-[#f5a623]/30 transition-all font-mono text-[11px] cursor-pointer active:scale-95"
            >
              {item.label}
            </button>
          ))}
          {onOpenExamsBankTab && (
            <button
              type="button"
              onClick={onOpenExamsBankTab}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#e94560] to-[#f39c12] text-white font-bold inline-flex items-center gap-1 shadow-sm hover:opacity-95 transition-opacity cursor-pointer active:scale-95"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Đề Văn Hay Ra &amp; Đề Tham Khảo</span>
            </button>
          )}
          {onOpenScheduleTab && (
            <button
              type="button"
              onClick={onOpenScheduleTab}
              className="px-3.5 py-1.5 rounded-xl bg-[#16213e] hover:bg-[#1a1f36] text-[#f39c12] border border-[#f39c12]/40 font-semibold inline-flex items-center gap-1 shadow-sm transition-colors cursor-pointer active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Tác Phẩm Theo Bài (1–9)</span>
            </button>
          )}
          {onOpenSpecTab && (
            <button
              type="button"
              onClick={onOpenSpecTab}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 font-semibold inline-flex items-center gap-1 shadow-sm transition-colors cursor-pointer active:scale-95"
            >
              <Compass className="w-3.5 h-3.5 text-[#f39c12]" />
              <span>Chỉ Định &amp; Biểu Thức</span>
            </button>
          )}
        </div>

        {/* Instant Color Theme Bar (Đổi màu nhanh 1 chạm theo sở thích) */}
        {onQuickSelectTheme && (
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs">
            <span className="text-slate-300 font-medium inline-flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-[#f39c12]" />
              <span>Đổi màu nhanh:</span>
            </span>
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {THEME_PRESETS.map((preset) => {
                const isSelected = activeThemeId === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => onQuickSelectTheme(preset.id)}
                    className={`group flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[11px] transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#e94560] bg-white/15 font-bold text-white shadow-sm'
                        : 'border-white/10 bg-black/20 text-slate-300 hover:border-white/30 hover:text-white'
                    }`}
                    title={`${preset.name} — ${preset.subtitle}`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-white/40 shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${preset.bgColor} 45%, ${preset.primaryColor} 55%)`,
                      }}
                    />
                    <span className="hidden sm:inline">{preset.badge}</span>
                  </button>
                );
              })}
            </div>
            {onOpenThemeModal && (
              <button
                type="button"
                onClick={onOpenThemeModal}
                className="text-[#f39c12] hover:underline font-semibold ml-1 cursor-pointer"
              >
                Tự pha màu →
              </button>
            )}
          </div>
        )}

        {/* Feature stats counter */}
        <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left">
          <div
            onClick={onOpenScheduleTab}
            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-3 cursor-pointer transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#e94560]/20 flex items-center justify-center text-[#e94560]">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">35 Tác Phẩm · 9 Bài</div>
              <div className="text-[11px] text-slate-400">Đầy đủ ảnh chân dung tác giả</div>
            </div>
          </div>

          <div
            onClick={onOpenSpecTab}
            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-[#f39c12]/30 flex items-center gap-3 cursor-pointer transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#f39c12]/20 flex items-center justify-center text-[#f39c12]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Chỉ Định Biểu Thức</div>
              <div className="text-[11px] text-amber-300">PT biểu đạt &amp; Công thức</div>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenThemeModal}
            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-3 cursor-pointer transition-colors text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">9 Chủ Đề &amp; Tự Pha</div>
              <div className="text-[11px] text-slate-400">Đổi màu theo sở thích</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-music-player'))}
            className="p-3 rounded-xl bg-orange-950/30 hover:bg-orange-900/40 border border-[#ff5500]/30 flex items-center gap-3 transition-colors cursor-pointer group text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-[#ff5500]/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-1">
                <span>Nhạc Ôn Bài</span>
                <span className="text-[10px] text-orange-400 font-semibold">51 Bài</span>
              </div>
              <div className="text-[11px] text-slate-300">Tự chọn bài &amp; Không tắt</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

