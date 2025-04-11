interface AssistantMessageProps {
    content: string
}

export default function AssistantMessage({ content }: AssistantMessageProps) {
    return (
        <div className="flex justify-start">
            <div className="bg-muted text-foreground px-6 py-4 rounded-xl w-full">
                {content}
            </div>
        </div>
    )
}
