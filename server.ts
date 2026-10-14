import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  getApiKey,
  generateOutlineService,
  askQuestionService,
} from './api/_lib/gemini.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json({ limit: '10mb' }));

  const apiKey = getApiKey();

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
      console.error('Gemini Outline Generation Error:', error);
      const status = error.message?.includes('Chưa cấu hình GEMINI_API_KEY') ? 503 : 500;
      return res.status(status).json({
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

      const answer = await askQuestionService(question, context);

      return res.json({
        success: true,
        answer,
      });
    } catch (error: any) {
      console.error('Gemini Ask Error:', error);
      const status = error.message?.includes('Chưa cấu hình GEMINI_API_KEY') ? 503 : 500;
      return res.status(status).json({
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
