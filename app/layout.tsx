import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PreloadResources } from "./preload";

export const metadata: Metadata = {
  metadataBase: new URL("https://datafish.vercel.app"),
  title: {
    default: "DataFish",
    template: "%s | DataFish",
  },
  description: "Push beyond the limitations of your data stack.",
  openGraph: {
    title: "DataFish",
    description: "Push beyond the limitations of your data stack.",
    url: "https://datafish.vercel.app",
    siteName: "DataFish",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Gaurav Calel",
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <PreloadResources />
        </main>
      </body>
    </html>
  );
}
