import {SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";


export default function AppHeader() {

    return (
        <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-3">
                <SidebarTrigger/>
                <Separator orientation="vertical" className="mr-2 h-4"/>
            </div>
        </header>
    )
}
