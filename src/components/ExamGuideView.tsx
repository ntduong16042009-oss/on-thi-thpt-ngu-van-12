import React, { useState } from 'react';
import { EXAM_STRUCTURE, LITERARY_QUOTES, INTRO_FORMULAS } from '../data/examTipsData';
import {
  GraduationCap,
  Clock,
  Sparkles,
  BookOpen,
  CheckCircle,
  Copy,
  Check,
  Quote,
  Flame,
} from 'lucide-react';

export const ExamGuideView: React.FC = () => {
  const [copiedQuoteIndex, setCopiedQuoteIndex] = useState<number | null>(null);
  const [copiedFormulaIndex, setCopiedFormulaIndex] = useState<number | null>(null);

  const handleCopyQuote = (quote: string, author: string, idx: number) => {
    navigator.clipboard.writeText(`"${quote}" - (${author})`);
    setCopiedQuoteIndex(idx);
    setTimeout(() => setCopiedQuoteIndex(null), 2000);
  };

  const handleCopyFormula = (example: string, idx: number) => {
    navigator.clipboard.writeText(example);
    setCopiedFormulaIndex(idx);
    setTimeout(() => setCopiedFormulaIndex(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-8 sm:space-y-12 animate-in fade-in duration-300">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e94560]/15 border border-[#e94560]/30 text-[#e94560] text-xs font-semibold mb-3">
          <GraduationCap className="w-4 h-4" />
          <span>Chiến Lược Ôn Thi THPT Quốc Gia Điểm 8.5+</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-3">
          Cẩm Nang Điểm Cao Môn Ngữ Văn 12
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Bí kíp trọn gói: Phân bổ thời gian 120 phút khoa học, cấu trúc 3 phần chuẩn ma trận đề thi Bộ GD&ĐT, công thức mở bài gián tiếp và trích dẫn lý luận văn học đắt giá.
        </p>
      </div>

      {/* SECTION 1: TIMELINE & STRUCTURE */}
      <div>
        <div className="flex items-center gap-2.5 mb-6">
          <Clock className="w-5 h-5 text-[#f39c12]" />
          <h3 className="text-xl font-bold text-white">
            1. Ma Trận Đề Thi & Phân Bổ 120 Phút Trong Phòng Thi
          </h3>
        </div>

        {/* 120-minute Timeline Visual */}
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6 flex flex-col md:flex-row items-stretch gap-3 text-xs">
          <div className="flex-1 p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center shrink-0">
              15'
            </span>
            <div>
              <div className="font-semibold text-white">Phần I: Đọc Hiểu (3đ)</div>
              <div className="text-slate-400">Trả lời nhanh, đúng từ khóa, không viết dài</div>
            </div>
          </div>

          <div className="flex-1 p-3 rounded-lg bg-amber-950/40 border border-amber-500/30 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center shrink-0">
              25'
            </span>
            <div>
              <div className="font-semibold text-white">Phần II - Câu 1: NLXH (2đ)</div>
              <div className="text-slate-400">Đoạn văn 200 chữ, 1 trang giấy thi, 1 dẫn chứng hay</div>
            </div>
          </div>

          <div className="flex-1 p-3 rounded-lg bg-rose-950/40 border border-rose-500/30 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-rose-500/20 text-rose-400 font-bold flex items-center justify-center shrink-0">
              75'
            </span>
            <div>
              <div className="font-semibold text-white">Phần II - Câu 2: NLVH (5đ)</div>
              <div className="text-slate-400">Bài văn hoàn chỉnh, 4 - 6 trang, phân tích sâu</div>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
              5'
            </span>
            <div>
              <div className="font-semibold text-white">Soát Bài & Chỉnh Sửa</div>
              <div className="text-slate-400">Kiểm tra lỗi chính tả và thông tin tác giả</div>
            </div>
          </div>
        </div>

        {/* 3 Main Sections Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXAM_STRUCTURE.map((sec, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#16213e]/70 border border-white/10 hover:border-[#e94560]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#e94560]/20 text-[#e94560]">
                    {sec.score}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {sec.duration}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-3">{sec.title}</h4>

                <ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-300">
                  {sec.tips.map((tip, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-white/10">
                <div className="text-xs font-medium text-[#f39c12] mb-1">
                  💡 {sec.formula}
                </div>
                {sec.sampleTemplate && (
                  <p className="text-[11px] text-slate-400 italic">
                    {sec.sampleTemplate}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: INTRO FORMULAS */}
      <div>
        <div className="flex items-center gap-2.5 mb-6">
          <Sparkles className="w-5 h-5 text-[#e94560]" />
          <h3 className="text-xl font-bold text-white">
            2. Ba Công Thức Mở Bài Gián Tiếp "Ăn Điểm Tuyệt Đối"
          </h3>
        </div>

        <div className="space-y-4">
          {INTRO_FORMULAS.map((formula, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#16213e]/70 border border-white/10 hover:border-[#f39c12]/40 transition-all"
            >
              <div className="flex items-center justify-between gap-3 mb-3">
                <h4 className="text-base sm:text-lg font-bold text-[#f39c12]">
                  {formula.name}
                </h4>

                <button
                  type="button"
                  onClick={() => handleCopyFormula(formula.example, idx)}
                  className="flex items-center gap-1 text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  {copiedFormulaIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Chép mẫu</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mb-3 text-xs sm:text-sm text-slate-300 p-3 rounded-lg bg-black/30 border border-white/5 font-mono">
                {formula.pattern}
              </div>

              <div className="text-xs sm:text-sm text-amber-100/90 italic font-serif-literary bg-white/[0.02] p-3 rounded-lg border-l-2 border-[#f39c12] leading-relaxed">
                "{formula.example}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: LITERARY QUOTES */}
      <div>
        <div className="flex items-center gap-2.5 mb-6">
          <Flame className="w-5 h-5 text-[#e94560]" />
          <h3 className="text-xl font-bold text-white">
            3. Nhận Định Lý Luận Văn Học Đắt Giá (Chìa Khóa Điểm 9+)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {LITERARY_QUOTES.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#16213e]/70 border border-white/10 hover:border-[#e94560]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Quote className="w-4 h-4 text-[#e94560]" />
                    <span className="text-xs font-bold text-[#f39c12]">{item.author}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyQuote(item.quote, item.author, idx)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Sao chép câu nhận định"
                  >
                    {copiedQuoteIndex === idx ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="font-serif-literary text-sm sm:text-base text-white italic mb-3 leading-relaxed">
                  "{item.quote}"
                </div>
              </div>

              <div className="pt-2.5 border-t border-white/5 text-xs text-slate-400">
                <span className="text-[#e94560] font-semibold">Ứng dụng vào bài thi: </span>
                <span>{item.application}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT BANNER AT BOTTOM OF GUIDE */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#e94560]/20 via-[#16213e] to-[#f39c12]/20 border border-[#e94560]/40 text-center">
        <h4 className="text-lg font-bold text-white mb-2">
          Bạn cần giải đáp thắc mắc hoặc tư vấn phương pháp ôn thi Ngữ Văn 12?
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-4">
          Liên hệ ngay với <strong>Nguyễn Tùng Dương</strong> để nhận thêm tài liệu chuyên đề, bộ đề thi thử có đáp án chi tiết.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="tel:0326516500"
            className="px-5 py-2 rounded-full bg-[#e94560] hover:bg-[#c73659] text-white text-xs sm:text-sm font-semibold shadow-lg transition-transform hover:scale-105"
          >
            Gọi ngay: 0326516500
          </a>
        </div>
      </div>
    </div>
  );
};
