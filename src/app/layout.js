import React from "react";
import { Montserrat, Nunito } from "next/font/google";
import Script from "next/script";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Trupeakhealth",
  description: "Trupeak Health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${nunito.variable} font-sans antialiased`}>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4ZMFQQRJ76"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4ZMFQQRJ76');
          `}
        </Script>

        <meta
          name="google-site-verification"
          content="tH7jgl8nZxdHL0l2FJowHAUkOxp2lZUaUpCTiulzhSU"
        />

        <Navbar />
        {children}
        <Footer />

        {/* Scroll Animation Script */}
        
      </body>
    </html>
  );
}
