import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";

export default function SignUp() {
    return (
        <div className="fixed inset-0 bg-black overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] w-full h-full">

                {/* Left: video + form */}
                <div className="relative w-full h-full">
                    {/* Background video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/videos/auth-background.webm"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"/>

                    {/* Form */}
                    <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
                        <Card
                            className="w-full max-w-md bg-white/0 border border-white/0 rounded-2xl">
                            <CardHeader className="text-center space-y-4">
                                {/*<div className="flex justify-center">*/}
                                {/*    <div className="h-10 w-10 rounded-full bg-white/80"/>*/}
                                {/*</div>*/}
                                <h1 className="text-white text-xl font-semibold">Welcome!</h1>
                                <CardTitle className="text-2xl font-semibold text-white">
                                    Create your free account
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-6 text-white">
                                {/* Email form */}
                                <div className="space-y-2">
                                    <Input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="bg-white/10 text-white placeholder-white/50 border border-white/20 focus:ring-2 focus:ring-white/30"
                                    />

                                    <div className="flex items-center space-x-2">
                                        <Separator className="flex-1 bg-white/20"/>
                                        <span className="text-xs text-white/60"></span>
                                        <Separator className="flex-1 bg-white/20"/>
                                    </div>

                                    <Button className="w-full bg-white text-black hover:bg-white/90">
                                        Continue
                                    </Button>
                                </div>

                                {/* Legal */}
                                <p className="text-xs text-white/50 text-center">
                                    By proceeding, you accept the{" "}
                                    <a href="#" className="underline hover:text-white">
                                        Terms
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="underline hover:text-white">
                                        Privacy Policy
                                    </a>.
                                </p>

                                {/* Login link */}
                                <p className="text-sm text-center text-white/80">
                                    Already have an account?{" "}
                                    <a href="/signin" className="underline font-medium hover:text-white">
                                        Sign In
                                    </a>
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Right: static image */}
                <a href="/">
                    <div className="hidden md:block w-full h-full">

                        <img
                            src="/images/show-time-poster.png"
                            alt="Show Time Poster"
                            className="w-full h-full object-cover"
                        />

                    </div>
                </a>
            </div>
        </div>
    );
}
