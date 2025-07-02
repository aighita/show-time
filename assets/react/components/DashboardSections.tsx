import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {AspectRatio} from "@/components/ui/aspect-ratio";

const summaryImages: Record<string, string> = {
    festivals: "/images/festivals-card.png",
    bands: "/images/bands-card.png",
    bookings: "/images/bookings-card.png",
};

type DashboardSectionsProps = {
    festivals: number;
    bands: number;
    bookings: number;
};

export default function DashboardSections({
                                              festivals,
                                              bands,
                                              bookings,
                                          }: DashboardSectionsProps) {
    const stats = [
        {
            title: "Festivals",
            value: festivals,
            image: summaryImages.festivals,
        },
        {
            title: "Bands",
            value: bands,
            image: summaryImages.bands,
        },
        {
            title: "Bookings",
            value: bookings,
            image: summaryImages.bookings,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
                <Card
                    key={stat.title}
                    className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-md border bg-card"
                >
                    <AspectRatio ratio={16 / 9}>
                        <img
                            src={stat.image}
                            alt={stat.title}
                            className="w-full h-full object-cover"
                        />
                    </AspectRatio>

                    <CardHeader>
                        <CardTitle className="text-lg">{stat.title}</CardTitle>
                        <CardDescription className="text-4xl font-bold text-foreground">
                            {stat.value}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <p className="text-muted-foreground text-sm">
                            Total {stat.title.toLowerCase()} in the system
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
