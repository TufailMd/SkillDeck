import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    icon: "/images/site-logo.svg",
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
    ],
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
      className={`${dmSans.variable} ${jetBrainsMono.variable} ${syne.variable} h-full antialiased dark`}
    >
      <body
        className="font-body-md antialiased bg-background text-on-surface 
          min-h-screen overflow-x-hidden selection:bg-primary-container 
          selection:text-on-primary-container"
      >
        {children}
      </body>
    </html>
  );
}
