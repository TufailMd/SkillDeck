import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const dmSans = localFont({
  src: "./fonts/DMSansVF.ttf",
  variable: "--font-dm-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});

const jetBrainsMono = localFont({
  src: "./fonts/JetBrainsMonoVF.ttf",
  variable: "--font-jet-brains-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});

const syne = localFont({
  src: "./fonts/SyneVF.ttf",
  variable: "--font-syne",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Skill Deck - Next-Gen Learning",
  description:
    "A futuristic student learning dashboard with live course progress, activity tracking, and personalized insights.",

  icons: {
    icon: "/favicon.ico",
  },

  keywords: [
    "Skill Deck",
    "learning dashboard",
    "student platform",
    "online education",
    "course tracking",
    "edtech",
    "learning analytics",
    "study progress",
    "personalized learning",
    "next-gen education",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetBrainsMono.variable} ${syne.variable} h-full antialiased dark`}
    >
      <body
        className="font-body-md antialiased bg-background text-on-surface 
          min-h-screen overflow-x-hidden selection:bg-primary-container 
          selection:text-on-primary-container"
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
