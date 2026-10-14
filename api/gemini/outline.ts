import type { IncomingMessage, ServerResponse } from 'http';
import { generateOutlineService, setCorsHeaders } from '../_lib/gemini.ts';

// Helper to parse JSON body from incoming message if not pre-parsed
async function parseBody(req: any): Promise<any> {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return new Promise((resolve) => {
    let bodyStr = '';
    req.on('data', (chunk: any) => {
      bodyStr += chunk;
    });
    req.on('end', () => {
      try {
        resolve(bodyStr ? JSON.parse(bodyStr) : {});
      } catch {
        resolve({});
      }
    });
  });
}

export default async function handler(
  req: IncomingMessage & { body?: any },
  res: ServerResponse
) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  try {
    const body = await parseBody(req);
    const { prompt, workTitle, author, outlineType, customRequirements } = body;

    if (!prompt && !workTitle) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          error: 'Vui lòng cung cấp đề bài hoặc tên tác phẩm cần lập dàn ý.',
        })
      );
      return;
    }

    const outline = await generateOutlineService({
      prompt,
      workTitle,
      author,
      outlineType,
      customRequirements,
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        success: true,
        outline,
        model: 'gemini-3.8-flash',
      })
    );
  } catch (error: any) {
    console.error('Outline Error:', error);
    const status = error.message?.includes('Chưa cấu hình GEMINI_API_KEY') ? 503 : 500;
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        error: error?.message || 'Không thể tạo dàn ý với AI lúc này.',
      })
    );
  }
}
