import React, { useState, useEffect, useMemo, useRef } from 'react';
import { WORKS_DATA, WorkItem } from './data/worksData';
import { WORK_EXPRESSION_SPECS } from './data/expressionSpecData';
import { CURRICULUM_LESSONS_DATA } from './data/curriculum12Data';
import { Header, AppNavTab } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/HeroSection';
import { FilterBar, GenreFilter, ExpressionModeFilter } from './components/FilterBar';
import { WorkCard } from './components/WorkCard';
import { WorkDetailModal } from './components/WorkDetailModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ContentExpressionSpecView } from './components/ContentExpressionSpecView';
import { CurriculumScheduleView } from './components/CurriculumScheduleView';
import { SampleExamsView } from './components/SampleExamsView';
import { ExamGuideView } from './components/ExamGuideView';
import { ComparisonView } from './components/ComparisonView';
import { QuizView } from './components/QuizView';
import { AiAssistantView } from './components/AiAssistantView';
import { MeditationMusicPlayer } from './components/MeditationMusicPlayer';
import { ThemeController } from './components/ThemeController';
import { ProjectInfoModal } from './components/ProjectInfoModal';
import {
  THEME_PRESETS,
  UserThemePreferences,
  DEFAULT_THEME_PREFS,
  isLightHexColor,
  hexToRgbString,
} from './data/themePresetsData';
import { Footer } from './components/Footer';
import { Bookmark, BookOpen } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFilter, setCurrentFilter] = useState<GenreFilter>('all');
  const [expressionFilter, setExpressionFilter] = useState<ExpressionModeFilter>('all');
  const [lessonFilter, setLessonFilter] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<AppNavTab>('works');
  const [isCatalogFocused, setIsCatalogFocused] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const worksCatalogRef = useRef<HTMLDivElement | null>(null);

  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('vanhoc12_saved');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<string>('overview');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isProjectInfoModalOpen, setIsProjectInfoModalOpen] = useState(false);

  // User theme & color preferences persisted in localStorage (defaulting to Literature Fantasy Academy)
  const [themePrefs, setThemePrefs] = useState<UserThemePreferences>(() => {
    try {
      const stored = localStorage.getItem('vanhoc12_theme_prefs_v2');
      if (stored) {
        return { ...DEFAULT_THEME_PREFS, ...JSON.parse(stored) };
      }
      return DEFAULT_THEME_PREFS;
    } catch {
      return DEFAULT_THEME_PREFS;
    }
  });

  // Apply dynamic CSS variables and attributes whenever themePrefs changes
  useEffect(() => {
    try {
      localStorage.setItem('vanhoc12_theme_prefs_v2', JSON.stringify(themePrefs));
    } catch {
      // ignore storage errors
    }

    const root = document.documentElement;
    const isLight = isLightHexColor(themePrefs.bgColor);
    const preset = THEME_PRESETS.find((p) => p.id === themePrefs.presetId);

    const textColor = preset
      ? preset.textColor
      : isLight
      ? '#0f172a'
      : '#f8fafc';
    const mutedColor = preset
      ? preset.mutedTextColor
      : isLight
      ? '#475569'
      : '#A3B1C6';

    root.style.setProperty('--theme-bg', themePrefs.bgColor);
    root.style.setProperty('--theme-surface', themePrefs.surfaceColor);
    root.style.setProperty('--theme-card', themePrefs.cardColor);
    root.style.setProperty('--theme-primary', themePrefs.primaryColor);
    root.style.setProperty(
      '--theme-primary-rgb',
      hexToRgbString(themePrefs.primaryColor, '217, 168, 78')
    );
    root.style.setProperty('--theme-secondary', themePrefs.secondaryColor);
    root.style.setProperty(
      '--theme-secondary-rgb',
      hexToRgbString(themePrefs.secondaryColor, '245, 213, 138')
    );
    root.style.setProperty('--theme-text', textColor);
    root.style.setProperty('--theme-muted', mutedColor);

    const scaleMap: Record<UserThemePreferences['fontScale'], string> = {
      sm: '95%',
      md: '100%',
      lg: '106%',
      xl: '112%',
    };
    root.style.setProperty('--theme-font-scale', scaleMap[themePrefs.fontScale] || '100%');

    root.setAttribute('data-theme-mode', isLight ? 'light' : 'dark');
    root.setAttribute('data-theme-font', themePrefs.fontFamily);
    root.setAttribute('data-ambient-glow', themePrefs.ambientGlow ? 'true' : 'false');
    root.setAttribute('data-high-contrast', themePrefs.highContrastBorders ? 'true' : 'false');
  }, [themePrefs]);

  const handleQuickSelectTheme = (presetId: string) => {
    const preset = THEME_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    setThemePrefs((prev) => ({
      ...prev,
      presetId: preset.id,
      bgColor: preset.bgColor,
      surfaceColor: preset.surfaceColor,
      cardColor: preset.cardColor,
      primaryColor: preset.primaryColor,
      secondaryColor: preset.secondaryColor,
    }));
  };

  // Read initial URL parameters for Ad Landing Page / Content Specification deep-linking
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab') as AppNavTab | null;
      if (tabParam && ['works', 'schedule', 'exams-bank', 'spec', 'exam', 'quiz', 'compare', 'ai'].includes(tabParam)) {
        setActiveTab(tabParam);
      }
      const genreParam = params.get('genre') as GenreFilter | null;
      if (
        genreParam &&
        ['all', 'tho', 'truyen', 'ky', 'kinh', 'chinhluan', 'nuocngoai'].includes(genreParam)
      ) {
        setCurrentFilter(genreParam);
      }
      const modeParam = params.get('mode') as ExpressionModeFilter | null;
      if (
        modeParam &&
        ['all', 'Biểu cảm', 'Tự sự', 'Nghị luận', 'Miêu tả', 'Thuyết minh'].includes(modeParam)
      ) {
        setExpressionFilter(modeParam);
      }
      const qParam = params.get('q');
      if (qParam) {
        setSearchTerm(qParam);
      }
      const workParam = params.get('work');
      if (workParam) {
        const found = WORKS_DATA.find((w) => w.id === workParam);
        if (found) setSelectedWork(found);
      }
    } catch {
      // Ignore URL parsing errors
    }
  }, []);

  // Keep URL query parameters synced for Google Ads / SEO Content Specification rules
  useEffect(() => {
    try {
      const params = new URLSearchParams();
      if (activeTab !== 'works') params.set('tab', activeTab);
      if (currentFilter !== 'all') params.set('genre', currentFilter);
      if (expressionFilter !== 'all') params.set('mode', expressionFilter);
      if (searchTerm.trim()) params.set('q', searchTerm.trim());
      if (selectedWork) params.set('work', selectedWork.id);
      const queryString = params.toString();
      const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
      window.history.replaceState(null, '', newUrl);
    } catch {
      // Ignore history replace errors in restricted iframes
    }
  }, [activeTab, currentFilter, expressionFilter, searchTerm, selectedWork]);

  // Sync saved to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('vanhoc12_saved', JSON.stringify(savedIds));
    } catch {
      // localStorage may fail in some environments
    }
  }, [savedIds]);

  // Monitor scroll for back-to-top button and catalog active highlight
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      if (activeTab === 'works' && worksCatalogRef.current) {
        const rect = worksCatalogRef.current.getBoundingClientRect();
        setIsCatalogFocused(rect.top <= 240);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  const handleToggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectWork = (work: WorkItem, initialTab = 'overview') => {
    setSelectedWork(work);
    setModalInitialTab(initialTab);
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToCatalog = () => {
    setActiveTab('works');
    setIsCatalogFocused(true);
    setTimeout(() => {
      if (worksCatalogRef.current) {
        worksCatalogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const handleGoHome = () => {
    setActiveTab('works');
    setShowSavedOnly(false);
    setIsCatalogFocused(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter and search logic (supporting both plain text and regular expressions)
  const filteredWorks = useMemo(() => {
    return WORKS_DATA.filter((work) => {
      // Filter by genre
      if (currentFilter !== 'all' && work.genre !== currentFilter) {
        return false;
      }

      // Filter by Lesson Unit (Bài 1 -> Bài 9)
      if (lessonFilter !== 'all') {
        const unit = CURRICULUM_LESSONS_DATA.find((u) => u.id === lessonFilter);
        if (unit) {
          const unitWorkIds = unit.rows.map((r) => r.workId).filter(Boolean);
          if (!unitWorkIds.includes(work.id)) {
            return false;
          }
        }
      }

      // Filter by Expression Mode (Phương thức biểu đạt)
      if (expressionFilter !== 'all') {
        const spec = WORK_EXPRESSION_SPECS[work.id];
        if (!spec) return false;
        const matchesPrimary = spec.primaryExpression === expressionFilter;
        const matchesCombined = spec.combinedExpressions.includes(expressionFilter);
        if (!matchesPrimary && !matchesCombined) {
          return false;
        }
      }

      // Filter by saved only
      if (showSavedOnly && !savedIds.includes(work.id)) {
        return false;
      }

      // Search term or Regular Expression (Biểu thức)
      if (searchTerm.trim()) {
        const rawQuery = searchTerm.trim();
        const spec = WORK_EXPRESSION_SPECS[work.id];
        const searchableCorpus = [
          work.title,
          work.author,
          work.summary,
          ...work.mainThemes,
          ...work.artisticValues,
          ...work.keywords,
          ...work.quotes,
          spec?.primaryExpression || '',
          ...(spec?.combinedExpressions || []),
          spec?.dominantTone || '',
          spec?.keyExpressionValue || '',
        ].join(' | ');

        try {
          const regex = new RegExp(rawQuery, 'i');
          return regex.test(searchableCorpus);
        } catch {
          return searchableCorpus.toLowerCase().includes(rawQuery.toLowerCase());
        }
      }

      return true;
    });
  }, [searchTerm, currentFilter, lessonFilter, expressionFilter, showSavedOnly, savedIds]);

  // Index of currently selected work for next/prev navigation
  const currentWorkIndex = selectedWork
    ? filteredWorks.findIndex((w) => w.id === selectedWork.id)
    : -1;

  const handleNavigateNext = () => {
    if (filteredWorks.length === 0) return;
    const nextIdx = currentWorkIndex < filteredWorks.length - 1 ? currentWorkIndex + 1 : 0;
    setSelectedWork(filteredWorks[nextIdx]);
  };

  const handleNavigatePrev = () => {
    if (filteredWorks.length === 0) return;
    const prevIdx = currentWorkIndex > 0 ? currentWorkIndex - 1 : filteredWorks.length - 1;
    setSelectedWork(filteredWorks[prevIdx]);
  };

  const headerElement = (
    <Header
      searchTerm={searchTerm}
      onSearchChange={setSearchTerm}
      activeTab={activeTab}
      onTabChange={(tab) => {
        setActiveTab(tab);
        if (tab !== 'works') {
          setShowSavedOnly(false);
        }
      }}
      savedCount={savedIds.length}
      showSavedOnly={showSavedOnly}
      onToggleSavedOnly={() => {
        setActiveTab('works');
        setShowSavedOnly((prev) => !prev);
        setTimeout(() => {
          worksCatalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
      }}
      onOpenThemeModal={() => setIsThemeModalOpen(true)}
      onOpenProjectInfo={() => setIsProjectInfoModalOpen(true)}
      onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
    />
  );

  return (
    <div className="min-h-screen bg-[#080D1C] text-[#f8fafc] flex flex-col font-sans selection:bg-[#D9A84E] selection:text-[#080D1C] pb-20 md:pb-0">
      {/* Fixed Left Sidebar (Desktop & Mobile Hamburger Drawer) */}
      <Sidebar
        activeTab={activeTab}
        isCatalogFocused={isCatalogFocused}
        onSelectHome={handleGoHome}
        onSelectCatalog={handleScrollToCatalog}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab !== 'works') {
            setShowSavedOnly(false);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
        isMobileDrawerOpen={isMobileSidebarOpen}
        onCloseMobileDrawer={() => setIsMobileSidebarOpen(false)}
        onOpenThemeModal={() => setIsThemeModalOpen(true)}
        onOpenProjectInfo={() => setIsProjectInfoModalOpen(true)}
      />

      {/* Right Content Workspace (Offset by Sidebar Width on Desktop) */}
      <div
        className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ${
          isSidebarCollapsed ? 'md:pl-[72px]' : 'md:pl-[198px]'
        }`}
      >
        {/* Top Header for non-Hero tabs (non-sticky, scrolls naturally with page) */}
        {activeTab !== 'works' && headerElement}

        {/* Main Page Content based on tab */}
        <main className="flex-1 pb-16 md:pb-0">
          {activeTab === 'works' && (
            <>
              {/* Fantasy Library Hero (with integrated topHeader) + 3 School Info Cards + Explore Section */}
              <HeroSection
                topHeader={headerElement}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                onSelectSuggestion={(kw) => {
                  setSearchTerm(kw);
                  handleScrollToCatalog();
                }}
                onStartCatalog={handleScrollToCatalog}
                onSelectTab={(tab) => {
                  setActiveTab(tab);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenSpecTab={() => {
                  setActiveTab('spec');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenScheduleTab={() => {
                  setActiveTab('schedule');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenExamsBankTab={() => {
                  setActiveTab('exams-bank');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenThemeModal={() => setIsThemeModalOpen(true)}
                activeThemeId={themePrefs.presetId}
                onQuickSelectTheme={handleQuickSelectTheme}
                onOpenProjectInfo={() => setIsProjectInfoModalOpen(true)}
              />

              {/* Catalog Section Anchor & Ornamental Header */}
              <div ref={worksCatalogRef} className="pt-4 sm:pt-6 scroll-mt-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#F5D58A] text-sm">✦</span>
                    <h2 className="text-xl sm:text-2xl font-bold font-display fantasy-gold-text">
                      Kho Tàng {WORKS_DATA.length} Tác Phẩm Văn Học Lớp 12 (Bài 1 – Bài 9)
                    </h2>
                  </div>
                  <span className="text-xs text-[#A3B1C6]">
                    Nhấn vào từng tác phẩm để xem phân tích chi tiết, từng câu thơ &amp; dàn ý 9+
                  </span>
                </div>

                {/* Filter Bar */}
                <FilterBar
                  currentFilter={currentFilter}
                  onFilterChange={setCurrentFilter}
                  currentExpressionFilter={expressionFilter}
                  onExpressionFilterChange={setExpressionFilter}
                  currentLessonFilter={lessonFilter}
                  onLessonFilterChange={setLessonFilter}
                  works={WORKS_DATA}
                  resultCount={filteredWorks.length}
                />

                {/* Works Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  {showSavedOnly && (
                    <div className="mb-4 p-3.5 rounded-2xl fantasy-glass flex items-center justify-between text-xs text-[#FFF6D6]">
                      <div className="flex items-center gap-2">
                        <Bookmark className="w-4 h-4 text-[#F5D58A] fill-current" />
                        <span>Đang lọc: Danh sách tác phẩm đã lưu để ôn tập ({filteredWorks.length})</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowSavedOnly(false)}
                        className="text-[#F5D58A] hover:underline font-semibold cursor-pointer"
                      >
                        Xem tất cả {WORKS_DATA.length} tác phẩm
                      </button>
                    </div>
                  )}

                  {filteredWorks.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredWorks.map((work) => (
                        <WorkCard
                          key={work.id}
                          work={work}
                          isSaved={savedIds.includes(work.id)}
                          onToggleSave={handleToggleSave}
                          onSelectWork={handleSelectWork}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="py-16 text-center fantasy-glass rounded-2xl max-w-md mx-auto p-8">
                      <BookOpen className="w-12 h-12 text-[#D9A84E] mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-white mb-1">Không tìm thấy tác phẩm phù hợp</h3>
                      <p className="text-xs text-slate-300 mb-4">
                        Thử thay đổi từ khóa / biểu thức tìm kiếm hoặc bỏ chọn các bộ lọc để xem đầy đủ {WORKS_DATA.length} tác phẩm.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSearchTerm('');
                          setCurrentFilter('all');
                          setLessonFilter('all');
                          setExpressionFilter('all');
                          setShowSavedOnly(false);
                        }}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-[#D9A84E] to-[#B88428] text-[#080D1C] text-xs font-bold shadow-md transition-colors cursor-pointer"
                      >
                        Xóa bộ lọc tìm kiếm
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Tab: Curriculum Schedule (Tác Phẩm Theo Bài 1-9) */}
          {activeTab === 'schedule' && (
            <CurriculumScheduleView onSelectWork={handleSelectWork} />
          )}

          {/* Tab: Dedicated Sample Exams & Frequently Tested Prompts */}
          {activeTab === 'exams-bank' && (
            <SampleExamsView onSelectWork={handleSelectWork} />
          )}

          {/* Tab: Content Specification & Literary Expression System */}
          {activeTab === 'spec' && (
            <ContentExpressionSpecView
              onSelectWork={handleSelectWork}
              onApplyMainFilter={(genre, query) => {
                const mappedGenre: GenreFilter =
                  genre === 'kich' ? 'kinh' : genre === 'chinh-luan' ? 'chinhluan' : genre;
                setCurrentFilter(mappedGenre);
                setSearchTerm(query);
                handleScrollToCatalog();
              }}
            />
          )}

          {/* Tab: Exam Guide View */}
          {activeTab === 'exam' && <ExamGuideView />}

          {/* Tab: Comparison Matrix View */}
          {activeTab === 'compare' && <ComparisonView />}

          {/* Tab: Interactive Quiz View */}
          {activeTab === 'quiz' && <QuizView />}

          {/* Tab: AI Literary Study Assistant */}
          {activeTab === 'ai' && <AiAssistantView />}
        </main>

        {/* Footer matching user's credits */}
        <Footer
          onNavTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onOpenProjectInfo={() => setIsProjectInfoModalOpen(true)}
        />
      </div>

      {/* Bottom-Right Floating Theme Controller & Scroll-To-Top */}
      <ThemeController
        isOpen={isThemeModalOpen}
        onOpen={() => setIsThemeModalOpen(true)}
        onClose={() => setIsThemeModalOpen(false)}
        prefs={themePrefs}
        onChangePrefs={setThemePrefs}
        showScrollTop={showScrollTop}
        onScrollToTop={handleScrollToTop}
      />

      {/* Detail Modal */}
      <WorkDetailModal
        work={selectedWork}
        isOpen={!!selectedWork}
        onClose={handleCloseModal}
        isSaved={selectedWork ? savedIds.includes(selectedWork.id) : false}
        onToggleSave={handleToggleSave}
        initialTab={modalInitialTab}
        onNavigateNext={handleNavigateNext}
        onNavigatePrev={handleNavigatePrev}
        currentIndex={currentWorkIndex >= 0 ? currentWorkIndex : 0}
        totalWorks={filteredWorks.length}
        onOpenAiAssistant={() => {
          setSelectedWork(null);
          setActiveTab('ai');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* SoundCloud Focus Music Player */}
      <MeditationMusicPlayer soundCloudUrl="https://on.soundcloud.com/fIlJ5PssbwN3d1S4rP" />

      {/* Mobile Bottom Navigation Bar (Docked at bottom of viewport on phones) */}
      <MobileBottomNav
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          if (tab !== 'works') {
            setShowSavedOnly(false);
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        savedCount={savedIds.length}
        showSavedOnly={showSavedOnly}
        onToggleSavedOnly={() => {
          setActiveTab('works');
          setShowSavedOnly((prev) => !prev);
        }}
        onOpenThemeModal={() => setIsThemeModalOpen(true)}
        onOpenProjectInfo={() => setIsProjectInfoModalOpen(true)}
      />

      {/* Project Information Modal */}
      <ProjectInfoModal
        isOpen={isProjectInfoModalOpen}
        onClose={() => setIsProjectInfoModalOpen(false)}
      />
    </div>
  );
}
