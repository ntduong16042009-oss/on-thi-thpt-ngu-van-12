import React from 'react';
import { Palette, ArrowUp } from 'lucide-react';
import { ThemeCustomizerModal } from './ThemeCustomizerModal';
import { UserThemePreferences } from '../data/themePresetsData';

interface ThemeControllerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  prefs: UserThemePreferences;
  onChangePrefs: React.Dispatch<React.SetStateAction<UserThemePreferences>>;
  showScrollTop: boolean;
  onScrollToTop: () => void;
}

export const ThemeController: React.FC<ThemeControllerProps> = ({
  isOpen,
  onOpen,
  onClose,
  prefs,
  onChangePrefs,
  showScrollTop,
  onScrollToTop,
}) => {
  return (
    <>
      {/* Bottom-Right Floating Action Cluster Matching Reference */}
      <div className="fixed bottom-20 md:bottom-5 right-3 sm:right-6 z-30 flex items-center gap-2.5">
        {showScrollTop && (
          <button
            type="button"
            onClick={onScrollToTop}
            aria-label="Cuộn lên đầu trang"
            title="Cuộn lên đầu trang"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-b from-[#17203B]/95 to-[#090D1C]/95 hover:from-[#D9A84E]/40 hover:to-[#8F6519]/40 text-[#F5D58A] border border-[#D9A84E]/60 hover:border-[#F5D58A] shadow-[0_6px_24px_rgba(0,0,0,0.7),0_0_16px_rgba(217,168,78,0.25)] flex items-center justify-center active:scale-95 transition-all cursor-pointer backdrop-blur-md"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        {/* Pill "Đổi Màu" Button Matching Bottom-Right of Reference Image */}
        <button
          type="button"
          onClick={onOpen}
          title="Đổi màu trang web theo sở thích (Học Viện Huyền Ảo, Sáng/Tối/Giấy cổ)"
          className="group flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#0B1021]/95 via-[#141D38]/95 to-[#0B1021]/95 hover:from-[#1D284D] hover:to-[#121931] text-[#FFF8E1] border border-[#D9A84E]/65 hover:border-[#F5D58A] shadow-[0_8px_28px_rgba(0,0,0,0.75),0_0_20px_rgba(217,168,78,0.28),inset_0_1px_0_rgba(255,248,225,0.25)] active:scale-95 transition-all text-xs sm:text-sm font-bold cursor-pointer backdrop-blur-md"
        >
          <Palette className="w-4 h-4 text-[#F5D58A] group-hover:rotate-12 transition-transform" />
          <span>Đổi Màu</span>
        </button>
      </div>

      {/* Theme Customizer Modal */}
      <ThemeCustomizerModal
        isOpen={isOpen}
        onClose={onClose}
        prefs={prefs}
        onChangePrefs={onChangePrefs}
      />
    </>
  );
};
