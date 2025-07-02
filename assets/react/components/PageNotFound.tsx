// 'use client';

import {Button} from "@/components/ui/button";
import {AlertTriangle, Home, LayoutDashboard} from "lucide-react";

export default function PageNotFound() {
    return (
        <div
            className="w-screen h-screen bg-background text-foreground flex flex-col items-center justify-center overflow-hidden px-6
                    fixed inset-0">
            {/* Icon */}
            <div
                className="flex items-center justify-center bg-destructive/10 text-destructive rounded-full p-4 mb-4 animate-bounce">
                <AlertTriangle className="h-10 w-10"/>
            </div>

            {/* Main Text */}
            <h1 className="text-6xl font-extrabold tracking-tight text-destructive">404</h1>
            <p className="text-xl font-semibold mt-2">There's no performance here.</p>
            <p className="text-muted-foreground text-center max-w-md mt-2">
                The page you're looking for doesn’t exist, has been moved, or never performed.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" asChild className="w-full sm:w-auto">
                    <a href="/" className="flex items-center gap-2">
                        <Home className="h-4 w-4"/> Home
                    </a>
                </Button>
                <Button variant="default" asChild className="w-full sm:w-auto">
                    <a href="/dashboard" className="flex items-center gap-2">
                        <LayoutDashboard className="h-4 w-4"/> Dashboard
                    </a>
                </Button>
            </div>

            {/* Subtle Background Text */}
            <div className="absolute bottom-10 text-muted-foreground text-xs opacity-40 select-none">
                Show Time © {new Date().getFullYear()}
            </div>
        </div>
    );
}
