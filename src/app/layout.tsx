import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/provider/theme-provider";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export const metadata: Metadata = {
  title: "YM | Portfólio",
  description: "Hello, this is my portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ScrollProgress />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
