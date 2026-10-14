# 📚 Sản Phẩm Học Tập Số Môn Ngữ Văn 12 - Hướng Dẫn Triển Khai Lên Vercel

Dự án học liệu số hóa ôn thi Ngữ Văn 12 (35 tác phẩm, 32 chân dung tác giả, 50+ dàn ý 9+, ngân hàng đề thi chuẩn Bộ GD&ĐT, trợ lý AI Gemini).

Dự án đã được cấu hình tối ưu 100% để triển khai (deploy) trực tiếp lên **Vercel**.

---

## 🚀 Cách 1: Triển khai qua GitHub (Khuyên dùng)

1. Đẩy (push) mã nguồn dự án lên kho chứa GitHub cá nhân của bạn:
   ```bash
   git init
   git add .
   git commit -m "feat: setup fullstack vercel deployment"
   git branch -M main
   git remote add origin <URL-GITHUB-CUA-BAN>
   git push -u origin main
   ```

2. Đăng nhập vào [Vercel Dashboard](https://vercel.com).
3. Nhấn nút **"Add New..."** ➔ **"Project"**.
4. Chọn repository GitHub vừa tạo và nhấn **"Import"**.
5. Cấu hình dự án trên Vercel:
   - **Framework Preset**: `Vite` *(Vercel tự động nhận diện qua `vercel.json`)*
   - **Build Command**: `vite build` (hoặc `npm run build`)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. *(Tùy chọn)* Cấu hình biến môi trường trong mục **Environment Variables**:
   - `GEMINI_API_KEY`: Khóa API Google Gemini của bạn (để kích hoạt tính năng tạo dàn ý AI và hỏi đáp AI thời gian thực).
7. Nhấn nút **"Deploy"** và chờ khoảng 30–60 giây để Vercel hoàn tất!

---

## ⚡ Cách 2: Triển khai nhanh bằng Vercel CLI

Nếu bạn đã cài sẵn Vercel CLI trên máy tính:

```bash
# 1. Cài đặt Vercel CLI (nếu chưa có)
npm i -g vercel

# 2. Đăng nhập tài khoản Vercel
vercel login

# 3. Triển khai dự án lên Production
vercel --prod
```

Làm theo hướng dẫn trên màn hình terminal:
- Link to existing project? ➔ `N`
- Project name: ➔ Enter (để mặc định hoặc đặt tên tùy ý)
- In which directory is your code located? ➔ `./`
- Want to modify settings? ➔ `N`

---

## ⚙️ Cấu hình đã được tích hợp sẵn

1. **`vercel.json`**:
   - Tự động định tuyến Single Page Application (SPA) về `/index.html` cho mọi URL tab deep-linking (`/?tab=quiz`, `/?tab=schedule`, v.v.).
   - Loại trừ `/api/*` để chuyển tiếp mượt mà vào hệ thống Serverless Functions.
   - Thêm headers cache `immutable` 1 năm cho assets tĩnh giúp tải trang siêu tốc trên mạng CDN toàn cầu của Vercel.
   - Hỗ trợ đầy đủ CORS cho các API endpoint.

2. **Serverless Functions (`/api`)**:
   - `/api/health`: Kiểm tra trạng thái hoạt động của hệ sinh thái.
   - `/api/gemini/outline`: Sinh dàn ý 9+ tự động theo chuẩn cấu trúc Bộ GD&ĐT bằng Gemini 3.8 Flash.
   - `/api/gemini/ask`: Giải đáp thắc mắc lý luận và phương pháp phân tích văn học.

3. **Cơ chế Fallback thông minh**:
   - Ngay cả khi chưa nhập `GEMINI_API_KEY`, ứng dụng vẫn hoạt động 100% trơn tru với kho 50+ dàn ý mẫu chuẩn chuyên gia biên soạn sẵn trong client, không bao giờ bị đơ hay báo lỗi gãy trang.
