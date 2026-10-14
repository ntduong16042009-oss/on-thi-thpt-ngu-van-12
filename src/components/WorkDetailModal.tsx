import React, { useState, useEffect, useRef } from 'react';
import { WorkItem } from '../data/worksData';
import {
  VERSE_ANALYSIS_DATA,
  PROSE_ANALYSIS_DATA,
  VerseAnalysisItem,
  ProseAnalysisItem,
} from '../data/verseAnalysisData';
import { getAuthorPortrait } from '../data/authorPortraitsData';
import { WORK_EXPRESSION_SPECS } from '../data/expressionSpecData';
import { DETAILED_LINE_ANALYSES } from '../data/lineAnalysisData';
import {
  X,
  Copy,
  Check,
  Bookmark,
  Volume2,
  Square,
  BookOpen,
  Feather,
  Quote,
  FileText,
  GraduationCap,
  Sparkles,
  Share2,
  Maximize2,
  Minimize2,
  ArrowLeft,
  ArrowRight,
  Printer,
  Clock,
  Type,
  Palette,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Headphones,
  ExternalLink,
  Search,
  ListFilter,
  PlayCircle,
  Eye,
  Layers,
  Compass,
  MapPin,
  Award,
  MoreHorizontal,
} from 'lucide-react';

interface WorkDetailModalProps {
  work: WorkItem | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  initialTab?: string;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
  currentIndex?: number;
  totalWorks?: number;
  onOpenAiAssistant?: (workId: string) => void;
}

