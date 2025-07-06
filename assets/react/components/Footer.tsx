import {Facebook, Instagram, Twitter, Youtube} from "lucide-react";
import {Separator} from "@/components/ui/separator";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div
                className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                {/* Logo + Description */}
                <div className="space-y-3">
                    <h2 className="text-xl font-bold">ShowTime</h2>
                    <p className="text-muted-foreground">
                        Your gateway to unforgettable festivals and events across the globe.
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-muted-foreground font-semibold mb-3">Company</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Press</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="text-muted-foreground font-semibold mb-3">Support</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Help Center</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                        <li><a href="#" className="hover:underline">Terms & Privacy</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-muted-foreground font-semibold mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="#" aria-label="Facebook">
                            <Facebook className="w-5 h-5 hover:text-primary transition"/>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Instagram className="w-5 h-5 hover:text-primary transition"/>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <Twitter className="w-5 h-5 hover:text-primary transition"/>
                        </a>
                        <a href="#" aria-label="YouTube">
                            <Youtube className="w-5 h-5 hover:text-primary transition"/>
                        </a>
                    </div>
                </div>
            </div>

            <Separator/>

            <div
                className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground text-xs">
                © {new Date().getFullYear()} ShowTime. All rights reserved.
            </div>
        </footer>
    );
}
