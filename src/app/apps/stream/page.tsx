'use client';

import { useEffect, useState } from 'react';
import {HeaderSummaryMap} from "@/models/chat";
import DeepSearch from "@/components/chat/DeepSearch";

type StreamChunk = any; // you can make this more specific if needed

export default function StreamingClient() {
    const [chunks, setChunks] = useState<StreamChunk[]>([]);
    const [sections, setSections] = useState<HeaderSummaryMap[]>([]);

    useEffect(() => {
        const readStream = async () => {
            const res = await fetch('/api/stream');
            const reader = res.body?.getReader();
            const decoder = new TextDecoder('utf-8');
            let buffer = '';
            let currentHeader: string | null = null;

            while (reader) {
                const { value, done } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop() || '';

                for (const line of lines) {
                    if (!line.trim()) continue;
                    try {
                        const json = JSON.parse(line);
                        const tag = json?.result?.response?.messageTag;
                        const token = json?.result?.response?.token?.trim();

                        if (!token) continue;

                        if (tag === 'header') {
                            currentHeader = token;
                            setSections(prev => [...prev, { header: token, summaries: [] }]);
                        } else if (tag === 'summary' && currentHeader) {
                            setSections(prev =>
                                prev.map(section =>
                                    section.header === currentHeader
                                        ? { ...section, summaries: [...section.summaries, token] }
                                        : section
                                )
                            );
                        }
                    } catch (e) {
                        console.error('Parse error:', e);
                    }
                }
            }
        };

        readStream();
    }, []);

    return (
        <div className="">
            <h2 className="text-xl font-bold mb-2">Streaming Output</h2>
            <pre className="bg-white p-4 rounded">
            {/*{chunks.map((chunk, i) => (
                <div key={i}>{JSON.stringify(chunk, null, 2)}</div>
            ))}*/}

                <DeepSearch sections={sections} />
      </pre>
        </div>
    );
}
