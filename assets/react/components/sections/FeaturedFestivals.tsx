import {Calendar, MapPin} from "lucide-react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";

export interface Festival {
    id: number;
    name: string;
    location: string;
    startDate: string;
    endDate: string;
}

interface FeaturedFestivalsProps {
    festivals: Festival[];
}

export function FeaturedFestivals({festivals}: FeaturedFestivalsProps) {
    return (
        <section className="w-full py-16 bg-muted/50">
            <div className="container px-4 mx-auto space-y-12">
                <div className="max-w-2xl mx-auto text-center space-y-2">
                    <h2 className="text-3xl font-bold">Featured Festivals</h2>
                    <p className="text-muted-foreground text-sm">
                        A curated selection of standout upcoming events.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {festivals.map((festival) => (
                        <Card key={festival.id}
                              className="overflow-hidden py-4 rounded-xl bg-background shadow-sm transition hover:shadow-md">
                            <CardHeader className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold">{festival.name}</h3>
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center gap-2">
                                    <Calendar className="h-4 w-4"/>
                                    <span>{festival.startDate} – {festival.endDate}</span>
                                </div>
                                <div className="text-sm text-muted-foreground flex items-center gap-2">
                                    <MapPin className="h-4 w-4"/>
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
