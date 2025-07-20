import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

interface DashboardHeroProps {
    festivals: number;
    bands: number;
    bookings: number;
}

export default function DashboardHero({
                                          festivals,
                                          bands,
                                          bookings,
                                      }: DashboardHeroProps) {
    const stats = [
        {
            key: "festivals",
            title: "Festivals",
            value: festivals,
            href: "/admin/festivals",
        },
        {
            key: "bands",
            title: "Bands",
            value: bands,
            href: "/admin/bands",
        },
        {
            key: "bookings",
            title: "Bookings",
            value: bookings,
            href: "/admin/bookings",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
                <Card
                    key={stat.key}
                    className="flex flex-col justify-between rounded-2xl border shadow-md bg-card"
                >
                    <CardHeader>
                        <CardTitle className="text-lg">{stat.title}</CardTitle>
                        <CardDescription className="text-3xl font-bold text-foreground">
                            {stat.value}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p className="text-muted-foreground text-sm">
                            Total {stat.title.toLowerCase()} in the system
                        </p>
                        <a href={stat.href}>
                            <Button variant="outline" className="w-full text-sm">
                                Go to {stat.title}
                            </Button>
                        </a>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
