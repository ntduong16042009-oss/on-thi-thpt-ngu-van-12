import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '10mb' }));

  const apiKey = process.env.GEMINI_API_KEY || '';
  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      hasApiKey: Boolean(apiKey),
      timestamp: new Date().toISOString(),
    });
  });

  // Dedicated AI Outline Generator & Lookup Endpoint
  app.post('/api/gemini/outline', async (req, res) => {
    try {
      const {
        prompt,
        workTitle = '',
        author = '',
        outlineType = 'standard',
        customRequirements = '',
      } = req.body;

      if (!prompt && !workTitle) {
        return res.status(400).json({
          error: 'Vui lòng cung cấp đề bài hoặc tên tác phẩm cần lập dàn ý.',
        });
      }

      if (!apiKey) {
        return res.status(503).json({
          error: 'Chưa cấu hình GEMINI_API_KEY trên máy chủ. Bạn có thể sử dụng kho 50+ dàn ý mẫu chuẩn sẵn có hoặc cấu hình API Key.',
        });
      }

      const systemInstruction = `Bạn là Chuyên gia Cố vấn Học tập & Luyện thi Ngữ Văn 12 xuất sắc hàng đầu Việt Nam, thành thạo cấu trúc đề thi tốt nghiệp THPT Quốc Gia môn Ngữ Văn chuẩn form Bộ Giáo dục & Đào tạo (Chương trình GDPT mới & hiện hành).

Mục tiêu của bạn:
Lập DÀN Ý VĂN HỌC ĐẠT ĐIỂM 9.0+ TOÀN DIỆN, HIỆN ĐẠI NHẤT, TỐI ƯU NHẤT, SẮC BÉN VÀ CỰC KỲ DỄ ÁP DỤNG THỰC CHIẾN.

Quy chuẩn cấu trúc bài phản hồi:
---
# 🎯 DÀN Ý 9+ CHUẨN FORM BỘ GD&ĐT: [Tên Đề Bài & Tác Phẩm]
*Định hướng:* Đạt điểm 8.75 - 9.5 | Thời gian làm bài kiến nghị: 70 - 80 phút

## 📌 I. MỞ BÀI (0.5 điểm) - 2 CÁCH MỞ BÀI GIÁN TIẾP ẤN TƯỢNG:
- **Cách 1 (Từ nhận định Lý luận văn học):** [Trích dẫn 1 câu lý luận đắt giá của M.Gorki, Nam Cao, Belinsky, Chế Lan Viên... -> Dẫn dắt vào tác giả, tác phẩm, trích dẫn vấn đề/đoạn thơ cần phân tích].
- **Cách 2 (Từ đề tài, thời đại & phong cách nghệ thuật):** [Dẫn dắt tự nhiên, nêu bật dấu ấn độc đáo của tác giả -> Nêu vấn đề và đoạn trích].

## 📌 II. THÂN BÀI (3.5 - 4.0 điểm):
### 1. Khái quát chung (0.5 điểm):
- Hoàn cảnh sáng tác, xuất xứ, vị trí đoạn trích trong chỉnh thể tác phẩm.
- Phong cách nghệ thuật tiêu biểu của tác giả và cảm hứng chủ đạo.

### 2. Hệ thống Luận điểm & Luận cứ chi tiết (2.5 - 3.0 điểm):
[Chia thành 2-4 Luận điểm rõ ràng. Mỗi Luận điểm phải có:
  + Luận cứ & Dẫn chứng văn bản cụ thể (câu thơ, chi tiết, từ ngữ vàng)
  + Phân tích, bình giảng chiều sâu nghệ thuật và nội dung tư tưởng
  + Câu chốt ý và nâng cao cảm xúc]

### 3. Đánh giá đặc sắc Nghệ thuật (0.5 điểm):
- Thể loại, bút pháp nghệ thuật chủ đạo (lãng mạn, hiện thực, sử thi, trào phúng...).
- Nghệ thuật xây dựng nhân vật / hình ảnh thơ / giọng điệu / ngôn ngữ / kết cấu.

### 4. Nhận xét nâng cao / Yêu cầu phụ để ăn trọn điểm 9+ (0.5 - 1.0 điểm):
- Chiều sâu tư tưởng nhân đạo, tinh thần yêu nước, trách nhiệm công dân hoặc thông điệp thời đại.
- **Liên hệ đối chiếu mở rộng:** So sánh với tác phẩm tương đồng cùng thời kỳ để khẳng định vị trí độc tôn của tác giả.

## 📌 III. KẾT BÀI (0.5 điểm):
- Khái quát lại giá trị tác phẩm và vấn đề nghị luận.
- Dư ba nghệ thuật và liên hệ bài học nhận thức, hành động cho thế hệ trẻ hôm nay.

## 🧠 SƠ ĐỒ TƯ DUY RÚT GỌN (MINDMAP 5 Ý THEN CHỐT):
[Gạch 5 đầu dòng ngắn gọn, cô đọng giúp học sinh thuộc ngay trong 5 phút trước giờ thi]

## 💡 HỘP TRI THỨC VÀNG (LÝ LUẬN VĂN HỌC & TRÍCH DẪN ÁP DỤNG):
- 2 nhận định lý luận văn học sát đề nhất kèm hướng dẫn áp dụng.
---

Quy tắc trình bày:
- Sử dụng tiếng Việt chuẩn mực, văn phong sư phạm truyền cảm, lập luận khúc chiết, giàu hình ảnh.
- Định dạng Markdown đẹp mắt, phân cấp tiêu đề, in đậm các từ khóa then chốt để dễ ghi nhớ.`;

      let promptModifier = '';
      if (outlineType === 'compare') {
        promptModifier = 'Yêu cầu đặc biệt: Đây là DẠNG ĐỀ SO SÁNH HAI ĐỐI TƯỢNG VĂN HỌC. Hãy bố cục rõ Luận điểm 1 (Đối tượng 1), Luận điểm 2 (Đối tượng 2), Luận điểm 3 (So sánh điểm tương đồng & khác biệt, lý giải nguyên nhân bằng hoàn cảnh và cá tính sáng tạo).';
      } else if (outlineType === 'theory') {
        promptModifier = 'Yêu cầu đặc biệt: Đây là DẠNG ĐỀ Ý KIẾN BÀN VỀ VĂN HỌC / LÝ LUẬN VĂN HỌC. Hãy bố cục: Giải thích nhận định -> Chứng minh qua tác phẩm -> Bình luận đánh giá giá trị khoa học của ý kiến.';
      } else if (outlineType === 'mindmap') {
        promptModifier = 'Yêu cầu đặc biệt: Nhấn mạnh phần SƠ ĐỒ TƯ DUY TỐI GIẢN (gạch đầu dòng phân nhánh khoa học) để ôn thi siêu tốc trong 10 phút.';
      } else if (outlineType === 'nlxh') {
        promptModifier = 'Yêu cầu đặc biệt: Đây là DÀN Ý ĐOẠN VĂN NGHỊ LUẬN XÃ HỘI 200 CHỮ liên hệ từ tư tưởng tác phẩm. Áp dụng chuẩn công thức G-B-C-P-R (Giải thích - Bàn luận - Chứng minh dẫn chứng thực tế - Phản biện - Bài học).';
      }

      const userMessage = `Hãy lập dàn ý điểm 9+ chi tiết và tối ưu nhất cho đề bài sau:
- Tác phẩm: ${workTitle || 'Theo đề bài'}
- Tác giả: ${author || 'Tương ứng'}
- Đề bài cụ thể: "${prompt}"
- Loại dàn ý: ${outlineType}
${promptModifier ? `- Hướng dẫn riêng: ${promptModifier}` : ''}
${customRequirements ? `- Yêu cầu thêm của học sinh: ${customRequirements}` : ''}`;

      let responseText = '';
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: userMessage,
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });
        responseText = response.text || '';
      } catch (firstErr: any) {
        console.warn('First attempt failed, retrying after 1s...', firstErr?.message);
        await new Promise((r) => setTimeout(r, 1000));
        const retryResponse = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: userMessage,
          config: {
            systemInstruction,
            temperature: 0.6,
          },
        });
        responseText = retryResponse.text || '';
      }

      return res.json({
        success: true,
        outline: responseText,
        model: 'gemini-3.8-flash',
      });
    } catch (error: any) {
      console.error('Gemini Outline Generation Error:', error);
      return res.status(500).json({
        error: error?.message || 'Không thể tạo dàn ý với AI lúc này. Vui lòng thử lại.',
      });
    }
  });

  // AI Chat & Literature Consultation Endpoint
  app.post('/api/gemini/ask', async (req, res) => {
    try {
      const { question, context = '' } = req.body;

      if (!question) {
        return res.status(400).json({ error: 'Vui lòng nhập câu hỏi.' });
      }

      if (!apiKey) {
        return res.status(503).json({
          error: 'Chưa cấu hình GEMINI_API_KEY. Vui lòng kiểm tra mục Settings > Secrets.',
        });
      }

      const systemInstruction = `Bạn là Trợ lý AI Ngữ Văn 12 Chuyên Sâu, hỗ trợ giải đáp mọi thắc mắc về phân tích tác phẩm, viết mở bài, câu hỏi phụ 1 điểm, dẫn chứng lý luận văn học và mẹo làm bài thi tốt nghiệp THPT Quốc Gia. Trả lời súc tích, lập luận sắc bén, chuẩn văn phong học thuật và có tính truyền cảm hứng cao.`;

      const contents = `Ngữ cảnh dàn ý hoặc tác phẩm học sinh đang xem:
"""
${context.slice(0, 3000)}
"""

Câu hỏi của học sinh:
"${question}"

Hãy trả lời chi tiết, dẫn chứng sắc bén và đưa ra gợi ý áp dụng ngay vào bài viết đạt điểm 9+.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return res.json({
        success: true,
        answer: response.text || '',
      });
    } catch (error: any) {
      console.error('Gemini Ask Error:', error);
      return res.status(500).json({
        error: error?.message || 'Lỗi khi phản hồi câu hỏi.',
      });
    }
  });

  // Serve static files in production or mount Vite middleware in development
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Fatal error starting server:', err);
});
