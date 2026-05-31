import type { Metadata } from "next";
// Google fonts removed due to network errors
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { RecaptchaProvider } from "@/components/providers/RecaptchaProvider";

const inter = { variable: "--font-inter" };
const poppins = { variable: "--font-poppins" };

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://punithanfly.com"),
  title: {
    default: "Punithan Drone Pilot | DGCA Approved Drone Services in Chennai",
    template: "%s | Punithan Drone Pilot",
  },
  description:
    "Professional DGCA approved drone pilot services in Chennai, Tamil Nadu. Aerial photography, videography, survey & mapping, industrial inspection, construction monitoring, and real estate marketing.",
  keywords: [
    "drone pilot Chennai",
    "DGCA approved drone services",
    "aerial photography Tamil Nadu",
    "drone videography India",
    "construction drone monitoring",
    "real estate drone photography",
    "industrial drone inspection",
    "survey mapping drone",
    "professional drone services",
    "drone pilot India",
  ],
  authors: [{ name: "Punithan Drone Pilot" }],
  creator: "Punithan Drone Pilot",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Punithan Drone Pilot",
    title: "Punithan Drone Pilot | DGCA Approved Drone Services",
    description:
      "Elevating Perspectives, Delivering Results. Professional drone services for aerial photography, videography, mapping, and inspections in Chennai.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Punithan Drone Pilot - DGCA Approved Drone Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Punithan Drone Pilot | DGCA Approved Drone Services",
    description:
      "Professional drone pilot services in Chennai - Aerial Photography, Videography, Survey & Mapping",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="font-sans bg-white text-gray-900">
        <RecaptchaProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieConsent />
        </RecaptchaProvider>
      </body>
    </html>
  );
}
