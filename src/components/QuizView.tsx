import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/quizData';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

export const QuizView: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: number }>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentIdx];
  const userSelected = selectedAnswers[currentQ.id];
  const isAnswered = userSelected !== undefined;

  const handleSelectOption = (optIdx: number) => {
    if (isAnswered) return; // Prevent re-answering
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optIdx,
    }));
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowResults(false);
  };

  // Calculate score
  const correctCount = QUIZ_QUESTIONS.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const total = QUIZ_QUESTIONS.length;
  const scorePercent = Math.round((correctCount / total) * 100);

  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-6 py-5 sm:py-8 space-y-5 sm:space-y-6 animate-in fade-in duration-300">
      {/* Title */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e94560]/15 border border-[#e94560]/30 text-[#e94560] text-xs font-semibold mb-3">
          <Sparkles className="w-4 h-4 text-[#f39c12]" />
          <span>Kiểm Tra Nhanh Kiến Thức Trọng Tâm</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-white font-display mb-2">
          Trắc Nghiệm Văn Học 12
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm">
          10 câu hỏi bao quát tác giả, hoàn cảnh, hình tượng nghệ thuật và chi tiết then chốt.
        </p>
      </div>

      {!showResults ? (
        <div className="bg-[#16213e]/70 border border-white/10 rounded-2xl p-4 sm:p-8 backdrop-blur-sm shadow-xl">
          {/* Progress Header */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10 text-xs text-slate-400">
            <div>
              <span>Câu hỏi </span>
              <strong className="text-white text-sm">{currentIdx + 1}</strong> / {total}
            </div>

            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#e94560]" />
              <span className="text-[#f39c12] font-semibold">{currentQ.workTitle}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-gradient-to-r from-[#e94560] to-[#f39c12] transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <h3 className="text-base sm:text-lg font-bold text-white mb-6 leading-relaxed">
            {currentQ.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((opt, oIdx) => {
              let btnClass = 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200';

              if (isAnswered) {
                if (oIdx === currentQ.correctIndex) {
                  btnClass = 'bg-emerald-500/20 border-emerald-500 text-white font-medium';
                } else if (oIdx === userSelected) {
                  btnClass = 'bg-rose-500/20 border-rose-500 text-rose-200';
                } else {
                  btnClass = 'bg-white/[0.02] border-white/5 text-slate-500';
                }
              }

              return (
                <button
                  key={oIdx}
                  type="button"
                  onClick={() => handleSelectOption(oIdx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${btnClass}`}
                >
                  <span className="w-6 h-6 rounded-full border border-current text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {String.fromCharCode(65 + oIdx)}
                  </span>
                  <span className="flex-1 leading-relaxed">{opt}</span>

                  {isAnswered && oIdx === currentQ.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && oIdx === userSelected && userSelected !== currentQ.correctIndex && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation when answered */}
          {isAnswered && (
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6 animate-in fade-in">
              <div className="text-xs font-bold text-[#f39c12] mb-1">
                {userSelected === currentQ.correctIndex ? '🎉 Chính xác!' : '💡 Giải thích chi tiết:'}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Action button */}
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={handleNext}
              disabled={!isAnswered}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                isAnswered
                  ? 'bg-gradient-to-r from-[#e94560] to-[#c73659] text-white shadow-lg hover:scale-105'
                  : 'bg-white/5 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>{currentIdx < total - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Result Scorecard */
        <div className="bg-[#16213e]/80 border border-white/10 rounded-2xl p-8 text-center space-y-6 shadow-2xl animate-in zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#e94560] to-[#f39c12] p-1 mx-auto shadow-xl">
            <div className="w-full h-full bg-[#16213e] rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-[#f39c12]" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-1">Kết Quả Luyện Tập</h3>
            <p className="text-xs text-slate-400">
              Bạn đã hoàn thành 10 câu trắc nghiệm Ngữ Văn 12
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto">
            <div className="text-4xl font-extrabold text-white font-display mb-1">
              {correctCount} / {total}
            </div>
            <div className="text-xs font-semibold text-[#f39c12]">
              Tỷ lệ chính xác: {scorePercent}%
            </div>
            <div className="mt-3 text-xs text-slate-300">
              {scorePercent >= 80
                ? '🏆 Xuất sắc! Bạn nắm rất vững kiến thức các tác phẩm trọng tâm.'
                : scorePercent >= 60
                ? '👍 Khá tốt! Hãy xem lại các chi tiết nghệ thuật để đạt điểm tối đa nhé.'
                : '📖 Hãy ôn tập thêm tại tab "Kho Tác Phẩm" để củng cố nền tảng.'}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleRestart}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#e94560] to-[#c73659] text-white text-xs sm:text-sm font-semibold shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm Lại Đề Này</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