type ModalTab = 'overview' | 'line_by_line' | 'analysis' | 'scholarly' | 'quotes' | 'outline' | 'exam' | 'keywords';
type ReadingTheme = 'navy' | 'sepia' | 'oled';
type FontSize = 'sm' | 'base' | 'lg' | 'xl';
type FontFamily = 'sans' | 'serif';

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({
  work,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
  initialTab = 'overview',
  onNavigateNext,
  onNavigatePrev,
  currentIndex = 0,
  totalWorks = 1,
  onOpenAiAssistant,
}) => {
  const [activeTab, setActiveTab] = useState<ModalTab>('overview');
  const [copiedOutline, setCopiedOutline] = useState(false);
  const [copiedFullAnalysis, setCopiedFullAnalysis] = useState(false);
  const [copiedQuoteIdx, setCopiedQuoteIdx] = useState<number | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(0.95);
  const [sharedToast, setSharedToast] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(true);

  // Reading Experience Customization State
  const [fontSize, setFontSize] = useState<FontSize>('base');
  const [fontFamily, setFontFamily] = useState<FontFamily>('sans');
  const [readingTheme, setReadingTheme] = useState<ReadingTheme>('navy');
  const [showReadingControls, setShowReadingControls] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(true);

  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const tabsBarRef = useRef<HTMLDivElement | null>(null);

  // Scroll active tab into center view smoothly
  useEffect(() => {
    if (!tabsBarRef.current) return;
    const activeEl = tabsBarRef.current.querySelector<HTMLElement>('[data-modal-tab-active="true"]');
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeTab]);

  // Always reset to fullscreen mode and compact header when opening a work
  useEffect(() => {
    if (isOpen) {
      setIsFullscreen(true);
      setIsHeaderCollapsed(true);
      setIsMobileMoreOpen(false);
      setScrollProgress(0);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  }, [isOpen, work]);

  const handleStopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  };

  const [verseSearch, setVerseSearch] = useState('');
  const [copiedVerseId, setCopiedVerseId] = useState<string | null>(null);
  const [readingMode, setReadingMode] = useState<'cards' | 'continuous'>('cards');
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false);

  useEffect(() => {
    const handleFsChange = () => {
      setIsNativeFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const handleToggleNativeFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsNativeFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsNativeFullscreen(false)).catch(() => {});
    }
  };

  const handlePlayVerseAudio = (verseText: string, analysisText: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const text = `Nội dung: ${verseText}. Phân tích chi tiết: ${analysisText}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = speechRate;
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
  };

  const handleCopyVerse = (item: any) => {
    const isVerse = 'verses' in item;
    const content = isVerse
      ? `=== PHÂN TÍCH TỪNG CÂU THƠ: ${item.stanzaTitle} ===\n\n` +
        `Câu thơ:\n"${item.verses}"\n\n` +
        `Nghệ thuật & từ ngữ:\n${item.artisticDevices}\n\n` +
        `Phân tích chi tiết:\n${item.detailedInterpretation}\n\n` +
        `Ý nghĩa tư tưởng:\n${item.thematicSignificance}\n\n` +
        `Điểm nhấn bài thi THPTQG 9+:\n${item.examTakeaway}\n\n` +
        `-- Nguồn: Văn Học Lớp 12 - Nguyễn Tùng Dương (0326516500) --`
      : `=== PHÂN TÍCH PHÂN ĐOẠN: ${item.sectionTitle} ===\n\n` +
        `Trích đoạn:\n"${item.excerpt}"\n\n` +
        `Nghệ thuật:\n${item.artisticHighlights}\n\n` +
        `Phân tích chuyên sâu:\n${item.deepAnalysis}\n\n` +
        `Ý nghĩa tư tưởng:\n${item.thematicSignificance}\n\n` +
        `Điểm nhấn thi 9+:\n${item.examTakeaway}\n\n` +
        `-- Nguồn: Văn Học Lớp 12 - Nguyễn Tùng Dương (0326516500) --`;

    navigator.clipboard.writeText(content);
    setCopiedVerseId(item.id);
    setTimeout(() => setCopiedVerseId(null), 2000);
  };

  useEffect(() => {
    if (initialTab && ['overview', 'line_by_line', 'analysis', 'scholarly', 'quotes', 'outline', 'exam', 'keywords'].includes(initialTab)) {
      setActiveTab(initialTab as ModalTab);
    } else {
      setActiveTab('overview');
    }
  }, [initialTab, work]);

  // Handle keyboard shortcuts (Esc to close, Arrow keys for navigation, F for fullscreen)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        handleStopAudio();
        onClose();
      } else if (e.key === 'ArrowRight' && (e.ctrlKey || e.metaKey)) {
        if (onNavigateNext) onNavigateNext();
      } else if (e.key === 'ArrowLeft' && (e.ctrlKey || e.metaKey)) {
        if (onNavigatePrev) onNavigatePrev();
      } else if (e.key === 'f' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsFullscreen((prev) => !prev);
      } else if (e.key === 'h' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsHeaderCollapsed((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      handleStopAudio();
    };
  }, [isOpen, onClose, onNavigateNext, onNavigatePrev]);

  // Track scroll progress and auto-collapse header on scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
      // Auto-collapse header when user starts scrolling down
      if (scrollTop > 60 && !isHeaderCollapsed) {
        setIsHeaderCollapsed(true);
      }
    }
  };

  // Web Speech API for Vietnamese Audio Reader
  const handlePlayAudio = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    if (!work) return;

    const textToRead =
      work.audioText ||
      `Tác phẩm ${work.title} của tác giả ${work.author}. ${work.summary}. Hoàn cảnh sáng tác: ${work.context}`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'vi-VN';
    utterance.rate = speechRate;

    const voices = window.speechSynthesis.getVoices();
    const viVoice = voices.find((v) => v.lang.includes('vi'));
    if (viVoice) utterance.voice = viVoice;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const handleCopyOutline = () => {
    if (!work) return;
    const outlineText =
      `=== DÀN Ý PHÂN TÍCH TÁC PHẨM ${work.title.toUpperCase()} (${work.author.toUpperCase()}) ===\n\n` +
      `I. MỞ BÀI:\n${work.essayOutline.introduction}\n\n` +
      `II. THÂN BÀI:\n${work.essayOutline.body.map((b, i) => `${i + 1}. ${b}`).join('\n\n')}\n\n` +
      `III. KẾT BÀI:\n${work.essayOutline.conclusion}\n\n` +
      (work.essayOutline.bonusPoints ? `* Điểm sáng tạo 9.5: ${work.essayOutline.bonusPoints}\n\n` : '') +
      `-- Tài liệu Văn Học Lớp 12 - Nguyễn Tùng Dương (0326516500) --`;

    navigator.clipboard.writeText(outlineText);
    setCopiedOutline(true);
    setTimeout(() => setCopiedOutline(false), 2000);
  };

  const handleCopyFullAnalysis = () => {
    if (!work) return;
    const fullText =
      `# TÁC PHẨM: ${work.title.toUpperCase()}\n` +
      `Tác giả: ${work.author} (${work.year})\n\n` +
      `## 1. KHÁI QUÁT & HOÀN CẢNH SÁNG TÁC\n${work.context}\n\n` +
      `## 2. NỘI DUNG CỐT LÕI\n${work.summary}\n\n` +
      `## 3. PHÂN TÍCH CHI TIẾT TỪNG LUẬN ĐIỂM\n` +
      work.keyAnalysis
        .map(
          (item, idx) =>
            `### Luận điểm ${idx + 1}: ${item.heading}\n${item.content}\n` +
            (item.evidence ? `Dẫn chứng: ${item.evidence}\n` : '') +
            (item.literaryCommentary ? `Bình luận: ${item.literaryCommentary}\n` : '')
        )
        .join('\n\n') +
      `\n\n## 4. TRÍCH DẪN VÀNG\n` +
      work.quotes.map((q) => `- "${q}"`).join('\n') +
      `\n\n-- Tài liệu biên soạn bởi Nguyễn Tùng Dương (0326516500) --`;

    navigator.clipboard.writeText(fullText);
    setCopiedFullAnalysis(true);
    setTimeout(() => setCopiedFullAnalysis(false), 2000);
  };

  const handleCopyQuote = (quote: string, index: number) => {
    if (!work) return;
    navigator.clipboard.writeText(`"${quote}" - [${work.title} - ${work.author}]`);
    setCopiedQuoteIdx(index);
    setTimeout(() => setCopiedQuoteIdx(null), 2000);
  };

  const handleShare = () => {
    if (!work) return;
    if (navigator.share) {
      navigator.share({
        title: `${work.title} - ${work.author} | Văn Học Lớp 12`,
        text: `Tài liệu ôn thi tác phẩm ${work.title} của ${work.author} - Biên soạn bởi Nguyễn Tùng Dương`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen || !work) return null;

  const verseList: VerseAnalysisItem[] = VERSE_ANALYSIS_DATA[work.id] || [];
  const proseList: ProseAnalysisItem[] = PROSE_ANALYSIS_DATA[work.id] || [];
  const hasLineByLine = (work.genre === 'tho' && verseList.length > 0) || (work.genre !== 'tho' && proseList.length > 0);
  const itemsCount = work.genre === 'tho' ? verseList.length : proseList.length;
  const authorPortrait = getAuthorPortrait(work.id);
  const expressionSpec = WORK_EXPRESSION_SPECS[work.id];
  const detailedLineItems = DETAILED_LINE_ANALYSES[work.id]?.lineItems || [];

  // Reading Theme CSS variables
  const themeClasses = {
    navy: 'bg-[#121526] text-[#eeeeee]',
    sepia: 'bg-[#1c1917] text-[#f5f5f4]',
    oled: 'bg-[#08080c] text-[#f1f1f1]',
  }[readingTheme];

  const themeInnerClasses = {
    navy: 'bg-gradient-to-b from-[#1a1a2e] to-[#121526]',
    sepia: 'bg-gradient-to-b from-[#292524] to-[#1c1917]',
    oled: 'bg-[#08080c]',
  }[readingTheme];

  // Font Size Classes
  const contentFontSizeClass = {
    sm: 'text-xs sm:text-sm',
    base: 'text-sm sm:text-base',
    lg: 'text-base sm:text-lg',
    xl: 'text-lg sm:text-xl',
  }[fontSize];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={
        isFullscreen
          ? `fixed inset-0 z-50 w-full h-full min-h-screen ${themeClasses} flex flex-col overflow-hidden animate-in zoom-in-95 duration-200`
          : 'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto'
      }
      onClick={
        isFullscreen
          ? undefined
          : () => {
              handleStopAudio();
              onClose();
            }
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          isFullscreen
            ? `w-full h-full flex flex-col overflow-hidden ${themeInnerClasses}`
            : `relative w-full max-w-5xl max-h-[92vh] ${themeInnerClasses} border-2 border-[#e94560]/60 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col my-auto`
        }
      >
        {/* Top Reading Progress Bar */}
        <div className="w-full h-1 bg-white/10 shrink-0">
          <div
            className="h-full bg-gradient-to-r from-[#e94560] via-[#f39c12] to-emerald-400 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Header bar of modal */}
        <div
          className={
            isFullscreen
              ? `${isHeaderCollapsed ? 'px-3 sm:px-6 py-2 pb-1.5' : 'p-4 sm:p-5 pb-3'} border-b border-white/10 relative bg-[#16213e]/95 backdrop-blur-md shrink-0 shadow-md transition-all duration-200`
              : `${isHeaderCollapsed ? 'px-3 sm:px-5 py-2 pb-1.5' : 'p-4 sm:p-5 pb-3'} border-b border-white/10 relative bg-[#16213e]/90 backdrop-blur-md shrink-0 transition-all duration-200`
          }
        >
          <div className={isFullscreen ? 'max-w-6xl mx-auto w-full' : 'w-full'}>
            {isHeaderCollapsed ? (
              /* Ultra-compact Single Line Header: Title, Author, Nav & Tools in 1 sleek bar */
              <div className="flex items-center justify-between gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
                {/* Left: Back + Prev/Next + Work Title & Author */}
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  {isFullscreen && (
                    <button
                      type="button"
                      onClick={() => {
                        handleStopAudio();
                        onClose();
                      }}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors border border-white/10 shrink-0 shadow-sm"
                      title="Quay lại danh sách tác phẩm (Esc)"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 text-[#e94560]" />
                      <span className="hidden sm:inline">Quay lại</span>
                    </button>
                  )}

                  {/* Previous & Next Work quick buttons */}
                  {(onNavigatePrev || onNavigateNext) && (
                    <div className="flex items-center gap-0.5 bg-white/5 rounded-lg p-0.5 border border-white/10 text-xs shrink-0">
                      <button
                        type="button"
                        onClick={onNavigatePrev}
                        className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                        title="Tác phẩm trước (Ctrl + Mũi tên trái)"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-1 text-[11px] text-slate-400 font-medium whitespace-nowrap">
                        {currentIndex + 1}/{totalWorks}
                      </span>
                      <button
                        type="button"
                        onClick={onNavigateNext}
                        className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                        title="Tác phẩm kế tiếp (Ctrl + Mũi tên phải)"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  {/* Title & Author - Compact inline typography */}
                  <div className="flex items-center gap-2 min-w-0 overflow-hidden">
                    <h2 className="text-sm sm:text-base md:text-lg font-bold text-white font-display tracking-tight truncate flex items-center gap-1.5">
                      <span className="truncate">{work.title}</span>
                    </h2>
                    <span className="text-xs text-[#e94560] font-medium italic truncate hidden sm:inline">
                      · {work.author} ({work.year})
                    </span>
                    <span className="hidden lg:inline text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-[#f39c12] border border-white/10 shrink-0 font-medium">
                      {work.genreName}
                    </span>
                    <span className="hidden xl:inline text-[11px] text-slate-400 shrink-0">
                      ~{work.readTimeMinutes || 12}p
                    </span>
                  </div>
                </div>

                {/* Right: Action buttons toolbar - Responsive for Mobile & Desktop */}
                <div className="flex items-center gap-1 shrink-0">
                  {/* Mobile Actions Cluster (< sm) */}
                  <div className="flex sm:hidden items-center gap-1">
                    <button
                      type="button"
                      onClick={handlePlayAudio}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isPlayingAudio
                          ? 'bg-[#e94560] text-white border-[#e94560]'
                          : 'bg-white/5 text-slate-300 border-white/10'
                      }`}
                      title={isPlayingAudio ? 'Dừng đọc' : 'Nghe đọc'}
                    >
                      {isPlayingAudio ? (
                        <Square className="w-3.5 h-3.5 fill-current text-white" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowReadingControls(!showReadingControls)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        showReadingControls
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-white/5 text-slate-300 border-white/10'
                      }`}
                      title="Cỡ chữ & Phông chữ"
                    >
                      <Type className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onToggleSave(work.id)}
                      className={`p-1.5 rounded-lg border transition-all ${
                        isSaved
                          ? 'bg-[#e94560]/20 text-[#e94560] border-[#e94560]/40'
                          : 'bg-white/5 text-slate-400 border-white/10'
                      }`}
                      title={isSaved ? 'Đã lưu' : 'Lưu bài'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                    </button>

                    {/* Mobile More Actions Trigger */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          isMobileMoreOpen
                            ? 'bg-[#e94560] text-white border-[#e94560]'
                            : 'bg-white/5 text-slate-300 border-white/10'
                        }`}
                        title="Tùy chọn khác"
                      >
                        <MoreHorizontal className="w-3.5 h-3.5" />
                      </button>

                      {isMobileMoreOpen && (
                        <div
                          className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-[#16213e] border border-white/15 shadow-2xl p-1.5 z-50 text-xs space-y-1 animate-in fade-in"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            onClick={() => {
                              setIsMobileMoreOpen(false);
                              handleShare();
                            }}
                            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-slate-200"
                          >
                            <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Chia sẻ tác phẩm</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setIsMobileMoreOpen(false);
                              handlePrint();
                            }}
                            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-slate-200"
                          >
                            <Printer className="w-3.5 h-3.5 text-emerald-400" />
                            <span>In / Xuất PDF</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setIsMobileMoreOpen(false);
                              window.dispatchEvent(new CustomEvent('open-music-player'));
                            }}
                            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-orange-300"
                          >
                            <Headphones className="w-3.5 h-3.5 text-orange-400" />
                            <span>Nhạc SoundCloud</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setIsMobileMoreOpen(false);
                              handleToggleNativeFullscreen();
                            }}
                            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-slate-200"
                          >
                            <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                            <span>Toàn màn hình</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setIsMobileMoreOpen(false);
                              setIsHeaderCollapsed(false);
                            }}
                            className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-amber-300 border-t border-white/10 mt-1 pt-1.5"
                          >
                            <ChevronDown className="w-3.5 h-3.5" />
                            <span>Xem ảnh chân dung</span>
                          </button>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        handleStopAudio();
                        onClose();
                      }}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-[#e94560] text-slate-300 hover:text-white transition-colors"
                      title="Đóng (Esc)"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Desktop Actions Cluster (sm and above) */}
                  <div className="hidden sm:flex items-center gap-1.5">
                    {/* Audio button */}
                    <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-0.5">
                      <button
                        type="button"
                        onClick={handlePlayAudio}
                        className={`px-2 py-1 rounded text-xs font-medium flex items-center gap-1 transition-colors ${
                          isPlayingAudio
                            ? 'bg-[#e94560] text-white shadow-[0_0_12px_rgba(233,69,96,0.6)]'
                            : 'text-slate-300 hover:text-white'
                        }`}
                        title={isPlayingAudio ? 'Dừng đọc' : 'Nghe đọc tóm tắt (Giọng tiếng Việt)'}
                      >
                        {isPlayingAudio ? (
                          <>
                            <Square className="w-3 h-3 fill-current" />
                            <span className="hidden md:inline text-[11px]">Dừng</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5" />
                            <span className="hidden md:inline text-[11px]">Nghe đọc</span>
                          </>
                        )}
                      </button>
                      <select
                        value={speechRate}
                        onChange={(e) => {
                          const rate = parseFloat(e.target.value);
                          setSpeechRate(rate);
                          if (isPlayingAudio) handleStopAudio();
                        }}
                        className="bg-transparent text-[10px] text-slate-400 hover:text-white px-0.5 outline-none cursor-pointer hidden sm:inline"
                        title="Tốc độ đọc"
                      >
                        <option value="0.8" className="bg-slate-900 text-white">0.8x</option>
                        <option value="0.95" className="bg-slate-900 text-white">1.0x</option>
                        <option value="1.2" className="bg-slate-900 text-white">1.2x</option>
                      </select>
                    </div>

                    {/* Reading settings */}
                    <button
                      type="button"
                      onClick={() => setShowReadingControls(!showReadingControls)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        showReadingControls
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:text-white'
                      }`}
                      title="Cỡ chữ & Phông chữ (Aa)"
                    >
                      <Type className="w-3.5 h-3.5" />
                    </button>

                    {/* Print */}
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
                      title="In / PDF (Ctrl + P)"
                    >
                      <Printer className="w-3.5 h-3.5" />
                    </button>

                    {/* Bookmark */}
                    <button
                      type="button"
                      onClick={() => onToggleSave(work.id)}
                      className={`p-1.5 rounded-lg border transition-all ${
                        isSaved
                          ? 'bg-[#e94560]/20 text-[#e94560] border-[#e94560]/40'
                          : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                      }`}
                      title={isSaved ? 'Đã lưu ôn tập' : 'Lưu để ôn tập'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                    </button>

                    {/* Share button */}
                    <button
                      type="button"
                      onClick={handleShare}
                      className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors hidden md:inline-flex"
                      title="Chia sẻ tác phẩm"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                    </button>

                    {/* SoundCloud music */}
                    <button
                      type="button"
                      onClick={() => window.dispatchEvent(new CustomEvent('open-music-player'))}
                      className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-lg bg-[#ff5500]/20 hover:bg-[#ff5500]/35 border border-[#ff5500]/30 text-orange-200 hover:text-white text-[11px] font-semibold transition-all shadow-sm cursor-pointer"
                      title="Mở trình phát nhạc ôn bài SoundCloud (Phát liên tục)"
                    >
                      <Headphones className="w-3 h-3 text-orange-400" />
                      <span>SoundCloud</span>
                    </button>

                    {/* Expand header toggle button */}
                    <button
                      type="button"
                      onClick={() => setIsHeaderCollapsed(false)}
                      className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-amber-300 border border-white/10 text-xs transition-colors"
                      title="Mở rộng tiêu đề chi tiết (Ctrl + H)"
                    >
                      <ChevronDown className="w-3.5 h-3.5 text-amber-300" />
                      <span className="hidden md:inline text-[11px]">Mở rộng</span>
                    </button>

                    {/* Fullscreen */}
                    <button
                      type="button"
                      onClick={handleToggleNativeFullscreen}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        isNativeFullscreen
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:text-white'
                      }`}
                      title={isNativeFullscreen ? 'Thoát toàn màn hình (F11)' : 'Toàn màn hình trình duyệt (F11)'}
                    >
                      {isNativeFullscreen ? (
                        <Minimize2 className="w-3.5 h-3.5 text-emerald-300" />
                      ) : (
                        <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
                      )}
                    </button>

                    {/* Close modal */}
                    <button
                      type="button"
                      onClick={() => {
                        handleStopAudio();
                        onClose();
                      }}
                      className="p-1.5 rounded-lg bg-white/10 hover:bg-[#e94560] text-slate-300 hover:text-white transition-colors"
                      title="Đóng cửa sổ (Esc)"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Expanded Mode: Full metadata & display typography */
              <div>
                {/* Top action row */}
                <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    {isFullscreen && (
                      <button
                        type="button"
                        onClick={() => {
                          handleStopAudio();
                          onClose();
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-colors border border-white/10 shadow-sm"
                        title="Quay lại danh sách tác phẩm (Esc)"
                      >
                        <ArrowLeft className="w-3.5 h-3.5 text-[#e94560]" />
                        <span className="hidden sm:inline">Quay lại</span>
                      </button>
                    )}

                    {/* Previous & Next Work quick buttons */}
                    {(onNavigatePrev || onNavigateNext) && (
                      <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5 border border-white/10 text-xs">
                        <button
                          type="button"
                          onClick={onNavigatePrev}
                          className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                          title="Tác phẩm trước (Ctrl + Mũi tên trái)"
                        >
                          <ChevronLeft className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-1.5 text-[11px] text-slate-400 font-medium">
                          {currentIndex + 1} / {totalWorks}
                        </span>
                        <button
                          type="button"
                          onClick={onNavigateNext}
                          className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded transition-colors"
                          title="Tác phẩm kế tiếp (Ctrl + Mũi tên phải)"
                        >
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="text-[#e94560] font-semibold">{work.genreName}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>Năm {work.year}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="text-[#f39c12]">{work.tag}</span>
                      <span aria-hidden="true" className="text-slate-600 hidden md:inline">·</span>
                      <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        <span>~{work.readTimeMinutes || 12} phút đọc</span>
                      </span>
                    </div>
                  </div>

                  {/* Action Toolbar */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {/* Audio button */}
                    <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-0.5">
                      <button
                        type="button"
                        onClick={handlePlayAudio}
                        className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-colors ${
                          isPlayingAudio
                            ? 'bg-[#e94560] text-white shadow-[0_0_12px_rgba(233,69,96,0.6)]'
                            : 'text-slate-300 hover:text-white'
                        }`}
                        title={isPlayingAudio ? 'Dừng đọc' : 'Nghe đọc tóm tắt (Giọng tiếng Việt)'}
                      >
                        {isPlayingAudio ? (
                          <>
                            <Square className="w-3.5 h-3.5 fill-current" />
                            <span className="hidden sm:inline">Dừng</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Nghe đọc</span>
                          </>
                        )}
                      </button>
                      <select
                        value={speechRate}
                        onChange={(e) => {
                          const rate = parseFloat(e.target.value);
                          setSpeechRate(rate);
                          if (isPlayingAudio) handleStopAudio();
                        }}
                        className="bg-transparent text-[11px] text-slate-400 hover:text-white px-1 outline-none cursor-pointer"
                        title="Tốc độ giọng đọc"
                      >
                        <option value="0.8" className="bg-slate-900 text-white">0.8x</option>
                        <option value="0.95" className="bg-slate-900 text-white">1.0x</option>
                        <option value="1.2" className="bg-slate-900 text-white">1.2x</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowReadingControls(!showReadingControls)}
                      className={`p-2 rounded-lg border transition-colors ${
                        showReadingControls
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:text-white'
                      }`}
                      title="Tùy chỉnh cỡ chữ, phông chữ, chế độ đọc tối ưu"
                    >
                      <Type className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={handlePrint}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                      title="In / Xuất tài liệu PDF (Ctrl + P)"
                    >
                      <Printer className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onToggleSave(work.id)}
                      className={`p-2 rounded-lg border transition-all ${
                        isSaved
                          ? 'bg-[#e94560]/20 text-[#e94560] border-[#e94560]/40'
                          : 'bg-white/5 text-slate-400 border-white/10 hover:text-white hover:border-white/20'
                      }`}
                      title={isSaved ? 'Đã lưu trong danh sách ôn tập' : 'Lưu để ôn tập'}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>

                    <button
                      type="button"
                      onClick={handleShare}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                      title="Chia sẻ tác phẩm"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => window.dispatchEvent(new CustomEvent('open-music-player'))}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#ff5500]/20 hover:bg-[#ff5500]/35 border border-[#ff5500]/30 text-orange-200 hover:text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
                      title="Mở trình phát nhạc ôn bài SoundCloud (Phát liên tục khi đọc bài)"
                    >
                      <Headphones className="w-3.5 h-3.5 text-orange-400" />
                      <span className="hidden lg:inline">Nhạc Ôn Bài</span>
                      <span>SoundCloud</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsHeaderCollapsed(true)}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-semibold transition-all shadow-sm"
                      title="Thu nhỏ tiêu đề tối đa để mở rộng vùng đọc (Ctrl + H)"
                    >
                      <ChevronUp className="w-3.5 h-3.5" />
                      <span className="hidden md:inline">Thu nhỏ tiêu đề</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleToggleNativeFullscreen}
                      className={`p-2 rounded-lg border transition-colors ${
                        isNativeFullscreen
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : 'bg-white/5 text-slate-300 border-white/10 hover:text-white'
                      }`}
                      title={isNativeFullscreen ? 'Thoát toàn màn hình trình duyệt (F11)' : 'Phóng to full toàn màn hình trình duyệt (F11)'}
                    >
                      {isNativeFullscreen ? (
                        <Minimize2 className="w-4 h-4 text-emerald-300" />
                      ) : (
                        <Maximize2 className="w-4 h-4 text-amber-300" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors"
                      title={isFullscreen ? 'Thu nhỏ cửa sổ' : 'Phóng to full màn hình (Ctrl + F)'}
                    >
                      {isFullscreen ? (
                        <Minimize2 className="w-4 h-4" />
                      ) : (
                        <Maximize2 className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        handleStopAudio();
                        onClose();
                      }}
                      className="p-2 rounded-lg bg-white/10 hover:bg-[#e94560] text-slate-300 hover:text-white transition-colors"
                      title="Đóng cửa sổ (Esc)"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Big Title & Author showcase banner with Portrait */}
                <div className="flex items-center justify-between pr-4 mt-2 transition-all duration-300 gap-4">
                  <div className="flex items-center gap-4">
                    {authorPortrait && (
                      <img
                        src={authorPortrait.portraitUrl}
                        alt={`Chân dung ${work.author}`}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (target.src !== authorPortrait.remoteSourceUrl) {
                            target.src = authorPortrait.remoteSourceUrl;
                          }
                        }}
                        className="w-14 h-16 sm:w-16 sm:h-20 rounded-xl object-cover object-top border-2 border-[#f39c12]/50 shadow-lg shrink-0 bg-[#121526]"
                      />
                    )}
                    <div>
                      <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
                        {work.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-2 mt-0.5">
                        <span className="text-sm sm:text-base text-[#e94560] font-semibold italic">
                          {work.author}
                        </span>
                        {authorPortrait && (
                          <span className="text-xs text-slate-400 font-mono">
                            ({authorPortrait.birthDeathYears})
                          </span>
                        )}
                        {expressionSpec && (
                          <span className="px-2 py-0.5 rounded bg-[#f39c12]/15 text-amber-300 border border-[#f39c12]/30 text-xs font-medium">
                            PT chính: {expressionSpec.primaryExpression}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsHeaderCollapsed(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-xs font-semibold text-amber-300 border border-amber-500/30 transition-colors shadow-sm shrink-0"
                    title="Thu nhỏ tiêu đề tối đa để mở rộng vùng đọc (Ctrl + H)"
                  >
                    <ChevronUp className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Thu nhỏ tiêu đề tối ưu</span>
                  </button>
                </div>
              </div>
            )}

            {/* Reading Preferences Drawer if opened */}
            {showReadingControls && (
              <div className="p-2.5 my-2 rounded-xl bg-black/50 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs animate-in fade-in shadow-lg">
                {/* Font Size */}
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">Cỡ chữ:</span>
                  {(['sm', 'base', 'lg', 'xl'] as FontSize[]).map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFontSize(size)}
                      className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        fontSize === size
                          ? 'bg-[#e94560] text-white'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {size === 'sm' ? 'Nhỏ' : size === 'base' ? 'Chuẩn' : size === 'lg' ? 'Lớn' : 'Rất lớn'}
                    </button>
                  ))}
                </div>

                {/* Font Family */}
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">Phông chữ:</span>
                  <button
                    type="button"
                    onClick={() => setFontFamily('sans')}
                    className={`px-2 py-0.5 rounded text-xs font-medium ${
                      fontFamily === 'sans' ? 'bg-[#e94560] text-white' : 'bg-white/5 text-slate-300'
                    }`}
                  >
                    Sans Hiện Đại
                  </button>
                  <button
                    type="button"
                    onClick={() => setFontFamily('serif')}
                    className={`px-2 py-0.5 rounded text-xs font-serif-literary font-medium ${
                      fontFamily === 'serif' ? 'bg-[#e94560] text-white' : 'bg-white/5 text-slate-300'
                    }`}
                  >
                    Serif Văn Học
                  </button>
                </div>

                {/* Theme Palette */}
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400">Giao diện:</span>
                  <button
                    type="button"
                    onClick={() => setReadingTheme('navy')}
                    className={`px-2 py-0.5 rounded text-xs ${
                      readingTheme === 'navy'
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-white/5 text-slate-300'
                    }`}
                  >
                    🌌 Navy
                  </button>
                  <button
                    type="button"
                    onClick={() => setReadingTheme('sepia')}
                    className={`px-2 py-0.5 rounded text-xs ${
                      readingTheme === 'sepia'
                        ? 'bg-amber-700 text-white font-bold'
                        : 'bg-white/5 text-slate-300'
                    }`}
                  >
                    📜 Trầm Ấm
                  </button>
                  <button
                    type="button"
                    onClick={() => setReadingTheme('oled')}
                    className={`px-2 py-0.5 rounded text-xs ${
                      readingTheme === 'oled'
                        ? 'bg-neutral-800 text-white font-bold'
                        : 'bg-white/5 text-slate-300'
                    }`}
                  >
                    🌑 OLED Black
                  </button>
                </div>
              </div>
            )}

            {/* Toast for copy / share */}
            {sharedToast && (
              <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs shadow-lg animate-in fade-in">
                Đã sao chép liên kết vào bộ nhớ tạm!
              </div>
            )}

            {/* Tab Navigation Controls */}
            <div
              ref={tabsBarRef}
              className={`flex items-center gap-1 sm:gap-1.5 overflow-x-auto ${
                isHeaderCollapsed ? 'mt-1.5 pt-1.5' : 'mt-3.5 pt-2'
              } border-t border-white/10 scrollbar-none scroll-smooth touch-pan-x transition-all`}
            >
              <button
                data-modal-tab-active={activeTab === 'overview'}
                onClick={() => setActiveTab('overview')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${
                  activeTab === 'overview'
                    ? 'bg-[#e94560] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Khái Quát</span>
              </button>

              {hasLineByLine && (
                <button
                  data-modal-tab-active={activeTab === 'line_by_line'}
                  onClick={() => setActiveTab('line_by_line')}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 border shadow-sm cursor-pointer active:scale-95 shrink-0 ${
                    activeTab === 'line_by_line'
                      ? 'bg-gradient-to-r from-[#e94560] to-[#f39c12] text-white border-amber-300/40 shadow-[0_0_15px_rgba(233,69,96,0.5)]'
                      : 'bg-amber-500/10 text-amber-300 hover:text-white hover:bg-amber-500/20 border-amber-500/30'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                  <span>
                    {work.genre === 'tho'
                      ? `📜 Phân Tích Từng Câu Thơ (${verseList.length})`
                      : `🔍 Phân Tích Từng Đoạn (${proseList.length})`}
                  </span>
                </button>
              )}

              <button
                data-modal-tab-active={activeTab === 'analysis'}
                onClick={() => setActiveTab('analysis')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${
                  activeTab === 'analysis'
                    ? 'bg-[#e94560] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Feather className="w-3.5 h-3.5" />
                <span>Luận Điểm ({work.keyAnalysis.length})</span>
              </button>

              {work.scholarlyQuotes && work.scholarlyQuotes.length > 0 && (
                <button
                  data-modal-tab-active={activeTab === 'scholarly'}
                  onClick={() => setActiveTab('scholarly')}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${
                    activeTab === 'scholarly'
                      ? 'bg-[#e94560] text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#f39c12]" />
                  <span>Ý Kiến Nhà Phê Bình</span>
                </button>
              )}

              <button
                data-modal-tab-active={activeTab === 'quotes'}
                onClick={() => setActiveTab('quotes')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${
                  activeTab === 'quotes'
                    ? 'bg-[#e94560] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Quote className="w-3.5 h-3.5" />
                <span>Trích Dẫn Vàng ({work.quotes.length})</span>
              </button>

              <button
                data-modal-tab-active={activeTab === 'outline'}
                onClick={() => setActiveTab('outline')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${
                  activeTab === 'outline'
                    ? 'bg-[#e94560] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-[#f39c12]" />
                <span className="text-[#f39c12] font-semibold">Dàn Ý 8.5+ Điểm</span>
              </button>

              <button
                data-modal-tab-active={activeTab === 'exam'}
                onClick={() => setActiveTab('exam')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${
                  activeTab === 'exam'
                    ? 'bg-[#e94560] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Đề Thi THPT Hay Ra</span>
              </button>

              <button
                data-modal-tab-active={activeTab === 'keywords'}
                onClick={() => setActiveTab('keywords')}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer active:scale-95 shrink-0 ${
                  activeTab === 'keywords'
                    ? 'bg-[#e94560] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Từ Khóa Ghi Nhớ</span>
              </button>
            </div>
          </div>

          {/* Reading progress bar indicator pinned at bottom of header */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-[#e94560] via-[#f39c12] to-emerald-400 transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="p-5 sm:p-8 overflow-y-auto flex-1 scroll-smooth"
        >
          <div
            className={
              isFullscreen
                ? `max-w-5xl mx-auto w-full space-y-8 ${contentFontSizeClass} ${
                    fontFamily === 'serif' ? 'font-serif-literary' : 'font-sans'
                  } leading-relaxed text-slate-200`
                : `space-y-6 ${contentFontSizeClass} ${
                    fontFamily === 'serif' ? 'font-serif-literary' : 'font-sans'
                  } leading-relaxed text-slate-200`
            }
          >
            {/* Quick Actions Action Bar inside content */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-[#f39c12] font-semibold">Tác phẩm: {work.title}</span>
                <span>·</span>
                <span>Tác giả: {work.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyFullAnalysis}
                  className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  {copiedFullAnalysis ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Đã chép toàn bài</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Chép toàn bộ phân tích</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Author Portrait & Archival Biography Showcase */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 shadow-lg">
                  <h4 className="text-base sm:text-lg font-bold text-[#f39c12] mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#e94560]" />
                    <span>Chân Dung Tác Giả &amp; Tiểu Sử Văn Học</span>
                  </h4>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                    {authorPortrait && (
                      <div className="shrink-0 flex flex-col items-center max-w-[160px]">
                        <img
                          src={authorPortrait.portraitUrl}
                          alt={`Chân dung ${work.author}`}
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.src !== authorPortrait.remoteSourceUrl) {
                              target.src = authorPortrait.remoteSourceUrl;
                            }
                          }}
                          className="w-32 h-40 sm:w-36 sm:h-44 rounded-xl object-cover object-top border-2 border-[#f39c12]/50 shadow-xl bg-[#121526]"
                        />
                        <p className="text-[11px] text-slate-400 text-center mt-2 leading-snug italic">
                          {authorPortrait.caption}
                        </p>
                        <a
                          href={authorPortrait.wikiArticleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#f39c12] hover:underline font-medium"
                        >
                          <span>Tư liệu Wikipedia</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}

                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-lg sm:text-xl font-bold text-white font-display">
                          {work.author}
                        </span>
                        {authorPortrait && (
                          <span className="px-2.5 py-0.5 rounded-md bg-white/10 text-amber-300 text-xs font-mono">
                            {authorPortrait.birthDeathYears}
                          </span>
                        )}
                      </div>

                      {authorPortrait && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 rounded-lg bg-black/30 border border-white/5 flex items-start gap-2">
                            <MapPin className="w-3.5 h-3.5 text-[#e94560] shrink-0 mt-0.5" />
                            <div>
                              <span className="text-slate-400 block">Quê quán / Xuất thân:</span>
                              <strong className="text-slate-200">{authorPortrait.hometown}</strong>
                            </div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-black/30 border border-white/5 flex items-start gap-2">
                            <Award className="w-3.5 h-3.5 text-[#f39c12] shrink-0 mt-0.5" />
                            <div>
                              <span className="text-slate-400 block">Giải thưởng &amp; Vị thế:</span>
                              <strong className="text-amber-200">{authorPortrait.literaryTitle}</strong>
                            </div>
                          </div>
                        </div>
                      )}

                      <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                        {work.authorBio}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Expression Specification Box */}
                {expressionSpec && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#1a1f36]/90 border border-[#f39c12]/30 space-y-3">
                    <h4 className="text-base sm:text-lg font-bold text-[#f39c12] flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#e94560]" />
                      <span>Chỉ Định Nội Dung &amp; Phương Thức Biểu Đạt</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                        <span className="text-slate-400 block mb-0.5">Phương thức biểu đạt:</span>
                        <strong className="text-white">
                          {expressionSpec.primaryExpression} (chính)
                        </strong>{' '}
                        <span className="text-slate-300">
                          — kết hợp {expressionSpec.combinedExpressions.join(', ')}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                        <span className="text-slate-400 block mb-0.5">Phong cách ngôn ngữ:</span>
                        <strong className="text-emerald-300">{expressionSpec.languageStyle}</strong>
                      </div>
                      <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                        <span className="text-slate-400 block mb-0.5">Thể thức &amp; Kết cấu:</span>
                        <span className="text-slate-200">{expressionSpec.formAndStructure}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                        <span className="text-slate-400 block mb-0.5">Giọng điệu chủ đạo:</span>
                        <strong className="text-amber-300">{expressionSpec.dominantTone}</strong>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-xs sm:text-sm">
                      <span className="text-slate-400 block mb-1">Chỉ định giá trị biểu đạt cốt lõi:</span>
                      <p className="text-slate-200">{expressionSpec.keyExpressionValue}</p>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#f39c12] mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#e94560]" />
                    Tóm Tắt &amp; Nội Dung Cốt Lõi
                  </h4>
                  <p className="bg-white/[0.03] p-4 sm:p-5 rounded-xl border border-white/5 text-slate-200 leading-relaxed">
                    {work.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#f39c12] mb-2 flex items-center gap-2">
                    <Feather className="w-4 h-4 text-[#e94560]" />
                    Hoàn Cảnh Sáng Tác &amp; Bối Cảnh Lịch Sử
                  </h4>
                  <p className="bg-white/[0.03] p-4 sm:p-5 rounded-xl border border-white/5 text-slate-300 leading-relaxed">
                    {work.context}
                  </p>
                </div>

                {work.authorAesthetics && (
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#f39c12] mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#e94560]" />
                      Quan Niệm Nghệ Thuật &amp; Phong Cách Tác Giả
                    </h4>
                    <p className="bg-white/[0.03] p-4 sm:p-5 rounded-xl border border-white/5 text-slate-300 leading-relaxed">
                      {work.authorAesthetics}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#f39c12] mb-3">
                    Hệ Thống Luận Điểm Cốt Lõi
                  </h4>
                  <ul className="space-y-2.5">
                    {work.mainThemes.map((theme, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#e94560]/20 text-[#e94560] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-slate-200">{theme}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB: LINE-BY-LINE POETRY / SCENE-BY-SCENE PROSE DETAILED ANALYSIS */}
            {activeTab === 'line_by_line' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Header toolbar for line-by-line analysis */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent border border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-md">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#f39c12]" />
                      <span>
                        {work.genre === 'tho'
                          ? `Phân Tích Chi Tiết Từng Câu Thơ (${verseList.length} phân đoạn)`
                          : `Phân Tích Chi Tiết Từng Phân Đoạn & Chi Tiết Nghệ Thuật (${proseList.length} cảnh)`}
                      </span>
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      {work.genre === 'tho'
                        ? 'Giải mã tường tận từng câu thơ, cặp câu thơ, biện pháp tu từ, từ ngữ đắt giá và liên hệ điểm 9+.'
                        : 'Phân tích cặn kẽ từng tình huống, hành động, diễn biến tâm lý, chi tiết nghệ thuật và bài học triết lý.'}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Search inside verses */}
                    <div className="relative flex-1 sm:w-56">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={verseSearch}
                        onChange={(e) => setVerseSearch(e.target.value)}
                        placeholder={work.genre === 'tho' ? 'Tìm câu thơ, từ ngữ...' : 'Tìm trích đoạn, chi tiết...'}
                        className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#e94560]"
                      />
                      {verseSearch && (
                        <button
                          type="button"
                          onClick={() => setVerseSearch('')}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                        >
                          ✕
                        </button>
                      )}
                    </div>

                    {/* View Mode Toggle */}
                    <div className="flex items-center bg-black/40 p-0.5 rounded-lg border border-white/10 text-xs">
                      <button
                        type="button"
                        onClick={() => setReadingMode('cards')}
                        className={`px-2.5 py-1 rounded flex items-center gap-1 transition-colors ${
                          readingMode === 'cards'
                            ? 'bg-[#e94560] text-white font-medium shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                        title="Dạng thẻ đối chiếu chuyên sâu"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span className="hidden md:inline">Thẻ bài</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setReadingMode('continuous')}
                        className={`px-2.5 py-1 rounded flex items-center gap-1 transition-colors ${
                          readingMode === 'continuous'
                            ? 'bg-[#e94560] text-white font-medium shadow-sm'
                            : 'text-slate-400 hover:text-white'
                        }`}
                        title="Dạng đọc văn bản liền mạch"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span className="hidden md:inline">Liền mạch</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* POETRY VERSE-BY-VERSE DISPLAY */}
                {work.genre === 'tho' && (
                  readingMode === 'continuous' ? (
                    /* Continuous Book Reading View */
                    <div className="p-5 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-8 divide-y divide-white/10">
                      {verseList
                        .filter(
                          (v) =>
                            !verseSearch.trim() ||
                            v.verses.toLowerCase().includes(verseSearch.toLowerCase()) ||
                            v.stanzaTitle.toLowerCase().includes(verseSearch.toLowerCase()) ||
                            v.detailedInterpretation.toLowerCase().includes(verseSearch.toLowerCase()) ||
                            v.artisticDevices.toLowerCase().includes(verseSearch.toLowerCase())
                        )
                        .map((v, idx) => (
                          <div key={v.id || idx} className={idx > 0 ? 'pt-8 space-y-4' : 'space-y-4'}>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-bold text-[#f39c12] uppercase tracking-wider">
                                {v.stanzaTitle}
                              </span>
                              <button
                                type="button"
                                onClick={() => handlePlayVerseAudio(v.verses, v.detailedInterpretation)}
                                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                              >
                                <PlayCircle className="w-3.5 h-3.5 text-[#f39c12]" />
                                <span>Nghe</span>
                              </button>
                            </div>
                            <div className="pl-4 border-l-4 border-[#f39c12] text-amber-100 font-serif-literary text-base sm:text-lg italic leading-relaxed whitespace-pre-line">
                              "{v.verses}"
                            </div>
                            <div className="text-slate-200 text-sm sm:text-base leading-relaxed pl-4 whitespace-pre-line">
                              {v.detailedInterpretation}
                            </div>
                            {v.examTakeaway && (
                              <div className="text-xs sm:text-sm text-emerald-300 pl-4 border-l-2 border-emerald-500/40">
                                🎯 <strong>Trọng tâm thi:</strong> {v.examTakeaway}
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  ) : (
                    /* Cards Grid/List View */
                    <div className="space-y-6">
                      {verseList
                        .filter(
                          (v) =>
                            !verseSearch.trim() ||
                            v.verses.toLowerCase().includes(verseSearch.toLowerCase()) ||
                            v.stanzaTitle.toLowerCase().includes(verseSearch.toLowerCase()) ||
                            v.detailedInterpretation.toLowerCase().includes(verseSearch.toLowerCase()) ||
                            v.artisticDevices.toLowerCase().includes(verseSearch.toLowerCase())
                        )
                        .map((v, idx) => (
                          <div
                            key={v.id || idx}
                            className="p-5 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#f39c12]/40 transition-all shadow-md space-y-4"
                          >
                            {/* Stanza header */}
                            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 flex-wrap">
                              <div className="flex items-center gap-2">
                                <span className="px-2.5 py-0.5 rounded-md bg-[#e94560]/20 text-[#e94560] text-xs font-bold">
                                  Phân đoạn {idx + 1}
                                </span>
                                <h5 className="font-bold text-white text-sm sm:text-base">
                                  {v.stanzaTitle}
                                </h5>
                              </div>

                              <div className="flex items-center gap-1.5">
                                {/* Audio button for this verse */}
                                <button
                                  type="button"
                                  onClick={() => handlePlayVerseAudio(v.verses, v.detailedInterpretation)}
                                  className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-colors"
                                  title="Nghe đọc câu thơ và phân tích này"
                                >
                                  <PlayCircle className="w-3.5 h-3.5 text-[#f39c12]" />
                                  <span>Nghe đọc</span>
                                </button>

                                {/* Copy button */}
                                <button
                                  type="button"
                                  onClick={() => handleCopyVerse(v)}
                                  className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-colors"
                                  title="Sao chép toàn bộ phân tích câu thơ này"
                                >
                                  {copiedVerseId === v.id ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-400" />
                                      <span className="text-emerald-400">Đã chép</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      <span>Sao chép</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* Verse Quote Box with rich literary presentation */}
                            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-[#f39c12] text-amber-100 font-serif-literary text-base sm:text-xl font-semibold leading-relaxed tracking-wide shadow-inner whitespace-pre-line">
                              "{v.verses}"
                            </div>

                            {/* Rhetorical & artistic devices */}
                            {v.artisticDevices && (
                              <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs sm:text-sm text-purple-200">
                                <span className="font-semibold text-purple-300 block mb-1 flex items-center gap-1.5">
                                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                                  🎨 Biện pháp tu từ &amp; Ngôn từ nghệ thuật đặc sắc:
                                </span>
                                <p className="leading-relaxed">{v.artisticDevices}</p>
                              </div>
                            )}

                            {/* Detailed interpretation */}
                            <div className="space-y-2">
                              <h6 className="text-xs sm:text-sm font-semibold text-[#f39c12] uppercase tracking-wider flex items-center gap-1.5">
                                <BookOpen className="w-3.5 h-3.5 text-[#e94560]" />
                                Phân tích chuyên sâu từng tầng nghĩa:
                              </h6>
                              <div className="text-slate-200 text-xs sm:text-base leading-relaxed pl-2 border-l-2 border-white/10 whitespace-pre-line">
                                {v.detailedInterpretation}
                              </div>
                            </div>

                            {/* Thematic significance */}
                            {v.thematicSignificance && (
                              <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/30 text-xs sm:text-sm text-blue-200">
                                <span className="font-semibold text-blue-300 block mb-1">
                                  🌌 Chiều sâu cảm xúc &amp; Tư tưởng thẩm mỹ:
                                </span>
                                <p className="leading-relaxed">{v.thematicSignificance}</p>
                              </div>
                            )}

                            {/* Exam takeaway & high scoring tips */}
                            {v.examTakeaway && (
                              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200">
                                <span className="font-semibold text-emerald-300 block mb-1 flex items-center gap-1.5">
                                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                                  🎯 Điểm nhấn bài thi THPT Quốc Gia &amp; Liên hệ mở rộng 9+:
                                </span>
                                <p className="leading-relaxed">{v.examTakeaway}</p>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  )
                )}

                {work.genre === 'tho' &&
                  verseList.filter(
                    (v) =>
                      !verseSearch.trim() ||
                      v.verses.toLowerCase().includes(verseSearch.toLowerCase()) ||
                      v.stanzaTitle.toLowerCase().includes(verseSearch.toLowerCase())
                  ).length === 0 && (
                    <div className="p-8 text-center bg-white/[0.02] rounded-xl border border-white/5 text-slate-400 text-sm">
                      Không tìm thấy câu thơ phù hợp với từ khóa "{verseSearch}". Thử nhập từ khác!
                    </div>
                  )}

                {/* PROSE / ESSAY / DRAMA SCENE-BY-SCENE DISPLAY */}
                {work.genre !== 'tho' && (
                  readingMode === 'continuous' ? (
                    <div className="p-5 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-8 divide-y divide-white/10">
                      {proseList
                        .filter(
                          (p) =>
                            !verseSearch.trim() ||
                            p.sectionTitle.toLowerCase().includes(verseSearch.toLowerCase()) ||
                            p.excerpt.toLowerCase().includes(verseSearch.toLowerCase()) ||
                            p.deepAnalysis.toLowerCase().includes(verseSearch.toLowerCase()) ||
                            p.artisticHighlights.toLowerCase().includes(verseSearch.toLowerCase())
                        )
                        .map((p, idx) => (
                          <div key={p.id || idx} className={idx > 0 ? 'pt-8 space-y-4' : 'space-y-4'}>
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-xs font-bold text-[#e94560] tracking-wide uppercase">
                                Phân đoạn {idx + 1}: {p.sectionTitle}
                              </span>
                              <div className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() => handlePlayVerseAudio(p.excerpt, p.deepAnalysis)}
                                  className="p-1 text-slate-400 hover:text-white transition-colors"
                                  title="Nghe đọc phân đoạn"
                                >
                                  <Volume2 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleCopyVerse(p)}
                                  className="p-1 text-slate-400 hover:text-white transition-colors"
                                  title="Sao chép phân đoạn"
                                >
                                  {copiedVerseId === p.id ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>
                              </div>
                            </div>
                            <div className="text-amber-100/95 font-serif-literary text-base sm:text-lg leading-relaxed italic pl-4 border-l-2 border-[#f39c12]">
                              "{p.excerpt}"
                            </div>
                            <div className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line pl-4 border-l-2 border-white/10">
                              {p.deepAnalysis}
                            </div>
                            {p.artisticHighlights && (
                              <div className="text-xs sm:text-sm text-purple-300 pl-4 border-l-2 border-purple-500/40">
                                🎨 <strong>Nghệ thuật:</strong> {p.artisticHighlights}
                              </div>
                            )}
                            {p.thematicSignificance && (
                              <div className="text-xs sm:text-sm text-blue-300 pl-4 border-l-2 border-blue-500/40">
                                🌌 <strong>Tư tưởng:</strong> {p.thematicSignificance}
                              </div>
                            )}
                            {p.examTakeaway && (
                              <div className="text-xs sm:text-sm text-emerald-300 pl-4 border-l-2 border-emerald-500/40">
                                🎯 <strong>Trọng tâm thi:</strong> {p.examTakeaway}
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  ) : (
                  <div className="space-y-6">
                    {proseList
                      .filter(
                        (p) =>
                          !verseSearch.trim() ||
                          p.sectionTitle.toLowerCase().includes(verseSearch.toLowerCase()) ||
                          p.excerpt.toLowerCase().includes(verseSearch.toLowerCase()) ||
                          p.deepAnalysis.toLowerCase().includes(verseSearch.toLowerCase()) ||
                          p.artisticHighlights.toLowerCase().includes(verseSearch.toLowerCase())
                      )
                      .map((p, idx) => (
                        <div
                          key={p.id || idx}
                          className="p-5 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#f39c12]/40 transition-all shadow-md space-y-4"
                        >
                          {/* Section header */}
                          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3 flex-wrap">
                            <div className="flex items-center gap-2">
                              <span className="px-2.5 py-0.5 rounded-md bg-[#e94560]/20 text-[#e94560] text-xs font-bold">
                                Phân đoạn {idx + 1}
                              </span>
                              <h5 className="font-bold text-white text-sm sm:text-base">
                                {p.sectionTitle}
                              </h5>
                            </div>

                            <div className="flex items-center gap-1.5">
                              {/* Audio button */}
                              <button
                                type="button"
                                onClick={() => handlePlayVerseAudio(p.excerpt, p.deepAnalysis)}
                                className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-colors"
                                title="Nghe đọc phân đoạn này"
                              >
                                <PlayCircle className="w-3.5 h-3.5 text-[#f39c12]" />
                                <span>Nghe đọc</span>
                              </button>

                              {/* Copy button */}
                              <button
                                type="button"
                                onClick={() => handleCopyVerse(p)}
                                className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-xs text-slate-300 hover:text-white transition-colors"
                                title="Sao chép toàn bộ phân tích phân đoạn này"
                              >
                                {copiedVerseId === p.id ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-400" />
                                    <span className="text-emerald-400">Đã chép</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" />
                                    <span>Sao chép</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>

                          {/* Excerpt box */}
                          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-[#f39c12] text-amber-100 font-serif-literary text-sm sm:text-base italic leading-relaxed shadow-inner">
                            {p.excerpt}
                          </div>

                          {/* Artistic highlights */}
                          {p.artisticHighlights && (
                            <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs sm:text-sm text-purple-200">
                              <span className="font-semibold text-purple-300 block mb-1 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                                🎨 Nghệ thuật trần thuật & Thủ pháp miêu tả:
                              </span>
                              <p className="leading-relaxed">{p.artisticHighlights}</p>
                            </div>
                          )}

                          {/* Deep analysis */}
                          <div className="space-y-2">
                            <h6 className="text-xs sm:text-sm font-semibold text-[#f39c12] uppercase tracking-wider flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5 text-[#e94560]" />
                              Phân tích cặn kẽ diễn biến & tâm lý nhân vật:
                            </h6>
                            <div className="text-slate-200 text-xs sm:text-base leading-relaxed pl-2 border-l-2 border-white/10 whitespace-pre-line">
                              {p.deepAnalysis}
                            </div>
                          </div>

                          {/* Thematic significance */}
                          {p.thematicSignificance && (
                            <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/30 text-xs sm:text-sm text-blue-200">
                              <span className="font-semibold text-blue-300 block mb-1">
                                🌌 Giá trị hiện thực & Chiều sâu nhân đạo:
                              </span>
                              <p className="leading-relaxed">{p.thematicSignificance}</p>
                            </div>
                          )}

                          {/* Exam takeaway */}
                          {p.examTakeaway && (
                            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200">
                              <span className="font-semibold text-emerald-300 block mb-1 flex items-center gap-1.5">
                                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                                🎯 Điểm nhấn bài thi THPT Quốc Gia & Liên hệ mở rộng 9+:
                              </span>
                              <p className="leading-relaxed">{p.examTakeaway}</p>
                            </div>
                          )}
                        </div>
                      ))}

                    </div>
                  )
                )}

                {work.genre !== 'tho' &&
                  proseList.filter(
                    (p) =>
                      !verseSearch.trim() ||
                      p.sectionTitle.toLowerCase().includes(verseSearch.toLowerCase()) ||
                      p.excerpt.toLowerCase().includes(verseSearch.toLowerCase())
                  ).length === 0 && (
                    <div className="p-8 text-center bg-white/[0.02] rounded-xl border border-white/5 text-slate-400 text-sm">
                      Không tìm thấy trích đoạn phù hợp với từ khóa "{verseSearch}". Thử nhập từ khác!
                    </div>
                  )}
              </div>
            )}

            {/* TAB 2: DETAILED ANALYSIS */}
            {activeTab === 'analysis' && (
              <div className="space-y-8">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#f39c12] mb-4">
                    Phân Tích Chi Tiết Từng Luận Điểm Chuyên Sâu
                  </h4>
                  <div className="space-y-6">
                    {work.keyAnalysis.map((item, i) => (
                      <div
                        key={i}
                        className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#e94560]/40 transition-all space-y-3.5 shadow-sm"
                      >
                        <h5 className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#e94560]/20 text-[#e94560] text-xs font-bold">
                            Luận điểm {i + 1}
                          </span>
                          <span>{item.heading}</span>
                        </h5>

                        <div className="text-slate-200 leading-relaxed pl-1 whitespace-pre-line">
                          {item.content}
                        </div>

                        {item.evidence && (
                          <div className="p-3.5 rounded-xl bg-black/30 border-l-3 border-[#f39c12] text-xs sm:text-sm text-amber-100/90 italic font-serif-literary">
                            <span className="font-sans font-semibold text-[#f39c12] not-italic block mb-1">
                              📌 Dẫn chứng tiêu biểu:
                            </span>
                            {item.evidence}
                          </div>
                        )}

                        {item.literaryCommentary && (
                          <div className="p-3.5 rounded-xl bg-white/[0.02] border-l-3 border-emerald-500 text-xs sm:text-sm text-slate-300">
                            <span className="font-semibold text-emerald-400 block mb-1">
                              💡 Bình luận & Nhận định nâng cao:
                            </span>
                            {item.literaryCommentary}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#f39c12] mb-3">
                    Đặc Sắc Giá Trị Nghệ Thuật &amp; Bút Pháp
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {work.artisticValues.map((art, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-gradient-to-r from-white/[0.04] to-transparent border-l-3 border-[#e94560] text-slate-200"
                      >
                        <span className="font-semibold text-[#e94560] mr-2">•</span>
                        {art}
                      </div>
                    ))}
                  </div>
                </div>

                {detailedLineItems.length > 0 && (
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-base sm:text-lg font-bold text-[#f39c12] mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#e94560]" />
                      <span>Bóc Tách Chuyên Sâu Từ Ngữ Đắt Giá &amp; Biện Pháp Tu Từ ({detailedLineItems.length} mục)</span>
                    </h4>
                    <div className="space-y-4">
                      {detailedLineItems.map((lineItem, idx) => (
                        <div
                          key={lineItem.id || idx}
                          className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3"
                        >
                          <div className="text-xs font-bold text-[#e94560] uppercase tracking-wider">
                            {lineItem.contextOrSection}
                          </div>
                          <blockquote className="p-3.5 rounded-xl bg-black/30 border-l-4 border-[#f39c12] text-amber-100 font-serif-literary italic whitespace-pre-line">
                            {lineItem.originalText}
                          </blockquote>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                              <strong className="text-amber-300 block mb-1">Giải mã từ ngữ &amp; hình ảnh:</strong>
                              <p className="text-slate-200">{lineItem.wordLevelAnalysis}</p>
                            </div>
                            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                              <strong className="text-purple-300 block mb-1">Biện pháp tu từ &amp; nghệ thuật:</strong>
                              <p className="text-slate-200">{lineItem.rhetoricalDevice}</p>
                            </div>
                          </div>
                          <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                            <strong className="text-emerald-300">Chiều sâu nội dung: </strong>
                            {lineItem.poeticInterpretation}
                          </div>
                          {lineItem.scholarlyInsight && (
                            <div className="text-xs text-amber-200/90 italic bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                              <strong className="not-italic text-amber-400">Bình giảng nâng cao 9+: </strong>
                              {lineItem.scholarlyInsight}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB: SCHOLARLY QUOTES & CRITIQUES */}
            {activeTab === 'scholarly' && work.scholarlyQuotes && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#f39c12] mb-2">
                    Nhận Định Của Các Nhà Phê Bình & Nghiên Cứu Văn Học
                  </h4>
                  <p className="text-xs text-slate-400 mb-4">
                    Vận dụng các nhận định sau vào phần Mở bài, Đánh giá hoặc Liên hệ mở rộng là "chìa khóa vàng" giúp bạn bứt phá thang điểm 9+:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {work.scholarlyQuotes.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#f39c12]/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2 text-[#f39c12] text-xs font-bold">
                          <Sparkles className="w-4 h-4 text-[#e94560]" />
                          <span>{item.critic}</span>
                        </div>
                        <div className="font-serif-literary text-sm sm:text-base text-white italic mb-4 leading-relaxed">
                          "{item.quote}"
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                        <span>Nhận định điểm 9+</span>
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(`"${item.quote}" - (${item.critic})`);
                            setSharedToast(true);
                            setTimeout(() => setSharedToast(false), 2000);
                          }}
                          className="text-[#e94560] hover:underline flex items-center gap-1 font-medium"
                        >
                          <Copy className="w-3 h-3" />
                          <span>Sao chép</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: GOLDEN QUOTES */}
            {activeTab === 'quotes' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  Những câu thơ, đoạn văn trích dẫn kinh điển hay được dùng làm dẫn chứng trong bài thi THPT QG:
                </p>

                <div className="space-y-3">
                  {work.quotes.map((q, i) => (
                    <div
                      key={i}
                      className="group p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#f39c12]/40 transition-all flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <Quote className="w-5 h-5 text-[#f39c12] shrink-0 mt-0.5" />
                        <div className="font-serif-literary text-sm sm:text-base text-amber-100/90 italic leading-relaxed whitespace-pre-line">
                          "{q}"
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleCopyQuote(q, i)}
                        className="shrink-0 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        title="Sao chép trích dẫn này"
                      >
                        {copiedQuoteIdx === i ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: ESSAY OUTLINE 8.5+ */}
            {activeTab === 'outline' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 flex-wrap gap-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#f39c12]">
                      Dàn Ý Nghị Luận Văn Học Điểm 8.5+ Chuẩn Barem Bộ GD&ĐT
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Đầy đủ 3 phần: Mở bài, Thân bài (các luận điểm chi tiết), Kết bài và nhận xét nâng cao
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyOutline}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#e94560] hover:bg-[#c73659] text-white shadow-md transition-all shrink-0"
                  >
                    {copiedOutline ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Đã sao chép dàn ý!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Sao chép toàn bộ dàn ý</span>
                      </>
                    )}
                  </button>
                </div>

                {/* AI Outline Assistant Banner */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#f39c12]/20 via-[#e94560]/20 to-purple-500/20 border-2 border-[#f39c12]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Trợ Lý Tra Cứu &amp; Thiết Kế Dàn Ý AI 9+</span>
                    </div>
                    <p className="text-xs text-slate-200">
                      Cần tra cứu thêm các đoạn trích khác của <strong>{work.title}</strong> hoặc muốn AI Gemini lập dàn ý độc quyền cho bất kỳ đề thi nào?
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenAiAssistant?.(work.id)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#f39c12] to-[#e67e22] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Tra Cứu Dàn Ý AI Ngay</span>
                  </button>
                </div>

                {/* I. Mở bài */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border-l-4 border-[#e94560]">
                  <h5 className="font-bold text-white mb-2 text-sm sm:text-base flex items-center gap-2">
                    <span className="text-[#e94560]">I.</span> MỞ BÀI (0.5 điểm)
                  </h5>
                  <p className="text-slate-300 leading-relaxed pl-4 font-sans text-xs sm:text-sm">
                    {work.essayOutline.introduction}
                  </p>
                </div>

                {/* II. Thân bài */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border-l-4 border-[#f39c12]">
                  <h5 className="font-bold text-white mb-3 text-sm sm:text-base flex items-center gap-2">
                    <span className="text-[#f39c12]">II.</span> THÂN BÀI (3.5 - 4.0 điểm)
                  </h5>
                  <div className="space-y-3.5 pl-4">
                    {work.essayOutline.body.map((item, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <strong className="text-amber-200 block mb-1">
                          {item.startsWith('1.') || item.startsWith('2.') || item.startsWith('3.') || item.startsWith('4.') || item.startsWith('5.') || item.startsWith('6.') || item.startsWith('7.')
                            ? item.slice(0, item.indexOf(':') > -1 ? item.indexOf(':') + 1 : 2)
                            : `Luận điểm ${idx + 1}:`}
                        </strong>
                        <p>{item.indexOf(':') > -1 ? item.slice(item.indexOf(':') + 1).trim() : item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* III. Kết bài */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border-l-4 border-emerald-500">
                  <h5 className="font-bold text-white mb-2 text-sm sm:text-base flex items-center gap-2">
                    <span className="text-emerald-400">III.</span> KẾT BÀI (0.5 điểm)
                  </h5>
                  <p className="text-slate-300 leading-relaxed pl-4 font-sans text-xs sm:text-sm">
                    {work.essayOutline.conclusion}
                  </p>
                </div>

                {/* Điểm sáng tạo 9.5 */}
                {work.essayOutline.bonusPoints && (
                  <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 text-xs sm:text-sm">
                    <strong className="text-purple-300 block mb-1">
                      ⭐ Điểm sáng tạo nâng cao (Dành cho thang điểm 9.5+):
                    </strong>
                    <p className="text-slate-300 leading-relaxed">
                      {work.essayOutline.bonusPoints}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* TAB 5: EXAM PROMPTS */}
            {activeTab === 'exam' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  Các dạng đề thi tốt nghiệp THPT và đề thi thử hay ra đối với tác phẩm{' '}
                  <strong className="text-white">{work.title}</strong>:
                </p>

                <div className="space-y-3">
                  {work.examPrompts.map((prompt, i) => (
                    <div
                      key={i}
                      className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#e94560]/40 transition-all flex items-start gap-3"
                    >
                      <span className="w-7 h-7 rounded-full bg-[#e94560]/20 text-[#e94560] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        Đề {i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="text-sm sm:text-base font-semibold text-white mb-2">
                          {prompt}
                        </div>
                        <div className="text-xs text-slate-400 leading-relaxed bg-white/[0.02] p-3 rounded-lg border border-white/5">
                          💡 <em>Gợi ý trọng tâm:</em> Vận dụng dàn ý chi tiết tại tab "Dàn Ý 8.5+ Điểm" và kết hợp phân tích các trích dẫn vàng để làm sáng tỏ đề bài.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 6: KEYWORDS & MINDMAP */}
            {activeTab === 'keywords' && (
              <div className="space-y-6">
                <p className="text-xs text-slate-400">
                  Sơ đồ từ khóa then chốt để ghi nhớ nhanh tác phẩm trong 5 phút trước giờ thi:
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {work.keywords.map((kw, i) => (
                    <div
                      key={i}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#e94560]/15 to-[#f39c12]/15 border border-[#e94560]/30 text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-sm"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#f39c12]" />
                      <span>{kw}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 mt-4">
                  <h5 className="font-semibold text-amber-300 text-sm mb-2">
                    📌 Mẹo ghi nhớ siêu tốc:
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Khi làm bài phân tích <strong>{work.title}</strong>, hãy đảm bảo bạn nhắc đến ít nhất 3 - 5 từ khóa cốt lõi ở trên trong các câu chủ đề của từng đoạn văn thân bài. Điều này giúp giám khảo nhận diện ngay thí sinh nắm rất vững bản chất nghệ thuật của tác phẩm!
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer with quick developer credit & navigation actions */}
        <div className="p-3.5 px-6 border-t border-white/10 bg-[#16213e]/80 shrink-0">
          <div
            className={
              isFullscreen
                ? 'max-w-6xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400'
                : 'flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400'
            }
          >
            <div>
              Biên soạn: <strong className="text-slate-200">Nguyễn Tùng Dương</strong> · Hotline/Zalo:{' '}
              <a href="tel:0326516500" className="text-[#e94560] font-semibold hover:underline">
                0326516500
              </a>
            </div>

            <div className="flex items-center gap-2">
              {(onNavigatePrev || onNavigateNext) && (
                <>
                  <button
                    type="button"
                    onClick={onNavigatePrev}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Bài trước</span>
                  </button>
                  <button
                    type="button"
                    onClick={onNavigateNext}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    <span>Bài sau</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </>
              )}

              <button
                type="button"
                onClick={() => {
                  handleStopAudio();
                  onClose();
                }}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-[#e94560] text-white transition-colors font-medium shadow-sm ml-2"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
