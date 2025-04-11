import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Sparkles, ChevronDown, Lightbulb, LightbulbIcon } from "lucide-react"

export function SearchBox() {
    const [search, setSearch] = useState("")
    const [deepOption, setDeepOption] = useState("DeepSearch")
    const [model, setModel] = useState("GPT-4")
    const [isThinking, setIsThinking] = useState(false)
    const [popoverOpen, setPopoverOpen] = useState(false)

    const handleDeepToggle = () => {
        setIsThinking(false)
        setDeepOption((prev) => (prev ? "" : "DeepSearch"))
    }

    const handleDeepOptionSelect = (option: string) => {
        setIsThinking(false)
        setDeepOption(option)
        setPopoverOpen(false)
    }

    const handleThinkToggle = () => {
        setIsThinking((prev) => {
            const next = !prev
            if (next) setDeepOption("")
            return next
        })
    }

    return (
        <div className="relative w-full max-w-2xl">
            <div className="relative flex flex-col items-center">
        <textarea
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Ask me anything..."
            rows={4}
            className="w-full text-lg px-5 py-4 rounded-2xl resize-none border border-input bg-background placeholder:text-muted-foreground/70 shadow-sm focus:outline-none focus:ring-0 transition-colors"
        />

                <div className="absolute bottom-3 left-3 flex gap-2 items-center">
                    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                    if ((e.target as HTMLElement).closest(".dropdown-icon")) {
                                        setPopoverOpen(true)
                                    } else {
                                        handleDeepToggle()
                                    }
                                }}
                                className={`rounded-xl border border-input shadow-sm flex items-center gap-1 transition-colors focus-visible:ring-2 focus-visible:ring-ring ${deepOption ? 'text-primary' : ''}`}
                            >
                                {deepOption || 'Deep Options'}
                                <ChevronDown className={`w-4 h-4 dropdown-icon transition-transform ${popoverOpen ? 'rotate-180' : ''}`} />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="z-[50] min-w-[18rem] max-w-md rounded-xl shadow-md p-3 space-y-2">
                            {[
                                {
                                    label: "DeepSearch",
                                    description: "A standard deep dive into your query."
                                },
                                {
                                    label: "DeeperSearch",
                                    description: "An even more thorough investigation."
                                }
                            ].map((option) => (
                                <div
                                    key={option.label}
                                    onClick={() => handleDeepOptionSelect(option.label)}
                                    className={`cursor-pointer p-2 rounded-md hover:bg-muted transition ${deepOption === option.label ? 'bg-muted' : ''}`}
                                >
                                    <div className="font-semibold">{option.label}</div>
                                    <div className="text-sm text-muted-foreground">{option.description}</div>
                                </div>
                            ))}
                        </PopoverContent>
                    </Popover>

                    <Button
                        variant="ghost"
                        size="sm"
                        className={`rounded-xl border border-input shadow-sm hover:bg-muted transition-colors flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-ring ${isThinking ? 'text-yellow-500' : ''}`}
                        onClick={handleThinkToggle}
                    >
                        {isThinking ? (
                            <LightbulbIcon className="w-5 h-5 animate-pulse fill-yellow-500 stroke-yellow-500" />
                        ) : (
                            <Lightbulb className="w-5 h-5 transition-colors" />
                        )}
                        Think
                    </Button>
                </div>

                <div className="absolute bottom-3 right-3 flex gap-2 items-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="rounded-xl shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring">
                                {model} <ChevronDown className="ml-1 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="rounded-xl shadow-md z-[50]">
                            <DropdownMenuItem onClick={() => setModel("GPT-3.5")} className="rounded-xl">GPT-3.5</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setModel("GPT-4")} className="rounded-xl">GPT-4</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setModel("Claude")} className="rounded-xl">Claude</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        size="sm"
                        disabled={!search.trim()}
                        className="rounded-xl shadow-sm bg-primary hover:bg-primary/90 transition focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        <Sparkles className="w-4 h-4 mr-1" /> Send
                    </Button>
                </div>
            </div>
        </div>
    )
}
