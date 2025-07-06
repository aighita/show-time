// import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Progress} from "@/components/ui/progress";
import {Globe} from "lucide-react";

export default function UserDemographics() {
    return (
        <Card className="w-full">

            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5"/> User Demographics
                </CardTitle>
                <CardDescription>Overview of user distribution by region and device</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <Tabs defaultValue="region" className="w-full">
                    <TabsList className="w-full justify-start">
                        <TabsTrigger value="region">Region</TabsTrigger>
                        <TabsTrigger value="device">Device</TabsTrigger>
                    </TabsList>

                    <TabsContent value="region" className="space-y-4">
                        <div>
                            <p className="text-sm">Europe</p>
                            <Progress value={64} className="h-2"/>
                        </div>
                        <div>
                            <p className="text-sm">North America</p>
                            <Progress value={22} className="h-2"/>
                        </div>
                        <div>
                            <p className="text-sm">Asia</p>
                            <Progress value={14} className="h-2"/>
                        </div>
                    </TabsContent>

                    <TabsContent value="device" className="space-y-4">
                        <div>
                            <p className="text-sm">Mobile</p>
                            <Progress value={70} className="h-2"/>
                        </div>
                        <div>
                            <p className="text-sm">Desktop</p>
                            <Progress value={30} className="h-2"/>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
