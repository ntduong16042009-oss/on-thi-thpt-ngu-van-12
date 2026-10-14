import React, { useState, useMemo } from 'react';
import {
  EXPRESSION_MODES_DATA,
  LITERARY_EXPRESSIONS_FORMULAS as LITERARY_FORMULAS,
  WORK_EXPRESSION_SPECS,
  WorkExpressionSpec,
} from '../data/expressionSpecData';
import { WORKS_DATA, WorkItem } from '../data/worksData';
import { getAuthorPortrait } from '../data/authorPortraitsData';
import {
  Compass,
  Code2,
  BookOpen,
  Sparkles,
  Check,
  Copy,
  Search,
  Filter,
  ArrowUpRight,
  Layers,
  Target,
  FileCode,
  Award,
  Link2,
  SlidersHorizontal,
  CheckCircle2,
} from 'lucide-react';

interface ContentExpressionSpecViewProps {
  onSelectWork: (work: WorkItem, initialTab?: string) => void;
  onApplyMainFilter?: (genre: 'all' | 'tho' | 'truyen' | 'ky' | 'kich' | 'chinh-luan', query: string) => void;
}

interface PresetExpressionRule {
  id: string;
  label: string;
  badge: string;
  expression: string;
  targetType: 'URL_RULE' | 'PAGE_CONTENT' | 'REGEX_MATCH';
  description: string;
  matchedSection: string;
}

const PRESET_EXPRESSION_RULES: PresetExpressionRule[] = [
  {
    id: 'rule-tho-trong-tam',
    label: 'Cụm Thơ Kháng Chiến & Trữ Tình Trọng Tâm',
    badge: 'Biểu thức Chính quy (Regex)',
    expression: '(Tây Tiến|Việt Bắc|Đất Nước|Sóng|Đàn ghi ta)',
    targetType: 'REGEX_MATCH',
    description: 'Chỉ định nhóm tác phẩm Thơ lớp 12 có tần suất xuất hiện cao nhất trong đề thi THPT Quốc Gia.',
    matchedSection: '?tab=works&genre=tho',
  },
  {
    id: 'rule-truyen-ngan',
    label: 'Cụm Truyện Hiện Thực & Nhân Đạo',
    badge: 'Biểu thức Nội dung',
    expression: '(Vợ chồng A Phủ|Vợ nhặt|Chiếc thuyền ngoài xa|Rừng xà nu)',
    targetType: 'REGEX_MATCH',
    description: 'Chỉ định nhóm truyện ngắn trọng tâm xoay quanh số phận con người, giá trị nhân đạo và khuynh hướng sử thi.',
    matchedSection: '?tab=works&genre=truyen',
  },
  {
    id: 'rule-ky-hai-dong-song',
    label: 'Cụm Tùy Bút & Bút Ký Hai Dòng Sông',
    badge: 'Biểu thức Chuyên đề',
    expression: '(Người lái đò Sông Đà|Ai đã đặt tên cho dòng sông|tùy bút|bút ký)',
    targetType: 'REGEX_MATCH',
    description: 'Chỉ định hai tuyệt phẩm ký về hình tượng Sông Đà hung bạo - trữ tình và Sông Hương mê đắm - thi ca.',
    matchedSection: '?tab=works&genre=ky',
  },
  {
    id: 'rule-gia-tri-cam-hung',
    label: 'Biểu Thức Cảm Hứng Bi Tráng & Nhân Đạo',
    badge: 'Từ khóa Chỉ định',
    expression: '(bi tráng|hào hoa|nhân đạo|sức sống tiềm tàng|tình huống nhận thức)',
    targetType: 'PAGE_CONTENT',
    description: 'Lọc toàn bộ các tác phẩm chứa hệ thống từ khóa học thuật ăn điểm trong bảng chấm của Bộ GD&ĐT.',
    matchedSection: '?tab=spec&mode=all',
  },
  {
    id: 'rule-nghe-thuat-tu-tu',
    label: 'Biểu Thức Biện Pháp Tu Từ & Bút Pháp',
    badge: 'Từ khóa Nghệ thuật',
    expression: '(ẩn dụ|hoán dụ|tương phản|đối lập|tảng băng trôi|dòng ý thức)',
    targetType: 'PAGE_CONTENT',
    description: 'Chỉ định nội dung phân tích nghệ thuật đặc trưng phục vụ câu hỏi Đọc hiểu và đánh giá nghệ thuật NLVH.',
    matchedSection: '?tab=spec&section=modes',
  },
];

