// import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {BarChart2} from "lucide-react";

export default function UserFeedback() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BarChart2 className="w-5 h-5"/> User Feedback
                </CardTitle>
                <CardDescription>Recent comments and ratings from users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-muted-foreground text-sm">"Loved the festival interface. Booking was smooth!"</p>
                    <Separator/>
                </div>
                <div className="space-y-2">
                    <p className="text-sm font-medium">Jane Smith</p>
                    <p className="text-muted-foreground text-sm">"Please add dark mode. Night viewing is harsh right
                        now."</p>
                    <Separator/>
                </div>
                <div className="space-y-2">
                    <p className="text-sm font-medium">Anonymous</p>
                    <p className="text-muted-foreground text-sm">"Band discovery is excellent. More filters would
                        help."</p>
                    <Separator/>
                </div>
            </CardContent>
        </Card>
    );
}
