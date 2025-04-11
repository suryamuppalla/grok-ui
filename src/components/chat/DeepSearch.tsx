import { ScrollArea } from "@/components/ui/scroll-area"
import { CircleCheck, ArrowRight, Globe, Search } from "lucide-react"

export default function DeepSearch() {
    return (
        <div className="flex h-full w-full items-center justify-center text-foreground">
            <div className="relative w-full max-w-2xl flex border rounded-2xl overflow-hidden">
                {/* Sidebar */}
                <div className="w-64 p-4 border-r bg-gradient-to-b from-muted/30 to-muted/10 space-y-6">
                    <div className="space-y-1">
                        <div className="text-xs font-medium uppercase text-muted-foreground tracking-wide">Mode</div>
                        <div className="text-lg font-semibold text-primary">DeepSearch</div>
                        <div className="text-xs text-muted-foreground">⏱️ 19 seconds</div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-start gap-2 text-sm">
                            <CircleCheck className="w-4 h-4 text-green-500 mt-1" />
                            <span className="text-muted-foreground">Thinking</span>
                        </div>

                        <div className="flex items-start gap-2 text-sm">
                            <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
                            <span className="text-muted-foreground">Assessing user query</span>
                        </div>
                    </div>

                    <div className="h-[1px] bg-muted rounded-full my-2" />

                    <div className="text-xs text-muted-foreground italic">
                        DeepSearch performs multi-layered contextual analysis and fetches high-confidence sources.
                    </div>
                </div>

                {/* Main conversation */}
                <ScrollArea className="flex-1 space-y-4">
                    <div className="text-sm space-y-4">
                        <p className="px-6 pt-6">
                            Pretty open-ended. <strong>"Best"</strong> could mean quality of life, job prospects,
                            or cultural vibes, and that's tricky to pin down.
                        </p>

                        <div className="flex items-center gap-2 font-medium px-6">
                            <Search className="w-4 h-4 text-muted-foreground" />
                            Searching for <strong>"best city in India"</strong>
                        </div>

                        <div className="text-muted-foreground text-sm px-6">10 results found</div>

                        <ul className="pl-10 pr-6 list-disc space-y-1">
                            <li>
                                <a href="#" className="underline underline-offset-2">List of cities in India by population - Wikipedia</a>
                            </li>
                            <li>
                                <a href="#" className="underline underline-offset-2">20 Best Places(Cities) to Live in India 2024 - sobha.com</a>
                            </li>
                            <li>
                                <a href="#" className="underline underline-offset-2">20 Best Cities to Live in India 2025 - godrejproperties.com</a>
                            </li>
                            <li>
                                <a href="#" className="underline underline-offset-2">12 Best Cities to Live in India 2025 [UPDATED LIST] - nobroker.in</a>
                            </li>
                            <li>
                                <a href="#" className="underline underline-offset-2">10 Most Livable Cities in India in 2024 - magicbricks.com</a>
                            </li>
                            <li className="text-muted-foreground">See more (5)</li>
                        </ul>

                        <div className="flex items-start gap-2 px-6">
                            <Globe className="w-4 h-4 text-muted-foreground mt-1" />
                            <span>
                I'm checking web search results for lists of best cities in India,
                focusing on livability and quality of life — amenities, infrastructure,
                and economic opportunities.
              </span>
                        </div>

                        <div className="flex items-start gap-2 px-6 pb-6">
                            <Globe className="w-4 h-4 text-muted-foreground mt-1" />
                            <span>
                Browsing <a href="#" className="text-primary underline">magicbricks.com</a> for
                <strong> "top 10 most livable cities in India according to Ease of Living Index"</strong>
              </span>
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}
