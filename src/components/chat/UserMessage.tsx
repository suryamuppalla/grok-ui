interface UserMessageProps {
    content: string
}

export default function UserMessage({ content }: UserMessageProps) {
    return (
        <div className="flex justify-end">
            <div className="bg-black text-white px-4 py-3 rounded-xl max-w-lg">
                {content}
            </div>
        </div>
    )
}
