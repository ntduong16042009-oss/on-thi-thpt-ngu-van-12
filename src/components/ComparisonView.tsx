import React, { useState } from 'react';
import { COMPARISONS_DATA } from '../data/comparisonData';
import { Scale, CheckCircle2, Sparkles, BookOpen, Layers } from 'lucide-react';

export const ComparisonView: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(COMPARISONS_DATA[0].id);

  const selectedTopic =
    COMPARISONS_DATA.find((t) => t.id === selectedTopicId) || COMPARISONS_DATA[0];

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f39c12]/15 border border-[#f39c12]/30 text-[#f39c12] text-xs font-semibold mb-3">
          <Scale className="w-4 h-4" />
          <span>Chuyên Đề So Sánh Văn Học Điểm 9+</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-3">
          Bảng So Sánh & Đối Chiếu Các Tác Phẩm 12
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Dạng câu hỏi so sánh hai đối tượng/hai tác phẩm thường xuất hiện ở phần nhận xét nâng cao (0.5đ - 1.0đ) trong đề thi tốt nghiệp THPT. Dưới đây là các cặp tác phẩm kinh điển nhất.
        </p>
      </div>

      {/* Select Topic Buttons */}
      <div className="flex items-center sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap touch-pan-x">
        {COMPARISONS_DATA.map((topic) => {
          const isSelected = topic.id === selectedTopic.id;
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => setSelectedTopicId(topic.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 active:scale-95 ${
                isSelected
                  ? 'bg-gradient-to-r from-[#e94560] to-[#c73659] text-white shadow-[0_4px_15px_rgba(233,69,96,0.4)]'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{topic.title}</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Comparison Card */}
      <div className="bg-[#16213e]/70 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-8 backdrop-blur-sm">
        {/* Topic Title */}
        <div className="border-b border-white/10 pb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#f39c12] font-display mb-1">
            {selectedTopic.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Đối chiếu giữa <strong className="text-white">{selectedTopic.workA}</strong> ({selectedTopic.authorA}) và{' '}
            <strong className="text-white">{selectedTopic.workB}</strong> ({selectedTopic.authorB})
          </p>
        </div>

        {/* 1. Điểm Tương Đồng */}
        <div>
          <h4 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            1. Điểm Tương Đồng (Nét Gặp Gỡ Tư Tưởng)
          </h4>
          <div className="space-y-2.5 pl-2">
            {selectedTopic.similarity.map((sim, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.03] border-l-2 border-emerald-400 text-xs sm:text-sm text-slate-200"
              >
                {sim}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Điểm Khác Biệt (Side by Side) */}
        <div>
          <h4 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#e94560]" />
            2. Điểm Khác Biệt & Nét Độc Đáo Riêng
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Work A */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-[#e94560]/30 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-[#e94560] uppercase tracking-wider mb-1">
                  Tác phẩm 1
                </div>
                <h5 className="text-base font-bold text-white mb-3">
                  {selectedTopic.differenceA.heading}
                </h5>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {selectedTopic.differenceA.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e94560] shrink-0 mt-2" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Work B */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-[#f39c12]/30 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-[#f39c12] uppercase tracking-wider mb-1">
                  Tác phẩm 2
                </div>
                <h5 className="text-base font-bold text-white mb-3">
                  {selectedTopic.differenceB.heading}
                </h5>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {selectedTopic.differenceB.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f39c12] shrink-0 mt-2" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Lý Giải Nguyên Nhân Khác Biệt & Kết Luận */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-white/[0.04] to-transparent border-l-4 border-[#f39c12]">
          <h4 className="text-sm sm:text-base font-bold text-[#f39c12] mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            3. Lý Giải Nguyên Nhân Khác Biệt & Đánh Giá Nâng Cao
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {selectedTopic.conclusion}
          </p>
        </div>
      </div>
    </div>
  );
};
