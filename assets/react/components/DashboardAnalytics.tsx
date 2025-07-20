// import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";
import {Separator} from "@/components/ui/separator";
import {ScrollArea} from "@/components/ui/scroll-area";

const revenueDataPlaceholder: revenueDataModel[] = [
    {month: "Jan", revenue: 12000},
    {month: "Feb", revenue: 15000},
    {month: "Mar", revenue: 18000},
    {month: "Apr", revenue: 20000},
    {month: "May", revenue: 22000},
    {month: "Jun", revenue: 17000},
];

const userDataPlaceholder: userDataModel[] = [
    {label: "Visitors", value: 920},
    {label: "New Users", value: 230},
    {label: "Bookings", value: 150},
    {label: "Cancellations", value: 12},
];

interface revenueDataModel {
    month: string;
    revenue: number;
}

interface userDataModel {
    label: string;
    value: number;
}

interface DashboardAnalyticsProps {
    revenueData: revenueDataModel;
    userData: userDataModel;
}

export default function DashboardAnalytics({revenueData, userData}: DashboardAnalyticsProps) {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {userDataPlaceholder.map((stat) => (
                    <Card key={stat.label} className="bg-card shadow-md">
                        <CardHeader>
                            <CardDescription>{stat.label}</CardDescription>
                            <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            <Separator/>

            <Tabs defaultValue="revenue" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="revenue">Revenue</TabsTrigger>
                    <TabsTrigger value="users">User Activity</TabsTrigger>
                </TabsList>

                <TabsContent value="revenue">
                    <Card className="bg-card">
                        <CardHeader>
                            <CardTitle>Revenue (last 6 months)</CardTitle>
                            <CardDescription>Track sales and income over time</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={revenueDataPlaceholder}>
                                    <XAxis dataKey="month" stroke="#888888" fontSize={12}/>
                                    <YAxis stroke="#888888" fontSize={12}/>
                                    <Tooltip/>
                                    <Bar dataKey="revenue" fill="#4f46e5" radius={[4, 4, 0, 0]}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="users">
                    <Card className="bg-card">
                        <CardHeader>
                            <CardTitle>Active Users</CardTitle>
                            <CardDescription>User metrics for recent activity</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[200px]">
                                <ul className="space-y-2">
                                    <li className="text-sm">• 230 new sign-ups this week</li>
                                    <li className="text-sm">• 150 bookings made</li>
                                    <li className="text-sm">• 12 cancellations</li>
                                    <li className="text-sm">• 920 unique visitors</li>
                                    <li className="text-sm">• Engagement up 15%</li>
                                    <li className="text-sm">• Bounce rate down 5%</li>
                                </ul>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
