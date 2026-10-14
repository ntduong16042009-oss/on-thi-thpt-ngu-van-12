import React from 'react';
import { X, GraduationCap, School, Calendar, Award, UserCheck, BookOpen, CheckCircle2, Sparkles, Phone, ExternalLink } from 'lucide-react';

interface ProjectInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectInfoModal: React.FC<ProjectInfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0f172a] border-2 border-amber-500/50 rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(245,166,35,0.25)] overflow-hidden my-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="relative bg-gradient-to-r from-amber-600 via-[#e94560] to-purple-700 p-5 sm:p-7 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20 pointer-events-none" />
          
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng bảng giới thiệu"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-200 border border-white/30 mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Sản Phẩm Học Tập Số · Môn Ngữ Văn</span>
          </div>

          <h2 id="project-modal-title" className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Trường THPT Yên Lãng
          </h2>
          <p className="text-amber-100 text-xs sm:text-sm font-medium mt-1">
            Dự Án Số Hóa Học Liệu &amp; Hệ Thống Ôn Thi Ngữ Văn Lớp 12
          </p>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar text-slate-200 text-sm">
          {/* Main Credentials 4-grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Trường & Khóa */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-white/10 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <School className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">Đơn vị &amp; Khóa học</span>
                <span className="font-bold text-white text-sm sm:text-base">Trường THPT Yên Lãng</span>
                <div className="text-xs text-amber-400 font-mono mt-0.5 font-medium">Khóa: 2024 – 2027</div>
              </div>
            </div>

            {/* Năm học & Môn */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-white/10 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">Năm học &amp; Bộ môn</span>
                <span className="font-bold text-white text-sm sm:text-base">Năm học: 2026 – 2027</span>
                <div className="text-xs text-emerald-400 font-medium mt-0.5">Môn: Ngữ Văn Lớp 12</div>
              </div>
            </div>

            {/* Giáo viên */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-pink-500/30 bg-pink-950/10 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-pink-300 block uppercase tracking-wider font-semibold">Giáo viên</span>
                <span className="font-bold text-white text-sm sm:text-base">Võ Thị Mỹ Ngà</span>
                <div className="text-xs text-slate-400 mt-0.5">Tổ Ngữ Văn — THPT Yên Lãng</div>
              </div>
            </div>

            {/* Phát triển web */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-amber-500/30 bg-amber-950/10 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] text-amber-300 block uppercase tracking-wider font-semibold">Phát triển web</span>
                <span className="font-bold text-amber-300 text-sm sm:text-base">Nguyễn Tùng Dương</span>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Học sinh lớp: 12A4 · Khóa 2024–2027</div>
              </div>
            </div>
          </div>

          {/* Mục tiêu & Ý nghĩa đề tài */}
          <div className="p-4 rounded-2xl bg-slate-800/50 border border-white/10 space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Mục tiêu &amp; Ý nghĩa của Sản Phẩm Học Tập Số</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Trang web được xây dựng như một <strong>Sản phẩm học tập số môn Ngữ Văn</strong> phục vụ học sinh lớp 12 nói chung và tập thể lớp <strong>12A4 THPT Yên Lãng</strong> nói riêng. Ứng dụng ứng dụng công nghệ thông tin vào giảng dạy và học tập, hỗ trợ quá trình chuẩn bị cho kỳ thi tốt nghiệp THPT Quốc Gia môn Ngữ Văn đạt kết quả cao nhất.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Số hóa trọn bộ 35 tác phẩm Văn học 12 (Bài 1 – Bài 9).</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Chân dung chuẩn 32 tác giả &amp; thông tin tiểu sử chi tiết.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Dàn ý nghị luận văn học &amp; xã hội chuẩn thang điểm 9+.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Ngân hàng đề thi thử, đề tham khảo chuẩn form Bộ GD&amp;ĐT.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Hệ thống trắc nghiệm kiến thức tương tác tự chấm điểm.</span>
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Tích hợp âm nhạc thư giãn / tập trung ôn bài SoundCloud.</span>
              </div>
            </div>
          </div>

          {/* Liên hệ học tập */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-amber-500/10 border border-amber-500/20 text-xs">
            <div>
              <span className="font-semibold text-white block">Cần hỗ trợ học tập hoặc góp ý nội dung?</span>
              <span className="text-slate-400 text-[11px]">Liên hệ người phát triển web: Nguyễn Tùng Dương (12A4)</span>
            </div>
            <a
              href="tel:0326516500"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#e94560] to-[#f39c12] hover:opacity-95 text-white font-bold inline-flex items-center gap-1.5 shadow-md shrink-0 transition-transform active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Gọi: 0326516500</span>
            </a>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-900 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Trường THPT Yên Lãng · Năm học 2026–2027
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
