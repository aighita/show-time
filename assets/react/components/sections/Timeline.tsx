"use client";

import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface EventItem {
    title: string;
    date: string;
    time: string;
    location: string;
}

const upcomingEvents: EventItem[] = [
    {
        title: "Sunset Beats Festival",
        date: "July 20, 2025",
        time: "5:00 PM",
        location: "Bucharest, Romania",
    },
    {
        title: "Summer Pulse",
        date: "August 3, 2025",
        time: "6:30 PM",
        location: "Cluj Arena, Romania",
    },
    {
        title: "Nocturne Soundwave",
        date: "August 25, 2025",
        time: "9:00 PM",
        location: "Constanța Beach, Romania",
    },
];

export function Timeline() {
    return (
        <section className="w-full py-16 bg-muted/30">
            <div className="container px-4 mx-auto space-y-12">
                <div className="max-w-2xl mx-auto text-center space-y-2">
                    <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">
                        Upcoming Events
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base">
                        Mark your calendars — the best nights of the year are coming up.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {upcomingEvents.map((event, idx) => (
                        <Card
                            key={idx}
                            className="bg-background border border-border rounded-xl shadow-sm transition hover:shadow-md"
                        >
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">
                                    {event.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <CalendarIcon className="w-4 h-4" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ClockIcon className="w-4 h-4" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPinIcon className="w-4 h-4" />
                                    <span>{event.location}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
