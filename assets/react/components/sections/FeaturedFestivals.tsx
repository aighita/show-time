import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample data (replace with dynamic content later)
const festivals = [
    {
        name: "Sunset Vibes Festival",
        date: "August 10–12, 2025",
        location: "Barcelona, Spain",
        image: "/images/festival-1.jpg",
        genre: "Electronic",
    },
    {
        name: "Aurora Beats",
        date: "September 2–4, 2025",
        location: "Reykjavik, Iceland",
        image: "/images/festival-2.jpg",
        genre: "Techno",
    },
    {
        name: "Wild Bloom",
        date: "July 14–16, 2025",
        location: "Portland, USA",
        image: "/images/festival-3.jpg",
        genre: "Indie Rock",
    },
];

export function FeaturedFestivals() {
    return (
        <section className="w-full py-16 bg-muted/50">
            <div className="container px-4 mx-auto space-y-12">
                <div className="max-w-2xl mx-auto text-center space-y-2">
                    <h2 className="text-3xl font-bold">Featured Festivals</h2>
                    <p className="text-muted-foreground text-sm">
                        A curated selection of standout upcoming events.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {festivals.map((festival, index) => (
                        <Card key={index} className="overflow-hidden rounded-xl bg-background shadow-sm transition hover:shadow-md">
                            <img
                                src={festival.image}
                                alt={festival.name}
                                className="h-48 w-full object-cover"
                            />
                            <CardHeader className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">{festival.name}</h3>
                                    <Badge variant="outline" className="text-xs">{festival.genre}</Badge>
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{festival.date}</span>
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>{festival.location}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-primary hover:underline"
                                >
                                    View Details →
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
