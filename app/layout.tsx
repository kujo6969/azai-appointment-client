import Header from "@/components/Header";
import "./globals.css";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const fonts = localFont({
  src: [
    {
      path: "./fonts/evanescent.ttf",
      weight: "600",
    },
  ],
});

export const cinzel = localFont({
  src: [
    {
      path: "./fonts/Cinzel-Regular.otf",
      weight: "500",
    },
  ],
});
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
        cinzel.className,
        fonts.className,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex justify-center">
          <Header />
        </div>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
