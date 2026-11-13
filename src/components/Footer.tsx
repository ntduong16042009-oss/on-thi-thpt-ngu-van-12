import React, { useState } from 'react';
import { Phone, Copy, Check } from 'lucide-react';
import { AppNavTab } from './Header';

interface FooterProps {
  onNavTab?: (tab: AppNavTab) => void;
  onOpenProjectInfo?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavTab, onOpenProjectInfo }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('0326516500');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="mt-20 bg-[#050812]/90 border-t border-[#D9A84E]/40 backdrop-blur-md relative overflow-hidden">
      {/* Decorative top ambient bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Brand & School Project Info */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-xl font-bold font-display fantasy-gold-text">
                SẢN PHẨM HỌC TẬP SỐ · MÔN NGỮ VĂN 12
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#D9A84E]/10 border border-[#D9A84E]/35 text-xs text-[#F5D58A] font-medium">
              <span>Trường THPT Yên Lãng</span>
              <span className="text-slate-500">·</span>
              <span>Khóa: 2024 – 2027</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Dự án chuyển đổi số học liệu Ngữ Văn 12 — Tích hợp 35 tác phẩm, 32 chân dung tác giả, dàn ý 9+, ngân hàng đề thi chuẩn form tốt nghiệp THPT Quốc Gia và trắc nghiệm tương tác.
            </p>
            {onOpenProjectInfo && (
              <button
                type="button"
                onClick={onOpenProjectInfo}
                className="text-xs text-[#F5D58A] hover:text-white underline font-semibold cursor-pointer inline-flex items-center gap-1"
              >
                Xem chi tiết thông tin sản phẩm số &amp; mục tiêu học tập
              </button>
            )}
          </div>

          {/* Teacher & Student Credits */}
          <div className="flex flex-col items-center space-y-3 p-4 rounded-2xl fantasy-glass">
            <div className="text-xs text-slate-300 text-center space-y-1">
              <div>
                <span className="text-slate-400">Năm học:</span>{' '}
                <strong className="text-[#F5D58A] font-bold">2026 – 2027</strong>
              </div>
              <div>
                <span className="text-slate-400">Giáo viên:</span>{' '}
                <strong className="text-white font-bold">Võ Thị Mỹ Ngà</strong>
              </div>
              <div>
                <span className="text-slate-400">Phát triển web:</span>{' '}
                <strong className="text-[#F5D58A] font-bold">Nguyễn Tùng Dương</strong>{' '}
                <span className="text-slate-400">(12A4)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:0326516500"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0B1726] hover:bg-[#11233A] border border-[#27B98B]/60 text-[#27B98B] text-xs font-bold shadow-[0_4px_15px_rgba(39,185,139,0.25)] transition-transform hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Hotline: 0326516500</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-[#D9A84E]/30 transition-colors cursor-pointer"
                title="Sao chép số điện thoại"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
            <div className="text-[11px] text-slate-400 text-center">
              Phát triển web: Nguyễn Tùng Dương (12A4 THPT Yên Lãng)
            </div>
          </div>

          {/* Quick links & Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-2 text-xs text-slate-400">
            {onNavTab && (
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-slate-300">
                <button
                  onClick={() => onNavTab('works')}
                  className="hover:text-[#e94560] transition-colors cursor-pointer"
                >
                  Kho Tác Phẩm
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavTab('spec')}
                  className="hover:text-[#f39c12] text-amber-300 font-medium transition-colors cursor-pointer"
                >
                  Chỉ Định &amp; Biểu Thức
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavTab('exam')}
                  className="hover:text-[#e94560] transition-colors cursor-pointer"
                >
                  Bí Quyết 8+
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavTab('compare')}
                  className="hover:text-[#e94560] transition-colors cursor-pointer"
                >
                  So Sánh
                </button>
                <span>·</span>
                <button
                  onClick={() => onNavTab('quiz')}
                  className="hover:text-[#e94560] transition-colors cursor-pointer"
                >
                  Trắc Nghiệm
                </button>
              </div>
            )}
            <p>© 2026 – 2027 Trường THPT Yên Lãng</p>
            <p className="text-[11px] text-slate-400">
              Sản phẩm học tập số môn Ngữ Văn · Lớp 12A4
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
