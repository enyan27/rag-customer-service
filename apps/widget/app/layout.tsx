import { ConvexClientProvider } from "@/components/convex-client-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@workspace/ui/globals.css";
import { cn } from "@workspace/ui/lib/utils";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: { default: "Widget", template: "%s ♡" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "antialiased")}>
        <ConvexClientProvider>
          <ThemeProvider>
            <div className="w-screen h-screen">{children}</div>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
