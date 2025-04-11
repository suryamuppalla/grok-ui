import {Plus} from "lucide-react";
import {Button} from "@/components/ui/button";


export default function NewChatButton() {
    return (
        <Button
            className="mb-4 ml-auto flex items-center gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md px-4 py-2 text-sm"
            onClick={() => console.log('Start new chat')} // replace with your logic
        >
            <Plus className="w-4 h-4" />
            New Chat
        </Button>
    )
}
