import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

export default function SignIn() {
    return (
        <div className="w-screen h-screen bg-black overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] w-full h-full">
                {/* Left: static image */}
                <a href="/">
                    <div className="hidden md:block w-full h-full">
                        <img
                            src="/images/show-time-poster.png"
                            alt="Show Time Poster"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </a>

                {/* Right: video + form */}
                <div className="relative w-full h-full">
                    {/* Background video */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
                        src="/videos/auth-background.webm"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"/>

                    {/* Form */}
                    <div className="relative z-10 flex h-full w-full items-center justify-center px-4">
                        <Card className="w-full max-w-md bg-white/0 border border-white/0 rounded-2xl">
                            <CardHeader className="text-center space-y-4">
                                <h1 className="text-white text-xl font-semibold">Welcome Back!</h1>
                                <CardTitle className="text-2xl font-semibold text-white">
                                    Sign in to your account
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-6 text-white">
                                {/* Social login */}
                                {/*<Button variant="outline" className="w-full bg-white text-black hover:bg-white/90">*/}
                                {/*    <span className="mr-2">🌐</span>*/}
                                {/*    Sign in with Google*/}
                                {/*</Button>*/}

                                {/* Separator */}
                                {/*<div className="flex items-center space-x-2">*/}
                                {/*    <Separator className="flex-1 bg-white/20"/>*/}
                                {/*    <span className="text-xs text-white/60">or</span>*/}
                                {/*    <Separator className="flex-1 bg-white/20"/>*/}
                                {/*</div>*/}

                                {/* Email login */}
                                <div className="space-y-2">
                                    <Input
                                        type="email"
                                        placeholder="Email address"
                                        className="bg-white/10 text-white placeholder-white/50 border border-white/20 focus:ring-2 focus:ring-white/30"
                                    />


                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        className="bg-white/10 text-white placeholder-white/50 border border-white/20 focus:ring-2 focus:ring-white/30"
                                    />

                                    <div className="flex items-center space-x-2">
                                        <Separator className="flex-1 bg-white/20"/>
                                        <span className="text-xs text-white/60"></span>
                                        <Separator className="flex-1 bg-white/20"/>
                                    </div>

                                    <Button className="w-full bg-white text-black hover:bg-white/90">
                                        Sign in
                                    </Button>
                                </div>

                                {/* Signup link */}
                                <p className="text-sm text-center text-white/80">
                                    Don't have an account?{" "}
                                    <a href="/signup" className="underline font-medium hover:text-white">
                                        Sign up
                                    </a>
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
