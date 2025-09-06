import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Damilare's Portfolio",
  description: "Welcome to my portfolio website showcasing my projects and skills.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Damilare's Portfolio",
    description: "Welcome to my portfolio website showcasing my projects and skills.",
    url: "https://damilare-portfolio.vercel.app/",
    siteName: "Damilare's Portfolio",
    images: [
      {
        url: "/damilare.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damilare's Portfolio",
    description: "Welcome to my portfolio website showcasing my projects and skills.",
    images: ["/damilare.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`} >
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
