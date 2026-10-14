import type { IncomingMessage, ServerResponse } from 'http';
import { getApiKey, setCorsHeaders } from './_lib/gemini.ts';

export default function handler(req: IncomingMessage, res: ServerResponse & { json?: (data: any) => void; status?: (code: number) => any }) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  const apiKey = getApiKey();
  const payload = {
    status: 'ok',
    hasApiKey: Boolean(apiKey),
    platform: 'vercel-serverless',
    timestamp: new Date().toISOString(),
  };

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}
