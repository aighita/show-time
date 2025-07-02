import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import {Calendar, Music, User} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
// import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function AppSidebar() {
    const items = [
        {title: "Bands", url: "/band", icon: Music},
        {title: "Festivals", url: "/festival", icon: Calendar},
    ];

    return (
        <SidebarProvider>
            <Sidebar
                className="border-r h-screen flex flex-col justify-between
             bg-[color:var(--sidebar)]
             text-[color:var(--sidebar-foreground)]
             transition-colors duration-300"
            >
                <img src='/images/show-time-poster.png' alt='Show Time'/>
                {/* Header */}
                <SidebarHeader className="px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Dashboard link */}
                        <a
                            href="/dashboard"
                            className="flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors"
                        >
                            <h1 className="text-lg font-bold text-foreground">Dashboard</h1>
                        </a>

                        {/* Avatar profile link */}
                        <a
                            href="/profile"
                            className="flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors"
                        >
                            <Avatar className="w-8 h-8">
                                <AvatarImage src="/images/user-avatar.jpg" alt="User"/>
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </a>
                    </div>
                </SidebarHeader>

                {/* Main Navigation */}
                <SidebarContent className="flex-1 overflow-auto">
                    <SidebarGroup>

                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a
                                                href={item.url}
                                                className="flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors"
                                            >
                                                <item.icon className="w-4 h-4"/>
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>

                {/* Footer */}
                <SidebarFooter className="px-4 py-3 space-y-3">
                    <SidebarMenu>

                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a
                                    href="/account"
                                    className="flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors"
                                >
                                    <User className="w-4 h-4"/>
                                    <span>Account</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>

                    <SidebarTrigger className="w-full btn btn-sm btn-muted">
                        Toggle
                    </SidebarTrigger>
                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
    );
}
