import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { cn } from "@lib/utils";
import { Toaster } from "@components/ui/sonner";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("http://localhost:3000"), // temporary

    title: {
        default: "Dev Along",
        template: "%s | Dev Along",
    },
    description:
        "Real-time collaborative coding platform for developers.",

    openGraph: {
        title: "Dev Along",
        description: "Real-time collaborative coding platform for developers.",
        url: "http://localhost:3000",
        siteName: "Dev Along",
        images: ["/og-image.png"],
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={cn(
                "h-full",
                "antialiased",
                geistSans.variable,
                geistMono.variable,
                "font-mono",
                jetbrainsMono.variable,
            )}
        >
            <body className="min-h-full flex flex-col">
                {children}
                <Analytics />
                <SpeedInsights />
                <Toaster />
            </body>
        </html>
    );
}
