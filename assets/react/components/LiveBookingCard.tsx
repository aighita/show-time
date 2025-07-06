// 'use client';

import {useEffect, useState} from 'react';
import {Card, CardContent, CardHeader} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import {Separator} from '@/components/ui/separator';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';
import {Badge} from '@/components/ui/badge';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {ScrollArea} from '@/components/ui/scroll-area';

interface Festival {
    name: string;
    location: string;
    startDate: string;
    endDate: string;
    bookingPrice: string;
}

interface Props {
    festival: Festival;
}

export default function LiveBookingCard({festival}: Props) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const nameInput = document.querySelector<HTMLInputElement>('input[name="booking[fullName]"]');
            const emailInput = document.querySelector<HTMLInputElement>('input[name="booking[email]"]');

            if (nameInput) setFullName(nameInput.value);
            if (emailInput) setEmail(emailInput.value);
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <TooltipProvider>
            <div
                className="w-full max-w-[520px] min-h-[640px] transition-transform duration-500 ease-out hover:scale-[1.01]">
                <Card className="bg-card text-card-foreground rounded-2xl shadow-2xl border overflow-hidden">
                    <CardHeader className="p-0">
                        <img
                            src="/images/show-time-poster.png"
                            alt="Show Time Poster"
                            className="w-full h-[220px] object-cover"
                        />
                    </CardHeader>

                    <CardContent className="p-8 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-semibold tracking-tight px-4">🎫 Festival Ticket</h2>
                            <Badge variant="secondary" className="text-sm">Live Preview</Badge>
                        </div>

                        <ScrollArea className="max-h-[320px] pr-2 space-y-5">
                            <div>
                                <Label className="text-sm text-muted-foreground">Name</Label>
                                <p className="text-base">{fullName || 'Your Name'}</p>
                            </div>

                            <div>
                                <Label className="text-sm text-muted-foreground">Email</Label>
                                <p className="text-base">{email || 'you@example.com'}</p>
                            </div>

                            <Separator/>

                            <div>
                                <Label className="text-sm text-muted-foreground">Festival</Label>
                                <p className="text-lg font-medium">{festival.name}</p>
                                <p className="text-sm text-muted-foreground">{festival.location}</p>
                            </div>

                            <div className="flex justify-between text-sm">
                                <div>
                                    <Label className="text-sm text-muted-foreground">Start</Label>
                                    <p>{festival.startDate}</p>
                                </div>
                                <div>
                                    <Label className="text-sm text-muted-foreground">End</Label>
                                    <p>{festival.endDate}</p>
                                </div>
                            </div>

                            <div>
                                <Label className="text-sm text-muted-foreground">Price</Label>
                                <p className="text-lg font-medium">{festival.bookingPrice} EUR</p>
                                {/*<p className="text-sm text-muted-foreground">{festival.location}</p>*/}
                            </div>

                            <Accordion type="single" collapsible>
                                <AccordionItem value="barcode">
                                    <AccordionTrigger className="text-base font-medium">
                                        Show Ticket Barcode
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div
                                            className="h-16 mt-2 bg-black w-full rounded-md flex items-end gap-[2px] p-1">
                                            {Array.from({length: 60}).map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="h-full bg-white"
                                                    style={{width: `${Math.random() < 0.5 ? 2 : 4}px`}}
                                                />
                                            ))}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </ScrollArea>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <p className="text-center text-sm text-muted-foreground italic pt-4 cursor-help">
                                    Not valid without confirmation
                                </p>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>This is a preview — not a valid entry pass.</p>
                            </TooltipContent>
                        </Tooltip>
                    </CardContent>
                </Card>
            </div>
        </TooltipProvider>
    );
}
