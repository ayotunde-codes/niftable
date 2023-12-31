import "./globals.css";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import cn from "classnames";
import localFont from "next/font/local";
import type { Metadata } from "next";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
    },
  ],
  variable: "--font-satoshi",
});
const MonumentExtended = localFont({
  src: [
    {
      path: "../public/fonts/MonumentExtended-Regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-monumentextended",
});

export const metadata: Metadata = {
  title: "Creon",
  description:
    "Creon is the world's first platform for Tokenizing AI blockchain projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/logo.svg" sizes="any" />
      </head>
      <body
        className={cn(satoshi.variable, MonumentExtended.variable, "relative")}
      >
        <div className="absolute bottom-0 left-0 w-full pointer-events-none h-[750px] sm:h-[950px]">
          <div className="w-full h-full relative">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="/footer.mp4"
            >
              <source src="/footer.mp4" type="video/mp4" />
            </video>
            <div className="darkOverlay"></div>
            <div className="darkOverlay"></div>
            <div className="coloredOverlay-2 "></div>
            <div className="darkOverlay"></div>
          </div>
        </div>
        <Header />
        <div className="bg-transparent relative">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
