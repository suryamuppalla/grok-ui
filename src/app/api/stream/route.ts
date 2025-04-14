import { NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import readline from 'readline';

export async function GET(req: NextRequest) {
    const filePath = path.join(process.cwd(), 'public', 'data', 'stream-response-clean.ndjson');

    try {
        const stream = new ReadableStream({
            async start(controller) {
                const fileStream = fs.createReadStream(filePath, 'utf-8');
                const rl = readline.createInterface({
                    input: fileStream,
                    crlfDelay: Infinity,
                });

                for await (const line of rl) {
                    const trimmed = line.trim();
                    if (!trimmed || !trimmed.startsWith('{')) continue;

                    try {
                        // Make sure it's valid JSON before sending
                        JSON.parse(trimmed);
                        controller.enqueue(new TextEncoder().encode(trimmed + '\n'));

                        // Simulate streaming delay
                        await new Promise(resolve => setTimeout(resolve, 10));
                    } catch (err) {
                        console.warn('⛔ Invalid JSON skipped:', trimmed);
                        continue;
                    }
                }

                controller.close();
            },
        });

        return new Response(stream, {
            headers: {
                'Content-Type': 'application/json',
                'Transfer-Encoding': 'chunked',
                'Cache-Control': 'no-cache',
            },
        });
    } catch (error) {
        console.error('[Stream API error]', error);
        return new Response('Internal Server Error: Unable to read file', { status: 500 });
    }
}
