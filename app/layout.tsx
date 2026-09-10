import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://nithishsubramaniyan.xyz"),
  title: "Nithish Subramaniyan — Backend & Cloud Engineer",
  description:
    "Backend engineer specializing in cloud-native systems, distributed architecture, serverless platforms, AWS, and production reliability.",
  keywords: [
    "Backend Engineer",
    "AWS Engineer",
    "Cloud Engineer",
    "Distributed Systems Engineer",
    "Serverless Engineer",
    "Product Engineer",
    "System Design Engineer",
  ],
  authors: [{ name: "Nithish Subramaniyan" }],
  openGraph: {
    title: "Nithish Subramaniyan — Backend & Cloud Engineer",
    description:
      "Cloud-native backend engineer focused on scalable systems, distributed architecture, event-driven platforms, and production reliability.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithish Subramaniyan — Backend & Cloud Engineer",
    description:
      "Cloud-native backend engineer focused on scalable systems, distributed architecture, event-driven platforms, and production reliability.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
