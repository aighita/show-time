// assets/components/dashboard/DashboardSummary.tsx
import React from "react";

interface DashboardSummaryProps {
    totalBands: number;
    totalFestivals: number;
    upcomingFestivals: number;
    bookingsThisMonth: number;
}

export default function DashboardSummary({
                                             totalBands,
                                             totalFestivals,
                                             upcomingFestivals,
                                             bookingsThisMonth,
                                         }: DashboardSummaryProps) {
    const items = [
        {label: "Total Bands", value: totalBands},
        {label: "Total Festivals", value: totalFestivals},
        {label: "Upcoming Festivals", value: upcomingFestivals},
        {label: "Bookings This Month", value: bookingsThisMonth},
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item) => (
                <div
                    key={item.label}
                    className="bg-card rounded-xl p-5 shadow-md space-y-1"
                >
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <h2 className="text-2xl font-bold">{item.value}</h2>
                </div>
            ))}
        </div>
    );
}
