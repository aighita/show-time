import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import {Calendar, Home, Inbox, Settings,} from "lucide-react";

export function AppSidebar() {
    const items = [
        {title: "LandingPage", url: "/dashboard", icon: Home},
        {title: "Inbox", url: "#", icon: Inbox},
        {title: "Calendar", url: "#", icon: Calendar},
        {title: "Settings", url: "#", icon: Settings},
    ];

    return (
        <SidebarProvider>
            <Sidebar>
                <SidebarHeader>
                    <h2 className="text-lg font-bold">MyApp</h2>
                </SidebarHeader>

                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Main</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url} className="flex items-center gap-2">
                                                <item.icon/>
                                                <span>{item.title}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>

                <div className="flex flex-col">
                    <button className="btn btn-primary">One</button>
                    <button className="btn btn-secondary">Two</button>
                    <button className="btn btn-accent btn-outline">Three</button>

                    <button>One</button>
                    <button>Two</button>
                    <button>Three</button>
                </div>

                <SidebarFooter>
                    <SidebarTrigger className="m-2 p-2">Toggle</SidebarTrigger>
                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
    );
}
