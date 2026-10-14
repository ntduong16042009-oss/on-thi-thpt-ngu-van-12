import type { IncomingMessage, ServerResponse } from 'http';
import { askQuestionService, setCorsHeaders } from '../_lib/gemini.ts';

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
    const { question, context = '' } = body;

    if (!question) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Vui lòng nhập câu hỏi.' }));
      return;
    }

    const answer = await askQuestionService(question, context);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        success: true,
        answer,
      })
    );
  } catch (error: any) {
    console.error('Ask Error:', error);
    const status = error.message?.includes('Chưa cấu hình GEMINI_API_KEY') ? 503 : 500;
    res.statusCode = status;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        error: error?.message || 'Lỗi khi phản hồi câu hỏi.',
      })
    );
  }
}
