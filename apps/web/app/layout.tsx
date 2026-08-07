import { ConvexProvider } from "@/components/convex-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@workspace/ui/components/sonner";
import "@workspace/ui/globals.css";
import { cn } from "@workspace/ui/lib/utils";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: { default: "Web", template: "%s ♡" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "antialiased")}>
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: "#3C82F6"
            }
          }}
        >
          <ConvexProvider>
            <ThemeProvider>
              {children}
              <Toaster />
            </ThemeProvider>
          </ConvexProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
