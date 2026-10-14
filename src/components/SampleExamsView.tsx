import React, { useState, useEffect } from 'react';
import {
  FULL_REFERENCE_EXAMS,
  FREQUENT_EXAM_TOPICS,
  FORM_COMPARISON_OVERVIEW,
} from '../data/sampleExamsData';
import { WORKS_DATA, WorkItem } from '../data/worksData';
import { getAuthorPortrait } from '../data/authorPortraitsData';
import {
  FileCheck2,
  Flame,
  Clock,
  Eye,
  EyeOff,
  Copy,
  Check,
  BookOpen,
  Sparkles,
  Play,
  Pause,
  RotateCcw,
  Award,
  Layers,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface SampleExamsViewProps {
  onSelectWork?: (work: WorkItem, initialTab?: string) => void;
}

export const SampleExamsView: React.FC<SampleExamsViewProps> = ({ onSelectWork }) => {
  const [activeMode, setActiveMode] = useState<'reference-exams' | 'frequent-topics' | 'matrix'>(
    'reference-exams'
  );
  const [selectedExamId, setSelectedExamId] = useState<string>(FULL_REFERENCE_EXAMS[0].id);
  const [showAllAnswers, setShowAllAnswers] = useState<boolean>(true);
  const [revealedQuestions, setRevealedQuestions] = useState<Record<string, boolean>>({});
  const [topicFilter, setTopicFilter] = useState<'all' | 'so-sanh' | 'the-loai' | 'nlxh'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // 120-minute interactive practice timer
  const [secondsLeft, setSecondsLeft] = useState<number>(120 * 60);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const activeExam =
    FULL_REFERENCE_EXAMS.find((e) => e.id === selectedExamId) || FULL_REFERENCE_EXAMS[0];

  const filteredTopics = FREQUENT_EXAM_TOPICS.filter((t) =>
    topicFilter === 'all' ? true : t.category === topicFilter
  );

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleQuestionAnswer = (qKey: string) => {
    setRevealedQuestions((prev) => ({
      ...prev,
      [qKey]: !(prev[qKey] ?? showAllAnswers),
    }));
  };

  const isQuestionVisible = (qKey: string) => {
    if (qKey in revealedQuestions) return revealedQuestions[qKey];
    return showAllAnswers;
  };

  const handleOpenRelatedWork = (workId: string) => {
    if (!onSelectWork) return;
    const found = WORKS_DATA.find((w) => w.id === workId);
    if (found) {
      onSelectWork(found, 'overview');
    }
  };

  return (
    <section
      className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-5 sm:space-y-8 animate-in fade-in duration-300"
      aria-label="Đề Văn Hay Ra và Đề Tham Khảo Chuẩn Form Hiện Nay"
    >
      {/* Top Hero Banner */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#16213e] via-[#1a1f36] to-[#121526] border border-[#e94560]/40 p-4 sm:p-8 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e94560]/15 border border-[#e94560]/30 text-xs text-[#f39c12] font-semibold">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Chuẩn Cấu Trúc Đề Thi Tốt Nghiệp THPT Hiện Hành (Đọc Hiểu 4,0đ – Viết 6,0đ)</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Tuyển Tập Đề Văn Hay Ra &amp; Đề Tham Khảo Tối Ưu Nhất
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Hệ thống <strong>Đề thi tham khảo hoàn chỉnh 120 phút</strong> chuẩn ma trận mới nhất của Bộ GD&amp;ĐT
              (5 câu Đọc hiểu + Đoạn văn 200 chữ + Bài văn 600 chữ) cùng{' '}
              <strong>10+ Đề văn hay ra nhất</strong> có sẵn đáp án, thang điểm, đoạn văn mẫu và dàn ý 9+.
            </p>
          </div>

          {/* Interactive 120-Minute Exam Timer Widget */}
          <div className="p-4 rounded-2xl bg-black/35 border border-white/10 flex flex-col items-center justify-center min-w-[230px] shrink-0">
            <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
              <Clock className="w-3.5 h-3.5 text-[#f39c12]" />
              <span>Đồng hồ bấm giờ luyện đề (120p)</span>
            </div>
            <div className="text-3xl font-mono font-bold text-[#f39c12] tracking-wider my-1">
              {formatTimer(secondsLeft)}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <button
                type="button"
                onClick={() => setTimerRunning((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#e94560] hover:bg-[#c73659] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{timerRunning ? 'Tạm dừng' : 'Bấm giờ'}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setTimerRunning(false);
                  setSecondsLeft(120 * 60);
                }}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                title="Đặt lại 120 phút"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none sm:flex-wrap touch-pan-x w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveMode('reference-exams')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                activeMode === 'reference-exams'
                  ? 'bg-gradient-to-r from-[#e94560] to-[#c73659] text-white shadow-lg'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Đề Tham Khảo ({FULL_REFERENCE_EXAMS.length} Đề)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMode('frequent-topics')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                activeMode === 'frequent-topics'
                  ? 'bg-gradient-to-r from-[#e94560] to-[#c73659] text-white shadow-lg'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <Flame className="w-4 h-4 text-[#f39c12]" />
              <span>Đề Văn Hay Ra ({FREQUENT_EXAM_TOPICS.length} Đề)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveMode('matrix')}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 active:scale-95 ${
                activeMode === 'matrix'
                  ? 'bg-gradient-to-r from-[#e94560] to-[#c73659] text-white shadow-lg'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Cấu Trúc Form Mới</span>
            </button>
          </div>

          {activeMode === 'reference-exams' && (
            <button
              type="button"
              onClick={() => {
                setShowAllAnswers((prev) => !prev);
                setRevealedQuestions({});
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-amber-300 transition-colors cursor-pointer"
            >
              {showAllAnswers ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showAllAnswers ? 'Ẩn đáp án để tự luyện' : 'Hiện toàn bộ đáp án & bài mẫu'}</span>
            </button>
          )}
        </div>
      </div>

      {/* =====================================================================
          MODE 1: FULL 120-MINUTE REFERENCE EXAMS (ĐỀ THAM KHẢO CHUẨN FORM MỚI)
         ===================================================================== */}
      {activeMode === 'reference-exams' && (
        <div className="space-y-6">
          {/* Exam Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {FULL_REFERENCE_EXAMS.map((exam) => {
              const isSelected = exam.id === activeExam.id;
              return (
                <button
                  key={exam.id}
                  type="button"
                  onClick={() => setSelectedExamId(exam.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                    isSelected
                      ? 'bg-[#16213e] border-[#e94560] shadow-[0_8px_25px_rgba(233,69,96,0.25)]'
                      : 'bg-[#1a1f36]/80 border-white/10 hover:border-[#e94560]/40'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#e94560] text-white text-xs font-bold">
                        {exam.code}
                      </span>
                      <span className="text-[11px] font-semibold text-[#f39c12]">{exam.badge}</span>
                    </div>
                    <div className="text-sm font-bold text-white line-clamp-2">{exam.title}</div>
                  </div>
                  <div className="text-[11px] text-slate-400 pt-2 border-t border-white/10">
                    {exam.structureSummary}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Exam Paper Container */}
          <div className="rounded-3xl bg-[#1a1f36] border border-white/10 overflow-hidden shadow-xl">
            {/* Official Exam Paper Header */}
            <div className="p-6 sm:p-8 bg-[#16213e] border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#e94560] text-white font-bold">
                    {activeExam.code}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#f39c12]/20 text-[#f39c12] border border-[#f39c12]/40 font-semibold">
                    Thời gian làm bài: {activeExam.durationMinutes} phút · Thang điểm: {activeExam.totalPoints},0
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {activeExam.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">{activeExam.subtitle}</p>
              </div>

              {/* Related Works Quick Links */}
              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {activeExam.relatedWorkIds.map((wId) => {
                  const work = WORKS_DATA.find((w) => w.id === wId);
                  const portrait = getAuthorPortrait(wId);
                  if (!work) return null;
                  return (
                    <button
                      key={wId}
                      type="button"
                      onClick={() => handleOpenRelatedWork(wId)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/30 hover:bg-white/10 border border-white/10 text-xs text-slate-200 transition-colors cursor-pointer"
                      title={`Mở hồ sơ tác phẩm: ${work.title}`}
                    >
                      {portrait && (
                        <img
                          src={portrait.portraitUrl}
                          alt={work.author}
                          className="w-5 h-5 rounded-full object-cover"
                        />
                      )}
                      <span className="font-semibold text-amber-300">{work.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-10">
              {/* PHẦN I: ĐỌC HIỂU (4,0 ĐIỂM) */}
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="px-3 py-1 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/40 text-xs font-bold">
                      PHẦN I. ĐỌC HIỂU ({activeExam.readingSection.points.toFixed(1)} điểm)
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-300">
                      {activeExam.readingSection.genreType}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 italic">
                    {activeExam.readingSection.sourceCitation}
                  </span>
                </div>

                {/* Reading Excerpt Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-black/30 border border-white/10 space-y-3">
                  <div className="text-xs sm:text-sm font-bold text-[#f39c12]">
                    {activeExam.readingSection.excerptTitle}
                  </div>
                  <blockquote className="font-serif-literary text-sm sm:text-base text-white whitespace-pre-line leading-relaxed pl-4 border-l-2 border-[#e94560]">
                    {activeExam.readingSection.excerptContent}
                  </blockquote>
                </div>

                {/* 5 Reading Questions */}
                <div className="space-y-3">
                  {activeExam.readingSection.questions.map((q) => {
                    const qKey = `${activeExam.id}-q${q.number}`;
                    const visible = isQuestionVisible(qKey);
                    return (
                      <div
                        key={q.number}
                        className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 py-0.5 rounded-md bg-[#e94560]/20 text-[#e94560] text-xs font-bold">
                              Câu {q.number} ({q.points.toFixed(2).replace('.00', '.0')} điểm)
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-white/5 text-slate-300 text-[11px] border border-white/10">
                              Mức độ: {q.level}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleQuestionAnswer(qKey)}
                            className="inline-flex items-center gap-1 text-xs text-[#f39c12] hover:underline font-semibold cursor-pointer self-start sm:self-auto"
                          >
                            {visible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                            <span>{visible ? 'Ẩn đáp án' : 'Xem đáp án chuẩn'}</span>
                          </button>
                        </div>

                        <div className="text-sm sm:text-base font-semibold text-white">
                          {q.question}
                        </div>

                        {visible && (
                          <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs sm:text-sm text-slate-200 whitespace-pre-line leading-relaxed">
                            <span className="font-bold text-emerald-400 block mb-1">
                              ✓ Hướng dẫn chấm &amp; Đáp án chuẩn:
                            </span>
                            {q.answerGuide}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* PHẦN II: VIẾT (6,0 ĐIỂM) */}
              <div className="space-y-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-lg bg-[#e94560]/20 text-[#e94560] border border-[#e94560]/40 text-xs font-bold">
                    PHẦN II. VIẾT ({activeExam.writingSection.points.toFixed(1)} điểm)
                  </span>
                  <span className="text-xs text-slate-400">
                    Cấu trúc chuẩn: Câu 1 (Đoạn văn 200 chữ – 2,0đ) + Câu 2 (Bài văn 600 chữ – 4,0đ)
                  </span>
                </div>

                {/* CÂU 1 (2,0 ĐIỂM - ĐOẠN VĂN 200 CHỮ) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-black/25 border border-[#f39c12]/30 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-[#f39c12] text-slate-950 text-xs font-bold">
                        Câu 1 ({activeExam.writingSection.question1.points.toFixed(1)} điểm)
                      </span>
                      <span className="text-xs font-semibold text-amber-300">
                        Đoạn văn nghị luận ({activeExam.writingSection.question1.wordCount})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopyText(
                          activeExam.writingSection.question1.sampleParagraph,
                          `${activeExam.id}-q1-sample`
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedId === `${activeExam.id}-q1-sample` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Đã chép đoạn mẫu</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Chép đoạn văn mẫu 200 chữ</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                    {activeExam.writingSection.question1.prompt}
                  </p>

                  {showAllAnswers && (
                    <div className="space-y-4 pt-2 border-t border-white/10">
                      <div>
                        <div className="text-xs font-bold text-[#f39c12] mb-2">
                          Thang điểm &amp; Dàn ý đoạn văn 200 chữ:
                        </div>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                          {activeExam.writingSection.question1.rubricPoints.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-[#f39c12] space-y-1.5">
                        <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Đoạn văn mẫu tham khảo chuẩn 200 chữ (Điểm tối đa 2,0/2,0):</span>
                        </div>
                        <p className="font-serif-literary text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                          "{activeExam.writingSection.question1.sampleParagraph}"
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CÂU 2 (4,0 ĐIỂM - BÀI VĂN 600 CHỮ) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-black/25 border border-[#e94560]/40 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-[#e94560] text-white text-xs font-bold">
                        Câu 2 ({activeExam.writingSection.question2.points.toFixed(1)} điểm)
                      </span>
                      <span className="text-xs font-semibold text-rose-300">
                        Bài văn nghị luận hoàn chỉnh ({activeExam.writingSection.question2.wordCount})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopyText(
                          `${activeExam.writingSection.question2.prompt}\n\nMở bài mẫu:\n${activeExam.writingSection.question2.sampleOpeningAndClosing.opening}\n\nKết bài mẫu:\n${activeExam.writingSection.question2.sampleOpeningAndClosing.closing}`,
                          `${activeExam.id}-q2-sample`
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      {copiedId === `${activeExam.id}-q2-sample` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Đã chép dàn ý &amp; mở kết</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Chép Mở bài &amp; Kết bài mẫu</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                    {activeExam.writingSection.question2.prompt}
                  </p>

                  {showAllAnswers && (
                    <div className="space-y-4 pt-2 border-t border-white/10">
                      {/* Detailed Outline */}
                      <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2.5">
                        <div className="text-xs font-bold text-[#f39c12] uppercase tracking-wider">
                          Hệ thống Luận điểm &amp; Dàn ý chi tiết (4,0 điểm):
                        </div>
                        <div className="text-xs sm:text-sm text-slate-200">
                          <strong className="text-emerald-400">1. Mở bài (0,5đ): </strong>
                          {activeExam.writingSection.question2.essayOutline.intro}
                        </div>
                        <div className="space-y-1.5 text-xs sm:text-sm text-slate-200">
                          <strong className="text-amber-300 block">2. Thân bài (2,5đ):</strong>
                          {activeExam.writingSection.question2.essayOutline.body.map((b, idx) => (
                            <div key={idx} className="pl-3 border-l border-white/15">
                              {b}
                            </div>
                          ))}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-200">
                          <strong className="text-sky-400">3. Kết bài (0,5đ) + Sáng tạo (0,5đ): </strong>
                          {activeExam.writingSection.question2.essayOutline.conclusion}
                        </div>
                      </div>

                      {/* Sample Opening & Closing */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-emerald-400 space-y-1.5">
                          <div className="text-xs font-bold text-emerald-400">
                            ★ Mở bài gián tiếp mẫu ấn tượng:
                          </div>
                          <p className="font-serif-literary text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                            "{activeExam.writingSection.question2.sampleOpeningAndClosing.opening}"
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.03] border-l-2 border-[#e94560] space-y-1.5">
                          <div className="text-xs font-bold text-[#e94560]">
                            ★ Kết bài lắng đọng, giàu sức gợi:
                          </div>
                          <p className="font-serif-literary text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                            "{activeExam.writingSection.question2.sampleOpeningAndClosing.closing}"
                          </p>
                        </div>
                      </div>

                      {/* High-score tips */}
                      <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 space-y-1">
                        <div className="font-bold text-[#f39c12] flex items-center gap-1.5">
                          <Award className="w-4 h-4" />
                          <span>Bí quyết bứt phá điểm 9+ cho câu 4,0 điểm này:</span>
                        </div>
                        {activeExam.writingSection.question2.highScoreTips.map((tip, idx) => (
                          <div key={idx}>• {tip}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODE 2: FREQUENTLY TESTED PROMPTS (ĐỀ VĂN HAY RA NHẤT THEO CHUYÊN ĐỀ)
         ===================================================================== */}
      {activeMode === 'frequent-topics' && (
        <div className="space-y-6">
          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#1a1f36] border border-white/10">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setTopicFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  topicFilter === 'all'
                    ? 'bg-[#e94560] text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                Tất cả ({FREQUENT_EXAM_TOPICS.length} Đề trọng tâm)
              </button>
              <button
                type="button"
                onClick={() => setTopicFilter('so-sanh')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  topicFilter === 'so-sanh'
                    ? 'bg-[#e94560] text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                Dạng So sánh 2 tác phẩm Truyện / Thơ
              </button>
              <button
                type="button"
                onClick={() => setTopicFilter('the-loai')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  topicFilter === 'the-loai'
                    ? 'bg-[#e94560] text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                Dạng Phân tích Đặc trưng Thể loại
              </button>
              <button
                type="button"
                onClick={() => setTopicFilter('nlxh')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  topicFilter === 'nlxh'
                    ? 'bg-[#e94560] text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                Dạng Nghị luận Xã hội Tuổi trẻ
              </button>
            </div>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                className="p-6 rounded-2xl bg-[#1a1f36] border border-white/10 hover:border-[#e94560]/50 transition-all flex flex-col justify-between gap-4 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-md bg-[#e94560]/20 text-[#e94560] border border-[#e94560]/30 text-xs font-bold">
                      {topic.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/15 text-[#f39c12] border border-amber-500/30 text-xs font-bold">
                      🔥 {topic.frequencyBadge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display">{topic.title}</h3>

                  <div className="p-3.5 rounded-xl bg-black/30 border border-white/10 text-xs sm:text-sm text-amber-100 leading-relaxed">
                    <strong className="text-[#f39c12] block mb-1">Đề bài chuẩn:</strong>
                    "{topic.prompt}"
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-emerald-400">
                      Luận điểm cốt lõi cần triển khai:
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                      {topic.keyArguments.map((arg, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                          <span>{arg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 space-y-1">
                    <div>
                      <strong className="text-[#f39c12]">Dẫn chứng vàng: </strong>
                      <span>{topic.goldenEvidence}</span>
                    </div>
                    <div>
                      <strong className="text-sky-400">Bí quyết ăn điểm 9+: </strong>
                      <span>{topic.scoringSecret}</span>
                    </div>
                  </div>
                </div>

                {/* Footer with Related Work Buttons */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {topic.relatedWorkIds.map((wId) => {
                      const work = WORKS_DATA.find((w) => w.id === wId);
                      if (!work) return null;
                      return (
                        <button
                          key={wId}
                          type="button"
                          onClick={() => handleOpenRelatedWork(wId)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#e94560] text-xs text-slate-200 hover:text-white border border-white/10 transition-colors cursor-pointer"
                        >
                          <BookOpen className="w-3 h-3" />
                          <span>{work.title}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleCopyText(
                        `${topic.title}\nĐề bài: ${topic.prompt}\nLuận điểm:\n- ${topic.keyArguments.join('\n- ')}\nDẫn chứng: ${topic.goldenEvidence}`,
                        topic.id
                      )
                    }
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                  >
                    {copiedId === topic.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Đã chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Chép đề &amp; ý</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =====================================================================
          MODE 3: CURRENT EXAM FORM MATRIX (MA TRẬN FORM ĐỀ MỚI BỘ GD&ĐT)
         ===================================================================== */}
      {activeMode === 'matrix' && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1a1f36] border border-white/10 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                {FORM_COMPARISON_OVERVIEW.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Áp dụng cho kỳ thi Tốt nghiệp THPT và các bài kiểm tra định kỳ lớp 12 hiện nay:
                Đánh giá năng lực thực chất, chống văn mẫu học vẹt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FORM_COMPARISON_OVERVIEW.parts.map((part, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#16213e] border border-white/10 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-[#e94560]/20 text-[#e94560] text-xs font-bold">
                        Phần {idx + 1}
                      </span>
                      <span className="text-xs text-[#f39c12] font-semibold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{part.timeAllocation}</span>
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white">{part.partName}</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {part.details.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
