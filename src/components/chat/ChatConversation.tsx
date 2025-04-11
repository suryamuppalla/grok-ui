import { ScrollArea } from "@/components/ui/scroll-area"
import DeepSearch from "@/components/chat/DeepSearch";

const chatData = [
    {
        type: "user",
        message: "Best city in India"
    },
    {
        type: "assistant",
        message:
            "The \"best\" city in India depends on what you’re looking for—vibrant culture, economic opportunities, climate, or ease of living. Based on recent data and sentiment, here’s a breakdown:"
    },
    {
        type: "assistant",
        message: `\n\u2022 **Bangalore**: Often tops the list for its tech hub status, cosmopolitan vibe, and pleasant weather (20–30°C most of the year). It’s a magnet for startups and professionals, with a lively food and nightlife scene. However, traffic congestion and rising costs are downsides. Posts on X frequently praise its \"cool vibe\" but gripe about infrastructure.`
    },
    {
        type: "assistant",
        message: `\n\u2022 **Mumbai**: The financial capital, pulsating with energy, Bollywood, and diverse opportunities. It’s unmatched for ambition and nightlife but can feel chaotic, with high living costs and cramped spaces. X users often call it \"the city that never sleeps\" but warn about the grind.`
    },
    {
        type: "assistant",
        message: `\n\u2022 **Delhi**: Rich in history, with iconic landmarks like the Red Fort and vibrant markets. It’s a power center with great education and job prospects but struggles with pollution (AQI often 150–300) and safety concerns, especially for women. X chatter highlights its food but flags winter smog.`
    },
    {
        type: "assistant",
        message: `\n\u2022 **Pune**: A rising star for its balance of urban growth and laid-back charm. It’s got a strong IT sector, good universities, and proximity to hill stations like Lonavala. Weather’s mild, but infrastructure lags behind Bangalore. X buzz calls it \"underrated\" for livability.`
    },
    {
        type: "assistant",
        message: `\n\u2022 **Chennai**: Known for its cultural depth—think classical music and temples—plus a growing IT scene. It’s more affordable than Mumbai or Bangalore but can feel conservative, and summers are brutally hot (35–40°C). X users appreciate its \"grounded\" feel but note language barriers for non-Tamils.`
    }
]

export default function ChatConversation() {
    const userMessages = chatData.filter((msg) => msg.type === "user")
    const assistantMessages = chatData.filter((msg) => msg.type === "assistant")

    return (
        <div className="flex h-full w-full items-center justify-center text-foreground">
            <div className="w-full max-w-2xl">
                <ScrollArea className="px-6 py-8 space-y-8">
                    {userMessages.map((entry, idx) => (
                        <div key={idx} className="flex justify-end">
                            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-xl max-w-md shadow-sm border border-primary/30">
                                {entry.message}
                            </div>
                        </div>
                    ))}

                    <div className="mt-4">
                        <DeepSearch />
                    </div>

                    {/*<div className="w-full bg-background border border-muted rounded-xl p-6 shadow-sm text-sm leading-relaxed space-y-4 mt-4">

                    </div>*/}
                    <div className="mt-4">
                        {assistantMessages.map((entry, idx) => (
                            <div key={idx} className="space-y-4" dangerouslySetInnerHTML={{ __html: entry.message }} />
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}
