// Local-only preview, including the serverless explainer route. No account bypass.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { POST, GET } from '../api/explain.js';
const root = path.resolve(new URL('../dist', import.meta.url).pathname);
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.jpg': 'image/jpeg' };
const port = Number(process.env.PORT || 4173);
http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://127.0.0.1:${port}`);
    if (url.pathname === '/api/explain' && req.method === 'GET') {
      const response = await GET(new Request(url, { headers: req.headers }));
      res.writeHead(response.status, Object.fromEntries(response.headers)); res.end(await response.text()); return;
    }
    if (url.pathname === '/api/explain' && req.method === 'POST') {
      const chunks = []; let size = 0;
      for await (const chunk of req) { size += chunk.length; if (size > 260000) { res.writeHead(413, { 'content-type': 'application/json' }); res.end('{"error":"source_too_large"}'); return; } chunks.push(chunk); }
      const response = await POST(new Request(url, { method: 'POST', headers: req.headers, body: Buffer.concat(chunks) }));
      res.writeHead(response.status, Object.fromEntries(response.headers)); res.end(await response.text()); return;
    }
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
    const name = path.resolve(root, `.${decodeURIComponent(url.pathname)}`, url.pathname.endsWith('/') ? 'index.html' : '');
    if (!name.startsWith(`${root}/`)) { res.writeHead(403); res.end(); return; }
    const data = await readFile(name);
    res.writeHead(200, { 'content-type': `${types[path.extname(name)] || 'application/octet-stream'}; charset=utf-8`, 'cache-control': 'no-store' });
    res.end(req.method === 'HEAD' ? undefined : data);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(port, '127.0.0.1', () => console.log(`Local preview: http://127.0.0.1:${port}/explain/`));
