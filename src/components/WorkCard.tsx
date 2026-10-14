import React from 'react';
import { WorkItem } from '../data/worksData';
import { WORK_EXPRESSION_SPECS } from '../data/expressionSpecData';
import { getAuthorPortrait } from '../data/authorPortraitsData';
import { Bookmark, ArrowRight, Quote, FileText, Volume2, Clock, Sparkles, BookOpen, Compass } from 'lucide-react';

interface WorkCardProps {
  work: WorkItem;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onSelectWork: (work: WorkItem, initialTab?: string) => void;
  onQuickAudioPlay?: (work: WorkItem) => void;
}

export const WorkCard: React.FC<WorkCardProps> = ({
  work,
  isSaved,
  onToggleSave,
  onSelectWork,
  onQuickAudioPlay,
}) => {
  const representativeQuote = work.quotes[0] || '';
  const expressionSpec = WORK_EXPRESSION_SPECS[work.id];
  const authorPortrait = getAuthorPortrait(work.id);

  return (
    <article
      onClick={() => onSelectWork(work)}
      data-work-id={work.id}
      data-genre={work.genre}
      data-expression-mode={expressionSpec?.primaryExpression || 'Biểu cảm'}
      className="group relative bg-[#16213e]/60 hover:bg-[#16213e]/90 border border-white/10 hover:border-[#e94560]/60 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(233,69,96,0.25)] active:scale-[0.99] flex flex-col justify-between cursor-pointer backdrop-blur-sm overflow-hidden"
    >
      {/* Decorative top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e94560]/0 group-hover:via-[#e94560] to-transparent transition-all duration-500" />

      <div>
        {/* Unboxed clean metadata header */}
        <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-3">
          <div className="flex items-center gap-1.5 font-medium flex-wrap">
            <span className="text-[#e94560] font-semibold">{work.genreName}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Năm {work.year}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">{work.tag}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>~{work.readTimeMinutes || 12}'</span>
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(work.id);
            }}
            className={`p-1.5 rounded-lg border transition-all ${
              isSaved
                ? 'text-[#e94560] bg-[#e94560]/10 border-[#e94560]/30'
                : 'text-slate-400 hover:text-white bg-white/5 border-white/5 hover:border-white/20'
            }`}
            title={isSaved ? 'Bỏ lưu tác phẩm' : 'Lưu tác phẩm để ôn thi'}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Title & Author with Authentic Portrait */}
        <div className="flex items-start gap-3 sm:gap-3.5 mb-3.5">
          {authorPortrait && (
            <div className="relative shrink-0">
              <img
                src={authorPortrait.portraitUrl}
                alt={`Chân dung tác giả ${work.author}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== authorPortrait.remoteSourceUrl) {
                    target.src = authorPortrait.remoteSourceUrl;
                  }
                }}
                className="w-13 h-16 sm:w-16 sm:h-20 rounded-xl object-cover object-top border border-[#f39c12]/40 shadow-md group-hover:border-[#e94560] transition-colors bg-[#121526]"
              />
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded bg-[#121526]/95 border border-white/15 text-[9px] text-amber-300 font-mono whitespace-nowrap">
                Tác giả
              </span>
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-[#f39c12] transition-colors mb-1 font-display leading-snug">
              {work.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
              <p className="text-xs sm:text-sm font-semibold text-[#e94560] italic">
                {work.author}
              </p>
              {authorPortrait && (
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                  ({authorPortrait.birthDeathYears})
                </span>
              )}
            </div>
            {expressionSpec && (
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-[#f39c12]/10 text-amber-300 border border-[#f39c12]/25 font-medium">
                <Compass className="w-3 h-3 text-[#f39c12]" />
                <span>PT: {expressionSpec.primaryExpression}</span>
              </span>
            )}
          </div>
        </div>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-3.5 sm:mb-4">
          {work.summary}
        </p>

        {/* Featured Quote Box */}
        {representativeQuote && (
          <div className="p-3 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 text-xs text-amber-200/90 italic mb-3.5 sm:mb-4 font-serif-literary leading-relaxed flex gap-2">
            <Quote className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
            <span className="line-clamp-2">"{representativeQuote}"</span>
          </div>
        )}

        {/* Keywords as clean unboxed text list */}
        <div className="text-[11px] text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1 mb-4 sm:mb-5">
          <span className="text-slate-500 font-medium">Trọng tâm:</span>
          {work.keywords.slice(0, 4).map((kw, i) => (
            <React.Fragment key={kw}>
              <span className="text-slate-300 hover:text-white">{kw}</span>
              {i < Math.min(work.keywords.length, 4) - 1 && (
                <span className="text-slate-600" aria-hidden="true">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Card actions */}
      <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 mt-auto">
        <div className="flex items-center gap-1.5 flex-wrap flex-1 min-w-[200px]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectWork(work, 'line_by_line');
            }}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-amber-300 hover:text-white bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all shadow-sm active:scale-95 cursor-pointer min-h-[34px]"
            title={work.genre === 'tho' ? 'Xem phân tích chi tiết từng câu thơ' : 'Xem phân tích chi tiết từng phân đoạn'}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{work.genre === 'tho' ? 'Từng câu thơ' : 'Chi tiết'}</span>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectWork(work, 'outline');
            }}
            className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors active:scale-95 cursor-pointer min-h-[34px]"
          >
            <FileText className="w-3.5 h-3.5 text-[#f39c12]" />
            <span>Dàn ý 8+</span>
          </button>

          {onQuickAudioPlay && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onQuickAudioPlay(work);
              }}
              className="p-2 rounded-lg text-slate-400 hover:text-[#e94560] bg-white/5 hover:bg-white/10 transition-colors active:scale-95 cursor-pointer"
              title="Nghe đọc tóm tắt tác phẩm"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={() => onSelectWork(work)}
          className="w-full sm:w-auto flex items-center justify-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#e94560] to-[#c0392b] hover:from-[#ff6b81] hover:to-[#e94560] px-3.5 py-1.5 rounded-lg border border-white/10 shadow-sm transition-all active:scale-95 cursor-pointer min-h-[34px]"
          title="Khám phá chi tiết tác phẩm (Giao diện tối ưu bao quát)"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Khám phá</span>
          <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </article>
  );
};
