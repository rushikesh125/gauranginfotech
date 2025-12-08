import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Optimize font loading
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Gaurang Infotech | Smart IT Solutions & Digital Transformation",
  description: "Smart, scalable, and secure IT solutions for enterprises. Cloud computing, mining automation, and custom software development.",
  icons: {
    icon: "/favicon.ico", // Ensure you have a favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased selection:bg-indigo-100 selection:text-indigo-900`}>
        {/* Sticky Navbar */}
        <Navbar />
        
        {/* Main Page Content */}
        <main className="min-h-screen flex flex-col relative z-0">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