export const ContentExpressionSpecView: React.FC<ContentExpressionSpecViewProps> = ({
  onSelectWork,
  onApplyMainFilter,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'matrix' | 'modes' | 'formulas' | 'regex-lab'>('matrix');
  const [selectedPrimaryMode, setSelectedPrimaryMode] = useState<string>('all');
  const [expressionInput, setExpressionInput] = useState<string>('');
  const [formulaCategory, setFormulaCategory] = useState<'all' | 'doc-hieu' | 'nlxh' | 'nlvh'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // All 16 work specs merged with full WorkItem reference
  const allWorkSpecs = useMemo(() => {
    return WORKS_DATA.map((work) => {
      const spec: WorkExpressionSpec | undefined = WORK_EXPRESSION_SPECS[work.id];
      return {
        work,
        spec: spec || {
          workId: work.id,
          title: work.title,
          author: work.author,
          year: work.year,
          genreLabel: work.tag,
          primaryExpression: work.genre === 'tho' || work.genre === 'ky' ? 'Biểu cảm' : work.genre === 'chinhluan' ? 'Nghị luận' : 'Tự sự',
          combinedExpressions: ['Miêu tả', 'Biểu cảm'],
          languageStyle: 'Phong cách ngôn ngữ Nghệ thuật',
          formAndStructure: work.summary,
          dominantTone: 'Sâu sắc, giàu giá trị biểu cảm và tư tưởng',
          coreRhetoricalDevices: work.keywords,
          keyExpressionValue: work.mainThemes[0] || work.summary,
        },
      };
    });
  }, []);

  // Filter work specs using both Primary Mode and Expression / Regex input
  const filteredWorkSpecs = useMemo(() => {
    return allWorkSpecs.filter(({ work, spec }) => {
      if (selectedPrimaryMode !== 'all') {
        const matchesPrimary = spec.primaryExpression.toLowerCase().includes(selectedPrimaryMode.toLowerCase());
        const matchesCombined = spec.combinedExpressions.some((m) =>
          m.toLowerCase().includes(selectedPrimaryMode.toLowerCase())
        );
        if (!matchesPrimary && !matchesCombined) return false;
      }

      if (expressionInput.trim()) {
        const rawPattern = expressionInput.trim();
        const searchableCorpus = [
          work.title,
          work.author,
          work.year,
          spec.genreLabel,
          spec.primaryExpression,
          ...spec.combinedExpressions,
          spec.languageStyle,
          spec.formAndStructure,
          spec.dominantTone,
          ...spec.coreRhetoricalDevices,
          spec.keyExpressionValue,
          work.summary,
          ...work.mainThemes,
          ...work.artisticValues,
          ...work.keywords,
        ].join(' | ');

        try {
          const regex = new RegExp(rawPattern, 'i');
          return regex.test(searchableCorpus);
        } catch {
          return searchableCorpus.toLowerCase().includes(rawPattern.toLowerCase());
        }
      }

      return true;
    });
  }, [allWorkSpecs, selectedPrimaryMode, expressionInput]);

  const filteredFormulas = useMemo(() => {
    if (formulaCategory === 'all') return LITERARY_FORMULAS;
    return LITERARY_FORMULAS.filter((f) => f.category === formulaCategory);
  }, [formulaCategory]);

  // Check if current expressionInput is valid regex
  const regexStatus = useMemo(() => {
    if (!expressionInput.trim()) return { valid: true, isRegex: false };
    try {
      new RegExp(expressionInput.trim(), 'i');
      const hasRegexChars = /[()|^$*+?[\]\\]/.test(expressionInput.trim());
      return { valid: true, isRegex: hasRegexChars };
    } catch {
      return { valid: false, isRegex: true };
    }
  }, [expressionInput]);

  return (
    <section
      className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8"
      aria-label="Chỉ định nội dung trang web và Hệ thống biểu thức Ngữ văn 12"
      data-content-specification="literary-expression-system"
    >
      {/* Hero Banner of the Specification & Expression Module */}
      <div className="relative rounded-2xl bg-[#1a1f36] border border-white/10 p-4 sm:p-8 mb-6 sm:mb-8 overflow-hidden shadow-2xl">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#e94560]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#f5a623]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e94560]/15 border border-[#e94560]/30 text-[#ff6b81] text-xs font-semibold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Hệ Thống Chỉ Định Nội Dung &amp; Biểu Thức Trọng Tâm 12</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
              Chỉ Định Nội Dung Tác Phẩm &amp;{' '}
              <span className="bg-gradient-to-r from-[#e94560] to-[#f5a623] bg-clip-text text-transparent">
                Biểu Thức Biểu Đạt
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tra cứu tức thì <strong>Phương thức biểu đạt</strong>, <strong>Phong cách ngôn ngữ</strong>,{' '}
              <strong>Biểu thức công thức làm văn 9+</strong> và lọc nội dung chuyên sâu bằng{' '}
              <strong>Biểu thức chính quy (Regex / Từ khóa chỉ định)</strong> cho toàn bộ 16 tác phẩm Ngữ văn 12.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0">
            <div className="p-3.5 rounded-xl bg-[#121526]/90 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-bold text-[#e94560] font-mono">16/16</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Tác phẩm chỉ định</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#121526]/90 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-bold text-[#f5a623] font-mono">06</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Phương thức biểu đạt</div>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-[#121526]/90 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">06</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Biểu thức ăn điểm</div>
            </div>
          </div>
        </div>

        {/* Sub-navigation Tabs */}
        <div className="relative z-10 mt-7 pt-5 border-t border-white/10 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveSubTab('matrix')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeSubTab === 'matrix'
                ? 'bg-[#e94560] text-white shadow-lg shadow-[#e94560]/25'
                : 'bg-[#121526]/80 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Ma Trận Chỉ Định 16 Tác Phẩm</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('modes')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeSubTab === 'modes'
                ? 'bg-[#e94560] text-white shadow-lg shadow-[#e94560]/25'
                : 'bg-[#121526]/80 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>6 Phương Thức Biểu Đạt</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('formulas')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeSubTab === 'formulas'
                ? 'bg-[#e94560] text-white shadow-lg shadow-[#e94560]/25'
                : 'bg-[#121526]/80 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Biểu Thức Công Thức Làm Văn 9+</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSubTab('regex-lab')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeSubTab === 'regex-lab'
                ? 'bg-[#e94560] text-white shadow-lg shadow-[#e94560]/25'
                : 'bg-[#121526]/80 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Chỉ Định Nội Dung Web &amp; Biểu Thức Quảng Cáo</span>
          </button>
        </div>
      </div>

      {/* TAB 1: MA TRẬN CHỈ ĐỊNH 16 TÁC PHẨM + BỘ LỌC BIỂU THỨC */}
      {activeSubTab === 'matrix' && (
        <div className="space-y-6">
          {/* Interactive Expression & Mode Filter Bar */}
          <div className="p-5 rounded-2xl bg-[#1a1f36] border border-white/10 space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#f5a623]" />
                  <span>Bộ Lọc Chỉ Định Nội Dung &amp; Biểu Thức Truy Vấn</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Nhập từ khóa hoặc biểu thức chính quy (ví dụ: <code className="text-[#f5a623] font-mono">(Tây Tiến|Việt Bắc)</code> hoặc <code className="text-[#f5a623] font-mono">bi tráng|nhân đạo</code>) để lọc chính xác nội dung chỉ định.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="px-2.5 py-1 rounded-md bg-[#121526] border border-white/10 font-mono">
                  Kết quả khớp: <strong className="text-[#f5a623]">{filteredWorkSpecs.length}</strong>/16 tác phẩm
                </span>
              </div>
            </div>

            {/* Search / Regex Input */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
              <div className="lg:col-span-7 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={expressionInput}
                  onChange={(e) => setExpressionInput(e.target.value)}
                  placeholder="Nhập biểu thức lọc nội dung: VD (Tây Tiến|Việt Bắc) hoặc ẩn dụ|bi tráng..."
                  className="w-full pl-10 pr-28 py-2.5 rounded-xl bg-[#121526] border border-white/15 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#e94560] font-mono"
                />
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                  {expressionInput && (
                    <button
                      type="button"
                      onClick={() => setExpressionInput('')}
                      className="text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-white/5 cursor-pointer"
                    >
                      Xóa
                    </button>
                  )}
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      !regexStatus.valid
                        ? 'bg-rose-500/15 text-rose-300 border-rose-500/30'
                        : regexStatus.isRegex
                        ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                        : 'bg-white/5 text-slate-400 border-white/10'
                    }`}
                  >
                    {!regexStatus.valid ? 'Lỗi Regex' : regexStatus.isRegex ? 'Regex Active' : 'Text / Regex'}
                  </span>
                </div>
              </div>

              {/* Primary Expression Mode Selector */}
              <div className="lg:col-span-5 flex flex-wrap items-center gap-1.5">
                {[
                  { id: 'all', label: 'Tất cả PT biểu đạt' },
                  { id: 'Biểu cảm', label: 'Biểu cảm' },
                  { id: 'Tự sự', label: 'Tự sự' },
                  { id: 'Nghị luận', label: 'Nghị luận' },
                  { id: 'Miêu tả', label: 'Miêu tả' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedPrimaryMode(m.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      selectedPrimaryMode === m.id
                        ? 'bg-[#f5a623] text-slate-950 font-bold'
                        : 'bg-[#121526] text-slate-300 hover:text-white border border-white/10'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Expression Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] text-slate-400 font-medium">Biểu thức mẫu nhanh:</span>
              {PRESET_EXPRESSION_RULES.map((rule) => (
                <button
                  key={rule.id}
                  type="button"
                  onClick={() => setExpressionInput(rule.expression)}
                  className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer font-mono ${
                    expressionInput === rule.expression
                      ? 'bg-[#e94560]/20 border-[#e94560] text-[#ff6b81]'
                      : 'bg-[#121526]/70 border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
                  }`}
                >
                  {rule.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of 16 Work Expression Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredWorkSpecs.map(({ work, spec }) => {
              const portrait = getAuthorPortrait(work.id);
              return (
              <article
                key={work.id}
                data-work-id={work.id}
                data-expression-mode={spec.primaryExpression}
                className="rounded-2xl bg-[#1a1f36] border border-white/10 hover:border-[#e94560]/40 transition-all p-5 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Top Metadata Row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      {portrait && (
                        <img
                          src={portrait.portraitUrl}
                          alt={`Chân dung ${spec.author}`}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.src !== portrait.remoteSourceUrl) {
                              target.src = portrait.remoteSourceUrl;
                            }
                          }}
                          className="w-12 h-14 rounded-lg object-cover object-top border border-[#f5a623]/40 shrink-0 bg-[#121526]"
                        />
                      )}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#e94560]/15 text-[#ff6b81] border border-[#e94560]/30 text-[11px] font-semibold">
                            PT chính: {spec.primaryExpression}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-md bg-[#f5a623]/15 text-[#f5a623] border border-[#f5a623]/30 text-[11px] font-medium">
                            {spec.genreLabel}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">({spec.year})</span>
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                          {spec.title}
                        </h3>
                        <p className="text-xs text-slate-400">
                          Tác giả: <strong className="text-slate-200">{spec.author}</strong>
                          {portrait && <span className="ml-1.5 text-slate-500">({portrait.birthDeathYears})</span>}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectWork(work, 'overview')}
                      className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#e94560] text-slate-200 hover:text-white text-xs font-semibold border border-white/10 transition-all cursor-pointer"
                    >
                      <span>Mở tác phẩm</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Structured Specification Table */}
                  <div className="space-y-2.5 text-xs bg-[#121526]/80 rounded-xl p-3.5 border border-white/5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                      <span className="text-slate-400 font-medium">Phương thức kết hợp:</span>
                      <span className="sm:col-span-2 text-slate-200 font-medium">
                        {spec.primaryExpression} (chính) + {spec.combinedExpressions.join(', ')}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 border-t border-white/5 pt-2">
                      <span className="text-slate-400 font-medium">Phong cách ngôn ngữ:</span>
                      <span className="sm:col-span-2 text-emerald-300 font-medium">
                        {spec.languageStyle}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 border-t border-white/5 pt-2">
                      <span className="text-slate-400 font-medium">Kết cấu &amp; Thể thức:</span>
                      <span className="sm:col-span-2 text-slate-300 leading-relaxed">
                        {spec.formAndStructure}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 border-t border-white/5 pt-2">
                      <span className="text-slate-400 font-medium">Giọng điệu chủ đạo:</span>
                      <span className="sm:col-span-2 text-[#f5a623] font-medium">
                        {spec.dominantTone}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 border-t border-white/5 pt-2">
                      <span className="text-slate-400 font-medium">Chỉ định giá trị cốt lõi:</span>
                      <span className="sm:col-span-2 text-slate-200 leading-relaxed">
                        {spec.keyExpressionValue}
                      </span>
                    </div>
                  </div>

                  {/* Rhetorical Devices */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {spec.coreRhetoricalDevices.map((dev, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                      >
                        {dev}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectWork(work, 'analysis')}
                      className="text-xs text-[#f5a623] hover:underline font-medium cursor-pointer"
                    >
                      Phân tích &amp; Bóc tách câu
                    </button>
                    <span className="text-slate-600">•</span>
                    <button
                      type="button"
                      onClick={() => onSelectWork(work, 'outline')}
                      className="text-xs text-slate-300 hover:text-white hover:underline font-medium cursor-pointer"
                    >
                      Dàn ý chuẩn
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleCopyText(
                        `spec-${work.id}`,
                        `[${spec.title} - ${spec.author} (${spec.year})]\n• Thể loại: ${spec.genreLabel}\n• Phương thức biểu đạt: ${spec.primaryExpression} (kết hợp ${spec.combinedExpressions.join(', ')})\n• Phong cách ngôn ngữ: ${spec.languageStyle}\n• Giọng điệu: ${spec.dominantTone}\n• Biện pháp nghệ thuật: ${spec.coreRhetoricalDevices.join(', ')}\n• Nội dung chỉ định: ${spec.keyExpressionValue}`
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
                  >
                    {copiedId === `spec-${work.id}` ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Đã chép hồ sơ</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Chép chỉ định</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: 6 PHƯƠNG THỨC BIỂU ĐẠT CHUẨN ĐỌC HIỂU THPT QUỐC GIA */}
      {activeSubTab === 'modes' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPRESSION_MODES_DATA.map((mode) => (
            <div
              key={mode.id}
              className="rounded-2xl bg-[#1a1f36] border border-white/10 p-6 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-md bg-[#e94560]/15 border border-[#e94560]/30 text-[#ff6b81] text-xs font-semibold">
                    {mode.badge}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPrimaryMode(mode.name.replace('Phương thức ', ''));
                      setActiveSubTab('matrix');
                    }}
                    className="text-xs text-[#f5a623] hover:underline font-medium flex items-center gap-1 cursor-pointer"
                  >
                    <span>Lọc tác phẩm theo PT này</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-2">{mode.name}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">{mode.purpose}</p>

                <div className="space-y-3 bg-[#121526]/80 rounded-xl p-4 border border-white/5 mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#f5a623]">
                    Dấu hiệu nhận biết nhanh trong đề Đọc hiểu:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {mode.recognitionSigns.map((sign, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{sign}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Dẫn chứng tiêu biểu Ngữ văn 12:
                  </h4>
                  <div className="space-y-1.5">
                    {mode.grade12Examples.map((ex, i) => (
                      <div
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-slate-200 border border-white/5"
                      >
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs text-amber-200 leading-relaxed">
                <strong className="text-amber-400">Mẹo ăn trọn điểm câu 1 Đọc hiểu:</strong> {mode.examTip}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: BIỂU THỨC CÔNG THỨC LÀM VĂN 9+ */}
      {activeSubTab === 'formulas' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#1a1f36] p-4 rounded-2xl border border-white/10">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'Tất cả Biểu thức (06)' },
                { id: 'doc-hieu', label: 'Phần I: Đọc Hiểu (3.0đ)' },
                { id: 'nlxh', label: 'Phần II.1: Đoạn văn NLXH (2.0đ)' },
                { id: 'nlvh', label: 'Phần II.2: Bài văn NLVH (5.0đ)' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setFormulaCategory(cat.id as 'all' | 'doc-hieu' | 'nlxh' | 'nlvh')}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    formulaCategory === cat.id
                      ? 'bg-[#e94560] text-white'
                      : 'bg-[#121526] text-slate-300 hover:text-white border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {filteredFormulas.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-[#1a1f36] border border-white/10 p-6 shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-[#e94560]/15 border border-[#e94560]/30 text-[#ff6b81] text-xs font-semibold">
                      {item.categoryLabel}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                      Trọng số: {item.scoreWeight}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleCopyText(
                        item.id,
                        `${item.title}\nBiểu thức: ${item.expressionFormula}\nCác bước triển khai:\n${item.stepByStep.map((s, idx) => `${idx + 1}. ${s}`).join('\n')}\nVí dụ áp dụng: ${item.applicationExample}`
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-200 border border-white/10 cursor-pointer"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Đã sao chép công thức</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Sao chép biểu thức</span>
                      </>
                    )}
                  </button>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-3">{item.title}</h3>

                {/* Highlighted Formula Box */}
                <div className="p-4 rounded-xl bg-[#121526] border border-[#f5a623]/40 mb-4">
                  <div className="text-[11px] uppercase tracking-wider text-[#f5a623] font-bold mb-1">
                    Biểu thức cấu trúc chuẩn:
                  </div>
                  <div className="font-mono text-sm sm:text-base text-white font-semibold leading-relaxed">
                    {item.expressionFormula}
                  </div>
                </div>

                {/* Step-by-step */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-7 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Các bước triển khai ăn điểm tối đa:
                    </h4>
                    <ol className="space-y-2 text-xs sm:text-sm text-slate-200">
                      {item.stepByStep.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 bg-[#121526]/60 p-2.5 rounded-lg border border-white/5">
                          <span className="w-5 h-5 rounded-full bg-[#e94560]/20 text-[#ff6b81] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Ví dụ áp dụng thực chiến:</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                        {item.applicationExample}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: CHỈ ĐỊNH NỘI DUNG TRANG WEB & BIỂU THỨC QUẢNG CÁO (GOOGLE ADS / SEO CONTENT TARGETING) */}
      {activeSubTab === 'regex-lab' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#1a1f36] border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#f5a623] mb-1">
                  <Target className="w-4 h-4" />
                  <span>Tối Ưu Hóa Trang Đích Quảng Cáo (Dynamic Search Ads &amp; Content Targeting)</span>
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Bảng Quy Tắc Chỉ Định Nội Dung Trang Web &amp; Biểu Thức Chính Quy
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Cấu hình sẵn các biểu thức chỉ định nội dung trang web (<code className="text-[#f5a623] font-mono">URL_CONTAINS</code>,{' '}
                  <code className="text-[#f5a623] font-mono">PAGE_CONTENT</code>,{' '}
                  <code className="text-[#f5a623] font-mono">REGEX_MATCH</code>) giúp chiến dịch quảng cáo và công cụ tìm kiếm phân phối chính xác từng nhóm tác phẩm Ngữ văn 12.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {PRESET_EXPRESSION_RULES.map((rule) => (
                <div
                  key={rule.id}
                  className="p-4 sm:p-5 rounded-xl bg-[#121526] border border-white/10 hover:border-[#f5a623]/40 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-[#e94560]/15 text-[#ff6b81] border border-[#e94560]/30 text-[11px] font-semibold">
                        {rule.badge}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-white/5 text-slate-300 text-[11px] font-mono">
                        Loại chỉ định: {rule.targetType}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 text-[11px] font-mono">
                        Đích: {rule.matchedSection}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white">{rule.label}</h3>
                    <p className="text-xs text-slate-400">{rule.description}</p>
                    <div className="pt-1">
                      <code className="inline-block px-3 py-1.5 rounded-lg bg-[#1a1f36] border border-white/10 text-xs sm:text-sm text-[#f5a623] font-mono break-all">
                        {rule.expression}
                      </code>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        setExpressionInput(rule.expression);
                        setActiveSubTab('matrix');
                      }}
                      className="px-3.5 py-2 rounded-xl bg-[#e94560] hover:bg-[#d63851] text-white text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Filter className="w-3.5 h-3.5" />
                      <span>Chạy thử biểu thức</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleCopyText(rule.id, rule.expression)}
                      className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      {copiedId === rule.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Đã sao chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Chép Regex</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Deep-Link URL Structure Specification Table for Ad Campaigns */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                <Link2 className="w-4 h-4 text-[#e94560]" />
                <span>Danh Mục Tham Số URL Chỉ Định Nội Dung Trang Đích (Deep-Link Parameters)</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                {[
                  {
                    param: '?tab=works&genre=tho',
                    title: 'Trang đích Chuyên đề Thơ 12',
                    desc: 'Hiển thị trực tiếp 6 tác phẩm thơ kháng chiến & trữ tình trọng tâm.',
                    action: () => onApplyMainFilter && onApplyMainFilter('tho', ''),
                  },
                  {
                    param: '?tab=works&genre=truyen',
                    title: 'Trang đích Truyện Ngắn 12',
                    desc: 'Hiển thị trực tiếp cụm truyện ngắn hiện thực, nhân đạo và sử thi.',
                    action: () => onApplyMainFilter && onApplyMainFilter('truyen', ''),
                  },
                  {
                    param: '?tab=works&genre=ky',
                    title: 'Trang đích Tùy Bút & Bút Ký',
                    desc: 'Hiển thị chuyên đề Người lái đò Sông Đà & Ai đã đặt tên cho dòng sông.',
                    action: () => onApplyMainFilter && onApplyMainFilter('ky', ''),
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#121526] border border-white/10 flex flex-col justify-between gap-3"
                  >
                    <div>
                      <div className="font-mono text-[#f5a623] font-semibold mb-1">{item.param}</div>
                      <div className="font-bold text-white mb-1">{item.title}</div>
                      <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                    {onApplyMainFilter && (
                      <button
                        type="button"
                        onClick={item.action}
                        className="self-start inline-flex items-center gap-1 text-[#ff6b81] hover:underline font-semibold cursor-pointer"
                      >
                        <span>Mở nhánh nội dung này</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
