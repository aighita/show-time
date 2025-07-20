"use client";

import {Book, Menu, Sunset, Trees, Zap} from "lucide-react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";
import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

export default function Navbar() {
    const logo = {
        url: "https://www.showtime.com",
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
        alt: "logo",
        title: "Show Time",
    };

    const menu: MenuItem[] = [
        {title: "Home", url: "#"},
        {
            title: "Products",
            url: "#",
            items: [
                {
                    title: "Blog",
                    description: "The latest industry news, updates, and info",
                    icon: <Book className="size-5 shrink-0"/>,
                    url: "#",
                },
                {
                    title: "Company",
                    description: "Our mission is to innovate and empower the world",
                    icon: <Trees className="size-5 shrink-0"/>,
                    url: "#",
                },
                {
                    title: "Careers",
                    description: "Browse job listing and discover our workspace",
                    icon: <Sunset className="size-5 shrink-0"/>,
                    url: "#",
                },
                {
                    title: "Support",
                    description: "Get in touch with our support team or visit our forums",
                    icon: <Zap className="size-5 shrink-0"/>,
                    url: "#",
                },
            ],
        },
        {
            title: "Resources",
            url: "#",
            items: [
                {
                    title: "Help Center",
                    description: "Get all the answers you need right here",
                    icon: <Zap className="size-5 shrink-0"/>,
                    url: "#",
                },
                {
                    title: "Contact Us",
                    description: "We are here to help you with any questions you have",
                    icon: <Sunset className="size-5 shrink-0"/>,
                    url: "#",
                },
                {
                    title: "Status",
                    description: "Check the current status of our services and APIs",
                    icon: <Trees className="size-5 shrink-0"/>,
                    url: "#",
                },
                {
                    title: "Terms of Service",
                    description: "Our terms and conditions for using our services",
                    icon: <Book className="size-5 shrink-0"/>,
                    url: "#",
                },
            ],
        },
        {title: "Pricing", url: "#"},
        {title: "Blog", url: "#"},
    ];

    const auth = {
        login: {title: "Login", url: "/login"},
        signup: {title: "Sign up", url: "/signup"},
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Left side logo */}
                <a href={logo.url} className="flex items-center gap-2">
                    {/*<img src={logo.src} alt={logo.alt} className="h-8 w-8"/>*/}
                    <span className="text-lg font-semibold tracking-tight">
            {logo.title}
          </span>
                </a>

                {/* Desktop nav */}
                {/*<nav className="hidden lg:flex items-center gap-6">*/}
                {/*    <NavigationMenu>*/}
                {/*        <NavigationMenuList>*/}
                {/*            {menu.map((item) => renderMenuItem(item))}*/}
                {/*        </NavigationMenuList>*/}
                {/*    </NavigationMenu>*/}
                {/*</nav>*/}

                {/* Auth buttons */}
                <div className="hidden lg:flex gap-2">
                    <Button variant="ghost" asChild size="sm">
                        <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild size="sm">
                        <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <Menu className="h-5 w-5"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64">
                        <SheetHeader>
                            <SheetTitle>
                                <a href={logo.url} className="flex items-center gap-2">
                                    <img src={logo.src} alt={logo.alt} className="h-8 w-8"/>
                                    <span className="text-lg font-semibold">
                    {logo.title}
                  </span>
                                </a>
                            </SheetTitle>
                        </SheetHeader>

                        <Accordion type="single" collapsible className="mt-6">
                            {menu.map((item) => renderMobileMenuItem(item))}
                        </Accordion>

                        <div className="mt-6 flex flex-col gap-3">
                            <Button variant="outline" asChild>
                                <a href={auth.login.url}>{auth.login.title}</a>
                            </Button>
                            <Button asChild>
                                <a href={auth.signup.url}>{auth.signup.title}</a>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}

function renderMenuItem(item: MenuItem) {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    {item.items.map((subItem) => (
                        <NavigationMenuLink asChild key={subItem.title}>
                            <SubMenuLink item={subItem}/>
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }
    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className="inline-flex h-10 items-center px-4 py-2 text-sm font-medium hover:text-accent-foreground"
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}

function renderMobileMenuItem(item: MenuItem) {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                    <div className="flex flex-col gap-3">
                        {item.items.map((subItem) => (
                            <SubMenuLink key={subItem.title} item={subItem}/>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        );
    }
    return (
        <a key={item.title} href={item.url} className="block py-2 text-sm font-medium">
            {item.title}
        </a>
    );
}

function SubMenuLink({item}: { item: MenuItem }) {
    return (
        <a
            href={item.url}
            className="flex items-start gap-3 rounded-md px-3 py-2 hover:bg-muted"
        >
            {item.icon && <div className="text-muted-foreground">{item.icon}</div>}
            <div>
                <div className="font-semibold text-sm">{item.title}</div>
                {item.description && (
                    <p className="text-muted-foreground text-xs leading-tight">
                        {item.description}
                    </p>
                )}
            </div>
        </a>
    );
}
