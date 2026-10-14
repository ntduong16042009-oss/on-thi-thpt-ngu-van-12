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
    <footer className="mt-20 bg-black/70 border-t-2 border-[#e94560]/60 backdrop-blur-md relative overflow-hidden">
      {/* Decorative top ambient bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Brand & School Project Info */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-[#e94560] via-[#f39c12] to-[#e94560] bg-clip-text text-transparent">
                📚 SẢN PHẨM HỌC TẬP SỐ · MÔN NGỮ VĂN
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 font-medium">
              <span>🏫 Trường THPT Yên Lãng</span>
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
                className="text-xs text-amber-400 hover:text-amber-300 underline font-semibold cursor-pointer inline-flex items-center gap-1"
              >
                ℹ️ Xem chi tiết thông tin sản phẩm số &amp; mục tiêu học tập
              </button>
            )}
          </div>

          {/* Teacher & Student Credits */}
          <div className="flex flex-col items-center space-y-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs text-slate-300 text-center space-y-1">
              <div>
                <span className="text-slate-400">Năm học:</span>{' '}
                <strong className="text-amber-300 font-bold">2026 – 2027</strong>
              </div>
              <div>
                <span className="text-slate-400">Giáo viên:</span>{' '}
                <strong className="text-white font-bold">Võ Thị Mỹ Ngà</strong>
              </div>
              <div>
                <span className="text-slate-400">Phát triển web:</span>{' '}
                <strong className="text-[#f39c12] font-bold">Nguyễn Tùng Dương</strong>{' '}
                <span className="text-slate-400">(12A4)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:0326516500"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#e94560] hover:bg-[#c73659] text-white text-xs font-bold shadow-[0_4px_15px_rgba(233,69,96,0.5)] transition-transform hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Hotline: 0326516500</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
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
