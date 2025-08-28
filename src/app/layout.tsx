import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/provider/theme-provider";

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
