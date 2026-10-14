import express, { Request, Response } from 'express';
import {
  getApiKey,
  generateOutlineService,
  askQuestionService,
  setCorsHeaders,
} from './_lib/gemini.ts';

const app = express();

app.use(express.json({ limit: '10mb' }));

// Apply CORS to all routes
app.use((req, res, next) => {
  setCorsHeaders(res);
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Health check endpoint (matches both /api/health and /health)
app.get(['/api/health', '/health'], (_req: Request, res: Response) => {
  const apiKey = getApiKey();
  return res.json({
    status: 'ok',
    hasApiKey: Boolean(apiKey),
    platform: 'vercel',
    timestamp: new Date().toISOString(),
  });
});

// Outline generator endpoint (matches both /api/gemini/outline and /gemini/outline)
app.post(['/api/gemini/outline', '/gemini/outline'], async (req: Request, res: Response) => {
  try {
    const { prompt, workTitle, author, outlineType, customRequirements } = req.body || {};

    if (!prompt && !workTitle) {
      return res.status(400).json({
        error: 'Vui lòng cung cấp đề bài hoặc tên tác phẩm cần lập dàn ý.',
      });
    }

    const outline = await generateOutlineService({
      prompt,
      workTitle,
      author,
      outlineType,
      customRequirements,
    });

    return res.json({
      success: true,
      outline,
      model: 'gemini-3.8-flash',
    });
  } catch (error: any) {
    console.error('Vercel Gemini Outline Error:', error);
    const status = error.message?.includes('Chưa cấu hình GEMINI_API_KEY') ? 503 : 500;
    return res.status(status).json({
      error: error?.message || 'Không thể tạo dàn ý với AI lúc này.',
    });
  }
});

// AI Chat question endpoint (matches both /api/gemini/ask and /gemini/ask)
app.post(['/api/gemini/ask', '/gemini/ask'], async (req: Request, res: Response) => {
  try {
    const { question, context = '' } = req.body || {};

    if (!question) {
      return res.status(400).json({ error: 'Vui lòng nhập câu hỏi.' });
    }

    const answer = await askQuestionService(question, context);

    return res.json({
      success: true,
      answer,
    });
  } catch (error: any) {
    console.error('Vercel Gemini Ask Error:', error);
    const status = error.message?.includes('Chưa cấu hình GEMINI_API_KEY') ? 503 : 500;
    return res.status(status).json({
      error: error?.message || 'Lỗi khi phản hồi câu hỏi.',
    });
  }
});

// Fallback for root API path
app.get(['/api', '/'], (_req: Request, res: Response) => {
  res.json({
    name: 'Sản Phẩm Học Tập Số Môn Ngữ Văn 12 - API',
    status: 'running',
    endpoints: ['/api/health', '/api/gemini/outline', '/api/gemini/ask'],
  });
});

export default app;
