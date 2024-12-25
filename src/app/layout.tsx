import Footer from "./_components/footer"; 
import Header from "./_components/header"; 
import type { Metadata } from "next"; 
import { Inter, Plus_Jakarta_Sans } from "next/font/google"; 
import cn from "classnames"; 
import "./globals.css"; 

const inter = Inter({ subsets: ["latin"] }); 
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] }); 

export const metadata: Metadata = { 
  title: "Portfolio", 
  description: "Harikrishnan Portfolio - Full-Stack Developer", 
};

export default function RootLayout({
  children,work,
}: Readonly<{ children: React.ReactNode, work: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100..700&family=Outfit:wght@100..900&family=Silkscreen:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "font-sans text-neutral-900 dark:text-neutral-100",
          inter.className, 
          plusJakartaSans.className 
        )}
        style={{ fontFamily: "Josefin Sans, Outfit, Silkscreen, sans-serif" }} // Default font stack
      >
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
