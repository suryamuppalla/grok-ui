'use client'

import { SearchBox } from "@/components/SearchBox"
import ChatConversation from "@/components/chat/ChatConversation";
import AppHeader from "@/components/AppHeader";

export default function Page() {
    return (
        <>
            <AppHeader/>
            <main className="flex flex-col items-center justify-center min-h-[calc(100vh-7rem)] w-full px-4 mb-4">
                <ChatConversation/>
                <h1 className="text-3xl font-bold mb-6 text-center">
                    How can I help you today?
                </h1>
                <SearchBox/>
            </main>
        </>
    )
}
