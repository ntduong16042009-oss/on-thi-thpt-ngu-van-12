import React, { useState } from 'react';
import { CURRICULUM_LESSONS_DATA } from '../data/curriculum12Data';
import { WORKS_DATA, WorkItem } from '../data/worksData';
import { getAuthorPortrait } from '../data/authorPortraitsData';
import {
  BookOpen,
  ArrowRight,
  FileText,
  User,
} from 'lucide-react';

interface CurriculumScheduleViewProps {
  onSelectWork: (work: WorkItem, initialTab?: string) => void;
}

export const CurriculumScheduleView: React.FC<CurriculumScheduleViewProps> = ({
  onSelectWork,
}) => {
  const [selectedSemester, setSelectedSemester] = useState<'all' | 1 | 2>('all');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('all');

  const filteredUnits = CURRICULUM_LESSONS_DATA.filter((unit) => {
    if (selectedSemester !== 'all' && unit.semester !== selectedSemester) return false;
    if (selectedLessonId !== 'all' && unit.id !== selectedLessonId) return false;
    return true;
  });

  const handleOpenWorkId = (workId?: string, initialTab = 'overview') => {
    if (!workId) return;
    const found = WORKS_DATA.find((w) => w.id === workId);
    if (found) {
      onSelectWork(found, initialTab);
    }
  };

  return (
    <section
      className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-5 sm:space-y-8"
      aria-label="Danh mục các tác phẩm văn học Ngữ văn 12 theo 9 Bài học"
    >
      {/* Header Banner */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#16213e] via-[#1a1f36] to-[#121526] border border-[#e94560]/40 p-4 sm:p-8 shadow-2xl">
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e94560]/15 border border-[#e94560]/30 text-xs text-[#f39c12] font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Tác Phẩm Văn Học Ngữ Văn 12 Theo Từng Bài Học (Bài 1 – Bài 9)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
            Hệ Thống Tác Phẩm Văn Học Lớp 12 Kèm Chân Dung Tác Giả
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Tổng hợp thuần túy các <strong>tác phẩm và văn bản đọc văn học</strong> từ{' '}
            <strong>Bài 1 đến Bài 9</strong> (đã lược bỏ hoàn toàn các tiết Thực hành tiếng Việt và Chuyên đề học tập).
            Nhấn vào bất kỳ tác phẩm nào để xem phân tích chuyên sâu, dàn ý 9+ và hồ sơ chân dung tác giả.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto pb-1.5 scrollbar-none sm:flex-wrap touch-pan-x w-full">
            <button
              type="button"
              onClick={() => {
                setSelectedSemester('all');
                setSelectedLessonId('all');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                selectedSemester === 'all'
                  ? 'bg-[#e94560] text-white shadow-md'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              Tất Cả 9 Bài Học (Bài 1 – Bài 9)
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedSemester(1);
                setSelectedLessonId('all');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                selectedSemester === 1
                  ? 'bg-[#e94560] text-white shadow-md'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              Học Kì I (Bài 1 – Bài 5)
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedSemester(2);
                setSelectedLessonId('all');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                selectedSemester === 2
                  ? 'bg-[#e94560] text-white shadow-md'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              Học Kì II (Bài 6 – Bài 9)
            </button>
          </div>

          {/* Quick Jump by Lesson */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap touch-pan-x w-full">
            {CURRICULUM_LESSONS_DATA.map((unit) => (
              <button
                key={unit.id}
                type="button"
                onClick={() =>
                  setSelectedLessonId(selectedLessonId === unit.id ? 'all' : unit.id)
                }
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                  selectedLessonId === unit.id
                    ? 'bg-[#f39c12] text-slate-950 border-[#f39c12] font-bold'
                    : 'bg-black/25 text-slate-300 border-white/10 hover:border-[#f39c12]/50 hover:text-white'
                }`}
              >
                Bài {unit.lessonNumber}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lesson Units List (Only Literary Works) */}
      <div className="space-y-8">
        {filteredUnits.map((unit) => {
          const literaryRows = unit.rows.filter((row) => row.category === 'doc' && row.workId);
          return (
            <div
              key={unit.id}
              className="rounded-2xl bg-[#1a1f36] border border-white/10 overflow-hidden shadow-lg"
            >
              {/* Unit Header */}
              <div className="px-5 py-4 bg-[#16213e] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#f39c12] font-semibold mb-0.5">
                    <span>HỌC KÌ {unit.semester}</span>
                    <span>·</span>
                    <span>{literaryRows.length} tác phẩm văn học</span>
                    <span>·</span>
                    <span>Thể loại trọng tâm: {unit.genreFocus}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    {unit.title}
                  </h3>
                </div>
              </div>

              {/* Literary Works in this Lesson */}
              <div className="divide-y divide-white/10">
                {literaryRows.map((row, idx) => {
                  const linkedWork = row.workId
                    ? WORKS_DATA.find((w) => w.id === row.workId)
                    : undefined;
                  const portrait = row.workId ? getAuthorPortrait(row.workId) : undefined;

                  if (!linkedWork) return null;

                  return (
                    <div
                      key={idx}
                      onClick={() => handleOpenWorkId(linkedWork.id, 'overview')}
                      className="p-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.05] cursor-pointer bg-white/[0.01] transition-colors"
                    >
                      {/* Left: Author Portrait + Work Title & Summary */}
                      <div className="flex items-start gap-4 min-w-0 flex-1">
                        {portrait && (
                          <img
                            src={portrait.portraitUrl}
                            alt={portrait.authorName}
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              const target = e.currentTarget;
                              if (target.src !== portrait.remoteSourceUrl) {
                                target.src = portrait.remoteSourceUrl;
                              }
                            }}
                            className="w-14 h-16 rounded-xl object-cover object-top border border-[#f39c12]/50 shadow-md shrink-0 bg-[#121526]"
                          />
                        )}

                        <div className="min-w-0 flex-1 space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#e94560]/20 text-[#e94560] border border-[#e94560]/40">
                              <BookOpen className="w-3 h-3" />
                              <span>{row.period}</span>
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-slate-300 font-medium">
                              <User className="w-3.5 h-3.5 text-[#f39c12]" />
                              <strong className="text-amber-300">{linkedWork.author}</strong>
                              <span className="text-slate-400">({linkedWork.year})</span>
                            </span>
                            {portrait && (
                              <span className="text-[11px] text-slate-400 hidden sm:inline">
                                · {portrait.birthDeathYears}
                              </span>
                            )}
                          </div>

                          <div className="text-base sm:text-lg font-bold text-white">
                            {linkedWork.title}
                          </div>

                          <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                            {linkedWork.summary}
                          </p>
                        </div>
                      </div>

                      {/* Right Action Buttons */}
                      <div
                        className="flex items-center gap-2 shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          onClick={() => handleOpenWorkId(linkedWork.id, 'analysis')}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-xs font-semibold text-slate-200 border border-white/10 transition-colors cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5 text-[#f39c12]" />
                          <span>Phân tích</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleOpenWorkId(linkedWork.id, 'overview')}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#e94560] hover:bg-[#c73659] text-xs font-bold text-white shadow-sm transition-colors cursor-pointer"
                        >
                          <span>Hồ sơ &amp; Tác giả</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
