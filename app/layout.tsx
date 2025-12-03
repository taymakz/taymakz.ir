import type { Metadata } from "next";
import "../styles/globals.css";
import { fontVariables } from "@/lib/fonts";
import Providers from "@/providers";
import AppHeader from "@/components/app-header";

const appTitle = "Taymaz Akbari";
const appDescription =
  "Portfolio of Taymaz Akbari, a passionate Software Engineer who loves building engaging web applications. Creator of Studenthub and Cafify.";
const appAuthor = "Taymaz Akbari";
const appUrl = "https://taymakz.ir";
const appKeywords = [
  "Taymaz Akbari",
  "Software Engineer",
  "Studenthub",
  "دانشجویار",
  "Cafify",
  "کافیفای",
  "Blesser",
  "قالب بلسر",
  "Rotikala",
  "قالب روتیکالا",
];

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: appTitle,
  description: appDescription,
  keywords: appKeywords,
  authors: [{ name: appAuthor }],
  openGraph: {
    title: appTitle,
    description: appDescription,
    url: appUrl,
    type: "website",
    siteName: appTitle,
    locale: "en",
  },
  twitter: {
    title: appTitle,
    description: appDescription,
    card: "summary_large_image",
    creator: "@taymakz",
  },
  robots: "index, follow",
  applicationName: appTitle,
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: appUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="theme-color" content="#D6D6D6" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#0f0f0d" media="(prefers-color-scheme: dark)" />

      <body className={`${fontVariables} antialiased font-sans`}>
        <Providers>
          <AppHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
