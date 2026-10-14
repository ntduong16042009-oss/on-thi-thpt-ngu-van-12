import React from 'react';
import { WorkItem } from '../data/worksData';
import { WORK_EXPRESSION_SPECS } from '../data/expressionSpecData';
import { CURRICULUM_LESSONS_DATA } from '../data/curriculum12Data';
import { Compass, Calendar } from 'lucide-react';

export type GenreFilter = 'all' | 'tho' | 'truyen' | 'ky' | 'kinh' | 'chinhluan' | 'nuocngoai';
export type ExpressionModeFilter = 'all' | 'Biểu cảm' | 'Tự sự' | 'Nghị luận' | 'Miêu tả' | 'Thuyết minh';

interface FilterBarProps {
  currentFilter: GenreFilter;
  onFilterChange: (filter: GenreFilter) => void;
  currentExpressionFilter?: ExpressionModeFilter;
  onExpressionFilterChange?: (mode: ExpressionModeFilter) => void;
  currentLessonFilter?: string;
  onLessonFilterChange?: (lessonId: string) => void;
  works: WorkItem[];
  resultCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  currentFilter,
  onFilterChange,
  currentExpressionFilter = 'all',
  onExpressionFilterChange,
  currentLessonFilter = 'all',
  onLessonFilterChange,
  works,
  resultCount,
}) => {
  const filterOptions: { id: GenreFilter; label: string }[] = [
    { id: 'all', label: 'Tất cả' },
    { id: 'tho', label: 'Thơ' },
    { id: 'truyen', label: 'Truyện' },
    { id: 'ky', label: 'Ký & VB Thông tin' },
    { id: 'kinh', label: 'Kịch & Hài kịch' },
    { id: 'chinhluan', label: 'Nghị luận & Chính luận' },
    { id: 'nuocngoai', label: 'Nước ngoài' },
  ];

  const expressionOptions: { id: ExpressionModeFilter; label: string }[] = [
    { id: 'all', label: 'Mọi PT biểu đạt' },
    { id: 'Biểu cảm', label: 'PT: Biểu cảm' },
    { id: 'Tự sự', label: 'PT: Tự sự' },
    { id: 'Nghị luận', label: 'PT: Nghị luận' },
    { id: 'Miêu tả', label: 'PT: Miêu tả' },
    { id: 'Thuyết minh', label: 'PT: Thuyết minh' },
  ];

  const getCount = (id: GenreFilter) => {
    if (id === 'all') return works.length;
    return works.filter((w) => w.genre === id).length;
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mb-5 sm:mb-6 space-y-2.5 sm:space-y-3">
      {/* Primary Genre Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-4 pb-2.5 border-b border-white/10">
        {/* Genre scrollable bar on mobile / wrap on desktop */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none scroll-smooth touch-pan-x sm:flex-wrap">
          {filterOptions.map((opt) => {
            const count = getCount(opt.id);
            const isActive = currentFilter === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onFilterChange(opt.id)}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0 active:scale-95 ${
                  isActive
                    ? 'bg-[#e94560] text-white shadow-[0_4px_15px_rgba(233,69,96,0.4)] transform -translate-y-0.5'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5 hover:border-[#e94560]/30'
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                    isActive ? 'bg-black/20 text-white' : 'text-slate-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results counter text & quick reset button */}
        <div className="text-xs text-slate-400 whitespace-nowrap flex items-center justify-between sm:justify-end gap-2.5 px-1">
          <span>
            Kết quả: <strong className="text-[#f39c12] font-semibold">{resultCount}</strong>/{works.length} tác phẩm
          </span>
          {(currentFilter !== 'all' || currentLessonFilter !== 'all' || currentExpressionFilter !== 'all') && (
            <button
              type="button"
              onClick={() => {
                onFilterChange('all');
                if (onLessonFilterChange) onLessonFilterChange('all');
                if (onExpressionFilterChange) onExpressionFilterChange('all');
              }}
              className="text-[11px] px-2 py-0.5 rounded-md bg-white/10 hover:bg-[#e94560]/20 text-rose-300 border border-white/15 hover:border-[#e94560]/40 transition-colors cursor-pointer active:scale-95"
              title="Khôi phục xem toàn bộ 35 tác phẩm"
            >
              ✕ Bỏ lọc
            </button>
          )}
        </div>
      </div>

      {/* Curriculum Lesson Filter Row (Bài 1 -> Bài 9) */}
      {onLessonFilterChange && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none scroll-smooth touch-pan-x sm:flex-wrap text-xs border-b border-white/5">
          <span className="inline-flex items-center gap-1 text-slate-400 mr-1 font-medium whitespace-nowrap shrink-0">
            <Calendar className="w-3.5 h-3.5 text-[#e94560]" />
            <span className="hidden sm:inline">Theo Bài học (SGK 12):</span>
            <span className="sm:hidden">Bài học:</span>
          </span>
          <button
            type="button"
            onClick={() => onLessonFilterChange('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer shrink-0 active:scale-95 ${
              currentLessonFilter === 'all'
                ? 'bg-[#e94560] text-white font-bold shadow-sm'
                : 'bg-white/[0.03] text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            Tất cả (35)
          </button>
          {CURRICULUM_LESSONS_DATA.map((unit) => {
            const active = currentLessonFilter === unit.id;
            const unitWorkIds = Array.from(
              new Set(unit.rows.map((r) => r.workId).filter(Boolean))
            );
            return (
              <button
                key={unit.id}
                type="button"
                onClick={() => onLessonFilterChange(active ? 'all' : unit.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer shrink-0 active:scale-95 ${
                  active
                    ? 'bg-[#e94560] text-white font-bold shadow-sm'
                    : 'bg-white/[0.03] text-slate-300 hover:text-white border border-white/10 hover:border-[#e94560]/40'
                }`}
                title={unit.title}
              >
                <span>Bài {unit.lessonNumber}</span>
                <span className={`text-[10px] ${active ? 'text-white/90' : 'text-slate-500'}`}>
                  ({unitWorkIds.length})
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Secondary row: Expression Mode Specification Filter */}
      {onExpressionFilterChange && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none scroll-smooth touch-pan-x sm:flex-wrap text-xs">
          <span className="inline-flex items-center gap-1 text-slate-400 mr-1 font-medium whitespace-nowrap shrink-0">
            <Compass className="w-3.5 h-3.5 text-[#f39c12]" />
            <span className="hidden sm:inline">Phương thức biểu đạt:</span>
            <span className="sm:hidden">PT:</span>
          </span>
          {expressionOptions.map((exp) => {
            const active = currentExpressionFilter === exp.id;
            const expCount =
              exp.id === 'all'
                ? works.length
                : works.filter((w) => {
                    const spec = WORK_EXPRESSION_SPECS[w.id];
                    if (!spec) return false;
                    return (
                      spec.primaryExpression === exp.id ||
                      spec.combinedExpressions.includes(exp.id)
                    );
                  }).length;

            return (
              <button
                key={exp.id}
                type="button"
                onClick={() => onExpressionFilterChange(exp.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer shrink-0 active:scale-95 ${
                  active
                    ? 'bg-[#f39c12] text-slate-950 font-bold shadow-sm'
                    : 'bg-white/[0.03] text-slate-300 hover:text-white border border-white/10 hover:border-[#f39c12]/40'
                }`}
              >
                <span>{exp.label}</span>
                <span className={`text-[10px] ${active ? 'text-slate-900' : 'text-slate-500'}`}>
                  ({expCount})
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
